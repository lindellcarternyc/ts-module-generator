import inquirer from 'inquirer'

import { SupportedTypes } from './constants'

const selectType = async (selectedTypes: string[] = []): Promise<string[]> => {
  const selectTypeQuestion = {
    type: 'list',
    message: 'Please select a type',
    choices: SupportedTypes,
    name: 'selectedType'
  }

  const addAnotherTypeQuestion = {
    type: 'confirm',
    message: 'Add another type?',
    name: 'addType'
  }

  interface SelectTypeAnswers {
    selectedType: string
    addType: boolean
  }

  return inquirer.prompt<SelectTypeAnswers>([
    selectTypeQuestion, addAnotherTypeQuestion
  ])
    .then( async ({ selectedType, addType }) => {
      const updatedTypes = selectedTypes.includes(selectedType)
        ? selectedTypes
        : selectedTypes.concat([selectedType])
      if ( addType ) {
        const types = await selectType(updatedTypes)
        return types
      } 
      return updatedTypes
    })
}

export default selectType