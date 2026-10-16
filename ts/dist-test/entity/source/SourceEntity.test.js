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
(0, node_test_1.describe)('SourceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.Source();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Source().create({ "repo_slug": 1, "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'source.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "source", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /repositories/{workspace}/{repo_slug}/src", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "author", "or": "author", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "branch", "or": "branch", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "file", "or": "files", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "message", "or": "message", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "parent", "or": "parents", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/src", "q": { "exist": ["repo_slug", "workspace"] }, "r": {}, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "src" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"]] }, "key$": "source", "name__orig": "source", "Name": "Source", "name_": "source", "name-": "source", "NAME": "SOURCE", "index$": 102 }, { "active": true, "entity": "source", "key$": "BasicSourceFlow", "kind": "basic", "name": "BasicSourceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "source_ref01" }, "m": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "create", "s": [], "v": [] }] }, 'Source', { "POST /repositories/{workspace}/{repo_slug}/src": { "protocol": "http", "parameters": [{ "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "message", "in": "query", "description": "The commit message. When omitted, Bitbucket uses a canned string.", "required": false, "type": "string", "index$": 2 }, { "name": "author", "in": "query", "description": "\nThe raw string to be used as the new commit's author.\nThis string follows the format\n`Erik van Zijst <evzijst@atlassian.com>`.\n\nWhen omitted, Bitbucket uses the authenticated user's\nfull/display name and primary email address. Commits cannot\nbe created anonymously.", "required": false, "type": "string", "index$": 3 }, { "name": "parents", "in": "query", "description": "\n#### Deprecation Notice:\nSupport for specifying multiple parent\ncommits is deprecated and will be removed in a future release.\nOnly a single SHA1 is accepted.\n\nA SHA1 of the commit that should be the parent of the newly created\ncommit. When omitted, the new commit will inherit from and\nbecome a child of the main branch's tip/HEAD commit.", "required": false, "type": "string", "index$": 4 }, { "name": "files", "in": "query", "description": "\nOptional field that declares the files that the request is\nmanipulating. When adding a new file to a repo, or when\noverwriting an existing file, the client can just upload\nthe full contents of the file in a normal form field and\nthe use of this `files` meta data field is redundant.\nHowever, when the `files` field contains a file path that\ndoes not have a corresponding, identically-named form\nfield, then Bitbucket interprets that as the client wanting\nto replace the named file with the null set and the file is\ndeleted instead.\n\nPaths in the repo that are referenced in neither files nor\nan individual file field, remain unchanged and carry over\nfrom the parent to the new commit.\n\nThis API does not support renaming as an explicit feature.\nTo rename a file, simply delete it and recreate it under\nthe new name in the same commit.\n", "required": false, "type": "string", "index$": 5 }, { "name": "branch", "in": "query", "description": "\nThe name of the branch that the new commit should be\ncreated on. When omitted, the commit will be created on top\nof the main branch and will become the main branch's new\nhead.\n\nWhen a branch name is provided that already exists in the\nrepo, then the commit will be created on top of that\nbranch. In this case, *if* a parent SHA1 was also provided,\nthen it is asserted that the parent is the branch's\ntip/HEAD at the time the request is made. When this is not\nthe case, a 409 is returned.\n\nWhen a new branch name is specified (that does not already\nexist in the repo), and no parent SHA1s are provided, then\nthe new commit will inherit from the current main branch's\ntip/HEAD commit, but not advance the main branch. The new\ncommit will be the new branch. When the request *also*\nspecifies a parent SHA1, then the new commit and branch\nare created directly on top of the parent commit,\nregardless of the state of the main branch.\n\nWhen a branch name is not specified, but a parent SHA1 is\nprovided, then Bitbucket asserts that it represents the\nmain branch's current HEAD/tip, or a 409 is returned.\n\nWhen a branch name is not specified and the repo is empty,\nthe new commit will become the repo's root commit and will\nbe on the main branch.\n\nWhen a branch name is specified and the repo is empty, the\nnew commit will become the repo's root commit and also\ndefine the repo's main branch going forward.\n\nThis API cannot be used to create additional root commits\nin non-empty repos.\n\nThe branch field cannot be repeated.\n\nAs a side effect, this API can be used to create a new\nbranch without modifying any files, by specifying a new\nbranch name in this field, together with `parents`, but\nomitting the `files` fields, while not sending any files.\nThis will create a new commit and branch with the same\ncontents as the first parent. The diff of this commit\nagainst its first parent will be empty.\n", "required": false, "type": "string", "index$": 6 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const source_ref01_ent = client.Source();
        let source_ref01_data = setup.data.new.source['source_ref01'];
        source_ref01_data['repo_slug'] = setup.idmap['repo_slug01'];
        source_ref01_data['workspace'] = setup.idmap['workspace01'];
        source_ref01_data = (await source_ref01_ent.create(source_ref01_data)).data();
        (0, node_assert_1.default)(null != source_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/source/SourceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['source01', 'source02', 'source03', 'repository01', 'repository02', 'repository03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_SOURCE_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_SOURCE_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_SOURCE_ENTID'];
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
//# sourceMappingURL=SourceEntity.test.js.map