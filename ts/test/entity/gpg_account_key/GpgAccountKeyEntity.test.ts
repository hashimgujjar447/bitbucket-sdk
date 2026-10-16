

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


describe('GpgAccountKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.GpgAccountKey()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.GpgAccountKey().load({"fingerprint":1,"selected_user":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'gpg_account_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"added_on":{"a":true,"fo":"date-time","h":"Added On","n":"added_on","r":false,"t":"`$STRING`","key$":"added_on","index$":0},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"t":"`$STRING`","key$":"created_on","index$":1},"expires_on":{"a":true,"fo":"date-time","h":"Expires On","n":"expires_on","r":false,"t":"`$STRING`","key$":"expires_on","index$":2},"fingerprint":{"a":true,"h":"Fingerprint","n":"fingerprint","r":false,"sh":"The GPG key fingerprint.","t":"`$STRING`","key$":"fingerprint","index$":3},"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"The GPG key value in X format.","t":"`$STRING`","key$":"key","index$":4},"key_id":{"a":true,"h":"Key Id","n":"key_id","r":false,"sh":"The unique identifier for the GPG key","t":"`$STRING`","key$":"key_id","index$":5},"last_used":{"a":true,"fo":"date-time","h":"Last Used","n":"last_used","r":false,"t":"`$STRING`","key$":"last_used","index$":6},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The user-defined label for the GPG key","t":"`$STRING`","key$":"name","index$":8},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"t":"`$ANY`","key$":"owner","index$":9},"parent_fingerprint":{"a":true,"h":"Parent Fingerprint","n":"parent_fingerprint","r":false,"sh":"The fingerprint of the parent key.","t":"`$STRING`","key$":"parent_fingerprint","index$":10},"subkeys":{"a":true,"h":"Subkeys","n":"subkeys","r":false,"t":"`$ARRAY`","key$":"subkeys","index$":11},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":12}},"name":"gpg_account_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["added_on","created_on","expires_on","fingerprint","key","key_id","last_used","links","name","owner","parent_fingerprint","subkeys","type"],"co":{"id":"POST /users/{selected_user}/gpg-keys","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"selected_user","or":"selected_user","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/users/{selected_user}/gpg-keys","q":{"exist":["selected_user"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"users"},{"var":"selected_user"},{"lit":"gpg-keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /users/{selected_user}/gpg-keys/{fingerprint}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"fingerprint","or":"fingerprint","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"selected_user","or":"selected_user","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/users/{selected_user}/gpg-keys/{fingerprint}","q":{"exist":["fingerprint","selected_user"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"users"},{"var":"selected_user"},{"lit":"gpg-keys"},{"var":"fingerprint"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.user"],["$.main.kit.entity.user"]]},"key$":"gpg_account_key","name__orig":"gpg_account_key","Name":"GpgAccountKey","name_":"gpg_account_key","name-":"gpg-account-key","NAME":"GPG_ACCOUNT_KEY","index$":19}, {"active":true,"entity":"gpg_account_key","key$":"BasicGpgAccountKeyFlow","kind":"basic","name":"BasicGpgAccountKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"gpg_account_key_ref01"},"m":{"selected_user":"selected_user01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"gpg_account_key_ref01","srcdatavar":"gpg_account_key_ref01_data","suffix":"_dt0"},"m":{"id":"gpg_account_key01","selected_user":"selected_user01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-gpg_account_key_ref01"}}]}]}, 'GpgAccountKey', {"POST /users/{selected_user}/gpg-keys":{"protocol":"http","parameters":[{"name":"selected_user","in":"path","description":"This can either be an Atlassian Account ID OR the UUID of the account,\nsurrounded by curly-braces, for example: `{account UUID}`.\n","required":true,"type":"string","index$":0},{"name":"_body","in":"body","description":"The new GPG key object.","required":false,"schema":{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{"type":{"type":"string","key$":"type"}},"required":["type"],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"GPG Account Key","description":"Represents a GPG public key for a user.","properties":{"owner":{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{},"required":[],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"Account","description":"An account object.","properties":{},"additionalProperties":true}],"x-ref":"#/definitions/account","key$":"owner"},"key":{"type":"string","description":"The GPG key value in X format.","key$":"key"},"key_id":{"type":"string","description":"The unique identifier for the GPG key","key$":"key_id"},"fingerprint":{"type":"string","description":"The GPG key fingerprint.","key$":"fingerprint"},"parent_fingerprint":{"type":"string","description":"The fingerprint of the parent key. This value is null unless the current key is a subkey.","key$":"parent_fingerprint"},"name":{"type":"string","description":"The user-defined label for the GPG key","key$":"name"},"expires_on":{"type":"string","format":"date-time","key$":"expires_on"},"created_on":{"type":"string","format":"date-time","key$":"created_on"},"added_on":{"type":"string","format":"date-time","key$":"added_on"},"last_used":{"type":"string","format":"date-time","key$":"last_used"},"subkeys":{"type":"array","items":{"allOf":"[Circular *paths./users/{selected_user}/gpg-keys.get.responses.200.schema.properties.values.items.allOf]","x-ref":"#/definitions/GPG_account_key"},"minItems":0,"uniqueItems":true,"key$":"subkeys"},"links":{"type":"object","properties":{"self":{"type":"object","title":"Link","description":"A link to a resource related to this object.","properties":{},"additionalProperties":false}},"additionalProperties":false,"key$":"links"}},"additionalProperties":true}],"x-ref":"#/definitions/GPG_account_key","index$":1},"index$":1}]},"GET /users/{selected_user}/gpg-keys/{fingerprint}":{"protocol":"http","parameters":[{"name":"fingerprint","in":"path","description":"A GPG key fingerprint.\n","required":true,"type":"string","index$":0},{"name":"selected_user","in":"path","description":"This can either be an Atlassian Account ID OR the UUID of the account,\nsurrounded by curly-braces, for example: `{account UUID}`.\n","required":true,"type":"string","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const gpg_account_key_ref01_ent = client.GpgAccountKey()
    let gpg_account_key_ref01_data = setup.data.new.gpg_account_key['gpg_account_key_ref01']
    gpg_account_key_ref01_data['selected_user'] = setup.idmap['selected_user01']

    gpg_account_key_ref01_data = (await gpg_account_key_ref01_ent.create(gpg_account_key_ref01_data)).data()
    assert(null != gpg_account_key_ref01_data)



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
      '../../../../.sdk/test/entity/gpg_account_key/GpgAccountKeyTestData.json')

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
    ['gpg_account_key01','gpg_account_key02','gpg_account_key03','user01','user02','user03','selected_user01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_GPG_ACCOUNT_KEY_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_GPG_ACCOUNT_KEY_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_GPG_ACCOUNT_KEY_ENTID']
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
  
