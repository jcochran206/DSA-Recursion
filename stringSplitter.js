function stringSplit(str){
  if (str.indexOf('/') === -1){
      return [str];
  }

  let endIdx = str.indexOf('/');
  let stringy = str.slice(0, endIdx);
  return [stringy, ...stringSplit(str.slice(endIdx+1))];
}

// document.getElementById('root').append(JSON.stringify(stringSplit("02/20/2020")));

console.log("===============");
console.log("String Splitter");
console.log("===============");
console.log(stringSplit("02/20/2020"));