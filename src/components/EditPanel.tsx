import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useCoverStore } from '@/store/coverStore';
import {
  Download,
  Flame,
  Target,
  Code2,
  Star,
  ChevronDown,
  ChevronUp,
  Type,
  Layers,
  User,
  Hash,
  FileText,
  Tag,
  Github,
  Loader2,
  Sparkles,
  AlertCircle,
  Palette,
} from 'lucide-react';
import { domToPng } from 'modern-screenshot';

const iconOptions = [
  { value: 'flame', Icon: Flame },
  { value: 'target', Icon: Target },
  { value: 'code', Icon: Code2 },
  { value: 'star', Icon: Star },
];

import type { CoverStyle } from '@/store/coverStore';

const styleOptions: { value: CoverStyle; label: string; emoji: string; color: string; desc: string }[] = [
  { value: 'tech', label: '科技蓝', emoji: '🔵', color: '#3b82f6', desc: '深蓝渐变+霓虹光晕' },
  { value: 'hackernews', label: 'HackerNews', emoji: '📰', color: '#ff6600', desc: '橙色头条新闻风' },
  { value: 'minimal', label: '极简白', emoji: '⬜', color: '#111111', desc: '干净留白大字' },
  { value: 'cyberpunk', label: '赛博朋克', emoji: '🟣', color: '#ff0080', desc: '霓虹粉青故障风' },
  { value: 'terminal', label: '终端绿', emoji: '🟢', color: '#00ff41', desc: '黑客命令行风格' },
  { value: 'sunset', label: '暖橙日落', emoji: '🟠', color: '#ff6b35', desc: '温馨暖色氛围' },
  { value: 'aurora', label: '极光紫', emoji: '💜', color: '#a855f7', desc: '梦幻流光极光' },
  { value: 'noir', label: '黑白电影', emoji: '🖤', color: '#888888', desc: '高对比胶片质感' },
  { value: 'chinared', label: '中国红', emoji: '🔴', color: '#c41e3a', desc: '国潮金红大气' },
  { value: 'mint', label: '薄荷绿', emoji: '💚', color: '#2dd4bf', desc: '清新夏日薄荷' },
  { value: 'neoncity', label: '霓虹都市', emoji: '🌃', color: '#00b4db', desc: '城市夜景广告牌' },
  { value: 'dashboard', label: '数据仪表盘', emoji: '📊', color: '#3b82f6', desc: '实时监控面板' },
  { value: 'vinyl', label: '黑胶唱片', emoji: '🎵', color: '#8B4513', desc: '复古音乐专辑' },
  { value: 'nature', label: '自然户外', emoji: '🏔️', color: '#22c55e', desc: '森林草地天空' },
  { value: 'sakura', label: '樱花日系', emoji: '🌸', color: '#ffb7c5', desc: '温柔浪漫花海' },
  { value: 'pixel', label: '像素复古', emoji: '👾', color: '#4169e1', desc: '8-bit游戏像素风' },
  { value: 'papernote', label: '便签纸', emoji: '📝', color: '#2563eb', desc: '手写便利签风格' },
  { value: 'oceandeep', label: '深海蓝', emoji: '🌊', color: '#0077b6', desc: '海洋气泡玻璃态' },
  { value: 'forestdark', label: '暗夜森林', emoji: '🌲', color: '#2d6a4f', desc: '神秘魔法森林' },
  { value: 'goldenlux', label: '奢华金', emoji: '👑', color: '#d4af37', desc: '高端金色商务' },
  { value: 'githubtrending', label: 'GitHub排行', emoji: '📊', color: '#238636', desc: 'Trending排行榜列表' },
  { value: 'viralheadline', label: '爆款标题', emoji: '🔥', color: '#ef4444', desc: '吸睛新闻头条风' },
];

