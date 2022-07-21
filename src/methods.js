function add(array,input) {
    if (input !== '') {
      array.push({
        description: input,
        completed: false,
        index: array.length,
      });
    }
    return array;
  }

function update(array,index, value) {
  if (value !== '') {
    array[index] = { description: value, completed: false };
  }
  return array;
}

function removeTask(array,index) {
  array.splice(index, 1);
  return array;
}
module.exports = {add,update,removeTask};