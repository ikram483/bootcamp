const names =
 ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
 console.log(names);

 const societyName = names
  .map(name => name[0])      
  .sort()                    
  .join('');                 

console.log(societyName); 
