import { DirectoryInfo } from '@Interfaces/DirectoryInfo'

import writeDirectory from '../writeDirectory'

const writeFunctionDirectory = async (params: {
  rootDirectory: string
  functionName: string
  templates: {
    functionTemplate: string
    indexTemplate: string
    testTemplate: string
  }
}): Promise<DirectoryInfo> => {
  const { rootDirectory, functionName, templates } = params

  try {
    const info = await writeDirectory({
      rootDirectory,
      directoryName: functionName,
      files: [
        {
          name: `${functionName}.ts`,
          data: templates.functionTemplate,
        },
        {
          name: functionName + '.test.ts',
          data: templates.testTemplate,
        },
        {
          name: 'index.ts',
          data: templates.indexTemplate,
        },
      ],
    })
    return info
  } catch (err) {
    throw err
  }
}

export default writeFunctionDirectory
