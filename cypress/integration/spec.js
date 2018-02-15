describe('CORS + 301 redirect', () => {
  it('works', () => {
    return fetch('http://localhost:3000', {
      headers: {
        'x-foo': 'foo'
      }
    })
      .then(response => response.text())
      .then(result => {
        expect(result).to.equal('ok')
      })

      .catch(error => {
        debugger
        throw error
      })
  })
})
