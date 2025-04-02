function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(`inside the funcOne function ${a}`);
}
funcOne();

let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}
funcThree();
funcTwo();
funcThree();

function funcFour() {
    global.a = "hello";
    console.log(global.a); 
    }

function funcFive() {
    console.log(`inside the funcFive function ${a}`);
}
funcFour();
funcFive();

let b = 1;

function funcSix() {
    let b = "test";
    console.log(`inside the funcSix function ${b}`);
}
funcSix();

let c = 2;

if (true) {
    let c = 5;
    console.log(`in the if block ${c}`);
}
console.log(`outside of the if block ${c}`);
