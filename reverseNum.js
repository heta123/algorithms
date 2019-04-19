function reverseInt(n) {
    // parseInt(n.toString().split('').reverse().)
//    let a = n.toString().split('').reverse();
// let decide = Math.sign(n);
let str_num = n.toString();
let rev_str = '';
for(let key of str_num){
    rev_str = key + rev_str;
}
const new_num = parseInt(rev_str);
return new_num * Math.sign(n);
   
}
// reverseInt(34);