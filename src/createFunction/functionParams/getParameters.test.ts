import getParameters from './getParams'

describe('getParameters', () => {
  it('should return an array of parameter objects', async () => {
    const parameters = await getParameters()
    parameters.forEach(parameter => {
      const { parameterName, parameterTypes } = parameter
      expect(typeof parameterName).toBe('string')
      expect(parameterTypes).toHaveProperty('length')
    })
  }, 30000)
})
