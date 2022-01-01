import validateUrl from '../src/client/js/validateUrl';

describe('Test If validateUrl exists' , () => {
  test('validateUrl must return true', () => {
      expect(validateUrl).toBeDefined();
  });
});

describe('Test If validateUrl Is a function' , () => {
  test('validateUrl must be a function', () => {
      expect(typeof validateUrl).toBe("function");
  });
});
