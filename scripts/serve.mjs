// Servidor local sin dependencias. Ctrl+C para detenerlo.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, relative, extname, isAbsolute } from 'node:path';
const project = fileURLToPath(new URL('../', import.meta.url));
const root = process.argv[2] === 'dist' ? resolve(project, 'dist') : project;
const port = Number(process.env.PORT || 4321);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.pdf': 'application/pdf' };
const server = http.createServer(async (request, response) => {
  try {
    let path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (path.endsWith('/')) path += 'index.html';
    const file = resolve(root, '.' + path);
    const local = relative(root, file);
    if (local.startsWith('..') || isAbsolute(local) || local.split(/[\\/]/).some(p => p.startsWith('.'))) {
      response.writeHead(403); return response.end();
    }
    const bytes = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    response.end(bytes);
  } catch {
    response.writeHead(404); response.end('Archivo no encontrado');
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? `Puerto ${port} ocupado. Detén el otro servidor con Ctrl+C.` : error.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => console.log(`Abre http://localhost:${port}. Guarda y recarga para ver cambios.`));
