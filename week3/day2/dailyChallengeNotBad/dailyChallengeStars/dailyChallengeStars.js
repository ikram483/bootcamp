// let pattern = "";
// for (let i = 1; i <= 6; i++) {
//   pattern += "* ".repeat(i) + "\n";
// }
// console.log(pattern);

let result= "";
for (let i =1; i<=6; i++)
{
    for (let j =1; j<=i;j++){ result+= "* ";}
    result+= "\n";

}
console.log(result);


