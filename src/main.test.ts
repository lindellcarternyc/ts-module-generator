import path from 'path'
import rimraf from 'rimraf'

import { generateFunction } from './main'

describe('generateFunction', () => {
  it('should return a directory info object', async () => {
    const info = await generateFunction('testDir')
    expect(info.path).toMatch(path.resolve(process.cwd(), 'testDir'))
    rimraf.sync(info.path)
  }, 30000)
})
