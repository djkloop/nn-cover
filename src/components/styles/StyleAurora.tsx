import { useCoverStore } from '@/store/coverStore';
import HeadlinePanel from './HeadlinePanel';
import { Star, User, Sparkles, Gem } from 'lucide-react';

export default function StyleAurora() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(139,92,246,0.08)', border: 'rgba(168,85,247,0.3)', accent: '#a855f7', accentLight: '#6366f1',
    titleColor: '#ffffff', subtitleColor: '#c4b5fd', metaBg: 'rgba(168,85,247,0.12)',
    tagBg: 'rgba(168,85,247,0.15)', tagText: '#ddd6fe', starColor: '#a855f7',
    rankBg: 'rgba(168,85,247,0.25)', rankText: '#fff', descColor: 'rgba(224,231,255,0.6)'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  const stars = Array.from({ length: 48 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.2,
    delay: `${Math.random() * 4}s`,
  }));

  return (
    <div
      id="cover-canvas"
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background: 'linear-gradient(180deg, #050014 0%, #0a0020 40%, #120030 100%)',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Aurora layers - flowing light curtains */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Aurora band 1 - top right purple */}
        <div
          className="absolute"
          style={{
            top: '-8%',
            right: '-5%',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(168,85,247,0.28) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Aurora band 2 - center blue-purple */}
        <div
          className="absolute"
          style={{
            top: '15%',
            left: '30%',
            width: '700px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.22) 0%, rgba(168,85,247,0.12) 45%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Aurora band 3 - lower left violet */}
        <div
          className="absolute"
          style={{
            bottom: '-10%',
            left: '10%',
            width: '550px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, rgba(99,102,241,0.1) 40%, transparent 65%)',
            filter: 'blur(45px)',
          }}
        />
        {/* Aurora band 4 - upper mid magenta hint */}
        <div
          className="absolute"
          style={{
            top: '-5%',
            left: '20%',
            width: '480px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(190,88,220,0.14) 0%, rgba(168,85,247,0.06) 50%, transparent 70%)',
            filter: 'blur(38px)',
          }}
        />
        {/* Soft ambient glow behind card */}
        <div
          className="absolute"
          style={{
            top: '20%',
            right: '15%',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Star field */}
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              background: '#e0e7ff',
              opacity: s.opacity,
              boxShadow: `0 0 ${s.size * 2}px rgba(224,231,255,${s.opacity * 0.6})`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full w-full" style={{ padding: '42px 48px 36px 52px' }}>

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between" style={{ width: '44%', paddingRight: '28px' }}>

          {/* Title block */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Sparkles style={{ width: '22px', height: '22px', color: '#a855f7' }} />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(168,85,247,0.8)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Trending Now
              </span>
            </div>
            <h1
              style={{
                fontSize: '62px',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                marginBottom: '12px',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 40%, #c4b5fd 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: '"Inter", "Noto Sans SC", sans-serif',
              }}
            >
              {state.mainTitlePrefix}{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 60%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {state.mainTitleSuffix}
              </span>
            </h1>
            <p
              style={{
                fontSize: '22px',
                fontWeight: 500,
                color: 'rgba(196,181,253,0.75)',
                letterSpacing: '0.02em',
                fontFamily: '"Noto Sans SC", sans-serif',
                marginBottom: '16px',
              }}
            >
              {state.subtitle}
            </p>
            {/* Decorative aurora line */}
            <div
              style={{
                width: '120px',
                height: '3px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #a855f7, #6366f1, #a78bfa, #6366f1)',
                backgroundSize: '200% 100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '2px',
                  boxShadow: '0 0 12px rgba(168,85,247,0.5), 0 0 24px rgba(99,102,241,0.3)',
                }}
              />
            </div>
          </div>

          {/* Features - crystal glass style */}
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
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.07), rgba(99,102,241,0.04))',
                  border: '1px solid rgba(168,85,247,0.12)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(99,102,241,0.12))',
                    border: '1px solid rgba(168,85,247,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Gem style={{ width: '14px', height: '14px', color: '#a855f7' }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'rgba(224,231,255,0.9)',
                      lineHeight: 1.25,
                      fontFamily: '"Noto Sans SC", sans-serif',
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
                      color: 'rgba(167,139,250,0.55)',
                      lineHeight: 1.3,
                      marginTop: '1px',
                      fontFamily: '"Noto Sans SC", sans-serif',
                    }}
                  >
                    {feature.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Author pill */}
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 15px',
                borderRadius: '999px',
                background: 'rgba(168,85,247,0.06)',
                border: '1px solid rgba(168,85,247,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: '#a78bfa' }} />
              <span
                style={{
                  fontSize: '12.5px',
                  color: 'rgba(167,139,250,0.6)',
                  fontFamily: '"Noto Sans SC", sans-serif',
                }}
              >
                作者：<span style={{ color: 'rgba(224,231,255,0.82)', fontWeight: 500 }}>{state.author}</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Glassmorphism Card */}
        <div className="flex-1 flex items-center" style={{ paddingLeft: '18px' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
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
            {/* Outer aurora glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '26px',
                background: 'linear-gradient(135deg, rgba(168,85,247,0.3) 0%, rgba(99,102,241,0.2) 35%, rgba(168,85,247,0.25) 65%, rgba(139,92,246,0.2) 100%)',
                filter: 'blur(16px)',
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '22px',
                background: 'linear-gradient(135deg, rgba(168,85,247,0.4) 0%, rgba(99,102,241,0.25) 50%, rgba(168,85,247,0.35) 100%)',
                filter: 'blur(5px)',
                opacity: 0.8,
              }}
            />

            {/* Main card body - glassmorphism */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                padding: '26px 26px',
                background: 'linear-gradient(170deg, rgba(18,0,48,0.85) 0%, rgba(10,0,32,0.92) 50%, rgba(5,0,20,0.95) 100%)',
                border: '1.5px solid rgba(168,85,247,0.25)',
                backdropFilter: 'blur(20px)',
                boxShadow: `
                  0 0 40px rgba(168,85,247,0.12),
                  0 0 80px rgba(99,102,241,0.06),
                  inset 0 1px 0 rgba(255,255,255,0.05)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Top edge shine - aurora reflection */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '8%',
                  right: '8%',
                  height: '1.5px',
                  background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(99,102,241,0.4), rgba(168,85,247,0.5), transparent)',
                }}
              />

              {/* Card header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(99,102,241,0.12))',
                      border: '1px solid rgba(168,85,247,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#e0e7ff">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 700,
                        color: '#e0e7ff',
                        lineHeight: 1.2,
                        fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                      }}
                    >
                      GitHub{' '}
                      <span style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Trending
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(167,139,250,0.5)',
                        lineHeight: 1.2,
                        marginTop: '2px',
                        fontFamily: '"Noto Sans SC", sans-serif',
                      }}
                    >
                      今日热度最高 ✨
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
                    background: 'rgba(168,85,247,0.06)',
                    border: '1px solid rgba(168,85,247,0.12)',
                  }}
                >
                  <Sparkles style={{ width: '12px', height: '12px', color: '#a78bfa' }} />
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: 'rgba(196,181,253,0.55)',
                      fontFamily: '"Noto Sans SC", sans-serif',
                    }}
                  >
                    {state.date}
                  </span>
                </div>
              </div>

              {/* Inner project card */}
              <div
                style={{
                  borderRadius: '13px',
                  padding: '17px 19px',
                  background: 'linear-gradient(165deg, rgba(168,85,247,0.06) 0%, rgba(99,102,241,0.03) 100%)',
                  border: '1px solid rgba(168,85,247,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
                  {/* Rank badge - gem hexagon style */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 800,
                      color: '#ffffff',
                      flexShrink: 0,
                      boxShadow: '0 0 18px rgba(168,85,247,0.4), 0 0 36px rgba(168,85,247,0.15), inset 0 1px 0 rgba(255,255,255,0.2)',
                      fontFamily: '"Inter", sans-serif',
                      position: 'relative',
                    }}
                  >
                    {state.rank}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.15), transparent 50%)',
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
                        fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                      }}
                    >
                      <span style={{ color: '#ffffff' }}>{projectOwner}</span>
                      <span style={{ color: 'rgba(167,139,250,0.5)' }}> / </span>
                      <span style={{ color: '#c4b5fd' }}>{projectRepo || state.projectName}</span>
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(167,139,250,0.4)',
                        lineHeight: 1.6,
                        marginTop: '5px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {state.projectDesc}
                    </div>
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
                            color: 'rgba(196,181,253,0.8)',
                            background: 'rgba(168,85,247,0.1)',
                            border: '1px solid rgba(168,85,247,0.15)',
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stars column - glowing star */}
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
                        color: '#a855f7',
                        fill: 'rgba(168,85,247,0.15)',
                        strokeWidth: '1.5px',
                        filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.6)) drop-shadow(0 0 16px rgba(168,85,247,0.3))',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#ffffff',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '9.5px',
                        color: 'rgba(167,139,250,0.35)',
                        fontFamily: '"Inter", sans-serif',
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
                }}
              >
                <Sparkles style={{ width: '14px', height: '14px', color: '#a78bfa' }} />
                <span
                  style={{
                    fontSize: '11.5px',
                    color: 'rgba(167,139,250,0.45)',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  热度趋势：
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#c4b5fd',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  {state.trendText}
                </span>
              </div>
            </div>

            {/* Floating gem badge */}
            <div
              style={{
                position: 'absolute',
                width: '56px',
                height: '56px',
                borderRadius: '15px',
                bottom: '-12px',
                right: '-12px',
                background: 'linear-gradient(135deg, #a855f7, #6d28d9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(168,85,247,0.4), 0 4px 16px rgba(0,0,0,0.5)',
                transform: 'translateZ(38px)',
              }}
            >
              <Gem style={{ width: '28px', height: '28px', color: '#e0e7ff' }} />
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom aurora wave effect */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '90px', overflow: 'hidden' }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 90" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0 }}>
          <defs>
            <linearGradient id="auroraWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="12%" stopColor="rgba(168,85,247,0.35)" />
              <stop offset="30%" stopColor="rgba(99,102,241,0.4)" />
              <stop offset="48%" stopColor="rgba(168,85,247,0.3)" />
              <stop offset="65%" stopColor="rgba(139,92,246,0.38)" />
              <stop offset="82%" stopColor="rgba(99,102,241,0.35)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="auroraWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="18%" stopColor="rgba(139,92,246,0.25)" />
              <stop offset="45%" stopColor="rgba(168,85,247,0.3)" />
              <stop offset="72%" stopColor="rgba(99,102,241,0.25)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="auroraGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,58 C140,28 280,52 420,33 C560,18 700,48 840,32 C980,16 1100,44 1200,28 L1200,90 L0,90 Z"
            fill="url(#auroraWave1)"
            filter="url(#auroraGlow)"
            opacity="0.65"
          />
          <path
            d="M0,66 C140,40 280,56 420,43 C560,30 700,54 840,42 C980,28 1100,52 1200,40 L1200,90 L0,90 Z"
            fill="url(#auroraWave2)"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Bottom ambient glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '160px',
          background: 'linear-gradient(to top, rgba(109,40,217,0.06), transparent)',
        }}
      />

    </div>
  );
}
