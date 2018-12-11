import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import writeFile from './writeFile'

describe('writeFile', () => {
  it('should write a file to the designated path', async () => {
    const dirPath = path.resolve(process.cwd(), 'testDir', 'testDir1')
    const filename = 'testFile.ts'
    const filepath = path.resolve(dirPath, filename)
    try {
      await writeFile(filepath, 'hello world')
      const files = fs.readdirSync(dirPath)
      expect(files.includes('testFile.ts'))
      rimraf(filepath, err => {
        if (err) {
          throw err
        }
      })
    } catch (err) {
      throw err
    }
  })
})
