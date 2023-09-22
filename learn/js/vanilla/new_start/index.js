const calc = () => {
    return 4 * 4;
}

const printCalc = (callback) => {
    console.log(callback());
}

printCalc(calc);

//let aNumber = calc();

//console.log(aNumber);