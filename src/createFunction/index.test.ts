import createFunction from './'

import path from 'path'
import rimraf from 'rimraf'
import { DirectoryInfo } from '../interfaces/DirectoryInfo'

describe('createFunction', () => {
  it('should return a directory info object', async () => {
    const rootDir = path.resolve(process.cwd(), 'testDir')
    const info: DirectoryInfo = await createFunction(rootDir, 'testDir1')
    expect(info).toHaveProperty('name')
    expect(info.path).toMatch(path.resolve(rootDir, 'testDir1'))
    rimraf.sync(info.path)
  }, 30000)
})
