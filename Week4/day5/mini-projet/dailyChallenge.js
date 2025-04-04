function isAnagram(str1, str2) {


    const formatString = str => str.replace(/\s+/g, '').toLowerCase();
  
    const sorted1 = formatString(str1).split('').sort().join('');
    const sorted2 = formatString(str2).split('').sort().join('');
  
    return sorted1 === sorted2;
  }
  
  console.log(isAnagram("Astronomer", "Moon starer"));     
  console.log(isAnagram("School master", "The classroom")); 
  console.log(isAnagram("Hello", "World"));                 
  