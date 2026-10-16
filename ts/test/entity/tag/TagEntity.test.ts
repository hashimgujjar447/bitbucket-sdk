

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


describe('TagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.Tag()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Tag().load({"id":1,"repo_slug":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"fo":"date-time","h":"Date","n":"date","r":false,"sh":"The date that the tag was created, if available","t":"`$STRING`","key$":"date","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"links":{"a":true,"h":"Links","n":"links","r":false,"t":"`$OBJECT`","key$":"links","index$":2},"message":{"a":true,"h":"Message","n":"message","r":false,"sh":"The message associated with the tag, if available.","t":"`$STRING`","key$":"message","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the ref.","t":"`$STRING`","key$":"name","index$":4},"tagger":{"a":true,"h":"Tagger","n":"tagger","r":false,"t":"`$ANY`","key$":"tagger","index$":5},"target":{"a":true,"h":"Target","n":"target","r":false,"t":"`$ANY`","key$":"target","index$":6},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":7}},"id":{"field":"id","name":"id"},"name":"tag","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["date","links","message","name","tagger","target","type"],"co":{"id":"POST /repositories/{workspace}/{repo_slug}/refs/tags","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/repositories/{workspace}/{repo_slug}/refs/tags","q":{"exist":["repo_slug","workspace"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"refs"},{"lit":"tags"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/refs/tags/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/refs/tags/{name}","q":{"exist":["id","repo_slug","workspace"]},"r":{"param":{"name":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"refs"},{"lit":"tags"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repository"]]},"key$":"tag","name__orig":"tag","Name":"Tag","name_":"tag","name-":"tag","NAME":"TAG","index$":105}, {"active":true,"entity":"tag","key$":"BasicTagFlow","kind":"basic","name":"BasicTagFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tag_ref01"},"m":{"repo_slug":"repo_slug01","workspace":"workspace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"tag_ref01","srcdatavar":"tag_ref01_data","suffix":"_dt0"},"m":{"id":"tag01","repo_slug":"repo_slug01","workspace":"workspace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tag_ref01"}}]}]}, 'Tag', {"POST /repositories/{workspace}/{repo_slug}/refs/tags":{"protocol":"http","parameters":[{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":0},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":1},{"name":"_body","in":"body","required":true,"schema":{"allOf":[{"type":"object","title":"Ref","description":"A ref object, representing a branch or tag in a repository.","properties":{"type":{"type":"string","key$":"type"},"links":{"type":"object","properties":{"self":{"type":"object","title":"Link","description":"A link to a resource related to this object.","properties":{},"additionalProperties":false},"commits":{"type":"object","title":"Link","description":"A link to a resource related to this object.","properties":{},"additionalProperties":false},"html":{"type":"object","title":"Link","description":"A link to a resource related to this object.","properties":{},"additionalProperties":false}},"additionalProperties":false,"key$":"links"},"name":{"type":"string","description":"The name of the ref.","key$":"name"},"target":{"allOf":[{"allOf":[],"x-ref":"#/definitions/base_commit"},{"type":"object","title":"Commit","description":"A repository commit object.","properties":{},"additionalProperties":true}],"x-ref":"#/definitions/commit","key$":"target"}},"required":["type"],"additionalProperties":true,"x-ref":"#/definitions/ref"},{"type":"object","title":"Tag","description":"A tag object, representing a tag in a repository.","properties":{"message":{"type":"string","description":"The message associated with the tag, if available.","key$":"message"},"date":{"type":"string","description":"The date that the tag was created, if available","format":"date-time","key$":"date"},"tagger":{"allOf":[{"type":"object","description":"Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.","properties":{},"required":[],"additionalProperties":true,"discriminator":"type","x-ref":"#/definitions/object"},{"type":"object","title":"Author","description":"The author of a change in a repository","properties":{},"additionalProperties":true}],"x-ref":"#/definitions/author","key$":"tagger"}},"additionalProperties":true}],"x-ref":"#/definitions/tag","index$":1},"index$":2}]},"GET /repositories/{workspace}/{repo_slug}/refs/tags/{name}":{"protocol":"http","parameters":[{"name":"name","in":"path","description":"The name of the tag.","required":true,"type":"string","index$":0},{"name":"repo_slug","in":"path","description":"This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n","required":true,"type":"string","index$":1},{"name":"workspace","in":"path","description":"This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n","required":true,"type":"string","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tag_ref01_ent = client.Tag()
    let tag_ref01_data = setup.data.new.tag['tag_ref01']
    tag_ref01_data['repo_slug'] = setup.idmap['repo_slug01']
    tag_ref01_data['workspace'] = setup.idmap['workspace01']

    tag_ref01_data = (await tag_ref01_ent.create(tag_ref01_data)).data()
    assert(null != tag_ref01_data.id)


    // LOAD
    const tag_ref01_match_dt0: any = {}
    tag_ref01_match_dt0.id = tag_ref01_data.id
    tag_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01']
    tag_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01']
    const tag_ref01_data_dt0 = (await tag_ref01_ent.load(tag_ref01_match_dt0)).data()
    assert(tag_ref01_data_dt0.id === tag_ref01_data.id)


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
      '../../../../.sdk/test/entity/tag/TagTestData.json')

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
    ['tag01','tag02','tag03','repository01','repository02','repository03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_TAG_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_TAG_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_TAG_ENTID']
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
  
