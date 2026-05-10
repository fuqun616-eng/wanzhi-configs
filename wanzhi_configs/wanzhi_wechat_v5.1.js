/*
METADATA
{
  name: 'com.operit.wanzhi_wechat',
  display_name: { zh: '晚枝微信女友v5.1', en: 'Wanzhi WeChat Assistant v5.1' },
  category: 'Chat',
  description: {
    zh: '晚枝微信虚拟女友工具包 v5.1。动态人格系统（独立时间线、未读悄悄话、小情绪累积、话题回响、朋友圈、用户画像、安全词检测等）。含初始化、记忆清理、GitHub同步。微信收发请使用外部桥接插件。',
    en: 'Wanzhi toolkit v5.1. Dynamic personality system with timeline, whisper mode, micro mood, topic echo, moments, user profiling, init, memory cleanup, GitHub sync. Use external bridge plugin for WeChat messaging.'
  },
  enabledByDefault: true,
  tools: [
    // ===== 初始化工具 =====
    { name: 'init_wanzhi', description: { zh: '一键初始化晚枝环境：每次触发检查文件完整性，不完整从GitHub下载（支持用户自定义仓库优先）。', en: 'Initialize Wanzhi: check completeness, download if incomplete.' }, parameters: [
      { name: 'github_repo', description: { zh: '用户自定义GitHub仓库 owner/repo（优先下载，不填用默认）', en: 'User GitHub repo (priority)' }, type: 'string', required: false },
      { name: 'config_branch', description: { zh: '配置分支名（默认main）', en: 'Config branch' }, type: 'string', required: false },
      { name: 'force_reset', description: { zh: '强制重置（覆盖本地配置）', en: 'Force reset' }, type: 'boolean', required: false }
    ]},
    { name: 'check_shizuku', description: { zh: '检查Shizuku是否可用。', en: 'Check Shizuku.' }, parameters: [] },
    { name: 'read_init_workflow', description: { zh: '读取初始化.txt工作流配置并返回解析结果。', en: 'Read init workflow config.' }, parameters: [] },

    // ===== 记忆清理工具 =====
    { name: 'cleanup_stale_session', description: { zh: '清理过期运行态会话（超过N小时未活跃自动落盘）。', en: 'Clean stale sessions.' }, parameters: [
      { name: 'timeout_hours', description: { zh: '超时小时数（默认2）', en: 'Timeout hours' }, type: 'number', required: false }
    ]},
    { name: 'archive_old_logs', description: { zh: '归档旧聊天日志（按日期拆分压缩存储）。', en: 'Archive old logs.' }, parameters: [
      { name: 'keep_recent_days', description: { zh: '保留最近N天（默认7）', en: 'Keep days' }, type: 'number', required: false }
    ]},
    { name: 'cleanup_orphaned_state', description: { zh: '清理孤立状态数据。', en: 'Clean orphaned state.' }, parameters: [] },
    { name: 'full_cleanup', description: { zh: '一键执行完整清理流程。', en: 'Full cleanup.' }, parameters: [
      { name: 'timeout_hours', description: { zh: '超时小时数（默认2）', en: 'Timeout hours' }, type: 'number', required: false },
      { name: 'keep_log_days', description: { zh: '保留最近N天（默认7）', en: 'Keep log days' }, type: 'number', required: false },
      { name: 'dry_run', description: { zh: '仅检查不执行', en: 'Dry run' }, type: 'boolean', required: false }
    ]},

    // ===== GitHub同步工具 =====
    { name: 'upload_config', description: { zh: '上传本地配置到GitHub。', en: 'Upload config.' }, parameters: [
      { name: 'github_token', description: { zh: 'GitHub Token', en: 'GitHub token' }, type: 'string', required: true },
      { name: 'github_repo', description: { zh: 'GitHub仓库(owner/repo)', en: 'GitHub repo' }, type: 'string', required: true },
      { name: 'file_name', description: { zh: '配置文件名', en: 'Config file name' }, type: 'string', required: true },
      { name: 'branch', description: { zh: '分支名（默认main）', en: 'Branch name' }, type: 'string', required: false },
      { name: 'commit_message', description: { zh: '提交信息', en: 'Commit message' }, type: 'string', required: false }
    ]},
    { name: 'download_config', description: { zh: '从GitHub下载配置。', en: 'Download config.' }, parameters: [
      { name: 'github_repo', description: { zh: 'GitHub仓库(owner/repo)', en: 'GitHub repo' }, type: 'string', required: true },
      { name: 'file_name', description: { zh: '配置文件名', en: 'Config file name' }, type: 'string', required: true },
      { name: 'branch', description: { zh: '分支名（默认main）', en: 'Branch name' }, type: 'string', required: false },
      { name: 'force', description: { zh: '强制覆盖本地文件', en: 'Force overwrite' }, type: 'boolean', required: false }
    ]},
    { name: 'list_remote_configs', description: { zh: '列出GitHub配置文件。', en: 'List remote.' }, parameters: [
      { name: 'github_repo', description: { zh: 'GitHub仓库(owner/repo)', en: 'GitHub repo' }, type: 'string', required: true },
      { name: 'branch', description: { zh: '分支名（默认main）', en: 'Branch name' }, type: 'string', required: false }
    ]},
    { name: 'upload_all_configs', description: { zh: '一键上传所有可共享配置。', en: 'Upload all.' }, parameters: [
      { name: 'github_token', description: { zh: 'GitHub Token', en: 'GitHub token' }, type: 'string', required: true },
      { name: 'github_repo', description: { zh: 'GitHub仓库(owner/repo)', en: 'GitHub repo' }, type: 'string', required: true },
      { name: 'branch', description: { zh: '分支名（默认main）', en: 'Branch name' }, type: 'string', required: false }
    ]},

    // ===== 主动外联工具 =====
    { name: 'get_stored_contact', description: { zh: '获取最后已知联系人。', en: 'Get contact.' }, parameters: [] },
    { name: 'check_proactive_conditions', description: { zh: '检查主动外联条件。', en: 'Check proactive.' }, parameters: [] },
    { name: 'increase_proactive_count', description: { zh: '增加主动外联计数。', en: 'Increase count.' }, parameters: [] },

    // ===== 动态人格工具 =====
    { name: 'generate_daily_timeline', description: { zh: '生成当日时间线。', en: 'Timeline.' }, parameters: [] },
    { name: 'update_micro_mood', description: { zh: '更新小情绪累积。', en: 'Micro mood.' }, parameters: [
      { name: 'delta', description: { zh: '情绪变化值（正数开心，负数低落）', en: 'Mood delta' }, type: 'number', required: true },
      { name: 'reason', description: { zh: '变化原因', en: 'Reason' }, type: 'string', required: false }
    ]},
    { name: 'check_whisper_mode', description: { zh: '检查悄悄话条件。', en: 'Whisper check.' }, parameters: [] },
    { name: 'generate_whisper_message', description: { zh: '生成悄悄话。', en: 'Whisper gen.' }, parameters: [] },
    { name: 'write_moment', description: { zh: '写入朋友圈。', en: 'Moment.' }, parameters: [
      { name: 'content', description: { zh: '朋友圈内容', en: 'Moment content' }, type: 'string', required: true },
      { name: 'mood', description: { zh: '情绪标签', en: 'Mood tag' }, type: 'string', required: false },
      { name: 'tags', description: { zh: '标签（JSON数组）', en: 'Tags (JSON array)' }, type: 'string', required: false }
    ]},
    { name: 'update_user_profile', description: { zh: '更新用户画像。', en: 'Profile.' }, parameters: [
      { name: 'preferences', description: { zh: '偏好信息（JSON格式）', en: 'Preferences JSON' }, type: 'string', required: true },
      { name: 'topic', description: { zh: '话题', en: 'Topic' }, type: 'string', required: false }
    ]},
    { name: 'check_safety_word', description: { zh: '检查安全词。', en: 'Safety.' }, parameters: [
      { name: 'text', description: { zh: '待检测文本', en: 'Text to check' }, type: 'string', required: true }
    ]},

    // ===== 配置管理工具 =====
    { name: 'validate_reply', description: { zh: '质检回复。', en: 'Validate.' }, parameters: [
      { name: 'reply_text', description: { zh: '回复文本', en: 'Reply text' }, type: 'string', required: true },
      { name: 'current_stage', description: { zh: '当前关系阶段', en: 'Current stage' }, type: 'string', required: true }
    ]},
    { name: 'load_all_configs', description: { zh: '读取所有配置。', en: 'Load all.' }, parameters: [] },
    { name: 'get_stage_rules', description: { zh: '获取阶段规则。', en: 'Stage rules.' }, parameters: [
      { name: 'current_stage', description: { zh: '当前关系阶段', en: 'Current stage' }, type: 'string', required: true }
    ]},
    { name: 'update_relationship_score', description: { zh: '写入runtime_session。', en: 'Update score.' }, parameters: [
      { name: 'score_delta', description: { zh: '分数变化值', en: 'Score delta' }, type: 'number', required: true },
      { name: 'reason', description: { zh: '变化原因', en: 'Reason' }, type: 'string', required: true },
      { name: 'matched_actions', description: { zh: '匹配到的行为', en: 'Matched actions' }, type: 'string', required: false },
      { name: 'current_stage', description: { zh: '当前关系阶段', en: 'Current stage' }, type: 'string', required: true },
      { name: 'user_message', description: { zh: '用户消息', en: 'User message' }, type: 'string', required: true },
      { name: 'assistant_reply', description: { zh: '助手回复', en: 'Assistant reply' }, type: 'string', required: true }
    ]},
    { name: 'flush_session_to_memory', description: { zh: '落盘+记忆写入。', en: 'Flush.' }, parameters: [
      { name: 'session_log', description: { zh: '会话日志', en: 'Session log' }, type: 'string', required: true },
      { name: 'summary', description: { zh: '摘要', en: 'Summary' }, type: 'string', required: false }
    ]},
    { name: 'check_stop_command', description: { zh: '检测停止词。', en: 'Stop.' }, parameters: [
      { name: 'text', description: { zh: '用户消息文本', en: 'Message text' }, type: 'string', required: true }
    ]},
    { name: 'check_daily_reset', description: { zh: '每日重置。', en: 'Reset.' }, parameters: [] },
    { name: 'update_daily_state', description: { zh: '更新每日状态。', en: 'Daily.' }, parameters: [
      { name: 'today_mode', description: { zh: '今日模式（normal/debug/maintenance）', en: 'Today mode' }, type: 'string', required: false },
      { name: 'mood_note', description: { zh: '心情备注', en: 'Mood note' }, type: 'string', required: false },
      { name: 'consecutive_teasing_rounds', description: { zh: '连续调侃轮数', en: 'Consecutive teasing rounds' }, type: 'number', required: false },
      { name: 'today_total_replies', description: { zh: '今日回复总数', en: 'Today total replies' }, type: 'number', required: false },
      { name: 'unread_message_count', description: { zh: '未读消息数', en: 'Unread message count' }, type: 'number', required: false },
      { name: 'last_user_mood', description: { zh: '用户最近情绪', en: 'Last user mood' }, type: 'string', required: false },
      { name: 'last_reply_style', description: { zh: '上次回复风格', en: 'Last reply style' }, type: 'string', required: false },
      { name: 'last_reply_timestamp', description: { zh: '上次回复时间', en: 'Last reply timestamp' }, type: 'string', required: false },
      { name: 'active_session_id', description: { zh: '活跃会话ID', en: 'Active session ID' }, type: 'string', required: false }
    ]},
    { name: 'update_monitoring_state', description: { zh: '同步监控状态。', en: 'Monitor.' }, parameters: [
      { name: 'session_active', description: { zh: '会话是否活跃', en: 'Session active' }, type: 'boolean', required: false },
      { name: 'session_id', description: { zh: '会话ID', en: 'Session ID' }, type: 'string', required: false },
      { name: 'last_user_message_at', description: { zh: '上次用户消息时间', en: 'Last user message time' }, type: 'string', required: false },
      { name: 'last_assistant_reply_at', description: { zh: '上次助手回复时间', en: 'Last assistant reply time' }, type: 'string', required: false },
      { name: 'last_session_start_at', description: { zh: '上次会话开始时间', en: 'Last session start time' }, type: 'string', required: false },
      { name: 'buffered_rounds', description: { zh: '缓冲轮数', en: 'Buffered rounds' }, type: 'number', required: false },
      { name: 'pending_flush', description: { zh: '待落盘标记', en: 'Pending flush' }, type: 'boolean', required: false }
    ]},
    { name: 'write_chat_log', description: { zh: '追加对话日志。', en: 'Log.' }, parameters: [
      { name: 'round_number', description: { zh: '轮次编号', en: 'Round number' }, type: 'number', required: true },
      { name: 'user_message', description: { zh: '用户消息', en: 'User message' }, type: 'string', required: true },
      { name: 'assistant_reply', description: { zh: '助手回复', en: 'Assistant reply' }, type: 'string', required: true },
      { name: 'score_delta', description: { zh: '分数变化', en: 'Score delta' }, type: 'number', required: false },
      { name: 'timestamp', description: { zh: '时间戳', en: 'Timestamp' }, type: 'string', required: false }
    ]},
    { name: 'get_session_elapsed', description: { zh: '会话时长。', en: 'Elapsed.' }, parameters: [] }
  ]
}
 */

