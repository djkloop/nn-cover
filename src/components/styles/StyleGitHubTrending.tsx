import { useCoverStore } from '@/store/coverStore';
import { Star, User, GitFork, GitPullRequest, Eye } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

const MOCK_ITEMS = [
  {
    rank: 2,
    owner: 'vercel',
    repo: 'next.js',
    desc: 'The React Framework',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: '128k',
    forks: '26.1k',
    todayStars: '+512',
  },
  {
    rank: 3,
    owner: 'facebook',
    repo: 'react',
    desc: 'A JavaScript library for building user interfaces',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: '226k',
    forks: '46.3k',
    todayStars: '+387',
  },
  {
    rank: 4,
    owner: 'microsoft',
    repo: 'vscode',
    desc: 'Visual Studio Code',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: '165k',
    forks: '29.4k',
    todayStars: '+298',
  },
  {
    rank: 5,
    owner: 'rust-lang',
    repo: 'rust',
    desc: 'Empowering everyone to build reliable and efficient software',
    lang: 'Rust',
    langColor: '#dea584',
    stars: '98k',
    forks: '15.8k',
    todayStars: '+245',
  },
];

export default function StyleGitHubTrending() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(22,27,34,0.97)', border: 'rgba(48,54,61,0.6)', accent: '#238636', accentLight: '#58a6ff',
    titleColor: '#ffffff', subtitleColor: '#8b949e', metaBg: 'rgba(35,134,54,0.12)',
    tagBg: 'rgba(35,134,54,0.15)', tagText: '#7ee787', starColor: '#fbbf24',
    rankBg: 'linear-gradient(135deg,#238636,#0d1117)', rankText: '#7ee787', descColor: 'rgba(139,148,158,0.7)'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';
  const validTags = state.tags.filter(Boolean);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background: '#0d1117',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(48,54,61,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(48,54,61,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top-right ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(35,134,54,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Main layout */}
      <div className="relative z-10 h-full flex items-center px-10 gap-10">
        {/* ===== LEFT SECTION (40%) ===== */}
        <div style={{ width: '38%', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '85%' }}>
          <div>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '6px',
                background: 'rgba(35,134,54,0.12)',
                border: '1px solid rgba(35,134,54,0.28)',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#238636',
                }}
              />
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#238636',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Trending
              </span>
            </div>

            {/* Main title */}
            <div
              style={{
                fontSize: '52px',
                fontWeight: 900,
                color: '#f0f6fc',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              {state.mainTitlePrefix}
              <br />
              <span style={{ color: '#238636' }}>{state.mainTitleSuffix}</span>
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: '15px',
                color: '#8b949e',
                marginTop: '12px',
                lineHeight: 1.55,
                fontFamily: '"Noto Sans SC", sans-serif',
              }}
            >
              {state.subtitle}
            </div>

            {/* Decorative line */}
            <div
              style={{
                width: '52px',
                height: '3px',
                background: 'linear-gradient(90deg, #238636, #58a6ff)',
                borderRadius: '2px',
                marginTop: '18px',
              }}
            />

            {/* Feature tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: '22px',
              }}
            >
              {state.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 13px',
                    borderRadius: '8px',
                    background: 'rgba(48,54,61,0.5)',
                    border: '1px solid rgba(48,54,61,0.8)',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: idx === 0 ? '#238636' : idx === 1 ? '#58a6ff' : idx === 2 ? '#a371f7' : '#f78166',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: '#c9d1d9',
                      whiteSpace: 'nowrap',
                      fontFamily: '"Noto Sans SC", sans-serif',
                    }}
                  >
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Author info */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '7px 14px',
              borderRadius: '6px',
              background: 'rgba(48,54,61,0.4)',
              border: '1px solid rgba(48,54,61,0.7)',
              width: 'fit-content',
            }}
          >
            <User style={{ width: '13px', height: '13px', color: '#8b949e' }} />
            <span
              style={{
                fontSize: '11.5px',
                color: '#8b949e',
                fontFamily: '"Noto Sans SC", sans-serif',
              }}
            >
              by{' '}
              <span style={{ color: '#f0f6fc', fontWeight: 600 }}>{state.author}</span>
            </span>
          </div>
        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div
            style={{
              width: '100%',
              maxWidth: '620px',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#161b22',
              border: '1px solid #30363d',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            {/* List header - mimics GitHub Trending page header */}
            <div
              style={{
                padding: '16px 20px 14px',
                borderBottom: '1px solid #30363d',
                background: 'rgba(22,27,34,0.6)',
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#f0f6fc',
                  letterSpacing: '-0.01em',
                  marginBottom: '4px',
                }}
              >
                Trending
              </div>
              <div
                style={{
                  fontSize: '11.5px',
                  color: '#8b949e',
                  lineHeight: 1.45,
                }}
              >
                See what the GitHub community is most excited about today.
              </div>
              <div
                style={{
                  fontSize: '10px',
                  color: '#6e7681',
                  marginTop: '8px',
                  fontWeight: 500,
                }}
              >
                {state.date}
              </div>
            </div>

            {/* Ranking list */}
            <div style={{ padding: '0' }}>
              {/* ===== ITEM #1 (HIGHLIGHTED - real data) ===== */}
              <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid #30363d',
              background: 'rgba(35,134,54,0.06)',
              borderLeft: '3px solid #238636',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', gap: '16px' }}>
              {/* Rank number */}
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 900,
                  color: '#238636',
                  fontFamily: '"Inter", monospace',
                  minWidth: '36px',
                  lineHeight: 1.15,
                  paddingTop: '2px',
                }}
              >
                #{state.rank || 1}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Repo name */}
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: 1.35,
                    marginBottom: '4px',
                  }}
                >
                  <span style={{ color: '#8b949e' }}>{projectOwner}</span>
                  <span style={{ color: '#6e7681', margin: '0 4px' }}>/</span>
                  <span style={{ color: '#58a6ff' }}>{projectRepo || state.projectName}</span>
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: '12px',
                    color: '#8b949e',
                    lineHeight: 1.5,
                    marginBottom: '8px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {state.projectDesc}
                </div>

                {/* Bottom row: tags + stats */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  {/* Tags */}
                  {validTags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '10px',
                        fontWeight: 500,
                        color: '#c9d1d9',
                        background: 'rgba(88,166,255,0.12)',
                        border: '1px solid rgba(88,166,255,0.25)',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {tag}
                    </span>
                  ))}

                  {/* Stars */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}>
                    <Star style={{ width: '12px', height: '12px', color: '#f78166', fill: '#f78166' }} />
                    <span style={{ fontSize: '11.5px', color: '#8b949e', fontWeight: 500, fontFamily: '"Inter", monospace' }}>
                      {state.stars}{' '}
                      <span style={{ color: '#238636', fontWeight: 600 }}>stars today</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

              {/* ===== MOCK ITEMS #2-#5 ===== */}
              {MOCK_ITEMS.map((item) => (
                <div
                  key={item.rank}
                  style={{
                    padding: '13px 20px',
                    borderBottom: item.rank < 5 ? '1px solid #21262d' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', gap: '14px' }}>
                    {/* Rank number */}
                    <div
                      style={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: '#6e7681',
                        fontFamily: '"Inter", monospace',
                        minWidth: '30px',
                        lineHeight: 1.2,
                        paddingTop: '1px',
                      }}
                    >
                      #{item.rank}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Repo name */}
                      <div
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 600,
                          lineHeight: 1.35,
                          marginBottom: '3px',
                        }}
                      >
                        <span style={{ color: '#8b949e' }}>{item.owner}</span>
                        <span style={{ color: '#6e7681', margin: '0 3px' }}>/</span>
                        <span style={{ color: '#58a6ff' }}>{item.repo}</span>
                      </div>

                      {/* Description */}
                      <div
                        style={{
                          fontSize: '11px',
                          color: '#6e7681',
                          lineHeight: 1.45,
                          marginBottom: '6px',
                        }}
                      >
                        {item.desc}
                      </div>

                      {/* Bottom row: language + stats */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontSize: '10.5px',
                          color: '#6e7681',
                        }}
                      >
                        {/* Language dot + name */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <div
                            style={{
                              width: '9px',
                              height: '9px',
                              borderRadius: '50%',
                              background: item.langColor,
                            }}
                          />
                          <span>{item.lang}</span>
                        </div>

                        {/* Stars */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Star style={{ width: '11px', height: '11px', color: '#6e7681' }} />
                          <span style={{ fontFamily: '"Inter", monospace' }}>{item.stars}</span>
                        </div>

                        {/* Forks */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <GitFork style={{ width: '11px', height: '11px', color: '#6e7681' }} />
                          <span style={{ fontFamily: '"Inter", monospace' }}>{item.forks}</span>
                        </div>

                        {/* Today's stars */}
                        <span style={{ color: '#238636', fontWeight: 600, fontFamily: '"Inter", monospace' }}>
                          {item.todayStars} today
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scrollbar hint at bottom */}
            <div
              style={{
                padding: '8px 20px',
                borderTop: '1px solid #30363d',
                background: 'rgba(22,27,34,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Eye style={{ width: '11px', height: '11px', color: '#6e7681' }} />
                <span style={{ fontSize: '9.5px', color: '#6e7681', fontFamily: '"Inter", sans-serif' }}>
                  Built with open source
                </span>
              </div>
              <div
                style={{
                  width: '80px',
                  height: '4px',
                  borderRadius: '2px',
                  background: '#30363d',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '40%',
                    height: '100%',
                    borderRadius: '2px',
                    background: '#484f58',
                  }}
                />
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Octocat decoration bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '14px',
          right: '18px',
          opacity: 0.12,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 16 16" fill="#f0f6fc">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </div>
    </div>
  );
}
