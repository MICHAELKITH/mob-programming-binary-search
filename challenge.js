function sqrt(number){
  if(number< 0){
    throw new Error ("number is valid")
  }
  return sqrt_recursive(number, 0, number)
}
function sqrt_recursive(number, min_interval, max_interval){
  const mid = Math.floor((min_interval+max_interval)/2)
  const squareMid = mid*mid;
  if(squareMid===number){
    return mid;
  }else if(squareMid>number){
    return sqrt_recursive(number, min_interval, mid-1)
  }else{
    return sqrt_recursive(number, mid+1, max_interval,)
  }
}

module.exports = sqrt;








// ```js
// console.log(sqrt(25))
// // => 5

// console.log(sqrt(7056))
// // => 84
// ``