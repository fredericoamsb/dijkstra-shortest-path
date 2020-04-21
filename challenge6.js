//imprimir quantas palavras possui o prefixo no array

const array = ['hack', 'hakerrhac', 'hakerrhac', 'hakerrhac'];
let results = 0;
const prefix = 'hak';

for (let i = 0; i < array.length; i++) {
    const a = array[i];
    if (a.indexOf(prefix) == 0) {
        results++;
    }
}

console.log(results);