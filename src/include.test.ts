import { TestImportVar as TestImportVar1 } from 'entities1/Counter';
import { TestImportVar } from 'entities/Counter';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    console.log(TestImportVar1);
    console.log(TestImportVar);
    expect(1+2).toBe(3);
  });
});
