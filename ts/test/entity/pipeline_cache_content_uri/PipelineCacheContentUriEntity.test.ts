

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


describe('PipelineCacheContentUriEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PipelineCacheContentUri()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PipelineCacheContentUri().load({"cache_id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pipeline_cache_content_uri.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"uri":{"a":true,"fo":"uri","h":"Uri","n":"uri","r":false,"sh":"The uri for pipeline cache content.","t":"`$STRING`","key$":"uri","index$":0}},"name":"pipeline_cache_content_uri","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"cache_id","or":"cache_uuid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri","q":{"exist":["cache_id","repo_slug","workspace"]},"r":{"param":{"cache_uuid":"cache_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"pipelines-config"},{"lit":"caches"},{"var":"cache_id"},{"lit":"content-uri"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repository"]]},"key$":"pipeline_cache_content_uri","name__orig":"pipeline_cache_content_uri","Name":"PipelineCacheContentUri","name_":"pipeline_cache_content_uri","name-":"pipeline-cache-content-uri","NAME":"PIPELINE_CACHE_CONTENT_URI","index$":72}, {"active":true,"entity":"pipeline_cache_content_uri","key$":"BasicPipelineCacheContentUriFlow","kind":"basic","name":"BasicPipelineCacheContentUriFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"pipeline_cache_content_uri_ref01","srcdatavar":"pipeline_cache_content_uri_ref01_data","suffix":"_dt0"},"m":{"id":"pipeline_cache_content_uri01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pipeline_cache_content_uri_ref01"}}],"unreachable":true}]}, 'PipelineCacheContentUri', {"GET /repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri":{"protocol":"http","parameters":[{"name":"workspace","description":"The account.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1},{"name":"cache_uuid","description":"The UUID of the cache.","required":true,"in":"path","type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pipeline_cache_content_uri_ref01_data = Object.values(setup.data.existing.pipeline_cache_content_uri)[0] as any

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
      '../../../../.sdk/test/entity/pipeline_cache_content_uri/PipelineCacheContentUriTestData.json')

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
    ['pipeline_cache_content_uri01','pipeline_cache_content_uri02','pipeline_cache_content_uri03','repository01','repository02','repository03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PIPELINE_CACHE_CONTENT_URI_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PIPELINE_CACHE_CONTENT_URI_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PIPELINE_CACHE_CONTENT_URI_ENTID']
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
  
