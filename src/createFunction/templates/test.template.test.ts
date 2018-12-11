import { CreateFunctionParameters } from '../../interfaces'
import testTemplate from './test.template'

describe('testTemplate', () => {
  it('should create a test template with one return type', () => {
    const params: CreateFunctionParameters = {
      moduleName: '',
      functionName: 'functionName',
      functionParameters: [],
      returnTypes: ['string']
    }

    const expected = `import functionName from './functionName'

describe('#functionName', () => {
  it('should return a string', () => {
    expect(true).toBe(true)
  })
})`
  const actual = testTemplate(params)
  expect(actual).toBe(expected)
  })
})