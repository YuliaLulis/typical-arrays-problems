
exports.min = function min(array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  return Math.min.apply(Math, array);
}

exports.max = function max(array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  return Math.max.apply(Math, array);
}

exports.avg = function avg(array) {
  if (array == undefined || array.length == 0){
    return 0;
  }
  sum = 0;
  for (i = 0; i < array.length; i++)
    sum += array[i];
  return sum / array.length;

}
