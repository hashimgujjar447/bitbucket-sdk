

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


describe('WorkspaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.Workspace()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Workspace().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workspace.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"t":"`$STRING`","key$":"created_on","index$":0},"forking_mode":{"a":true,"h":"Forking Mode","n":"forking_mode","r":false,"sh":"Controls the rules for forking repositories within this workspace.","t":"`$STRING`","key$":"forking_mode","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"is_personal":{"a":true,"h":"Is Personal","n":"is_personal","r":false,"sh":"Indicates whether the workspace belongs to an individual user.","t":"`$BOOLEAN`","key$":"is_personal","index$":3},"is_privacy_enforced":{"a":true,"h":"Is Privacy Enforced","n":"is_privacy_enforced","r":false,"sh":"Indicates whether the workspace enforces private content, or whether it allows public content.","t":"`$BOOLEAN`","key$":"is_privacy_enforced","index$":4},"is_private":{"a":true,"h":"Is Private","n":"is_private","r":false,"sh":"Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members.","t":"`$BOOLEAN`","key$":"is_private","index$":5},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the workspace.","t":"`$STRING`","key$":"name","index$":7},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"sh":"The short label that identifies this workspace.","t":"`$STRING`","key$":"slug","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":9},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":false,"t":"`$STRING`","key$":"updated_on","index$":10},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The workspace's immutable id.","t":"`$STRING`","key$":"uuid","index$":11}},"id":{"field":"id","name":"id"},"name":"workspace","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /workspaces/{workspace}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"workspace","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/workspaces/{workspace}","q":{"exist":["id"]},"r":{"param":{"workspace":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /workspaces/{workspace}/settings/gpg/public-key","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"workspace","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/settings/gpg/public-key","q":{"exist":["id"]},"r":{"param":{"workspace":"id"}},"s":[{"lit":"workspaces"},{"var":"id"},{"lit":"settings"},{"lit":"gpg"},{"lit":"public-key"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /workspaces/{workspace}/hooks/{uid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"workspace","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"uid","or":"uid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/workspaces/{workspace}/hooks/{uid}","q":{"exist":["id","uid"]},"r":{"param":{"workspace":"id"}},"s":[{"lit":"workspaces"},{"var":"id"},{"lit":"hooks"},{"var":"uid"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"workspace","name__orig":"workspace","Name":"Workspace","name_":"workspace","name-":"workspace","NAME":"WORKSPACE","index$":109}, {"active":true,"entity":"workspace","key$":"BasicWorkspaceFlow","kind":"basic","name":"BasicWorkspaceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workspace_ref01","srcdatavar":"workspace_ref01_data","suffix":"_dt0"},"m":{"id":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workspace_ref01"}}]}]}, 'Workspace', {"GET /workspaces/{workspace}":{"protocol":"http","parameters":[{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":0}]},"GET /workspaces/{workspace}/settings/gpg/public-key":{"protocol":"http","parameters":[{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":0}]},"DELETE /workspaces/{workspace}/hooks/{uid}":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"uid","description":"The webhook's id.","required":true,"in":"path","type":"string","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workspace_ref01_data = Object.values(setup.data.existing.workspace)[0] as any

    // LOAD
    const workspace_ref01_ent = client.Workspace()
    const workspace_ref01_match_dt0: any = {}
    workspace_ref01_match_dt0.id = workspace_ref01_data.id
    const workspace_ref01_data_dt0 = (await workspace_ref01_ent.load(workspace_ref01_match_dt0)).data()
    assert(workspace_ref01_data_dt0.id === workspace_ref01_data.id)


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
      '../../../../.sdk/test/entity/workspace/WorkspaceTestData.json')

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
    ['workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_WORKSPACE_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_WORKSPACE_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_WORKSPACE_ENTID']
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
  
