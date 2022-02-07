let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
function zipList(arr1, arr2) {
  let returnArr = [];
  for (let i = 0; i < arr1.length; i++) {
    returnArr.push(arr1[i]);
    returnArr.push(arr2[i]);
  }
  return returnArr;
}

console.log(zipList(arr1, arr2));

function zipListTheSimpleWay(arr1, arr2) {
  let zip = _.zip(arr1, arr2);
  return _.flatten(zip);
}

console.log(zipListTheSimpleWay(arr1, arr2));
