
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BitbucketSdkSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BitbucketSdkSDK.test()
    equal(testsdk instanceof BitbucketSdkSDK, true,
      'BitbucketSdkSDK.test() must return a client synchronously')
  })

})
