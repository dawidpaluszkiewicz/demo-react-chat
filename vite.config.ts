import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'build',
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'voiceflow-webchat-plugin',
      fileName: 'bundle',
      formats: ['es'],
    },
  },
  define: {
    'import.meta.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  envPrefix: 'VF_',
  server: {
    port: 3006,
  },
});
