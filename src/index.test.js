const myModule = require('./methods.js');

const { add } = myModule.add;
const { remove } = myModule.removeTask;

let array = [];
describe('add and remove', () => {
  // Add
  test('add test', () => {
    input= {
      description: 'test1',
      completed: false,
      index: 1,
    };
    array = add(array,input);
    expect(array).toHaveLength(1);
    input = {
      description: 'test2',
      completed: false,
      index: 2,
    };
    array = add(array,input);
    expect(array).toHaveLength(2);
  });
  test('remove test', () => {
    array =remove(array,1);
    expect(array).toHaveLength(1);
  });
});