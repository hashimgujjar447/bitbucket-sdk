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
(0, node_test_1.describe)('ProjectDeployKeyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.ProjectDeployKey();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ProjectDeployKey().load({ "id": 1, "project_key": "x", "workspace_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project_deploy_key.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "added_on": { "a": true, "fo": "date-time", "h": "Added On", "n": "added_on", "r": false, "t": "`$STRING`", "key$": "added_on", "index$": 0 }, "comment": { "a": true, "h": "Comment", "n": "comment", "r": false, "sh": "The comment parsed from the deploy key (if present)", "t": "`$STRING`", "key$": "comment", "index$": 1 }, "created_by": { "a": true, "h": "Created By", "n": "created_by", "r": false, "t": "`$ANY`", "key$": "created_by", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "sh": "The deploy key value.", "t": "`$STRING`", "key$": "key", "index$": 4 }, "label": { "a": true, "h": "Label", "n": "label", "r": false, "sh": "The user-defined label for the deploy key", "t": "`$STRING`", "key$": "label", "index$": 5 }, "last_used": { "a": true, "fo": "date-time", "h": "Last Used", "n": "last_used", "r": false, "t": "`$STRING`", "key$": "last_used", "index$": 6 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 7 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "t": "`$ANY`", "key$": "project", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "project_deploy_key", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /workspaces/{workspace}/projects/{project_key}/deploy-keys", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_key", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/workspaces/{workspace}/projects/{project_key}/deploy-keys", "q": { "exist": ["project_key", "workspace_id"] }, "r": { "param": { "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "project_key" }, { "lit": "deploy-keys" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "key_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_key", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}", "q": { "exist": ["id", "project_key", "workspace_id"] }, "r": { "param": { "key_id": "id", "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "project_key" }, { "lit": "deploy-keys" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace", "$.main.kit.entity.project"]] }, "key$": "project_deploy_key", "name__orig": "project_deploy_key", "Name": "ProjectDeployKey", "name_": "project_deploy_key", "name-": "project-deploy-key", "NAME": "PROJECT_DEPLOY_KEY", "index$": 82 }, { "active": true, "entity": "project_deploy_key", "key$": "BasicProjectDeployKeyFlow", "kind": "basic", "name": "BasicProjectDeployKeyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "project_deploy_key_ref01" }, "m": { "project_key": "project_key01", "workspace_id": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "project_deploy_key_ref01", "srcdatavar": "project_deploy_key_ref01_data", "suffix": "_dt0" }, "m": { "id": "project_deploy_key01", "project_key": "project_key01", "workspace_id": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_deploy_key_ref01" } }] }] }, 'ProjectDeployKey', { "POST /workspaces/{workspace}/projects/{project_key}/deploy-keys": { "protocol": "http", "parameters": [{ "name": "project_key", "in": "path", "description": "The project in question. This is the actual `key` assigned\nto the project.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }] }, "GET /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}": { "protocol": "http", "parameters": [{ "name": "key_id", "in": "path", "description": "The key ID matching the project deploy key.", "required": true, "type": "string", "index$": 0 }, { "name": "project_key", "in": "path", "description": "The project in question. This is the actual `key` assigned\nto the project.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const project_deploy_key_ref01_ent = client.ProjectDeployKey();
        let project_deploy_key_ref01_data = setup.data.new.project_deploy_key['project_deploy_key_ref01'];
        project_deploy_key_ref01_data['project_key'] = setup.idmap['project_key01'];
        project_deploy_key_ref01_data['workspace_id'] = setup.idmap['workspace01'];
        project_deploy_key_ref01_data = (await project_deploy_key_ref01_ent.create(project_deploy_key_ref01_data)).data();
        (0, node_assert_1.default)(null != project_deploy_key_ref01_data.id);
        // LOAD
        const project_deploy_key_ref01_match_dt0 = {};
        project_deploy_key_ref01_match_dt0.id = project_deploy_key_ref01_data.id;
        project_deploy_key_ref01_match_dt0['project_key'] = setup.idmap['project_key'] ?? setup.idmap['project_key01'];
        project_deploy_key_ref01_match_dt0['workspace_id'] = setup.idmap['workspace_id'] ?? setup.idmap['workspace01'];
        const project_deploy_key_ref01_data_dt0 = (await project_deploy_key_ref01_ent.load(project_deploy_key_ref01_match_dt0)).data();
        (0, node_assert_1.default)(project_deploy_key_ref01_data_dt0.id === project_deploy_key_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project_deploy_key/ProjectDeployKeyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project_deploy_key01', 'project_deploy_key02', 'project_deploy_key03', 'workspace01', 'workspace02', 'workspace03', 'project01', 'project02', 'project03', 'project_key01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PROJECT_DEPLOY_KEY_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PROJECT_DEPLOY_KEY_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PROJECT_DEPLOY_KEY_ENTID'];
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
//# sourceMappingURL=ProjectDeployKeyEntity.test.js.map