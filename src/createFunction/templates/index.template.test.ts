import indexTemplate from './index.template'

describe('index.template', () => {
  it('should return the template for a module barrel', () => {
    const expected = `import functionName from './functionName'
export default functionName`

    const actual = indexTemplate('functionName')
    expect(actual).toBe(expected)
  })
})