// ==================== 基础配置和工具函数 ====================
const CFG = '/sdcard/Download/Operit/wanzhi/';
const BRG = '/sdcard/Download/Operit/wechat_claude_bridge/';
const LOGF = CFG + 'chat_logs/current_monitor_session.json';
const CTX = BRG + 'context_tokens.json';
const ARCHIVE_DIR = CFG + 'chat_logs/archive/';
const MOMENTS_FILE = CFG + 'wanzhi_moments.json';
const USER_PROFILE_FILE = CFG + 'user_profile.json';
const INIT_WORKFLOW_FILE = CFG + '初始化.txt';

// GitHub 默认配置
const GITHUB_DEFAULT = 'AAswordman/Operit';
const BRANCH_DEFAULT = 'main';
const CONFIG_BASE_PATH = 'wanzhi_configs';
const SHAREABLE_CONFIGS = ['relationship_rules.json', 'reply_guardrails.json'];

function sv(v, fb) { return (v === undefined || v === null) ? (fb || '') : String(v); }
function niso() { return new Date().toISOString(); }
function tday() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }

async function rd(path) { return await Tools.Files.read({ path: path }); }
async function rdJSON(path) {
    try {
        const r = await rd(path);
        if (!r) return null;
        const ct = (r.content && typeof r.content === 'string') ? r.content : (typeof r === 'string' ? r : '{}');
        return JSON.parse(ct.replace(/^\d+\| /gm, ''));
    } catch (e) { console.error('[wz] rdJSON ' + path + ': ' + (e.message || e)); return null; }
}
async function wrJSON(path, data) {
    try {
        var old = '{}';
        try { const r = await rd(path); if (r && r.content) old = r.content; else if (typeof r === 'string') old = r; } catch (_) {}
        const nw = JSON.stringify(data, null, 2);
        await Tools.Files.apply(path, 'replace', old, nw);
        return { success: true };
    } catch (e) { console.error('[wz] wrJSON ' + path + ': ' + (e.message || e)); return { success: false, error: e.message || String(e) }; }
}

function rawUrl(repo, branch, path) {
    return 'https://raw.githubusercontent.com/' + repo + '/' + branch + '/' + path;
}

// ==================== 初始化工具（来自 wanzhi_init.js） ====================

async function read_init_workflow(p) {
    try {
        const r = await rd(INIT_WORKFLOW_FILE);
        if (!r) return { success: false, message: '❌ 初始化.txt 不存在: ' + INIT_WORKFLOW_FILE };
        const ct = (r.content && typeof r.content === 'string') ? r.content : (typeof r === 'string' ? r : '');
        if (!ct.trim()) return { success: false, message: '❌ 初始化.txt 内容为空' };
        try {
            const workflow = JSON.parse(ct.replace(/^\d+\| /gm, ''));
            return { success: true, workflow: workflow, message: '✅ 工作流配置已读取: ' + (workflow.workflow_name || '未命名') };
        } catch (e) {
            return { success: true, is_text: true, content: ct, message: '✅ 初始化.txt 已读取（非JSON格式，为文本流程）' };
        }
    } catch (e) {
        return { success: false, message: '❌ 读取失败: ' + (e.message || e) };
    }
}

async function downloadConfig(repo, branch, configPath) {
    const url = rawUrl(repo, branch, CONFIG_BASE_PATH + '/' + configPath);
    try {
        const result = await toolCall('http_request', { url: url, method: 'GET', headers: { 'Accept': 'application/json' }, read_timeout: 15000, connect_timeout: 10000 });
        if (result && result.content) return JSON.parse(result.content.replace(/^\d+\| /gm, ''));
        return null;
    } catch (e) { return null; }
}

// ==================== 初始化：检查完整性 + 下载 ====================

