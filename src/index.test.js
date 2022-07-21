const myModule = require('./methods.js');

let array = [];
let input = {};
describe('add and remove', () => {
  // Add
  test('add test', () => {
    input = {
      description: 'test1',
      completed: false,
      index: 1,
    };
    array = myModule.add(array, input);
    expect(array).toHaveLength(1);
    input = {
      description: 'test2',
      completed: false,
      index: 2,
    };
    array = myModule.add(array, input);
    expect(array).toHaveLength(2);
  });
  test('remove test', () => {
    array = myModule.removeTask(array, 1);
    expect(array).toHaveLength(1);
  });
});