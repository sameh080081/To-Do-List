const myModule = require('./methods.js');

let array = [];
let input = {};
describe('add and remove', () => {
  // Add
  test('add test', () => {
    array = myModule.add(array, "test1");
    expect(array).toHaveLength(1);
    array = myModule.add(array, "test2");
    expect(array).toHaveLength(2);
  });
  test('remove test', () => {
    array = myModule.removeTask(array, 1);
    expect(array).toHaveLength(1);
  });
  test('checkBox test', () => {
    array = myModule.changeCheck(array, 0, true);
    expect(array[0].completed).toBe(true);
  });
  test('clear All checked', () => {
    array = myModule.add(array, "test2");
    array = myModule.add(array, "test3");
    array = myModule.changeCheck(array, 2, true);
    array = myModule.clearChecked(array);
    expect(array).toHaveLength(1);
    expect(array[0].completed).toBe(false);
    expect(array[0].description).toBe("test2");
  });
});