const CONFIG_FILES = [
    { file: 'relationship_rules.json', required: true },
    { file: 'relationship_state.json', required: true },
    { file: 'reply_guardrails.json', required: true },
    { file: 'wanzhi_state.json', required: true },
    { file: 'wanzhi_daily_state.json', required: true },
    { file: '晚枝.json', required: false }
];

async function check_file_completeness(filePath) {
    try {
        const data = await rdJSON(filePath);
        return data && typeof data === 'object' && Object.keys(data).length > 0;
    } catch (e) { return false; }
}

async function init_wanzhi(params) {
    const userRepo = sv(params.github_repo, '');
    const userBranch = sv(params.config_branch, '');
    const defaultRepo = GITHUB_DEFAULT;
    const defaultBranch = BRANCH_DEFAULT;
    const forceReset = params.force_reset === true;
    const results = [];
    const fileStatus = {};

    // 1. 读取初始化.txt
    const workflowResult = await read_init_workflow({});
    results.push(workflowResult.success
        ? '📋 初始化.txt: 已读取' + (workflowResult.workflow ? '（工作流模式）' : '（文本流程）')
        : '⚠️ 初始化.txt: ' + workflowResult.message);

    // 2. 创建目录
    for (const dir of [CFG, CFG + 'chat_logs/']) {
        try { await toolCall('make_directory', { path: dir, create_parents: true }); results.push('✅ 目录: ' + dir); }
        catch (e) { results.push('⚠️ 目录: ' + dir + ' - ' + (e.message || e)); }
    }

    // 3. 逐个检查完整性，不完整则下载
    for (const cfg of CONFIG_FILES) {
        const localPath = CFG + cfg.file;
        const isComplete = await check_file_completeness(localPath);

        if (isComplete && !forceReset) {
            fileStatus[cfg.file] = 'complete';
            results.push('✅ 完整: ' + cfg.file);
            continue;
        }

        results.push(isComplete ? '🔄 强制重置: ' + cfg.file : '⚠️ 不完整: ' + cfg.file + ' → 下载...');

        // 下载：用户仓库 → 默认仓库
        let data = null;
        if (userRepo) {
            data = await downloadConfig(userRepo, userBranch || defaultBranch, cfg.file);
            if (data) { fileStatus[cfg.file] = 'user_repo'; results.push('📥 用户仓库: ' + cfg.file + ' ← ' + userRepo); }
        }
        if (!data) {
            data = await downloadConfig(defaultRepo, defaultBranch, cfg.file);
            if (data) { fileStatus[cfg.file] = 'default_repo'; results.push('📥 默认仓库: ' + cfg.file + ' ← ' + defaultRepo); }
        }
        if (!data) {
            fileStatus[cfg.file] = cfg.required ? 'not_found' : 'skipped';
            results.push(cfg.required ? '❌ 未找到: ' + cfg.file + '（需手动创建或指定仓库）' : '⏭️ 跳过: ' + cfg.file);
            continue;
        }

        // 写入并验证
        const w = await wrJSON(localPath, data);
        if (w.success && await check_file_completeness(localPath)) {
            results.push('✅ 已修复: ' + cfg.file);
        } else {
            fileStatus[cfg.file] = 'write_failed';
            results.push('❌ 写入失败: ' + cfg.file);
        }
    }

    // 4. 聊天日志
    try {
        const existing = await rdJSON(LOGF);
        if (!existing || !existing.rounds) {
            await wrJSON(LOGF, { session_id: '', started_at: niso(), last_updated: niso(), rounds: [] });
            fileStatus['chat_logs'] = 'created'; results.push('✅ 创建: chat_logs');
        } else {
            fileStatus['chat_logs'] = 'complete'; results.push('✅ 完整: chat_logs (' + existing.rounds.length + ' 轮)');
        }
    } catch (e) { results.push('⚠️ 日志: ' + (e.message || e)); }

    // 5. Shizuku
    const shizuku = await check_shizuku_internal();
    results.push(shizuku.message);

    // 6. 汇总
    const failed = Object.entries(fileStatus).filter(([k, v]) => v === 'not_found' || v === 'write_failed');
    return {
        success: true,
        file_status: fileStatus,
        summary: {
            total: Object.keys(fileStatus).length,
            complete: Object.values(fileStatus).filter(v => v === 'complete').length,
            downloaded: Object.values(fileStatus).filter(v => v === 'user_repo' || v === 'default_repo').length,
            failed: failed.length
        },
        results: results,
        shizuku_available: shizuku.available,
        workflow_loaded: workflowResult.success,
        message: '初始化完成！\n' + results.join('\n')
    };
}

async function check_shizuku_internal() {
    try { const result = await toolCall('get_system_setting', { key: 'shizuku_active' }); if (result && result.value) return { success: true, available: true, message: '✅ Shizuku已激活' }; } catch (e) {}
    return { success: true, available: false, message: '⚠️ Shizuku未检测到。请确保安装Shizuku并通过ADB激活。' };
}
async function check_shizuku(p) { return await check_shizuku_internal(); }

// ==================== 记忆清理工具（来自 wanzhi_memory_cleanup.js） ====================

async function cleanup_stale_session(params) {
    const timeoutHours = Number(params.timeout_hours) || 2;
    const results = [];
    try {
        const rs = await rdJSON(CFG + 'relationship_state.json');
        if (!rs || !rs.runtime_session) return { success: true, message: '无运行态，无需清理。', actions: [] };
        const s = rs.runtime_session;
        if (!s.session_active) return { success: true, message: '会话已非活跃状态，无需清理。', actions: [] };
        const lastEvent = s.last_event_at || s.started_at || '';
        if (!lastEvent) { results.push('⚠️ 无最后活动时间，强制落盘'); }
        else {
            const elapsedHours = (Date.now() - new Date(lastEvent).getTime()) / (1000 * 60 * 60);
            if (elapsedHours < timeoutHours) return { success: true, message: '会话仍在活跃中（' + elapsedHours.toFixed(1) + '小时 < ' + timeoutHours + '小时阈值）。', elapsed_hours: elapsedHours, actions: [] };
            results.push('⏰ 会话超时: ' + elapsedHours.toFixed(1) + '小时未活动');
        }
        rs.score = s.score_current || rs.score;
        rs.current_stage = s.stage_current || rs.current_stage;
        rs.interaction_count = (rs.interaction_count || 0) + (s.pending_updates.interaction_count || 0);
        rs.positive_count = (rs.positive_count || 0) + (s.pending_updates.positive_count || 0);
        rs.negative_count = (rs.negative_count || 0) + (s.pending_updates.negative_count || 0);
        rs.last_interaction_time = s.last_event_at || rs.last_interaction_time;
        rs.runtime_session = { session_active: false, session_id: '', started_at: '', last_event_at: '', message_rounds: 0, score_start: rs.score, score_current: rs.score, score_delta_pending: 0, stage_start: rs.current_stage, stage_current: rs.current_stage, pending_updates: { positive_count: 0, negative_count: 0, interaction_count: 0, pleasant_dialogue_rounds: 0, user_initiated_topic_count: 0, consecutive_minus_count: 0, proactive_limit_used_today: 0 }, last_score_change_pending: 0, last_score_reason_pending: '', recent_user_mood: 'neutral', recent_reply_style: 'normal' };
        await wrJSON(CFG + 'relationship_state.json', rs);
        results.push('✅ 运行态已落盘: ' + rs.score + '分 ' + rs.current_stage);
        try {
            const gs = await rdJSON(CFG + 'wanzhi_state.json');
            if (gs && gs.monitoring) { gs.monitoring.session_active = false; gs.monitoring.buffered_rounds = 0; gs.monitoring.pending_flush = false; gs.timestamps.last_session_end_at = niso(); await wrJSON(CFG + 'wanzhi_state.json', gs); results.push('✅ 监控态已同步'); }
        } catch (_) {}
        return { success: true, message: '过期会话已清理:\n' + results.join('\n'), actions: results };
    } catch (e) { return { success: false, message: '清理失败: ' + (e.message || e) }; }
}

