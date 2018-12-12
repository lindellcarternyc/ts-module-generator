import { CreateFunctionParameters, Parameter } from '../../interfaces'
import { TypeName } from '../../interfaces/Types'

import defaultTypes from '../functionTypes/defaultTypes'

const joinTypes = (types: string[]): string => types.join(' | ')

const parseFunctionParameters = (parameters: Parameter[]): string => {
  return parameters
    .map(parameter => {
      return `${parameter.parameterName}: ${joinTypes(parameter.parameterTypes)}`
    })
    .join(', ')
}
const functionTemplate = (params: CreateFunctionParameters): string => {
  const parsedParameters = parseFunctionParameters(params.functionParameters)
  const defaultReturn = defaultTypes(params.returnTypes[0] as TypeName)
  return `const ${params.functionName} = (${parsedParameters}): ${joinTypes(params.returnTypes)} => {
  return ${defaultReturn}
}

export default ${params.functionName}`
}

export default functionTemplate
