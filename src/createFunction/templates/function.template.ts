import { CreateFunctionParameters, Parameter } from '@Interfaces'

const joinTypes = (types: string[]): string => types.join(' | ')

const parseFunctionParameters = (parameters: Parameter[]): string => {
  return parameters.map(parameter => {
    return `${parameter.parameterName}: ${joinTypes(parameter.parameterTypes)}`
  }).join(', ')
}
const functionTemplate = (params: CreateFunctionParameters): string => {
  const parsedParameters = parseFunctionParameters(params.functionParameters)
  return `const ${params.functionName} = (${parsedParameters}): ${joinTypes(params.returnTypes)} => {
  return null
}`
}

export default functionTemplate

