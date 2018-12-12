import { CreateFunctionParameters } from '../../interfaces'
import defaultTypes from '../functionTypes/defaultTypes'

const parseReturnTypes = (returnTypes: string[]): string => {
  const withPrefixes = returnTypes.map(returnType => {
    if (returnType.match(/^[aeiou]/i)) {
      return 'an ' + returnType
    }
    return 'a ' + returnType
  })

  if (withPrefixes.length === 1) {
    return withPrefixes[0]
  } else if (withPrefixes.length === 2) {
    return withPrefixes.join(' or ')
  } else {
    return withPrefixes.reduce<string>((res, str, idx) => {
      if (idx === 0) {
        return str
      } else if (idx === withPrefixes.length - 1) {
        return res + ', or' + str
      } else {
        return res + ', '
      }
    }, '')
  }
}

const testTemplate = (params: CreateFunctionParameters): string => {
  const defaultValue = defaultTypes(params.returnTypes[0])
  return `import ${params.functionName} from './${params.functionName}'

describe('#${params.functionName}', () => {
  it('should return ${parseReturnTypes(params.returnTypes)}', () => {
    expect(${defaultValue}).toBe(${defaultValue})
  })
})`
}

export default testTemplate
