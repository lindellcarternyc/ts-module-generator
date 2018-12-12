import { TypeName } from './Types'

export interface Parameter {
  parameterName: string
  parameterTypes: TypeName[]
}

export interface CreateFunctionParameters {
  moduleName: string
  functionName: string
  returnTypes: TypeName[]
  functionParameters: Parameter[]
}
