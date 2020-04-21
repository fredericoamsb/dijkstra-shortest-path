
optimalUtilization(
    20,
    [[1, 8], [2, 15], [3, 9]],
    [[1, 8], [2, 11], [3, 12]]);
//app[0]=id  app[1]=memory required

// output = retornar os pares de IDs

function optimalUtilization(deviceCapacity, foregroundAppList, backgroundAppList) {

    const optimalPairs = [];
    const optimalPairsIds = [];
    let max = 0;

    for (let i = 0; i < foregroundAppList.length; i++) {
        const foreApp = foregroundAppList[i];
        const foreAppId = foreApp[0];
        const foreAppMemory = foreApp[1];

        for (let j = 0; j < backgroundAppList.length; j++) {
            const bgApp = backgroundAppList[j];
            const bgAppId = bgApp[0];
            const bgAppMemory = bgApp[1];

            const pairMemory = foreAppMemory + bgAppMemory;

            if (pairMemory <= deviceCapacity) {
                if (max < pairMemory) {
                    max = pairMemory;
                }

                optimalPairs.push({
                    ids: [foreAppId, bgAppId],
                    memory: pairMemory
                });
            }
        }
    }

    for (let i = 0; i < optimalPairs.length; i++) {
        const pair = optimalPairs[i];
        if (pair.memory === max) { //if memory is equal to the best optimal pair memory required
            optimalPairsIds.push(pair.ids);
        }
    }

    console.log(optimalPairs);
    console.log(optimalPairsIds);
    return optimalPairsIds;
}