const sections = [
  {
    key: 'title',
    icon: Type,
    label: '标题区域',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.18)',
  },
  {
    key: 'features',
    icon: Layers,
    label: '特性标签',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.06)',
    border: 'rgba(139,92,246,0.18)',
  },
  {
    key: 'meta',
    icon: User,
    label: '作者与日期',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.06)',
    border: 'rgba(6,182,212,0.18)',
  },
  {
    key: 'project',
    icon: FileText,
    label: '项目信息',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.18)',
  },
];

function Field({ label, value, onChange, type = 'text' }: {
  label: string; value: string | number;
  onChange: (v: string) => void; type?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5"
        style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="field-input"
      />
    </div>
  );
}

function SectionHeader({
  label, icon: Icon, color, expanded, onToggle
}: {
  label: string; icon: React.ElementType; color: string;
  expanded: boolean; onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-2 px-3 -mx-1 rounded-xl transition-colors duration-200 group cursor-pointer"
      style={{ color: 'var(--text-secondary)' }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex items-center justify-center w-7 h-7 rounded-lg text-sm transition-transform duration-200 group-hover:scale-110"
          style={{ background: `${color}15`, color }}
        >
          <Icon width={15} height={15} />
        </span>
        <span className="text-[13px] font-semibold tracking-wide">{label}</span>
      </div>
      <ChevronDown
        width={14} height={14}
        style={{
          transform: expanded ? 'rotate(180deg)' : 'none',
          transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1)',
          color: 'var(--text-muted)'
        }}
      />
    </button>
  );
}

interface GitHubRepo {
  full_name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  owner: { login: string };
}

