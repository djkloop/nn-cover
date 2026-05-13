import { useCoverStore } from '@/store/coverStore';
import { Star, User, Terminal } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

export default function StyleTerminal() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(0,0,0,0.8)', border: '#008f1188', accent: '#00ff41', accentLight: '#00cc33',
    titleColor: '#00ff41', subtitleColor: '#008f11', metaBg: 'rgba(0,255,65,0.08)',
    tagBg: 'rgba(0,255,65,0.1)', tagText: '#00ff41', starColor: '#00ff41',
    rankBg: 'rgba(0,255,65,0.15)', rankText: '#00ff41', descColor: 'rgba(0,255,65,0.5)'
  };
  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';
  const validTags = state.tags.filter((t) => t.trim() !== '');

  return (
    <div
      id="cover-canvas"
      style={{
        width: '100%',
        aspectRatio: '2.35 / 1',
        background: '#000000',
        fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", "SF Mono", Consolas, monospace',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Scanline overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 65, 0.015) 2px,
            rgba(0, 255, 65, 0.015) 4px
          )`,
          zIndex: 10,
        }}
      />

      {/* Phosphor glow vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
          zIndex: 9,
        }}
      />

      {/* CRT screen curvature highlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3%',
          background: 'linear-gradient(180deg, rgba(0,255,65,0.04), transparent)',
          pointerEvents: 'none',
          zIndex: 11,
        }}
      />

      {/* ===== TERMINAL TITLE BAR ===== */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '14px 24px 10px 24px',
          borderBottom: '1px solid rgba(0, 143, 17, 0.3)',
          background: 'rgba(0, 8, 2, 0.9)',
        }}
      >
        {/* Traffic light buttons */}
        <div style={{ display: 'flex', gap: '7px', marginRight: '16px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca40' }} />
        </div>

        {/* Title */}
        <div
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: '13px',
            color: 'rgba(0, 255, 65, 0.6)',
            letterSpacing: '0.05em',
            fontWeight: 500,
          }}
        >
          github-trending@terminal — bash
        </div>

        {/* Terminal icon */}
        <Terminal style={{ width: '14px', height: '14px', color: 'rgba(0, 255, 65, 0.45)' }} />
      </div>

      {/* ===== MAIN CONTENT AREA ===== */}
      <div
        style={{
          display: 'flex',
          padding: '28px 36px 22px 36px',
          height: 'calc(100% - 52px)',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ===== LEFT SECTION ===== */}
        <div style={{ width: '48%', paddingRight: '32px', display: 'flex', flexDirection: 'column' }}>
          {/* Command line */}
          <div
            style={{
              fontSize: '14px',
              color: 'rgba(0, 255, 65, 0.85)',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ color: '#00ff41' }}>$</span>
            <span style={{ color: 'rgba(0, 255, 65, 0.7)' }}>./github_trending</span>
            <span style={{ color: 'rgba(0, 200, 80, 0.55)' }}>--today</span>
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: '#00ff41',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              textShadow: '0 0 20px rgba(0, 255, 65, 0.25), 0 0 60px rgba(0, 255, 65, 0.08)',
              marginBottom: '8px',
            }}
          >
            {state.mainTitlePrefix} {state.mainTitleSuffix}
          </div>

          {/* Comment subtitle */}
          <div
            style={{
              fontSize: '16px',
              color: 'rgba(0, 255, 65, 0.42)',
              fontStyle: 'italic',
              marginBottom: '26px',
              paddingLeft: '4px',
            }}
          >
            # {state.subtitle}
          </div>

          {/* Separator line */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(0, 255, 65, 0.3), rgba(0, 255, 65, 0.06) 70%, transparent)',
              marginBottom: '20px',
            }}
          />

          {/* Feature list - terminal style */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '13.5px',
                }}
              >
                <span
                  style={{
                    color: '#00ff41',
                    fontSize: '11px',
                    minWidth: '28px',
                    fontFamily: 'monospace',
                    textShadow: '0 0 8px rgba(0, 255, 65, 0.3)',
                  }}
                >
                  [✓]
                </span>
                <span
                  style={{
                    color: 'rgba(0, 255, 65, 0.88)',
                    fontWeight: 600,
                    minWidth: '82px',
                  }}
                >
                  {feature.title}
                </span>
                <span
                  style={{
                    color: 'rgba(0, 255, 65, 0.38)',
                    fontSize: '12px',
                  }}
                >
                  — {feature.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom author line */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '18px',
              borderTop: '1px dashed rgba(0, 143, 17, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <User style={{ width: '13px', height: '13px', color: 'rgba(0, 255, 65, 0.5)' }} />
            <span style={{ fontSize: '12px', color: 'rgba(0, 255, 65, 0.38)' }}>
              {'>'}{' '}
              <span style={{ color: 'rgba(0, 255, 65, 0.6)' }}>{state.author}</span>
              <span style={{ color: 'rgba(0, 255, 65, 0.3)' }}>@github-trending</span>
            </span>
          </div>
        </div>

        {/* ===== RIGHT SECTION - INFO BOX ===== */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              border: '1px solid rgba(0, 255, 65, 0.2)',
              borderRadius: '8px',
              overflow: 'hidden',
              background: 'rgba(0, 12, 4, 0.6)',
              boxShadow: `
                0 0 30px rgba(0, 255, 65, 0.04),
                inset 0 0 40px rgba(0, 255, 65, 0.02)
              `,
            }}
          >
            {/* Box header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px',
                borderBottom: '1px solid rgba(0, 255, 65, 0.15)',
                background: 'rgba(0, 255, 65, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#00ff41',
                    boxShadow: '0 0 8px rgba(0, 255, 65, 0.5)',
                  }}
                />
                <span style={{ fontSize: '11.5px', color: 'rgba(0, 255, 65, 0.55)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  // PROJECT INFO
                </span>
              </div>
              <span style={{ fontSize: '9.5px', color: 'rgba(0, 255, 65, 0.25)' }}>
                [{state.date}]
              </span>
            </div>

            {/* Box body */}
            <div style={{ padding: '18px 20px 16px 20px' }}>
              {/* Rank row */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '9.5px', color: 'rgba(0, 255, 65, 0.35)', marginBottom: '4px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  RANK
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '36px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.12), rgba(0, 143, 17, 0.15))',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    fontSize: '20px',
                    fontWeight: 900,
                    color: '#00ff41',
                    textShadow: '0 0 12px rgba(0, 255, 65, 0.4)',
                    fontFamily: 'monospace',
                  }}
                >
                  #{state.rank}
                </div>
              </div>

              {/* REPO row */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '9.5px', color: 'rgba(0, 255, 65, 0.35)', marginBottom: '4px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  REPO
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#00ff41', wordBreak: 'break-all', lineHeight: 1.3 }}>
                  <span style={{ color: 'rgba(0, 255, 65, 0.75)' }}>{projectOwner}</span>
                  <span style={{ color: 'rgba(0, 255, 65, 0.35)' }}> / </span>
                  <span>{projectRepo || state.projectName}</span>
                </div>
              </div>

              {/* DESC row */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '9.5px', color: 'rgba(0, 255, 65, 0.35)', marginBottom: '4px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  DESC
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(0, 255, 65, 0.58)',
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

              {/* TAGS row */}
              {validTags.length > 0 && (
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '9.5px', color: 'rgba(0, 255, 65, 0.35)', marginBottom: '5px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    TAGS
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {validTags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '2px 9px',
                          borderRadius: '4px',
                          fontSize: '10.5px',
                          fontWeight: 600,
                          color: '#00ff41',
                          background: 'rgba(0, 255, 65, 0.07)',
                          border: '1px solid rgba(0, 255, 65, 0.18)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* STARS row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingTop: '12px',
                  marginTop: '4px',
                  borderTop: '1px solid rgba(0, 143, 17, 0.2)',
                }}
              >
                <Star
                  style={{
                    width: '18px',
                    height: '18px',
                    color: '#00ff41',
                    fill: 'rgba(0, 255, 65, 0.15)',
                    strokeWidth: '1.5px',
                    filter: 'drop-shadow(0 0 6px rgba(0, 255, 65, 0.4))',
                  }}
                />
                <div>
                  <span
                    style={{
                      fontSize: '19px',
                      fontWeight: 800,
                      color: '#00ff41',
                      textShadow: '0 0 10px rgba(0, 255, 65, 0.3)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {state.stars}
                  </span>
                  <span style={{ fontSize: '10px', color: 'rgba(0, 255, 65, 0.35)', marginLeft: '6px' }}>
                    stars
                  </span>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* ===== BLINKING CURSOR ===== */}
      <div
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '36px',
          zIndex: 5,
          fontSize: '18px',
          color: '#00ff41',
          fontWeight: 300,
        }}
      >
        _
      </div>

    </div>
  );
}
