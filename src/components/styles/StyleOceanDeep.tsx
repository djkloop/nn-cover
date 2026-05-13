import { useCoverStore } from '@/store/coverStore';
import { Star, User, Waves, Droplets } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

export default function StyleOceanDeep() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(0,119,182,0.1)', border: 'rgba(0,180,216,0.35)', accent: '#0077b6', accentLight: '#90e0ef',
    titleColor: '#ffffff', subtitleColor: '#90e0ef', metaBg: 'rgba(0,119,182,0.12)',
    tagBg: 'rgba(0,180,216,0.15)', tagText: '#caf0f8', starColor: '#caf0f8',
    rankBg: 'linear-gradient(135deg,#00b4d8,#0077b6)', rankText: '#fff', descColor: 'rgba(144,224,239,0.65)'
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
        background: 'linear-gradient(180deg, #03045e 0%, #0077b6 35%, #00b4d8 70%, #90e0ef 100%)',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Ocean depth ambient glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep abyss glow - top left */}
        <div
          className="absolute"
          style={{
            top: '-12%',
            left: '-8%',
            width: '560px',
            height: '440px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(3,4,94,0.7) 0%, rgba(0,119,182,0.25) 40%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Ocean mid-layer glow */}
        <div
          className="absolute"
          style={{
            top: '20%',
            right: '5%',
            width: '500px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,216,0.18) 0%, rgba(0,119,182,0.1) 45%, transparent 65%)',
            filter: 'blur(55px)',
          }}
        />
        {/* Surface light glow - bottom right */}
        <div
          className="absolute"
          style={{
            bottom: '-10%',
            right: '-5%',
            width: '520px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(144,224,239,0.35) 0%, rgba(202,240,248,0.15) 40%, transparent 60%)',
            filter: 'blur(48px)',
          }}
        />
        {/* Caustic light ray from surface */}
        <div
          className="absolute"
          style={{
            top: '5%',
            right: '15%',
            width: '320px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(144,224,239,0.08) 0%, transparent 60%)',
            filter: 'blur(35px)',
            transform: 'rotate(-15deg)',
          }}
        />
      </div>

      {/* Horizontal wave line decoration - upper area */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 1200 512"
        preserveAspectRatio="none"
        style={{ opacity: 0.12 }}
      >
        <path
          d="M0,80 C150,55 300,105 450,75 C600,45 750,95 900,68 C1050,42 1150,78 1200,62"
          fill="none"
          stroke="#90e0ef"
          strokeWidth="1.5"
        />
        <path
          d="M0,115 C180,90 340,130 500,100 C660,72 820,118 980,92 C1100,74 1160,102 1200,88"
          fill="none"
          stroke="#00b4d8"
          strokeWidth="1"
        />
        <path
          d="M0,148 C160,128 320,158 480,135 C640,114 800,152 960,130 C1080,112 1140,138 1200,122"
          fill="none"
          stroke="#caf0f8"
          strokeWidth="0.8"
        />
      </svg>

      {/* Main content */}
      <div className="relative z-10 flex h-full w-full" style={{ padding: '42px 48px 36px 52px' }}>

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between" style={{ width: '44%', paddingRight: '28px' }}>

          {/* Title block */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Waves style={{ width: '22px', height: '22px', color: '#00b4d8' }} />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#90e0ef',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Deep Ocean
              </span>
            </div>
            <h1
              style={{
                fontSize: '62px',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                marginBottom: '10px',
                color: '#ffffff',
                fontFamily: '"Noto Sans SC", "Inter", sans-serif',
              }}
            >
              {state.mainTitlePrefix}{' '}
              <span style={{ color: '#90e0ef' }}>
                {state.mainTitleSuffix}
              </span>
            </h1>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 500,
                color: '#90e0ef',
                letterSpacing: '0.02em',
                marginTop: '4px',
                marginBottom: '16px',
                fontFamily: '"Noto Sans SC", sans-serif',
              }}
            >
              {state.subtitle}
            </p>

            {/* Ocean gradient decorative line */}
            <div
              style={{
                width: '140px',
                height: '3px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #0077b6, #00b4d8, #90e0ef, #caf0f8, #90e0ef, #00b4d8)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '2px',
                  boxShadow: '0 0 12px rgba(0,180,216,0.5), 0 0 24px rgba(144,224,239,0.25)',
                }}
              />
            </div>
          </div>

          {/* Features - bubble shaped */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '28px',
            }}
          >
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 18px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, rgba(0,119,182,0.2), rgba(0,180,216,0.1))',
                  border: '1px solid rgba(144,224,239,0.2)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <Droplets
                  style={{ width: '13px', height: '13px', color: '#90e0ef' }}
                />
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: '#caf0f8',
                    lineHeight: 1.25,
                    whiteSpace: 'nowrap',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  {feature.title}
                </span>
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
                background: 'rgba(0,119,182,0.12)',
                border: '1px solid rgba(144,224,239,0.18)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: '#90e0ef' }} />
              <span
                style={{
                  fontSize: '12.5px',
                  color: '#90e0ef',
                  fontFamily: '"Noto Sans SC", sans-serif',
                }}
              >
                作者：<span style={{ color: '#ffffff', fontWeight: 500 }}>{state.author}</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Underwater Bubble Card */}
        <div className="flex-1 flex items-center" style={{ paddingLeft: '18px' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} />
          ) : (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
            }}
          >
            {/* Outer ocean glow aura */}
            <div
              style={{
                position: 'absolute',
                inset: '-14px',
                borderRadius: '26px',
                background: 'linear-gradient(135deg, rgba(0,180,216,0.25) 0%, rgba(0,119,182,0.18) 40%, rgba(144,224,239,0.2) 70%, rgba(0,180,216,0.15) 100%)',
                filter: 'blur(20px)',
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-5px',
                borderRadius: '22px',
                background: 'linear-gradient(135deg, rgba(0,180,216,0.35), rgba(144,224,239,0.2))',
                filter: 'blur(6px)',
                opacity: 0.6,
              }}
            />

            {/* Main card body - glassmorphism underwater bubble */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                padding: '26px 26px',
                background: 'linear-gradient(170deg, rgba(3,4,94,0.55) 0%, rgba(0,119,182,0.35) 40%, rgba(0,180,216,0.25) 70%, rgba(144,224,239,0.15) 100%)',
                border: '1.5px solid rgba(0,180,216,0.35)',
                backdropFilter: 'blur(16px)',
                boxShadow: `
                  0 0 30px rgba(0,180,216,0.15),
                  0 0 60px rgba(0,119,182,0.08),
                  inset 0 1px 0 rgba(255,255,255,0.08),
                  inset 0 -1px 0 rgba(0,119,182,0.15)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Top edge caustic highlight */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '8%',
                  right: '8%',
                  height: '1.5px',
                  background: 'linear-gradient(90deg, transparent, rgba(144,224,239,0.6), rgba(202,240,248,0.8), rgba(144,224,239,0.6), transparent)',
                }}
              />

              {/* Inner glow effect like underwater light refraction */}
              <div
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: '12%',
                  width: '60%',
                  height: '40%',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse, rgba(144,224,239,0.06), transparent 70%)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
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
                      background: 'linear-gradient(135deg, rgba(0,180,216,0.25), rgba(0,119,182,0.15))',
                      border: '1px solid rgba(144,224,239,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#caf0f8">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                      }}
                    >
                      GitHub{' '}
                      <span style={{ color: '#90e0ef' }}>Trending</span>
                    </div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(144,224,239,0.55)',
                        lineHeight: 1.2,
                        marginTop: '2px',
                        fontFamily: '"Noto Sans SC", sans-serif',
                      }}
                    >
                      深海探索 · 今日热度最高
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
                    background: 'rgba(0,119,182,0.15)',
                    border: '1px solid rgba(144,224,239,0.15)',
                  }}
                >
                  <Droplets style={{ width: '12px', height: '12px', color: '#90e0ef' }} />
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: 'rgba(144,224,239,0.6)',
                      fontFamily: '"Noto Sans SC", sans-serif',
                    }}
                  >
                    {state.date}
                  </span>
                </div>
              </div>

              {/* Inner project info area */}
              <div
                style={{
                  borderRadius: '14px',
                  padding: '17px 19px',
                  background: 'linear-gradient(165deg, rgba(0,119,182,0.12) 0%, rgba(0,180,216,0.06) 100%)',
                  border: '1px solid rgba(0,180,216,0.18)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
                  {/* Rank badge - droplet shape */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                      background: 'linear-gradient(170deg, #00b4d8, #0077b6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '19px',
                      fontWeight: 800,
                      color: '#ffffff',
                      flexShrink: 0,
                      boxShadow: '0 0 18px rgba(0,180,216,0.4), 0 0 36px rgba(0,119,182,0.15), inset 0 2px 4px rgba(255,255,255,0.15)',
                      fontFamily: '"Inter", sans-serif',
                      position: 'relative',
                    }}
                  >
                    {state.rank}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.18), transparent 50%)',
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
                      <span style={{ color: 'rgba(144,224,239,0.45)' }}> / </span>
                      <span style={{ color: '#caf0f8' }}>{projectRepo || state.projectName}</span>
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(144,224,239,0.5)',
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

                    {/* Tags - ocean tone pills */}
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
                            color: '#caf0f8',
                            background: 'rgba(0,119,182,0.18)',
                            border: '1px solid rgba(0,180,216,0.2)',
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stars column - foam white star */}
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
                        color: '#caf0f8',
                        fill: 'rgba(202,240,248,0.2)',
                        strokeWidth: '1.5px',
                        filter: 'drop-shadow(0 0 6px rgba(202,240,248,0.4)) drop-shadow(0 0 12px rgba(144,224,239,0.2))',
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
                        color: 'rgba(144,224,239,0.45)',
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
                <Waves style={{ width: '14px', height: '14px', color: '#90e0ef' }} />
                <span
                  style={{
                    fontSize: '11.5px',
                    color: 'rgba(144,224,239,0.5)',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  热度趋势：
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#caf0f8',
                    fontFamily: '"Noto Sans SC", sans-serif',
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

      {/* Bottom ocean wave texture */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '85px', overflow: 'hidden' }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 85" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0 }}>
          <defs>
            <linearGradient id="oceanWaveFront" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="10%" stopColor="rgba(144,224,239,0.3)" />
              <stop offset="25%" stopColor="rgba(0,180,216,0.35)" />
              <stop offset="45%" stopColor="rgba(144,224,239,0.28)" />
              <stop offset="65%" stopColor="rgba(0,180,216,0.32)" />
              <stop offset="82%" stopColor="rgba(144,224,239,0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="oceanWaveBack" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="15%" stopColor="rgba(0,119,182,0.2)" />
              <stop offset="38%" stopColor="rgba(0,180,216,0.22)" />
              <stop offset="62%" stopColor="rgba(0,119,182,0.18)" />
              <stop offset="85%" stopColor="rgba(0,180,216,0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="oceanGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Back wave layer */}
          <path
            d="M0,52 C120,32 260,58 400,38 C540,22 680,50 820,34 C960,18 1080,44 1200,30 L1200,85 L0,85 Z"
            fill="url(#oceanWaveBack)"
            opacity="0.6"
          />
          {/* Front wave layer */}
          <path
            d="M0,60 C140,36 280,56 420,42 C560,28 700,52 840,38 C980,24 1100,48 1200,36 L1200,85 L0,85 Z"
            fill="url(#oceanWaveFront)"
            filter="url(#oceanGlow)"
            opacity="0.7"
          />
          {/* Thin foam crest line */}
          <path
            d="M0,64 C140,42 280,60 420,47 C560,33 700,55 840,42 C980,28 1100,51 1200,40"
            fill="none"
            stroke="rgba(202,240,248,0.4)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Bottom ambient depth gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '140px',
          background: 'linear-gradient(to top, rgba(144,224,239,0.12), rgba(0,180,216,0.05), transparent)',
        }}
      />
    </div>
  );
}
