import getFunctionName from './getFunctionName'

describe('getFunctionName', async () => {
  it('should return a string', async () => {
    const actual = await getFunctionName()
    expect(typeof actual).toBe('string')
  })
})