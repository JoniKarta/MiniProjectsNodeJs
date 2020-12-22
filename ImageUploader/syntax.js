
const str = "fjdlajfkldaffjdklasjfdksalj.jfdklajfda.jpg"

//substr(from, length)
console.log(str.substr(2,4)); // 2 3 4 5 

//substring(from, to)
console.log(str.substring(2,4)); // 2 3

//lastIndexof
console.log(str.substr(str.lastIndexOf('.')));