import react from '@vitejs/plugin-react';
import * as fs from 'fs';
import * as path from 'path';
import { defineConfig } from 'vite';
import { watcher } from 'vite-plugin-filewatcher';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { default as tsconfigPaths } from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const root = process.cwd();
  const iconsDir = path.resolve(root, 'src/assets/icons');
  const imagesDir = path.resolve(root, 'src/assets/images');
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      createSvgIconsPlugin({
        iconDirs: [iconsDir],
        symbolId: 'icon-[name]',
      }),
      watcher({
        path: iconsDir,
        onChange: () => {
          const files = fs.readdirSync(iconsDir);
          const fileNameList = files.filter((item) => item.endsWith('.svg')).map((i) => i.split('.')[0]);
          const content = `// This file is generated automatically. Do not edit it manually. \n\nexport enum IconType {\n  ${fileNameList.map((i) => `${camelCased(i)} = '${i}'`).join(',\n ')}\n}\n`;
          fs.writeFile(path.resolve(iconsDir, 'types.ts'), content, () => {});
        },
      }),
      watcher({
        path: imagesDir,
        onChange: () => {
          const files = fs.readdirSync(imagesDir);
          const images = files.filter((item) => !item.startsWith('.') && !item.endsWith('.ts'));
          const content =
            '// This file is generated automatically. Do not edit it manually. \n\n' +
            images
              .map(
                (image) => `declare module 'assets/images/${image}' {\n\tconst src: string;\n\texport default src;\n}`,
              )
              .join('\n\n');
          fs.writeFile(path.resolve(imagesDir, 'types.d.ts'), content, () => {});
        },
      }),
    ],
  };
});

function camelCased(str: string) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}
