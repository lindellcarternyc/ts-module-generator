import inquirer from 'inquirer'

import { Parameter } from '@Interfaces'

import getTypes  from '../functionTypes'

const getParameter = async (): Promise<Parameter> => {
  const getParameterNameQuestion = {
    type: 'input',
    message: 'Please enter a parameter name',
    name: 'parameterName'
  }

  return inquirer.prompt<{parameterName: string}>([getParameterNameQuestion])
    .then(async ({ parameterName }) => {
      const parameterTypes = await getTypes()
      const parameter = {
        parameterName,
        parameterTypes
      }
      return parameter
    })
}

const getParameters = async (parameters: Parameter[] = []): Promise<Parameter[]> => {
  const parameter = await getParameter()
  const AddParamQuestion = {
    type: 'confirm',
    message: 'Add another parameter?',
    name: 'addParameter'
  }
  return inquirer
    .prompt<{addParameter: string}>([AddParamQuestion])
    .then(({ addParameter }) => {
      if ( addParameter ) {
        return getParameters(parameters.concat([parameter]))
      }
      
      return parameters.concat([parameter])
    })
}

export default async (): Promise<Parameter[]> => {
  const GetParamsQuestion = {
    type: 'confirm',
    message:'Add Parameters?',
    name: 'addParam'
  }

  return inquirer.prompt<{addParam: boolean}>([GetParamsQuestion])
    .then(({ addParam }) => {
      if ( addParam ) {
        return getParameters()
      }
      return []
    })
}