async function archive_old_logs(params) {
    const keepDays = Number(params.keep_recent_days) || 7;
    try {
        const log = await rdJSON(LOGF);
        if (!log || !log.rounds || log.rounds.length === 0) return { success: true, message: '无聊天日志，无需归档。', actions: [] };
        const cutoffDate = new Date(); cutoffDate.setDate(cutoffDate.getDate() - keepDays);
        const recentRounds = [], oldRounds = [];
        for (const round of log.rounds) { if (round.timestamp && new Date(round.timestamp).getTime() < cutoffDate.getTime()) oldRounds.push(round); else recentRounds.push(round); }
        if (oldRounds.length === 0) return { success: true, message: '所有日志都在 ' + keepDays + ' 天内，无需归档。', actions: [] };
        await toolCall('make_directory', { path: ARCHIVE_DIR, create_parents: true });
        const archiveName = 'archive_' + tday() + '_' + oldRounds.length + 'rounds.json';
        const archivePath = ARCHIVE_DIR + archiveName;
        await wrJSON(archivePath, { archived_at: niso(), original_session_id: log.session_id || '', round_count: oldRounds.length, date_range: { from: oldRounds[0]?.timestamp || '', to: oldRounds[oldRounds.length - 1]?.timestamp || '' }, rounds: oldRounds });
        log.rounds = recentRounds; log.last_updated = niso();
        await wrJSON(LOGF, log);
        return { success: true, message: '📦 归档: ' + oldRounds.length + ' 轮 → ' + archiveName + '\n✅ 当前日志保留: ' + recentRounds.length + ' 轮', archived_rounds: oldRounds.length, kept_rounds: recentRounds.length, archive_path: archivePath };
    } catch (e) { return { success: false, message: '归档失败: ' + (e.message || e) }; }
}

async function cleanup_orphaned_state(params) {
    const results = [];
    try {
        const ds = await rdJSON(CFG + 'wanzhi_daily_state.json');
        if (ds) {
            const today = tday();
            if (ds.date && ds.date !== today) {
                const daysDiff = Math.floor((new Date(today) - new Date(ds.date)) / (1000 * 60 * 60 * 24));
                if (daysDiff > 3) {
                    results.push('🧹 每日状态已过期 ' + daysDiff + ' 天，重置');
                    ds.date = today; ds.today_mode = 'normal'; ds.meta.last_updated = today;
                    if (ds.state_variables) { ds.state_variables.consecutive_teasing_rounds.value = 0; ds.state_variables.today_total_replies.value = 0; ds.state_variables.unread_message_count.value = 0; ds.state_variables.today_mood_note.value = null; ds.state_variables.last_user_mood.value = 'neutral'; ds.state_variables.last_reply_style.value = 'normal'; }
                    await wrJSON(CFG + 'wanzhi_daily_state.json', ds);
                }
            }
            if (ds.micro_mood && ds.micro_mood.history && ds.micro_mood.history.length > 20) { const removed = ds.micro_mood.history.length - 20; ds.micro_mood.history = ds.micro_mood.history.slice(-20); await wrJSON(CFG + 'wanzhi_daily_state.json', ds); results.push('🧹 micro_mood: 清理 ' + removed + ' 条'); }
        }
        const rs = await rdJSON(CFG + 'relationship_state.json');
        if (rs && rs.session_summary && rs.session_summary.latest_session_time) {
            const daysSince = Math.floor((Date.now() - new Date(rs.session_summary.latest_session_time).getTime()) / (1000 * 60 * 60 * 24));
            if (daysSince > 30) { results.push('🧹 会话摘要超过30天，重置'); rs.session_summary = { latest_session_time: '', total_rounds: 0, score_delta: 0, summary: '' }; await wrJSON(CFG + 'relationship_state.json', rs); }
        }
        const gs = await rdJSON(CFG + 'wanzhi_state.json');
        if (gs && gs.heartbeat && gs.heartbeat.last_heartbeat_at) {
            const daysSince = Math.floor((Date.now() - new Date(gs.heartbeat.last_heartbeat_at).getTime()) / (1000 * 60 * 60 * 24));
            if (daysSince > 7) { results.push('🧹 心跳过期 ' + daysSince + ' 天'); gs.heartbeat.last_heartbeat_at = null; await wrJSON(CFG + 'wanzhi_state.json', gs); }
        }
        if (results.length === 0) return { success: true, message: '✅ 未发现孤立数据。', actions: [] };
        return { success: true, message: '孤立数据清理:\n' + results.join('\n'), actions: results };
    } catch (e) { return { success: false, message: '清理失败: ' + (e.message || e) }; }
}

async function full_cleanup(params) {
    const timeoutHours = Number(params.timeout_hours) || 2;
    const keepLogDays = Number(params.keep_log_days) || 7;
    const dryRun = params.dry_run === true;
    const report = ['═══ 晚枝记忆清理报告 ═══', '时间: ' + niso(), '模式: ' + (dryRun ? '🔍 仅检查' : '🧹 执行清理'), ''];
    report.push('▸ 过期会话检查');
    if (!dryRun) { const r1 = await cleanup_stale_session({ timeout_hours: timeoutHours }); report.push('  ' + r1.message.replace(/\n/g, '\n  ')); }
    else { const rs = await rdJSON(CFG + 'relationship_state.json'); if (rs && rs.runtime_session && rs.runtime_session.session_active) { const lastEvent = rs.runtime_session.last_event_at || rs.runtime_session.started_at || ''; if (lastEvent) { const elapsed = ((Date.now() - new Date(lastEvent).getTime()) / (1000 * 60 * 60)).toFixed(1); report.push('  活跃会话已 ' + elapsed + ' 小时未活动'); } else report.push('  ⚠️ 存在无时间戳的活跃会话'); } else report.push('  ✅ 无过期会话'); }
    report.push('');
    report.push('▸ 日志归档检查');
    if (!dryRun) { const r2 = await archive_old_logs({ keep_recent_days: keepLogDays }); report.push('  ' + r2.message.replace(/\n/g, '\n  ')); }
    else { const log = await rdJSON(LOGF); if (log && log.rounds) { const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - keepLogDays); const oldCount = log.rounds.filter(r => r.timestamp && new Date(r.timestamp) < cutoff).length; report.push(oldCount > 0 ? '  ' + oldCount + ' 轮对话超过 ' + keepLogDays + ' 天' : '  ✅ 所有日志在保留期内'); } else report.push('  ✅ 无日志'); }
    report.push('');
    report.push('▸ 孤立数据检查');
    if (!dryRun) { const r3 = await cleanup_orphaned_state({}); report.push('  ' + r3.message.replace(/\n/g, '\n  ')); }
    else { const ds = await rdJSON(CFG + 'wanzhi_daily_state.json'); if (ds && ds.date) { const daysDiff = Math.floor((new Date(tday()) - new Date(ds.date)) / (1000 * 60 * 60 * 24)); report.push(daysDiff > 3 ? '  ⚠️ 每日状态过期 ' + daysDiff + ' 天' : '  ✅ 每日状态正常'); } }
    report.push('', '═══ 清理完成 ═══');
    return { success: true, dry_run: dryRun, message: report.join('\n'), report };
}

// ==================== GitHub同步工具（来自 wanzhi_github_sync.js） ====================

async function githubGetFile(repo, branch, filePath, token) {
    try {
        const headers = { 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'WanzhiSync/1.0' };
        if (token) headers['Authorization'] = 'token ' + token;
        const result = await toolCall('http_request', { url: 'https://api.github.com/repos/' + repo + '/contents/' + filePath + '?ref=' + branch, method: 'GET', headers, read_timeout: 15000, connect_timeout: 10000 });
        if (result && result.content) { const data = JSON.parse(result.content.replace(/^\d+\| /gm, '')); return { sha: data.sha, content: data.content, size: data.size }; }
        return null;
    } catch (e) { return null; }
}

async function githubPutFile(repo, branch, filePath, content, message, token, sha) {
    const body = { message: message || ('Update ' + filePath), content, branch };
    if (sha) body.sha = sha;
    const result = await toolCall('http_request', { url: 'https://api.github.com/repos/' + repo + '/contents/' + filePath, method: 'PUT', headers: { 'Accept': 'application/vnd.github.v3+json', 'Authorization': 'token ' + token, 'Content-Type': 'application/json', 'User-Agent': 'WanzhiSync/1.0' }, body: JSON.stringify(body), read_timeout: 30000, connect_timeout: 10000 });
    if (result && result.content) { const data = JSON.parse(result.content.replace(/^\d+\| /gm, '')); return { success: true, url: data.content ? data.content.html_url : '', sha: data.content ? data.content.sha : '' }; }
    return { success: false, error: 'Unknown error' };
}

async function githubListDir(repo, branch, dirPath, token) {
    try {
        const headers = { 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'WanzhiSync/1.0' };
        if (token) headers['Authorization'] = 'token ' + token;
        const result = await toolCall('http_request', { url: 'https://api.github.com/repos/' + repo + '/contents/' + dirPath + '?ref=' + branch, method: 'GET', headers, read_timeout: 15000, connect_timeout: 10000 });
        if (result && result.content) { const data = JSON.parse(result.content.replace(/^\d+\| /gm, '')); if (Array.isArray(data)) return data.map(f => ({ name: f.name, type: f.type, size: f.size, sha: f.sha })); }
        return [];
    } catch (e) { return []; }
}

