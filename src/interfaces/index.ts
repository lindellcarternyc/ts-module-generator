export interface Parameter {
  parameterName: string
  parameterTypes: string[]
}

export interface CreateFunctionParameters {
  moduleName: string
  functionName: string
  returnTypes: string[]
  functionParameters: Parameter[]
}