async function fetchGitHubRepo(input: string): Promise<GitHubRepo> {
  let owner: string, repo: string;

  const urlMatch = input.match(/github\.com\/([^/]+)\/([^/\s?#]+)/);
  if (urlMatch) {
    [, owner, repo] = urlMatch;
  } else {
    const parts = input.trim().split('/');
    if (parts.length === 2) {
      [owner, repo] = parts.map(s => s.trim());
    } else {
      throw new Error('请输入有效的仓库地址，如：decolua/9router 或 https://github.com/decolua/9router');
    }
  }

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: { Accept: 'application/vnd.github.v3+json' },
  });

  if (!res.ok) {
    if (res.status === 404) throw new Error('仓库未找到，请检查地址是否正确');
    throw new Error(`API 错误 (${res.status})`);
  }

  const data = await res.json();

  const topicsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/topics`, {
    headers: { Accept: 'application/vnd.github.mercy-preview+json' },
  });
  let topics: string[] = [];
  try {
    if (topicsRes.ok) {
      topics = (await topicsRes.json()).names || [];
    }
  } catch { /* ignore */ }

  return {
    full_name: data.full_name,
    description: data.description || '',
    stargazers_count: data.stargazers_count,
    language: data.language,
    topics: topics.length > 0 ? topics : data.language ? [data.language] : [],
    owner: data.owner,
  };
}

function formatStars(n: number): string {
  if (n >= 10000) return `${(n / 1000).toFixed(1)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function EditPanel() {
  const state = useCoverStore();
  const [open, setOpen] = useState<Record<string, boolean>>({
    title: true, features: true, meta: true, project: true,
  });
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });

  const updateDropdownPos = useCallback(() => {
    if (dropdownTriggerRef.current) {
      const rect = dropdownTriggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, []);

  useEffect(() => {
    if (styleDropdownOpen) {
      updateDropdownPos();
    }
  }, [styleDropdownOpen, updateDropdownPos]);
  const [ghInput, setGhInput] = useState('');
  const [ghLoading, setGhLoading] = useState(false);
  const [ghError, setGhError] = useState('');
  const [ghSuccess, setGhSuccess] = useState('');

  const toggle = (k: string) => setOpen((p) => ({ ...p, [k]: !p[k] }));

  const handleGitHubFetch = async () => {
    if (!ghInput.trim()) return;
    setGhLoading(true);
    setGhError('');
    setGhSuccess('');

    try {
      const repo = await fetchGitHubRepo(ghInput);

      state.setProjectName(repo.full_name);
      state.setProjectDesc(repo.description);
      state.setStars(formatStars(repo.stargazers_count));

      const tagList = repo.topics.slice(0, 6);
      while (tagList.length < 6) tagList.push('');
      tagList.forEach((t, i) => state.setTag(i, t));

      const today = new Date();
      const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
      state.setDate(dateStr);

      setGhSuccess(`已自动填充 ${repo.full_name}`);
      setTimeout(() => setGhSuccess(''), 3000);
    } catch (err: any) {
      setGhError(err.message || '获取失败');
    } finally {
      setGhLoading(false);
    }
  };

  const download = async () => {
    const el = document.getElementById('cover-canvas');
    console.log('[导出] 查找 cover-canvas:', el, '当前风格:', state.style);
    if (!el) {
      console.warn('[导出] 未找到 cover-canvas 元素，无法导出');
      return;
    }
    try {
      console.log('[导出] 开始生成图片...');
      const dataUrl = await domToPng(el, { scale: 2, backgroundColor: '#000000' });
      console.log('[导出] 图片生成成功，长度:', dataUrl.length);
      const a = document.createElement('a');
      const repoOwner = state.projectName.split('/')[0] || '';
      const repoName = state.projectName.split('/')[1] || state.projectName;
      const ts = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      a.download = `${repoOwner}_${repoName}_${state.author}_${ts}.png`;
      a.href = dataUrl;
      a.click();
      console.log('[导出] 触发下载完成');
    } catch (err) {
      console.error('导出失败:', err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleGitHubFetch();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="shrink-0 px-6 pt-6 pb-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-base font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              编辑器
            </h1>
            <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
              自定义封面图内容
            </p>
          </div>
          <button
            onClick={download}
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold text-white
              transition-all duration-200 active:scale-[0.96] cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #2563eb 1e40af)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            <Download width={14} height={14} /> 导出
          </button>
        </div>

        {/* GitHub Auto-fill */}
        <div className="mt-4 p-3 rounded-xl animate-fade-up"
          style={{
            background: 'linear-gradient(135deg, rgba(36,31,49,0.8), rgba(20,18,32,0.9))',
            border: '1px solid rgba(139,92,246,0.2)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Github width={14} height={14} style={{ color: '#8b5cf6' }} />
            <span className="text-[11px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
              GitHub 仓库自动填充
            </span>
            <Sparkles width={12} height={12} style={{ color: '#f59e0b' }} />
          </div>
          <div className="flex gap-2">
            <input
              value={ghInput}
              onChange={(e) => setGhInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="decolua/9router 或完整 URL..."
              className="flex-1 px-3 py-2 rounded-lg text-xs bg-black/30 border border-white/[0.08]
                text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500/40
                focus:bg-black/40 transition-all duration-200"
            />
            <button
              onClick={handleGitHubFetch}
              disabled={ghLoading || !ghInput.trim()}
              className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer
                disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
              style={{
                background: ghLoading ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.2)',
                color: '#c4b5fd',
                border: '1px solid rgba(139,92,246,0.3)',
              }}
            >
              {ghLoading ? (
                <Loader2 width={14} height={14} className="animate-spin" />
              ) : (
                <Sparkles width={14} height={14} />
              )}
              填充
            </button>
          </div>
          {ghError && (
            <div className="flex items-center gap-1.5 mt-2 text-[11px]" style={{ color: '#f87171' }}>
              <AlertCircle width={12} height={12} /> {ghError}
            </div>
          )}
          {ghSuccess && (
            <div className="flex items-center gap-1.5 mt-2 text-[11px] animate-fade-up" style={{ color: '#34d399' }}>
              <Sparkles width={12} height={12} /> {ghSuccess}
            </div>
          )}
        </div>

        <div className="mt-4 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border-subtle), transparent)' }} />
      </header>

      {/* Style Picker - Dropdown (outside scroll area to avoid clipping) */}
      <div className="px-6 pb-3">
        <section
          className="section-card"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06))',
            border: '1px solid rgba(99,102,241,0.2)',
          }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="flex items-center justify-center w-7 h-7 rounded-lg text-sm"
              style={{ background: 'rgba(236,72,153,0.12)', color: '#ec4899' }}
            >
              <Palette width={15} height={15} />
            </span>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: 'var(--text-primary)' }}>
              封面风格
            </span>
          </div>

          {/* Dropdown trigger */}
          <div style={{ position: 'relative' }}>
            <button
              ref={dropdownTriggerRef}
              onClick={() => setStyleDropdownOpen((p) => !p)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer"
              style={{
                background: 'rgba(15,23,42,0.5)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-base leading-none">
                  {styleOptions.find(o => o.value === state.style)?.emoji}
                </span>
                <span className="text-[12px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {styleOptions.find(o => o.value === state.style)?.label}
                </span>
                <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                  {styleOptions.find(o => o.value === state.style)?.desc}
                </span>
              </div>
              {styleDropdownOpen ? (
                <ChevronUp width={14} height={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              ) : (
                <ChevronDown width={14} height={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              )}
            </button>

            {/* Dropdown panel - Portal to body to avoid overflow clipping */}
            {styleDropdownOpen && createPortal(
              <div
                style={{
                  position: 'fixed',
                  top: `${dropdownPos.top}px`,
                  left: `${dropdownPos.left}px`,
                  width: `${dropdownPos.width}px`,
                  zIndex: 99999,
                }}
              >
                <div
                  className="p-3 rounded-xl overflow-y-auto max-h-[280px]"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
                  }}
                >
                  <div className="grid grid-cols-4 gap-1.5">
                    {styleOptions.map((opt) => {
                      const isActive = state.style === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => { state.setStyle(opt.value); setStyleDropdownOpen(false); }}
                          className="flex flex-col items-center gap-1 p-2 rounded-lg cursor-pointer"
                          style={{
                            background: isActive ? `${opt.color}20` : 'rgba(15,23,42,0.4)',
                            border: `1px solid ${isActive ? opt.color : 'transparent'}`,
                          }}
                        >
                          <span className="text-base leading-none">{opt.emoji}</span>
                          <span
                            className="text-[9.5px] font-semibold leading-tight text-center"
                            style={{ color: isActive ? opt.color : 'var(--text-secondary)' }}
                          >
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>,
              document.body
            )}
          </div>
        </section>

        {/* Layout Mode Toggle */}
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid var(--border-subtle)' }}
        >
          <span className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>右侧布局:</span>
          <div className="flex gap-1">
            {(['card', 'headline'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => state.setLayoutMode(mode)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold cursor-pointer"
                style={{
                  background: state.layoutMode === mode ? 'rgba(99,102,241,0.2)' : 'transparent',
                  border: `1px solid ${state.layoutMode === mode ? '#6366f1' : 'transparent'}`,
                  color: state.layoutMode === mode ? '#a5b4fc' : 'var(--text-muted)',
                }}
              >
                {mode === 'card' ? '📦 项目卡片' : '🔥 吸睛标题'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-3 pr-2">

        {/* Title */}
        <section
          className="section-card animate-fade-up"
          style={{ background: sections[0].bg, border: `1px solid ${sections[0].border}` }}
        >
          {(() => { const { key, ...rest } = sections[0]; return <SectionHeader key={key} {...rest} expanded={open.title} onToggle={() => toggle('title')} /> })()}
          {open.title && (
            <div className="mt-3 space-y-3 animate-fade-up" style={{ animationDelay: '50ms' }}>
              <div className="grid grid-cols-2 gap-3">
                <Field label="主标题前缀" value={state.mainTitlePrefix} onChange={(v) => state.setMainTitlePrefix(v)} />
                <Field label="主标题后缀" value={state.mainTitleSuffix} onChange={(v) => state.setMainTitleSuffix(v)} />
              </div>
              <Field label="副标题" value={state.subtitle} onChange={(v) => state.setSubtitle(v)} />
            </div>
          )}
        </section>

        {/* Features */}
        <section
          className="section-card animate-fade-up"
          style={{ background: sections[1].bg, border: `1px solid ${sections[1].border}`, animationDelay: '80ms' }}
        >
          {(() => { const { key, ...rest } = sections[1]; return <SectionHeader key={key} {...rest} expanded={open.features} onToggle={() => toggle('features')} /> })()}
          {open.features && (
            <div className="mt-3 space-y-3 animate-fade-up" style={{ animationDelay: '100ms' }}>
              {state.features.map((feat, i) => (
                <div key={i} className="p-3 rounded-xl space-y-2.5"
                  style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                      <Hash width={12} height={12} /> 标签 {i + 1}
                    </span>
                    <div className="flex gap-1">
                      {iconOptions.map(({ value, Icon }) => (
                        <button
                          key={value}
                          onClick={() => state.setFeature(i, 'icon', value)}
                          className="flex items-center justify-center w-7 h-7 rounded-md text-xs transition-all duration-150 cursor-pointer"
                          style={{
                            background: feat.icon === value ? sections[1].color : 'rgba(51,65,85,0.5)',
                            color: feat.icon === value ? '#fff' : 'var(--text-muted)',
                            boxShadow: feat.icon === value ? `0 2px 8px ${sections[1].color}35` : 'none',
                          }}
                        >
                          <Icon width={13} height={13} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Field label="标题" value={feat.title} onChange={(v) => state.setFeature(i, 'title', v)} />
                    <Field label="描述" value={feat.desc} onChange={(v) => state.setFeature(i, 'desc', v)} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Meta */}
        <section
          className="section-card animate-fade-up"
          style={{ background: sections[2].bg, border: `1px solid ${sections[2].border}`, animationDelay: '160ms' }}
        >
          {(() => { const { key, ...rest } = sections[2]; return <SectionHeader key={key} {...rest} expanded={open.meta} onToggle={() => toggle('meta')} /> })()}
          {open.meta && (
            <div className="mt-3 grid grid-cols-2 gap-3 animate-fade-up" style={{ animationDelay: '180ms' }}>
              <Field label="作者" value={state.author} onChange={(v) => state.setAuthor(v)} />
              <Field label="日期" value={state.date} onChange={(v) => state.setDate(v)} />
            </div>
          )}
        </section>

        {/* Project */}
        <section
          className="section-card animate-fade-up"
          style={{ background: sections[3].bg, border: `1px solid ${sections[3].border}`, animationDelay: '240ms' }}
        >
          {(() => { const { key, ...rest } = sections[3]; return <SectionHeader key={key} {...rest} expanded={open.project} onToggle={() => toggle('project')} /> })()}
          {open.project && (
            <div className="mt-3 space-y-3 animate-fade-up" style={{ animationDelay: '260ms' }}>
              <div className="grid grid-cols-2 gap-3">
                <Field label="排名" value={state.rank} onChange={(v) => state.setRank(Number(v))} type="number" />
                <Field label="Stars" value={state.stars} onChange={(v) => state.setStars(v)} />
              </div>
              <Field label="项目名称" value={state.projectName} onChange={(v) => state.setProjectName(v)} />

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
                >
                  <Tag width={12} height={12} /> 项目描述
                </label>
                <textarea
                  value={state.projectDesc}
                  onChange={(e) => state.setProjectDesc(e.target.value)}
                  rows={2}
                  className="field-input resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
                >
                  <Tag width={12} height={12} /> 标签
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {state.tags.map((tag, i) => (
                    <input
                      key={i}
                      type="text"
                      value={tag}
                      onChange={(e) => state.setTag(i, e.target.value)}
                      className="field-input"
                      placeholder={`标签 ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <Field label="热度趋势" value={state.trendText} onChange={(v) => state.setTrendText(v)} />
            </div>
          )}
        </section>

        <div className="h-4" />
      </div>
    </div>
  );
}
