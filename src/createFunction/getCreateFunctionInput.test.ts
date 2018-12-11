import getCreateFunctionInput from './getCreateFunctionInput'

describe('createFunction', () => {
  it('should return a function input object or throw the appropriate error if the function exists', async () => {
    try {
      const actual = await getCreateFunctionInput('testDir', 'testDir1')
      expect(actual).toHaveProperty('moduleName')
      expect(typeof actual.moduleName).toBe('string')
      expect(actual).toHaveProperty('functionName')
      expect(typeof actual.functionName).toBe('string')
      expect(actual.returnTypes).toHaveProperty('length')
      expect(actual.functionParameters).toHaveProperty('length')

      actual.functionParameters.forEach(parameter => {
        expect(typeof parameter.parameterName).toBe('string')
        expect(parameter.parameterTypes).toHaveProperty('length')
      })
    } catch ( err ) {
      expect(err.message).toMatch('FUNCTION EXISTS')
    }
  }, 30000)
})