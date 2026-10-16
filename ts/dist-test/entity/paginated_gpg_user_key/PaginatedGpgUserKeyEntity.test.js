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
(0, node_test_1.describe)('PaginatedGpgUserKeyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.PaginatedGpgUserKey();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginatedGpgUserKey().list({ "selected_user": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'paginated_gpg_user_key.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "added_on": { "a": true, "fo": "date-time", "h": "Added On", "n": "added_on", "r": false, "t": "`$STRING`", "key$": "added_on", "index$": 0 }, "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": false, "t": "`$STRING`", "key$": "created_on", "index$": 1 }, "expires_on": { "a": true, "fo": "date-time", "h": "Expires On", "n": "expires_on", "r": false, "t": "`$STRING`", "key$": "expires_on", "index$": 2 }, "fingerprint": { "a": true, "h": "Fingerprint", "n": "fingerprint", "r": false, "sh": "The GPG key fingerprint.", "t": "`$STRING`", "key$": "fingerprint", "index$": 3 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "sh": "The GPG key value in X format.", "t": "`$STRING`", "key$": "key", "index$": 4 }, "key_id": { "a": true, "h": "Key Id", "n": "key_id", "r": false, "sh": "The unique identifier for the GPG key", "t": "`$STRING`", "key$": "key_id", "index$": 5 }, "last_used": { "a": true, "fo": "date-time", "h": "Last Used", "n": "last_used", "r": false, "t": "`$STRING`", "key$": "last_used", "index$": 6 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The user-defined label for the GPG key", "t": "`$STRING`", "key$": "name", "index$": 8 }, "owner": { "a": true, "h": "Owner", "n": "owner", "r": false, "t": "`$ANY`", "key$": "owner", "index$": 9 }, "parent_fingerprint": { "a": true, "h": "Parent Fingerprint", "n": "parent_fingerprint", "r": false, "sh": "The fingerprint of the parent key.", "t": "`$STRING`", "key$": "parent_fingerprint", "index$": 10 }, "subkeys": { "a": true, "h": "Subkeys", "n": "subkeys", "r": false, "t": "`$ARRAY`", "key$": "subkeys", "index$": 11 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 12 } }, "name": "paginated_gpg_user_key", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /users/{selected_user}/gpg-keys", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "selected_user", "or": "selected_user", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/users/{selected_user}/gpg-keys", "q": { "exist": ["selected_user"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "users" }, { "var": "selected_user" }, { "lit": "gpg-keys" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.user"]] }, "key$": "paginated_gpg_user_key", "name__orig": "paginated_gpg_user_key", "Name": "PaginatedGpgUserKey", "name_": "paginated_gpg_user_key", "name-": "paginated-gpg-user-key", "NAME": "PAGINATED_GPG_USER_KEY", "index$": 36 }, { "active": true, "entity": "paginated_gpg_user_key", "key$": "BasicPaginatedGpgUserKeyFlow", "kind": "basic", "name": "BasicPaginatedGpgUserKeyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "selected_user": "selected_user01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "paginated_gpg_user_key_ref01" } }] }] }, 'PaginatedGpgUserKey', { "GET /users/{selected_user}/gpg-keys": { "protocol": "http", "parameters": [{ "name": "selected_user", "in": "path", "description": "This can either be an Atlassian Account ID OR the UUID of the account,\nsurrounded by curly-braces, for example: `{account UUID}`.\n", "required": true, "type": "string", "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let paginated_gpg_user_key_ref01_data = Object.values(setup.data.existing.paginated_gpg_user_key)[0];
        // LIST
        const paginated_gpg_user_key_ref01_ent = client.PaginatedGpgUserKey();
        const paginated_gpg_user_key_ref01_match = {};
        paginated_gpg_user_key_ref01_match['selected_user'] = setup.idmap['selected_user01'];
        const paginated_gpg_user_key_ref01_list = (await paginated_gpg_user_key_ref01_ent.list(paginated_gpg_user_key_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/paginated_gpg_user_key/PaginatedGpgUserKeyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['paginated_gpg_user_key01', 'paginated_gpg_user_key02', 'paginated_gpg_user_key03', 'user01', 'user02', 'user03', 'selected_user01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_PAGINATED_GPG_USER_KEY_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_PAGINATED_GPG_USER_KEY_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_PAGINATED_GPG_USER_KEY_ENTID'];
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
//# sourceMappingURL=PaginatedGpgUserKeyEntity.test.js.map