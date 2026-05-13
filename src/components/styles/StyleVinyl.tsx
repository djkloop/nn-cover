import { useCoverStore } from '@/store/coverStore';
import { Star, User, Disc3, Music } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

const VINYL_BLACK = '#111111';
const SILVER = '#c0c0c0';
const WARM_BROWN = '#8B4513';
const VINYL_RED = '#8B0000';
const CREAM = '#f5f0e6';

export default function StyleVinyl() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(245,240,230,0.95)', border: 'rgba(139,69,19,0.3)', accent: '#8B4513', accentLight: '#c41e3a',
    titleColor: '#1a1a1a', subtitleColor: '#8B4513', metaBg: 'rgba(139,69,19,0.08)',
    tagBg: 'rgba(139,69,19,0.1)', tagText: '#8B4513', starColor: '#c41e3a',
    rankBg: 'linear-gradient(135deg,#c41e3a,#8B4513)', rankText: '#fff', descColor: '#5c4033'
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
        background: `radial-gradient(ellipse at center, #1a1512 0%, ${VINYL_BLACK} 60%, #0a0806 100%)`,
        fontFamily: '"Georgia", "Times New Roman", "Noto Serif SC", serif',
      }}
    >
      {/* Vinyl record texture overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-radial-gradient(
              circle at center,
              transparent 0px,
              rgba(255,255,255,0.02) 0.5px,
              transparent 1px
            )`,
          }}
        />

        {/* Ambient warm glow - top left */}
        <div
          className="absolute"
          style={{
            top: '-10%',
            left: '-5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(139,69,19,0.15) 0%, transparent 60%)`,
          }}
        />
        {/* Ambient red glow - right side */}
        <div
          className="absolute"
          style={{
            top: '20%',
            right: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(139,0,0,0.12) 0%, transparent 55%)`,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full w-full" style={{ padding: '36px 44px 30px 48px' }}>

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between" style={{ width: '44%', paddingRight: '24px' }}>
          {/* Title block */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px',
              }}
            >
              <Music style={{ width: '18px', height: '18px', color: VINYL_RED }} />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  color: `${SILVER}99`,
                  textTransform: 'uppercase',
                  fontFamily: '"Inter", "Helvetica Neue", sans-serif',
                }}
              >
                Now Playing
              </span>
            </div>

            <h1
              style={{
                fontSize: '52px',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                marginBottom: '6px',
                fontFamily: '"Georgia", "Noto Serif SC", serif',
              }}
            >
              <span style={{ color: CREAM }}>{state.mainTitlePrefix}</span>
            </h1>
            <h1
              style={{
                fontSize: '52px',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                marginBottom: '10px',
                fontFamily: '"Georgia", "Noto Serif SC", serif',
              }}
            >
              <span style={{ color: VINYL_RED }}>{state.mainTitleSuffix}</span>
            </h1>

            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: `${SILVER}88`,
                fontStyle: 'italic',
                letterSpacing: '0.03em',
                marginBottom: '14px',
                lineHeight: 1.4,
              }}
            >
              {state.subtitle}
            </p>

            {/* Metallic decorative line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '4px',
              }}
            >
              <div
                style={{
                  flex: 1,
                  maxWidth: '100px',
                  height: '1.5px',
                  background: `linear-gradient(90deg, ${WARM_BROWN}, ${SILVER}66, ${WARM_BROWN})`,
                }}
              />
              <Disc3 style={{ width: '12px', height: '12px', color: `${SILVER}55` }} />
              <div
                style={{
                  flex: 1,
                  maxWidth: '60px',
                  height: '1.5px',
                  background: `linear-gradient(90deg, ${SILVER}66, ${WARM_BROWN})`,
                }}
              />
            </div>
          </div>

          {/* Tracklist features */}
          <div style={{ marginTop: '24px' }}>
            <div
              style={{
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: `${SILVER}55`,
                textTransform: 'uppercase',
                marginBottom: '10px',
                fontFamily: '"Inter", "Helvetica Neue", sans-serif',
              }}
            >
              Tracklist
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {state.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '7px 10px',
                    borderRadius: '3px',
                    background: 'rgba(192,192,192,0.04)',
                    borderLeft: `2.5px solid ${idx % 2 === 0 ? WARM_BROWN : VINYL_RED}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: `${SILVER}50`,
                      minWidth: '24px',
                      textAlign: 'right',
                      fontFamily: '"Inter", "Helvetica Neue", monospace',
                    }}
                  >
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: CREAM,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {feature.title}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        color: `${SILVER}55`,
                        marginLeft: '8px',
                        fontStyle: 'italic',
                      }}
                    >
                      — {feature.desc}
                    </span>
                  </div>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: idx % 2 === 0 ? `${VINYL_RED}99` : `${WARM_BROWN}aa`,
                      flexShrink: 0,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Author info */}
          <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '6px 13px',
                borderRadius: '2px',
                background: 'rgba(192,192,192,0.05)',
                border: `1px solid ${SILVER}20`,
              }}
            >
              <User style={{ width: '12px', height: '12px', color: `${SILVER}77` }} />
              <span
                style={{
                  fontSize: '11px',
                  color: `${SILVER}66`,
                  fontStyle: 'italic',
                  fontFamily: '"Georgia", serif',
                }}
              >
                Curated by{' '}
                <span style={{ color: CREAM, fontWeight: 600, fontStyle: 'normal' }}>{state.author}</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Album Cover / Now Playing Card */}
        <div className="flex-1 flex items-center" style={{ paddingLeft: '12px' }}>
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
            {/* Outer glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '20px',
                background: `linear-gradient(135deg, rgba(139,69,19,0.25) 0%, rgba(139,0,0,0.18) 50%, rgba(139,69,19,0.2) 100%)`,
                filter: 'blur(16px)',
                opacity: 0.65,
              }}
            />

            {/* Card body - album cover style */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '24px 24px',
                background: `linear-gradient(170deg, rgba(26,21,18,0.96) 0%, rgba(17,17,17,0.98) 50%, rgba(10,8,6,0.98) 100%)`,
                border: `1.5px solid ${SILVER}25`,
                boxShadow: `
                  0 0 40px rgba(139,69,19,0.08),
                  inset 0 0 60px rgba(0,0,0,0.5)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Top edge metallic shine */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, ${SILVER}40, transparent)`,
                }}
              />

              {/* Vinyl disc decoration - positioned behind content area */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -52%)',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: `
                    repeating-radial-gradient(
                      circle at center,
                      ${VINYL_BLACK} 0px,
                      ${VINYL_BLACK} 2px,
                      #1a1816 2px,
                      #1a1816 4px
                    )
                  `,
                  opacity: 0.35,
                  zIndex: 0,
                }}
              >
                {/* Inner grooves */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: `
                      repeating-radial-gradient(
                        circle at center,
                        #141210 0px,
                        #141210 1.5px,
                        #1a1715 1.5px,
                        #1a1715 3px
                      )
                    `,
                    opacity: 0.8,
                  }}
                />
                {/* Center label */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${VINYL_RED}ee, ${WARM_BROWN}cc)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `inset 0 0 15px rgba(0,0,0,0.6), 0 0 20px rgba(139,0,0,0.25)`,
                  }}
                >
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: VINYL_BLACK,
                      border: `1.5px solid ${SILVER}33`,
                    }}
                  />
                </div>
              </div>

              {/* Content layer on top of vinyl */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Card header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    paddingBottom: '10px',
                    borderBottom: `1px solid ${SILVER}15`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${VINYL_RED}cc, ${WARM_BROWN}99)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 12px rgba(139,0,0,0.3), inset 0 0 8px rgba(255,255,255,0.05)`,
                      }}
                    >
                      <Disc3 style={{ width: '16px', height: '16px', color: CREAM }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: CREAM,
                          letterSpacing: '0.06em',
                          fontFamily: '"Georgia", "Noto Serif SC", serif',
                        }}
                      >
                        GITHUB{' '}
                        <span style={{ color: VINYL_RED }}>TRENDING</span>
                      </div>
                      <div
                        style={{
                          fontSize: '9px',
                          color: `${SILVER}44`,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          fontFamily: '"Inter", sans-serif',
                          marginTop: '1px',
                        }}
                      >
                        Vol.{state.rank} · {state.date}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '4px 10px',
                      borderRadius: '2px',
                      background: `${VINYL_RED}15`,
                      border: `1px solid ${VINYL_RED}30`,
                      fontSize: '9px',
                      fontWeight: 700,
                      color: `${VINYL_RED}dd`,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Featured
                  </div>
                </div>

                {/* Project content - song card style */}
                <div
                  style={{
                    borderRadius: '10px',
                    padding: '16px 17px',
                    background: 'rgba(0,0,0,0.45)',
                    border: `1px solid ${SILVER}12`,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    {/* Rank as track number */}
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${VINYL_RED}bb, ${WARM_BROWN}88)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '17px',
                        fontWeight: 800,
                        color: CREAM,
                        flexShrink: 0,
                        fontFamily: '"Inter", sans-serif',
                        boxShadow: `0 0 14px rgba(139,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)`,
                      }}
                    >
                      #{state.rank}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      {/* Project name like song title */}
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          fontFamily: '"Georgia", "Noto Serif SC", serif',
                        }}
                      >
                        <span style={{ color: `${SILVER}77` }}>{projectOwner}</span>
                        <span style={{ color: `${SILVER}33` }}> / </span>
                        <span style={{ color: CREAM }}>{projectRepo || state.projectName}</span>
                      </div>

                      {/* Description like lyrics snippet */}
                      <div
                        style={{
                          fontSize: '10.5px',
                          color: `${SILVER}50`,
                          fontStyle: 'italic',
                          lineHeight: 1.55,
                          marginTop: '5px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          fontFamily: '"Georgia", serif',
                        }}
                      >
                        "{state.projectDesc}"
                      </div>

                      {/* Genre tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px', alignItems: 'center' }}>
                        <span
                          style={{
                            fontSize: '8px',
                            fontWeight: 700,
                            color: `${SILVER}44`,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            fontFamily: '"Inter", sans-serif',
                            marginRight: '2px',
                          }}
                        >
                          GENRE:
                        </span>
                        {state.tags.filter(Boolean).map((tag, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '2px 8px',
                              borderRadius: '2px',
                              fontSize: '9px',
                              fontWeight: 600,
                              color: idx % 2 === 0 ? VINYL_RED : WARM_BROWN,
                              background: idx % 2 === 0 ? `${VINYL_RED}15` : `${WARM_BROWN}15`,
                              border: `1px solid ${idx % 2 === 0 ? `${VINYL_RED}28` : `${WARM_BROWN}28`}`,
                              letterSpacing: '0.06em',
                              textTransform: 'uppercase',
                              fontFamily: '"Inter", sans-serif',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stars as rating */}
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
                          width: '24px',
                          height: '24px',
                          color: '#d4a84b',
                          fill: '#d4a84b',
                          strokeWidth: '0.8px',
                          filter: 'drop-shadow(0 0 6px rgba(212,168,75,0.5))',
                        }}
                      />
                      <span
                        style={{
                          fontSize: '17px',
                          fontWeight: 800,
                          color: CREAM,
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        ⭐ {state.stars}
                      </span>
                      <span
                        style={{
                          fontSize: '8px',
                          color: `${SILVER}38`,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        rating
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
                  <Music style={{ width: '12px', height: '12px', color: `${SILVER}55` }} />
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: `${SILVER}40`,
                      fontStyle: 'italic',
                      fontFamily: '"Georgia", serif',
                    }}
                  >
                    Mood:
                  </span>
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: VINYL_RED,
                      fontFamily: '"Inter", sans-serif',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {state.trendText}
                  </span>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom ambient effect */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          padding: '10px 48px 12px 48px',
          borderTop: `1px solid ${SILVER}12`,
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: VINYL_RED,
              boxShadow: `0 0 8px ${VINYL_RED}88`,
            }}
          />
          <div
            style={{
              flex: 1,
              height: '3px',
              borderRadius: '2px',
              background: `${SILVER}15`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '62%',
                borderRadius: '2px',
                background: `linear-gradient(90deg, ${VINYL_RED}, ${WARM_BROWN})`,
                boxShadow: `0 0 6px ${VINYL_RED}66`,
              }}
            />
          </div>
          <span
            style={{
              fontSize: '9px',
              color: `${SILVER}40`,
              fontFamily: '"Inter", monospace',
              letterSpacing: '0.08em',
            }}
          >
            2:47 / 4:23
          </span>
        </div>
      </div>
    </div>
  );
}
