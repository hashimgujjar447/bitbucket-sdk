

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


describe('ProjectDeployKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.ProjectDeployKey()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ProjectDeployKey().load({"id":1,"project_key":"x","workspace_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_deploy_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"added_on":{"a":true,"fo":"date-time","h":"Added On","n":"added_on","r":false,"t":"`$STRING`","key$":"added_on","index$":0},"comment":{"a":true,"h":"Comment","n":"comment","r":false,"sh":"The comment parsed from the deploy key (if present)","t":"`$STRING`","key$":"comment","index$":1},"created_by":{"a":true,"h":"Created By","n":"created_by","r":false,"t":"`$ANY`","key$":"created_by","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"The deploy key value.","t":"`$STRING`","key$":"key","index$":4},"label":{"a":true,"h":"Label","n":"label","r":false,"sh":"The user-defined label for the deploy key","t":"`$STRING`","key$":"label","index$":5},"last_used":{"a":true,"fo":"date-time","h":"Last Used","n":"last_used","r":false,"t":"`$STRING`","key$":"last_used","index$":6},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":7},"project":{"a":true,"h":"Project","n":"project","r":false,"t":"`$ANY`","key$":"project","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":9}},"id":{"field":"id","name":"id"},"name":"project_deploy_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /workspaces/{workspace}/projects/{project_key}/deploy-keys","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_key","or":"project_key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/workspaces/{workspace}/projects/{project_key}/deploy-keys","q":{"exist":["project_key","workspace_id"]},"r":{"param":{"workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"projects"},{"var":"project_key"},{"lit":"deploy-keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_key","or":"project_key","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}","q":{"exist":["id","project_key","workspace_id"]},"r":{"param":{"key_id":"id","workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"projects"},{"var":"project_key"},{"lit":"deploy-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.workspace","$.main.kit.entity.project"]]},"key$":"project_deploy_key","name__orig":"project_deploy_key","Name":"ProjectDeployKey","name_":"project_deploy_key","name-":"project-deploy-key","NAME":"PROJECT_DEPLOY_KEY","index$":82}, {"active":true,"entity":"project_deploy_key","key$":"BasicProjectDeployKeyFlow","kind":"basic","name":"BasicProjectDeployKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_deploy_key_ref01"},"m":{"project_key":"project_key01","workspace_id":"workspace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"project_deploy_key_ref01","srcdatavar":"project_deploy_key_ref01_data","suffix":"_dt0"},"m":{"id":"project_deploy_key01","project_key":"project_key01","workspace_id":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_deploy_key_ref01"}}]}]}, 'ProjectDeployKey', {"POST /workspaces/{workspace}/projects/{project_key}/deploy-keys":{"protocol":"http","parameters":[{"name":"project_key","in":"path","description":"The project in question. This is the actual `key` assigned\nto the project.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1}]},"GET /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}":{"protocol":"http","parameters":[{"name":"key_id","in":"path","description":"The key ID matching the project deploy key.","required":true,"type":"string","index$":0},{"name":"project_key","in":"path","description":"The project in question. This is the actual `key` assigned\nto the project.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_deploy_key_ref01_ent = client.ProjectDeployKey()
    let project_deploy_key_ref01_data = setup.data.new.project_deploy_key['project_deploy_key_ref01']
    project_deploy_key_ref01_data['project_key'] = setup.idmap['project_key01']
    project_deploy_key_ref01_data['workspace_id'] = setup.idmap['workspace01']

    project_deploy_key_ref01_data = (await project_deploy_key_ref01_ent.create(project_deploy_key_ref01_data)).data()
    assert(null != project_deploy_key_ref01_data.id)


    // LOAD
    const project_deploy_key_ref01_match_dt0: any = {}
    project_deploy_key_ref01_match_dt0.id = project_deploy_key_ref01_data.id
    project_deploy_key_ref01_match_dt0['project_key'] = setup.idmap['project_key'] ?? setup.idmap['project_key01']
    project_deploy_key_ref01_match_dt0['workspace_id'] = setup.idmap['workspace_id'] ?? setup.idmap['workspace01']
    const project_deploy_key_ref01_data_dt0 = (await project_deploy_key_ref01_ent.load(project_deploy_key_ref01_match_dt0)).data()
    assert(project_deploy_key_ref01_data_dt0.id === project_deploy_key_ref01_data.id)


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
      '../../../../.sdk/test/entity/project_deploy_key/ProjectDeployKeyTestData.json')

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
    ['project_deploy_key01','project_deploy_key02','project_deploy_key03','workspace01','workspace02','workspace03','project01','project02','project03','project_key01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PROJECT_DEPLOY_KEY_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PROJECT_DEPLOY_KEY_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PROJECT_DEPLOY_KEY_ENTID']
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
  
