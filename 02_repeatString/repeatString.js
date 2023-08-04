const repeatString = function (string, num) {
    if (num < 0) { return 'ERROR'; }
    if (num === 0) { return ''; }

    let stringRepeated = '';
    for (let i = 0; i < num; ++i) {
        stringRepeated += string;
    }
    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
