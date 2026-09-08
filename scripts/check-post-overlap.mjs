#!/usr/bin/env node
// Confere se o post de LinkedIn e o de X da mesma entrega repetem frase.
// A trava 3 da especificacao proibe os dois canais entrarem pelo mesmo assunto
// na mesma semana, e a forma mais comum de quebrar isso e reaproveitar a
// abertura. Isto roda antes de agendar qualquer par.
//
// Uso: node scripts/check-post-overlap.mjs pares.json
// Formato: [{ "nome": "...", "linkedin": "...", "x": "..." }, ...]
// Sai com codigo 1 se achar frase repetida.

import { readFileSync } from 'node:fs';

// Comandos de instalacao e URLs sao carga util, nao retorica: repetir e certo.
const PAYLOAD = [/^npx\s/, /^git clone\s/, /^unzip\s/, /^cd\s/, /^\.venv\//, /^python3\s/];

const norm = (t) =>
  t
    .split('\n')
    .filter((l) => !PAYLOAD.some((p) => p.test(l.trim())))
    .join(' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .match(/[a-z0-9]+/g) || [];

const shingles = (t, n = 6) => {
  const w = norm(t);
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' '));
  return s;
};

const pares = JSON.parse(readFileSync(process.argv[2] || 'pares.json', 'utf8'));
let falhou = false;

for (const p of pares) {
  const a = shingles(p.linkedin);
  const b = shingles(p.x);
  const comuns = [...a].filter((s) => b.has(s));
  const abreLi = norm(p.linkedin).slice(0, 6).join(' ');
  const abreX = norm(p.x).slice(0, 6).join(' ');
  const mesmaAbertura = norm(p.linkedin).slice(0, 4).join(' ') === norm(p.x).slice(0, 4).join(' ');

  console.log(`\n${p.nome}`);
  console.log(`  LinkedIn abre: ${abreLi}...`);
  console.log(`  X abre:        ${abreX}...`);

  if (mesmaAbertura) {
    console.log('  FALHA: os dois canais abrem com a mesma frase.');
    falhou = true;
  }
  if (comuns.length) {
    console.log(`  FALHA: ${comuns.length} trecho(s) de 6 palavras repetidos fora da carga util:`);
    for (const c of comuns.slice(0, 6)) console.log(`    ${c}`);
    falhou = true;
  }
  if (!mesmaAbertura && !comuns.length) console.log('  ok, nenhuma frase repetida');
}

console.log(falhou ? '\nREPROVADO' : '\nAPROVADO');
process.exit(falhou ? 1 : 0);
