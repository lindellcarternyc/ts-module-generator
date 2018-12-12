import mkdirp from 'mkdirp'
import path from 'path'

import { DirectoryInfo } from './interfaces/DirectoryInfo'

import writeFile from './writeFile'

const writeDirectory = async (params: {
  rootDirectory: string
  directoryName: string
  files?: Array<{
    name: string
    data: string
  }>
}): Promise<DirectoryInfo> => {
  const dirpath = path.resolve(process.cwd(), params.rootDirectory, params.directoryName)
  return new Promise<DirectoryInfo>((res, rej) => {
    mkdirp(dirpath, async (err, made) => {
      if (err) {
        return rej(err)
      } else if (made === null) {
        const e = new Error('null made error from mkdirp')
        return rej(e)
      }

      let info: DirectoryInfo
      if (!!params.files && params.files.length > 0) {
        const filePromises = params.files.map(file => {
          const filepath = path.resolve(dirpath, file.name)
          return writeFile(filepath, file.data)
        })

        await Promise.all(filePromises)
        const files = params.files.reduce<{ [key: string]: { name: string; path: string } }>((fileResults, file) => {
          return Object.assign({}, fileResults, {
            [file.name]: { name: file.name, path: path.resolve(dirpath, file.name) },
          })
        }, {})

        info = {
          name: params.directoryName,
          path: dirpath,
          files,
        }
      } else {
        info = {
          name: params.directoryName,
          path: dirpath,
          files: {},
        }
      }
      return res(info)
    })
  })
}

export default writeDirectory
