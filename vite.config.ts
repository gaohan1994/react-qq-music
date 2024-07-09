import react from '@vitejs/plugin-react';
import * as fs from 'fs';
import * as path from 'path';
import { defineConfig } from 'vite';
import { watcher } from 'vite-plugin-filewatcher';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const root = process.cwd();
  const iconsDir = path.resolve(root, 'src/assets/icons');
  return {
    plugins: [
      react(),
      createSvgIconsPlugin({
        iconDirs: [iconsDir],
        symbolId: 'icon-[name]',
      }),
      watcher({
        path: iconsDir,
        onChange: () => {
          const files = fs.readdirSync(iconsDir);
          const fileNameList = files.filter((item) => item.endsWith('.svg')).map((i) => i.split('.')[0]);
          const content = `// This file is generated automatically. Do not edit it manually. \n\nexport enum IconType{\n  ${fileNameList.map((i) => `${camelCased(i)} = '${i}'`).join(',\n ')}\n}\n`;
          fs.writeFile(path.resolve(iconsDir, 'types.ts'), content, () => {});
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
