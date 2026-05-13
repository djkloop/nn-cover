import { useCoverStore } from '@/store/coverStore';
import { Star, User, TreePine, Mountain } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

export default function StyleNature() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(254,251,235,0.95)', border: 'rgba(120,53,15,0.35)', accent: '#166534', accentLight: '#22c55e',
    titleColor: '#14532d', subtitleColor: '#4d7c0f', metaBg: 'rgba(22,101,52,0.1)',
    tagBg: 'rgba(22,101,52,0.12)', tagText: '#166534', starColor: '#fbbf24',
    rankBg: 'linear-gradient(135deg,#22c55e,#166534)', rankText: '#fff', descColor: '#3f6212'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div
      id="cover-canvas"
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
        background: 'linear-gradient(180deg, #7dd3fc 0%, #38bdf8 25%, #0ea5e9 42%, #22c55e 50%, #16a34a 68%, #166534 100%)',
      }}
    >
      {/* Sky-to-grass atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft horizon glow */}
        <div
          style={{
            position: 'absolute',
            top: '38%',
            left: '0',
            right: '0',
            height: '80px',
            background: 'linear-gradient(180deg, rgba(14,165,233,0.15) 0%, rgba(34,197,94,0.12) 40%, transparent 100%)',
          }}
        />

        {/* Clouds */}
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '6%',
            width: '120px',
            height: '36px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.55)',
            filter: 'blur(4px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '11%',
            width: '70px',
            height: '26px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.45)',
            filter: 'blur(3px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '18%',
            width: '140px',
            height: '40px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.5)',
            filter: 'blur(5px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '7%',
            right: '24%',
            width: '80px',
            height: '28px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.4)',
            filter: 'blur(3px)',
          }}
        />

        {/* Distant mountains - left range */}
        <svg
          width="420"
          height="160"
          viewBox="0 0 420 160"
          preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: '48%', left: '-20px' }}
        >
          <defs>
            <linearGradient id="mtLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#15803d" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#166534" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path d="M0,160 L80,30 L150,90 L220,15 L300,75 L380,45 L420,85 L420,160 Z" fill="url(#mtLeft)" />
        </svg>

        {/* Distant mountains - right range */}
        <svg
          width="360"
          height="130"
          viewBox="0 0 360 130"
          preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: '49%', right: '-10px' }}
        >
          <defs>
            <linearGradient id="mtRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14532d" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#166534" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M0,130 L60,35 L130,80 L200,20 L270,65 L330,40 L360,70 L360,130 Z" fill="url(#mtRight)" />
        </svg>

        {/* Grass texture hint at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            background:
              'repeating-linear-gradient(175deg, transparent 0px, transparent 3px, rgba(22,101,52,0.08) 3px, rgba(22,101,52,0.08) 4px), repeating-linear-gradient(185deg, transparent 0px, transparent 4px, rgba(16,163,82,0.06) 4px, rgba(16,163,82,0.06) 5px), linear-gradient(to top, rgba(22,101,52,0.2) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex h-full w-full"
        style={{ padding: '42px 48px 36px 52px' }}
      >
        {/* LEFT SECTION */}
        <div
          className="flex flex-col justify-between"
          style={{ width: '44%', paddingRight: '28px' }}
        >
          {/* Title block */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <TreePine style={{ width: '22px', height: '22px', color: '#166534' }} />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#166534',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                GitHub Trending
              </span>
            </div>
            <h1
              style={{
                fontSize: '58px',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '10px',
                color: '#ffffff',
                textShadow: '0 2px 12px rgba(22,101,52,0.3)',
              }}
            >
              {state.mainTitlePrefix}{' '}
              <span style={{ color: '#fef9c3' }}>{state.mainTitleSuffix}</span>
            </h1>
            <p
              style={{
                fontSize: '21px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.88)',
                letterSpacing: '0.01em',
                marginBottom: '14px',
                textShadow: '0 1px 6px rgba(22,101,52,0.25)',
              }}
            >
              {state.subtitle}
            </p>
            {/* Decorative line - leaf green to earth brown */}
            <div
              style={{
                width: '120px',
                height: '4px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #166534, #22c55e, #78350f, #22c55e)',
                boxShadow: '0 0 10px rgba(34,197,94,0.35)',
              }}
            />
          </div>

          {/* Features - nature themed cards with leaf icons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '12px',
              marginTop: '28px',
            }}
          >
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '10px 13px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background:
                      idx % 2 === 0
                        ? 'linear-gradient(135deg, rgba(22,101,52,0.35), rgba(34,197,94,0.2))'
                        : 'linear-gradient(135deg, rgba(120,53,15,0.3), rgba(180,83,9,0.18))',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <TreePine
                    style={{
                      width: '14px',
                      height: '14px',
                      color: idx % 2 === 0 ? '#86efac' : '#fcd34d',
                    }}
                  />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: '#ffffff',
                      lineHeight: 1.25,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {feature.title}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.3,
                      marginTop: '1px',
                    }}
                  >
                    {feature.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Author pill - earthy tone */}
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 15px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: '#fcd34d' }} />
              <span
                style={{
                  fontSize: '12.5px',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                作者：<span style={{ color: '#ffffff', fontWeight: 500 }}>{state.author}</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Wooden Signboard Card */}
        <div className="flex-1 flex items-center" style={{ paddingLeft: '18px' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} />
          ) : (
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                transform: 'perspective(950px) rotateY(-19deg) rotateX(1.5deg)',
                transformStyle: 'preserve-3d',
              }}
              data-export-3d="true"
            >
              {/* Outer ambient glow - forest green */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '24px',
                  background:
                    'linear-gradient(135deg, rgba(34,197,94,0.3) 0%, rgba(22,101,52,0.2) 35%, rgba(34,197,94,0.25) 65%, rgba(120,53,15,0.15) 100%)',
                  filter: 'blur(16px)',
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '20px',
                  background:
                    'linear-gradient(135deg, rgba(34,197,94,0.4) 0%, rgba(22,101,52,0.25) 50%, rgba(120,53,15,0.2) 100%)',
                  filter: 'blur(5px)',
                  opacity: 0.7,
                }}
              />

              {/* Main card body - wooden signboard style */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  padding: '24px 24px',
                  background:
                    'linear-gradient(170deg, #fffbeb 0%, #fef3c7 40%, #fde68a 100%)',
                  border: '3.5px solid #78350f',
                  boxShadow: `
                    0 8px 32px rgba(22,101,52,0.2),
                    0 0 60px rgba(34,197,94,0.08),
                    inset 0 1px 0 rgba(255,255,255,0.7)
                  `,
                  overflow: 'hidden',
                }}
              >
                {/* Wood grain texture overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '14.5px',
                    backgroundImage:
                      'repeating-linear-gradient(88deg, transparent 0px, transparent 2px, rgba(120,53,15,0.04) 2px, rgba(120,53,15,0.04) 3px), repeating-linear-gradient(92deg, transparent 0px, transparent 30px, rgba(120,53,15,0.03) 30px, rgba(120,53,15,0.03) 31px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top edge highlight */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '8%',
                    right: '8%',
                    height: '2px',
                    background:
                      'linear-gradient(90deg, transparent, rgba(250,204,21,0.6), transparent)',
                    borderRadius: '1px',
                  }}
                />

                {/* Card header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '17px',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #166534, #22c55e)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 12px rgba(34,197,94,0.35)',
                      }}
                    >
                      <Mountain style={{ width: '18px', height: '18px', color: '#ffffff' }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '14.5px',
                          fontWeight: 700,
                          color: '#166534',
                          lineHeight: 1.2,
                        }}
                      >
                        GitHub{' '}
                        <span style={{ color: '#16a34a' }}>Trending</span>
                      </div>
                      <div
                        style={{
                          fontSize: '10.5px',
                          color: 'rgba(120,53,15,0.55)',
                          lineHeight: 1.2,
                          marginTop: '2px',
                        }}
                      >
                        今日热度最高 🌿
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 11px',
                      borderRadius: '7px',
                      background: 'rgba(22,101,52,0.07)',
                      border: '1px solid rgba(22,101,52,0.15)',
                    }}
                  >
                    <TreePine style={{ width: '12px', height: '12px', color: '#16a34a' }} />
                    <span
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(120,53,15,0.55)',
                      }}
                    >
                      {state.date}
                    </span>
                  </div>
                </div>

                {/* Inner project card */}
                <div
                  style={{
                    borderRadius: '12px',
                    padding: '16px 18px',
                    background: 'rgba(255,255,255,0.65)',
                    border: '2px solid rgba(120,53,15,0.18)',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
                    {/* Rank badge - leaf badge */}
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background:
                          'linear-gradient(145deg, #22c55e 0%, #16a34a 50%, #166534 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#ffffff',
                        flexShrink: 0,
                        boxShadow:
                          '0 0 16px rgba(34,197,94,0.4), 0 2px 8px rgba(22,101,52,0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
                        position: 'relative',
                      }}
                    >
                      {state.rank}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '50%',
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.2), transparent 50%)',
                        }}
                      />
                    </div>

                    {/* Project details */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span style={{ color: '#166534' }}>{projectOwner}</span>
                        <span style={{ color: 'rgba(120,53,15,0.35)' }}> / </span>
                        <span style={{ color: '#16a34a' }}>
                          {projectRepo || state.projectName}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'rgba(120,53,15,0.5)',
                          lineHeight: 1.6,
                          marginTop: '5px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {state.projectDesc}
                      </div>
                      {/* Tags - natural colored pills */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                          marginTop: '11px',
                        }}
                      >
                        {state.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '3px 9px',
                              borderRadius: '999px',
                              fontSize: '10px',
                              fontWeight: 500,
                              color:
                                idx % 3 === 0
                                  ? '#166534'
                                  : idx % 3 === 1
                                    ? '#78350f'
                                    : '#0e7490',
                              background:
                                idx % 3 === 0
                                  ? 'rgba(34,197,94,0.15)'
                                  : idx % 3 === 1
                                    ? 'rgba(120,53,15,0.1)'
                                    : 'rgba(56,189,248,0.12)',
                              border: `1px solid ${
                                idx % 3 === 0
                                  ? 'rgba(34,197,94,0.25)'
                                  : idx % 3 === 1
                                    ? 'rgba(120,53,15,0.2)'
                                    : 'rgba(56,189,248,0.2)'
                              }`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stars column - golden sun star */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        flexShrink: 0,
                        minWidth: '50px',
                      }}
                    >
                      <Star
                        style={{
                          width: '28px',
                          height: '28px',
                          color: '#fbbf24',
                          fill: '#fde047',
                          strokeWidth: '1px',
                          filter:
                            'drop-shadow(0 0 6px rgba(251,191,36,0.5)) drop-shadow(0 0 12px rgba(245,158,11,0.25))',
                        }}
                      />
                      <span
                        style={{
                          fontSize: '17px',
                          fontWeight: 800,
                          color: '#78350f',
                        }}
                      >
                        {state.stars}
                      </span>
                      <span
                        style={{
                          fontSize: '9.5px',
                          color: 'rgba(120,53,15,0.45)',
                        }}
                      >
                        stars
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trend line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '13px',
                    paddingLeft: '2px',
                    position: 'relative',
                  }}
                >
                  <Mountain style={{ width: '14px', height: '14px', color: '#16a34a' }} />
                  <span
                    style={{
                      fontSize: '11.5px',
                      color: 'rgba(120,53,15,0.5)',
                    }}
                  >
                    热度趋势：
                  </span>
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: '#16a34a',
                    }}
                  >
                    {state.trendText}
                  </span>
                </div>
              </div>

              {/* Floating tree pine icon badge */}
              <div
                style={{
                  position: 'absolute',
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  bottom: '-10px',
                  right: '-10px',
                  background: 'linear-gradient(135deg, #166534, #22c55e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow:
                    '0 0 28px rgba(34,197,94,0.35), 0 4px 14px rgba(0,0,0,0.25)',
                  transform: 'translateZ(38px)',
                }}
              >
                <TreePine style={{ width: '27px', height: '27px', color: '#ffffff' }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom grass wave effect */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '72px', overflow: 'hidden' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 72"
          preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0 }}
        >
          <defs>
            <linearGradient id="grassWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="12%" stopColor="rgba(22,101,52,0.3)" />
              <stop offset="30%" stopColor="rgba(34,197,94,0.35)" />
              <stop offset="48%" stopColor="rgba(22,101,52,0.28)" />
              <stop offset="65%" stopColor="rgba(16,163,82,0.32)" />
              <stop offset="82%" stopColor="rgba(34,197,94,0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="grassWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="18%" stopColor="rgba(16,163,82,0.22)" />
              <stop offset="45%" stopColor="rgba(22,101,52,0.28)" />
              <stop offset="72%" stopColor="rgba(34,197,94,0.22)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="grassGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,46 C140,22 280,42 420,28 C560,14 700,38 840,26 C980,12 1100,36 1200,22 L1200,72 L0,72 Z"
            fill="url(#grassWave1)"
            filter="url(#grassGlow)"
            opacity="0.6"
          />
          <path
            d="M0,54 C140,32 280,48 420,37 C560,26 700,46 840,35 C980,22 1100,44 1200,33 L1200,72 L0,72 Z"
            fill="url(#grassWave2)"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Bottom ambient grass glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '140px',
          background: 'linear-gradient(to top, rgba(22,101,52,0.12) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
