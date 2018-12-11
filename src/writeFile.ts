import fs from 'fs'

const writeFile = async (filepath: string, data: string) => {
  return new Promise((res, rej) => {
    fs.writeFile(filepath, data, err => {
      if ( err ) {
        return rej(err)
      }
      return res()
    })
  })
}

export default writeFile