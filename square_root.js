function sqRoot(num){
  for(let i=0; i * i <= num; i++){
    if(i * i === num){
      return i;
    }
  }
}
console.log(sqRoot(9));