const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src');
const PATTERNS = [
  { name: '[CONFIRMAR]', regex: /\[CONFIRMAR[^\]]*\]/g },
  { name: '[NÚMERO]', regex: /\[NÚMERO\]/g },
];

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (/\.(ts|tsx|js|jsx|json|css|md)$/.test(file)) {
      results.push(fullPath);
    }
  }
  return results;
}

function main() {
  console.log('🔍 Escaneando src/ en busca de [CONFIRMAR] y [NÚMERO]...');
  const files = getFiles(SRC_DIR);
  const findings = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      for (const { name, regex } of PATTERNS) {
        // Reset regex state
        regex.lastIndex = 0;
        if (regex.test(line)) {
          findings.push({
            file: path.relative(path.resolve(__dirname, '..'), file),
            line: index + 1,
            pattern: name,
            snippet: line.trim(),
          });
        }
      }
    });
  }

  if (findings.length > 0) {
    console.error(`\n❌ Se encontraron ${findings.length} ocurrencias pendientes en el código de producción:\n`);
    for (const item of findings) {
      console.error(`  - ${item.file}:${item.line} [${item.pattern}]`);
      console.error(`    "${item.snippet}"\n`);
    }
    console.error('El pase a producción está bloqueado hasta que todas las afirmaciones técnicas y datos de contacto sean validados formalmente.');
    process.exit(1);
  } else {
    console.log('\n✓ Verificación exitosa: No se encontraron marcas [CONFIRMAR] ni [NÚMERO] en src/.');
    process.exit(0);
  }
}

main();
