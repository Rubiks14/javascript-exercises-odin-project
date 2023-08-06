const sumAll = function (first, last) {
    if (typeof first !== 'number' || typeof last !== 'number') {
        return "ERROR";
    }
    else if (first < 0 || last < 0) {
        return "ERROR";
    } else {
        min = Math.min(first, last);
        max = Math.max(first, last);

        let sum = 0;
        for (let i = min; i <= max; ++i) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
