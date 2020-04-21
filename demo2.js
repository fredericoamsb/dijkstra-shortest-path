

function generalizedGCD(num, arr) {
    let values = [];

    var getGcd = function (a, b) {
        if (!b) {
            return a;
        }

        return getGcd(b, a % b);
    }

    for (let i = 1; i < arr.length; i++) {
        values.push(getGcd(arr[0], arr[i]));
    }

    const gcd = Math.min(...values);
    return gcd;
}

console.log(generalizedGCD(55555, [4444, 4555, 800000, 15550, 5540456, 80]));

// =====

function generalizedGCD(num, arr) {
    // Use spread syntax to get minimum of array
    const lowest = Math.min(...arr);
    console.log('lowest =', lowest);

    for (let i = lowest; i > 1; i--) {
        let isCommonDivisor = true;

        for (let j = 0; j < num; j++) {
            console.log('resto =', arr[j] % i);
            if (arr[j] % i !== 0) {
                isCommonDivisor = false;
                break;
            }
        }

        if (isCommonDivisor) {
            return i;
        }
    }

    return 1;
}