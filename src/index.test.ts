import childProcess from 'child_process'

describe('MODULE USAGE', () => {
  it('should show the version of the module', done => {
    childProcess.exec('node ./lib -V', (err, stdout) => {
      if (err) {
        done(err)
      }
      expect(stdout).toMatch('1.1.1')
      done()
    })
  }, 30000)
})
