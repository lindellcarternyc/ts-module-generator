export interface DirectoryInfo {
  name: string
  path: string
  files: {
    [key: string]: {
      name: string
      path: string
    }
  }
}