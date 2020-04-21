// inverter ordem dos filhos de acordo com a profundidade passada

const nodesCount = 11;
const depthIndexToInvert = 4;

const inputs = [
    [2, 3],
    [4, -1],
    [5, -1],
    [6, -1],
    [7, 8],
    [-1, 9],
    [-1, -1],
    [10, 11],
    [-1, -1],
    [-1, -1],
    [-1, -1]
];

const tree = [];

for (let i = 0; i < nodesCount; i++) {
    tree.push({
        name: i + 1,
        children: inputs[i],
        sourceDistance: i == 0 ? 0 : Infinity,
        visited: false
    });
}

let current = tree[0];
let count = nodesCount;

while (count > 0) {
    // === visitar o nó não visitado com menor distancia ===
    const lowerValue = Math.min(...tree.map(n => {
        if (!n.visited) { return n.sourceDistance }
        else { return Infinity }
    })); //pega o menor sourceDistance
    console.log(count, lowerValue);
    let lowerSDNode;

    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (!node.visited && lowerValue == node.sourceDistance) {
            lowerSDNode = node; //pega o nó com menor distancia
            break;
        }
    }

    lowerSDNode.visited = true; //visitado
    current = lowerSDNode; //nó atual recebe o visitado
    count--;
    // === end visitar o nó não visitado com menor distancia ===


    // === verifica os nós vizinhos do atual que nao foram visitados e calcula as distancias ===

    for (let j = 0; j < tree.length; j++) { //varre todos os nós
        const node = tree[j];

        for (let i = 0; i < current.children.length; i++) {  //varre todos os nós vizinhos do atual
            const child = current.children[i];

            if (node.name === child) { //verifica se este nó é um dos vizinhos
                const newDist = current.sourceDistance + 1; //calcula nova distancia
                if (newDist < node.sourceDistance) { // verifica se a distancia calculada é menor do que a atual, se sim..
                    node.sourceDistance = newDist; // atualiza valor para a nova distancia calculada 2
                }
                break;
            }
        }
    }

    // === verifica os nós vizinhos do atual que nao foram visitados e calcula as distancias ===
}

//invert
for (let i = 0; i < tree.length; i++) {
    if (depthIndexToInvert - 1 == tree[i].sourceDistance) {
        const first = tree[i].children.shift();
        tree[i].children.push(first);
    }
}

console.log(tree);