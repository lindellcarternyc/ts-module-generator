import { CreateFunctionParameters } from '../../interfaces'

import fTemplate from './function.template'
import iTemplate from './index.template'
import tTemplate from './test.template'

import createTemplates from './createTemplates'

describe('createTemplates', () => {
  it('given create function params, should return three appropriate templates', () => {
    const params: CreateFunctionParameters = {
      moduleName: 'moduleName',
      functionName: 'funcName',
      functionParameters: [],
      returnTypes: ['string'],
    }

    const expectedFTemplate = fTemplate(params)
    const expectedITemplate = iTemplate(params.functionName)
    const expectedTTemplate = tTemplate(params)

    const actual = createTemplates(params)
    expect(actual.functionTemplate).toBe(expectedFTemplate)
    expect(actual.indexTemplate).toBe(expectedITemplate)
    expect(actual.testTemplate).toBe(expectedTTemplate)
  })
})
