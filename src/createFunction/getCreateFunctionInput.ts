import path from 'path'
import { CreateFunctionParameters } from '../interfaces'

import getDirectoryNames from '../getDirectoryNames'
import { getFunctionName, handleFunctionName } from './functionName'
import getParameters from './functionParams/getParams'
import getTypes from './functionTypes'

const getCreateFunctionInput = async (rootDir: string, moduleName: string): Promise<CreateFunctionParameters> => {
  const functionName = await getFunctionName()
  const functions = await getDirectoryNames(path.join(rootDir, moduleName))
  try {
    handleFunctionName(functionName, functions)
  } catch (err) {
    throw err
  }

  const returnTypes = await getTypes()
  const functionParameters = await getParameters()

  return {
    moduleName,
    functionName,
    returnTypes,
    functionParameters,
  }
}

export default getCreateFunctionInput
