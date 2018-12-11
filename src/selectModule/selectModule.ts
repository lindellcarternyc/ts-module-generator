import inquirer from 'inquirer'

const selectModule = async (moduleNames: string[]): Promise<string> => {
  const selectNameQuestion = {
    name: 'moduleName',
    type: 'list',
    choices: moduleNames,
    message: 'Please select a module name...',
  }

  return inquirer.prompt<{ moduleName: string }>([selectNameQuestion]).then(({ moduleName }) => {
    return moduleName
  })
}

export default selectModule
