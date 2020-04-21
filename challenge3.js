/*
achar a altura da árvore = distancia do nó mais distante do source
*/

const nodesCount = '7';

const edges = [
    ['1', '2'],
    ['2', '3'],
    ['3', '5'],
    ['5', '4'],
    ['5', '6'],
    ['6', '7']
]

const source = '3';

djikstraShortestPathWithoutWeight(nodesCount, edges, source);


function djikstraShortestPathWithoutWeight(nodesCount, edges, source) {
    nodesCount = parseInt(nodesCount);

    const nodes = [];
    for (let i = 1; i < nodesCount + 1; i++) {

        const neighbours = [];
        for (let j = 0; j < edges.length; j++) {
            const edge = edges[j];

            if (edge[0] === i.toString()) {
                neighbours.push(edge[1]);
            } else if (edge[1] === i.toString()) {
                neighbours.push(edge[0]);
            }
        }

        nodes.push({
            name: i.toString(),
            neighbours: neighbours,
            sourceDistance: (i.toString() === source) ? 0 : (neighbours.length ? Infinity : -1), //inicia as estimativas de distancias
            previous: null
        })
    }

    let visiteds = [];
    let unvisiteds = [];
    for (let i = 0; i < nodes.length; i++) {
        unvisiteds.push(nodes[i]);
    }

    while (unvisiteds.length) {
        const lowerValue = Math.min(...unvisiteds.map(n => n.sourceDistance));  //pega o menor sourceDistance

        let lowerSDNode;

        for (let i = 0; i < unvisiteds.length; i++) {
            const node = unvisiteds[i];
            if (lowerValue === node.sourceDistance) {
                lowerSDNode = node; //pega o nó com menor distancia
                break;
            }
        }

        unvisiteds = unvisiteds.filter(v => v !== lowerSDNode); //retira ele do array de nao visitados
        visiteds.push(lowerSDNode); // visita o nó com menor distancia
        current = lowerSDNode; //nó atual recebe o visitado

        for (let i = 0; i < current.neighbours.length; i++) {  //varre todos os nós vizinhos do atual
            const neigh = current.neighbours[i];

            for (let j = 0; j < unvisiteds.length; j++) { //varre todos os nós não visitados
                const node = unvisiteds[j];

                if (node.name === neigh) { //verifica se este nó é um dos vizinhos
                    const newDist = current.sourceDistance + 1; //calcula nova distancia
                    if (newDist < node.sourceDistance) { // verifica se a distancia calculada é menor do que a atual, se sim..
                        node.sourceDistance = newDist; // atualiza valor para a nova distancia calculada 2
                        node.previous = current; // atualiza o nó anterior no caminho
                    }
                    break;
                }
            }
        }
    }

    let path = [];
    let toName = '1';
    let toObject;

    let result = [];

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.name === toName) {
            toObject = node;
        }
        if (node.sourceDistance !== 0)
            result.push(node.sourceDistance);
    }
    console.log(Math.max(...result));
}