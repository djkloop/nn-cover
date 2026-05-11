import { useCoverStore } from '@/store/coverStore';
import { Star, User, Heart, Flower2 } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

const petals = Array.from({ length: 18 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  width: Math.random() * 12 + 6,
  height: Math.random() * 8 + 4,
  rotation: Math.random() * 360,
  opacity: Math.random() * 0.35 + 0.1,
  delay: `${Math.random() * 6}s`,
  duration: Math.random() * 6 + 8,
}));

const fallingPetals = Array.from({ length: 14 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  size: Math.random() * 10 + 5,
  rotation: Math.random() * 360,
  opacity: Math.random() * 0.5 + 0.15,
  delay: `${Math.random() * 8}s`,
  duration: Math.random() * 7 + 10,
}));

const bokehCircles = [
  { top: '5%', left: '8%', size: 180, color: 'rgba(255,183,197,0.25)' },
  { top: '15%', right: '12%', size: 220, color: 'rgba(255,209,220,0.2)' },
  { top: '55%', left: '18%', size: 160, color: 'rgba(255,240,243,0.3)' },
  { top: '65%', right: '20%', size: 200, color: 'rgba(219,112,147,0.15)' },
  { bottom: '10%', left: '40%', size: 140, color: 'rgba(255,183,197,0.22)' },
  { top: '35%', left: '55%', size: 120, color: 'rgba(255,209,220,0.28)' },
];

