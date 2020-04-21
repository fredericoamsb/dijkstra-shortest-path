
const _numDestinations = 3;
const _allLocations = [[1, 2], [3, 4], [1, -1]];
const _numDeliveries = 2;

ClosestXdestinations(_numDestinations, _allLocations, _numDeliveries);

function ClosestXdestinations(numDestinations, allLocations, numDeliveries) {

    const destinations = []; //list of destinations object to create relation between coordinate and distance
    const closestDestinations = []; //list of destinations

    for (let i = 0; i < numDestinations; i++) { //for each destination
        const x = allLocations[i][0]; //x coordinate
        const y = allLocations[i][1]; //y coordinate
        const dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); //rootSquare of (x^2 + y^2)
        destinations.push({ //push the new destination object
            coord: allLocations[i],
            dist
        });
    }

    destinations.sort(function (a, b) { //sort array by distance
        if (a.dist < b.dist) return -1;
        if (a.dist > b.dist) return 1;
        return 0;
    });

    for (let i = 0; i < numDeliveries; i++) { //for each delivery
        closestDestinations.push(destinations[i].coord); //choose the closest destinations
    }

    return closestDestinations;
}