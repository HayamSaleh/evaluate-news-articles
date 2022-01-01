import handleSubmit from '../src/client/js/handleSubmit';


describe('Test If handleSubmit exists' , () => {
  test('handleSubmit must return true', () => {
      expect(handleSubmit).toBeDefined();
  });
});

describe('Test If handleSubmit Is a function' , () => {
  test('handleSubmit must be a function', () => {
      expect(typeof handleSubmit).toBe("function");
  });
});
