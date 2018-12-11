import childProcess from 'child_process'
import fs from 'fs'
import path from 'path'

describe('MODULE USAGE', () => {
  it('should show the version of the module', (done) => {
    childProcess.exec('node ./lib -V', (err, stdout) => {
      if ( err ) {
        done(err)
      }
      expect(stdout).toMatch('1.0.0')
      done()
    })
  }, 30000)
})