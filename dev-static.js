#!/usr/bin/env node

// Simple script to run Vite dev server for static portfolio
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Change to client directory and run vite
process.chdir(join(__dirname, 'client'));

const viteProcess = exec('npx vite --host 0.0.0.0 --port 5000', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(stdout);
  if (stderr) {
    console.error(stderr);
  }
});

viteProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

viteProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

process.on('SIGINT', () => {
  viteProcess.kill();
  process.exit();
});