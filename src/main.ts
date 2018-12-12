import { DirectoryInfo } from './interfaces/DirectoryInfo'

import createFunction from './createFunction'
import getDirectoryNames from './getDirectoryNames'
import selectModule from './selectModule'

const generateFunction = async (rootDir: string): Promise<DirectoryInfo> => {
  const directoryNames = await getDirectoryNames(rootDir)
  const moduleName = await selectModule(directoryNames)
  const info = await createFunction(rootDir, moduleName)
  return info
}

export { generateFunction }