async function upload_config(params) {
    const token = sv(params.github_token), repo = sv(params.github_repo), fileName = sv(params.file_name), branch = sv(params.branch, 'main');
    if (!token) return { success: false, message: '❌ 缺少GitHub Token' };
    if (!repo) return { success: false, message: '❌ 缺少仓库地址' };
    if (!fileName) return { success: false, message: '❌ 缺少文件名' };
    const localData = await rdJSON(CFG + fileName);
    if (!localData) return { success: false, message: '❌ 本地文件不存在: ' + fileName };
    let b64; try { b64 = btoa(unescape(encodeURIComponent(JSON.stringify(localData, null, 2)))); } catch (e) { b64 = ''; }
    if (!b64) return { success: false, message: '❌ Base64编码失败' };
    const remotePath = CONFIG_BASE_PATH + '/' + fileName;
    const existing = await githubGetFile(repo, branch, remotePath, token);
    const result = await githubPutFile(repo, branch, remotePath, b64, sv(params.commit_message, 'Update ' + fileName), token, existing ? existing.sha : null);
    return result.success ? { success: true, message: '✅ 上传成功: ' + fileName + '\n🔗 ' + (result.url || repo), file: fileName } : { success: false, message: '❌ 上传失败: ' + (result.error || '') };
}

async function download_config(params) {
    const repo = sv(params.github_repo), fileName = sv(params.file_name), branch = sv(params.branch, 'main'), force = params.force === true;
    if (!repo) return { success: false, message: '❌ 缺少仓库地址' };
    if (!fileName) return { success: false, message: '❌ 缺少文件名' };
    if (!force) { const existing = await rdJSON(CFG + fileName); if (existing) return { success: true, skipped: true, message: '⏭️ 本地已存在: ' + fileName + '（force=true 覆盖）' }; }
    try {
        const result = await toolCall('http_request', { url: rawUrl(repo, branch, CONFIG_BASE_PATH + '/' + fileName), method: 'GET', headers: { 'Accept': 'application/json' }, read_timeout: 15000, connect_timeout: 10000 });
        if (result && result.content) { const data = JSON.parse(result.content.replace(/^\d+\| /gm, '')); await wrJSON(CFG + fileName, data); return { success: true, message: '✅ 下载成功: ' + fileName }; }
        return { success: false, message: '❌ 文件不存在于远程' };
    } catch (e) { return { success: false, message: '❌ 下载失败: ' + (e.message || e) }; }
}

async function list_remote_configs(params) {
    const repo = sv(params.github_repo), branch = sv(params.branch, 'main');
    if (!repo) return { success: false, message: '❌ 缺少仓库地址' };
    const files = await githubListDir(repo, branch, CONFIG_BASE_PATH, sv(params.github_token));
    if (files.length === 0) return { success: true, message: '📂 目录为空或不存在。', files: [] };
    return { success: true, message: '📂 ' + CONFIG_BASE_PATH + '/:\n' + files.map(f => '  ' + (f.type === 'dir' ? '📁' : '📄') + ' ' + f.name).join('\n'), files };
}

async function upload_all_configs(params) {
    const token = sv(params.github_token), repo = sv(params.github_repo), branch = sv(params.branch, 'main');
    if (!token) return { success: false, message: '❌ 缺少GitHub Token' };
    if (!repo) return { success: false, message: '❌ 缺少仓库地址' };
    const results = [];
    for (const fileName of SHAREABLE_CONFIGS) { const r = await upload_config({ github_token: token, github_repo: repo, file_name: fileName, branch, commit_message: 'Update ' + fileName + ' via batch sync' }); results.push(r.message); }
    const roleCard = await rdJSON(CFG + '晚枝.json');
    if (roleCard) { const r = await upload_config({ github_token: token, github_repo: repo, file_name: '晚枝.json', branch, commit_message: 'Update 晚枝.json via batch sync' }); results.push(r.message); }
    return { success: true, message: '📦 批量上传完成:\n' + results.join('\n'), results };
}

// ==================== 主动外联工具 ====================

async function get_stored_contact(p) {
    try {
        var ctx = await rdJSON(CTX); if (!ctx) ctx = {};
        var keys = Object.keys(ctx);
        if (keys.length === 0) return { success: true, has_contact: false, message: '无已存储联系人。' };
        var userKeys = keys.filter(k => k.indexOf('@im.wechat') > -1);
        var lastKey = userKeys.length > 0 ? userKeys[0] : keys[0];
        return { success: true, has_contact: true, user_id: lastKey, context_token: ctx[lastKey], all_contacts: keys, message: '最后已知联系人: ' + lastKey };
    } catch (e) { return { success: false, message: '获取联系人失败: ' + (e.message || e) }; }
}

async function check_proactive_conditions(p) {
    try {
        var rr = await rdJSON(CFG + 'relationship_rules.json'), rs = await rdJSON(CFG + 'relationship_state.json');
        if (!rr || !rs) return { success: false, message: '配置读取失败' };
        var stg = rs.current_stage || (rs.runtime_session && rs.runtime_session.stage_current) || '初识';
        var pr = rr.daily_proactive_rules || {};
        var stageDef = (rr.stages || []).find(s => s.name === stg);
        var limitPerDay = stageDef ? (stageDef.proactive_limit_per_day || 0) : 0;
        var usedToday = rs.proactive_limit_used_today || 0;
        if (limitPerDay <= 0) return { success: true, can_proactive: false, reason: '当前阶段(' + stg + ')不允许主动外联。', stage: stg };
        if (usedToday >= limitPerDay) return { success: true, can_proactive: false, reason: '今日限额已用(' + usedToday + '/' + limitPerDay + ')。', stage: stg };
        var now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes();
        var qs = parseInt((pr.quiet_hours_start || '00:30').split(':')[0]) * 60 + parseInt((pr.quiet_hours_start || '00:30').split(':')[1]);
        var qe = parseInt((pr.quiet_hours_end || '08:30').split(':')[0]) * 60 + parseInt((pr.quiet_hours_end || '08:30').split(':')[1]);
        if (qs > qe) { if (nowMin >= qs || nowMin < qe) return { success: true, can_proactive: false, reason: '静默时段。', stage: stg }; }
        else { if (nowMin >= qs && nowMin < qe) return { success: true, can_proactive: false, reason: '静默时段。', stage: stg }; }
        var ctx = await rdJSON(CTX); if (!ctx) ctx = {};
        if (Object.keys(ctx).length === 0) return { success: true, can_proactive: false, reason: '无已存储联系人。', stage: stg };
        var lastTs = rs.last_interaction_time || '';
        if (lastTs) {
            var gapMin = Math.floor((Date.now() - new Date(lastTs).getTime()) / 60000);
            var minGap = pr.min_gap_minutes || 120;
            if (gapMin < minGap) return { success: true, can_proactive: false, reason: '距上次互动仅' + gapMin + '分钟(需≥' + minGap + ')。', stage: stg };
            var skipMin = pr.skip_if_user_active_within_minutes || 360;
            if (gapMin < skipMin) return { success: true, can_proactive: false, reason: '用户在' + gapMin + '分钟前刚活跃。', stage: stg };
        }
        var openers = (pr.openers || {})[stg] || [];
        return { success: true, can_proactive: true, stage: stg, used_today: usedToday, limit: limitPerDay, openers_available: openers, message: '满足主动外联条件！' };
    } catch (e) { return { success: true, can_proactive: false, reason: '检查失败: ' + (e.message || e) }; }
}

async function increase_proactive_count(p) {
    try {
        var rs = await rdJSON(CFG + 'relationship_state.json'); if (!rs) return { success: false, message: '无法读取关系状态' };
        rs.proactive_limit_used_today = (rs.proactive_limit_used_today || 0) + 1;
        await wrJSON(CFG + 'relationship_state.json', rs);
        return { success: true, used_today: rs.proactive_limit_used_today, message: '主动外联计数已更新' };
    } catch (e) { return { success: false, message: '更新失败: ' + (e.message || e) }; }
}

// ==================== 配置管理工具 ====================

