

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


describe('PaginatedAnnotationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('BITBUCKET_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BitbucketSdkSDK.test()
    const ent = testsdk.PaginatedAnnotation()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginatedAnnotation().list({"commit_id":1,"repo_slug":"x","report_id":"x","workspace":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paginated_annotation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"annotation_type":{"a":true,"h":"Annotation Type","n":"annotation_type","r":false,"sh":"The type of the report.","t":"`$STRING`","key$":"annotation_type","index$":0},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"sh":"The timestamp when the report was created.","t":"`$STRING`","key$":"created_on","index$":1},"details":{"a":true,"h":"Details","n":"details","r":false,"sh":"The details to show to users when clicking on the annotation.","t":"`$STRING`","key$":"details","index$":2},"external_id":{"a":true,"h":"External Id","n":"external_id","r":false,"sh":"ID of the annotation provided by the annotation creator.","t":"`$STRING`","key$":"external_id","index$":3},"line":{"a":true,"h":"Line","n":"line","r":false,"sh":"The line number that the annotation should belong to.","t":"`$INTEGER`","key$":"line","index$":4},"link":{"a":true,"fo":"uri","h":"Link","n":"link","r":false,"sh":"A URL linking to the annotation in an external tool.","t":"`$STRING`","key$":"link","index$":5},"path":{"a":true,"h":"Path","n":"path","r":false,"sh":"The path of the file on which this annotation should be placed.","t":"`$STRING`","key$":"path","index$":6},"result":{"a":true,"h":"Result","n":"result","r":false,"sh":"The state of the report.","t":"`$STRING`","key$":"result","index$":7},"severity":{"a":true,"h":"Severity","n":"severity","r":false,"sh":"The severity of the annotation.","t":"`$STRING`","key$":"severity","index$":8},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"sh":"The message to display to users.","t":"`$STRING`","key$":"summary","index$":9},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":10},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":false,"sh":"The timestamp when the report was updated.","t":"`$STRING`","key$":"updated_on","index$":11},"uuid":{"a":true,"h":"Uuid","n":"uuid","r":false,"sh":"The UUID that can be used to identify the annotation.","t":"`$STRING`","key$":"uuid","index$":12}},"name":"paginated_annotation","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"commit_id","or":"commit","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repo_slug","or":"repo_slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"report_id","or":"reportId","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"workspace","or":"workspace","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations","q":{"exist":["commit_id","repo_slug","report_id","workspace"]},"r":{"param":{"commit":"commit_id","reportId":"report_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"repositories"},{"var":"workspace"},{"var":"repo_slug"},{"lit":"commit"},{"var":"commit_id"},{"lit":"reports"},{"var":"report_id"},{"lit":"annotations"}],"t":{"req":"`reqdata`","res":"`body.values`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.repository","$.main.kit.entity.commit","$.main.kit.entity.report"]]},"key$":"paginated_annotation","name__orig":"paginated_annotation","Name":"PaginatedAnnotation","name_":"paginated_annotation","name-":"paginated-annotation","NAME":"PAGINATED_ANNOTATION","index$":23}, {"active":true,"entity":"paginated_annotation","key$":"BasicPaginatedAnnotationFlow","kind":"basic","name":"BasicPaginatedAnnotationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"commit_id":"commit01","repo_slug":"repo_slug01","report_id":"report01","workspace":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"paginated_annotation_ref01"}}]}]}, 'PaginatedAnnotation', {"GET /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations":{"protocol":"http","parameters":[{"name":"workspace","description":"This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.","required":true,"in":"path","type":"string","index$":0},{"name":"repo_slug","description":"The repository.","required":true,"in":"path","type":"string","index$":1},{"name":"commit","description":"The commit for which to retrieve reports.","required":true,"in":"path","type":"string","index$":2},{"name":"reportId","description":"Uuid or external-if of the report for which to get annotations for.","required":true,"in":"path","type":"string","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let paginated_annotation_ref01_data = Object.values(setup.data.existing.paginated_annotation)[0] as any

    // LIST
    const paginated_annotation_ref01_ent = client.PaginatedAnnotation()
    const paginated_annotation_ref01_match: any = {}
    paginated_annotation_ref01_match['commit_id'] = setup.idmap['commit01']
    paginated_annotation_ref01_match['repo_slug'] = setup.idmap['repo_slug01']
    paginated_annotation_ref01_match['report_id'] = setup.idmap['report01']
    paginated_annotation_ref01_match['workspace'] = setup.idmap['workspace01']

    const paginated_annotation_ref01_list = (await paginated_annotation_ref01_ent.list(paginated_annotation_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/paginated_annotation/PaginatedAnnotationTestData.json')

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
    ['paginated_annotation01','paginated_annotation02','paginated_annotation03','repository01','repository02','repository03','commit01','commit02','commit03','report01','report02','report03','repo_slug01','workspace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BITBUCKET_SDK_TEST_PAGINATED_ANNOTATION_ENTID': idmap,
    'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
    'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
    'BITBUCKET_SDK_APIKEY': '',
  })

  idmap = env['BITBUCKET_SDK_TEST_PAGINATED_ANNOTATION_ENTID']

  const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_ANNOTATION_ENTID']
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
  
