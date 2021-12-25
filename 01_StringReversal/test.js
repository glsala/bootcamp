const reverseString = require('./index');

test('Reverse sprint', () => {
  expect(reverseString('Gabriel')).toMatch(/leirbaG/);
});
