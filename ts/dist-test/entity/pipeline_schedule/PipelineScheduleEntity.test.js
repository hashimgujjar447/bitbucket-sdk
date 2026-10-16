"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PipelineScheduleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PipelineSchedule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PipelineSchedule().load({ "id": 1, "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pipeline_schedule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "sh": "The timestamp when the schedule was created.", "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "cron_pattern": { "a": true, "h": "Cron Pattern", "n": "cron_pattern", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The cron expression with second precision (7 fields) that the schedule applies.", "t": "`$STRING`", "key$": "cron_pattern", "index$": 1 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "sh": "Whether the schedule is enabled.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "target": { "a": true, "h": "Target", "n": "target", "op": { "create": { "req": true, "type": "`$OBJECT`" } }, "r": false, "sh": "The target on which the schedule will be executed.", "t": "`$ANY`", "key$": "target", "index$": 4 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 5 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": false, "sh": "The timestamp when the schedule was updated.", "t": "`$STRING`", "key$": "updated_on", "index$": 6 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "sh": "The UUID identifying the schedule.", "t": "`$STRING`", "key$": "uuid", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "pipeline_schedule", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["cron_pattern", "enabled", "target", "type"], "co": { "id": "POST /repositories/{workspace}/{repo_slug}/pipelines_config/schedules", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules", "q": { "exist": ["repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pipelines_config" }, { "lit": "schedules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "schedule_uuid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": { "param": { "schedule_uuid": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pipelines_config" }, { "lit": "schedules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["enabled", "type"], "co": { "id": "PUT /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "schedule_uuid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": { "param": { "schedule_uuid": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pipelines_config" }, { "lit": "schedules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"]] }, "key$": "pipeline_schedule", "name__orig": "pipeline_schedule", "Name": "PipelineSchedule", "name_": "pipeline_schedule", "name-": "pipeline-schedule", "NAME": "PIPELINE_SCHEDULE", "index$": 75 }, { "active": true, "entity": "pipeline_schedule", "key$": "BasicPipelineScheduleFlow", "kind": "basic", "name": "BasicPipelineScheduleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "pipeline_schedule_ref01" }, "m": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "i": { "ref": "pipeline_schedule_ref01", "srcdatavar": "pipeline_schedule_ref01_data", "suffix": "_up0", "textfield": "created_on" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pipeline_schedule_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "pipeline_schedule_ref01", "srcdatavar": "pipeline_schedule_ref01_data", "suffix": "_dt0" }, "m": { "id": "pipeline_schedule01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pipeline_schedule_ref01" } }] }] }, 'PipelineSchedule', { "POST /repositories/{workspace}/{repo_slug}/pipelines_config/schedules": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "_body", "in": "body", "description": "The schedule to create.", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "additionalProperties": true, "type": "object", "title": "Request body for Pipeline Schedule POST request", "properties": { "target": { "type": "object", "description": "The target on which the schedule will be executed.", "properties": { "selector": { "allOf": [], "x-ref": "#/definitions/pipeline_selector" }, "ref_name": { "type": "string", "description": "The name of the reference." }, "ref_type": { "type": "string", "description": "The type of reference (branch only).", "enum": [] } }, "required": ["selector", "ref_name", "ref_type"], "key$": "target" }, "enabled": { "type": "boolean", "description": "Whether the schedule is enabled.", "key$": "enabled" }, "cron_pattern": { "type": "string", "description": "The cron expression with second precision (7 fields) that the schedule applies. For example, for expression: 0 0 12 * * ? *, will execute at 12pm UTC every day.", "key$": "cron_pattern" } }, "required": ["target", "cron_pattern"] }], "x-ref": "#/definitions/pipeline_schedule_post_request_body", "index$": 1 }, "index$": 2 }] }, "GET /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "schedule_uuid", "description": "The uuid of the schedule.", "required": true, "in": "path", "type": "string", "index$": 2 }] }, "PUT /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "schedule_uuid", "description": "The uuid of the schedule.", "required": true, "in": "path", "type": "string", "index$": 2 }, { "name": "_body", "in": "body", "description": "The schedule to update.", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "additionalProperties": true, "type": "object", "title": "Request body for Pipeline Schedule PUT request", "properties": { "enabled": { "type": "boolean", "description": "Whether the schedule is enabled.", "key$": "enabled" } } }], "x-ref": "#/definitions/pipeline_schedule_put_request_body", "index$": 1 }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const pipeline_schedule_ref01_ent = client.PipelineSchedule();
        let pipeline_schedule_ref01_data = setup.data.new.pipeline_schedule['pipeline_schedule_ref01'];
        pipeline_schedule_ref01_data['repo_slug'] = setup.idmap['repo_slug01'];
        pipeline_schedule_ref01_data['workspace'] = setup.idmap['workspace01'];
        pipeline_schedule_ref01_data = (await pipeline_schedule_ref01_ent.create(pipeline_schedule_ref01_data)).data();
        (0, node_assert_1.default)(null != pipeline_schedule_ref01_data.id);
        // UPDATE
        const pipeline_schedule_ref01_data_up0 = {};
        pipeline_schedule_ref01_data_up0.id = pipeline_schedule_ref01_data.id;
        pipeline_schedule_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        pipeline_schedule_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const pipeline_schedule_ref01_markdef_up0 = { name: 'created_on', value: 'Mark01-pipeline_schedule_ref01_' + setup.now };
        pipeline_schedule_ref01_data_up0[pipeline_schedule_ref01_markdef_up0.name] = pipeline_schedule_ref01_markdef_up0.value;
        const pipeline_schedule_ref01_resdata_up0 = (await pipeline_schedule_ref01_ent.update(pipeline_schedule_ref01_data_up0)).data();
        (0, node_assert_1.default)(pipeline_schedule_ref01_resdata_up0.id === pipeline_schedule_ref01_data_up0.id);
        (0, node_assert_1.default)(pipeline_schedule_ref01_resdata_up0[pipeline_schedule_ref01_markdef_up0.name] === pipeline_schedule_ref01_markdef_up0.value);
        // LOAD
        const pipeline_schedule_ref01_match_dt0 = {};
        pipeline_schedule_ref01_match_dt0.id = pipeline_schedule_ref01_data.id;
        pipeline_schedule_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        pipeline_schedule_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const pipeline_schedule_ref01_data_dt0 = (await pipeline_schedule_ref01_ent.load(pipeline_schedule_ref01_match_dt0)).data();
        (0, node_assert_1.default)(pipeline_schedule_ref01_data_dt0.id === pipeline_schedule_ref01_data.id);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pipeline_schedule/PipelineScheduleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pipeline_schedule01', 'pipeline_schedule02', 'pipeline_schedule03', 'repository01', 'repository02', 'repository03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PIPELINE_SCHEDULE_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PIPELINE_SCHEDULE_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PIPELINE_SCHEDULE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BitbucketSdkSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=PipelineScheduleEntity.test.js.map