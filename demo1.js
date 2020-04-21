function cellCompete(states, days) {
    for (let i = 0; i < days; i++) {
        getNextDayStates();
    }

    function getNextDayStates() {
        let newStates = [];
        for (let i = 0; i < states.length; i++) {
            const previous = states[i - 1] || 0;
            const next = states[i + 1] || 0;

            if (previous === next) {
                newStates.push(0);
            } else {
                newStates.push(1);
            }
        }
        states = newStates;
    }

    console.log(states);
    return states;
}

cellCompete([1, 0, 0, 0, 0, 1, 0, 0,], 1);