import program from 'commander'

import { generateFunction } from './main'

program.version('1.1.0').description('Generators for Typescript built on node!')

program
  .command('createFunction [rootDir]')
  .description('Create a new function')
  .action(async rootDir => {
    try {
      await generateFunction(rootDir || 'src')
    } catch (err) {
      throw err
    }
  })

program.parse(process.argv)
