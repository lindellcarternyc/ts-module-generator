import { SupportedTypes } from './constants'

import selectType from './selectType'

describe('selectType', () => {
  it('should return an array of supported types ', async () => {
    const actual = await selectType()
    const allSupported = actual.every(t => SupportedTypes.includes(t))
    expect(allSupported).toBe(true)
  }, 30000)
})