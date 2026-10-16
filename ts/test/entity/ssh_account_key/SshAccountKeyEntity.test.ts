

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


describe('SshAccountKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.SshAccountKey()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SshAccountKey().load({"key_id":1,"selected_user":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ssh_account_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"comment":{"a":true,"h":"Comment","n":"comment","r":false,"sh":"The comment parsed from the SSH key (if present)","t":"`$STRING`","key$":"comment","index$":0},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"t":"`$STRING`","key$":"created_on","index$":1},"expires_on":{"a":true,"fo":"date-time","h":"Expires On","n":"expires_on","r":false,"t":"`$STRING`","key$":"expires_on","index$":2},"fingerprint":{"a":true,"h":"Fingerprint","n":"fingerprint","r":false,"sh":"The SSH key fingerprint in SHA-256 format.","t":"`$STRING`","key$":"fingerprint","index$":3},"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"The SSH public key value in OpenSSH format.","t":"`$STRING`","key$":"key","index$":4},"label":{"a":true,"h":"Label","n":"label","r":false,"sh":"The user-defined label for the SSH key","t":"`$STRING`","key$":"label","index$":5},"last_used":{"a":true,"fo":"date-time","h":"Last Used","n":"last_used","r":false,"t":"`$STRING`","key$":"last_used","index$":6},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":7},"owner":{"a":true,"h":"Owner","n":"owner","r":false,"t":"`$ANY`","key$":"owner","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":9},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The SSH key's immutable ID.","t":"`$STRING`","key$":"uuid","index$":10}},"name":"ssh_account_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["comment","created_on","expires_on","fingerprint","key","label","last_used","links","owner","type","uuid"],"co":{"id":"POST /users/{selected_user}/ssh-keys","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"selected_user","or":"selected_user","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"expires_on","or":"expires_on","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/users/{selected_user}/ssh-keys","q":{"exist":["selected_user"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"users"},{"var":"selected_user"},{"lit":"ssh-keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /users/{selected_user}/ssh-keys/{key_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"key_id","or":"key_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"selected_user","or":"selected_user","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/users/{selected_user}/ssh-keys/{key_id}","q":{"exist":["key_id","selected_user"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"users"},{"var":"selected_user"},{"lit":"ssh-keys"},{"var":"key_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["comment","created_on","expires_on","fingerprint","key","label","last_used","links","owner","type","uuid"],"co":{"id":"PUT /users/{selected_user}/ssh-keys/{key_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"key_id","or":"key_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"selected_user","or":"selected_user","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/users/{selected_user}/ssh-keys/{key_id}","q":{"exist":["key_id","selected_user"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"users"},{"var":"selected_user"},{"lit":"ssh-keys"},{"var":"key_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.user"],["$.main.kit.entity.user"]]},"key$":"ssh_account_key","name__orig":"ssh_account_key","Name":"SshAccountKey","name_":"ssh_account_key","name-":"ssh-account-key","NAME":"SSH_ACCOUNT_KEY","index$":104}, {"active":true,"entity":"ssh_account_key","key$":"BasicSshAccountKeyFlow","kind":"basic","name":"BasicSshAccountKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ssh_account_key_ref01"},"m":{"selected_user":"selected_user01"},"o":"create","s":[],"v":[]},{"a":false,"d":{"selected_user":"selected_user01"},"i":{"ref":"ssh_account_key_ref01","srcdatavar":"ssh_account_key_ref01_data","suffix":"_up0","textfield":"comment"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ssh_account_key_ref01"}}],"v":[],"unreachable":true},{"a":false,"d":{},"i":{"ref":"ssh_account_key_ref01","srcdatavar":"ssh_account_key_ref01_data","suffix":"_dt0"},"m":{"id":"ssh_account_key01","selected_user":"selected_user01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ssh_account_key_ref01"}}],"unreachable":true}]}, 'SshAccountKey', {"POST /users/{selected_user}/ssh-keys":{"protocol":"http","parameters":[{"name":"selected_user","in":"path","description":"This can either be an Atlassian Account ID OR the UUID of the account,\nsurrounded by curly-braces, for example: `{account UUID}`.\n","required":true,"type":"string","index$":0},{"name":"_body","in":"body","description":"The new SSH key object. Note that the username property has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).","required":false,"schema":{"allOf":[{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{"type":{"type":"string","key$":"type"}},"required":["type"],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"SSH Key","description":"Base type for representing SSH public keys.","properties":{"uuid":{"type":"string","description":"The SSH key's immutable ID.","key$":"uuid"},"key":{"type":"string","description":"The SSH public key value in OpenSSH format.","key$":"key"},"comment":{"type":"string","description":"The comment parsed from the SSH key (if present)","key$":"comment"},"label":{"type":"string","description":"The user-defined label for the SSH key","key$":"label"},"created_on":{"type":"string","format":"date-time","key$":"created_on"},"last_used":{"type":"string","format":"date-time","key$":"last_used"},"links":{"type":"object","properties":{},"additionalProperties":false,"key$":"links"}},"additionalProperties":true}],"x-ref":"#/definitions/ssh_key"},{"type":"object","title":"SSH Account Key","description":"Represents an SSH public key for a user.","properties":{"owner":{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{},"required":[],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"Account","description":"An account object.","properties":{},"additionalProperties":true}],"x-ref":"#/definitions/account","key$":"owner"},"expires_on":{"type":"string","format":"date-time","key$":"expires_on"},"fingerprint":{"type":"string","description":"The SSH key fingerprint in SHA-256 format.","key$":"fingerprint"}},"additionalProperties":true}],"x-ref":"#/definitions/ssh_account_key","index$":1},"index$":1},{"name":"expires_on","in":"query","description":"The date or date-time of when the key will expire,\nin [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format.\nExample: `YYYY-MM-DDTHH:mm:ss.sssZ`","required":false,"type":"string","index$":2}]},"GET /users/{selected_user}/ssh-keys/{key_id}":{"protocol":"http","parameters":[{"name":"key_id","in":"path","description":"The SSH key's UUID value.","required":true,"type":"string","index$":0},{"name":"selected_user","in":"path","description":"This can either be an Atlassian Account ID OR the UUID of the account,\nsurrounded by curly-braces, for example: `{account UUID}`.\n","required":true,"type":"string","index$":1}]},"PUT /users/{selected_user}/ssh-keys/{key_id}":{"protocol":"http","parameters":[{"name":"key_id","in":"path","description":"The SSH key's UUID value.","required":true,"type":"string","index$":0},{"name":"selected_user","in":"path","description":"This can either be an Atlassian Account ID OR the UUID of the account,\nsurrounded by curly-braces, for example: `{account UUID}`.\n","required":true,"type":"string","index$":1},{"name":"_body","in":"body","description":"The updated SSH key object","required":false,"schema":{"allOf":[{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{"type":{"type":"string","key$":"type"}},"required":["type"],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"SSH Key","description":"Base type for representing SSH public keys.","properties":{"uuid":{"type":"string","description":"The SSH key's immutable ID.","key$":"uuid"},"key":{"type":"string","description":"The SSH public key value in OpenSSH format.","key$":"key"},"comment":{"type":"string","description":"The comment parsed from the SSH key (if present)","key$":"comment"},"label":{"type":"string","description":"The user-defined label for the SSH key","key$":"label"},"created_on":{"type":"string","format":"date-time","key$":"created_on"},"last_used":{"type":"string","format":"date-time","key$":"last_used"},"links":{"type":"object","properties":{},"additionalProperties":false,"key$":"links"}},"additionalProperties":true}],"x-ref":"#/definitions/ssh_key"},{"type":"object","title":"SSH Account Key","description":"Represents an SSH public key for a user.","properties":{"owner":{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{},"required":[],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"Account","description":"An account object.","properties":{},"additionalProperties":true}],"x-ref":"#/definitions/account","key$":"owner"},"expires_on":{"type":"string","format":"date-time","key$":"expires_on"},"fingerprint":{"type":"string","description":"The SSH key fingerprint in SHA-256 format.","key$":"fingerprint"}},"additionalProperties":true}],"x-ref":"#/definitions/ssh_account_key","index$":1},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ssh_account_key_ref01_ent = client.SshAccountKey()
    let ssh_account_key_ref01_data = setup.data.new.ssh_account_key['ssh_account_key_ref01']
    ssh_account_key_ref01_data['selected_user'] = setup.idmap['selected_user01']

    ssh_account_key_ref01_data = (await ssh_account_key_ref01_ent.create(ssh_account_key_ref01_data)).data()
    assert(null != ssh_account_key_ref01_data)


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
      '../../../../.sdk/test/entity/ssh_account_key/SshAccountKeyTestData.json')

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
    ['ssh_account_key01','ssh_account_key02','ssh_account_key03','user01','user02','user03','selected_user01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_SSH_ACCOUNT_KEY_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_SSH_ACCOUNT_KEY_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_SSH_ACCOUNT_KEY_ENTID']
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
  
