import { useCoverStore } from '@/store/coverStore';
import HeadlinePanel from './HeadlinePanel';
import { Star, User, Film } from 'lucide-react';

const C_BLACK = '#0a0a0a';
const C_PURE = '#000000';
const C_DARK = '#333333';
const C_MED = '#666666';
const C_LIGHT = '#999999';
const C_NEAR = '#eeeeee';
const C_WHITE = '#f0f0f0';

function FilmGrain() {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <filter id="noir-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noir-grain)" opacity="0.055" />
    </svg>
  );
}

function SprocketHoles({ side }: { side: 'left' | 'right' }) {
  const holes = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div
      style={{
        position: 'absolute',
        [side]: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '9px',
        pointerEvents: 'none',
      }}
    >
      {holes.map((i) => (
        <div
          key={i}
          style={{
            width: '8px',
            height: '14px',
            borderRadius: '2px',
            border: `1.5px solid ${C_LIGHT}`,
            opacity: 0.25,
          }}
        />
      ))}
    </div>
  );
}

export default function StyleNoir() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: '#fafafa', border: '#cccccc', accent: '#000000', accentLight: '#333333',
    titleColor: '#000000', subtitleColor: '#666666', metaBg: '#eeeeee',
    tagBg: '#eeeeee', tagText: '#333333', starColor: '#000000',
    rankBg: '#000000', rankText: '#ffffff', descColor: '#555555'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';
  const validTags = state.tags.filter((t) => t.trim() !== '');

  return (
    <div
      style={{
        aspectRatio: '2.35 / 1',
        background: C_BLACK,
        fontFamily: 'Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif',
        color: C_WHITE,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Film grain overlay */}
      <FilmGrain />

      {/* Letterbox bars - cinematic black bars */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '7%',
          background: C_PURE,
          zIndex: 20,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '7%',
          background: C_PURE,
          zIndex: 20,
          pointerEvents: 'none',
        }}
      />

      {/* Sprocket hole decorations */}
      <SprocketHoles side="left" />
      <SprocketHoles side="right" />

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)',
          zIndex: 5,
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: 'flex',
          height: '100%',
          padding: '40px 56px 36px 52px',
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
            width: '44%',
            paddingRight: '32px',
            boxSizing: 'border-box',
          }}
        >
          <div>
            {/* Top label - film strip style */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '18px',
              }}
            >
              <Film style={{ width: '13px', height: '13px', color: C_LIGHT }} />
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: C_LIGHT,
                }}
              >
                GitHub Trending
              </span>
              <span
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  color: C_DARK,
                }}
              >
                · REEL 08
              </span>
            </div>

            {/* Main title - large serif */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                color: C_WHITE,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              {state.mainTitlePrefix}
              <br />
              {state.mainTitleSuffix}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '17px',
                fontWeight: 400,
                color: C_MED,
                marginTop: '12px',
                marginBottom: '24px',
                lineHeight: 1.55,
                fontStyle: 'italic',
              }}
            >
              {state.subtitle}
            </p>

            {/* Bold decorative line */}
            <div
              style={{
                width: '80px',
                height: '4px',
                background: C_WHITE,
              }}
            />
          </div>

          {/* Features - minimal with vertical dividers */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 0,
              marginTop: 'auto',
              paddingTop: '28px',
            }}
          >
            {state.features.map((feature, idx) => (
              <span key={idx}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: C_LIGHT,
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.04em',
                  }}
                >
                  {feature.title}
                </span>
                {idx < state.features.length - 1 && (
                  <span
                    style={{
                      margin: '0 14px',
                      color: C_DARK,
                      fontSize: '14px',
                      fontWeight: 200,
                    }}
                  >
                    |
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Author info - clean */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingTop: '16px',
            }}
          >
            <User style={{ width: '13px', height: '13px', color: C_MED }} />
            <span
              style={{
                fontSize: '12px',
                color: C_MED,
                letterSpacing: '0.03em',
              }}
            >
              {state.author}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: C_DARK,
                marginLeft: '4px',
              }}
            >
              · {state.date}
            </span>
          </div>
        </div>

        {/* RIGHT SECTION - Project Card (inverted noir) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '16px',
          }}
        >
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              background: C_WHITE,
              border: `2.5px solid ${C_WHITE}`,
              padding: '26px 28px',
              boxSizing: 'border-box',
              boxShadow: `
                0 4px 32px rgba(0,0,0,0.5),
                0 0 0 1px rgba(255,255,255,0.05)
              `,
            }}
          >
            {/* Rank + Project Info */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
              {/* Rank number - inverted circle */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: C_PURE,
                  border: `2px solid ${C_PURE}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  fontWeight: 900,
                  color: C_WHITE,
                  flexShrink: 0,
                  lineHeight: 1,
                }}
              >
                #{state.rank}
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
                  }}
                >
                  <span style={{ color: C_DARK }}>{projectOwner}</span>
                  <span style={{ color: C_LIGHT, margin: '0 5px' }}>/</span>
                  <span style={{ color: C_PURE }}>{projectRepo || state.projectName}</span>
                </div>
                <p
                  style={{
                    fontSize: '11.5px',
                    color: C_MED,
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

                {/* Tags as bracket format [tag] */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginTop: '12px',
                  }}
                >
                  {validTags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: C_DARK,
                        letterSpacing: '0.03em',
                        fontFamily: 'Georgia, serif',
                      }}
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>
              </div>

              {/* Stars column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flexShrink: 0,
                  minWidth: '52px',
                  gap: '2px',
                }}
              >
                <Star style={{ width: '22px', height: '22px', color: C_PURE, fill: C_PURE }} />
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 900,
                    color: C_PURE,
                    lineHeight: 1.15,
                  }}
                >
                  {state.stars}
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    color: C_MED,
                    letterSpacing: '0.06em',
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
                marginTop: '18px',
                paddingTop: '14px',
                borderTop: `1.5px solid ${C_NEAR}`,
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  color: C_MED,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                趋势
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 800,
                  color: C_PURE,
                  fontStyle: 'italic',
                }}
              >
                {state.trendText}
              </span>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom film credit bar - DIRECTOR'S CUT */}
      <div
        style={{
          position: 'absolute',
          bottom: '7%',
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 52px 8px 52px',
          zIndex: 21,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.28em',
              color: C_LIGHT,
              textTransform: 'uppercase',
            }}
          >
            Director's Cut
          </span>
          <span
            style={{
              fontSize: '8px',
              letterSpacing: '0.15em',
              color: C_DARK,
            }}
          >
            · B&W · 35MM
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: i % 3 === 0 ? '10px' : i % 3 === 1 ? '6px' : '8px',
                background: C_DARK,
                opacity: 0.35,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
