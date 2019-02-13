const mendeleev = require('mendeleev');

module.exports = (element) => {
    element = mendeleev(element);
    if (!element)
        throw new Error('Element does not exist');
    return `${element.number}. ${element.name} / ${element.weight}`;
};