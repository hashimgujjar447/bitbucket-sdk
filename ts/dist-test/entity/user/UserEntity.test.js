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
(0, node_test_1.describe)('UserEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.User();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.User().load({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "account_id": { "a": true, "h": "Account Id", "n": "account_id", "r": false, "sh": "The user's Atlassian account ID.", "t": "`$STRING`", "key$": "account_id", "index$": 0 }, "account_status": { "a": true, "h": "Account Status", "n": "account_status", "r": false, "sh": "The status of the account.", "t": "`$STRING`", "key$": "account_status", "index$": 1 }, "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "t": "`$STRING`", "key$": "created_on", "index$": 2 }, "display_name": { "a": true, "h": "Display Name", "n": "display_name", "r": false, "t": "`$STRING`", "key$": "display_name", "index$": 3 }, "has_2fa_enabled": { "a": true, "h": "Has 2fa Enabled", "n": "has_2fa_enabled", "r": false, "t": "`$BOOLEAN`", "key$": "has_2fa_enabled", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "is_staff": { "a": true, "h": "Is Staff", "n": "is_staff", "r": false, "t": "`$BOOLEAN`", "key$": "is_staff", "index$": 6 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "sh": "Links related to an Account.", "t": "`$OBJECT`", "key$": "links", "index$": 7 }, "nickname": { "a": true, "h": "Nickname", "n": "nickname", "r": false, "sh": "Account name defined by the owner.", "t": "`$STRING`", "key$": "nickname", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 9 }, "uuid": { "a": true, "h": "Uuid", "n": "uuid", "r": false, "t": "`$STRING`", "key$": "uuid", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "user", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "selected_user", "or": "selected_user", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}", "q": { "exist": ["project_id", "selected_user", "workspace_id"] }, "r": { "param": { "project_key": "project_id", "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "default-reviewers" }, { "var": "selected_user" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /user/emails/{email}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "email", "or": "email", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/user/emails/{email}", "q": { "exist": ["email"] }, "r": {}, "s": [{ "lit": "user" }, { "lit": "emails" }, { "var": "email" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /users/{selected_user}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "selected_user", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/users/{selected_user}", "q": { "exist": ["id"] }, "r": { "param": { "selected_user": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "users" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /user", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/user", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "user" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /user/emails", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/user/emails", "q": { "$action": "email" }, "r": {}, "s": [{ "lit": "user" }, { "lit": "emails" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "selected_user", "or": "selected_user", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace_id", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}", "q": { "exist": ["project_id", "selected_user", "workspace_id"] }, "r": { "param": { "project_key": "project_id", "workspace": "workspace_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "workspaces" }, { "var": "workspace_id" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "default-reviewers" }, { "var": "selected_user" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace", "$.main.kit.entity.project", "$.main.kit.entity.default_reviewer"]] }, "key$": "user", "name__orig": "user", "Name": "User", "name_": "user", "name-": "user", "NAME": "USER", "index$": 106 }, { "active": true, "entity": "user", "key$": "BasicUserFlow", "kind": "basic", "name": "BasicUserFlow", "param": {}, "step": [{ "a": false, "d": { "project_id": "project01", "workspace_id": "workspace01" }, "i": { "ref": "user_ref01", "srcdatavar": "user_ref01_data", "suffix": "_up0", "textfield": "account_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_ref01" } }], "v": [], "unreachable": true }, { "a": true, "d": {}, "i": { "ref": "user_ref01", "srcdatavar": "user_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_ref01" } }] }] }, 'User', { "GET /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}": { "protocol": "http", "parameters": [{ "name": "project_key", "in": "path", "description": "The project in question. This can either be the actual `key` assigned\nto the project or the `UUID` (surrounded by curly-braces (`{}`)).\n", "required": true, "type": "string", "index$": 0 }, { "name": "selected_user", "in": "path", "description": "This can either be the username or the UUID of the default reviewer,\nsurrounded by curly-braces, for example: `{account UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "GET /user/emails/{email}": { "protocol": "http", "parameters": [{ "name": "email", "in": "path", "description": "Email address of the user.", "required": true, "type": "string", "index$": 0 }] }, "GET /users/{selected_user}": { "protocol": "http", "parameters": [{ "name": "selected_user", "in": "path", "description": "This can either be an Atlassian Account ID OR the UUID of the account,\nsurrounded by curly-braces, for example: `{account UUID}`.\n", "required": true, "type": "string", "index$": 0 }] }, "GET /user": { "protocol": "http", "parameters": [] }, "GET /user/emails": { "protocol": "http", "parameters": [] }, "PUT /workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}": { "protocol": "http", "parameters": [{ "name": "project_key", "in": "path", "description": "The project in question. This can either be the actual `key` assigned\nto the project or the `UUID` (surrounded by curly-braces (`{}`)).\n", "required": true, "type": "string", "index$": 0 }, { "name": "selected_user", "in": "path", "description": "This can either be the username or the UUID of the default reviewer,\nsurrounded by curly-braces, for example: `{account UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let user_ref01_data = Object.values(setup.data.existing.user)[0];
        // LOAD
        const user_ref01_ent = client.User();
        const user_ref01_match_dt0 = {};
        user_ref01_match_dt0.id = user_ref01_data.id;
        const user_ref01_data_dt0 = (await user_ref01_ent.load(user_ref01_match_dt0)).data();
        (0, node_assert_1.default)(user_ref01_data_dt0.id === user_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user/UserTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user01', 'user02', 'user03', 'workspace01', 'workspace02', 'workspace03', 'project01', 'project02', 'project03', 'default_reviewer01', 'default_reviewer02', 'default_reviewer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_USER_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_USER_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_USER_ENTID'];
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
//# sourceMappingURL=UserEntity.test.js.map