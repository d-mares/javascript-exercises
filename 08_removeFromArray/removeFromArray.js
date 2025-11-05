const removeFromArray = function () {
  // handle variable num of arguments
  let array;
  let itemsToRemove = [];

  for (let i = 0; i < arguments.length; i++) {
    if (i == 0) array = arguments[0];
    else itemsToRemove.push(arguments[i]);
  }

  itemsToRemove.forEach(
    (item) => (array = array.filter((value) => value !== item))
  );
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
