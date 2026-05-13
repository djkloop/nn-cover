import { useCoverStore } from '@/store/coverStore';
import { Star, User, Diamond, Crown } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

const GOLD = '#d4af37';
const DARK_GOLD = '#b8860b';
const BRIGHT_GOLD = '#ffd700';
const DEEP_BLACK = '#0a0a0a';
const CREAM = '#fdfbf7';
const MID_BROWN = '#1a1207';
const DARK_BROWN = '#0d0d0d';

export default function StyleGoldenLux() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(10,10,10,0.95)', border: 'rgba(212,175,55,0.4)', accent: '#d4af37', accentLight: '#ffd700',
    titleColor: '#ffd700', subtitleColor: '#b8860b', metaBg: 'rgba(212,175,55,0.1)',
    tagBg: 'rgba(212,175,55,0.12)', tagText: '#d4af37', starColor: '#ffd700',
    rankBg: 'linear-gradient(135deg,#ffd700,#d4af37)', rankText: '#000', descColor: 'rgba(184,134,11,0.6)'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';
  const validTags = state.tags.filter((t) => t.trim() !== '');

  return (
    <div
      id="cover-canvas"
      style={{
        aspectRatio: '2.35 / 1',
        background: `linear-gradient(160deg, ${DEEP_BLACK} 0%, ${MID_BROWN} 40%, ${DARK_BROWN} 70%, ${DEEP_BLACK} 100%)`,
        fontFamily: 'Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif',
        color: CREAM,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Corner L-shaped gold lines - top-left */}
      <svg
        style={{ position: 'absolute', top: '20px', left: '20px', width: '80px', height: '80px', pointerEvents: 'none' }}
      >
        <path d="M0,60 L0,0 L60,0" stroke={GOLD} strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M0,72 L0,0 L72,0" stroke={DARK_GOLD} strokeWidth="0.5" fill="none" opacity="0.35" />
      </svg>

      {/* Corner L-shaped gold lines - top-right */}
      <svg
        style={{ position: 'absolute', top: '20px', right: '20px', width: '80px', height: '80px', pointerEvents: 'none' }}
      >
        <path d="M80,60 L80,0 L20,0" stroke={GOLD} strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M80,72 L80,0 L8,0" stroke={DARK_GOLD} strokeWidth="0.5" fill="none" opacity="0.35" />
      </svg>

      {/* Corner L-shaped gold lines - bottom-left */}
      <svg
        style={{ position: 'absolute', bottom: '20px', left: '20px', width: '80px', height: '80px', pointerEvents: 'none' }}
      >
        <path d="M0,20 L0,80 L60,80" stroke={GOLD} strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M0,8 L0,80 L72,80" stroke={DARK_GOLD} strokeWidth="0.5" fill="none" opacity="0.35" />
      </svg>

      {/* Corner L-shaped gold lines - bottom-right */}
      <svg
        style={{ position: 'absolute', bottom: '20px', right: '20px', width: '80px', height: '80px', pointerEvents: 'none' }}
      >
        <path d="M80,20 L80,80 L20,80" stroke={GOLD} strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M80,8 L80,80 L8,80" stroke={DARK_GOLD} strokeWidth="0.5" fill="none" opacity="0.35" />
      </svg>

      {/* Subtle radial vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: 'flex',
          height: '100%',
          padding: '44px 52px 38px 52px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* LEFT SECTION */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '46%',
            paddingRight: '32px',
            boxSizing: 'border-box',
          }}
        >
          <div>
            {/* Top label with crown icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <Crown style={{ width: '18px', height: '18px', color: BRIGHT_GOLD }} />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: `${GOLD}aa`,
                }}
              >
                Elite Selection
              </span>
              <Diamond style={{ width: '10px', height: '10px', color: DARK_GOLD, opacity: 0.5 }} />
            </div>

            {/* Main title - golden gradient text, extra large serif */}
            <h1
              style={{
                fontSize: '68px',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                margin: 0,
                background: `linear-gradient(135deg, ${BRIGHT_GOLD} 0%, ${GOLD} 40%, ${DARK_GOLD} 70%, ${BRIGHT_GOLD} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {state.mainTitlePrefix}
              <br />
              {state.mainTitleSuffix}
            </h1>

            {/* Subtitle - lighter gold */}
            <p
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: `${GOLD}88`,
                marginTop: '14px',
                marginBottom: '22px',
                lineHeight: 1.5,
                letterSpacing: '0.03em',
              }}
            >
              {state.subtitle}
            </p>

            {/* Bold decorative line - gold gradient */}
            <div
              style={{
                width: '120px',
                height: '4px',
                borderRadius: '2px',
                background: `linear-gradient(90deg, ${DARK_GOLD}, ${GOLD}, ${BRIGHT_GOLD}, ${GOLD}, ${DARK_GOLD})`,
                boxShadow: `0 0 12px ${GOLD}33`,
              }}
            />

            {/* Small diamond decoration below the line */}
            <div
              style={{
                width: '10px',
                height: '10px',
                background: GOLD,
                transform: 'rotate(45deg)',
                marginTop: '-6px',
                marginLeft: '55px',
                boxShadow: `0 0 8px ${GOLD}66`,
              }}
            />
          </div>

          {/* Features - premium cards with gold border */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '28px',
            }}
          >
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '12px 15px',
                  minWidth: 0,
                  flex: 1,
                  borderRadius: '8px',
                  background: `linear-gradient(160deg, rgba(212,175,55,0.06), rgba(26,18,7,0.3))`,
                  border: `1px solid ${GOLD}28`,
                  boxShadow: `inset 0 0 16px rgba(212,175,55,0.04)`,
                }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: BRIGHT_GOLD,
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    letterSpacing: '0.03em',
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: '9.5px',
                    color: `${GOLD}66`,
                    lineHeight: 1.4,
                    marginTop: '4px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Author info - golden */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingTop: '20px',
              marginTop: 'auto',
            }}
          >
            <User style={{ width: '14px', height: '14px', color: GOLD }} />
            <span
              style={{
                fontSize: '12.5px',
                color: GOLD,
                fontWeight: 500,
                letterSpacing: '0.05em',
              }}
            >
              {state.author}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: `${DARK_GOLD}88`,
                marginLeft: '4px',
              }}
            >
              · {state.date}
            </span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '16px',
          }}
        >
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
            {/* Outer glow aura */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '20px',
                background: `radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, rgba(184,134,11,0.06) 50%, transparent 70%)`,
                filter: 'blur(16px)',
              }}
            />

            {/* Outer thin gold border frame */}
            <div
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '16px',
                border: `1px solid ${GOLD}55`,
                pointerEvents: 'none',
              }}
            />

            {/* Card body - deep black with inner thick gold border */}
            <div
              style={{
                position: 'relative',
                borderRadius: '14px',
                padding: '24px 26px',
                background: `linear-gradient(170deg, #111111 0%, ${DEEP_BLACK} 50%, #0e0e0e 100%)`,
                border: `2.5px solid ${GOLD}`,
                boxShadow: `
                  0 0 30px rgba(212,175,55,0.15),
                  0 8px 32px rgba(0,0,0,0.6),
                  inset 0 0 40px rgba(0,0,0,0.5)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Inner subtle highlight edge - top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, ${BRIGHT_GOLD}66, ${GOLD}88, ${BRIGHT_GOLD}66, transparent)`,
                }}
              />

              {/* Card header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: `1px solid ${GOLD}18`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Crown style={{ width: '16px', height: '16px', color: GOLD }} />
                  <div>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: CREAM,
                        letterSpacing: '0.06em',
                      }}
                    >
                      GITHUB TRENDING
                    </div>
                    <div
                      style={{
                        fontSize: '9.5px',
                        color: `${GOLD}55`,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginTop: '2px',
                      }}
                    >
                      Rank #{state.rank}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: `${GOLD}0c`,
                    border: `1px solid ${GOLD}25`,
                  }}
                >
                  <Diamond style={{ width: '10px', height: '10px', color: GOLD }} />
                  <span
                    style={{
                      fontSize: '10px',
                      color: `${GOLD}99`,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {state.date}
                  </span>
                </div>
              </div>

              {/* Project info area */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                {/* Rank badge - diamond shape */}
                <div
                  style={{
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '3px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: `linear-gradient(145deg, ${GOLD}, ${DARK_GOLD})`,
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 18px ${GOLD}44, 0 0 36px rgba(212,175,55,0.15)`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 900,
                        color: DEEP_BLACK,
                        lineHeight: 1,
                      }}
                    >
                      {state.rank}
                    </span>
                  </div>
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
                      lineHeight: 1.3,
                    }}
                  >
                    <span style={{ color: 'rgba(255,251,247,0.65)' }}>{projectOwner}</span>
                    <span style={{ color: `${GOLD}44`, margin: '0 5px' }}>/</span>
                    <span style={{ color: BRIGHT_GOLD }}>{projectRepo || state.projectName}</span>
                  </div>
                  <p
                    style={{
                      fontSize: '11px',
                      color: 'rgba(255,251,247,0.4)',
                      lineHeight: 1.6,
                      marginTop: '6px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {state.projectDesc}
                  </p>

                  {/* Tags - gold bordered pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: '12px',
                    }}
                  >
                    {validTags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '3px 10px',
                          borderRadius: '999px',
                          fontSize: '9.5px',
                          fontWeight: 500,
                          color: GOLD,
                          background: `${GOLD}0a`,
                          border: `1px solid ${GOLD}30`,
                          letterSpacing: '0.03em',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stars column - filled golden star */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                    minWidth: '54px',
                    gap: '2px',
                  }}
                >
                  <Star
                    style={{
                      width: '26px',
                      height: '26px',
                      color: BRIGHT_GOLD,
                      fill: BRIGHT_GOLD,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '19px',
                      fontWeight: 900,
                      color: BRIGHT_GOLD,
                      lineHeight: 1.15,
                      fontFamily: '"Inter", "Georgia", serif',
                    }}
                  >
                    {state.stars}
                  </span>
                  <span
                    style={{
                      fontSize: '9px',
                      color: `${GOLD}55`,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    stars
                  </span>
                </div>
              </div>

              {/* Trend line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '16px',
                  paddingTop: '12px',
                  borderTop: `1px solid ${GOLD}15`,
                }}
              >
                <Diamond style={{ width: '12px', height: '12px', color: DARK_GOLD }} />
                <span
                  style={{
                    fontSize: '10px',
                    color: 'rgba(255,251,247,0.3)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Trend
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: GOLD,
                    fontStyle: 'italic',
                    letterSpacing: '0.03em',
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

      {/* Bottom decorative bar with gold line and brand text */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Gold decorative line */}
        <div
          style={{
            height: '2px',
            background: `linear-gradient(90deg, transparent 0%, ${DARK_GOLD}44 10%, ${GOLD}88 30%, ${BRIGHT_GOLD} 50%, ${GOLD}88 70%, ${DARK_GOLD}44 90%, transparent 100%)`,
          }}
        />
        <div
          style={{
            height: '1px',
            marginTop: '2px',
            background: `linear-gradient(90deg, transparent 0%, ${GOLD}22 20%, ${GOLD}44 50%, ${GOLD}22 80%, transparent 100%)`,
          }}
        />

        {/* Brand text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 52px 10px 52px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Diamond style={{ width: '10px', height: '10px', color: GOLD, opacity: 0.6 }} />
            <span
              style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: `${GOLD}55`,
              }}
            >
              Premium Edition
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === 2 ? '24px' : '14px',
                  height: '2px',
                  background: i === 2 ? GOLD : `${GOLD}30`,
                  borderRadius: '1px',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
