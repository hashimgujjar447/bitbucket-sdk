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
(0, node_test_1.describe)('BranchrestrictionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BITBUCKET_SDK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BITBUCKET_SDK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BitbucketSdkSDK.test();
        const ent = testsdk.Branchrestriction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BitbucketSdkSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Branchrestriction().load({ "id": 1, "repo_slug": "x", "workspace": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BITBUCKET_SDK_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'branchrestriction.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "branch_match_kind": { "a": true, "h": "Branch Match Kind", "n": "branch_match_kind", "r": true, "sh": "Indicates how the restriction is matched against a branch.", "t": "`$STRING`", "key$": "branch_match_kind", "index$": 0 }, "branch_type": { "a": true, "h": "Branch Type", "n": "branch_type", "r": false, "sh": "Apply the restriction to branches of this type.", "t": "`$STRING`", "key$": "branch_type", "index$": 1 }, "groups": { "a": true, "h": "Groups", "n": "groups", "r": false, "t": "`$ARRAY`", "key$": "groups", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The branch restriction status' id.", "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "kind": { "a": true, "h": "Kind", "n": "kind", "r": true, "sh": "The type of restriction that is being applied.", "t": "`$STRING`", "key$": "kind", "index$": 4 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 5 }, "pattern": { "a": true, "h": "Pattern", "n": "pattern", "r": true, "sh": "Apply the restriction to branches that match this pattern.", "t": "`$STRING`", "key$": "pattern", "index$": 6 }, "pipelines_source_branches": { "a": true, "h": "Pipelines Source Branches", "n": "pipelines_source_branches", "r": false, "sh": "List of source branch names allowed to push back to the restricted branch.", "t": "`$ARRAY`", "key$": "pipelines_source_branches", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "t": "`$STRING`", "key$": "type", "index$": 8 }, "users": { "a": true, "h": "Users", "n": "users", "r": false, "t": "`$ARRAY`", "key$": "users", "index$": 9 }, "value": { "a": true, "h": "Value", "n": "value", "r": false, "sh": "Value with kind-specific semantics: * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR.", "t": "`$INTEGER`", "key$": "value", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "branchrestriction", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["branch_match_kind", "branch_type", "groups", "id", "kind", "links", "pattern", "pipelines_source_branches", "type", "users", "value"], "co": { "id": "POST /repositories/{workspace}/{repo_slug}/branch-restrictions", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/repositories/{workspace}/{repo_slug}/branch-restrictions", "q": { "exist": ["repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "branch-restrictions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "branch-restrictions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": {}, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "branch-restrictions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["branch_match_kind", "branch_type", "groups", "id", "kind", "links", "pattern", "pipelines_source_branches", "type", "users", "value"], "co": { "id": "PUT /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repo_slug", "or": "repo_slug", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "workspace", "or": "workspace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", "q": { "exist": ["id", "repo_slug", "workspace"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "repositories" }, { "var": "workspace" }, { "var": "repo_slug" }, { "lit": "branch-restrictions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repository"]] }, "key$": "branchrestriction", "name__orig": "branchrestriction", "Name": "Branchrestriction", "name_": "branchrestriction", "name-": "branchrestriction", "NAME": "BRANCHRESTRICTION", "index$": 6 }, { "active": true, "entity": "branchrestriction", "key$": "BasicBranchrestrictionFlow", "kind": "basic", "name": "BasicBranchrestrictionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "branchrestriction_ref01" }, "m": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": { "repo_slug": "repo_slug01", "workspace": "workspace01" }, "i": { "ref": "branchrestriction_ref01", "srcdatavar": "branchrestriction_ref01_data", "suffix": "_up0", "textfield": "branch_match_kind" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-branchrestriction_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "branchrestriction_ref01", "srcdatavar": "branchrestriction_ref01_data", "suffix": "_dt0" }, "m": { "id": "branchrestriction01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-branchrestriction_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "branchrestriction_ref01", "suffix": "_rm0" }, "m": { "id": "branchrestriction01", "repo_slug": "repo_slug01", "workspace": "workspace01" }, "o": "remove", "s": [], "v": [] }] }, 'Branchrestriction', { "POST /repositories/{workspace}/{repo_slug}/branch-restrictions": { "protocol": "http", "parameters": [{ "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 0 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "_body", "in": "body", "description": "The new rule", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Branch Restriction", "description": "A branch restriction rule.", "properties": { "links": { "type": "object", "properties": { "self": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false } }, "additionalProperties": false, "key$": "links" }, "id": { "type": "integer", "description": "The branch restriction status' id.", "key$": "id" }, "kind": { "type": "string", "description": "The type of restriction that is being applied.", "enum": ["push", "delete", "force", "restrict_merges", "require_tasks_to_be_completed", "require_approvals_to_merge", "require_review_group_approvals_to_merge", "require_default_reviewer_approvals_to_merge", "require_no_changes_requested", "require_passing_builds_to_merge", "require_commits_behind", "reset_pullrequest_approvals_on_change", "smart_reset_pullrequest_approvals", "reset_pullrequest_changes_requested_on_change", "require_all_dependencies_merged", "enforce_merge_checks", "allow_auto_merge_when_builds_pass", "require_all_comments_resolved"], "key$": "kind" }, "branch_match_kind": { "type": "string", "description": "Indicates how the restriction is matched against a branch. The default is `glob`.", "enum": ["branching_model", "glob"], "key$": "branch_match_kind" }, "branch_type": { "type": "string", "description": "Apply the restriction to branches of this type. Active when `branch_match_kind` is `branching_model`. The branch type will be calculated using the branching model configured for the repository.", "enum": ["feature", "bugfix", "release", "hotfix", "development", "production"], "key$": "branch_type" }, "pattern": { "type": "string", "description": "Apply the restriction to branches that match this pattern. Active when `branch_match_kind` is `glob`. Will be empty when `branch_match_kind` is `branching_model`.", "key$": "pattern" }, "pipelines_source_branches": { "type": "array", "description": "List of source branch names allowed to push back to the restricted branch. Used in conjunction with pipeline-based restrictions.", "items": { "type": "string" }, "key$": "pipelines_source_branches" }, "value": { "type": "integer", "description": "Value with kind-specific semantics:\n\n* `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR.\n\n* `require_default_reviewer_approvals_to_merge` uses it to require a minimum number of approvals from default reviewers on a PR.\n\n* `require_passing_builds_to_merge` uses it to require a minimum number of passing builds.\n\n* `require_commits_behind` uses it to require the current branch is up to a maximum number of commits behind it destination.", "key$": "value" }, "users": { "type": "array", "items": { "allOf": [{}, {}], "x-ref": "#/definitions/account" }, "minItems": 0, "key$": "users" }, "groups": { "type": "array", "items": { "allOf": [{}, {}], "x-ref": "#/definitions/group" }, "minItems": 0, "key$": "groups" } }, "required": ["kind", "branch_match_kind", "pattern"], "additionalProperties": true }], "x-ref": "#/definitions/branchrestriction", "index$": 1 }, "index$": 2 }] }, "GET /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The restriction rule's id", "required": true, "type": "string", "index$": 0 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "DELETE /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The restriction rule's id", "required": true, "type": "string", "index$": 0 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }] }, "PUT /repositories/{workspace}/{repo_slug}/branch-restrictions/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The restriction rule's id", "required": true, "type": "string", "index$": 0 }, { "name": "repo_slug", "in": "path", "description": "This can either be the repository slug or the UUID of the repository,\nsurrounded by curly-braces, for example: `{repository UUID}`.\n", "required": true, "type": "string", "index$": 1 }, { "name": "workspace", "in": "path", "description": "This can either be the workspace ID (slug) or the workspace UUID\nsurrounded by curly-braces, for example: `{workspace UUID}`.\n", "required": true, "type": "string", "index$": 2 }, { "name": "_body", "in": "body", "description": "The new version of the existing rule", "required": true, "schema": { "allOf": [{ "type": "object", "description": "Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.", "properties": { "type": { "type": "string", "key$": "type" } }, "required": ["type"], "additionalProperties": true, "discriminator": "type", "x-ref": "#/definitions/object" }, { "type": "object", "title": "Branch Restriction", "description": "A branch restriction rule.", "properties": { "links": { "type": "object", "properties": { "self": { "type": "object", "title": "Link", "description": "A link to a resource related to this object.", "properties": {}, "additionalProperties": false } }, "additionalProperties": false, "key$": "links" }, "id": { "type": "integer", "description": "The branch restriction status' id.", "key$": "id" }, "kind": { "type": "string", "description": "The type of restriction that is being applied.", "enum": ["push", "delete", "force", "restrict_merges", "require_tasks_to_be_completed", "require_approvals_to_merge", "require_review_group_approvals_to_merge", "require_default_reviewer_approvals_to_merge", "require_no_changes_requested", "require_passing_builds_to_merge", "require_commits_behind", "reset_pullrequest_approvals_on_change", "smart_reset_pullrequest_approvals", "reset_pullrequest_changes_requested_on_change", "require_all_dependencies_merged", "enforce_merge_checks", "allow_auto_merge_when_builds_pass", "require_all_comments_resolved"], "key$": "kind" }, "branch_match_kind": { "type": "string", "description": "Indicates how the restriction is matched against a branch. The default is `glob`.", "enum": ["branching_model", "glob"], "key$": "branch_match_kind" }, "branch_type": { "type": "string", "description": "Apply the restriction to branches of this type. Active when `branch_match_kind` is `branching_model`. The branch type will be calculated using the branching model configured for the repository.", "enum": ["feature", "bugfix", "release", "hotfix", "development", "production"], "key$": "branch_type" }, "pattern": { "type": "string", "description": "Apply the restriction to branches that match this pattern. Active when `branch_match_kind` is `glob`. Will be empty when `branch_match_kind` is `branching_model`.", "key$": "pattern" }, "pipelines_source_branches": { "type": "array", "description": "List of source branch names allowed to push back to the restricted branch. Used in conjunction with pipeline-based restrictions.", "items": { "type": "string" }, "key$": "pipelines_source_branches" }, "value": { "type": "integer", "description": "Value with kind-specific semantics:\n\n* `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR.\n\n* `require_default_reviewer_approvals_to_merge` uses it to require a minimum number of approvals from default reviewers on a PR.\n\n* `require_passing_builds_to_merge` uses it to require a minimum number of passing builds.\n\n* `require_commits_behind` uses it to require the current branch is up to a maximum number of commits behind it destination.", "key$": "value" }, "users": { "type": "array", "items": { "allOf": [{}, {}], "x-ref": "#/definitions/account" }, "minItems": 0, "key$": "users" }, "groups": { "type": "array", "items": { "allOf": [{}, {}], "x-ref": "#/definitions/group" }, "minItems": 0, "key$": "groups" } }, "required": ["kind", "branch_match_kind", "pattern"], "additionalProperties": true }], "x-ref": "#/definitions/branchrestriction", "index$": 1 }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const branchrestriction_ref01_ent = client.Branchrestriction();
        let branchrestriction_ref01_data = setup.data.new.branchrestriction['branchrestriction_ref01'];
        branchrestriction_ref01_data['repo_slug'] = setup.idmap['repo_slug01'];
        branchrestriction_ref01_data['workspace'] = setup.idmap['workspace01'];
        branchrestriction_ref01_data = (await branchrestriction_ref01_ent.create(branchrestriction_ref01_data)).data();
        (0, node_assert_1.default)(null != branchrestriction_ref01_data.id);
        // UPDATE
        const branchrestriction_ref01_data_up0 = {};
        branchrestriction_ref01_data_up0.id = branchrestriction_ref01_data.id;
        branchrestriction_ref01_data_up0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        branchrestriction_ref01_data_up0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const branchrestriction_ref01_markdef_up0 = { name: 'branch_match_kind', value: 'Mark01-branchrestriction_ref01_' + setup.now };
        branchrestriction_ref01_data_up0[branchrestriction_ref01_markdef_up0.name] = branchrestriction_ref01_markdef_up0.value;
        const branchrestriction_ref01_resdata_up0 = (await branchrestriction_ref01_ent.update(branchrestriction_ref01_data_up0)).data();
        (0, node_assert_1.default)(branchrestriction_ref01_resdata_up0.id === branchrestriction_ref01_data_up0.id);
        (0, node_assert_1.default)(branchrestriction_ref01_resdata_up0[branchrestriction_ref01_markdef_up0.name] === branchrestriction_ref01_markdef_up0.value);
        // LOAD
        const branchrestriction_ref01_match_dt0 = {};
        branchrestriction_ref01_match_dt0.id = branchrestriction_ref01_data.id;
        branchrestriction_ref01_match_dt0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        branchrestriction_ref01_match_dt0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        const branchrestriction_ref01_data_dt0 = (await branchrestriction_ref01_ent.load(branchrestriction_ref01_match_dt0)).data();
        (0, node_assert_1.default)(branchrestriction_ref01_data_dt0.id === branchrestriction_ref01_data.id);
        // REMOVE
        const branchrestriction_ref01_match_rm0 = { id: branchrestriction_ref01_data.id };
        branchrestriction_ref01_match_rm0['repo_slug'] = setup.idmap['repo_slug'] ?? setup.idmap['repo_slug01'];
        branchrestriction_ref01_match_rm0['workspace'] = setup.idmap['workspace'] ?? setup.idmap['workspace01'];
        await branchrestriction_ref01_ent.remove(branchrestriction_ref01_match_rm0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/branchrestriction/BranchrestrictionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BitbucketSdkSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['branchrestriction01', 'branchrestriction02', 'branchrestriction03', 'repository01', 'repository02', 'repository03', 'repo_slug01', 'workspace01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BITBUCKET_SDK_TEST_BRANCHRESTRICTION_ENTID': idmap,
        'BITBUCKET_SDK_TEST_LIVE': 'FALSE',
        'BITBUCKET_SDK_TEST_EXPLAIN': 'FALSE',
        'BITBUCKET_SDK_APIKEY': '',
    });
    idmap = env['BITBUCKET_SDK_TEST_BRANCHRESTRICTION_ENTID'];
    const live = 'TRUE' === env.BITBUCKET_SDK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BITBUCKET_SDK_TEST_BRANCHRESTRICTION_ENTID'];
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
//# sourceMappingURL=BranchrestrictionEntity.test.js.map