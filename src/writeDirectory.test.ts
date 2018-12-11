import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'

import writeDirectory from './writeDirectory'

import { DirectoryInfo } from './interfaces/DirectoryInfo'

describe('writeDirectory', () => {
  const TestRootDir = 'testDir'
  const TestDirectoryName = 'moduleName'
  const TestDir = path.resolve(process.cwd(), TestRootDir, TestDirectoryName)

  it('should create an empty directory', async () => {
    try {
      const directoryInfo: DirectoryInfo = await writeDirectory({
        rootDirectory: TestRootDir,
        directoryName: TestDirectoryName,
      })
      const exists = fs.existsSync(TestDir)
      const numFiles = fs.readdirSync(TestDir).length
      expect(numFiles).toBe(0)
      expect(exists).toBe(true)
      expect(directoryInfo.name).toBe(TestDirectoryName)
      expect(directoryInfo.path).toBe(TestDir)
      expect(Object.keys(directoryInfo.files).length).toBe(0)
      rimraf.sync(TestDir)
    } catch (err) {
      rimraf.sync(TestDir)
      throw err
    }
  })

  it('should create a directory with files in it', async () => {
    const info: DirectoryInfo = await writeDirectory({
      rootDirectory: TestRootDir,
      directoryName: TestDirectoryName,
      files: [
        {
          name: 'testFile.txt',
          data: 'this is test data',
        },
      ],
    })

    const exists = fs.existsSync(info.path)
    expect(exists).toBe(true)

    const numFiles = fs.readdirSync(info.path).length
    expect(numFiles).toBe(1)

    expect(info).toMatchObject({
      name: TestDirectoryName,
      path: TestDir,
      files: {
        'testFile.txt': {
          name: 'testFile.txt',
          path: path.resolve(TestDir, 'testFile.txt'),
        },
      },
    })
    rimraf.sync(TestDir)
  })

  // it('should throw an error if the directory exists')
})
