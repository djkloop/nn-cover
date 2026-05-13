import { useCoverStore } from '@/store/coverStore';
import HeadlinePanel from './HeadlinePanel';
import { Star, User, Building2 } from 'lucide-react';

const NEON_BLUE = '#00b4db';
const NEON_PURPLE = '#8b5cf6';
const ELECTRIC_YELLOW = '#facc15';
const HOT_PINK = '#ec4899';
const NIGHT_TOP = '#0a0e17';
const NIGHT_BOTTOM = '#060a10';

const SKYLINE_HEIGHTS = [28, 45, 32, 60, 38, 72, 50, 42, 68, 55, 36, 80, 48, 62, 40, 75, 52, 34, 66, 44, 58, 30, 70, 46, 54, 38, 64, 50];
const WINDOW_POSITIONS = [
  { x: 3, y: 78, w: 2, h: 2 }, { x: 7, y: 82, w: 2, h: 2 }, { x: 12, y: 76, w: 2, h: 2 },
  { x: 18, y: 84, w: 2, h: 2 }, { x: 24, y: 79, w: 2, h: 2 }, { x: 29, y: 86, w: 2, h: 2 },
  { x: 35, y: 77, w: 2, h: 2 }, { x: 41, y: 83, w: 2, h: 2 }, { x: 47, y: 74, w: 2, h: 2 },
  { x: 53, y: 81, w: 2, h: 2 }, { x: 58, y: 87, w: 2, h: 2 }, { x: 64, y: 75, w: 2, h: 2 },
  { x: 69, y: 85, w: 2, h: 2 }, { x: 75, y: 78, w: 2, h: 2 }, { x: 81, y: 88, w: 2, h: 2 },
  { x: 86, y: 73, w: 2, h: 2 }, { x: 91, y: 82, w: 2, h: 2 }, { x: 96, y: 86, w: 2, h: 2 },
];

