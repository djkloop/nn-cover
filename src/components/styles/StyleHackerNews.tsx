import { useCoverStore } from '@/store/coverStore';
import { Star, User, ArrowUp, Clock, MessageCircle } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

export default function StyleHackerNews() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: '#ffffff', border: '#e8dcc8', accent: '#ff6600', accentLight: '#ff8833',
    titleColor: '#1a1a1a', subtitleColor: '#666666', metaBg: '#fff5eb',
    tagBg: 'rgba(255,102,0,0.08)', tagText: '#cc5500', starColor: '#ff6600',
    rankBg: '#ff6600', rankText: '#ffffff', descColor: '#555555'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  const validTags = state.tags.filter(Boolean);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background: 'linear-gradient(160deg, #f5f0e8 0%, #ebe4d8 40%, #e0d9cc 100%)',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 h-full flex items-center px-10 gap-8">
        <div style={{ width: '300px', flexShrink: 0 }}>
          <div
            style={{
              fontSize: '46px',
              fontWeight: 900,
              color: '#ff6600',
              lineHeight: 1.15,
              fontFamily: '"Inter", "Noto Sans SC", sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            {state.mainTitlePrefix}
            <br />
            <span style={{ color: '#c44d00' }}>{state.mainTitleSuffix}</span>
          </div>

          <div
            style={{
              fontSize: '14px',
              color: '#9a8876',
              marginTop: '12px',
              lineHeight: 1.5,
              fontFamily: '"Noto Sans SC", sans-serif',
            }}
          >
            {state.subtitle}
          </div>

          <div
            style={{
              width: '48px',
              height: '3px',
              background: '#ff6600',
              borderRadius: '2px',
              marginTop: '18px',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '24px',
            }}
          >
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255,102,0,0.06)',
                  border: '1px solid rgba(255,102,0,0.14)',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#ff6600',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#b06a30',
                    whiteSpace: 'nowrap',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div
            style={{
              width: '100%',
              maxWidth: '600px',
              position: 'relative',
            }}
          >
            <div
              style={{
                borderRadius: '16px',
                padding: '28px 30px',
                background: 'linear-gradient(145deg, #fffdf8 0%, #faf6ef 100%)',
                border: '1px solid rgba(180,165,140,0.35)',
                boxShadow: `
                  0 2px 20px rgba(160,140,110,0.08),
                  0 8px 32px rgba(150,130,100,0.05),
                  inset 0 1px 0 rgba(255,255,255,0.8)
                `,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                <div
                  style={{
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    paddingTop: '2px',
                  }}
                >
                  <button
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255,102,0,0.25)',
                      background: 'rgba(255,102,0,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <ArrowUp style={{ width: '14px', height: '14px', color: '#ff6600', strokeWidth: 2.5 }} />
                  </button>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#ff6600',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {state.stars}
                  </span>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: '19px',
                      fontWeight: 700,
                      color: '#2c2416',
                      lineHeight: 1.3,
                      fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                    }}
                  >
                    <span>{projectOwner}</span>
                    <span style={{ color: '#c4a882', fontWeight: 400 }}> / </span>
                    <span style={{ color: '#ff6600' }}>{projectRepo || state.projectName}</span>
                  </div>

                  <div
                    style={{
                      fontSize: '12px',
                      color: '#a09080',
                      lineHeight: 1.5,
                      marginTop: '6px',
                      fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                    }}
                  >
                    ({state.projectDesc})
                  </div>

                  {validTags.length > 0 && (
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
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '11px',
                            color: '#996f33',
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          <span
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              background: '#ddb07a',
                            }}
                          />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      marginTop: '14px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(180,165,140,0.2)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MessageCircle style={{ width: '12px', height: '12px', color: '#b09878' }} />
                      <span style={{ fontSize: '11.5px', color: '#9a8570', fontFamily: '"Inter", sans-serif' }}>
                        {Math.floor(Math.random() * 200 + 50)} comments
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock style={{ width: '12px', height: '12px', color: '#b09878' }} />
                      <span style={{ fontSize: '11.5px', color: '#9a8570', fontFamily: '"Inter", sans-serif' }}>
                        {state.date}
                      </span>
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star style={{ width: '12px', height: '12px', color: '#ff6600' }} />
                      <span style={{ fontSize: '11.5px', color: '#b08855', fontWeight: 600, fontFamily: '"Inter", sans-serif' }}>
                        {state.stars} points
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 16px',
                borderRadius: '999px',
                background: 'rgba(255,102,0,0.07)',
                border: '1px solid rgba(255,102,0,0.18)',
                marginTop: '16px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: '#cc7733' }} />
              <span
                style={{
                  fontSize: '12px',
                  color: '#997040',
                  fontFamily: '"Noto Sans SC", sans-serif',
                }}
              >
                by{' '}
                <span style={{ color: '#c45a00', fontWeight: 600 }}>{state.author}</span>
              </span>
            </div>
          </div>
          )}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '120px',
          background: 'linear-gradient(to top, rgba(224,217,204,0.5), transparent)',
        }}
      />

      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '320px',
          height: '320px',
          background: 'radial-gradient(circle, rgba(255,102,0,0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
