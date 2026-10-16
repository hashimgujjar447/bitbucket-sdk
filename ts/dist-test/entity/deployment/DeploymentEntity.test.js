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
(0, node_test_1.describe)('DeploymentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.Deployment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Deployment().load({ "id": 1, "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'deployment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "environment": { "a": true, "h": "Environment", "n": "environment", "r": false, "sh": "A deployment environment.", "t": "`$ANY`", "key$": "environment", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "release": { "a": true, "h": "Release", "n": "release", "r": false, "sh": "The release associated with this deployment.", "t": "`$ANY`", "key$": "release", "index$": 2 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$ANY`", "key$": "state", "index$": 3 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 4 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "sh": "The UUID identifying the deployment.", "t": "`$STRING`", "key$": "uuid", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "deployment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "environment_uuid", "or": "environment_uuid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes", "q": { "exist": ["environment_uuid", "repo_slug", "workspace"] }, "r": {}, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "environments" }, { "var": "environment_uuid" }, { "lit": "changes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "deployment_uuid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": { "param": { "deployment_uuid": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "deployments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "environment_uuid", "or": "environment_uuid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", "q": { "exist": ["environment_uuid", "repo_slug", "workspace"] }, "r": {}, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "environments" }, { "var": "environment_uuid" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "key_id", "or": "key_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}", "q": { "exist": ["key_id", "project_id", "workspace_id"] }, "r": { "param": { "project_key": "project_id", "workspace": "workspace_id" } }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "deploy-keys" }, { "var": "key_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "DELETE /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "key_id", "or": "key_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", "q": { "exist": ["key_id", "repo_slug", "workspace"] }, "r": {}, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "deploy-keys" }, { "var": "key_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"], ["$.main.kit.entity.repository", "$.main.kit.entity.deploy_key"], ["$.main.kit.entity.repository"], ["$.main.kit.entity.workspace", "$.main.kit.entity.project", "$.main.kit.entity.deploy_key"]] }, "key$": "deployment", "name__orig": "deployment", "Name": "Deployment", "name_": "deployment", "name-": "deployment", "NAME": "DEPLOYMENT", "index$": 12 }, { "active": true, "entity": "deployment", "key$": "BasicDeploymentFlow", "kind": "basic", "name": "BasicDeploymentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "deployment_ref01" }, "m": { "environment_uuid": "environment_uuid01", "project_id": "project01", "repo_slug": "repo_slug01", "workspace": "workspace01", "workspace_id": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "deployment_ref01", "srcdatavar": "deployment_ref01_data", "suffix": "_dt0" }, "m": { "id": "deployment01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-deployment_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "deployment_ref01", "suffix": "_rm0" }, "m": { "id": "deployment01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "remove", "s": [], "v": [] }] }, 'Deployment', { "POST /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "environment_uuid", "description": "The environment UUID.", "required": true, "in": "path", "type": "string", "index$": 2 }] }, "GET /repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "deployment_uuid", "description": "The deployment UUID.", "required": true, "in": "path", "type": "string", "index$": 2 }] }, "DELETE /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}": { "protocol": "http", "parameters": [{ "name": "workspace", "description": "This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.", "required": true, "in": "path", "type": "string", "index$": 0 }, { "name": "repo_slug", "description": "The repository.", "required": true, "in": "path", "type": "string", "index$": 1 }, { "name": "environment_uuid", "description": "The environment UUID.", "required": true, "in": "path", "type": "string", "index$": 2 }] }, "DELETE /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}": { "protocol": "http", "parameters": [{ "name": "key_id", "in": "path", "description": "The key ID matching the project deploy key.", "required": true, "type": "string", "index$": 0 }, { "name": "project_key", "in": "path", "description": "The project in question. This is the actual `key` assigned\nto the project.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "DELETE /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}": { "protocol": "http", "parameters": [{ "name": "key_id", "in": "path", "description": "The key ID matching the deploy key.", "required": true, "type": "string", "index$": 0 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const deployment_ref01_ent = client.Deployment();
        let deployment_ref01_data = setup.data.new.deployment['deployment_ref01'];
        deployment_ref01_data['environment_uuid'] = setup.idmap['environment_uuid01'];
        deployment_ref01_data['project_id'] = setup.idmap['project01'];
        deployment_ref01_data['repo_slug'] = setup.idmap['repo_slug01'];
        deployment_ref01_data['workspace'] = setup.idmap['workspace01'];
        deployment_ref01_data['workspace_id'] = setup.idmap['workspace01'];
        deployment_ref01_data = (await deployment_ref01_ent.create(deployment_ref01_data)).data();
        (0, node_assert_1.default)(null != deployment_ref01_data.id);
        // LOAD
        const deployment_ref01_match_dt0 = {};
        deployment_ref01_match_dt0.id = deployment_ref01_data.id;
        deployment_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        deployment_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const deployment_ref01_data_dt0 = (await deployment_ref01_ent.load(deployment_ref01_match_dt0)).data();
        (0, node_assert_1.default)(deployment_ref01_data_dt0.id === deployment_ref01_data.id);
        // REMOVE
        const deployment_ref01_match_rm0 = { id: deployment_ref01_data.id };
        deployment_ref01_match_rm0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        deployment_ref01_match_rm0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        await deployment_ref01_ent.remove(deployment_ref01_match_rm0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/deployment/DeploymentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['deployment01', 'deployment02', 'deployment03', 'repository01', 'repository02', 'repository03', 'deploy_key01', 'deploy_key02', 'deploy_key03', 'workspace01', 'workspace02', 'workspace03', 'project01', 'project02', 'project03', 'environment_uuid01', 'repo_slug01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_DEPLOYMENT_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_DEPLOYMENT_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_DEPLOYMENT_ENTID'];
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
//# sourceMappingURL=DeploymentEntity.test.js.map