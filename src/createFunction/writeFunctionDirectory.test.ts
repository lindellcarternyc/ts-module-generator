import path from 'path'
import rimraf from 'rimraf'

import writeFunctionDirectory from './writeFunctionDirectory'

import { CreateFunctionParameters } from '../interfaces'
import { DirectoryInfo } from '../interfaces/DirectoryInfo'
import createTemplates from './templates/createTemplates'

describe('writeFunctionDirectory', () => {
  it('should create the function module directory', async () => {
    const TestModuleName = 'TestModuleName'
    const TestFunctionName = 'TestFunctionName'
    const TestRootDir = 'testDir'
    const TestRootDirectoryPath = path.resolve(process.cwd(), TestRootDir, TestModuleName)
    
    const functionParams: CreateFunctionParameters = {
      moduleName: TestModuleName,
      functionName: TestFunctionName,
      functionParameters: [],
      returnTypes: ['undefined']
    }

    const templates = createTemplates(functionParams)

    const info = await writeFunctionDirectory({
      rootDirectory: TestRootDirectoryPath,
      functionName: TestFunctionName,
      templates
    })

    const expectedPath = path.resolve(TestRootDirectoryPath, TestFunctionName)
    const expectedInfo: DirectoryInfo = {
      name: TestFunctionName,
      path: expectedPath,
      files: {
        [`${TestFunctionName}.ts`]: {
          name: `${TestFunctionName}.ts`,
          path: path.resolve(expectedPath, `${TestFunctionName}.ts`)
        },
        [`${TestFunctionName}.test.ts`]: {
          name: `${TestFunctionName}.test.ts`,
          path: path.resolve(expectedPath, `${TestFunctionName}.test.ts`)
        },
        'index.ts': {
          name: 'index.ts',
          path: path.resolve(expectedPath, 'index.ts')
        }
      }
    }

    expect(info).toEqual(expectedInfo)
    rimraf.sync(expectedPath)
  })
})