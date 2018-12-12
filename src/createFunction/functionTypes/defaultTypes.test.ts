import defaultTypes from './defaultTypes'

describe('defaultTypes', () => {
  it('should return 0 as number default', () => {
    const expected = '0'
    const actual = defaultTypes('number')
    expect(actual).toBe(expected)
  })

  it('should return, default to true for boolean', () => {
    expect(defaultTypes('boolean')).toBe('true')
  })

  it('should return `undefined` for the undefined type', () => {
    expect(defaultTypes('undefined')).toBe('undefined')
  })

  it('should return null for null', () => {
    expect(defaultTypes('any')).toBe('any')
  })

  it('should return an empty string for string type', () => {
    expect(defaultTypes('string')).toBe("''")
  })

  it('should create a dummy regexp string for a regexp type', () => {
    expect(defaultTypes('RegExp')).toBe("new RegExp('hello')")
  })
})
