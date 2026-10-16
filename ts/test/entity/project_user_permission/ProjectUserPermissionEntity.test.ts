

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


describe('ProjectUserPermissionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.ProjectUserPermission()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ProjectUserPermission().load({"project_id":1,"selected_user_id":"x","workspace_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_user_permission.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":0},"permission":{"a":true,"h":"Permission","n":"permission","op":{"update":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"permission","index$":1},"project":{"a":true,"h":"Project","n":"project","r":false,"t":"`$ANY`","key$":"project","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":3},"user":{"a":true,"h":"User","n":"user","r":false,"t":"`$ANY`","key$":"user","index$":4}},"name":"project_user_permission","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"selected_user_id","or":"selected_user_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}","q":{"exist":["project_id","selected_user_id","workspace_id"]},"r":{"param":{"project_key":"project_id","workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"projects"},{"var":"project_id"},{"lit":"permissions-config"},{"lit":"users"},{"var":"selected_user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["permission"],"co":{"id":"PUT /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"selected_user_id","or":"selected_user_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}","q":{"exist":["project_id","selected_user_id","workspace_id"]},"r":{"param":{"project_key":"project_id","workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"projects"},{"var":"project_id"},{"lit":"permissions-config"},{"lit":"users"},{"var":"selected_user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.workspace","$.main.kit.entity.project","$.main.kit.entity.user"]]},"key$":"project_user_permission","name__orig":"project_user_permission","Name":"ProjectUserPermission","name_":"project_user_permission","name-":"project-user-permission","NAME":"PROJECT_USER_PERMISSION","index$":84}, {"active":true,"entity":"project_user_permission","key$":"BasicProjectUserPermissionFlow","kind":"basic","name":"BasicProjectUserPermissionFlow","param":{},"step":[{"a":false,"d":{"project_id":"project01","workspace_id":"workspace01"},"i":{"ref":"project_user_permission_ref01","srcdatavar":"project_user_permission_ref01_data","suffix":"_up0","textfield":"permission"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_user_permission_ref01"}}],"v":[],"unreachable":true},{"a":false,"d":{},"i":{"ref":"project_user_permission_ref01","srcdatavar":"project_user_permission_ref01_data","suffix":"_dt0"},"m":{"id":"project_user_permission01","project_id":"project01","workspace_id":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_user_permission_ref01"}}],"unreachable":true}]}, 'ProjectUserPermission', {"GET /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}":{"protocol":"http","parameters":[{"name":"project_key","in":"path","description":"The project in question. This is the actual key assigned to the project.\n","required":true,"type":"string","index$":0},{"name":"selected_user_id","in":"path","description":"This can either be the username, the user's UUID surrounded by curly-braces,\nfor example: {account UUID}, or the user's Atlassian ID.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]},"PUT /workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}":{"protocol":"http","parameters":[{"name":"project_key","in":"path","description":"The project in question. This is the actual key assigned to the project.\n","required":true,"type":"string","index$":0},{"name":"selected_user_id","in":"path","description":"This can either be the username, the user's UUID surrounded by curly-braces,\nfor example: {account UUID}, or the user's Atlassian ID.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2},{"name":"_body","in":"body","description":"The permission to grant","required":true,"schema":{"type":"object","properties":{"permission":{"type":"string","enum":["read","write","create-repo","admin"],"key$":"permission"}},"required":["permission"],"additionalProperties":false,"x-ref":"#/definitions/bitbucket.apps.permissions.serializers.ProjectPermissionUpdateSchema","index$":1},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let project_user_permission_ref01_data = Object.values(setup.data.existing.project_user_permission)[0] as any

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
      '../../../../.sdk/test/entity/project_user_permission/ProjectUserPermissionTestData.json')

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
    ['project_user_permission01','project_user_permission02','project_user_permission03','workspace01','workspace02','workspace03','project01','project02','project03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PROJECT_USER_PERMISSION_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PROJECT_USER_PERMISSION_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PROJECT_USER_PERMISSION_ENTID']
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
  
