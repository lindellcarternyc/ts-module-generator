import { functionExistsError } from './errors'

describe('functionExistsError', () => {
  it('should create create an error', () => {
    const error = functionExistsError('testFunctionName')
    expect(error.message).toMatch('testFunctionName')
  })
})
