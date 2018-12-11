import fs from 'fs'
import path from 'path'

import getDirectoryNames from './getDirectoryNames'

describe('getDirectoryNames', () => {
  const p = path.resolve(process.cwd(), 'testDir')
  const directories = fs.readdirSync(p)
    .filter(item => {
      return fs.statSync(path.resolve(p, item)).isDirectory()
    })

  it('should return a list of the directories in test dir', async () => {
    const actual = await getDirectoryNames('testDir')
    expect(actual).toMatchObject(directories)
  })
})