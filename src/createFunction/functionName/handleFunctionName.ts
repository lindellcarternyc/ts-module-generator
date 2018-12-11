import { functionExistsError } from '../errors'

const handleFunctionName = (functionName: string, functions: string[]): string => {
  if (functions.includes(functionName)) {
    throw functionExistsError(functionName)
  }
  return functionName
}

export default handleFunctionName
