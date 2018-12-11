import fs from 'fs'
import path from 'path'

const getDirectoryNames = async (basePath: string): Promise<string[]> => {
  const directoryPath = path.resolve(process.cwd(), basePath)
  return new Promise<string[]>((res, rej) => {
    fs.readdir(directoryPath, (err, items) => {
      if (err) {
        return rej(err)
      } else {
        return res(
          items.filter(item => {
            return fs.statSync(path.resolve(directoryPath, item)).isDirectory()
          }),
        )
      }
    })
  })
}

export default getDirectoryNames
