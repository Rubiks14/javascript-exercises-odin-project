const removeFromArray = function (array, ...thingsToRemove) {

    let newArray = array;
    for (let i = 0; i < thingsToRemove.length; ++i) {
        const removeIndex = newArray.indexOf(thingsToRemove[i]);

        if (0 <= removeIndex) {
            newArray = [...newArray.slice(0, removeIndex), ...newArray.slice(removeIndex + 1)];
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
