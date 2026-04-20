import { readFileSync, writeFileSync, mkdirSync, readdirSync, cpSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const libDir = dirname(fileURLToPath(import.meta.url));

const inNodeModules = libDir.includes('node_modules');
if (!inNodeModules) process.exit(0);

const projectRoot = join(libDir, '../../../..');

const cssDestDir = join(projectRoot, 'public/styles/lib/apps');
mkdirSync(cssDestDir, { recursive: true });

const appsDir = join(libDir, '../src/app');
const appFolders = readdirSync(appsDir, { withFileTypes: true }).filter((d) => d.isDirectory());

for (const folder of appFolders) {
    const appDir = join(appsDir, folder.name);
    let cssFiles;
    try {
        cssFiles = readdirSync(appDir).filter((f) => f.endsWith('.css'));
    } catch {
        continue;
    }
    for (const file of cssFiles) {
        writeFileSync(join(cssDestDir, file), readFileSync(join(appDir, file)));
        console.log(`[@jjlmoya/apps] copied css: ${file}`);
    }
}

const assetsSource = join(libDir, '../public/assets/apps');
const assetsDest = join(projectRoot, 'public/assets/apps');

if (existsSync(assetsSource)) {
    mkdirSync(assetsDest, { recursive: true });
    cpSync(assetsSource, assetsDest, { recursive: true });
    console.log('[@jjlmoya/apps] copied assets/apps');
}
