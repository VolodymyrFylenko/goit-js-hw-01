"use strict";

function getElementWidth(content, padding, border) {
    const contentNr = Number.parseFloat(content);
    const paddingNr = Number.parseFloat(padding);
    const borderNr = Number.parseFloat(border);
    let elementSize = contentNr + paddingNr * 2 + borderNr * 2;
    return elementSize;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200