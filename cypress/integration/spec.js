describe('CORS + 301 redirect', () => {
  it('redirects to foo', () => {
    return fetch('http://localhost:3000', {
      headers: {
        'x-redirect-to': 'foo'
      }
    })
      .then(response => response.text())
      .then(result => {
        expect(result).to.equal('foo')
      })
  })
  it('redirects to bar', () => {
    return fetch('http://localhost:3000', {
      headers: {
        'x-redirect-to': 'bar'
      }
    })
      .then(response => response.text())
      .then(result => {
        expect(result).to.equal('bar')
      })
  })
})
