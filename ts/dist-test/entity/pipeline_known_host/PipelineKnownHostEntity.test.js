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
(0, node_test_1.describe)('PipelineKnownHostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PipelineKnownHost();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PipelineKnownHost().load({ "id": 1, "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pipeline_known_host.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "hostname": { "a": true, "h": "Hostname", "n": "hostname", "r": false, "sh": "The hostname of the known host.", "t": "`$STRING`", "key$": "hostname", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "public_key": { "a": true, "h": "Public Key", "n": "public_key", "r": false, "sh": "The public key of the known host.", "t": "`$ANY`", "key$": "public_key", "index$": 2 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 3 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "sh": "The UUID identifying the known host.", "t": "`$STRING`", "key$": "uuid", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "pipeline_known_host", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["hostname", "public_key", "type", "uuid"], "co": { "id": "POST /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts", "q": { "exist": ["repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pipelines_config" }, { "lit": "ssh" }, { "lit": "known_hosts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "known_host_uuid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": { "param": { "known_host_uuid": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pipelines_config" }, { "lit": "ssh" }, { "lit": "known_hosts" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["hostname", "public_key", "type", "uuid"], "co": { "id": "PUT /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "known_host_uuid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": { "param": { "known_host_uuid": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pipelines_config" }, { "lit": "ssh" }, { "lit": "known_hosts" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"]] }, "key$": "pipeline_known_host", "name__orig": "pipeline_known_host", "Name": "PipelineKnownHost", "name_": "pipeline_known_host", "name-": "pipeline-known-host", "NAME": "PIPELINE_KNOWN_HOST", "index$": 73 }, { "active": true, "entity": "pipeline_known_host", "key$": "BasicPipelineKnownHostFlow", "kind": "basic", "name": "BasicPipelineKnownHostFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "pipeline_known_host_ref01" }, "m": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "i": { "ref": "pipeline_known_host_ref01", "srcdatavar": "pipeline_known_host_ref01_data", "suffix": "_up0", "textfield": "hostname" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pipeline_known_host_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "pipeline_known_host_ref01", "srcdatavar": "pipeline_known_host_ref01_data", "suffix": "_dt0" }, "m": { "id": "pipeline_known_host01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pipeline_known_host_ref01" } }] }] }, 'PipelineKnownHost', { "POST /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "_body", "in": "body", "description": "The known host to create.", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "additionalProperties": true, "type": "object", "title": "Pipeline Known Host", "description": "A Pipelines known host.", "properties": { "uuid": { "type": "string", "description": "The UUID identifying the known host.", "key$": "uuid" }, "hostname": { "type": "string", "description": "The hostname of the known host.", "key$": "hostname" }, "public_key": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": {}, "required": [], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "additionalProperties": true, "type": "object", "title": "Pipeline SSH Public Key", "description": "A Pipelines known host public key.", "properties": {} }], "description": "The public key of the known host.", "x-ref": "#/definitions/pipeline_ssh_public_key", "key$": "public_key" } } }], "x-ref": "#/definitions/pipeline_known_host", "index$": 1 }, "index$": 2 }] }, "GET /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "known_host_uuid", "description": "The UUID of the known host to retrieve.", "required": true, "in": "path", "type": "string", "index$": 2 }] }, "PUT /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "known_host_uuid", "description": "The UUID of the known host to update.", "required": true, "in": "path", "type": "string", "index$": 2 }, { "name": "_body", "in": "body", "description": "The updated known host.", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "additionalProperties": true, "type": "object", "title": "Pipeline Known Host", "description": "A Pipelines known host.", "properties": { "uuid": { "type": "string", "description": "The UUID identifying the known host.", "key$": "uuid" }, "hostname": { "type": "string", "description": "The hostname of the known host.", "key$": "hostname" }, "public_key": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": {}, "required": [], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "additionalProperties": true, "type": "object", "title": "Pipeline SSH Public Key", "description": "A Pipelines known host public key.", "properties": {} }], "description": "The public key of the known host.", "x-ref": "#/definitions/pipeline_ssh_public_key", "key$": "public_key" } } }], "x-ref": "#/definitions/pipeline_known_host", "index$": 1 }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const pipeline_known_host_ref01_ent = client.PipelineKnownHost();
        let pipeline_known_host_ref01_data = setup.data.new.pipeline_known_host['pipeline_known_host_ref01'];
        pipeline_known_host_ref01_data['repo_slug'] = setup.idmap['repo_slug01'];
        pipeline_known_host_ref01_data['workspace'] = setup.idmap['workspace01'];
        pipeline_known_host_ref01_data = (await pipeline_known_host_ref01_ent.create(pipeline_known_host_ref01_data)).data();
        (0, node_assert_1.default)(null != pipeline_known_host_ref01_data.id);
        // UPDATE
        const pipeline_known_host_ref01_data_up0 = {};
        pipeline_known_host_ref01_data_up0.id = pipeline_known_host_ref01_data.id;
        pipeline_known_host_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        pipeline_known_host_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const pipeline_known_host_ref01_markdef_up0 = { name: 'hostname', value: 'Mark01-pipeline_known_host_ref01_' + setup.now };
        pipeline_known_host_ref01_data_up0[pipeline_known_host_ref01_markdef_up0.name] = pipeline_known_host_ref01_markdef_up0.value;
        const pipeline_known_host_ref01_resdata_up0 = (await pipeline_known_host_ref01_ent.update(pipeline_known_host_ref01_data_up0)).data();
        (0, node_assert_1.default)(pipeline_known_host_ref01_resdata_up0.id === pipeline_known_host_ref01_data_up0.id);
        (0, node_assert_1.default)(pipeline_known_host_ref01_resdata_up0[pipeline_known_host_ref01_markdef_up0.name] === pipeline_known_host_ref01_markdef_up0.value);
        // LOAD
        const pipeline_known_host_ref01_match_dt0 = {};
        pipeline_known_host_ref01_match_dt0.id = pipeline_known_host_ref01_data.id;
        pipeline_known_host_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        pipeline_known_host_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const pipeline_known_host_ref01_data_dt0 = (await pipeline_known_host_ref01_ent.load(pipeline_known_host_ref01_match_dt0)).data();
        (0, node_assert_1.default)(pipeline_known_host_ref01_data_dt0.id === pipeline_known_host_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pipeline_known_host/PipelineKnownHostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pipeline_known_host01', 'pipeline_known_host02', 'pipeline_known_host03', 'repository01', 'repository02', 'repository03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PIPELINE_KNOWN_HOST_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PIPELINE_KNOWN_HOST_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PIPELINE_KNOWN_HOST_ENTID'];
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
//# sourceMappingURL=PipelineKnownHostEntity.test.js.map