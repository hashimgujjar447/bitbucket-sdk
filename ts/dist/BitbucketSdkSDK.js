"use strict";
// BitbucketSdk Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.BitbucketSdkSDK = exports.BitbucketSdkEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AddonEntity_1 = require("./entity/AddonEntity");
const ApplicationPropertyEntity_1 = require("./entity/ApplicationPropertyEntity");
const ApproveEntity_1 = require("./entity/ApproveEntity");
const BranchEntity_1 = require("./entity/BranchEntity");
const BranchingModelEntity_1 = require("./entity/BranchingModelEntity");
const BranchingModelSettingEntity_1 = require("./entity/BranchingModelSettingEntity");
const BranchrestrictionEntity_1 = require("./entity/BranchrestrictionEntity");
const CommentResolutionEntity_1 = require("./entity/CommentResolutionEntity");
const CommitEntity_1 = require("./entity/CommitEntity");
const CommitstatusEntity_1 = require("./entity/CommitstatusEntity");
const DefaultReviewerEntity_1 = require("./entity/DefaultReviewerEntity");
const DeployKeyEntity_1 = require("./entity/DeployKeyEntity");
const DeploymentEntity_1 = require("./entity/DeploymentEntity");
const DeploymentEnvironmentEntity_1 = require("./entity/DeploymentEnvironmentEntity");
const DeploymentVariableEntity_1 = require("./entity/DeploymentVariableEntity");
const DownloadEntity_1 = require("./entity/DownloadEntity");
const EffectiveDefaultReviewerEntity_1 = require("./entity/EffectiveDefaultReviewerEntity");
const EffectiveRepoBranchingModelEntity_1 = require("./entity/EffectiveRepoBranchingModelEntity");
const GpgEntity_1 = require("./entity/GpgEntity");
const GpgAccountKeyEntity_1 = require("./entity/GpgAccountKeyEntity");
const MergeQueueEntity_1 = require("./entity/MergeQueueEntity");
const MergeQueuePullrequestEntity_1 = require("./entity/MergeQueuePullrequestEntity");
const PaginatedAccountEntity_1 = require("./entity/PaginatedAccountEntity");
const PaginatedAnnotationEntity_1 = require("./entity/PaginatedAnnotationEntity");
const PaginatedBranchEntity_1 = require("./entity/PaginatedBranchEntity");
const PaginatedBranchrestrictionEntity_1 = require("./entity/PaginatedBranchrestrictionEntity");
const PaginatedChangesetEntity_1 = require("./entity/PaginatedChangesetEntity");
const PaginatedCommitstatusEntity_1 = require("./entity/PaginatedCommitstatusEntity");
const PaginatedDefaultReviewerAndTypeEntity_1 = require("./entity/PaginatedDefaultReviewerAndTypeEntity");
const PaginatedDeployKeyEntity_1 = require("./entity/PaginatedDeployKeyEntity");
const PaginatedDeploymentEntity_1 = require("./entity/PaginatedDeploymentEntity");
const PaginatedDeploymentVariableEntity_1 = require("./entity/PaginatedDeploymentVariableEntity");
const PaginatedDiffstatEntity_1 = require("./entity/PaginatedDiffstatEntity");
const PaginatedEnvironmentEntity_1 = require("./entity/PaginatedEnvironmentEntity");
const PaginatedFileEntity_1 = require("./entity/PaginatedFileEntity");
const PaginatedFileConflictEntity_1 = require("./entity/PaginatedFileConflictEntity");
const PaginatedGpgUserKeyEntity_1 = require("./entity/PaginatedGpgUserKeyEntity");
const PaginatedHookEventEntity_1 = require("./entity/PaginatedHookEventEntity");
const PaginatedMergeQueueEntity_1 = require("./entity/PaginatedMergeQueueEntity");
const PaginatedMergeQueuePullrequestEntity_1 = require("./entity/PaginatedMergeQueuePullrequestEntity");
const PaginatedPipelineEntity_1 = require("./entity/PaginatedPipelineEntity");
const PaginatedPipelineCacheEntity_1 = require("./entity/PaginatedPipelineCacheEntity");
const PaginatedPipelineKnownHostEntity_1 = require("./entity/PaginatedPipelineKnownHostEntity");
const PaginatedPipelineRunnerEntity_1 = require("./entity/PaginatedPipelineRunnerEntity");
const PaginatedPipelineScheduleEntity_1 = require("./entity/PaginatedPipelineScheduleEntity");
const PaginatedPipelineScheduleExecutionEntity_1 = require("./entity/PaginatedPipelineScheduleExecutionEntity");
const PaginatedPipelineStepEntity_1 = require("./entity/PaginatedPipelineStepEntity");
const PaginatedPipelineVariableEntity_1 = require("./entity/PaginatedPipelineVariableEntity");
const PaginatedProjectEntity_1 = require("./entity/PaginatedProjectEntity");
const PaginatedProjectDeployKeyEntity_1 = require("./entity/PaginatedProjectDeployKeyEntity");
const PaginatedProjectGroupPermissionEntity_1 = require("./entity/PaginatedProjectGroupPermissionEntity");
const PaginatedProjectUserPermissionEntity_1 = require("./entity/PaginatedProjectUserPermissionEntity");
const PaginatedPullrequestEntity_1 = require("./entity/PaginatedPullrequestEntity");
const PaginatedPullrequestCommentEntity_1 = require("./entity/PaginatedPullrequestCommentEntity");
const PaginatedRefEntity_1 = require("./entity/PaginatedRefEntity");
const PaginatedReportEntity_1 = require("./entity/PaginatedReportEntity");
const PaginatedRepositoryEntity_1 = require("./entity/PaginatedRepositoryEntity");
const PaginatedRepositoryGroupPermissionEntity_1 = require("./entity/PaginatedRepositoryGroupPermissionEntity");
const PaginatedRepositoryPermissionEntity_1 = require("./entity/PaginatedRepositoryPermissionEntity");
const PaginatedRepositoryUserPermissionEntity_1 = require("./entity/PaginatedRepositoryUserPermissionEntity");
const PaginatedSnippetEntity_1 = require("./entity/PaginatedSnippetEntity");
const PaginatedSnippetCommentEntity_1 = require("./entity/PaginatedSnippetCommentEntity");
const PaginatedSnippetCommitEntity_1 = require("./entity/PaginatedSnippetCommitEntity");
const PaginatedSshUserKeyEntity_1 = require("./entity/PaginatedSshUserKeyEntity");
const PaginatedTagEntity_1 = require("./entity/PaginatedTagEntity");
const PaginatedTaskEntity_1 = require("./entity/PaginatedTaskEntity");
const PaginatedTreeentryEntity_1 = require("./entity/PaginatedTreeentryEntity");
const PaginatedWebhookSubscriptionEntity_1 = require("./entity/PaginatedWebhookSubscriptionEntity");
const PaginatedWorkspaceAccessEntity_1 = require("./entity/PaginatedWorkspaceAccessEntity");
const PaginatedWorkspaceMembershipEntity_1 = require("./entity/PaginatedWorkspaceMembershipEntity");
const PipelineEntity_1 = require("./entity/PipelineEntity");
const PipelineBuildNumberEntity_1 = require("./entity/PipelineBuildNumberEntity");
const PipelineCacheContentUriEntity_1 = require("./entity/PipelineCacheContentUriEntity");
const PipelineKnownHostEntity_1 = require("./entity/PipelineKnownHostEntity");
const PipelineRunnerEntity_1 = require("./entity/PipelineRunnerEntity");
const PipelineScheduleEntity_1 = require("./entity/PipelineScheduleEntity");
const PipelineSshKeyPairEntity_1 = require("./entity/PipelineSshKeyPairEntity");
const PipelineStepEntity_1 = require("./entity/PipelineStepEntity");
const PipelineVariableEntity_1 = require("./entity/PipelineVariableEntity");
const PipelinesConfigEntity_1 = require("./entity/PipelinesConfigEntity");
const ProjectEntity_1 = require("./entity/ProjectEntity");
const ProjectBranchingModelEntity_1 = require("./entity/ProjectBranchingModelEntity");
const ProjectDeployKeyEntity_1 = require("./entity/ProjectDeployKeyEntity");
const ProjectGroupPermissionEntity_1 = require("./entity/ProjectGroupPermissionEntity");
const ProjectUserPermissionEntity_1 = require("./entity/ProjectUserPermissionEntity");
const PropertyEntity_1 = require("./entity/PropertyEntity");
const PullrequestEntity_1 = require("./entity/PullrequestEntity");
const PullrequestCommentEntity_1 = require("./entity/PullrequestCommentEntity");
const PullrequestCommentTaskEntity_1 = require("./entity/PullrequestCommentTaskEntity");
const PullrequestMergeabilityCheckEntity_1 = require("./entity/PullrequestMergeabilityCheckEntity");
const RefEntity_1 = require("./entity/RefEntity");
const ReportEntity_1 = require("./entity/ReportEntity");
const ReportAnnotationEntity_1 = require("./entity/ReportAnnotationEntity");
const RepositoryEntity_1 = require("./entity/RepositoryEntity");
const RepositoryGroupPermissionEntity_1 = require("./entity/RepositoryGroupPermissionEntity");
const RepositoryInheritanceStateEntity_1 = require("./entity/RepositoryInheritanceStateEntity");
const RepositoryUserPermissionEntity_1 = require("./entity/RepositoryUserPermissionEntity");
const RequestChangeEntity_1 = require("./entity/RequestChangeEntity");
const SearchResultPageEntity_1 = require("./entity/SearchResultPageEntity");
const SnippetEntity_1 = require("./entity/SnippetEntity");
const SnippetCommentEntity_1 = require("./entity/SnippetCommentEntity");
const SnippetCommitEntity_1 = require("./entity/SnippetCommitEntity");
const SourceEntity_1 = require("./entity/SourceEntity");
const SshEntity_1 = require("./entity/SshEntity");
const SshAccountKeyEntity_1 = require("./entity/SshAccountKeyEntity");
const TagEntity_1 = require("./entity/TagEntity");
const UserEntity_1 = require("./entity/UserEntity");
const WatcherEntity_1 = require("./entity/WatcherEntity");
const WebhookSubscriptionEntity_1 = require("./entity/WebhookSubscriptionEntity");
const WorkspaceEntity_1 = require("./entity/WorkspaceEntity");
const WorkspaceMembershipEntity_1 = require("./entity/WorkspaceMembershipEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const BitbucketSdkEntityBase_1 = require("./BitbucketSdkEntityBase");
Object.defineProperty(exports, "BitbucketSdkEntityBase", { enumerable: true, get: function () { return BitbucketSdkEntityBase_1.BitbucketSdkEntityBase; } });
const Utility_1 = require("./utility/Utility");
const ResultBodyUtility_1 = require("./utility/ResultBodyUtility");
const MakeRequestUtility_1 = require("./utility/MakeRequestUtility");
const PrepareMethodUtility_1 = require("./utility/PrepareMethodUtility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class BitbucketSdkSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        for (const key of ['_options', '_rootctx', '_features']) {
            Object.defineProperty(this, key, {
                value: this[key], enumerable: false, writable: true, configurable: true
            });
        }
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const method = String(fetchargs.method || 'GET').toUpperCase();
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.method, method)) {
            return ctx.error('spec_method_allow', 'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + options.allow.method + '"');
        }
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method,
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!(0, PrepareMethodUtility_1.allowed)(this._options.allow.op, 'direct')) {
            return {
                ok: false,
                err: new Error('BitbucketSdkSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return { ok: false, err: utility.clean(this._rootctx, fetchdef) };
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            if (true === fetchdef.signal?.aborted) {
                throw fetchdef.signal.reason;
            }
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, fetched)) };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            let err = undefined;
            if (!noBody) {
                let text = undefined;
                try {
                    const raw = fetched;
                    if ('function' === typeof raw.text) {
                        text = await raw.text();
                        json = '' === text.trim() ? undefined : JSON.parse(text);
                    }
                    else {
                        json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                    }
                }
                catch (parseErr) {
                    if ('SyntaxError' !== parseErr?.name) {
                        throw parseErr;
                    }
                    err = (0, ResultBodyUtility_1.unreadableBody)(ctx, {
                        status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
                        failed: 200 <= status && status < 300 ? undefined :
                            ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
                    });
                }
            }
            return {
                ok: null == err && status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
                ...(null == err ? {} : { err: utility.clean(ctx, err) }),
            };
        }
        catch (err) {
            return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, err)) };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.op, 'graphql')) {
            return {
                ok: false,
                err: new Error('BitbucketSdkSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('BitbucketSdkSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Addon().list()` / `client.Addon().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Addon(entopts) {
        const self = this;
        return new AddonEntity_1.AddonEntity(self, entopts);
    }
    // Entity access: `client.ApplicationProperty().list()` / `client.ApplicationProperty().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApplicationProperty(entopts) {
        const self = this;
        return new ApplicationPropertyEntity_1.ApplicationPropertyEntity(self, entopts);
    }
    // Entity access: `client.Approve().list()` / `client.Approve().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Approve(entopts) {
        const self = this;
        return new ApproveEntity_1.ApproveEntity(self, entopts);
    }
    // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Branch(entopts) {
        const self = this;
        return new BranchEntity_1.BranchEntity(self, entopts);
    }
    // Entity access: `client.BranchingModel().list()` / `client.BranchingModel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchingModel(entopts) {
        const self = this;
        return new BranchingModelEntity_1.BranchingModelEntity(self, entopts);
    }
    // Entity access: `client.BranchingModelSetting().list()` / `client.BranchingModelSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchingModelSetting(entopts) {
        const self = this;
        return new BranchingModelSettingEntity_1.BranchingModelSettingEntity(self, entopts);
    }
    // Entity access: `client.Branchrestriction().list()` / `client.Branchrestriction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Branchrestriction(entopts) {
        const self = this;
        return new BranchrestrictionEntity_1.BranchrestrictionEntity(self, entopts);
    }
    // Entity access: `client.CommentResolution().list()` / `client.CommentResolution().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CommentResolution(entopts) {
        const self = this;
        return new CommentResolutionEntity_1.CommentResolutionEntity(self, entopts);
    }
    // Entity access: `client.Commit().list()` / `client.Commit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Commit(entopts) {
        const self = this;
        return new CommitEntity_1.CommitEntity(self, entopts);
    }
    // Entity access: `client.Commitstatus().list()` / `client.Commitstatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Commitstatus(entopts) {
        const self = this;
        return new CommitstatusEntity_1.CommitstatusEntity(self, entopts);
    }
    // Entity access: `client.DefaultReviewer().list()` / `client.DefaultReviewer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DefaultReviewer(entopts) {
        const self = this;
        return new DefaultReviewerEntity_1.DefaultReviewerEntity(self, entopts);
    }
    // Entity access: `client.DeployKey().list()` / `client.DeployKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeployKey(entopts) {
        const self = this;
        return new DeployKeyEntity_1.DeployKeyEntity(self, entopts);
    }
    // Entity access: `client.Deployment().list()` / `client.Deployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deployment(entopts) {
        const self = this;
        return new DeploymentEntity_1.DeploymentEntity(self, entopts);
    }
    // Entity access: `client.DeploymentEnvironment().list()` / `client.DeploymentEnvironment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeploymentEnvironment(entopts) {
        const self = this;
        return new DeploymentEnvironmentEntity_1.DeploymentEnvironmentEntity(self, entopts);
    }
    // Entity access: `client.DeploymentVariable().list()` / `client.DeploymentVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DeploymentVariable(entopts) {
        const self = this;
        return new DeploymentVariableEntity_1.DeploymentVariableEntity(self, entopts);
    }
    // Entity access: `client.Download().list()` / `client.Download().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Download(entopts) {
        const self = this;
        return new DownloadEntity_1.DownloadEntity(self, entopts);
    }
    // Entity access: `client.EffectiveDefaultReviewer().list()` / `client.EffectiveDefaultReviewer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EffectiveDefaultReviewer(entopts) {
        const self = this;
        return new EffectiveDefaultReviewerEntity_1.EffectiveDefaultReviewerEntity(self, entopts);
    }
    // Entity access: `client.EffectiveRepoBranchingModel().list()` / `client.EffectiveRepoBranchingModel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EffectiveRepoBranchingModel(entopts) {
        const self = this;
        return new EffectiveRepoBranchingModelEntity_1.EffectiveRepoBranchingModelEntity(self, entopts);
    }
    // Entity access: `client.Gpg().list()` / `client.Gpg().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Gpg(entopts) {
        const self = this;
        return new GpgEntity_1.GpgEntity(self, entopts);
    }
    // Entity access: `client.GpgAccountKey().list()` / `client.GpgAccountKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GpgAccountKey(entopts) {
        const self = this;
        return new GpgAccountKeyEntity_1.GpgAccountKeyEntity(self, entopts);
    }
    // Entity access: `client.MergeQueue().list()` / `client.MergeQueue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MergeQueue(entopts) {
        const self = this;
        return new MergeQueueEntity_1.MergeQueueEntity(self, entopts);
    }
    // Entity access: `client.MergeQueuePullrequest().list()` / `client.MergeQueuePullrequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MergeQueuePullrequest(entopts) {
        const self = this;
        return new MergeQueuePullrequestEntity_1.MergeQueuePullrequestEntity(self, entopts);
    }
    // Entity access: `client.PaginatedAccount().list()` / `client.PaginatedAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedAccount(entopts) {
        const self = this;
        return new PaginatedAccountEntity_1.PaginatedAccountEntity(self, entopts);
    }
    // Entity access: `client.PaginatedAnnotation().list()` / `client.PaginatedAnnotation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedAnnotation(entopts) {
        const self = this;
        return new PaginatedAnnotationEntity_1.PaginatedAnnotationEntity(self, entopts);
    }
    // Entity access: `client.PaginatedBranch().list()` / `client.PaginatedBranch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedBranch(entopts) {
        const self = this;
        return new PaginatedBranchEntity_1.PaginatedBranchEntity(self, entopts);
    }
    // Entity access: `client.PaginatedBranchrestriction().list()` / `client.PaginatedBranchrestriction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedBranchrestriction(entopts) {
        const self = this;
        return new PaginatedBranchrestrictionEntity_1.PaginatedBranchrestrictionEntity(self, entopts);
    }
    // Entity access: `client.PaginatedChangeset().list()` / `client.PaginatedChangeset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedChangeset(entopts) {
        const self = this;
        return new PaginatedChangesetEntity_1.PaginatedChangesetEntity(self, entopts);
    }
    // Entity access: `client.PaginatedCommitstatus().list()` / `client.PaginatedCommitstatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedCommitstatus(entopts) {
        const self = this;
        return new PaginatedCommitstatusEntity_1.PaginatedCommitstatusEntity(self, entopts);
    }
    // Entity access: `client.PaginatedDefaultReviewerAndType().list()` / `client.PaginatedDefaultReviewerAndType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedDefaultReviewerAndType(entopts) {
        const self = this;
        return new PaginatedDefaultReviewerAndTypeEntity_1.PaginatedDefaultReviewerAndTypeEntity(self, entopts);
    }
    // Entity access: `client.PaginatedDeployKey().list()` / `client.PaginatedDeployKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedDeployKey(entopts) {
        const self = this;
        return new PaginatedDeployKeyEntity_1.PaginatedDeployKeyEntity(self, entopts);
    }
    // Entity access: `client.PaginatedDeployment().list()` / `client.PaginatedDeployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedDeployment(entopts) {
        const self = this;
        return new PaginatedDeploymentEntity_1.PaginatedDeploymentEntity(self, entopts);
    }
    // Entity access: `client.PaginatedDeploymentVariable().list()` / `client.PaginatedDeploymentVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedDeploymentVariable(entopts) {
        const self = this;
        return new PaginatedDeploymentVariableEntity_1.PaginatedDeploymentVariableEntity(self, entopts);
    }
    // Entity access: `client.PaginatedDiffstat().list()` / `client.PaginatedDiffstat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedDiffstat(entopts) {
        const self = this;
        return new PaginatedDiffstatEntity_1.PaginatedDiffstatEntity(self, entopts);
    }
    // Entity access: `client.PaginatedEnvironment().list()` / `client.PaginatedEnvironment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedEnvironment(entopts) {
        const self = this;
        return new PaginatedEnvironmentEntity_1.PaginatedEnvironmentEntity(self, entopts);
    }
    // Entity access: `client.PaginatedFile().list()` / `client.PaginatedFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedFile(entopts) {
        const self = this;
        return new PaginatedFileEntity_1.PaginatedFileEntity(self, entopts);
    }
    // Entity access: `client.PaginatedFileConflict().list()` / `client.PaginatedFileConflict().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedFileConflict(entopts) {
        const self = this;
        return new PaginatedFileConflictEntity_1.PaginatedFileConflictEntity(self, entopts);
    }
    // Entity access: `client.PaginatedGpgUserKey().list()` / `client.PaginatedGpgUserKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedGpgUserKey(entopts) {
        const self = this;
        return new PaginatedGpgUserKeyEntity_1.PaginatedGpgUserKeyEntity(self, entopts);
    }
    // Entity access: `client.PaginatedHookEvent().list()` / `client.PaginatedHookEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedHookEvent(entopts) {
        const self = this;
        return new PaginatedHookEventEntity_1.PaginatedHookEventEntity(self, entopts);
    }
    // Entity access: `client.PaginatedMergeQueue().list()` / `client.PaginatedMergeQueue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedMergeQueue(entopts) {
        const self = this;
        return new PaginatedMergeQueueEntity_1.PaginatedMergeQueueEntity(self, entopts);
    }
    // Entity access: `client.PaginatedMergeQueuePullrequest().list()` / `client.PaginatedMergeQueuePullrequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedMergeQueuePullrequest(entopts) {
        const self = this;
        return new PaginatedMergeQueuePullrequestEntity_1.PaginatedMergeQueuePullrequestEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPipeline().list()` / `client.PaginatedPipeline().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPipeline(entopts) {
        const self = this;
        return new PaginatedPipelineEntity_1.PaginatedPipelineEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPipelineCache().list()` / `client.PaginatedPipelineCache().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPipelineCache(entopts) {
        const self = this;
        return new PaginatedPipelineCacheEntity_1.PaginatedPipelineCacheEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPipelineKnownHost().list()` / `client.PaginatedPipelineKnownHost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPipelineKnownHost(entopts) {
        const self = this;
        return new PaginatedPipelineKnownHostEntity_1.PaginatedPipelineKnownHostEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPipelineRunner().list()` / `client.PaginatedPipelineRunner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPipelineRunner(entopts) {
        const self = this;
        return new PaginatedPipelineRunnerEntity_1.PaginatedPipelineRunnerEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPipelineSchedule().list()` / `client.PaginatedPipelineSchedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPipelineSchedule(entopts) {
        const self = this;
        return new PaginatedPipelineScheduleEntity_1.PaginatedPipelineScheduleEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPipelineScheduleExecution().list()` / `client.PaginatedPipelineScheduleExecution().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPipelineScheduleExecution(entopts) {
        const self = this;
        return new PaginatedPipelineScheduleExecutionEntity_1.PaginatedPipelineScheduleExecutionEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPipelineStep().list()` / `client.PaginatedPipelineStep().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPipelineStep(entopts) {
        const self = this;
        return new PaginatedPipelineStepEntity_1.PaginatedPipelineStepEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPipelineVariable().list()` / `client.PaginatedPipelineVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPipelineVariable(entopts) {
        const self = this;
        return new PaginatedPipelineVariableEntity_1.PaginatedPipelineVariableEntity(self, entopts);
    }
    // Entity access: `client.PaginatedProject().list()` / `client.PaginatedProject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedProject(entopts) {
        const self = this;
        return new PaginatedProjectEntity_1.PaginatedProjectEntity(self, entopts);
    }
    // Entity access: `client.PaginatedProjectDeployKey().list()` / `client.PaginatedProjectDeployKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedProjectDeployKey(entopts) {
        const self = this;
        return new PaginatedProjectDeployKeyEntity_1.PaginatedProjectDeployKeyEntity(self, entopts);
    }
    // Entity access: `client.PaginatedProjectGroupPermission().list()` / `client.PaginatedProjectGroupPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedProjectGroupPermission(entopts) {
        const self = this;
        return new PaginatedProjectGroupPermissionEntity_1.PaginatedProjectGroupPermissionEntity(self, entopts);
    }
    // Entity access: `client.PaginatedProjectUserPermission().list()` / `client.PaginatedProjectUserPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedProjectUserPermission(entopts) {
        const self = this;
        return new PaginatedProjectUserPermissionEntity_1.PaginatedProjectUserPermissionEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPullrequest().list()` / `client.PaginatedPullrequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPullrequest(entopts) {
        const self = this;
        return new PaginatedPullrequestEntity_1.PaginatedPullrequestEntity(self, entopts);
    }
    // Entity access: `client.PaginatedPullrequestComment().list()` / `client.PaginatedPullrequestComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedPullrequestComment(entopts) {
        const self = this;
        return new PaginatedPullrequestCommentEntity_1.PaginatedPullrequestCommentEntity(self, entopts);
    }
    // Entity access: `client.PaginatedRef().list()` / `client.PaginatedRef().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedRef(entopts) {
        const self = this;
        return new PaginatedRefEntity_1.PaginatedRefEntity(self, entopts);
    }
    // Entity access: `client.PaginatedReport().list()` / `client.PaginatedReport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedReport(entopts) {
        const self = this;
        return new PaginatedReportEntity_1.PaginatedReportEntity(self, entopts);
    }
    // Entity access: `client.PaginatedRepository().list()` / `client.PaginatedRepository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedRepository(entopts) {
        const self = this;
        return new PaginatedRepositoryEntity_1.PaginatedRepositoryEntity(self, entopts);
    }
    // Entity access: `client.PaginatedRepositoryGroupPermission().list()` / `client.PaginatedRepositoryGroupPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedRepositoryGroupPermission(entopts) {
        const self = this;
        return new PaginatedRepositoryGroupPermissionEntity_1.PaginatedRepositoryGroupPermissionEntity(self, entopts);
    }
    // Entity access: `client.PaginatedRepositoryPermission().list()` / `client.PaginatedRepositoryPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedRepositoryPermission(entopts) {
        const self = this;
        return new PaginatedRepositoryPermissionEntity_1.PaginatedRepositoryPermissionEntity(self, entopts);
    }
    // Entity access: `client.PaginatedRepositoryUserPermission().list()` / `client.PaginatedRepositoryUserPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedRepositoryUserPermission(entopts) {
        const self = this;
        return new PaginatedRepositoryUserPermissionEntity_1.PaginatedRepositoryUserPermissionEntity(self, entopts);
    }
    // Entity access: `client.PaginatedSnippet().list()` / `client.PaginatedSnippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedSnippet(entopts) {
        const self = this;
        return new PaginatedSnippetEntity_1.PaginatedSnippetEntity(self, entopts);
    }
    // Entity access: `client.PaginatedSnippetComment().list()` / `client.PaginatedSnippetComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedSnippetComment(entopts) {
        const self = this;
        return new PaginatedSnippetCommentEntity_1.PaginatedSnippetCommentEntity(self, entopts);
    }
    // Entity access: `client.PaginatedSnippetCommit().list()` / `client.PaginatedSnippetCommit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedSnippetCommit(entopts) {
        const self = this;
        return new PaginatedSnippetCommitEntity_1.PaginatedSnippetCommitEntity(self, entopts);
    }
    // Entity access: `client.PaginatedSshUserKey().list()` / `client.PaginatedSshUserKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedSshUserKey(entopts) {
        const self = this;
        return new PaginatedSshUserKeyEntity_1.PaginatedSshUserKeyEntity(self, entopts);
    }
    // Entity access: `client.PaginatedTag().list()` / `client.PaginatedTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedTag(entopts) {
        const self = this;
        return new PaginatedTagEntity_1.PaginatedTagEntity(self, entopts);
    }
    // Entity access: `client.PaginatedTask().list()` / `client.PaginatedTask().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedTask(entopts) {
        const self = this;
        return new PaginatedTaskEntity_1.PaginatedTaskEntity(self, entopts);
    }
    // Entity access: `client.PaginatedTreeentry().list()` / `client.PaginatedTreeentry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedTreeentry(entopts) {
        const self = this;
        return new PaginatedTreeentryEntity_1.PaginatedTreeentryEntity(self, entopts);
    }
    // Entity access: `client.PaginatedWebhookSubscription().list()` / `client.PaginatedWebhookSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedWebhookSubscription(entopts) {
        const self = this;
        return new PaginatedWebhookSubscriptionEntity_1.PaginatedWebhookSubscriptionEntity(self, entopts);
    }
    // Entity access: `client.PaginatedWorkspaceAccess().list()` / `client.PaginatedWorkspaceAccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedWorkspaceAccess(entopts) {
        const self = this;
        return new PaginatedWorkspaceAccessEntity_1.PaginatedWorkspaceAccessEntity(self, entopts);
    }
    // Entity access: `client.PaginatedWorkspaceMembership().list()` / `client.PaginatedWorkspaceMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginatedWorkspaceMembership(entopts) {
        const self = this;
        return new PaginatedWorkspaceMembershipEntity_1.PaginatedWorkspaceMembershipEntity(self, entopts);
    }
    // Entity access: `client.Pipeline().list()` / `client.Pipeline().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pipeline(entopts) {
        const self = this;
        return new PipelineEntity_1.PipelineEntity(self, entopts);
    }
    // Entity access: `client.PipelineBuildNumber().list()` / `client.PipelineBuildNumber().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelineBuildNumber(entopts) {
        const self = this;
        return new PipelineBuildNumberEntity_1.PipelineBuildNumberEntity(self, entopts);
    }
    // Entity access: `client.PipelineCacheContentUri().list()` / `client.PipelineCacheContentUri().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelineCacheContentUri(entopts) {
        const self = this;
        return new PipelineCacheContentUriEntity_1.PipelineCacheContentUriEntity(self, entopts);
    }
    // Entity access: `client.PipelineKnownHost().list()` / `client.PipelineKnownHost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelineKnownHost(entopts) {
        const self = this;
        return new PipelineKnownHostEntity_1.PipelineKnownHostEntity(self, entopts);
    }
    // Entity access: `client.PipelineRunner().list()` / `client.PipelineRunner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelineRunner(entopts) {
        const self = this;
        return new PipelineRunnerEntity_1.PipelineRunnerEntity(self, entopts);
    }
    // Entity access: `client.PipelineSchedule().list()` / `client.PipelineSchedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelineSchedule(entopts) {
        const self = this;
        return new PipelineScheduleEntity_1.PipelineScheduleEntity(self, entopts);
    }
    // Entity access: `client.PipelineSshKeyPair().list()` / `client.PipelineSshKeyPair().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelineSshKeyPair(entopts) {
        const self = this;
        return new PipelineSshKeyPairEntity_1.PipelineSshKeyPairEntity(self, entopts);
    }
    // Entity access: `client.PipelineStep().list()` / `client.PipelineStep().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelineStep(entopts) {
        const self = this;
        return new PipelineStepEntity_1.PipelineStepEntity(self, entopts);
    }
    // Entity access: `client.PipelineVariable().list()` / `client.PipelineVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelineVariable(entopts) {
        const self = this;
        return new PipelineVariableEntity_1.PipelineVariableEntity(self, entopts);
    }
    // Entity access: `client.PipelinesConfig().list()` / `client.PipelinesConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PipelinesConfig(entopts) {
        const self = this;
        return new PipelinesConfigEntity_1.PipelinesConfigEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntity_1.ProjectEntity(self, entopts);
    }
    // Entity access: `client.ProjectBranchingModel().list()` / `client.ProjectBranchingModel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectBranchingModel(entopts) {
        const self = this;
        return new ProjectBranchingModelEntity_1.ProjectBranchingModelEntity(self, entopts);
    }
    // Entity access: `client.ProjectDeployKey().list()` / `client.ProjectDeployKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectDeployKey(entopts) {
        const self = this;
        return new ProjectDeployKeyEntity_1.ProjectDeployKeyEntity(self, entopts);
    }
    // Entity access: `client.ProjectGroupPermission().list()` / `client.ProjectGroupPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectGroupPermission(entopts) {
        const self = this;
        return new ProjectGroupPermissionEntity_1.ProjectGroupPermissionEntity(self, entopts);
    }
    // Entity access: `client.ProjectUserPermission().list()` / `client.ProjectUserPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectUserPermission(entopts) {
        const self = this;
        return new ProjectUserPermissionEntity_1.ProjectUserPermissionEntity(self, entopts);
    }
    // Entity access: `client.Property().list()` / `client.Property().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Property(entopts) {
        const self = this;
        return new PropertyEntity_1.PropertyEntity(self, entopts);
    }
    // Entity access: `client.Pullrequest().list()` / `client.Pullrequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pullrequest(entopts) {
        const self = this;
        return new PullrequestEntity_1.PullrequestEntity(self, entopts);
    }
    // Entity access: `client.PullrequestComment().list()` / `client.PullrequestComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PullrequestComment(entopts) {
        const self = this;
        return new PullrequestCommentEntity_1.PullrequestCommentEntity(self, entopts);
    }
    // Entity access: `client.PullrequestCommentTask().list()` / `client.PullrequestCommentTask().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PullrequestCommentTask(entopts) {
        const self = this;
        return new PullrequestCommentTaskEntity_1.PullrequestCommentTaskEntity(self, entopts);
    }
    // Entity access: `client.PullrequestMergeabilityCheck().list()` / `client.PullrequestMergeabilityCheck().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PullrequestMergeabilityCheck(entopts) {
        const self = this;
        return new PullrequestMergeabilityCheckEntity_1.PullrequestMergeabilityCheckEntity(self, entopts);
    }
    // Entity access: `client.Ref().list()` / `client.Ref().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Ref(entopts) {
        const self = this;
        return new RefEntity_1.RefEntity(self, entopts);
    }
    // Entity access: `client.Report().list()` / `client.Report().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Report(entopts) {
        const self = this;
        return new ReportEntity_1.ReportEntity(self, entopts);
    }
    // Entity access: `client.ReportAnnotation().list()` / `client.ReportAnnotation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReportAnnotation(entopts) {
        const self = this;
        return new ReportAnnotationEntity_1.ReportAnnotationEntity(self, entopts);
    }
    // Entity access: `client.Repository().list()` / `client.Repository().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Repository(entopts) {
        const self = this;
        return new RepositoryEntity_1.RepositoryEntity(self, entopts);
    }
    // Entity access: `client.RepositoryGroupPermission().list()` / `client.RepositoryGroupPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryGroupPermission(entopts) {
        const self = this;
        return new RepositoryGroupPermissionEntity_1.RepositoryGroupPermissionEntity(self, entopts);
    }
    // Entity access: `client.RepositoryInheritanceState().list()` / `client.RepositoryInheritanceState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryInheritanceState(entopts) {
        const self = this;
        return new RepositoryInheritanceStateEntity_1.RepositoryInheritanceStateEntity(self, entopts);
    }
    // Entity access: `client.RepositoryUserPermission().list()` / `client.RepositoryUserPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryUserPermission(entopts) {
        const self = this;
        return new RepositoryUserPermissionEntity_1.RepositoryUserPermissionEntity(self, entopts);
    }
    // Entity access: `client.RequestChange().list()` / `client.RequestChange().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RequestChange(entopts) {
        const self = this;
        return new RequestChangeEntity_1.RequestChangeEntity(self, entopts);
    }
    // Entity access: `client.SearchResultPage().list()` / `client.SearchResultPage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SearchResultPage(entopts) {
        const self = this;
        return new SearchResultPageEntity_1.SearchResultPageEntity(self, entopts);
    }
    // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Snippet(entopts) {
        const self = this;
        return new SnippetEntity_1.SnippetEntity(self, entopts);
    }
    // Entity access: `client.SnippetComment().list()` / `client.SnippetComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SnippetComment(entopts) {
        const self = this;
        return new SnippetCommentEntity_1.SnippetCommentEntity(self, entopts);
    }
    // Entity access: `client.SnippetCommit().list()` / `client.SnippetCommit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SnippetCommit(entopts) {
        const self = this;
        return new SnippetCommitEntity_1.SnippetCommitEntity(self, entopts);
    }
    // Entity access: `client.Source().list()` / `client.Source().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Source(entopts) {
        const self = this;
        return new SourceEntity_1.SourceEntity(self, entopts);
    }
    // Entity access: `client.Ssh().list()` / `client.Ssh().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Ssh(entopts) {
        const self = this;
        return new SshEntity_1.SshEntity(self, entopts);
    }
    // Entity access: `client.SshAccountKey().list()` / `client.SshAccountKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SshAccountKey(entopts) {
        const self = this;
        return new SshAccountKeyEntity_1.SshAccountKeyEntity(self, entopts);
    }
    // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tag(entopts) {
        const self = this;
        return new TagEntity_1.TagEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.Watcher().list()` / `client.Watcher().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Watcher(entopts) {
        const self = this;
        return new WatcherEntity_1.WatcherEntity(self, entopts);
    }
    // Entity access: `client.WebhookSubscription().list()` / `client.WebhookSubscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebhookSubscription(entopts) {
        const self = this;
        return new WebhookSubscriptionEntity_1.WebhookSubscriptionEntity(self, entopts);
    }
    // Entity access: `client.Workspace().list()` / `client.Workspace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workspace(entopts) {
        const self = this;
        return new WorkspaceEntity_1.WorkspaceEntity(self, entopts);
    }
    // Entity access: `client.WorkspaceMembership().list()` / `client.WorkspaceMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkspaceMembership(entopts) {
        const self = this;
        return new WorkspaceMembershipEntity_1.WorkspaceMembershipEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new BitbucketSdkSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return BitbucketSdkSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'BitbucketSdk' };
    }
    toString() {
        return 'BitbucketSdk ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.BitbucketSdkSDK = BitbucketSdkSDK;
const SDK = BitbucketSdkSDK;
exports.SDK = SDK;
//# sourceMappingURL=BitbucketSdkSDK.js.map