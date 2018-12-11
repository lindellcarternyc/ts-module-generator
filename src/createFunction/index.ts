import path from 'path'

import { DirectoryInfo } from '@Interfaces/DirectoryInfo'

import getCreateFunctionInput from './getCreateFunctionInput'
import createTemplates from './templates/createTemplates'
import writeFunctionDirectory from './writeFunctionDirectory'

const createFunction = async (rootDir: string, moduleName: string): Promise<DirectoryInfo> => {
  const createFunctionParameters = await getCreateFunctionInput(rootDir, moduleName)
  const templates = createTemplates(createFunctionParameters)

  const info: DirectoryInfo = await writeFunctionDirectory({
    templates,
    functionName: createFunctionParameters.functionName,
    rootDirectory: path.resolve(rootDir, moduleName),
  })

  return info
}

export default createFunction
