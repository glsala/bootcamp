const reverseString = require('./index');

test('Reverse function exists', () => {
    expect(reverseString).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverseString('abcd')).toBeCalledWith('dcba');
  });
  
  test('Reverse reverses a string', () => {
    expect(reverseString('  abcd')).toBeCalledWith('dcba  ');
  });