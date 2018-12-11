import getDirectoryNames from '../getDirectoryNames'

import selectModule from './selectModule'

describe('selectModule', () => {
  let moduleNames: string[] = []
  beforeAll(async () => { 
    moduleNames = await getDirectoryNames('testDir')
  })
  it('should wait for user to select module name', async () => {
    const moduleName = await selectModule(moduleNames)
    expect(moduleNames.indexOf(moduleName)).toBeGreaterThanOrEqual(0)
  }, 60000)
})