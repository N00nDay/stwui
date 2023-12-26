import fs from 'fs';

let pkg = fs.readFileSync('package.json', 'utf-8');
pkg = pkg.replace(/\/package\//g, '/');
pkg = JSON.parse(pkg);
const lc = fs.readFileSync('LICENSE', 'utf-8');
const cl = fs.readFileSync('CHANGELOG.md', 'utf-8');
const rm = fs.readFileSync('README.md', 'utf-8');

delete pkg.scripts['package'];
delete pkg.scripts['coverage'];
delete pkg.scripts['publish'];
delete pkg.scripts['prepare'];
delete pkg.scripts['prepublishOnly'];
delete pkg.scripts['pack'];
delete pkg.files;

fs.writeFileSync('./package/package.json', JSON.stringify(pkg, null, 2));
fs.writeFileSync('./package/LICENSE', lc);
fs.writeFileSync('./package/CHANGELOG.md', cl, null, 2);
fs.writeFileSync('./package/README.md', rm, null, 2);
