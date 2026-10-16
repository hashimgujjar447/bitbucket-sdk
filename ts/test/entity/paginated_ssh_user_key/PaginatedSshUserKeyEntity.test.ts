

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BitbucketSdkSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PaginatedSshUserKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedSshUserKey()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedSshUserKey().list({"selected_user":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_ssh_user_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"comment":{"a":true,"h":"Comment","n":"comment","r":false,"sh":"The comment parsed from the SSH key (if present)","t":"`$STRING`","key$":"comment","index$":0},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"t":"`$STRING`","key$":"created_on","index$":1},"expires_on":{"a":true,"fo":"date-time","h":"Expires On","n":"expires_on","r":false,"t":"`$STRING`","key$":"expires_on","index$":2},"fingerprint":{"a":true,"h":"Fingerprint","n":"fingerprint","r":false,"sh":"The SSH key fingerprint in SHA-256 format.","t":"`$STRING`","key$":"fingerprint","index$":3},"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"The SSH public key value in OpenSSH format.","t":"`$STRING`","key$":"key","index$":4},"label":{"a":true,"h":"Label","n":"label","r":false,"sh":"The user-defined label for the SSH key","t":"`$STRING`","key$":"label","index$":5},"last_used":{"a":true,"fo":"date-time","h":"Last Used","n":"last_used","r":false,"t":"`$STRING`","key$":"last_used","index$":6},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":7},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"t":"`$ANY`","key$":"owner","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":9},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The SSH key's immutable ID.","t":"`$STRING`","key$":"uuid","index$":10}},"name":"paginated_ssh_user_key","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /users/{selected_user}/ssh-keys","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"selected_user","or":"selected_user","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/{selected_user}/ssh-keys","q":{"exist":["selected_user"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"users"},{"var":"selected_user"},{"lit":"ssh-keys"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.user"]]},"key$":"paginated_ssh_user_key","name__orig":"paginated_ssh_user_key","Name":"PaginatedSshUserKey","name_":"paginated_ssh_user_key","name-":"paginated-ssh-user-key","NAME":"PAGINATED_SSH_USER_KEY","index$":63}, {"active":true,"entity":"paginated_ssh_user_key","key$":"BasicPaginatedSshUserKeyFlow","kind":"basic","name":"BasicPaginatedSshUserKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"selected_user":"selected_user01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_ssh_user_key_ref01"}}]}]}, 'PaginatedSshUserKey', {"GET /users/{selected_user}/ssh-keys":{"protocol":"http","parameters":[{"name":"selected_user","in":"path","description":"This can either be an Atlassian Account ID OR the UUID of the account,\nsurrounded by curly-braces, for example: `{account UUID}`.\n","required":true,"type":"string","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_ssh_user_key_ref01_data = Object.values(setup.data.existing.paginated_ssh_user_key)[0] as any

    // LIST
    const paginated_ssh_user_key_ref01_ent = client.PaginatedSshUserKey()
    const paginated_ssh_user_key_ref01_match: any = {}
    paginated_ssh_user_key_ref01_match['selected_user'] = setup.idmap['selected_user01']

    const paginated_ssh_user_key_ref01_list = (await paginated_ssh_user_key_ref01_ent.list(paginated_ssh_user_key_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/paginated_ssh_user_key/PaginatedSshUserKeyTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BitbucketSdkSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['paginated_ssh_user_key01','paginated_ssh_user_key02','paginated_ssh_user_key03','user01','user02','user03','selected_user01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_SSH_USER_KEY_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_SSH_USER_KEY_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_SSH_USER_KEY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BitbucketSdkSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.BITBUCKET_SDK_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BITBUCKET_SDK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
