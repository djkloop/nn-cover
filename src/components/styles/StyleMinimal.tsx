import { useCoverStore } from '@/store/coverStore';
import { Star, User } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

export default function StyleMinimal() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: '#ffffff', border: '#e5e5e5', accent: '#111111', accentLight: '#444444',
    titleColor: '#111111', subtitleColor: '#888888', metaBg: '#f5f5f5',
    tagBg: '#f5f5f5', tagText: '#555555', starColor: '#111111',
    rankBg: '#111111', rankText: '#ffffff', descColor: '#666666'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div
      style={{
        aspectRatio: '2.35 / 1',
        background: '#fafafa',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif',
        color: '#111',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          padding: '44px 56px 36px 52px',
          boxSizing: 'border-box',
        }}
      >
        {/* LEFT SECTION */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '42%',
            paddingRight: '32px',
            boxSizing: 'border-box',
          }}
        >
          <div>
            {/* Top label */}
            <div
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '20px',
              }}
            >
              GitHub Trending
            </div>

            {/* Main title */}
            <h1
              style={{
                fontSize: '84px',
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: '#111',
                margin: 0,
              }}
            >
              {state.mainTitlePrefix}
              <br />
              {state.mainTitleSuffix}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#666',
                marginTop: '14px',
                marginBottom: '22px',
                lineHeight: 1.5,
              }}
            >
              {state.subtitle}
            </p>

            {/* Decorative line */}
            <div
              style={{
                width: '48px',
                height: '2px',
                background: '#111',
              }}
            />
          </div>

          {/* Features - minimal horizontal with dividers */}
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
                    fontSize: '12.5px',
                    fontWeight: 500,
                    color: '#555',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {feature.title}
                </span>
                {idx < state.features.length - 1 && (
                  <span
                    style={{
                      margin: '0 12px',
                      color: '#ccc',
                      fontSize: '13px',
                      fontWeight: 300,
                    }}
                  >
                    |
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Author - minimal */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              paddingTop: '18px',
            }}
          >
            <User style={{ width: '13px', height: '13px', color: '#999' }} />
            <span
              style={{
                fontSize: '12.5px',
                color: '#aaa',
              }}
            >
              {state.author}
            </span>
            <span
              style={{
                fontSize: '11.5px',
                color: '#ccc',
                marginLeft: '4px',
              }}
            >
              · {state.date}
            </span>
          </div>
        </div>

        {/* RIGHT SECTION - Project Card */}
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
              maxWidth: '540px',
              borderRadius: '16px',
              background: '#ffffff',
              border: '1px solid #e8e8e8',
              boxShadow: '0 2px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
              padding: '28px 30px',
              boxSizing: 'border-box',
            }}
          >
            {/* Rank + Project Info */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
              {/* Rank number */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '10px',
                  background: '#f5f5f5',
                  border: '1.5px solid #e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  fontWeight: 800,
                  color: '#111',
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
                    fontSize: '17px',
                    fontWeight: 700,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    lineHeight: 1.3,
                  }}
                >
                  <span style={{ color: '#222' }}>{projectOwner}</span>
                  <span style={{ color: '#bbb', margin: '0 5px' }}>/</span>
                  <span style={{ color: '#111' }}>{projectRepo || state.projectName}</span>
                </div>
                <p
                  style={{
                    fontSize: '12.5px',
                    color: '#777',
                    lineHeight: 1.65,
                    marginTop: '7px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {state.projectDesc}
                </p>

                {/* Tags as pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '7px',
                    marginTop: '14px',
                  }}
                >
                  {state.tags
                    .filter((t) => t.trim() !== '')
                    .map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '3px 11px',
                          borderRadius: '100px',
                          fontSize: '11px',
                          fontWeight: 500,
                          color: '#555',
                          background: '#f4f4f4',
                          border: '1px solid #eaeaea',
                        }}
                      >
                        {tag}
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
                  minWidth: '54px',
                  gap: '2px',
                }}
              >
                <Star style={{ width: '22px', height: '22px', color: '#111', fill: '#111' }} />
                <span
                  style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: '#111',
                    lineHeight: 1.15,
                  }}
                >
                  {state.stars}
                </span>
                <span
                  style={{
                    fontSize: '9.5px',
                    color: '#aaa',
                    letterSpacing: '0.02em',
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
                gap: '6px',
                marginTop: '18px',
                paddingTop: '16px',
                borderTop: '1px solid #f0f0f0',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  color: '#999',
                  fontWeight: 500,
                }}
              >
                趋势
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#333',
                }}
              >
                {state.trendText}
              </span>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
