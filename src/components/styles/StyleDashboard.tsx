import { useRef } from 'react';
import { useCoverStore } from '@/store/coverStore';
import HeadlinePanel from './HeadlinePanel';
import { Star, User, Activity, BarChart3 } from 'lucide-react';

const COLORS = {
  bgDark: '#0f172a',
  bgCard: '#1e293b',
  bgSurface: '#162032',
  border: '#2a3a52',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  textMuted: '#64748b',
  dataBlue: '#3b82f6',
  successGreen: '#22c55e',
  warningOrange: '#f59e0b',
  dataPurple: '#8b5cf6',
};

const kpiColors = [COLORS.dataBlue, COLORS.successGreen, COLORS.warningOrange, COLORS.dataPurple];

const CHART_POINTS = '0,55 20,42 40,48 60,28 80,35 100,18 120,25 140,12 160,20 180,8 200,15 220,4';

export default function StyleDashboard() {
  const coverRef = useRef<HTMLDivElement>(null);
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(15,23,42,0.85)', border: 'rgba(59,130,246,0.3)', accent: '#3b82f6', accentLight: '#22c55e',
    titleColor: '#f1f5f9', subtitleColor: '#94a3b8', metaBg: 'rgba(59,130,246,0.1)',
    tagBg: 'rgba(59,130,246,0.12)', tagText: '#93c5fd', starColor: '#fbbf24',
    rankBg: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', rankText: '#fff', descColor: 'rgba(148,163,184,0.75)'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div
        ref={coverRef}
        id="cover-canvas"
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: '2.35 / 1',
          background: `linear-gradient(180deg, ${COLORS.bgDark} 0%, ${COLORS.bgCard} 100%)`,
          fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient glow spots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '15%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${COLORS.dataBlue}10 0%, transparent 65%)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-10%',
              left: '20%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${COLORS.dataPurple}08 0%, transparent 65%)`,
            }}
          />
        </div>

        {/* Top navigation bar */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 44px',
            borderBottom: `1px solid ${COLORS.border}`,
            background: `linear-gradient(to bottom, rgba(15,23,42,0.95), rgba(15,23,42,0.7))`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <BarChart3 style={{ width: '16px', height: '16px', color: COLORS.dataBlue }} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: COLORS.textSecondary, letterSpacing: '0.12em' }}>
                COVER<span style={{ color: COLORS.dataBlue }}>MONITOR</span>
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 9px',
                borderRadius: '4px',
                background: `${COLORS.successGreen}14`,
                border: `1px solid ${COLORS.successGreen}30`,
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: COLORS.successGreen,
                  boxShadow: `0 0 6px ${COLORS.successGreen}`,
                }}
              />
              <span style={{ fontSize: '9px', fontWeight: 600, color: COLORS.successGreen, letterSpacing: '0.06em' }}>
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {[
              { label: 'OVERVIEW', active: true },
              { label: 'TRENDS', active: false },
              { label: 'ANALYTICS', active: false },
            ].map((tab) => (
              <span
                key={tab.label}
                style={{
                  fontSize: '9px',
                  fontWeight: tab.active ? 700 : 500,
                  color: tab.active ? COLORS.dataBlue : COLORS.textMuted,
                  letterSpacing: '0.1em',
                  paddingBottom: '3px',
                  borderBottom: tab.active ? `2px solid ${COLORS.dataBlue}` : 'none',
                }}
              >
                {tab.label}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity style={{ width: '12px', height: '12px', color: COLORS.textMuted }} />
            <span style={{ fontSize: '9px', color: COLORS.textMuted, letterSpacing: '0.05em' }}>
              REFRESH: 30s
            </span>
          </div>
        </div>

        {/* Main content */}
        <div
          className="relative z-10 flex h-full w-full"
          style={{ paddingTop: '46px', padding: '56px 44px 36px 48px' }}
        >

          {/* LEFT SECTION */}
          <div className="flex flex-col justify-between" style={{ width: '43%', paddingRight: '26px' }}>

            {/* Title block */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '10px',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  background: `${COLORS.dataBlue}10`,
                  border: `1px solid ${COLORS.dataBlue}25`,
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: COLORS.dataBlue,
                  }}
                />
                <span
                  style={{
                    fontSize: '9.5px',
                    fontWeight: 700,
                    color: COLORS.dataBlue,
                    letterSpacing: '0.18em',
                  }}
                >
                  DASHBOARD / LIVE
                </span>
              </div>

              <h1
                style={{
                  fontSize: '54px',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                  fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                  marginBottom: '8px',
                }}
              >
                <span style={{ color: COLORS.textPrimary }}>{state.mainTitlePrefix}</span>
                <span style={{ marginLeft: '12px', color: COLORS.dataBlue }}>{state.mainTitleSuffix}</span>
              </h1>
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: 500,
                  color: COLORS.textSecondary,
                  fontFamily: '"Noto Sans SC", sans-serif',
                  marginBottom: '14px',
                }}
              >
                {state.subtitle}
              </p>
              <div
                style={{
                  width: '40px',
                  height: '3px',
                  background: `linear-gradient(90deg, ${COLORS.dataBlue}, ${COLORS.dataPurple})`,
                  borderRadius: '2px',
                }}
              />
            </div>

            {/* KPI Feature Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '10px',
                marginTop: '24px',
              }}
            >
              {state.features.map((feature, idx) => {
                const accentColor = kpiColors[idx % kpiColors.length];
                const metrics = ['99%', '+24%', '↑87%', '1.2k'];
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '12px 13px',
                      borderRadius: '8px',
                      background: `linear-gradient(135deg, ${accentColor}08, transparent)`,
                      border: `1px solid ${accentColor}18`,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '3px',
                        height: '100%',
                        background: accentColor,
                        opacity: 0.6,
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: COLORS.textPrimary,
                          fontFamily: '"Noto Sans SC", sans-serif',
                        }}
                      >
                        {feature.title}
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: 800,
                          color: accentColor,
                          fontFamily: '"Inter", monospace',
                        }}
                      >
                        {metrics[idx]}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: '9px',
                        color: COLORS.textMuted,
                        marginTop: '4px',
                        fontFamily: '"Noto Sans SC", sans-serif',
                      }}
                    >
                      {feature.desc}
                    </span>
                    {/* Mini sparkline bar decoration */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', marginTop: '8px', height: '14px' }}>
                      {[40, 62, 45, 78, 55, 90, 68, 85].map((h, i) => (
                        <div
                          key={i}
                          style={{
                            width: '3px',
                            height: `${h}%`,
                            borderRadius: '1px',
                            background: accentColor,
                            opacity: 0.25 + i * 0.07,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Author pill */}
            <div style={{ marginTop: 'auto', paddingTop: '18px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <User style={{ width: '13px', height: '13px', color: COLORS.dataBlue }} />
                <span
                  style={{
                    fontSize: '11.5px',
                    color: COLORS.textMuted,
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  作者：<span style={{ color: COLORS.textPrimary, fontWeight: 600 }}>{state.author}</span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Project Detail Panel */}
          <div className="flex-1 flex items-center" style={{ paddingLeft: '16px' }}>
            {layoutMode === 'headline' ? (
              <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
            ) : (
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
              }}
            >
              {/* Panel outer glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${COLORS.dataBlue}25 0%, ${COLORS.dataPurple}15 50%, ${COLORS.dataBlue}20 100%)`,
                  filter: 'blur(14px)',
                  opacity: 0.5,
                }}
              />

              {/* Main panel body */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: `linear-gradient(170deg, ${COLORS.bgSurface} 0%, ${COLORS.bgDark} 100%)`,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: `
                    0 0 40px rgba(59,130,246,0.06),
                    0 4px 24px rgba(0,0,0,0.3)
                  `,
                }}
              >
                {/* Panel header - status indicator row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderBottom: `1px solid ${COLORS.border}`,
                    background: 'rgba(255,255,255,0.01)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: COLORS.successGreen,
                        boxShadow: `0 0 8px ${COLORS.successGreen}, 0 0 16px ${COLORS.successGreen}40`,
                      }}
                    />
                    <span style={{ fontSize: '10px', fontWeight: 600, color: COLORS.successGreen, letterSpacing: '0.1em' }}>
                      ONLINE
                    </span>
                    <span style={{ fontSize: '9px', color: COLORS.textMuted, marginLeft: '4px' }}>
                      ● ACTIVE NOW
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Activity style={{ width: '11px', height: '11px', color: COLORS.textMuted }} />
                    <span style={{ fontSize: '9px', color: COLORS.textMuted }}>{state.date}</span>
                  </div>
                </div>

                {/* Panel content */}
                <div style={{ padding: '20px 20px 16px' }}>
                  {/* Rank number */}
                  <div
                    style={{
                      fontSize: '64px',
                      fontWeight: 900,
                      lineHeight: 1,
                      fontFamily: '"Inter", monospace',
                      background: `linear-gradient(180deg, ${COLORS.textPrimary}, ${COLORS.dataBlue})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '6px',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    #{String(state.rank).padStart(2, '0')}
                  </div>

                  {/* Project name */}
                  <div
                    style={{
                      fontSize: '19px',
                      fontWeight: 700,
                      color: COLORS.textPrimary,
                      marginBottom: '6px',
                      fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                    }}
                  >
                    <span style={{ color: COLORS.textSecondary }}>{projectOwner}</span>
                    <span style={{ color: COLORS.textMuted, margin: '0 5px' }}>/</span>
                    <span style={{ color: COLORS.dataBlue }}>{projectRepo || state.projectName}</span>
                  </div>

                  {/* Description */}
                  <div
                    style={{
                      fontSize: '11.5px',
                      color: COLORS.textMuted,
                      lineHeight: 1.55,
                      marginBottom: '12px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {state.projectDesc}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {state.tags.filter(Boolean).map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '3px 9px',
                          borderRadius: '4px',
                          fontSize: '9.5px',
                          fontWeight: 600,
                          color: `${kpiColors[idx % kpiColors.length]}`,
                          background: `${kpiColors[idx % kpiColors.length]}12`,
                          border: `1px solid ${kpiColors[idx % kpiColors.length]}25`,
                          letterSpacing: '0.03em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stars metric with mini chart */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <Star
                      style={{
                        width: '22px',
                        height: '22px',
                        color: COLORS.warningOrange,
                        fill: COLORS.warningOrange,
                        filter: `drop-shadow(0 0 6px ${COLORS.warningOrange}50)`,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flexShrink: 0 }}>
                      <div
                        style={{
                          fontSize: '24px',
                          fontWeight: 800,
                          color: COLORS.textPrimary,
                          fontFamily: '"Inter", monospace',
                          lineHeight: 1,
                        }}
                      >
                        {state.stars}
                      </div>
                      <div style={{ fontSize: '8.5px', color: COLORS.textMuted, marginTop: '1px' }}>STARS</div>
                    </div>

                    {/* Mini sparkline chart */}
                    <svg
                      viewBox="0 0 230 60"
                      preserveAspectRatio="none"
                      style={{
                        flex: 1,
                        height: '38px',
                        minWidth: '120px',
                      }}
                    >
                      <defs>
                        <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={`${COLORS.dataBlue}40`} />
                          <stop offset="100%" stopColor={`${COLORS.dataBlue}00`} />
                        </linearGradient>
                        <linearGradient id="chartStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={COLORS.dataBlue} />
                          <stop offset="100%" stopColor={COLORS.dataPurple} />
                        </linearGradient>
                      </defs>
                      <polyline
                        points={CHART_POINTS}
                        fill="none"
                        stroke="url(#chartStroke)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points={`0,60 ${CHART_POINTS} 220,60`}
                        fill="url(#chartFill)"
                      />
                      {/* Data dots */}
                      {CHART_POINTS.split(' ').map((pt, i) => {
                        if (i % 3 !== 0 || i === 0) {
                          const [cx, cy] = pt.split(',');
                          return (
                            <circle
                              key={i}
                              cx={cx}
                              cy={cy}
                              r={i === CHART_POINTS.split(' ').length - 1 ? '3' : '1.5'}
                              fill={i === CHART_POINTS.split(' ').length - 1 ? COLORS.dataBlue : `${COLORS.dataBlue}70`}
                            />
                          );
                        }
                        return null;
                      })}
                    </svg>
                  </div>
                </div>

                {/* Trend indicator at bottom of panel */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 20px',
                    borderTop: `1px solid ${COLORS.border}`,
                    background: 'rgba(255,255,255,0.01)',
                  }}
                >
                  <Activity style={{ width: '12px', height: '12px', color: COLORS.successGreen }} />
                  <span style={{ fontSize: '10px', color: COLORS.textMuted }}>趋势：</span>
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: COLORS.successGreen,
                    }}
                  >
                    {state.trendText}
                  </span>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>

        {/* Bottom status bar */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 44px 9px 48px',
            borderTop: `1px solid ${COLORS.border}`,
            background: `linear-gradient(to top, rgba(15,23,42,0.92), transparent)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: COLORS.successGreen,
                }}
              />
              <span style={{ fontSize: '8.5px', color: COLORS.textMuted, letterSpacing: '0.08em' }}>
                LAST UPDATED: {state.date}
              </span>
            </div>
            <span style={{ fontSize: '8px', color: COLORS.textMuted + '50' }}>|</span>
            <span style={{ fontSize: '8.5px', color: COLORS.textMuted, letterSpacing: '0.05em' }}>
              LATENCY: 12ms
            </span>
          </div>
          <div
            style={{
              fontSize: '8px',
              color: COLORS.textMuted,
              letterSpacing: '0.12em',
              fontFamily: '"Inter", monospace',
            }}
          >
            COVERMONITOR v3.2.1 // DASHBOARD RENDER ENGINE
          </div>
        </div>

      </div>
    </div>
  );
}
