import { functionExistsError } from '../errors'

import handleFunctionName from './handleFunctionName'

describe('handleFunctionName', () => {
  it('should throw an error if the name exists', () => {
    expect(() => {
      handleFunctionName('name1', ['name1', 'name2'])
    }).toThrow(functionExistsError('name1'))
  })

  it('should return the function name if it does not exist', () => {
    const actual = handleFunctionName('name', ['func1'])
    expect(actual).toBe('name')
  })
})
