import inquirer from 'inquirer'

const getFunctionName = async (): Promise<string> => {
  const functionNameQuestion = {
    type: 'input',
    message: 'Please enter the function name',
    name: 'functionName',
  }

  return inquirer.prompt<{ functionName: string }>([functionNameQuestion]).then(({ functionName }) => functionName)
}

export default getFunctionName
