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
(0, node_test_1.describe)('DefaultReviewerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.DefaultReviewer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.DefaultReviewer().load({ "id": 1, "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'default_reviewer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "display_name": { "a": true, "h": "Display Name", "n": "display_name", "r": false, "t": "`$STRING`", "key$": "display_name", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 2 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "sh": "Links related to an Account.", "t": "`$OBJECT`", "key$": "links", "index$": 3 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 4 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "t": "`$STRING`", "key$": "uuid", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "default_reviewer", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "target_username", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": { "param": { "target_username": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "default-reviewers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "target_username", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": { "param": { "target_username": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "default-reviewers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"]] }, "key$": "default_reviewer", "name__orig": "default_reviewer", "Name": "DefaultReviewer", "name_": "default_reviewer", "name-": "default-reviewer", "NAME": "DEFAULT_REVIEWER", "index$": 10 }, { "active": true, "entity": "default_reviewer", "key$": "BasicDefaultReviewerFlow", "kind": "basic", "name": "BasicDefaultReviewerFlow", "param": {}, "step": [{ "a": true, "d": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "i": { "ref": "default_reviewer_ref01", "srcdatavar": "default_reviewer_ref01_data", "suffix": "_up0", "textfield": "created_on" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-default_reviewer_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "default_reviewer_ref01", "srcdatavar": "default_reviewer_ref01_data", "suffix": "_dt0" }, "m": { "id": "default_reviewer01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-default_reviewer_ref01" } }] }] }, 'DefaultReviewer', { "GET /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}": { "protocol": "http", "parameters": [{ "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "target_username", "in": "path", "description": "This can either be the username or the UUID of the default reviewer,\nsurrounded by curly-braces, for example: `{account UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "PUT /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}": { "protocol": "http", "parameters": [{ "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "target_username", "in": "path", "description": "This can either be the username or the UUID of the default reviewer,\nsurrounded by curly-braces, for example: `{account UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let default_reviewer_ref01_data = Object.values(setup.data.existing.default_reviewer)[0];
        // UPDATE
        const default_reviewer_ref01_ent = client.DefaultReviewer();
        const default_reviewer_ref01_data_up0 = {};
        default_reviewer_ref01_data_up0.id = default_reviewer_ref01_data.id;
        default_reviewer_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        default_reviewer_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const default_reviewer_ref01_markdef_up0 = { name: 'created_on', value: 'Mark01-default_reviewer_ref01_' + setup.now };
        default_reviewer_ref01_data_up0[default_reviewer_ref01_markdef_up0.name] = default_reviewer_ref01_markdef_up0.value;
        const default_reviewer_ref01_resdata_up0 = (await default_reviewer_ref01_ent.update(default_reviewer_ref01_data_up0)).data();
        (0, node_assert_1.default)(default_reviewer_ref01_resdata_up0.id === default_reviewer_ref01_data_up0.id);
        (0, node_assert_1.default)(default_reviewer_ref01_resdata_up0[default_reviewer_ref01_markdef_up0.name] === default_reviewer_ref01_markdef_up0.value);
        // LOAD
        const default_reviewer_ref01_match_dt0 = {};
        default_reviewer_ref01_match_dt0.id = default_reviewer_ref01_data.id;
        default_reviewer_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        default_reviewer_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const default_reviewer_ref01_data_dt0 = (await default_reviewer_ref01_ent.load(default_reviewer_ref01_match_dt0)).data();
        (0, node_assert_1.default)(default_reviewer_ref01_data_dt0.id === default_reviewer_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/default_reviewer/DefaultReviewerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['default_reviewer01', 'default_reviewer02', 'default_reviewer03', 'repository01', 'repository02', 'repository03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_DEFAULT_REVIEWER_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_DEFAULT_REVIEWER_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_DEFAULT_REVIEWER_ENTID'];
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
//# sourceMappingURL=DefaultReviewerEntity.test.js.map