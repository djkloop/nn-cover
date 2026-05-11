import { useCoverStore } from '@/store/coverStore';
import { Star, User, Gamepad2 } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

export default function StylePixel() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(26,26,46,0.95)', border: 'rgba(65,105,225,0.4)', accent: '#4169e1', accentLight: '#32cd32',
    titleColor: '#ffffff', subtitleColor: '#87ceeb', metaBg: 'rgba(65,105,225,0.15)',
    tagBg: 'rgba(65,105,225,0.18)', tagText: '#87ceeb', starColor: '#ffd700',
    rankBg: 'linear-gradient(135deg,#ffd700,#4169e1)', rankText: '#fff', descColor: 'rgba(135,206,235,0.65)'
  };
  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';
  const validTags = state.tags.filter((t) => t.trim() !== '');

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '2.35 / 1',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: '"Press Start 2P", "VT323", "Courier New", "Fira Code", Consolas, monospace',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(65, 105, 225, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(65, 105, 225, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '8px 8px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(65, 105, 225, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(65, 105, 225, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: '#4169e1',
          boxShadow: `0 0 12px rgba(65, 105, 225, 0.6)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: '#32cd32',
          boxShadow: `0 0 12px rgba(50, 205, 50, 0.5)`,
        }}
      />

      <div
        style={{
          display: 'flex',
          padding: '28px 36px 22px 36px',
          height: '100%',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ width: '46%', paddingRight: '28px', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}
          >
            <Gamepad2 style={{ width: '20px', height: '20px', color: '#ffd700' }} />
            <span
              style={{
                fontSize: '11px',
                color: '#ffd700',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              ★ PIXEL EDITION ★
            </span>
          </div>

          <div
            style={{
              fontSize: '38px',
              fontWeight: 900,
              color: '#e0e0e0',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              textShadow: '3px 3px 0 #4169e1, -1px -1px 0 #16213e',
              marginBottom: '6px',
            }}
          >
            {state.mainTitlePrefix}{' '}
            <span style={{ color: '#4169e1' }}>{state.mainTitleSuffix}</span>
          </div>

          <div
            style={{
              fontSize: '13px',
              color: 'rgba(224, 224, 224, 0.45)',
              marginBottom: '18px',
              paddingLeft: '2px',
            }}
          >
            {'> '} {state.subtitle}
          </div>

          <div
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, #4169e1, #32cd32, #ffd700)',
              marginBottom: '20px',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '7px 10px',
                  background: idx % 2 === 0 ? 'rgba(65, 105, 225, 0.08)' : 'rgba(50, 205, 50, 0.06)',
                  borderLeft: '3px solid',
                  borderLeftColor: idx === 0 ? '#4169e1' : idx === 1 ? '#32cd32' : idx === 2 ? '#ffd700' : '#e0e0e0',
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    background: idx === 0 ? '#4169e1' : idx === 1 ? '#32cd32' : idx === 2 ? '#ffd700' : '#e0e0e0',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: '#e0e0e0',
                    minWidth: '80px',
                  }}
                >
                  {feature.title}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    color: 'rgba(224, 224, 224, 0.4)',
                  }}
                >
                  — {feature.desc}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 'auto',
              paddingTop: '16px',
              borderTop: '2px dashed rgba(65, 105, 225, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <User style={{ width: '14px', height: '14px', color: 'rgba(224, 224, 224, 0.5)' }} />
            <span style={{ fontSize: '11px', color: 'rgba(224, 224, 224, 0.4)', fontFamily: 'monospace' }}>
              PLAYER:{' '}
              <span style={{ color: '#32cd32', fontWeight: 700 }}>{state.author}</span>
            </span>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} />
          ) : (
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              border: '3px solid #4169e1',
              background: 'rgba(15, 33, 60, 0.85)',
              boxShadow: `4px 4px 0 rgba(65, 105, 225, 0.3), inset 0 0 30px rgba(65, 105, 225, 0.05)`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 14px',
                borderBottom: '3px solid #4169e1',
                background: 'rgba(65, 105, 225, 0.12)',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  color: '#ffd700',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                }}
              >
                [ PROJECT DATA ]
              </span>
              <span style={{ fontSize: '9px', color: 'rgba(224, 224, 224, 0.35)' }}>
                {state.date}
              </span>
            </div>

            <div style={{ padding: '18px 18px 16px 18px' }}>
              <div style={{ marginBottom: '14px' }}>
                <div
                  style={{
                    fontSize: '9px',
                    color: 'rgba(224, 224, 224, 0.35)',
                    marginBottom: '4px',
                    letterSpacing: '0.15em',
                  }}
                >
                  RANK
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '6px 14px',
                    background: 'linear-gradient(180deg, #ffd700, #daa520)',
                    border: '2px solid #b8860b',
                    fontSize: '14px',
                    fontWeight: 900,
                    color: '#1a1a2e',
                    textShadow: '1px 1px 0 rgba(255,255,255,0.3)',
                    letterSpacing: '0.08em',
                  }}
                >
                  LEVEL {String(state.rank).padStart(2, '0')}
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div
                  style={{
                    fontSize: '9px',
                    color: 'rgba(224, 224, 224, 0.35)',
                    marginBottom: '4px',
                    letterSpacing: '0.15em',
                  }}
                >
                  PROJECT NAME
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: 800,
                    color: '#e0e0e0',
                    wordBreak: 'break-all',
                    lineHeight: 1.3,
                  }}
                >
                  <span style={{ color: 'rgba(65, 105, 225, 0.85)' }}>{projectOwner}</span>
                  <span style={{ color: 'rgba(224, 224, 224, 0.3)' }}> / </span>
                  <span style={{ color: '#32cd32' }}>{projectRepo || state.projectName}</span>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div
                  style={{
                    fontSize: '9px',
                    color: 'rgba(224, 224, 224, 0.35)',
                    marginBottom: '4px',
                    letterSpacing: '0.15em',
                  }}
                >
                  DESCRIPTION
                </div>
                <div
                  style={{
                    fontSize: '11.5px',
                    color: 'rgba(224, 224, 224, 0.55)',
                    lineHeight: 1.55,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {state.projectDesc}
                </div>
              </div>

              {validTags.length > 0 && (
                <div style={{ marginBottom: '14px' }}>
                  <div
                    style={{
                      fontSize: '9px',
                      color: 'rgba(224, 224, 224, 0.35)',
                      marginBottom: '5px',
                      letterSpacing: '0.15em',
                    }}
                  >
                    TAGS
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {validTags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '3px 8px',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: '#e0e0e0',
                          background: idx % 3 === 0 ? 'rgba(65, 105, 225, 0.15)' : idx % 3 === 1 ? 'rgba(50, 205, 50, 0.12)' : 'rgba(255, 215, 0, 0.12)',
                          border: '2px solid',
                          borderColor: idx % 3 === 0 ? '#4169e1' : idx % 3 === 1 ? '#32cd32' : '#ffd700',
                        }}
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingTop: '12px',
                  marginTop: '4px',
                  borderTop: '2px solid rgba(65, 105, 225, 0.25)',
                }}
              >
                <Star
                  style={{
                    width: '20px',
                    height: '20px',
                    color: '#ffd700',
                    fill: '#ffd700',
                    strokeWidth: '1px',
                  }}
                />
                <div>
                  <span
                    style={{
                      fontSize: '22px',
                      fontWeight: 900,
                      color: '#ffd700',
                      textShadow: '2px 2px 0 rgba(218, 165, 32, 0.4)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {state.stars}
                  </span>
                  <span style={{ fontSize: '10px', color: 'rgba(224, 224, 224, 0.35)', marginLeft: '6px' }}>
                    STARS
                  </span>
                </div>
              </div>
            </div>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
              gap: '6px',
              marginTop: '14px',
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: i === 2 ? '16px' : '8px',
                  height: '8px',
                  background: i === 2 ? '#ffd700' : 'rgba(65, 105, 225, 0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '36px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <div style={{ width: '6px', height: '6px', background: '#4169e1' }} />
        <div style={{ width: '6px', height: '6px', background: '#32cd32' }} />
        <div style={{ width: '6px', height: '6px', background: '#ffd700' }} />
        <span style={{ fontSize: '9px', color: 'rgba(224, 224, 224, 0.25)', marginLeft: '4px' }}>
          INSERT COIN TO CONTINUE
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '14px',
          right: '28px',
          zIndex: 2,
          display: 'flex',
          gap: '4px',
        }}
      >
        {['A', 'B', 'SELECT', 'START'].map((btn) => (
          <div
            key={btn}
            style={{
              padding: '2px 8px',
              fontSize: '8px',
              fontWeight: 800,
              color: btn === 'START' ? '#32cd32' : 'rgba(224, 224, 224, 0.4)',
              border: '2px solid',
              borderColor: btn === 'START' ? '#32cd32' : 'rgba(224, 224, 224, 0.15)',
            }}
          >
            {btn}
          </div>
        ))}
      </div>
    </div>
  );
}