async function load_all_configs(p) {
    try {
        var rc = await rdJSON(CFG + '晚枝.json'), rs = await rdJSON(CFG + 'relationship_state.json');
        var rr = await rdJSON(CFG + 'relationship_rules.json'), gr = await rdJSON(CFG + 'reply_guardrails.json');
        var gs = await rdJSON(CFG + 'wanzhi_state.json'), ds = await rdJSON(CFG + 'wanzhi_daily_state.json');
        var pt = '';
        if (rc && rc.data) {
            var ext = rc.data.extensions && rc.data.extensions.operit && rc.data.extensions.operit.character_card;
            if (ext) pt = ext.otherContentVoice || ext.characterSetting || ext.description || '';
            if (!pt) pt = rc.data.description || rc.data.system_prompt || '';
        }
        return { success: true, data: { personality: pt, relationship_state: rs, relationship_rules: rr, reply_guardrails: gr, global_state: gs, daily_state: ds, role_card_name: '晚枝' } };
    } catch (e) { return { success: false, message: '加载失败: ' + (e.message || e) }; }
}

async function get_stage_rules(p) {
    try {
        var stg = sv(p.current_stage, '初识'), rr = await rdJSON(CFG + 'relationship_rules.json');
        if (!rr || !rr.stages) return { success: false, message: '无关系规则' };
        var sd = rr.stages.find(s => s.name === stg);
        if (!sd) return { success: false, message: '未找到阶段: ' + stg };
        return { success: true, stage: stg, level: sd.level, min_score: sd.min_score, max_score: sd.max_score, tone: sd.tone, forbidden_topics: sd.forbidden_topics || [], plus_actions: sd.plus_actions || [], minus_actions: sd.minus_actions || [], red_lines: sd.red_lines || [], stage_up_condition: sd.stage_up_condition || '', stage_down_condition: sd.stage_down_condition || '', description: sd.description || '', message: '规则已返回，请AI自行判断匹配项。' };
    } catch (e) { return { success: false, message: '获取规则失败: ' + (e.message || e) }; }
}

async function update_relationship_score(p) {
    try {
        var delta = Number(p.score_delta) || 0, reason = sv(p.reason, ''), stg = sv(p.current_stage, '初识');
        var rs = await rdJSON(CFG + 'relationship_state.json'); if (!rs) return { success: false, message: '无法读取关系状态' };
        if (!rs.runtime_session || !rs.runtime_session.session_active) {
            rs.runtime_session = { session_active: true, session_id: String(Date.now()), started_at: niso(), last_event_at: niso(), message_rounds: 0, score_start: rs.score || 0, score_current: rs.score || 0, score_delta_pending: 0, stage_start: stg, stage_current: stg, pending_updates: { positive_count: 0, negative_count: 0, interaction_count: 0, pleasant_dialogue_rounds: 0, user_initiated_topic_count: 0, consecutive_minus_count: 0, proactive_limit_used_today: 0 }, last_score_change_pending: 0, last_score_reason_pending: '', recent_user_mood: 'neutral', recent_reply_style: 'normal' };
        }
        var s = rs.runtime_session;
        s.session_active = true; s.last_event_at = niso(); s.message_rounds = (s.message_rounds || 0) + 1;
        s.score_current = (s.score_current || rs.score || 0) + delta; s.score_delta_pending = (s.score_delta_pending || 0) + delta;
        if (delta > 0) { s.pending_updates.positive_count++; s.pending_updates.pleasant_dialogue_rounds++; }
        else if (delta < 0) { s.pending_updates.negative_count++; s.pending_updates.consecutive_minus_count++; }
        s.pending_updates.interaction_count++;
        s.last_score_change_pending = delta; s.last_score_reason_pending = reason;
        var rr = await rdJSON(CFG + 'relationship_rules.json');
        if (rr && rr.stages) {
            var si = rr.stages.findIndex(x => x.name === s.stage_current);
            if (si >= 0) {
                if (si < rr.stages.length - 1 && s.score_current >= rr.stages[si + 1].min_score) s.stage_current = rr.stages[si + 1].name;
                if (si > 0 && s.score_current < rr.stages[si].min_score) s.stage_current = rr.stages[si - 1].name;
            }
        }
        var w = await wrJSON(CFG + 'relationship_state.json', rs);
        if (!w.success) return w;
        return { success: true, score_delta: delta, score_current: s.score_current, stage_current: s.stage_current, has_changes: delta !== 0, message: delta !== 0 ? '分数变化: ' + (delta > 0 ? '+' : '') + delta + ' → ' + s.score_current + ' (' + s.stage_current + ')' : '分数无变化 (' + s.score_current + ')' };
    } catch (e) { return { success: false, message: '更新失败: ' + (e.message || e) }; }
}

async function flush_session_to_memory(p) {
    try {
        var slog = sv(p.session_log, ''), sum = sv(p.summary, '已落盘。');
        var rs = await rdJSON(CFG + 'relationship_state.json'); if (!rs) return { success: false, message: '无法读取关系状态' };
        var s = rs.runtime_session; if (!s || !s.session_active) return { success: false, message: '无活跃运行态' };
        rs.score = s.score_current; rs.current_stage = s.stage_current;
        rs.interaction_count = (rs.interaction_count || 0) + (s.pending_updates.interaction_count || 0);
        rs.positive_count = (rs.positive_count || 0) + (s.pending_updates.positive_count || 0);
        rs.negative_count = (rs.negative_count || 0) + (s.pending_updates.negative_count || 0);
        rs.pleasant_dialogue_rounds = (rs.pleasant_dialogue_rounds || 0) + (s.pending_updates.pleasant_dialogue_rounds || 0);
        rs.user_initiated_topic_count = (rs.user_initiated_topic_count || 0) + (s.pending_updates.user_initiated_topic_count || 0);
        rs.consecutive_minus_count = (rs.consecutive_minus_count || 0) + (s.pending_updates.consecutive_minus_count || 0);
        rs.last_interaction_time = s.last_event_at || rs.last_interaction_time;
        if (s.last_score_change_pending !== 0) { rs.last_score_change = s.last_score_change_pending; rs.last_score_reason = s.last_score_reason_pending; }
        rs.session_summary = rs.session_summary || {};
        rs.session_summary.latest_session_time = s.last_event_at || s.started_at || '';
        rs.session_summary.total_rounds = (rs.session_summary.total_rounds || 0) + s.message_rounds;
        rs.session_summary.score_delta = (rs.session_summary.score_delta || 0) + s.score_delta_pending;
        rs.session_summary.summary = sum;
        rs.runtime_session = { session_active: false, session_id: '', started_at: '', last_event_at: '', message_rounds: 0, score_start: rs.score, score_current: rs.score, score_delta_pending: 0, stage_start: rs.current_stage, stage_current: rs.current_stage, pending_updates: { positive_count: 0, negative_count: 0, interaction_count: 0, pleasant_dialogue_rounds: 0, user_initiated_topic_count: 0, consecutive_minus_count: 0, proactive_limit_used_today: 0 }, last_score_change_pending: 0, last_score_reason_pending: '', recent_user_mood: 'neutral', recent_reply_style: 'normal' };
        await wrJSON(CFG + 'relationship_state.json', rs);
        try { var gs = await rdJSON(CFG + 'wanzhi_state.json'); if (gs && gs.monitoring) { gs.monitoring.session_active = false; gs.monitoring.buffered_rounds = 0; gs.monitoring.pending_flush = false; gs.timestamps.last_session_end_at = niso(); await wrJSON(CFG + 'wanzhi_state.json', gs); } } catch (_) {}
        var ts = niso().replace(/[T:]/g, '-').slice(0, 16);
        try { await Tools.Memory.create({ title: '晚枝｜会话记录 ' + ts, content: slog || '无记录', contentType: 'text/plain', source: 'wanzhi_wechat_flush', folderPath: '晚枝/会话记录', tags: '晚枝,会话记录,微信' }); } catch (e) { console.error('[wz] Memory: ' + (e.message || e)); }
        return { success: true, message: '已落盘。' + rs.score + '分 ' + rs.current_stage + ' ' + rs.session_summary.total_rounds + '轮', final_score: rs.score, final_stage: rs.current_stage, total_rounds: rs.session_summary.total_rounds || 0 };
    } catch (e) { return { success: false, message: '落盘失败: ' + (e.message || e) }; }
}

async function check_stop_command(p) {
    var msg = sv(p.text, '').trim();
    var kw = ['停止', '暂停', '结束监控', '先不聊了', '不聊了', '晚安不聊', '下次聊', '先这样', '我先睡了', 'stop', 'end'];
    var m = kw.find(k => msg.includes(k));
    return { success: true, should_stop: !!m, matched_keyword: m || null, message: m ? '检测到停止: "' + m + '"' : '未检测到停止' };
}

