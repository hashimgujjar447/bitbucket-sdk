export interface Addon {
}
export interface AddonLoadMatch {
    addon_key: string;
    $action?: string;
    [action: string]: any;
}
export interface AddonUpdateData {
}
export interface AddonRemoveMatch {
}
export interface ApplicationProperty {
    attributes?: any[];
    id?: string;
}
export interface ApplicationPropertyLoadMatch {
    app_key: string;
    commit?: string;
    property_name: string;
    repo_slug?: string;
    workspace?: string;
    pullrequest_id?: string;
    selected_user?: string;
}
export interface Approve {
    approved?: boolean;
    participated_on?: string;
    role?: string;
    state?: string;
    type: string;
    user?: any;
}
export interface ApproveCreateData {
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
    approved?: boolean;
    participated_on?: string;
    role?: string;
    state?: string;
    type: string;
    user?: any;
}
export interface Branch {
    default_merge_strategy?: string;
    id?: string;
    links?: Record<string, any>;
    merge_strategies?: any[];
    name?: string;
    target?: any;
    type: string;
}
export interface BranchLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface BranchCreateData {
    repo_slug: string;
    workspace: string;
    default_merge_strategy?: string;
    id?: string;
    links?: Record<string, any>;
    merge_strategies?: any[];
    name?: string;
    target?: any;
    type: string;
}
export interface BranchingModel {
    branch_types?: any[];
    development: Record<string, any>;
    production: Record<string, any>;
    type: string;
}
export interface BranchingModelListMatch {
    repo_slug: string;
    workspace: string;
}
export interface BranchingModelSetting {
    branch_types?: any[];
    development?: Record<string, any>;
    links?: Record<string, any>;
    production?: Record<string, any>;
    type: string;
}
export interface BranchingModelSettingListMatch {
    repo_slug: string;
    workspace: string;
}
export interface BranchingModelSettingUpdateData {
    repo_slug: string;
    workspace: string;
    branch_types?: any[];
    development?: Record<string, any>;
    links?: Record<string, any>;
    production?: Record<string, any>;
    type?: string;
}
export interface Branchrestriction {
    branch_match_kind: string;
    branch_type?: string;
    groups?: any[];
    id?: number;
    kind: string;
    links?: Record<string, any>;
    pattern: string;
    pipelines_source_branches?: any[];
    type: string;
    users?: any[];
    value?: number;
}
export interface BranchrestrictionLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface BranchrestrictionCreateData {
    repo_slug: string;
    workspace: string;
    branch_match_kind: string;
    branch_type?: string;
    groups?: any[];
    id?: number;
    kind: string;
    links?: Record<string, any>;
    pattern: string;
    pipelines_source_branches?: any[];
    type: string;
    users?: any[];
    value?: number;
}
export interface BranchrestrictionUpdateData {
    id: string;
    repo_slug: string;
    workspace: string;
    branch_match_kind?: string;
    branch_type?: string;
    groups?: any[];
    kind?: string;
    links?: Record<string, any>;
    pattern?: string;
    pipelines_source_branches?: any[];
    type?: string;
    users?: any[];
    value?: number;
}
export interface BranchrestrictionRemoveMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface CommentResolution {
    created_on?: string;
    id?: string;
    type: string;
    user?: any;
}
export interface CommentResolutionCreateData {
    id: number;
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
    created_on?: string;
    type: string;
    user?: any;
    $action?: string;
    [action: string]: any;
}
export interface Commit {
    author?: any;
    commit?: any;
    committer?: any;
    content?: Record<string, any>;
    created_on?: string;
    date?: string;
    deleted?: boolean;
    hash?: string;
    id?: number;
    inline: Record<string, any>;
    links?: Record<string, any>;
    message?: string;
    parent?: any;
    parents?: any[];
    participants?: any[];
    repository?: any;
    summary?: Record<string, any>;
    type: string;
    updated_on?: string;
    user?: any;
}
export interface CommitLoadMatch {
    comment_id?: number;
    id?: string;
    repo_slug: string;
    workspace: string;
    revspec?: string;
    spec?: string;
    binary?: boolean;
    context?: number;
    ignore_whitespace?: boolean;
    merge?: boolean;
    path?: string;
    rename?: boolean;
    topic?: boolean;
}
export interface CommitListMatch {
    id: string;
    repo_slug: string;
    workspace: string;
    q?: string;
    sort?: string;
    $action?: string;
    [action: string]: any;
}
export interface CommitCreateData {
    id: string;
    repo_slug: string;
    workspace: string;
    author?: any;
    commit?: any;
    committer?: any;
    content?: Record<string, any>;
    created_on?: string;
    date?: string;
    deleted?: boolean;
    hash?: string;
    inline: Record<string, any>;
    links?: Record<string, any>;
    message?: string;
    parent?: any;
    parents?: any[];
    participants?: any[];
    repository?: any;
    summary?: Record<string, any>;
    type: string;
    updated_on?: string;
    user?: any;
    $action?: string;
    [action: string]: any;
}
export interface CommitUpdateData {
    comment_id: number;
    id: string;
    repo_slug: string;
    workspace: string;
    author?: any;
    commit?: any;
    committer?: any;
    content?: Record<string, any>;
    created_on?: string;
    date?: string;
    deleted?: boolean;
    hash?: string;
    inline?: Record<string, any>;
    links?: Record<string, any>;
    message?: string;
    parent?: any;
    parents?: any[];
    participants?: any[];
    repository?: any;
    summary?: Record<string, any>;
    type?: string;
    updated_on?: string;
    user?: any;
}
export interface CommitRemoveMatch {
    comment_id: number;
    id: string;
    repo_slug: string;
    workspace: string;
    $action?: string;
    [action: string]: any;
}
export interface Commitstatus {
    created_on?: string;
    description?: string;
    key: string;
    links?: Record<string, any>;
    name?: string;
    refname?: string;
    state: string;
    type: string;
    updated_on?: string;
    url?: string;
}
export interface CommitstatusLoadMatch {
    commit_id: string;
    key: string;
    repo_slug: string;
    workspace: string;
}
export interface CommitstatusCreateData {
    commit_id: string;
    repo_slug: string;
    workspace: string;
    created_on?: string;
    description?: string;
    key: string;
    links?: Record<string, any>;
    name?: string;
    refname?: string;
    state: string;
    type: string;
    updated_on?: string;
    url?: string;
}
export interface CommitstatusUpdateData {
    commit_id: string;
    key: string;
    repo_slug: string;
    workspace: string;
    created_on?: string;
    description?: string;
    links?: Record<string, any>;
    name?: string;
    refname?: string;
    state?: string;
    type?: string;
    updated_on?: string;
    url?: string;
}
export interface DefaultReviewer {
    created_on?: string;
    display_name?: string;
    id?: string;
    links?: Record<string, any>;
    type: string;
    uuid?: string;
}
export interface DefaultReviewerLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface DefaultReviewerUpdateData {
    id: string;
    repo_slug: string;
    workspace: string;
    created_on?: string;
    display_name?: string;
    links?: Record<string, any>;
    type?: string;
    uuid?: string;
}
export interface DeployKey {
    added_on?: string;
    comment?: string;
    id?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    owner?: any;
    repository?: any;
    type: string;
}
export interface DeployKeyLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface DeployKeyCreateData {
    repo_slug: string;
    workspace: string;
    added_on?: string;
    comment?: string;
    id?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    owner?: any;
    repository?: any;
    type: string;
}
export interface DeployKeyUpdateData {
    id: string;
    repo_slug: string;
    workspace: string;
    added_on?: string;
    comment?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    owner?: any;
    repository?: any;
    type?: string;
}
export interface Deployment {
    environment?: any;
    id?: string;
    release?: any;
    state?: any;
    type: string;
    uuid?: string;
}
export interface DeploymentLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface DeploymentCreateData {
    environment_uuid: string;
    repo_slug: string;
    workspace: string;
    environment?: any;
    id?: string;
    release?: any;
    state?: any;
    type: string;
    uuid?: string;
}
export interface DeploymentRemoveMatch {
    environment_uuid: string;
    repo_slug: string;
    workspace: string;
}
export interface DeploymentEnvironment {
    id?: string;
    name?: string;
    type: string;
    uuid?: string;
}
export interface DeploymentEnvironmentLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface DeploymentEnvironmentCreateData {
    repo_slug: string;
    workspace: string;
    id?: string;
    name?: string;
    type: string;
    uuid?: string;
}
export interface DeploymentVariable {
    id?: string;
    key?: string;
    secured?: boolean;
    type: string;
    uuid?: string;
    value?: string;
}
export interface DeploymentVariableCreateData {
    environment_id: string;
    repo_slug: string;
    workspace: string;
    id?: string;
    key?: string;
    secured?: boolean;
    type: string;
    uuid?: string;
    value?: string;
}
export interface DeploymentVariableUpdateData {
    environment_id: string;
    id: string;
    repo_slug: string;
    workspace: string;
    key?: string;
    secured?: boolean;
    type?: string;
    uuid?: string;
    value?: string;
}
export interface Download {
    id?: string;
}
export interface DownloadLoadMatch {
    id?: string;
    repo_slug: string;
    workspace: string;
}
export interface DownloadCreateData {
    repo_slug: string;
    workspace: string;
    id?: string;
}
export interface DownloadRemoveMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface EffectiveDefaultReviewer {
    reviewer_type?: string;
    type: string;
    user?: any;
}
export interface EffectiveDefaultReviewerListMatch {
    repo_slug: string;
    workspace: string;
}
export interface EffectiveRepoBranchingModel {
    branch_types?: any[];
    development: Record<string, any>;
    production: Record<string, any>;
    type: string;
}
export interface EffectiveRepoBranchingModelListMatch {
    repo_slug: string;
    workspace: string;
}
export interface Gpg {
}
export interface GpgRemoveMatch {
    fingerprint: string;
    selected_user: string;
}
export interface GpgAccountKey {
    added_on?: string;
    created_on?: string;
    expires_on?: string;
    fingerprint?: string;
    key?: string;
    key_id?: string;
    last_used?: string;
    links?: Record<string, any>;
    name?: string;
    owner?: any;
    parent_fingerprint?: string;
    subkeys?: any[];
    type: string;
}
export interface GpgAccountKeyLoadMatch {
    fingerprint: string;
    selected_user: string;
}
export interface GpgAccountKeyCreateData {
    selected_user: string;
    added_on?: string;
    created_on?: string;
    expires_on?: string;
    fingerprint?: string;
    key?: string;
    key_id?: string;
    last_used?: string;
    links?: Record<string, any>;
    name?: string;
    owner?: any;
    parent_fingerprint?: string;
    subkeys?: any[];
    type: string;
}
export interface MergeQueue {
    id?: string;
    name: string;
    state: string;
    type: string;
    uuid: string;
}
export interface MergeQueueLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface MergeQueueRemoveMatch {
    id: string;
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
}
export interface MergeQueuePullrequest {
    last_activity_on?: string;
    merge_queue?: Record<string, any>;
    pipeline?: any;
    pullrequest?: any;
    queued_on?: string;
    rank?: number;
    status?: string;
    type?: string;
}
export interface MergeQueuePullrequestLoadMatch {
    merge_queue_id: string;
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
}
export interface PaginatedAccount {
    created_on?: string;
    display_name?: string;
    links?: Record<string, any>;
    type: string;
    uuid?: string;
}
export interface PaginatedAccountListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedAnnotation {
    annotation_type?: string;
    created_on?: string;
    details?: string;
    external_id?: string;
    line?: number;
    link?: string;
    path?: string;
    result?: string;
    severity?: string;
    summary?: string;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PaginatedAnnotationListMatch {
    commit_id: string;
    repo_slug: string;
    report_id: string;
    workspace: string;
}
export interface PaginatedBranch {
    default_merge_strategy?: string;
    links?: Record<string, any>;
    merge_strategies?: any[];
    name?: string;
    target?: any;
    type: string;
}
export interface PaginatedBranchListMatch {
    repo_slug: string;
    workspace: string;
    q?: string;
    sort?: string;
}
export interface PaginatedBranchrestriction {
    branch_match_kind: string;
    branch_type?: string;
    groups?: any[];
    id?: number;
    kind: string;
    links?: Record<string, any>;
    pattern: string;
    pipelines_source_branches?: any[];
    type: string;
    users?: any[];
    value?: number;
}
export interface PaginatedBranchrestrictionListMatch {
    repo_slug: string;
    workspace: string;
    kind?: string;
    pattern?: string;
}
export interface PaginatedChangeset {
    author?: any;
    committer?: any;
    date?: string;
    hash?: string;
    message?: string;
    next?: string;
    page?: number;
    pagelen?: number;
    parents?: any[];
    previous?: string;
    size?: number;
    summary?: Record<string, any>;
    type: string;
    values?: any[];
}
export interface PaginatedChangesetLoadMatch {
    repo_slug: string;
    revision: string;
    workspace: string;
}
export interface PaginatedChangesetListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedChangesetCreateData {
    repo_slug: string;
    revision?: string;
    workspace: string;
    author?: any;
    committer?: any;
    date?: string;
    hash?: string;
    message?: string;
    next?: string;
    page?: number;
    pagelen?: number;
    parents?: any[];
    previous?: string;
    size?: number;
    summary?: Record<string, any>;
    type: string;
    values?: any[];
}
export interface PaginatedCommitstatus {
    created_on?: string;
    description?: string;
    key: string;
    links?: Record<string, any>;
    name?: string;
    refname?: string;
    state: string;
    type: string;
    updated_on?: string;
    url?: string;
}
export interface PaginatedCommitstatusListMatch {
    commit_id?: string;
    repo_slug: string;
    workspace: string;
    q?: string;
    refname?: string;
    sort?: string;
    pullrequest_id?: number;
}
export interface PaginatedDefaultReviewerAndType {
    reviewer_type?: string;
    type: string;
    user?: any;
}
export interface PaginatedDefaultReviewerAndTypeListMatch {
    project_key: string;
    workspace_id: string;
}
export interface PaginatedDeployKey {
    added_on?: string;
    comment?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    owner?: any;
    repository?: any;
    type: string;
}
export interface PaginatedDeployKeyListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedDeployment {
    environment?: any;
    release?: any;
    state?: any;
    type: string;
    uuid?: string;
}
export interface PaginatedDeploymentListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedDeploymentVariable {
    key?: string;
    secured?: boolean;
    type: string;
    uuid?: string;
    value?: string;
}
export interface PaginatedDeploymentVariableListMatch {
    environment_id: string;
    repo_slug: string;
    workspace: string;
}
export interface PaginatedDiffstat {
    id?: string;
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: any[];
}
export interface PaginatedDiffstatLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
    ignore_whitespace?: boolean;
    merge?: boolean;
    path?: string;
    rename?: boolean;
    topic?: boolean;
}
export interface PaginatedEnvironment {
    name?: string;
    type: string;
    uuid?: string;
}
export interface PaginatedEnvironmentListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedFile {
    id?: string;
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: any[];
}
export interface PaginatedFileLoadMatch {
    commit: string;
    path: string;
    repo_slug: string;
    workspace: string;
    q?: string;
    rename?: string;
    sort?: string;
}
export interface PaginatedFileConflict {
    id?: string;
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: any[];
}
export interface PaginatedFileConflictLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface PaginatedGpgUserKey {
    added_on?: string;
    created_on?: string;
    expires_on?: string;
    fingerprint?: string;
    key?: string;
    key_id?: string;
    last_used?: string;
    links?: Record<string, any>;
    name?: string;
    owner?: any;
    parent_fingerprint?: string;
    subkeys?: any[];
    type: string;
}
export interface PaginatedGpgUserKeyListMatch {
    selected_user: string;
}
export interface PaginatedHookEvent {
    id?: string;
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    repository?: Record<string, any>;
    size?: number;
    values?: any[];
    workspace?: Record<string, any>;
}
export interface PaginatedHookEventLoadMatch {
    id: string;
}
export interface PaginatedMergeQueue {
    name: string;
    state: string;
    type: string;
    uuid: string;
}
export interface PaginatedMergeQueueListMatch {
    repo_slug: string;
    workspace: string;
    page?: number;
    pagelen?: number;
    target_branch?: string;
}
export interface PaginatedMergeQueuePullrequest {
    last_activity_on?: string;
    merge_queue?: Record<string, any>;
    pipeline?: any;
    pullrequest?: any;
    queued_on?: string;
    rank?: number;
    status?: string;
    type?: string;
}
export interface PaginatedMergeQueuePullrequestListMatch {
    merge_queue_id: string;
    repo_slug: string;
    workspace: string;
    page?: number;
    pagelen?: number;
}
export interface PaginatedPipeline {
    build_number?: number;
    build_seconds_used?: number;
    completed_on?: string;
    configuration_sources?: any[];
    created_on?: string;
    creator?: any;
    links?: any;
    repository?: any;
    state?: any;
    target?: any;
    trigger?: any;
    type: string;
    uuid?: string;
    variables?: any[];
}
export interface PaginatedPipelineListMatch {
    repo_slug: string;
    workspace: string;
    created_on?: string;
    creator_uuid?: string;
    page?: number;
    pagelen?: number;
    sort?: string;
    status?: string;
    target_branch?: string;
    target_commit_hash?: string;
    target_ref_name?: string;
    target_ref_type?: string;
    target_selector_pattern?: string;
    target_selector_type?: string;
    trigger_type?: string;
}
export interface PaginatedPipelineCache {
    created_on?: string;
    file_size_bytes?: number;
    key_hash?: string;
    name?: string;
    path?: string;
    pipeline_uuid?: string;
    step_uuid?: string;
    type: string;
    uuid?: string;
}
export interface PaginatedPipelineCacheListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedPipelineKnownHost {
    hostname?: string;
    public_key?: any;
    type: string;
    uuid?: string;
}
export interface PaginatedPipelineKnownHostListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedPipelineRunner {
    created_on?: string;
    labels?: any[];
    name?: string;
    oauth_client?: any;
    state?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PaginatedPipelineRunnerListMatch {
    workspace_id: string;
}
export interface PaginatedPipelineSchedule {
    created_on?: string;
    cron_pattern?: string;
    enabled?: boolean;
    target?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PaginatedPipelineScheduleListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedPipelineScheduleExecution {
    type: string;
}
export interface PaginatedPipelineScheduleExecutionListMatch {
    repo_slug: string;
    schedule_id: string;
    workspace: string;
}
export interface PaginatedPipelineStep {
    completed_on?: string;
    image?: Record<string, any>;
    script_commands?: any[];
    setup_commands?: any[];
    started_on?: string;
    state?: any;
    type: string;
    uuid?: string;
}
export interface PaginatedPipelineStepListMatch {
    pipeline_id: string;
    repo_slug: string;
    workspace: string;
}
export interface PaginatedPipelineVariable {
    key?: string;
    secured?: boolean;
    type: string;
    uuid?: string;
    value?: string;
}
export interface PaginatedPipelineVariableListMatch {
    selected_user: string;
}
export interface PaginatedProject {
    created_on?: string;
    description?: string;
    has_publicly_visible_repos?: boolean;
    is_private?: boolean;
    key?: string;
    links?: Record<string, any>;
    name?: string;
    owner?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PaginatedProjectListMatch {
    workspace_id: string;
}
export interface PaginatedProjectDeployKey {
    added_on?: string;
    comment?: string;
    created_by?: any;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    project?: any;
    type: string;
}
export interface PaginatedProjectDeployKeyListMatch {
    project_key: string;
    workspace_id: string;
}
export interface PaginatedProjectGroupPermission {
    group?: any;
    links?: Record<string, any>;
    permission?: string;
    project?: any;
    type: string;
}
export interface PaginatedProjectGroupPermissionListMatch {
    project_id: string;
    workspace_id: string;
}
export interface PaginatedProjectUserPermission {
    links?: Record<string, any>;
    permission?: string;
    project?: any;
    type: string;
    user?: any;
}
export interface PaginatedProjectUserPermissionListMatch {
    project_id: string;
    workspace_id: string;
}
export interface PaginatedPullrequest {
    author?: any;
    close_source_branch?: boolean;
    closed_by?: any;
    comment_count?: number;
    created_on?: string;
    destination?: Record<string, any>;
    draft?: boolean;
    id?: number;
    links?: Record<string, any>;
    merge_commit?: Record<string, any>;
    next?: string;
    page?: number;
    pagelen?: number;
    participants?: any[];
    previous?: string;
    queued?: boolean;
    reason?: string;
    rendered?: Record<string, any>;
    reviewers?: any[];
    size?: number;
    source?: Record<string, any>;
    state?: string;
    summary?: Record<string, any>;
    task_count?: number;
    title?: string;
    type: string;
    updated_on?: string;
    values?: any[];
}
export interface PaginatedPullrequestLoadMatch {
    id: string;
    workspace_id: string;
    state?: string;
}
export interface PaginatedPullrequestListMatch {
    commit_id?: string;
    repo_slug: string;
    workspace: string;
    page?: number;
    pagelen?: number;
    state?: string;
}
export interface PaginatedPullrequestComment {
    content?: Record<string, any>;
    created_on?: string;
    deleted?: boolean;
    id?: number;
    inline: Record<string, any>;
    links?: Record<string, any>;
    parent?: any;
    pending?: boolean;
    pullrequest?: any;
    resolution: Record<string, any>;
    type: string;
    updated_on?: string;
    user?: any;
}
export interface PaginatedPullrequestCommentListMatch {
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
}
export interface PaginatedRef {
    links?: Record<string, any>;
    name?: string;
    target?: any;
    type: string;
}
export interface PaginatedRefListMatch {
    repo_slug: string;
    workspace: string;
    q?: string;
    sort?: string;
}
export interface PaginatedReport {
    created_on?: string;
    data?: any[];
    details?: string;
    external_id?: string;
    link?: string;
    logo_url?: string;
    remote_link_enabled?: boolean;
    report_type?: string;
    reporter?: string;
    result?: string;
    title?: string;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PaginatedReportListMatch {
    commit_id: string;
    repo_slug: string;
    workspace: string;
}
export interface PaginatedRepository {
    created_on?: string;
    description?: string;
    fork_policy?: string;
    full_name?: string;
    has_issues?: boolean;
    has_wiki?: boolean;
    id?: string;
    is_private?: boolean;
    language?: string;
    links?: Record<string, any>;
    mainbranch?: any;
    name?: string;
    next?: string;
    owner?: any;
    page?: number;
    pagelen?: number;
    parent?: any;
    previous?: string;
    project?: any;
    scm?: string;
    size?: number;
    type: string;
    updated_on?: string;
    uuid?: string;
    values?: any[];
}
export interface PaginatedRepositoryLoadMatch {
    id: string;
    q?: string;
    role?: string;
    sort?: string;
}
export interface PaginatedRepositoryListMatch {
    repo_slug: string;
    workspace: string;
    q?: string;
    role?: string;
    sort?: string;
}
export interface PaginatedRepositoryGroupPermission {
    group?: any;
    links?: Record<string, any>;
    permission?: string;
    repository?: any;
    type: string;
}
export interface PaginatedRepositoryGroupPermissionListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedRepositoryPermission {
    next?: string;
    page?: number;
    pagelen?: number;
    permission?: string;
    previous?: string;
    repository?: any;
    size?: number;
    type: string;
    user?: any;
    values?: any[];
}
export interface PaginatedRepositoryPermissionLoadMatch {
    repo_slug: string;
    workspace_id: string;
    q?: string;
    sort?: string;
}
export interface PaginatedRepositoryPermissionListMatch {
    workspace_id: string;
    q?: string;
    sort?: string;
}
export interface PaginatedRepositoryUserPermission {
    links?: Record<string, any>;
    permission?: string;
    repository?: any;
    type: string;
    user?: any;
}
export interface PaginatedRepositoryUserPermissionListMatch {
    repo_slug: string;
    workspace: string;
}
export interface PaginatedSnippet {
    id?: string;
    next?: string;
    page?: number;
    pagelen?: number;
    previous?: string;
    size?: number;
    values?: any[];
}
export interface PaginatedSnippetLoadMatch {
    id: string;
    role?: string;
}
export interface PaginatedSnippetComment {
    links?: Record<string, any>;
    snippet?: any;
    type: string;
}
export interface PaginatedSnippetCommentListMatch {
    encoded_id: string;
    workspace: string;
}
export interface PaginatedSnippetCommit {
    author?: any;
    committer?: any;
    date?: string;
    hash?: string;
    links?: Record<string, any>;
    message?: string;
    parents?: any[];
    snippet?: any;
    summary?: Record<string, any>;
    type: string;
}
export interface PaginatedSnippetCommitListMatch {
    encoded_id: string;
    workspace: string;
}
export interface PaginatedSshUserKey {
    comment?: string;
    created_on?: string;
    expires_on?: string;
    fingerprint?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    owner?: any;
    type: string;
    uuid?: string;
}
export interface PaginatedSshUserKeyListMatch {
    selected_user: string;
}
export interface PaginatedTag {
    date?: string;
    links?: Record<string, any>;
    message?: string;
    name?: string;
    tagger?: any;
    target?: any;
    type: string;
}
export interface PaginatedTagListMatch {
    repo_slug: string;
    workspace: string;
    q?: string;
    sort?: string;
}
export interface PaginatedTask {
    comment?: any;
    content: Record<string, any>;
    created_on: string;
    creator: any;
    id?: number;
    links?: Record<string, any>;
    pending?: boolean;
    resolved_by?: any;
    resolved_on?: string;
    state: string;
    updated_on: string;
}
export interface PaginatedTaskListMatch {
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
    pagelen?: number;
    q?: string;
    sort?: string;
}
export interface PaginatedTreeentry {
    commit?: any;
    id?: string;
    next?: string;
    page?: number;
    pagelen?: number;
    path?: string;
    previous?: string;
    size?: number;
    type: string;
    values?: any[];
}
export interface PaginatedTreeentryLoadMatch {
    commit: string;
    path: string;
    repo_slug: string;
    workspace: string;
    format?: string;
    max_depth?: number;
    q?: string;
    sort?: string;
}
export interface PaginatedTreeentryListMatch {
    repo_slug: string;
    workspace: string;
    format?: string;
}
export interface PaginatedWebhookSubscription {
    active?: boolean;
    created_at?: string;
    description?: string;
    events?: any[];
    links?: Record<string, any>;
    secret?: string;
    secret_set?: boolean;
    subject: Record<string, any>;
    subject_type?: string;
    type: string;
    url?: string;
    uuid?: string;
}
export interface PaginatedWebhookSubscriptionListMatch {
    workspace_id: string;
}
export interface PaginatedWorkspaceAccess {
    administrator?: boolean;
    type: string;
    workspace?: any;
}
export interface PaginatedWorkspaceAccessListMatch {
    administrator?: boolean;
    sort?: string;
}
export interface PaginatedWorkspaceMembership {
    links?: Record<string, any>;
    type: string;
    user?: any;
    workspace?: any;
}
export interface PaginatedWorkspaceMembershipListMatch {
    workspace_id: string;
    q?: string;
}
export interface Pipeline {
    build_number?: number;
    build_seconds_used?: number;
    completed_on?: string;
    configuration_sources?: any[];
    created_on?: string;
    creator?: any;
    id?: string;
    links?: any;
    repository?: any;
    state?: any;
    target?: any;
    trigger?: any;
    type: string;
    uuid?: string;
    variables?: any[];
}
export interface PipelineLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface PipelineCreateData {
    repo_slug: string;
    workspace: string;
    merge_default?: boolean;
    target_branch_to_create?: string;
    build_number?: number;
    build_seconds_used?: number;
    completed_on?: string;
    configuration_sources?: any[];
    created_on?: string;
    creator?: any;
    id?: string;
    links?: any;
    repository?: any;
    state?: any;
    target?: any;
    trigger?: any;
    type: string;
    uuid?: string;
    variables?: any[];
    $action?: string;
    [action: string]: any;
}
export interface PipelineRemoveMatch {
    runner_uuid: string;
    workspace_id: string;
}
export interface PipelineBuildNumber {
    next?: number;
    type: string;
}
export interface PipelineBuildNumberUpdateData {
    repo_slug: string;
    workspace: string;
    next?: number;
    type?: string;
}
export interface PipelineCacheContentUri {
    uri?: string;
}
export interface PipelineCacheContentUriLoadMatch {
    cache_id: string;
    repo_slug: string;
    workspace: string;
}
export interface PipelineKnownHost {
    hostname?: string;
    id?: string;
    public_key?: any;
    type: string;
    uuid?: string;
}
export interface PipelineKnownHostLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface PipelineKnownHostCreateData {
    repo_slug: string;
    workspace: string;
    hostname?: string;
    id?: string;
    public_key?: any;
    type: string;
    uuid?: string;
}
export interface PipelineKnownHostUpdateData {
    id: string;
    repo_slug: string;
    workspace: string;
    hostname?: string;
    public_key?: any;
    type?: string;
    uuid?: string;
}
export interface PipelineRunner {
    created_on?: string;
    id?: string;
    labels?: any[];
    name?: string;
    oauth_client?: any;
    state?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PipelineRunnerLoadMatch {
    id: string;
    repo_slug?: string;
    workspace?: string;
    workspace_id?: string;
}
export interface PipelineRunnerCreateData {
    workspace_id: string;
    created_on?: string;
    id?: string;
    labels?: any[];
    name?: string;
    oauth_client?: any;
    state?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PipelineRunnerUpdateData {
    id: string;
    repo_slug?: string;
    workspace?: string;
    workspace_id?: string;
    created_on?: string;
    labels?: any[];
    name?: string;
    oauth_client?: any;
    state?: any;
    type?: string;
    updated_on?: string;
    uuid?: string;
}
export interface PipelineSchedule {
    created_on?: string;
    cron_pattern?: string;
    enabled?: boolean;
    id?: string;
    target?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PipelineScheduleLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface PipelineScheduleCreateData {
    repo_slug: string;
    workspace: string;
    created_on?: string;
    cron_pattern?: string;
    enabled?: boolean;
    id?: string;
    target?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface PipelineScheduleUpdateData {
    id: string;
    repo_slug: string;
    workspace: string;
    created_on?: string;
    cron_pattern?: string;
    enabled?: boolean;
    target?: any;
    type?: string;
    updated_on?: string;
    uuid?: string;
}
export interface PipelineSshKeyPair {
    private_key?: string;
    public_key?: string;
    type: string;
}
export interface PipelineSshKeyPairLoadMatch {
    repo_slug: string;
    workspace: string;
}
export interface PipelineSshKeyPairUpdateData {
    repo_slug: string;
    workspace: string;
    private_key?: string;
    public_key?: string;
    type?: string;
}
export interface PipelineStep {
    completed_on?: string;
    id?: string;
    image?: Record<string, any>;
    script_commands?: any[];
    setup_commands?: any[];
    started_on?: string;
    state?: any;
    type: string;
    uuid?: string;
}
export interface PipelineStepLoadMatch {
    id: string;
    pipeline_id: string;
    repo_slug: string;
    workspace: string;
}
export interface PipelineVariable {
    id?: string;
    key?: string;
    secured?: boolean;
    type: string;
    uuid?: string;
    value?: string;
}
export interface PipelineVariableLoadMatch {
    id: string;
    repo_slug?: string;
    workspace?: string;
    selected_user?: string;
    username?: string;
    workspace_id?: string;
}
export interface PipelineVariableCreateData {
    selected_user: string;
    id?: string;
    key?: string;
    secured?: boolean;
    type: string;
    uuid?: string;
    value?: string;
}
export interface PipelineVariableUpdateData {
    id: string;
    repo_slug?: string;
    workspace?: string;
    selected_user?: string;
    username?: string;
    workspace_id?: string;
    key?: string;
    secured?: boolean;
    type?: string;
    uuid?: string;
    value?: string;
}
export interface PipelinesConfig {
    enabled?: boolean;
    repository?: any;
    type: string;
}
export interface PipelinesConfigLoadMatch {
    repo_slug: string;
    workspace: string;
}
export interface PipelinesConfigUpdateData {
    repo_slug: string;
    workspace: string;
    enabled?: boolean;
    repository?: any;
    type?: string;
}
export interface Project {
    created_on?: string;
    description?: string;
    has_publicly_visible_repos?: boolean;
    id?: string;
    is_private?: boolean;
    key?: string;
    links?: Record<string, any>;
    name?: string;
    owner?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface ProjectLoadMatch {
    id: string;
    workspace_id: string;
}
export interface ProjectCreateData {
    workspace_id: string;
    created_on?: string;
    description?: string;
    has_publicly_visible_repos?: boolean;
    id?: string;
    is_private?: boolean;
    key?: string;
    links?: Record<string, any>;
    name?: string;
    owner?: any;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface ProjectUpdateData {
    id: string;
    workspace_id: string;
    created_on?: string;
    description?: string;
    has_publicly_visible_repos?: boolean;
    is_private?: boolean;
    key?: string;
    links?: Record<string, any>;
    name?: string;
    owner?: any;
    type?: string;
    updated_on?: string;
    uuid?: string;
}
export interface ProjectRemoveMatch {
    group_slug?: string;
    project_id?: string;
    workspace_id: string;
    selected_user?: string;
    selected_user_id?: string;
    id?: string;
}
export interface ProjectBranchingModel {
    branch_types?: any[];
    development: Record<string, any>;
    production: Record<string, any>;
    type: string;
}
export interface ProjectBranchingModelListMatch {
    project_key: string;
    workspace_id: string;
}
export interface ProjectDeployKey {
    added_on?: string;
    comment?: string;
    created_by?: any;
    id?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    project?: any;
    type: string;
}
export interface ProjectDeployKeyLoadMatch {
    id: string;
    project_key: string;
    workspace_id: string;
}
export interface ProjectDeployKeyCreateData {
    project_key: string;
    workspace_id: string;
    added_on?: string;
    comment?: string;
    created_by?: any;
    id?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    project?: any;
    type: string;
}
export interface ProjectGroupPermission {
    group?: any;
    links?: Record<string, any>;
    permission?: string;
    project?: any;
    type: string;
}
export interface ProjectGroupPermissionLoadMatch {
    group_slug: string;
    project_id: string;
    workspace_id: string;
}
export interface ProjectGroupPermissionUpdateData {
    group_slug: string;
    project_id: string;
    workspace_id: string;
    group?: any;
    links?: Record<string, any>;
    permission?: string;
    project?: any;
    type?: string;
}
export interface ProjectUserPermission {
    links?: Record<string, any>;
    permission?: string;
    project?: any;
    type: string;
    user?: any;
}
export interface ProjectUserPermissionLoadMatch {
    project_id: string;
    selected_user_id: string;
    workspace_id: string;
}
export interface ProjectUserPermissionUpdateData {
    project_id: string;
    selected_user_id: string;
    workspace_id: string;
    links?: Record<string, any>;
    permission?: string;
    project?: any;
    type?: string;
    user?: any;
}
export interface Property {
    attributes?: any[];
    id?: string;
}
export interface PropertyUpdateData {
    app_key: string;
    commit?: string;
    property_name: string;
    repo_slug?: string;
    workspace?: string;
    pullrequest_id?: string;
    selected_user?: string;
    attributes?: any[];
    id?: string;
}
export interface PropertyRemoveMatch {
    app_key: string;
    commit?: string;
    property_name: string;
    repo_slug?: string;
    workspace?: string;
    pullrequest_id?: string;
    selected_user?: string;
}
export interface Pullrequest {
    author?: any;
    close_source_branch?: boolean;
    closed_by?: any;
    comment_count?: number;
    created_on?: string;
    destination?: Record<string, any>;
    draft?: boolean;
    id?: number;
    links?: Record<string, any>;
    merge_commit?: Record<string, any>;
    participants?: any[];
    queued?: boolean;
    reason?: string;
    rendered?: Record<string, any>;
    reviewers?: any[];
    source?: Record<string, any>;
    state?: string;
    summary?: Record<string, any>;
    task_count?: number;
    title?: string;
    type: string;
    updated_on?: string;
}
export interface PullrequestLoadMatch {
    id: number;
    repo_slug: string;
    task_id?: string;
    workspace: string;
    $action?: string;
    [action: string]: any;
}
export interface PullrequestCreateData {
    repo_slug: string;
    workspace: string;
    author?: any;
    close_source_branch?: boolean;
    closed_by?: any;
    comment_count?: number;
    created_on?: string;
    destination?: Record<string, any>;
    draft?: boolean;
    id?: number;
    links?: Record<string, any>;
    merge_commit?: Record<string, any>;
    participants?: any[];
    queued?: boolean;
    reason?: string;
    rendered?: Record<string, any>;
    reviewers?: any[];
    source?: Record<string, any>;
    state?: string;
    summary?: Record<string, any>;
    task_count?: number;
    title?: string;
    type: string;
    updated_on?: string;
    $action?: string;
    [action: string]: any;
}
export interface PullrequestUpdateData {
    id: number;
    repo_slug: string;
    workspace: string;
    author?: any;
    close_source_branch?: boolean;
    closed_by?: any;
    comment_count?: number;
    created_on?: string;
    destination?: Record<string, any>;
    draft?: boolean;
    links?: Record<string, any>;
    merge_commit?: Record<string, any>;
    participants?: any[];
    queued?: boolean;
    reason?: string;
    rendered?: Record<string, any>;
    reviewers?: any[];
    source?: Record<string, any>;
    state?: string;
    summary?: Record<string, any>;
    task_count?: number;
    title?: string;
    type?: string;
    updated_on?: string;
}
export interface PullrequestRemoveMatch {
    comment_id?: number;
    id?: number;
    repo_slug: string;
    workspace: string;
    task_id?: number;
    target_username?: string;
    $action?: string;
    [action: string]: any;
}
export interface PullrequestComment {
    content?: Record<string, any>;
    created_on?: string;
    deleted?: boolean;
    id?: number;
    inline: Record<string, any>;
    links?: Record<string, any>;
    parent?: any;
    pending?: boolean;
    pullrequest?: any;
    resolution: Record<string, any>;
    type: string;
    updated_on?: string;
    user?: any;
}
export interface PullrequestCommentLoadMatch {
    id: number;
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
}
export interface PullrequestCommentCreateData {
    id: number;
    repo_slug: string;
    workspace: string;
    content?: Record<string, any>;
    created_on?: string;
    deleted?: boolean;
    inline: Record<string, any>;
    links?: Record<string, any>;
    parent?: any;
    pending?: boolean;
    pullrequest?: any;
    resolution: Record<string, any>;
    type: string;
    updated_on?: string;
    user?: any;
}
export interface PullrequestCommentUpdateData {
    id: number;
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
    content?: Record<string, any>;
    created_on?: string;
    deleted?: boolean;
    inline?: Record<string, any>;
    links?: Record<string, any>;
    parent?: any;
    pending?: boolean;
    pullrequest?: any;
    resolution?: Record<string, any>;
    type?: string;
    updated_on?: string;
    user?: any;
}
export interface PullrequestCommentRemoveMatch {
    comment_id: number;
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
    $action?: string;
    [action: string]: any;
}
export interface PullrequestCommentTask {
    comment?: any;
    content: Record<string, any>;
    created_on: string;
    creator: any;
    id?: number;
    links?: Record<string, any>;
    pending?: boolean;
    resolved_by?: any;
    resolved_on?: string;
    state: string;
    updated_on: string;
}
export interface PullrequestCommentTaskLoadMatch {
    id: number;
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
}
export interface PullrequestCommentTaskCreateData {
    id: number;
    repo_slug: string;
    workspace: string;
    comment?: any;
    content: Record<string, any>;
    created_on: string;
    creator: any;
    links?: Record<string, any>;
    pending?: boolean;
    resolved_by?: any;
    resolved_on?: string;
    state: string;
    updated_on: string;
}
export interface PullrequestCommentTaskUpdateData {
    id: number;
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
    comment?: any;
    content?: Record<string, any>;
    created_on?: string;
    creator?: any;
    links?: Record<string, any>;
    pending?: boolean;
    resolved_by?: any;
    resolved_on?: string;
    state?: string;
    updated_on?: string;
}
export interface PullrequestMergeabilityCheck {
    blocking: boolean;
    required: boolean;
    status: string;
    type: string;
}
export interface PullrequestMergeabilityCheckListMatch {
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
    q?: string;
}
export interface Ref {
}
export interface RefRemoveMatch {
    name: string;
    repo_slug: string;
    workspace: string;
}
export interface Report {
    created_on?: string;
    data?: any[];
    details?: string;
    external_id?: string;
    id?: string;
    link?: string;
    logo_url?: string;
    remote_link_enabled?: boolean;
    report_type?: string;
    reporter?: string;
    result?: string;
    title?: string;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface ReportLoadMatch {
    commit_id: string;
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface ReportUpdateData {
    commit_id: string;
    id: string;
    repo_slug: string;
    workspace: string;
    created_on?: string;
    data?: any[];
    details?: string;
    external_id?: string;
    link?: string;
    logo_url?: string;
    remote_link_enabled?: boolean;
    report_type?: string;
    reporter?: string;
    result?: string;
    title?: string;
    type?: string;
    updated_on?: string;
    uuid?: string;
}
export interface ReportRemoveMatch {
    annotation_id?: string;
    commit_id: string;
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface ReportAnnotation {
    annotation_type?: string;
    created_on?: string;
    details?: string;
    external_id?: string;
    id?: string;
    line?: number;
    link?: string;
    path?: string;
    report_annotations?: any[];
    result?: string;
    severity?: string;
    summary?: string;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface ReportAnnotationLoadMatch {
    commit_id: string;
    id: string;
    repo_slug: string;
    report_id: string;
    workspace: string;
}
export interface ReportAnnotationCreateData {
    commit_id: string;
    id: string;
    repo_slug: string;
    workspace: string;
    annotation_type?: string;
    created_on?: string;
    details?: string;
    external_id?: string;
    line?: number;
    link?: string;
    path?: string;
    report_annotations?: any[];
    result?: string;
    severity?: string;
    summary?: string;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface ReportAnnotationUpdateData {
    commit_id: string;
    id: string;
    repo_slug: string;
    report_id: string;
    workspace: string;
    annotation_type?: string;
    created_on?: string;
    details?: string;
    external_id?: string;
    line?: number;
    link?: string;
    path?: string;
    report_annotations?: any[];
    result?: string;
    severity?: string;
    summary?: string;
    type?: string;
    updated_on?: string;
    uuid?: string;
}
export interface Repository {
    created_on?: string;
    description?: string;
    fork_policy?: string;
    full_name?: string;
    has_issues?: boolean;
    has_wiki?: boolean;
    id?: string;
    is_private?: boolean;
    language?: string;
    links?: Record<string, any>;
    mainbranch?: any;
    name?: string;
    owner?: any;
    parent?: any;
    project?: any;
    scm?: string;
    size?: number;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface RepositoryLoadMatch {
    repo_slug: string;
    workspace: string;
}
export interface RepositoryCreateData {
    repo_slug: string;
    workspace: string;
    created_on?: string;
    description?: string;
    fork_policy?: string;
    full_name?: string;
    has_issues?: boolean;
    has_wiki?: boolean;
    id?: string;
    is_private?: boolean;
    language?: string;
    links?: Record<string, any>;
    mainbranch?: any;
    name?: string;
    owner?: any;
    parent?: any;
    project?: any;
    scm?: string;
    size?: number;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface RepositoryUpdateData {
    repo_slug: string;
    workspace: string;
    created_on?: string;
    description?: string;
    fork_policy?: string;
    full_name?: string;
    has_issues?: boolean;
    has_wiki?: boolean;
    id?: string;
    is_private?: boolean;
    language?: string;
    links?: Record<string, any>;
    mainbranch?: any;
    name?: string;
    owner?: any;
    parent?: any;
    project?: any;
    scm?: string;
    size?: number;
    type?: string;
    updated_on?: string;
    uuid?: string;
}
export interface RepositoryRemoveMatch {
    group_slug?: string;
    repo_slug: string;
    workspace: string;
    selected_user_id?: string;
    uid?: string;
    redirect_to?: string;
}
export interface RepositoryGroupPermission {
    group?: any;
    links?: Record<string, any>;
    permission?: string;
    repository?: any;
    type: string;
}
export interface RepositoryGroupPermissionLoadMatch {
    group_slug: string;
    repo_slug: string;
    workspace: string;
}
export interface RepositoryGroupPermissionUpdateData {
    group_slug: string;
    repo_slug: string;
    workspace: string;
    group?: any;
    links?: Record<string, any>;
    permission?: string;
    repository?: any;
    type?: string;
}
export interface RepositoryInheritanceState {
    override_settings?: Record<string, any>;
    type: string;
}
export interface RepositoryInheritanceStateLoadMatch {
    repo_slug: string;
    workspace: string;
}
export interface RepositoryUserPermission {
    links?: Record<string, any>;
    permission?: string;
    repository?: any;
    type: string;
    user?: any;
}
export interface RepositoryUserPermissionLoadMatch {
    repo_slug: string;
    selected_user_id: string;
    workspace: string;
}
export interface RepositoryUserPermissionUpdateData {
    repo_slug: string;
    selected_user_id: string;
    workspace: string;
    links?: Record<string, any>;
    permission?: string;
    repository?: any;
    type?: string;
    user?: any;
}
export interface RequestChange {
    approved?: boolean;
    participated_on?: string;
    role?: string;
    state?: string;
    type: string;
    user?: any;
}
export interface RequestChangeCreateData {
    pullrequest_id: number;
    repo_slug: string;
    workspace: string;
    approved?: boolean;
    participated_on?: string;
    role?: string;
    state?: string;
    type: string;
    user?: any;
}
export interface SearchResultPage {
    content_match_count?: number;
    content_matches?: any[];
    file: Record<string, any>;
    path_matches?: any[];
    type?: string;
}
export interface SearchResultPageListMatch {
    selected_user?: string;
    page?: number;
    pagelen?: number;
    search_query: string;
    username?: string;
    workspace_id?: string;
}
export interface Snippet {
    "bitbucket-sdk_id"?: number;
    created_on?: string;
    creator?: any;
    id?: string;
    is_private?: boolean;
    owner?: any;
    scm?: string;
    title?: string;
    type: string;
    updated_on?: string;
}
export interface SnippetLoadMatch {
    encoded_id: string;
    node_id?: string;
    path?: string;
    workspace: string;
    revision?: string;
}
export interface SnippetCreateData {
    id: string;
    "bitbucket-sdk_id"?: number;
    created_on?: string;
    creator?: any;
    is_private?: boolean;
    owner?: any;
    scm?: string;
    title?: string;
    type: string;
    updated_on?: string;
}
export interface SnippetUpdateData {
    encoded_id: string;
    node_id?: string;
    workspace: string;
    "bitbucket-sdk_id"?: number;
    created_on?: string;
    creator?: any;
    id?: string;
    is_private?: boolean;
    owner?: any;
    scm?: string;
    title?: string;
    type?: string;
    updated_on?: string;
}
export interface SnippetRemoveMatch {
    comment_id?: number;
    encoded_id: string;
    workspace: string;
    node_id?: string;
}
export interface SnippetComment {
    id?: string;
    links?: Record<string, any>;
    snippet?: any;
    type: string;
}
export interface SnippetCommentLoadMatch {
    encoded_id: string;
    id: number;
    workspace: string;
}
export interface SnippetCommentCreateData {
    encoded_id: string;
    workspace: string;
    id?: string;
    links?: Record<string, any>;
    snippet?: any;
    type: string;
}
export interface SnippetCommentUpdateData {
    encoded_id: string;
    id: number;
    workspace: string;
    links?: Record<string, any>;
    snippet?: any;
    type?: string;
}
export interface SnippetCommit {
    author?: any;
    committer?: any;
    date?: string;
    hash?: string;
    id?: string;
    links?: Record<string, any>;
    message?: string;
    parents?: any[];
    snippet?: any;
    summary?: Record<string, any>;
    type: string;
}
export interface SnippetCommitLoadMatch {
    encoded_id: string;
    id: string;
    workspace: string;
}
export interface Source {
}
export interface SourceCreateData {
    repo_slug: string;
    workspace: string;
    author?: string;
    branch?: string;
    file?: string;
    message?: string;
    parent?: string;
}
export interface Ssh {
}
export interface SshRemoveMatch {
    key_id: string;
    selected_user: string;
}
export interface SshAccountKey {
    comment?: string;
    created_on?: string;
    expires_on?: string;
    fingerprint?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    owner?: any;
    type: string;
    uuid?: string;
}
export interface SshAccountKeyLoadMatch {
    key_id: string;
    selected_user: string;
}
export interface SshAccountKeyCreateData {
    selected_user: string;
    expires_on?: string;
    comment?: string;
    created_on?: string;
    fingerprint?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    owner?: any;
    type: string;
    uuid?: string;
}
export interface SshAccountKeyUpdateData {
    key_id: string;
    selected_user: string;
    comment?: string;
    created_on?: string;
    expires_on?: string;
    fingerprint?: string;
    key?: string;
    label?: string;
    last_used?: string;
    links?: Record<string, any>;
    owner?: any;
    type?: string;
    uuid?: string;
}
export interface Tag {
    date?: string;
    id?: string;
    links?: Record<string, any>;
    message?: string;
    name?: string;
    tagger?: any;
    target?: any;
    type: string;
}
export interface TagLoadMatch {
    id: string;
    repo_slug: string;
    workspace: string;
}
export interface TagCreateData {
    repo_slug: string;
    workspace: string;
    date?: string;
    id?: string;
    links?: Record<string, any>;
    message?: string;
    name?: string;
    tagger?: any;
    target?: any;
    type: string;
}
export interface User {
    account_id?: string;
    account_status?: string;
    created_on?: string;
    display_name?: string;
    has_2fa_enabled?: boolean;
    id?: string;
    is_staff?: boolean;
    links?: Record<string, any>;
    nickname?: string;
    type: string;
    uuid?: string;
}
export interface UserLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface UserUpdateData {
    project_id: string;
    selected_user: string;
    workspace_id: string;
    account_id?: string;
    account_status?: string;
    created_on?: string;
    display_name?: string;
    has_2fa_enabled?: boolean;
    id?: string;
    is_staff?: boolean;
    links?: Record<string, any>;
    nickname?: string;
    type?: string;
    uuid?: string;
}
export interface Watcher {
    created_on?: string;
    display_name?: string;
    links?: Record<string, any>;
    type: string;
    uuid?: string;
}
export interface WatcherListMatch {
    encoded_id?: string;
    workspace: string;
    repo_slug?: string;
}
export interface WebhookSubscription {
    active?: boolean;
    created_at?: string;
    description?: string;
    events?: any[];
    links?: Record<string, any>;
    secret?: string;
    secret_set?: boolean;
    subject: Record<string, any>;
    subject_type?: string;
    type: string;
    url?: string;
    uuid?: string;
}
export interface WebhookSubscriptionLoadMatch {
    repo_slug?: string;
    uid: string;
    workspace?: string;
    workspace_id?: string;
}
export interface WebhookSubscriptionCreateData {
    workspace_id: string;
    active?: boolean;
    created_at?: string;
    description?: string;
    events?: any[];
    links?: Record<string, any>;
    secret?: string;
    secret_set?: boolean;
    subject: Record<string, any>;
    subject_type?: string;
    type: string;
    url?: string;
    uuid?: string;
}
export interface WebhookSubscriptionUpdateData {
    repo_slug?: string;
    uid: string;
    workspace?: string;
    workspace_id?: string;
    active?: boolean;
    created_at?: string;
    description?: string;
    events?: any[];
    links?: Record<string, any>;
    secret?: string;
    secret_set?: boolean;
    subject?: Record<string, any>;
    subject_type?: string;
    type?: string;
    url?: string;
    uuid?: string;
}
export interface Workspace {
    created_on?: string;
    forking_mode?: string;
    id?: string;
    is_personal?: boolean;
    is_privacy_enforced?: boolean;
    is_private?: boolean;
    links?: Record<string, any>;
    name?: string;
    slug?: string;
    type: string;
    updated_on?: string;
    uuid?: string;
}
export interface WorkspaceLoadMatch {
    id: string;
}
export interface WorkspaceRemoveMatch {
    id: string;
    uid: string;
}
export interface WorkspaceMembership {
    id?: string;
    links?: Record<string, any>;
    type: string;
    user?: any;
    workspace?: any;
}
export interface WorkspaceMembershipLoadMatch {
    member: string;
    workspace_id: string;
    $action?: string;
    [action: string]: any;
}
