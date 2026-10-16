

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


describe('ProjectBranchingModelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.ProjectBranchingModel()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ProjectBranchingModel().list({"project_key":1,"workspace_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_branching_model.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"branch_types":{"a":true,"h":"Branch Types","n":"branch_types","r":false,"sh":"The active branch types.","t":"`$ARRAY`","key$":"branch_types","index$":0},"development":{"a":true,"h":"Development","n":"development","r":true,"t":"`$OBJECT`","key$":"development","index$":1},"production":{"a":true,"h":"Production","n":"production","r":true,"t":"`$OBJECT`","key$":"production","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":3}},"name":"project_branching_model","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /workspaces/{workspace}/projects/{project_key}/branching-model","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_key","or":"project_key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace_id","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/workspaces/{workspace}/projects/{project_key}/branching-model","q":{"exist":["project_key","workspace_id"]},"r":{"param":{"workspace":"workspace_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"projects"},{"var":"project_key"},{"lit":"branching-model"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.workspace","$.main.kit.entity.project"]]},"key$":"project_branching_model","name__orig":"project_branching_model","Name":"ProjectBranchingModel","name_":"project_branching_model","name-":"project-branching-model","NAME":"PROJECT_BRANCHING_MODEL","index$":81}, {"active":true,"entity":"project_branching_model","key$":"BasicProjectBranchingModelFlow","kind":"basic","name":"BasicProjectBranchingModelFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_key":"project_key01","workspace_id":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"project_branching_model_ref01"}}]}]}, 'ProjectBranchingModel', {"GET /workspaces/{workspace}/projects/{project_key}/branching-model":{"protocol":"http","parameters":[{"name":"project_key","in":"path","description":"The project in question. This is the actual `key` assigned\nto the project.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let project_branching_model_ref01_data = Object.values(setup.data.existing.project_branching_model)[0] as any

    // LIST
    const project_branching_model_ref01_ent = client.ProjectBranchingModel()
    const project_branching_model_ref01_match: any = {}
    project_branching_model_ref01_match['project_key'] = setup.idmap['project_key01']
    project_branching_model_ref01_match['workspace_id'] = setup.idmap['workspace01']

    const project_branching_model_ref01_list = (await project_branching_model_ref01_ent.list(project_branching_model_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/project_branching_model/ProjectBranchingModelTestData.json')

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
    ['project_branching_model01','project_branching_model02','project_branching_model03','workspace01','workspace02','workspace03','project01','project02','project03','project_key01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PROJECT_BRANCHING_MODEL_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PROJECT_BRANCHING_MODEL_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PROJECT_BRANCHING_MODEL_ENTID']
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
  
