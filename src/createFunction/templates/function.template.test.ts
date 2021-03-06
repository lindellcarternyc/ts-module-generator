import { CreateFunctionParameters } from '../../interfaces'
import functionTemplate from './function.template'

describe('function.template', () => {
  it('should create a function template', () => {
    const createFunctionParams: CreateFunctionParameters = {
      functionName: 'functionName',
      returnTypes: ['number'],
      moduleName: 'moduleName',
      functionParameters: [
        {
          parameterName: 'param1',
          parameterTypes: ['number'],
        },
      ],
    }

    const expected = `const functionName = (param1: number): number => {
  return 0
}

export default functionName`

    const actual = functionTemplate(createFunctionParams)
    expect(actual).toBe(expected)
  })

  it('should accept multiple params and multple return types', () => {
    const params: CreateFunctionParameters = {
      functionName: 'f1',
      moduleName: 'f1',
      functionParameters: [
        {
          parameterName: 'p1',
          parameterTypes: ['string', 'number'],
        },
      ],
      returnTypes: ['string', 'number'],
    }

    const expected = `const f1 = (p1: string | number): string | number => {
  return ''
}

export default f1`

    const actual = functionTemplate(params)
    expect(actual).toBe(expected)
  })
})