export default function StyleNeonCity() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(10,14,23,0.9)', border: 'rgba(0,180,219,0.35)', accent: '#00b4db', accentLight: '#facc15',
    titleColor: '#ffffff', subtitleColor: '#90e0ef', metaBg: 'rgba(0,180,219,0.1)',
    tagBg: 'rgba(0,180,219,0.12)', tagText: '#00b4db', starColor: '#facc15',
    rankBg: 'linear-gradient(135deg,#facc15,#00b4db)', rankText: '#000', descColor: 'rgba(144,224,239,0.6)'
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
        background: `linear-gradient(180deg, ${NIGHT_TOP} 0%, #080c14 55%, ${NIGHT_BOTTOM} 100%)`,
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Night sky gradient base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 20% 10%, rgba(0,180,219,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 100% 50% at 80% 15%, rgba(139,92,246,0.05) 0%, transparent 55%),
            linear-gradient(180deg, ${NIGHT_TOP} 0%, #08101c 40%, ${NIGHT_BOTTOM} 100%)
          `,
        }}
      />

      {/* Neon ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '-5%',
            left: '15%',
            width: '450px',
            height: '350px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(0,180,219,0.1) 0%, transparent 65%)`,
            filter: 'blur(50px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '18%',
            width: '380px',
            height: '320px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 60%)`,
            filter: 'blur(45px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '25%',
            width: '500px',
            height: '280px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 60%)`,
            filter: 'blur(55px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '18%',
            right: '22%',
            width: '350px',
            height: '250px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(250,204,21,0.04) 0%, transparent 55%)`,
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Distant city glow haze */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '14%',
          left: 0,
          right: 0,
          height: '120px',
          background: `linear-gradient(to top, rgba(0,180,219,0.03), transparent)`,
        }}
      />

      {/* Window lights on buildings */}
      <div className="absolute inset-0 pointer-events-none">
        {WINDOW_POSITIONS.map((w, i) => (
          <div
            key={i}
            className="absolute rounded-sm"
            style={{
              left: `${w.x}%`,
              bottom: `${w.y - 14}%`,
              width: `${w.x * 0.16 + 3}px`,
              height: `${w.h}px`,
              background: i % 3 === 0 ? '#ffd93d' : i % 3 === 1 ? '#ffe4a0' : '#fff3cc',
              opacity: 0.15 + (i % 5) * 0.06,
              boxShadow: `0 0 ${4 + (i % 4) * 2}px rgba(255,217,61,${0.08 + (i % 3) * 0.05})`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full w-full" style={{ padding: '38px 48px 32px 52px' }}>

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between" style={{ width: '43%', paddingRight: '26px' }}>
          <div>
            {/* Top label */}
            <div className="flex items-center gap-2 mb-3">
              <Building2 style={{ width: '18px', height: '18px', color: NEON_BLUE }} />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: `${NEON_BLUE}`,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Neon District
              </span>
            </div>

            {/* Main title with neon glow */}
            <h1
              style={{
                fontSize: '54px',
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                textShadow: `
                  0 0 10px ${NEON_BLUE},
                  0 0 25px ${NEON_BLUE},
                  0 0 50px rgba(0,180,219,0.3)
                `,
              }}
            >
              {state.mainTitlePrefix}
              {' '}
              <span
                style={{
                  color: HOT_PINK,
                  textShadow: `
                    0 0 10px ${HOT_PINK},
                    0 0 25px ${HOT_PINK},
                    0 0 45px rgba(236,72,153,0.35)
                  `,
                }}
              >
                {state.mainTitleSuffix}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '19px',
                fontWeight: 500,
                color: NEON_PURPLE,
                letterSpacing: '0.04em',
                marginTop: '8px',
                textShadow: `0 0 12px ${NEON_PURPLE}, 0 0 24px rgba(139,92,246,0.25)`,
              }}
            >
              {state.subtitle}
            </p>

            {/* Neon gradient decorative line */}
            <div style={{ marginTop: '14px', position: 'relative' }}>
              <div
                style={{
                  width: '180px',
                  height: '3px',
                  borderRadius: '2px',
                  background: `linear-gradient(90deg, ${NEON_BLUE}, ${HOT_PINK}, ${ELECTRIC_YELLOW}, ${NEON_PURPLE}, ${NEON_BLUE})`,
                  backgroundSize: '300% 100%',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '2px',
                    boxShadow: `
                      0 0 8px ${NEON_BLUE},
                      0 0 16px ${HOT_PINK},
                      0 0 24px rgba(250,204,21,0.4)
                    `,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature tags - neon signboard style */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '26px' }}>
            {state.features.map((feature, idx) => {
              const colors = [NEON_BLUE, HOT_PINK, ELECTRIC_YELLOW, NEON_PURPLE];
              const c = colors[idx % colors.length];
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '9px 13px',
                    borderRadius: '6px',
                    background: `${c}08`,
                    border: `1px solid ${c}25`,
                    boxShadow: `inset 0 0 20px ${c}08, 0 0 12px ${c}12`,
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: c,
                      boxShadow: `0 0 6px ${c}, 0 0 12px ${c}66`,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#ffffffee',
                      letterSpacing: '0.04em',
                      textShadow: `0 0 6px ${c}55`,
                      flex: 1,
                    }}
                  >
                    {feature.title}
                  </span>
                  <span
                    style={{
                      fontSize: '9.5px',
                      color: `${c}88`,
                      letterSpacing: '0.06em',
                    }}
                  >
                    {feature.desc}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Author info */}
          <div style={{ marginTop: 'auto', paddingTop: '18px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 15px',
                borderRadius: '8px',
                background: 'rgba(0,0,0,0.5)',
                border: `1px solid ${NEON_BLUE}22`,
                backdropFilter: 'blur(8px)',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: NEON_BLUE }} />
              <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.4)' }}>CREATOR</span>
              <span style={{ fontSize: '11.5px', color: '#ffffffdd', fontWeight: 600 }}>{state.author}</span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - LED Billboard / Holographic Project Card */}
        <div className="flex-1 flex items-center justify-center" style={{ paddingLeft: '16px' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div style={{ position: 'relative', width: '100%', maxWidth: '540px' }}>
            {/* Outer neon glow layers */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '18px',
                background: `linear-gradient(135deg, ${NEON_BLUE}33, ${HOT_PINK}33, ${NEON_PURPLE}33, ${ELECTRIC_YELLOW}22)`,
                filter: 'blur(18px)',
                opacity: 0.65,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '14px',
                background: `linear-gradient(135deg, ${NEON_BLUE}, ${HOT_PINK}, ${NEON_PURPLE})`,
                filter: 'blur(4px)',
                opacity: 0.45,
              }}
            />

            {/* Card body - LED billboard style */}
            <div
              style={{
                position: 'relative',
                borderRadius: '14px',
                padding: '22px 24px',
                background: 'linear-gradient(170deg, rgba(10,14,23,0.94), rgba(6,10,16,0.97))',
                border: '1.5px solid',
                borderColor: `${NEON_BLUE}55`,
                boxShadow: `
                  0 0 30px rgba(0,180,219,0.12),
                  0 0 60px rgba(236,72,153,0.07),
                  0 0 90px rgba(139,92,246,0.05),
                  inset 0 0 40px rgba(0,0,0,0.6)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Gradient border overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '14px',
                  padding: '1.5px',
                  background: `linear-gradient(135deg, ${NEON_BLUE}77, ${HOT_PINK}66, ${NEON_PURPLE}66, ${ELECTRIC_YELLOW}44, ${NEON_BLUE}77)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                }}
              />

              {/* Top LED strip accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${NEON_BLUE}, ${HOT_PINK}, ${ELECTRIC_YELLOW}, ${NEON_PURPLE}, ${NEON_BLUE}, transparent)`,
                  boxShadow: `0 0 10px ${NEON_BLUE}, 0 0 20px ${HOT_PINK}44`,
                }}
              />

              {/* Card header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                  paddingBottom: '10px',
                  borderBottom: `1px solid ${NEON_BLUE}18`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '7px',
                      background: `linear-gradient(135deg, ${NEON_BLUE}22, ${HOT_PINK}22)`,
                      border: `1px solid ${NEON_BLUE}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 10px ${NEON_BLUE}22`,
                    }}
                  >
                    <Building2 style={{ width: '15px', height: '15px', color: ELECTRIC_YELLOW }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
                      GITHUB{' '}
                      <span style={{ color: NEON_BLUE, textShadow: `0 0 8px ${NEON_BLUE}` }}>TRENDING</span>
                    </div>
                    <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', marginTop: '1px' }}>
                      FLOOR #{state.rank} / {state.date}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: `${ELECTRIC_YELLOW}10`,
                    border: `1px solid ${ELECTRIC_YELLOW}30`,
                    fontSize: '9.5px',
                    fontWeight: 700,
                    color: ELECTRIC_YELLOW,
                    letterSpacing: '0.08em',
                    textShadow: `0 0 6px ${ELECTRIC_YELLOW}44`,
                  }}
                >
                  LIVE
                </div>
              </div>

              {/* Inner project content */}
              <div
                style={{
                  borderRadius: '10px',
                  padding: '15px 17px',
                  background: 'rgba(0,0,0,0.42)',
                  border: `1px solid ${NEON_PURPLE}18`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
                  {/* Rank badge - building floor number style */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      background: `linear-gradient(145deg, ${NEON_BLUE}20, ${NEON_PURPLE}15)`,
                      border: `1.5px solid ${NEON_BLUE}55`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '19px',
                      fontWeight: 900,
                      color: ELECTRIC_YELLOW,
                      flexShrink: 0,
                      textShadow: `0 0 8px ${ELECTRIC_YELLOW}, 0 0 16px rgba(250,204,21,0.4)`,
                      fontFamily: '"Inter", sans-serif',
                      boxShadow: `0 0 15px ${NEON_BLUE}22, inset 0 0 10px ${NEON_BLUE}10`,
                    }}
                  >
                    #{state.rank}
                  </div>

                  {/* Project details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 700,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>{projectOwner}</span>
                      <span style={{ color: 'rgba(255,255,255,0.25)' }}> / </span>
                      <span style={{ color: NEON_BLUE, textShadow: `0 0 8px ${NEON_BLUE}55` }}>{projectRepo || state.projectName}</span>
                    </div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(255,255,255,0.3)',
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

                    {/* Colorful tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                      {state.tags.filter(Boolean).map((tag, idx) => {
                        const tagColors = [
                          { bg: `${NEON_BLUE}14`, border: `${NEON_BLUE}28`, color: NEON_BLUE },
                          { bg: `${HOT_PINK}14`, border: `${HOT_PINK}28`, color: HOT_PINK },
                          { bg: `${ELECTRIC_YELLOW}14`, border: `${ELECTRIC_YELLOW}28`, color: ELECTRIC_YELLOW },
                          { bg: `${NEON_PURPLE}14`, border: `${NEON_PURPLE}28`, color: NEON_PURPLE },
                        ];
                        const tc = tagColors[idx % tagColors.length];
                        return (
                          <span
                            key={idx}
                            style={{
                              padding: '2.5px 8px',
                              borderRadius: '4px',
                              fontSize: '9px',
                              fontWeight: 600,
                              color: tc.color,
                              background: tc.bg,
                              border: `1px solid ${tc.border}`,
                              letterSpacing: '0.06em',
                              textShadow: `0 0 4px ${tc.color}33`,
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Stars column - electric star */}
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
                        color: ELECTRIC_YELLOW,
                        fill: 'none',
                        strokeWidth: '1.5px',
                        filter: `drop-shadow(0 0 6px ${ELECTRIC_YELLOW}) drop-shadow(0 0 14px rgba(250,204,21,0.45))`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#ffffff',
                        textShadow: `0 0 8px ${ELECTRIC_YELLOW}`,
                        fontFamily: '"Inter", sans-serif',
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '8.5px',
                        color: 'rgba(255,255,255,0.22)',
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
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: HOT_PINK,
                    boxShadow: `0 0 6px ${HOT_PINK}, 0 0 12px ${HOT_PINK}55`,
                  }}
                />
                <span style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
                  TREND:
                </span>
                <span
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: HOT_PINK,
                    textShadow: `0 0 6px ${HOT_PINK}55`,
                    letterSpacing: '0.05em',
                  }}
                >
                  {state.trendText.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* City Skyline Silhouette */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '16%' }}
      >
        {/* Buildings */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-end"
          style={{ height: '100%', paddingLeft: '0.5%', paddingRight: '0.5%' }}
        >
          {SKYLINE_HEIGHTS.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                minHeight: '8px',
                background: `linear-gradient(to top, #030508, #080c12${Math.random() > 0.85 ? ', #0a1020' : ''})`,
                margin: '0 0.15%',
                borderRadius: '1px 1px 0 0',
                position: 'relative',
              }}
            >
              {/* Antenna spire for tall buildings */}
              {(h > 60 || i % 7 === 0) && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1.5px',
                    height: '6px',
                    background: i % 2 === 0 ? `${HOT_PINK}44` : `${NEON_BLUE}33`,
                    boxShadow: i % 2 === 0 ? `0 0 4px ${HOT_PINK}33` : `0 0 4px ${NEON_BLUE}22`,
                  }}
                />
              )}
              {/* Building window lights */}
              {i % 3 !== 0 && (
                <>
                  <div
                    className="absolute rounded-sm"
                    style={{
                      left: '20%',
                      bottom: '15%',
                      width: '12%',
                      height: '8%',
                      background: '#ffd93d18',
                      boxShadow: '0 0 3px #ffd93d10',
                    }}
                  />
                  <div
                    className="absolute rounded-sm"
                    style={{
                      right: '18%',
                      bottom: '28%',
                      width: '10%',
                      height: '6%',
                      background: '#ffe4a015',
                    }}
                  />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Reflection effect below skyline */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: '-30px',
            height: '30px',
            background: 'linear-gradient(to bottom, rgba(0,180,219,0.04), transparent)',
            transform: 'scaleY(-1)',
            opacity: 0.3,
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
      </div>

      {/* Bottom ambient bar */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 48px 10px 48px',
          borderTop: `1px solid ${NEON_BLUE}12`,
          background: 'linear-gradient(to top, rgba(6,10,16,0.85), transparent)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Building2 style={{ width: '11px', height: '11px', color: NEON_BLUE, opacity: 0.6 }} />
          <span
            style={{
              fontSize: '9.5px',
              fontWeight: 700,
              color: NEON_BLUE,
              letterSpacing: '0.2em',
              textShadow: `0 0 8px ${NEON_BLUE}44`,
            }}
          >
            NEON CITY DISTRICT
          </span>
        </div>
        <div
          style={{
            fontSize: '8px',
            color: `${HOT_PINK}35`,
            letterSpacing: '0.15em',
          }}
        >
          CYBERPUNK BILLBOARD SYSTEM v3.0
        </div>
      </div>

    </div>
  );
}
