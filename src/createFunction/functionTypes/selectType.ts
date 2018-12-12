import inquirer from 'inquirer'

import { isTypeName, TypeName } from '../../interfaces/Types'

import { SupportedTypes } from './constants'

const selectType = async (selectedTypes: TypeName[] = []): Promise<TypeName[]> => {
  const selectTypeQuestion = {
    type: 'list',
    message: 'Please select a type',
    choices: SupportedTypes,
    name: 'selectedType',
  }

  const addAnotherTypeQuestion = {
    type: 'confirm',
    message: 'Add another type?',
    name: 'addType',
  }

  interface SelectTypeAnswers {
    selectedType: string
    addType: boolean
  }

  return inquirer
    .prompt<SelectTypeAnswers>([selectTypeQuestion, addAnotherTypeQuestion])
    .then(async ({ selectedType, addType }) => {
      let updatedTypes: TypeName[] = [...selectedTypes]
      if ( isTypeName(selectedType) ) {
        if ( !updatedTypes.includes(selectedType) ) {
          updatedTypes = updatedTypes.concat(selectedType)
        }
      }
      // const updatedTypes = selectedTypes.includes(selectedType) ? selectedTypes : selectedTypes.concat([selectedType])
      if (addType) {
        const types = await selectType(updatedTypes)
        return types
      }
      return updatedTypes
    })
}

export default selectType