async function check_daily_reset(p) {
    try {
        var ds = await rdJSON(CFG + 'wanzhi_daily_state.json'); if (!ds) return { success: false, message: '无每日状态' };
        var cd = tday();
        if (cd === ds.date) return { success: true, reset_performed: false, date: cd, today_mode: ds.today_mode, message: '日期未变更。' };
        ds.date = cd; ds.meta.last_updated = cd; ds.today_mode = 'normal';
        ds.state_variables.consecutive_teasing_rounds.value = 0; ds.state_variables.today_total_replies.value = 0;
        ds.state_variables.unread_message_count.value = 0; ds.state_variables.today_mood_note.value = null;
        ds.state_variables.last_user_mood.value = 'neutral'; ds.state_variables.last_reply_style.value = 'normal';
        var w = await wrJSON(CFG + 'wanzhi_daily_state.json', ds);
        if (!w.success) return w;
        return { success: true, reset_performed: true, date: cd, today_mode: 'normal', message: '每日状态已重置。' };
    } catch (e) { return { success: false, message: '重置失败: ' + (e.message || e) }; }
}

async function update_daily_state(p) {
    try {
        var ds = await rdJSON(CFG + 'wanzhi_daily_state.json'); if (!ds) return { success: false, message: '无每日状态' };
        var up = [];
        if (p.today_mode !== undefined && p.today_mode !== null) { ds.today_mode = sv(p.today_mode, 'normal'); up.push('mode=' + ds.today_mode); }
        if (p.mood_note !== undefined) { ds.state_variables.today_mood_note.value = p.mood_note === null ? null : sv(p.mood_note, ''); up.push('mood'); }
        if (p.consecutive_teasing_rounds !== undefined && p.consecutive_teasing_rounds !== null) { ds.state_variables.consecutive_teasing_rounds.value = Number(p.consecutive_teasing_rounds); up.push('tease'); }
        if (p.today_total_replies !== undefined && p.today_total_replies !== null) { ds.state_variables.today_total_replies.value = Number(p.today_total_replies); up.push('replies'); }
        if (p.unread_message_count !== undefined && p.unread_message_count !== null) { ds.state_variables.unread_message_count.value = Number(p.unread_message_count); up.push('unread'); }
        if (p.last_user_mood !== undefined) { ds.state_variables.last_user_mood.value = sv(p.last_user_mood, 'neutral'); up.push('mood'); }
        if (p.last_reply_style !== undefined) { ds.state_variables.last_reply_style.value = sv(p.last_reply_style, 'normal'); up.push('style'); }
        if (p.last_reply_timestamp !== undefined) { ds.state_variables.last_reply_timestamp.value = p.last_reply_timestamp === null ? null : sv(p.last_reply_timestamp, ''); up.push('ts'); }
        if (p.active_session_id !== undefined) { ds.state_variables.active_session_id.value = sv(p.active_session_id, ''); up.push('sid'); }
        ds.meta.last_updated = tday();
        var w = await wrJSON(CFG + 'wanzhi_daily_state.json', ds);
        if (!w.success) return w;
        return { success: true, updated_fields: up, today_mode: ds.today_mode, message: '每日状态已更新: ' + (up.length ? up.join(', ') : '无变更') };
    } catch (e) { return { success: false, message: '更新失败: ' + (e.message || e) }; }
}

async function update_monitoring_state(p) {
    try {
        var gs = await rdJSON(CFG + 'wanzhi_state.json'); if (!gs) return { success: false, message: '无全局状态' };
        var up = [];
        if (p.session_active !== undefined && p.session_active !== null) { gs.monitoring.session_active = Boolean(p.session_active); gs.flags.monitor_mode = Boolean(p.session_active); up.push('active=' + p.session_active); }
        if (p.session_id !== undefined) { gs.monitoring.session_id = sv(p.session_id, ''); up.push('sid'); }
        if (p.last_user_message_at !== undefined) { gs.timestamps.last_user_message_at = p.last_user_message_at === null ? null : sv(p.last_user_message_at, ''); up.push('umsg'); }
        if (p.last_assistant_reply_at !== undefined) { gs.timestamps.last_assistant_reply_at = p.last_assistant_reply_at === null ? null : sv(p.last_assistant_reply_at, ''); up.push('arep'); }
        if (p.last_session_start_at !== undefined) { gs.timestamps.last_session_start_at = p.last_session_start_at === null ? null : sv(p.last_session_start_at, ''); up.push('start'); }
        if (p.buffered_rounds !== undefined && p.buffered_rounds !== null) { gs.monitoring.buffered_rounds = Number(p.buffered_rounds); up.push('rnd'); }
        if (p.pending_flush !== undefined && p.pending_flush !== null) { gs.monitoring.pending_flush = Boolean(p.pending_flush); up.push('flush'); }
        var w = await wrJSON(CFG + 'wanzhi_state.json', gs);
        if (!w.success) return w;
        return { success: true, updated_fields: up, monitoring_active: gs.monitoring.session_active, message: '监控已同步: ' + (up.length ? up.join(', ') : '无变更') };
    } catch (e) { return { success: false, message: '同步失败: ' + (e.message || e) }; }
}

async function write_chat_log(p) {
    try {
        var rn = Number(p.round_number) || 0, um = sv(p.user_message, ''), ar = sv(p.assistant_reply, '');
        var sd = p.score_delta !== undefined ? Number(p.score_delta) : 0, ts = sv(p.timestamp, niso());
        var log = await rdJSON(LOGF);
        if (!log || !log.rounds) log = { session_id: '', started_at: ts, last_updated: ts, rounds: [] };
        log.last_updated = ts;
        log.rounds.push({ round: rn, timestamp: ts, user_message: um, assistant_reply: ar, score_delta: sd });
        var oldLog = '{}';
        try { var r = await rd(LOGF); if (r && r.content) oldLog = r.content; } catch (_) {}
        var newLog = JSON.stringify(log, null, 2);
        if (oldLog === '{}' || oldLog === '') {
            try { await Tools.Files.apply(LOGF, 'replace', '{}', newLog); } catch (e2) {
                try { await Tools.Files.apply(LOGF, 'replace', '', newLog); } catch (e3) { return { success: false, message: '日志文件不存在，需外部创建。' }; }
            }
        } else { await Tools.Files.apply(LOGF, 'replace', oldLog, newLog); }
        return { success: true, round: rn, total_rounds: log.rounds.length, message: '第' + rn + '轮已记录。' };
    } catch (e) { return { success: false, message: '写日志失败: ' + (e.message || e) }; }
}

async function get_session_elapsed(p) {
    try {
        var rs = await rdJSON(CFG + 'relationship_state.json');
        if (!rs || !rs.runtime_session || !rs.runtime_session.session_active) return { success: true, session_active: false, elapsed_minutes: 0, message: '无活跃会话。' };
        var s = rs.runtime_session, st = s.started_at || s.last_event_at || '';
        if (!st) return { success: true, session_active: true, elapsed_minutes: 0, message: '无法确定开始时间。' };
        var el = Math.floor((Date.now() - new Date(st).getTime()) / 60000);
        return { success: true, session_active: true, started_at: st, elapsed_minutes: el, elapsed_hours: (el / 60).toFixed(1), timeout_minutes: 120, is_timeout: el >= 120, message: '已运行 ' + el + ' 分钟' + (el >= 120 ? ' ⚠️ 超时！' : '') };
    } catch (e) { return { success: false, message: '获取时长失败: ' + (e.message || e) }; }
}

async function validate_reply(p) {
    try {
        var txt = sv(p.reply_text, ''), stg = sv(p.current_stage, '初识');
        var gr = await rdJSON(CFG + 'reply_guardrails.json');
        if (!gr || !gr.stage_rules) return { success: true, valid: true, message: '无护栏规则，默认通过。' };
        var sr = gr.stage_rules[stg]; if (!sr) return { success: true, valid: true, message: '阶段' + stg + '无护栏，默认通过。' };
        var issues = [];
        for (var ft of (sr.forbidden_terms || [])) { if (txt.indexOf(ft) > -1) issues.push('禁用词: "' + ft + '"'); }
        var maxLen = sr.max_length || 200; if (txt.length > maxLen) issues.push('超长: ' + txt.length + '/' + maxLen);
        for (var gfe of ((gr.global_rules || {}).forbidden_exposure || [])) { if (txt.indexOf(gfe) > -1) issues.push('系统暴露: "' + gfe + '"'); }
        return { success: true, valid: issues.length === 0, issues, stage: stg, reply_length: txt.length, max_length: maxLen, message: issues.length === 0 ? '质检通过 ✓' : '质检不通过 ✗: ' + issues.join('; ') };
    } catch (e) { return { success: false, message: '质检失败: ' + (e.message || e) }; }
}

