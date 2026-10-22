import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, relative, resolve } from 'node:path';

const require = createRequire(import.meta.url);

function prepareDestination(projectRoot) {
    const parent = resolve(projectRoot, 'public/assets/apps/ztreak');
    const destination = resolve(parent, 'runtime');
    if (relative(parent, destination) !== 'runtime') throw new Error('Unexpected Ztreak runtime destination');
    if (existsSync(destination)) {
        const marker = join(destination, '.ztreak-runtime.json');
        if (!existsSync(marker) && readdirSync(destination).length) throw new Error('Refusing to replace an unrecognized runtime directory');
        if (existsSync(marker) && JSON.parse(readFileSync(marker, 'utf8')).package !== '@gamebob/ztreak') throw new Error('Unrecognized runtime owner');
        rmSync(destination, { recursive: true, force: true });
    }
    mkdirSync(destination, { recursive: true });
    return destination;
}

export function copyZtreakRuntime(projectRoot) {
    const source = dirname(require.resolve('@gamebob/ztreak/document'));
    const destination = prepareDestination(projectRoot);
    for (const name of ['index.html', 'ztreak.js', 'privacy.js', 'ztreak.css', 'chunks', 'icons', 'images']) {
        cpSync(join(source, name), join(destination, name), { recursive: true });
    }
    const { version } = JSON.parse(readFileSync(join(source, 'package.json'), 'utf8'));
    writeFileSync(join(destination, '.ztreak-runtime.json'), JSON.stringify({ package: '@gamebob/ztreak', version }) + '\n');
    writeFileSync(join(destination, '.npmignore'), '*\n');
    console.log('[@jjlmoya/apps] prepared @gamebob/ztreak ' + version + ' browser runtime');
}
