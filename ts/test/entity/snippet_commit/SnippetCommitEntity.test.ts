

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


describe('SnippetCommitEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.SnippetCommit()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SnippetCommit().load({"encoded_id":1,"id":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'snippet_commit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"t":"`$ANY`","key$":"author","index$":0},"committer":{"a":true,"h":"Committer","n":"committer","r":false,"t":"`$ANY`","key$":"committer","index$":1},"date":{"a":true,"fo":"date-time","h":"Date","n":"date","r":false,"t":"`$STRING`","key$":"date","index$":2},"hash":{"a":true,"h":"Hash","n":"hash","r":false,"t":"`$STRING`","key$":"hash","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":5},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":6},"parents":{"a":true,"h":"Parents","n":"parents","r":false,"t":"`$ARRAY`","key$":"parents","index$":7},"snippet":{"a":true,"h":"Snippet","n":"snippet","r":false,"t":"`$ANY`","key$":"snippet","index$":8},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"t":"`$OBJECT`","key$":"summary","index$":9},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":10}},"id":{"field":"id","name":"id"},"name":"snippet_commit","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /snippets/{workspace}/{encoded_id}/commits/{revision}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"encoded_id","or":"encoded_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"revision","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/snippets/{workspace}/{encoded_id}/commits/{revision}","q":{"exist":["encoded_id","id","workspace"]},"r":{"param":{"revision":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"snippets"},{"var":"workspace"},{"var":"encoded_id"},{"lit":"commits"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.snippet"]]},"key$":"snippet_commit","name__orig":"snippet_commit","Name":"SnippetCommit","name_":"snippet_commit","name-":"snippet-commit","NAME":"SNIPPET_COMMIT","index$":101}, {"active":true,"entity":"snippet_commit","key$":"BasicSnippetCommitFlow","kind":"basic","name":"BasicSnippetCommitFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"snippet_commit_ref01","srcdatavar":"snippet_commit_ref01_data","suffix":"_dt0"},"m":{"encoded_id":"encoded01","id":"snippet_commit01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-snippet_commit_ref01"}}]}]}, 'SnippetCommit', {"GET /snippets/{workspace}/{encoded_id}/commits/{revision}":{"protocol":"http","parameters":[{"name":"encoded_id","in":"path","description":"The snippet id.","required":true,"type":"string","index$":0},{"name":"revision","in":"path","description":"The commit's SHA1.","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let snippet_commit_ref01_data = Object.values(setup.data.existing.snippet_commit)[0] as any

    // LOAD
    const snippet_commit_ref01_ent = client.SnippetCommit()
    const snippet_commit_ref01_match_dt0: any = {}
    snippet_commit_ref01_match_dt0.id = snippet_commit_ref01_data.id
    snippet_commit_ref01_match_dt0['encoded_id'] = setup.idmap['encoded_id'] ?? setup.idmap['encoded01']
    snippet_commit_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    const snippet_commit_ref01_data_dt0 = (await snippet_commit_ref01_ent.load(snippet_commit_ref01_match_dt0)).data()
    assert(snippet_commit_ref01_data_dt0.id === snippet_commit_ref01_data.id)


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
      '../../../../.sdk/test/entity/snippet_commit/SnippetCommitTestData.json')

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
    ['snippet_commit01','snippet_commit02','snippet_commit03','snippet01','snippet02','snippet03','encoded01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_SNIPPET_COMMIT_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_SNIPPET_COMMIT_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_SNIPPET_COMMIT_ENTID']
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
  
