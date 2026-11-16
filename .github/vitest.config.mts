import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/*.test.ts'],
    forceRerunTriggers: [
      '**/package.json',
      '**/*lock*',
      '**/tsconfig*.json',
      '**/{vitest,vite}.config.*',
      'pnpm-workspace.yaml',
      '.github/**',
      'scripts/**',
      'tests/fixtures/**',
      'tests/*fixture*',
      'src/runtime/skills/**',
      'src/**/*.json',
      'src/web/**',
      'desktop/ui/**',
      'desktop/scripts/build-ui.mjs',
      'public/**',
      'index.html',
    ],
  },
});
