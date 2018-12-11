const functionExistsError = (functionName: string) => {
  const message = `FUNCTION EXISTS: ${functionName} already exists!`
  return new Error(message)
}

export { functionExistsError }
