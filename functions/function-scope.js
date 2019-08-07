// Global Scope (converter, tempvalue, tempvalue1)
  // Local Scope (f, temp)
    // Local Scope (isFreezing)


let converter = function(f) {
    let temp = (f - 32) * 5/9;

    if (temp <= 0) {
        let isFreezing = true;
    }

    return temp;
}

let tempvalue = converter(32);
let tempvalue1 = converter(68);
console.log(tempvalue);
console.log(tempvalue1);