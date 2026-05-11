import { useCoverStore } from '@/store/coverStore';
import { Star, User, PenLine, CheckCircle2 } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

export default function StylePaperNote() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(255,254,240,0.98)', border: 'rgba(37,99,235,0.2)', accent: '#2563eb', accentLight: '#ef4444',
    titleColor: '#1a1a1a', subtitleColor: '#6b7280', metaBg: 'rgba(37,99,235,0.06)',
    tagBg: 'rgba(37,99,235,0.08)', tagText: '#2563eb', starColor: '#f59e0b',
    rankBg: 'linear-gradient(135deg,#2563eb,#ef4444)', rankText: '#fff', descColor: '#4b5563'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background: '#faf8f0',
        fontFamily:
          '"Noto Sans SC", "Caveat", "Patrick Hand", "Indie Flower", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
        color: '#1a1a1a',
      }}
    >
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(200,190,170,0.06) 28px, rgba(200,190,170,0.06) 29px)',
          }}
        />

        {/* Notebook red margin line */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: '46px',
            width: '2px',
            background: '#ef4444',
            opacity: 0.25,
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex h-full w-full"
        style={{ padding: '40px 48px 32px 56px' }}
      >
        {/* LEFT SECTION */}
        <div
          className="flex flex-col justify-between"
          style={{ width: '44%', paddingRight: '30px' }}
        >
          <div>
            {/* Pen icon + label */}
            <div className="flex items-center gap-2" style={{ marginBottom: '18px' }}>
              <PenLine style={{ width: '18px', height: '18px', color: '#2563eb' }} />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#2563eb',
                }}
              >
                GitHub Trending
              </span>
            </div>

            {/* Main title - handwritten bold style */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#1a1a1a',
                margin: 0,
                marginBottom: '6px',
              }}
            >
              {state.mainTitlePrefix}
              <br />
              {state.mainTitleSuffix}
            </h1>

            {/* Subtitle - lighter gray */}
            <p
              style={{
                fontSize: '18px',
                fontWeight: 400,
                color: '#8a8275',
                marginTop: '8px',
                marginBottom: '16px',
                lineHeight: 1.55,
              }}
            >
              {state.subtitle}
            </p>

            {/* Hand-drawn wavy underline decoration */}
            <svg width="140" height="10" viewBox="0 0 140 10" style={{ marginTop: '4px', marginBottom: '20px' }}>
              <path
                d="M0 5 Q8 1, 16 5 T32 5 T48 5 T64 5 T80 5 T96 5 T112 5 T128 5 T140 5"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>

            {/* Features as handwritten checklist */}
            <div
              className="flex flex-col"
              style={{ gap: '11px', marginTop: '6px' }}
            >
              {state.features.map((feature, idx) => (
                <div key={idx} className="flex items-center" style={{ gap: '9px' }}>
                  <CheckCircle2
                    style={{
                      width: '16px',
                      height: '16px',
                      color: '#2563eb',
                      fill: 'rgba(37,99,235,0.1)',
                      strokeWidth: '2px',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#333',
                    }}
                  >
                    {feature.title}
                  </span>
                  {feature.desc && (
                    <span
                      style={{
                        fontSize: '12px',
                        color: '#9a9385',
                        marginLeft: '2px',
                      }}
                    >
                      — {feature.desc}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Author info - handwritten signature style */}
          <div style={{ paddingTop: '22px' }}>
            <div className="flex items-center" style={{ gap: '7px' }}>
              <User style={{ width: '13px', height: '13px', color: '#8a8275' }} />
              <span
                style={{
                  fontSize: '13px',
                  color: '#8a8275',
                  fontStyle: 'italic',
                }}
              >
                — {state.author}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  color: '#b5ae9f',
                  marginLeft: '4px',
                }}
              >
                · {state.date}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Sticky Note Card */}
        <div
          className="flex-1 flex items-center justify-center"
          style={{ paddingLeft: '12px' }}
        >
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} />
          ) : (
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                transform: 'rotate(-1deg)',
              }}
            >
              {/* Sticky note shadow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: '-4px',
                  width: '100%',
                  height: '100%',
                  borderRadius: '3px',
                  background: 'rgba(180,170,150,0.2)',
                  filter: 'blur(8px)',
                }}
              />

              {/* Sticky note body */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '3px',
                  background: '#fffef0',
                  border: '1px solid rgba(180,170,145,0.3)',
                  boxShadow: '2px 3px 14px rgba(120,110,90,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset',
                  padding: '24px 26px',
                  boxSizing: 'border-box',
                  overflow: 'hidden',
                }}
              >
                {/* Folded corner effect - top right */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '36px',
                    height: '36px',
                    background: 'linear-gradient(135deg, transparent 50%, #e8e0cc 50%)',
                    borderBottomLeftRadius: '3px',
                    borderLeft: '1px solid rgba(180,170,145,0.25)',
                    borderBottom: '1px solid rgba(180,170,145,0.25)',
                  }}
                />

                {/* Top tape strip */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '72px',
                    height: '22px',
                    background: 'rgba(239,68,68,0.08)',
                    borderBottom: '1px solid rgba(239,68,68,0.15)',
                    borderRadius: '0 0 4px 4px',
                  }}
                />

                {/* Card header */}
                <div
                  className="flex items-center justify-between"
                  style={{
                    marginBottom: '16px',
                    paddingBottom: '12px',
                    borderBottom: '1px dashed rgba(180,170,145,0.25)',
                  }}
                >
                  <div className="flex items-center" style={{ gap: '8px' }}>
                    <PenLine style={{ width: '15px', height: '15px', color: '#2563eb' }} />
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#1a1a1a',
                      }}
                    >
                      Project Note
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: '#b5ae9f',
                      fontStyle: 'italic',
                    }}
                  >
                    {state.date}
                  </span>
                </div>

                {/* Main content area */}
                <div className="flex items-start" style={{ gap: '14px' }}>
                  {/* Hand-circled rank number */}
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '2.5px solid #ef4444',
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#ef4444',
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
                        color: '#2563eb',
                      }}
                    >
                      <span style={{ color: '#1a1a1a' }}>{projectOwner}</span>
                      <span style={{ color: '#c5beb0', margin: '0 4px' }}>/</span>
                      <span>{projectRepo || state.projectName}</span>
                    </div>
                    <p
                      style={{
                        fontSize: '12px',
                        color: '#7a7568',
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

                    {/* Tags as small dot markers */}
                    <div
                      className="flex flex-wrap"
                      style={{ gap: '8px', marginTop: '12px' }}
                    >
                      {state.tags
                        .filter((t) => t.trim() !== '')
                        .map((tag, idx) => (
                          <span key={idx} className="flex items-center" style={{ gap: '5px' }}>
                            <span
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background:
                                  idx % 3 === 0 ? '#2563eb' : idx % 3 === 1 ? '#ef4444' : '#1a1a1a',
                                flexShrink: 0,
                              }}
                            />
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 500,
                                color: '#555',
                              }}
                            >
                              {tag}
                            </span>
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Stars - hand-written star style */}
                  <div
                    className="flex flex-col items-center flex-shrink-0"
                    style={{ minWidth: '52px', gap: '2px' }}
                  >
                    <Star
                      style={{
                        width: '22px',
                        height: '22px',
                        color: '#d4a017',
                        fill: 'rgba(212,160,23,0.15)',
                        strokeWidth: '1.5px',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#1a1a1a',
                        lineHeight: 1.15,
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '9px',
                        color: '#b5ae9f',
                        letterSpacing: '0.02em',
                      }}
                    >
                      ★ stars
                    </span>
                  </div>
                </div>

                {/* Trend note at bottom */}
                <div
                  className="flex items-center"
                  style={{
                    gap: '6px',
                    marginTop: '14px',
                    paddingTop: '12px',
                    borderTop: '1px dashed rgba(180,170,145,0.2)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: '#9a9385',
                      fontStyle: 'italic',
                    }}
                  >
                    趋势：
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#1a1a1a',
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

      {/* Bottom ambient effect */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        {/* Bottom notebook ruling line */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '56px',
            right: '48px',
            height: '1px',
            background: 'rgba(180,170,145,0.2)',
          }}
        />

        {/* Bottom page number hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '52px',
            fontSize: '9px',
            color: 'rgba(180,170,145,0.35)',
            fontStyle: 'italic',
          }}
        >
          p.1
        </div>
      </div>
    </div>
  );
}