export default function StyleSakura() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(255,250,250,0.95)', border: 'rgba(219,112,147,0.3)', accent: '#db7093', accentLight: '#ffb7c5',
    titleColor: '#500020', subtitleColor: '#c4859a', metaBg: 'rgba(219,112,147,0.1)',
    tagBg: 'rgba(219,112,147,0.12)', tagText: '#c44b78', starColor: '#db7093',
    rankBg: 'linear-gradient(135deg,#ffb7c5,#db7093)', rankText: '#fff', descColor: '#8b4a5e'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background: 'linear-gradient(160deg, #fff5f7 0%, #ffe4e8 35%, #fff0f5 65%, #fff5f7 100%)',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Bokeh / soft pink light circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bokehCircles.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: b.top,
              left: b.left,
              right: (b as Record<string, string | number>).right as string | undefined,
              bottom: (b as Record<string, string | number>).bottom as string | undefined,
              width: b.size,
              height: b.size,
              background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
              filter: 'blur(30px)',
            }}
          />
        ))}

        {/* Scattered static petals */}
        {petals.map((p, i) => (
          <div
            key={`petal-${i}`}
            className="absolute"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
              borderRadius: '50% 0 50% 50%',
              background: `linear-gradient(135deg, rgba(255,183,197,${p.opacity}), rgba(255,209,220,${p.opacity * 0.6}))`,
              transform: `rotate(${p.rotation}deg)`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Falling petals overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fallingPetals.map((p, i) => (
          <div
            key={`fall-${i}`}
            className="absolute"
            style={{
              left: p.left,
              top: '-5%',
              width: p.size,
              height: p.size * 0.7,
              borderRadius: '50% 0 50% 50%',
              background: `linear-gradient(135deg, rgba(255,183,197,${p.opacity}), rgba(255,209,220,${p.opacity * 0.5}))`,
              filter: 'blur(0.3px)',
            }}
          />
        ))}
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
              <Flower2 style={{ width: '22px', height: '22px', color: '#db7093' }} />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#db7093',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Spring Trending
              </span>
            </div>

            <h1
              style={{
                fontSize: '62px',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                marginBottom: '12px',
                color: '#c44d6e',
                fontFamily: '"Noto Sans SC", "Inter", sans-serif',
              }}
            >
              {state.mainTitlePrefix}{' '}
              <span style={{ color: '#db7093' }}>{state.mainTitleSuffix}</span>
            </h1>

            <p
              style={{
                fontSize: '22px',
                fontWeight: 500,
                color: '#d88a9f',
                letterSpacing: '0.01em',
                marginBottom: '16px',
                fontFamily: '"Noto Sans SC", sans-serif',
              }}
            >
              {state.subtitle}
            </p>

            {/* Decorative pink gradient line */}
            <div
              style={{
                width: '120px',
                height: '3px',
                borderRadius: '2px',
                background:
                  'linear-gradient(90deg, #ffb7c5, #ffd1dc, #db7093, #ffb7c5)',
                backgroundSize: '200% 100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '2px',
                  boxShadow: '0 0 12px rgba(219,112,147,0.4), 0 0 24px rgba(255,183,197,0.2)',
                }}
              />
            </div>

            {/* Japanese-style seal stamp */}
            <div
              style={{
                marginTop: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #e85a71, #db7093)',
                border: '2px solid rgba(219,112,147,0.4)',
                boxShadow: '0 2px 12px rgba(219,112,147,0.25)',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1,
                  fontFamily: '"Noto Sans SC", serif',
                }}
              >
                熱榜
              </span>
            </div>
          </div>

          {/* Features - petal-shaped soft pills */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '26px',
            }}
          >
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 16px',
                  borderRadius: '999px',
                  background:
                    idx % 2 === 0
                      ? 'rgba(255,183,197,0.12)'
                      : 'rgba(255,209,220,0.15)',
                  border: '1px solid rgba(219,112,147,0.15)',
                }}
              >
                <Heart
                  style={{
                    width: '14px',
                    height: '14px',
                    color: '#db7093',
                    fill: 'rgba(219,112,147,0.2)',
                    strokeWidth: '1.5px',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#b55a6e',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  {feature.title}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    color: 'rgba(186,122,142,0.6)',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  · {feature.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Author info - gentle style */}
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 16px',
                borderRadius: '999px',
                background: 'rgba(255,240,243,0.7)',
                border: '1px solid rgba(219,112,147,0.2)',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: '#db7093' }} />
              <span
                style={{
                  fontSize: '12.5px',
                  color: 'rgba(186,122,142,0.7)',
                  fontFamily: '"Noto Sans SC", sans-serif',
                }}
              >
                作者：
                <span style={{ color: '#b55a6e', fontWeight: 500 }}>
                  {state.author}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Project Card */}
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
            {/* Outer pink glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '26px',
                background:
                  'linear-gradient(135deg, rgba(255,183,197,0.35) 0%, rgba(255,209,220,0.25) 35%, rgba(219,112,147,0.2) 65%, rgba(255,183,197,0.3) 100%)',
                filter: 'blur(16px)',
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '22px',
                background:
                  'linear-gradient(135deg, rgba(255,183,197,0.4) 0%, rgba(219,112,147,0.25) 50%, rgba(255,209,220,0.35) 100%)',
                filter: 'blur(5px)',
                opacity: 0.75,
              }}
            />

            {/* Main card body - cream white with large border radius */}
            <div
              style={{
                position: 'relative',
                borderRadius: '22px',
                padding: '26px 26px',
                background:
                  'linear-gradient(170deg, #ffffff 0%, #fffcfd 40%, #fdf5f7 80%, #faf0f2 100%)',
                border: '1.5px solid rgba(219,112,147,0.2)',
                boxShadow: `
                  0 8px 32px rgba(219,112,147,0.12),
                  0 0 60px rgba(255,183,197,0.08),
                  inset 0 1px 0 rgba(255,255,255,0.9)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Top edge cherry blossom pink shine */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '8%',
                  right: '8%',
                  height: '2.5px',
                  borderRadius: '0 0 4px 4px',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,183,197,0.6), rgba(219,112,147,0.5), rgba(255,183,197,0.6), transparent)',
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
                      background:
                        'linear-gradient(135deg, #ffb7c5, #db7093)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 14px rgba(219,112,147,0.3)',
                    }}
                  >
                    <Flower2
                      style={{ width: '17px', height: '17px', color: '#ffffff' }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 700,
                        color: '#5a2a38',
                        lineHeight: 1.2,
                        fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                      }}
                    >
                      GitHub{' '}
                      <span style={{ color: '#db7093' }}>Trending</span>
                    </div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(186,122,142,0.5)',
                        lineHeight: 1.2,
                        marginTop: '2px',
                        fontFamily: '"Noto Sans SC", sans-serif',
                      }}
                    >
                      春日樱花季 🌸
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
                    background: 'rgba(255,183,197,0.1)',
                    border: '1px solid rgba(219,112,147,0.18)',
                  }}
                >
                  <Flower2
                    style={{ width: '11px', height: '11px', color: '#db7093' }}
                  />
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: 'rgba(186,122,142,0.6)',
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
                  borderRadius: '15px',
                  padding: '18px 20px',
                  background:
                    'linear-gradient(165deg, rgba(255,255,255,0.9) 0%, rgba(255,250,252,0.85) 100%)',
                  border: '1px solid rgba(219,112,147,0.12)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '13px',
                  }}
                >
                  {/* Rank badge - flower shape circle */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background:
                        'linear-gradient(145deg, #ffb7c5 0%, #f091a3 45%, #db7093 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 800,
                      color: '#ffffff',
                      flexShrink: 0,
                      boxShadow:
                        '0 0 16px rgba(219,112,147,0.35), 0 2px 8px rgba(219,112,147,0.15), inset 0 1px 0 rgba(255,255,255,0.35)',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {state.rank}
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
                      <span style={{ color: '#3d1a26' }}>{projectOwner}</span>
                      <span style={{ color: 'rgba(186,122,142,0.4)' }}>
                        {' '}
                        /{' '}
                      </span>
                      <span style={{ color: '#c44d6e' }}>
                        {projectRepo || state.projectName}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(186,122,142,0.5)',
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
                    {/* Tags - light pink small pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginTop: '11px',
                      }}
                    >
                      {state.tags.map(
                        (tag, idx) =>
                          tag && (
                            <span
                              key={idx}
                              style={{
                                padding: '3px 10px',
                                borderRadius: '999px',
                                fontSize: '10px',
                                fontWeight: 500,
                                color: '#b55a6e',
                                background:
                                  idx % 3 === 0
                                    ? 'rgba(255,183,197,0.2)'
                                    : idx % 3 === 1
                                      ? 'rgba(255,209,220,0.25)'
                                      : 'rgba(255,240,243,0.5)',
                                border: '1px solid rgba(219,112,147,0.15)',
                                fontFamily: '"Inter", sans-serif',
                              }}
                            >
                              {tag}
                            </span>
                          )
                      )}
                    </div>
                  </div>

                  {/* Stars column - pink star */}
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
                        color: '#db7093',
                        fill: 'rgba(219,112,147,0.2)',
                        strokeWidth: '1.5px',
                        filter:
                          'drop-shadow(0 0 6px rgba(219,112,147,0.5)) drop-shadow(0 0 12px rgba(255,183,197,0.3))',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#5a2a38',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '9.5px',
                        color: 'rgba(186,122,142,0.4)',
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
                <Heart
                  style={{ width: '14px', height: '14px', color: '#db7093', fill: 'rgba(219,112,147,0.15)' }}
                />
                <span
                  style={{
                    fontSize: '11.5px',
                    color: 'rgba(186,122,142,0.5)',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  热度趋势：
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#c44d6e',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  {state.trendText}
                </span>
              </div>
            </div>

            {/* Floating flower badge */}
            <div
              style={{
                position: 'absolute',
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                bottom: '-12px',
                right: '-12px',
                background: 'linear-gradient(135deg, #ffb7c5, #db7093)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow:
                  '0 0 30px rgba(219,112,147,0.35), 0 4px 16px rgba(0,0,0,0.08)',
                transform: 'translateZ(38px)',
              }}
            >
              <Flower2
                style={{ width: '28px', height: '28px', color: '#ffffff' }}
              />
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom petal wave effect */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '80px', overflow: 'hidden' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0 }}
        >
          <defs>
            <linearGradient id="sakuraWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="12%" stopColor="rgba(255,183,197,0.3)" />
              <stop offset="30%" stopColor="rgba(255,209,220,0.35)" />
              <stop offset="48%" stopColor="rgba(219,112,147,0.25)" />
              <stop offset="65%" stopColor="rgba(255,183,197,0.32)" />
              <stop offset="82%" stopColor="rgba(255,209,220,0.28)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="sakuraWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="18%" stopColor="rgba(219,112,147,0.2)" />
              <stop offset="45%" stopColor="rgba(255,183,197,0.25)" />
              <stop offset="72%" stopColor="rgba(255,209,220,0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="sakuraGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,58 C150,28 300,52 450,33 C600,18 750,48 840,32 C980,16 1100,44 1200,28 L1200,80 L0,80 Z"
            fill="url(#sakuraWave1)"
            filter="url(#sakuraGlow)"
            opacity="0.6"
          />
          <path
            d="M0,66 C150,40 300,58 450,45 C600,32 750,55 840,42 C1050,28 1150,50 1200,38 L1200,80 L0,80 Z"
            fill="url(#sakuraWave2)"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Bottom ambient glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '140px',
          background:
            'linear-gradient(to top, rgba(255,183,197,0.08) 0%, rgba(255,240,243,0.04) 50%, transparent 100%)',
        }}
      />
    </div>
  );
}