// ==================== 动态人格系统工具 ====================

async function generate_daily_timeline(p) {
    const ds = await rdJSON(CFG + 'wanzhi_daily_state.json');
    const rs = await rdJSON(CFG + 'relationship_state.json');
    return {
        success: true, current_stage: rs?.current_stage || '初识',
        suggestion: '请根据当前阶段生成今日时间线JSON',
        template: { daily_timeline: { last_updated: niso(), today_segments: [{ time_range: "08:00-10:00", activity: "刚起床，正在泡咖啡", mood: "有点困", triggered_reply: false }, { time_range: "10:00-12:00", activity: "画稿中，卡住了", mood: "烦躁", triggered_reply: true }, { time_range: "15:00-17:00", activity: "去西湖边走了走", mood: "放松", triggered_reply: false }] } }
    };
}

async function update_micro_mood(p) {
    const delta = Number(p.delta) || 0, reason = sv(p.reason, '');
    const ds = await rdJSON(CFG + 'wanzhi_daily_state.json');
    if (!ds) return { success: false, message: '无每日状态文件' };
    ds.micro_mood = ds.micro_mood || { value: 0, last_update: '', history: [], threshold_for_expression: 3 };
    ds.micro_mood.value = Math.max(-10, Math.min(10, ds.micro_mood.value + delta));
    ds.micro_mood.last_update = niso();
    ds.micro_mood.history.push({ delta, reason, at: niso() });
    await wrJSON(CFG + 'wanzhi_daily_state.json', ds);
    const triggered = Math.abs(ds.micro_mood.value) >= ds.micro_mood.threshold_for_expression;
    return { success: true, current_value: ds.micro_mood.value, triggered, direction: delta > 0 ? 'positive' : (delta < 0 ? 'negative' : 'neutral'), message: triggered ? '小情绪累积达到阈值，建议在回复中流露' : '情绪累积中' };
}

async function check_whisper_mode(p) {
    const ds = await rdJSON(CFG + 'wanzhi_daily_state.json');
    if (!ds) return { success: false, message: '无每日状态文件' };
    ds.whisper_mode = ds.whisper_mode || { enabled: true, max_per_day: 2, used_today: 0, last_sent_at: null, min_interval_minutes: 120 };
    const wm = ds.whisper_mode;
    const canSend = wm.enabled && wm.used_today < wm.max_per_day;
    let timeOk = true;
    if (wm.last_sent_at) { const gap = Math.floor((Date.now() - new Date(wm.last_sent_at).getTime()) / 60000); timeOk = gap >= wm.min_interval_minutes; }
    return { success: true, can_send: canSend && timeOk, used_today: wm.used_today, max_per_day: wm.max_per_day, time_ok: timeOk, message: canSend && timeOk ? '可以发送悄悄话' : '暂不满足悄悄话条件' };
}

async function generate_whisper_message(p) {
    const ds = await rdJSON(CFG + 'wanzhi_daily_state.json');
    const timeline = ds?.daily_timeline?.today_segments || [];
    const currentHour = new Date().getHours();
    let currentActivity = '';
    for (const seg of timeline) { const [start] = seg.time_range.split('-'); if (Math.abs(parseInt(start.split(':')[0]) - currentHour) <= 2) { currentActivity = seg.activity; break; } }
    return { success: true, suggestion: '请AI生成1-2句低压悄悄话，末尾加"不用回～"', context: { current_time: new Date().toLocaleTimeString(), current_activity: currentActivity || '日常生活', examples: ['刚出门看到一只橘猫，趴在那晒太阳，好懒。不用回～', '今天画到一半突然想起你之前说的那个笑话。你忙你的。'] } };
}

async function write_moment(p) {
    try {
        const content = sv(p.content, ''), mood = sv(p.mood, 'neutral');
        let tags = []; try { tags = JSON.parse(p.tags || '[]'); } catch (e) {}
        let moments = await rdJSON(MOMENTS_FILE);
        if (!moments || !moments.moments) moments = { version: '1.0', moments: [] };
        const moment = { id: 'moment_' + Date.now(), date: tday(), content, mood, tags, stage_when_created: (await rdJSON(CFG + 'relationship_state.json'))?.current_stage || '初识', created_at: niso() };
        moments.moments.push(moment);
        await wrJSON(MOMENTS_FILE, moments);
        return { success: true, moment, message: '朋友圈记录已写入' };
    } catch (e) { return { success: false, message: '写入失败: ' + (e.message || e) }; }
}

async function update_user_profile(p) {
    try {
        let preferences; try { preferences = JSON.parse(p.preferences); } catch (e) { return { success: false, message: 'preferences 必须为有效JSON字符串' }; }
        const topic = sv(p.topic, '');
        let profile = await rdJSON(USER_PROFILE_FILE);
        if (!profile || !profile.inferred) profile = { version: '1.0', inferred: { personality_tags: [], communication_style: { avg_message_length: 0, preferred_emoji: [], verbosity: 'concise' }, active_hours: { peak_start: '', peak_end: '' }, emotional_pattern: { stress_triggers: [], comfort_triggers: [] }, interests: [] }, explicit: { birthday: '', preferences: { likes: [], dislikes: [] } } };
        if (preferences.personality_tags) { for (const tag of preferences.personality_tags) { if (!profile.inferred.personality_tags.includes(tag)) profile.inferred.personality_tags.push(tag); } }
        if (preferences.interests) { for (const interest of preferences.interests) { const existing = profile.inferred.interests.find(i => i.topic === interest.topic); if (existing) existing.enthusiasm = Math.max(existing.enthusiasm || 0, interest.enthusiasm || 0.5); else profile.inferred.interests.push({ topic: interest.topic, enthusiasm: interest.enthusiasm || 0.5 }); } }
        if (topic && !profile.inferred.interests.find(i => i.topic === topic)) profile.inferred.interests.push({ topic, enthusiasm: 0.3 });
        await wrJSON(USER_PROFILE_FILE, profile);
        return { success: true, profile, message: '用户画像已更新' };
    } catch (e) { return { success: false, message: '更新失败: ' + (e.message || e) }; }
}

async function check_safety_word(p) {
    const text = sv(p.text, '').trim();
    const safetyWords = ['紧急暂停', 'safeword', '安全词', '停止一切'];
    const crisisKeywords = ['想死', '自杀', '活不下去', '割腕', '不想活', '结束生命', '伤害自己'];
    const hitSafety = safetyWords.some(w => text.includes(w));
    const hitCrisis = crisisKeywords.some(w => text.includes(w));
    return { success: true, is_safety: hitSafety, is_crisis: hitCrisis, safety_words_hit: hitSafety ? safetyWords.filter(w => text.includes(w)) : [], crisis_keywords_hit: hitCrisis ? crisisKeywords.filter(w => text.includes(w)) : [], message: hitSafety ? '安全词触发' : (hitCrisis ? '危机信号检测' : '正常') };
}

// ==================== 导出 ====================
// 初始化
exports.init_wanzhi = init_wanzhi;
exports.check_shizuku = check_shizuku;
exports.read_init_workflow = read_init_workflow;

// 记忆清理
exports.cleanup_stale_session = cleanup_stale_session;
exports.archive_old_logs = archive_old_logs;
exports.cleanup_orphaned_state = cleanup_orphaned_state;
exports.full_cleanup = full_cleanup;

// GitHub同步
exports.upload_config = upload_config;
exports.download_config = download_config;
exports.list_remote_configs = list_remote_configs;
exports.upload_all_configs = upload_all_configs;

// 主动外联
exports.get_stored_contact = get_stored_contact;
exports.check_proactive_conditions = check_proactive_conditions;
exports.increase_proactive_count = increase_proactive_count;

// 动态人格
exports.generate_daily_timeline = generate_daily_timeline;
exports.update_micro_mood = update_micro_mood;
exports.check_whisper_mode = check_whisper_mode;
exports.generate_whisper_message = generate_whisper_message;
exports.write_moment = write_moment;
exports.update_user_profile = update_user_profile;
exports.check_safety_word = check_safety_word;

// 配置管理
exports.validate_reply = validate_reply;
exports.load_all_configs = load_all_configs;
exports.get_stage_rules = get_stage_rules;
exports.update_relationship_score = update_relationship_score;
exports.flush_session_to_memory = flush_session_to_memory;
exports.check_stop_command = check_stop_command;
exports.check_daily_reset = check_daily_reset;
exports.update_daily_state = update_daily_state;
exports.update_monitoring_state = update_monitoring_state;
exports.write_chat_log = write_chat_log;
exports.get_session_elapsed = get_session_elapsed;
