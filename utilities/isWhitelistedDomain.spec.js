const isWhitelistedDomain = require('./isWhitelistedDomain')

const whitelistedDomains = `
^[a-zA-Z0-9.].+gov.sg$
gov.sg
gmail.com
`

test('returns true if whitelisted domain', () => {
  expect(isWhitelistedDomain('test@open.gov.sg', whitelistedDomains)).toBe(true)
  expect(isWhitelistedDomain('test@gov.sg', whitelistedDomains)).toBe(true)
  expect(isWhitelistedDomain('test@hello.gov.sg', whitelistedDomains)).toBe(true)
  expect(isWhitelistedDomain('test@gmail.com', whitelistedDomains)).toBe(true)
})

test('returns false if not whitelisted domain', () => {
  expect(isWhitelistedDomain('test@example.sg', whitelistedDomains)).toBe(false)
  expect(isWhitelistedDomain('test@helloworld.com', whitelistedDomains)).toBe(false)
})