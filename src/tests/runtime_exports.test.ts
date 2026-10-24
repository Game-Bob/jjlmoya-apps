import { describe, expect, it } from 'vitest';
import { ALL_APP_ENTRIES } from '../data';
import type { AppDefinition } from '../types';

const landingModules = import.meta.glob('../app/*/landing.astro');
const runtimeModules = import.meta.glob('../app/*/index.ts', { eager: true });

function directoryFromPath(path: string): string {
    const match = path.match(/\.\.\/app\/([^/]+)\/(?:landing\.astro|index\.ts)$/);
    const directory = match?.[1];
    if (!directory) throw new Error(`Unexpected app module path: ${path}`);
    return directory;
}

function isAppDefinition(value: unknown): value is AppDefinition {
    return typeof value === 'object'
        && value !== null
        && 'entry' in value
        && 'LandingComponent' in value
        && typeof value.LandingComponent === 'function';
}

describe('isolated app runtime exports', () => {
    it('has exactly one runtime boundary for every landing directory', () => {
        const landingDirectories = Object.keys(landingModules).map(directoryFromPath).sort();
        const runtimeDirectories = Object.keys(runtimeModules).map(directoryFromPath).sort();

        expect(runtimeDirectories).toEqual(landingDirectories);

        for (const [path, moduleExports] of Object.entries(runtimeModules)) {
            const definitions = Object.values(moduleExports as Record<string, unknown>).filter(isAppDefinition);
            expect(definitions, `${path} must export exactly one AppDefinition`).toHaveLength(1);
            const definition = definitions[0];
            if (!definition) throw new Error(`Missing AppDefinition for ${path}`);
            expect(definition.entry.id).toBe(directoryFromPath(path));
        }
    });

    it('keeps data entries synchronized with discovered landings', () => {
        const landingDirectories = Object.keys(landingModules).map(directoryFromPath).sort();
        const entryIds = ALL_APP_ENTRIES.map(({ id }) => id).sort();

        expect(entryIds).toEqual(landingDirectories);
        for (const entry of ALL_APP_ENTRIES) {
            expect(entry).not.toHaveProperty('LandingComponent');
        }
    });
});
