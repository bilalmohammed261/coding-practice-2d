let factorial = require('../factorial/index');
let ratio = require('../ratio/index');
let ratioAndFactorial=(a,b,c)=>{
    let r = ratio(a,b);
    let f = factorial(c);
    return {"ratio":r,"factorial":f};
}

console.log(ratioAndFactorial(4,2,5));
module.exports = ratioAndFactorial;
