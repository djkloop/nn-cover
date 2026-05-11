import { useCoverStore } from '@/store/coverStore';
import HeadlinePanel from './HeadlinePanel';
import { Star, User, Leaf } from 'lucide-react';

export default function StyleMint() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(255,255,255,0.9)', border: 'rgba(45,212,191,0.3)', accent: '#0d9488', accentLight: '#2dd4bf',
    titleColor: '#134e4a', subtitleColor: '#5eead4', metaBg: 'rgba(45,212,191,0.1)',
    tagBg: 'rgba(45,212,191,0.12)', tagText: '#0f766e', starColor: '#2dd4bf',
    rankBg: 'linear-gradient(135deg,#2dd4bf,#0d9488)', rankText: '#fff', descColor: '#115e59'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background: 'linear-gradient(160deg, #f0fdfa 0%, #ccfbf1 45%, #ecfeff 100%)',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Multi-layer soft mint radial gradient halos */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            top: '-10%',
            right: '-5%',
            width: '520px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(153,246,228,0.5) 0%, rgba(153,246,228,0.15) 40%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: '-8%',
            left: '10%',
            width: '480px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(13,148,136,0.18) 0%, rgba(45,212,191,0.12) 40%, transparent 65%)',
            filter: 'blur(45px)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '25%',
            left: '20%',
            width: '380px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,246,214,0.35) 0%, rgba(99,246,214,0.08) 50%, transparent 70%)',
            filter: 'blur(55px)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '50%',
            right: '20%',
            width: '300px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(204,251,241,0.6) 0%, transparent 60%)',
            filter: 'blur(35px)',
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
              <Leaf
                style={{
                  width: '22px',
                  height: '22px',
                  color: '#2dd4bf',
                }}
              />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#14b8a6',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                Trending Fresh
              </span>
            </div>

            <h1
              style={{
                fontSize: '58px',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '10px',
                color: '#0f766e',
                fontFamily: '"Noto Sans SC", "Inter", sans-serif',
              }}
            >
              {state.mainTitlePrefix}{' '}
              <span
                style={{
                  color: '#0d9488',
                }}
              >
                {state.mainTitleSuffix}
              </span>
            </h1>

            <p
              style={{
                fontSize: '20px',
                fontWeight: 500,
                color: '#2dd4bf',
                letterSpacing: '0.02em',
                marginTop: '4px',
                marginBottom: '16px',
                fontFamily: '"Noto Sans SC", sans-serif',
              }}
            >
              {state.subtitle}
            </p>

            {/* Mint gradient decorative line */}
            <div
              style={{
                width: '120px',
                height: '3px',
                borderRadius: '2px',
                background:
                  'linear-gradient(90deg, #2dd4bf, #99f6e4, #0d9488, #99f6e4)',
                backgroundSize: '200% 100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '2px',
                  boxShadow:
                    '0 0 10px rgba(45,212,191,0.4), 0 0 20px rgba(45,212,191,0.2)',
                }}
              />
            </div>
          </div>

          {/* Features - rounded pill horizontal */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '9px',
              marginTop: '28px',
            }}
          >
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background:
                    'linear-gradient(135deg, rgba(45,212,191,0.18), rgba(153,246,228,0.12))',
                  border: '1px solid rgba(45,212,191,0.25)',
                }}
              >
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: '#0f766e',
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

          {/* Author - clean fresh */}
          <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 15px',
                borderRadius: '999px',
                background: 'rgba(45,212,191,0.08)',
                border: '1px solid rgba(45,212,191,0.15)',
              }}
            >
              <User
                style={{ width: '13px', height: '13px', color: '#2dd4bf' }}
              />
              <span
                style={{
                  fontSize: '12.5px',
                  color: '#5eead4',
                  fontFamily: '"Noto Sans SC", sans-serif',
                }}
              >
                作者：
                <span
                  style={{ color: '#0f766e', fontWeight: 500 }}
                >
                  {state.author}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Project Card */}
        <div
          className="flex-1 flex items-center"
          style={{ paddingLeft: '18px' }}
        >
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
            }}
          >
            {/* Outer soft glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '24px',
                background:
                  'linear-gradient(135deg, rgba(45,212,191,0.2), rgba(153,246,228,0.15))',
                filter: 'blur(20px)',
                opacity: 0.7,
              }}
            />

            {/* Main card body */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                padding: '26px 28px',
                background:
                  'linear-gradient(170deg, #ffffff 0%, #fdfdfd 50%, #fafcfc 100%)',
                border: '1px solid rgba(45,212,191,0.18)',
                boxShadow:
                  '0 4px 30px rgba(13,148,136,0.08), 0 1px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.8) inset',
                overflow: 'hidden',
              }}
            >
              {/* Top mint highlight line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '6%',
                  right: '6%',
                  height: '2.5px',
                  borderRadius: '0 0 4px 4px',
                  background:
                    'linear-gradient(90deg, transparent, #2dd4bf, #99f6e4, #0d9488, #99f6e4, #2dd4bf, transparent)',
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
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background:
                        'linear-gradient(135deg, rgba(45,212,191,0.2), rgba(153,246,228,0.15))',
                      border: '1px solid rgba(45,212,191,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#0d9488"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 700,
                        color: '#134e4a',
                        lineHeight: 1.2,
                        fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                      }}
                    >
                      GitHub{' '}
                      <span
                        style={{
                          color: '#0d9488',
                        }}
                      >
                        Trending
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: '#5eead4',
                        lineHeight: 1.2,
                        marginTop: '2px',
                        fontFamily: '"Noto Sans SC", sans-serif',
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
                    background: 'rgba(45,212,191,0.08)',
                    border: '1px solid rgba(45,212,191,0.15)',
                  }}
                >
                  <Leaf
                    style={{
                      width: '12px',
                      height: '12px',
                      color: '#2dd4bf',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: '#5eead4',
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
                  padding: '18px 20px',
                  background:
                    'linear-gradient(165deg, rgba(240,253,250,0.9), rgba(204,251,241,0.5))',
                  border: '1px solid rgba(45,212,191,0.15)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  {/* Rank badge - mint filled rounded square */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background:
                        'linear-gradient(145deg, #2dd4bf, #14b8a6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#ffffff',
                      flexShrink: 0,
                      boxShadow:
                        '0 4px 14px rgba(45,212,191,0.35), 0 0 0 1px rgba(255,255,255,0.2) inset',
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
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.2), transparent 50%)',
                      }}
                    />
                  </div>

                  {/* Project details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '15.5px',
                        fontWeight: 700,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        lineHeight: 1.3,
                        fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                      }}
                    >
                      <span style={{ color: '#134e4a' }}>{projectOwner}</span>
                      <span style={{ color: '#99f6e4', margin: '0 4px' }}>
                        /
                      </span>
                      <span style={{ color: '#0f766e' }}>
                        {projectRepo || state.projectName}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '11.5px',
                        color: '#5eead4',
                        lineHeight: 1.6,
                        marginTop: '6px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {state.projectDesc}
                    </p>

                    {/* Tags as small mint pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginTop: '12px',
                      }}
                    >
                      {state.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '3px 10px',
                            borderRadius: '999px',
                            fontSize: '10.5px',
                            fontWeight: 500,
                            color: '#0f766e',
                            background:
                              'rgba(45,212,191,0.12)',
                            border: '1px solid rgba(45,212,191,0.2)',
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stars column - mint star */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px',
                      flexShrink: 0,
                      minWidth: '54px',
                    }}
                  >
                    <Star
                      style={{
                        width: '28px',
                        height: '28px',
                        color: '#2dd4bf',
                        fill: 'rgba(45,212,191,0.2)',
                        strokeWidth: '1.5px',
                        filter:
                          'drop-shadow(0 0 6px rgba(45,212,191,0.5)) drop-shadow(0 0 12px rgba(45,212,191,0.2))',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#0f766e',
                        fontFamily: '"Inter", sans-serif',
                        lineHeight: 1.15,
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '9.5px',
                        color: '#5eead4',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.02em',
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
                  marginTop: '14px',
                  paddingLeft: '2px',
                }}
              >
                <Leaf
                  style={{
                    width: '14px',
                    height: '14px',
                    color: '#5eead4',
                  }}
                />
                <span
                  style={{
                    fontSize: '11.5px',
                    color: '#5eead4',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  热度趋势：
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#0d9488',
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

      {/* Bottom soft mint gradient halo */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '140px',
          background:
            'linear-gradient(to top, rgba(153,246,228,0.25), rgba(45,212,191,0.1), transparent)',
        }}
      />
    </div>
  );
}
