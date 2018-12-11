import { CreateFunctionParameters } from '@Interfaces'

import fTemplate from './function.template'
import iTemplate from './index.template'
import tTemplate from './test.template'

const createTemplates = (params: CreateFunctionParameters): {
  functionTemplate: string,
  indexTemplate: string,
  testTemplate: string
} => {
  return {
    functionTemplate: fTemplate(params),
    indexTemplate: iTemplate(params.functionName),
    testTemplate: tTemplate(params)
  }
}

export default createTemplates