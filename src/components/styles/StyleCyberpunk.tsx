import { useCoverStore } from '@/store/coverStore';
import { Star, User, Cpu, Wifi, Zap } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

const NEON_PINK = '#ff0080';
const NEON_CYAN = '#00ffff';
const BG_DARK = '#0a0a0f';

const BARCODE_PINK = [3, 6, 2, 8, 4, 10, 3, 7, 2, 5, 3, 8, 2];
const BARCODE_CYAN = [5, 2, 7, 3, 9, 2, 6, 4, 8, 2, 5, 3];
const BARCODE_OPACITY_PINK = [0.28, 0.35, 0.22, 0.4, 0.26, 0.38, 0.24, 0.36, 0.2, 0.32, 0.27, 0.34, 0.23];
const BARCODE_OPACITY_CYAN = [0.22, 0.18, 0.28, 0.2, 0.32, 0.16, 0.26, 0.22, 0.3, 0.18, 0.24, 0.2];

export default function StyleCyberpunk() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(10,10,18,0.95)', border: 'rgba(255,0,128,0.3)', accent: '#ff0080', accentLight: '#00ffff',
    titleColor: '#ffffff', subtitleColor: 'rgba(0,255,255,0.6)', metaBg: 'rgba(255,0,128,0.1)',
    tagBg: 'rgba(255,0,128,0.11)', tagText: '#ff0080', starColor: '#ff0080',
    rankBg: 'rgba(255,0,128,0.2)', rankText: '#ff0080', descColor: 'rgba(255,255,255,0.35)'
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
        background: BG_DARK,
        fontFamily: '"JetBrains Mono", "Fira Code", "Noto Sans SC", monospace, sans-serif',
      }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(255,0,128,0.12) 0%, transparent 60%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.12) 2px,
            rgba(0,0,0,0.12) 4px
          )`,
        }}
      />

      {/* Corner frames */}
      <div className="absolute pointer-events-none" style={{ top: '16px', left: '16px' }}>
        <div style={{ width: '48px', height: '2px', background: NEON_CYAN }} />
        <div style={{ width: '2px', height: '48px', background: NEON_CYAN, marginTop: '-2px' }} />
      </div>
      <div className="absolute pointer-events-none" style={{ top: '16px', right: '16px' }}>
        <div style={{ width: '48px', height: '2px', background: NEON_PINK }} />
        <div style={{ width: '2px', height: '48px', background: NEON_PINK, marginTop: '-2px', marginLeft: '46px' }} />
      </div>
      <div className="absolute pointer-events-none" style={{ bottom: '16px', left: '16px' }}>
        <div style={{ width: '48px', height: '2px', background: NEON_PINK }} />
        <div style={{ width: '2px', height: '48px', background: NEON_PINK, marginTop: '2px' }} />
      </div>
      <div className="absolute pointer-events-none" style={{ bottom: '16px', right: '16px' }}>
        <div style={{ width: '48px', height: '2px', background: NEON_CYAN }} />
        <div style={{ width: '2px', height: '48px', background: NEON_CYAN, marginTop: '2px', marginLeft: '46px' }} />
      </div>

      {/* Crosshairs */}
      <svg className="absolute pointer-events-none" style={{ top: '28px', left: '72px', width: '18px', height: '18px' }}>
        <line x1="9" y1="0" x2="9" y2="18" stroke={NEON_CYAN} strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="9" x2="18" y2="9" stroke={NEON_CYAN} strokeWidth="1" opacity="0.5" />
        <circle cx="9" cy="9" r="3" fill="none" stroke={NEON_CYAN} strokeWidth="0.7" opacity="0.5" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ bottom: '28px', right: '72px', width: '18px', height: '18px' }}>
        <line x1="9" y1="0" x2="9" y2="18" stroke={NEON_PINK} strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="9" x2="18" y2="9" stroke={NEON_PINK} strokeWidth="1" opacity="0.5" />
        <circle cx="9" cy="9" r="3" fill="none" stroke={NEON_PINK} strokeWidth="0.7" opacity="0.5" />
      </svg>

      {/* Barcode decorations - fixed: no Math.random() */}
      <div className="absolute pointer-events-none flex gap-[2px]" style={{ top: '20px', right: '76px' }}>
        {BARCODE_PINK.map((w, i) => (
          <div key={i} style={{ width: `${w}px`, height: '14px', background: `rgba(255,0,128,${BARCODE_OPACITY_PINK[i]})` }} />
        ))}
      </div>
      <div className="absolute pointer-events-none flex gap-[2px]" style={{ bottom: '22px', left: '76px' }}>
        {BARCODE_CYAN.map((w, i) => (
          <div key={i} style={{ width: `${w}px`, height: '10px', background: `rgba(0,255,255,${BARCODE_OPACITY_CYAN[i]})` }} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full w-full" style={{ padding: '36px 44px 30px 48px' }}>

        {/* Left section */}
        <div className="flex flex-col justify-between" style={{ width: '42%', paddingRight: '24px' }}>

          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.25em',
                color: NEON_CYAN,
                marginBottom: '8px',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}
            >
              {'// TRENDING_MODULE'}
            </div>

            <h1
              style={{
                position: 'relative',
                fontSize: '56px',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                textShadow: `
                  0 0 10px ${NEON_PINK},
                  0 0 30px ${NEON_PINK},
                  0 0 50px rgba(255,0,128,0.45)
                `,
                display: 'inline-block',
              }}
            >
              {state.mainTitlePrefix}
              <span
                style={{
                  color: NEON_PINK,
                  marginLeft: '12px',
                  display: 'inline-block',
              }}
              >
                {state.mainTitleSuffix}
              </span>
            </h1>

            <p
              style={{
                fontSize: '18px',
                fontWeight: 500,
                color: NEON_CYAN,
                letterSpacing: '0.08em',
                marginTop: '10px',
                textShadow: `0 0 12px ${NEON_CYAN}, 0 0 24px rgba(0,255,255,0.35)`,
              }}
            >
              {'> '}{state.subtitle}
            </p>

            <div
              style={{
                width: '100%',
                height: '2px',
                marginTop: '14px',
                background: `linear-gradient(90deg, ${NEON_PINK}, ${NEON_CYAN}, transparent)`,
              }}
            />
          </div>

          {/* HUD feature panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '28px' }}>
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 12px',
                  background: 'rgba(0,255,255,0.03)',
                  borderLeft: `2px solid ${idx % 2 === 0 ? NEON_CYAN : NEON_PINK}`,
                  borderRadius: '0 4px 4px 0',
                }}
              >
                <Cpu style={{ width: '14px', height: '14px', color: idx % 2 === 0 ? NEON_CYAN : NEON_PINK, flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.88)',
                    letterSpacing: '0.04em',
                    flex: 1,
                  }}
                >
                  [{feature.title}]
                </span>
                <span
                  style={{
                    fontSize: '9.5px',
                    color: 'rgba(255,255,255,0.32)',
                    fontFamily: '"JetBrains Mono", monospace',
                  }}
                >
                  // {feature.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Author info */}
          <div style={{ marginTop: 'auto', paddingTop: '18px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                background: 'rgba(0,0,0,0.5)',
                border: `1px solid ${NEON_CYAN}33`,
                borderRadius: '4px',
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: NEON_CYAN }} />
              <span style={{ fontSize: '11px', color: 'rgba(0,255,255,0.55)' }}>{'$'} </span>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>author</span>
              <span style={{ fontSize: '11px', color: 'rgba(255,0,128,0.55)' }}> = </span>
              <span style={{ fontSize: '11px', color: '#fff', fontWeight: 600 }}>"{state.author}"</span>
              <span style={{ fontSize: '11px', color: 'rgba(0,255,255,0.4)' }}>{'; // OK'}</span>
            </div>
          </div>
        </div>

        {/* Right section - project card */}
        <div className="flex-1 flex items-center justify-center" style={{ paddingLeft: '16px' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
            }}
          >
            {/* Outer glow layers */}
            <div
              style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '18px',
                background: `linear-gradient(135deg, ${NEON_PINK}44, ${NEON_CYAN}44, ${NEON_PINK}33)`,
                filter: 'blur(14px)',
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '14px',
                background: `linear-gradient(135deg, ${NEON_PINK}, ${NEON_CYAN}, ${NEON_PINK})`,
                filter: 'blur(3px)',
                opacity: 0.5,
              }}
            />

            {/* Card body - fixed: use pseudo-element approach via wrapper instead of border-image */}
            <div
              style={{
                position: 'relative',
                borderRadius: '14px',
                padding: '22px 22px',
                background: 'linear-gradient(170deg, rgba(10,10,18,0.95), rgba(5,5,10,0.98))',
                border: '1.5px solid',
                borderColor: NEON_PINK,
                boxShadow: `
                  0 0 30px rgba(255,0,128,0.15),
                  0 0 60px rgba(0,255,255,0.08),
                  inset 0 0 30px rgba(0,0,0,0.5)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Gradient border overlay via absolute pseudo simulation */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '14px',
                  padding: '1.5px',
                  background: `linear-gradient(135deg, ${NEON_PINK}88, ${NEON_CYAN}88, ${NEON_PINK}66)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                }}
              />

              {/* Card header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  paddingBottom: '10px',
                  borderBottom: `1px solid ${NEON_CYAN}22`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: `linear-gradient(135deg, ${NEON_PINK}33, ${NEON_CYAN}33)`,
                      border: `1px solid ${NEON_PINK}55`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Cpu style={{ width: '14px', height: '14px', color: NEON_CYAN }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
                      GITHUB<span style={{ color: NEON_PINK }}>_</span>TRENDING
                    </div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginTop: '1px' }}>
                      {'<RANK:' + state.rank + '/>'}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: '4px 10px',
                    borderRadius: '3px',
                    background: `${NEON_CYAN}11`,
                    border: `1px solid ${NEON_CYAN}33`,
                    fontSize: '9.5px',
                    color: NEON_CYAN,
                    letterSpacing: '0.08em',
                    fontFamily: '"JetBrains Mono", monospace',
                  }}
                >
                  {state.date}
                </div>
              </div>

              {/* Inner project content */}
              <div
                style={{
                  borderRadius: '10px',
                  padding: '15px 16px',
                  background: 'rgba(0,0,0,0.45)',
                  border: `1px solid ${NEON_PINK}22`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: `linear-gradient(135deg, ${NEON_PINK}22, ${NEON_CYAN}22)`,
                      border: `1.5px solid ${NEON_PINK}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontWeight: 900,
                      color: NEON_PINK,
                      flexShrink: 0,
                      textShadow: `0 0 10px ${NEON_PINK}, 0 0 20px rgba(255,0,128,0.5)`,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    #{state.rank}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span style={{ color: 'rgba(255,255,255,0.75)' }}>{projectOwner}</span>
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}> / </span>
                      <span style={{ color: NEON_CYAN, textShadow: `0 0 8px ${NEON_CYAN}66` }}>{projectRepo || state.projectName}</span>
                    </div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(255,255,255,0.32)',
                        lineHeight: 1.55,
                        marginTop: '5px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {state.projectDesc}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                      {state.tags.filter(Boolean).map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '2px 8px',
                            borderRadius: '3px',
                            fontSize: '9px',
                            fontWeight: 600,
                            color: idx % 2 === 0 ? NEON_CYAN : NEON_PINK,
                            background: idx % 2 === 0 ? `${NEON_CYAN}11` : `${NEON_PINK}11`,
                            border: `1px solid ${idx % 2 === 0 ? `${NEON_CYAN}25` : `${NEON_PINK}25`}`,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px',
                      flexShrink: 0,
                      minWidth: '52px',
                    }}
                  >
                    <Star
                      style={{
                        width: '26px',
                        height: '26px',
                        color: NEON_PINK,
                        fill: 'none',
                        strokeWidth: '1.5px',
                        filter: `drop-shadow(0 0 8px ${NEON_PINK}) drop-shadow(0 0 16px rgba(255,0,128,0.4))`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#fff',
                        textShadow: `0 0 8px ${NEON_PINK}`,
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '8.5px',
                        color: 'rgba(255,255,255,0.25)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
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
                  marginTop: '12px',
                  paddingLeft: '2px',
                }}
              >
                <Zap style={{ width: '13px', height: '13px', color: NEON_CYAN }} />
                <span style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.36)', letterSpacing: '0.05em' }}>
                  TRND:{' '}
                </span>
                <span
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: NEON_CYAN,
                    textShadow: `0 0 6px ${NEON_CYAN}55`,
                    letterSpacing: '0.05em',
                  }}
                >
                  [{state.trendText.toUpperCase()}]
                </span>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 48px 10px 48px',
          borderTop: `1px solid ${NEON_CYAN}18`,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Wifi style={{ width: '11px', height: '11px', color: NEON_CYAN, opacity: 0.7 }} />
          <span
            style={{
              fontSize: '9.5px',
              fontWeight: 700,
              color: NEON_CYAN,
              letterSpacing: '0.2em',
              textShadow: `0 0 8px ${NEON_CYAN}55`,
            }}
          >
            [SYSTEM READY]
          </span>
          <span style={{ fontSize: '9px', color: 'rgba(0,255,255,0.3)', letterSpacing: '0.1em' }}>
            v2.077
          </span>
        </div>
        <div
          style={{
            fontSize: '8px',
            color: 'rgba(255,0,128,0.35)',
            letterSpacing: '0.15em',
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          {'// CYBERPUNK_RENDER_ENGINE :: ONLINE'}
        </div>
      </div>

    </div>
  );
}
