const indexTemplate = (functionName: string) => {
  return `import ${functionName} from './${functionName}'
export default ${functionName}`
}

export default indexTemplate