let hello = require('@/views/hello.js')

test('should get "Hello world"', (done) => {
  hello('world', (result) => {
    expect(result).toBe('Hello world')
    done()
  })
})
