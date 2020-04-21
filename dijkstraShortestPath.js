//https://www.youtube.com/watch?v=pVfj6mxhdMw

module.exports = function (graph, source) {

    const nodes = [];
    for (let g = 0; g < graph.length; g++) {
        const node = graph[g];
        nodes.push({
            name: node.name,
            neightbours: node.neighbours,
            sourceDistance: (node.name == source) ? 0 : Infinity, //inicia as estimativas de distancias
            previous: null
        })
    }
    console.log(nodes)

    let visiteds = [];
    let unvisiteds = [];
    for (let i = 0; i < nodes.length; i++) {
        unvisiteds.push(nodes[i]);
    }
    // let source = nodes[0]; //considerando A como nó inicial

    // === inicia as estimativas de distancias ===
    // for (let i = 0; i < nodes.length; i++) {
    //     const node = nodes[i];
    //     if (node == source) {
    //         node.sourceDistance = 0;
    //     } else {
    //         node.sourceDistance = Infinity;
    //     }
    // }
    // === end inicia as estimativas de distancias ===

    while (unvisiteds.length) {
        // === visitar o nó não visitado com menor distancia ===
        const lowerValue = Math.min(...unvisiteds.map(n => n.sourceDistance)); //pega o menor sourceDistance
        let lowerSDNode;

        for (let i = 0; i < unvisiteds.length; i++) {
            const node = unvisiteds[i];
            if (lowerValue == node.sourceDistance) {
                lowerSDNode = node; //pega o nó com menor distancia
                break;
            }
        }

        unvisiteds = unvisiteds.filter(v => v !== lowerSDNode); //retira ele do array de nao visitados
        visiteds.push(lowerSDNode); // visita o nó com menor distancia
        current = lowerSDNode; //nó atual recebe o visitado
        // === end visitar o nó não visitado com menor distancia ===


        // === verifica os nós vizinhos do atual que nao foram visitados e calcula as distancias ===

        for (let j = 0; j < unvisiteds.length; j++) { //varre todos os nós não visitados
            const node = unvisiteds[j];

            for (let i = 0; i < current.neighbours.length; i++) {  //varre todos os nós vizinhos do atual
                const neigh = current.neighbours[i];

                if (node.name === neigh.name) { //verifica se este nó é um dos vizinhos
                    const newDist = current.sourceDistance + neigh.dist; //calcula nova distancia
                    if (newDist < node.sourceDistance) { // verifica se a distancia calculada é menor do que a atual, se sim..
                        node.sourceDistance = newDist; // atualiza valor para a nova distancia calculada 2
                        node.previous = current; // atualiza o nó anterior no caminho
                    }
                    break;
                }
            }
        }

        // === verifica os nós vizinhos do atual que nao foram visitados e calcula as distancias ===
    }

    // imprime o caminho entre 2 nós

    const path = [];
    let toName = '4';
    let toObject;

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.name == toName) {
            toObject = node;
        }

        console.log(`Shortest distance from source to ${node.name} = ${node.sourceDistance} and previous = ${node.previous ? node.previous.name : 'none'}.`);
    }

    while (toObject != source) {
        path.unshift(toObject.name);
        toObject = toObject.previous;
    }
    path.unshift(source.name);

    console.log(`Shortest path between source and ${toName} = ${path}.`);
    // end imprime o caminho entre 2 nós

}