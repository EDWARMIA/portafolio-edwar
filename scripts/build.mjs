// Genera la carpeta lista para publicar.
import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'src', 'public']) {
  await cp(join(root, name), join(output, name), { recursive: true });
}
console.log('Listo: publica el contenido de dist/.');
