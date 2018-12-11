import fs from 'fs'
import path from 'path'
import writeFile from './writeFile'

describe('writeFile', () => {
  it('should write a file to the designated path', async () => {
    const filepath = path.resolve(process.cwd(), 'testDir', 'testDir1', 'testFile.ts')
    try {
      await writeFile(filepath, 'hello world')
      const files = fs.readdirSync(path.resolve(process.cwd(), 'testDir', 'testDir1'))
      expect(files.includes('testFile.ts'))
    } catch ( err ) {
      throw err
    }
  })
})