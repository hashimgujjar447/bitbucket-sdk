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
(0, node_test_1.describe)('ApplicationPropertyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.ApplicationProperty();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'application_property.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attributes": { "a": true, "h": "Attributes", "n": "attributes", "r": false, "t": "`$ARRAY`", "key$": "attributes", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 } }, "id": { "field": "id", "name": "id", "parts": ["app_key", "property_name"], "sep": "/" }, "name": "application_property", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "app_key", "or": "app_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "commit", "or": "commit", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "property_name", "or": "property_name", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", "q": { "exist": ["app_key", "commit", "property_name", "repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "commit" }, { "var": "commit" }, { "lit": "properties" }, { "var": "app_key" }, { "var": "property_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "app_key", "or": "app_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "property_name", "or": "property_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "pullrequest_id", "or": "pullrequest_id", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", "q": { "exist": ["app_key", "property_name", "pullrequest_id", "repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "pullrequests" }, { "var": "pullrequest_id" }, { "lit": "properties" }, { "var": "app_key" }, { "var": "property_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "app_key", "or": "app_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "property_name", "or": "property_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", "q": { "exist": ["app_key", "property_name", "repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "properties" }, { "var": "app_key" }, { "var": "property_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /users/{selected_user}/properties/{app_key}/{property_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "app_key", "or": "app_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "property_name", "or": "property_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "selected_user", "or": "selected_user", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/users/{selected_user}/properties/{app_key}/{property_name}", "q": { "exist": ["app_key", "property_name", "selected_user"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "users" }, { "var": "selected_user" }, { "lit": "properties" }, { "var": "app_key" }, { "var": "property_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.repository", "$.main.kit.entity.property"], ["$.main.kit.entity.user", "$.main.kit.entity.property"], ["$.main.kit.entity.repository", "$.main.kit.entity.commit", "$.main.kit.entity.property"], ["$.main.kit.entity.repository", "$.main.kit.entity.pullrequest", "$.main.kit.entity.property"]] }, "key$": "application_property", "name__orig": "application_property", "Name": "ApplicationProperty", "name_": "application_property", "name-": "application-property", "NAME": "APPLICATION_PROPERTY", "index$": 1 }, { "active": true, "entity": "application_property", "key$": "BasicApplicationPropertyFlow", "kind": "basic", "name": "BasicApplicationPropertyFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "application_property_ref01", "srcdatavar": "application_property_ref01_data", "suffix": "_dt0" }, "m": { "app_key": "app_key01", "id": "application_property01", "selected_user": "selected_user01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-application_property_ref01" } }], "unreachable": true }] }, 'ApplicationProperty', { "GET /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}": { "protocol": "http", "parameters": [{ "type": "string", "required": true, "in": "path", "name": "workspace", "description": "The repository container; either the workspace slug or the UUID in curly braces.", "index$": 0 }, { "type": "string", "required": true, "in": "path", "name": "repo_slug", "description": "The repository.", "index$": 1 }, { "type": "string", "required": true, "in": "path", "name": "commit", "description": "The commit.", "index$": 2 }, { "type": "string", "required": true, "in": "path", "name": "app_key", "description": "The key of the Connect app.", "index$": 3 }, { "type": "string", "required": true, "in": "path", "name": "property_name", "description": "The name of the property.", "index$": 4 }] }, "GET /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}": { "protocol": "http", "parameters": [{ "type": "string", "required": true, "in": "path", "name": "workspace", "description": "The repository container; either the workspace slug or the UUID in curly braces.", "index$": 0 }, { "type": "string", "required": true, "in": "path", "name": "repo_slug", "description": "The repository.", "index$": 1 }, { "type": "string", "required": true, "in": "path", "name": "pullrequest_id", "description": "The pull request ID.", "index$": 2 }, { "type": "string", "required": true, "in": "path", "name": "app_key", "description": "The key of the Connect app.", "index$": 3 }, { "type": "string", "required": true, "in": "path", "name": "property_name", "description": "The name of the property.", "index$": 4 }] }, "GET /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}": { "protocol": "http", "parameters": [{ "type": "string", "required": true, "in": "path", "name": "workspace", "description": "The repository container; either the workspace slug or the UUID in curly braces.", "index$": 0 }, { "type": "string", "required": true, "in": "path", "name": "repo_slug", "description": "The repository.", "index$": 1 }, { "type": "string", "required": true, "in": "path", "name": "app_key", "description": "The key of the Connect app.", "index$": 2 }, { "type": "string", "required": true, "in": "path", "name": "property_name", "description": "The name of the property.", "index$": 3 }] }, "GET /users/{selected_user}/properties/{app_key}/{property_name}": { "protocol": "http", "parameters": [{ "type": "string", "required": true, "in": "path", "name": "selected_user", "description": "Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.", "index$": 0 }, { "type": "string", "required": true, "in": "path", "name": "app_key", "description": "The key of the Connect app.", "index$": 1 }, { "type": "string", "required": true, "in": "path", "name": "property_name", "description": "The name of the property.", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let application_property_ref01_data = Object.values(setup.data.existing.application_property)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/application_property/ApplicationPropertyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['application_property01', 'application_property02', 'application_property03', 'repository01', 'repository02', 'repository03', 'property01', 'property02', 'property03', 'user01', 'user02', 'user03', 'commit01', 'commit02', 'commit03', 'pullrequest01', 'pullrequest02', 'pullrequest03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_APPLICATION_PROPERTY_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_APPLICATION_PROPERTY_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_APPLICATION_PROPERTY_ENTID'];
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
//# sourceMappingURL=ApplicationPropertyEntity.test.js.map