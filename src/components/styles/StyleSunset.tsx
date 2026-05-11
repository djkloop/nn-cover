import { useCoverStore } from '@/store/coverStore';
import { Star, User, Sun, Sparkles } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

const iconMap: Record<string, React.ElementType> = {
  flame: Sparkles,
  target: Sun,
  code: Sparkles,
  star: Star,
};

export default function StyleSunset() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(255,253,245,0.85)', border: 'rgba(255,107,53,0.35)', accent: '#ff6b35', accentLight: '#ffd93d',
    titleColor: '#1a0a00', subtitleColor: '#8B4513', metaBg: 'rgba(255,107,53,0.1)',
    tagBg: 'rgba(255,107,53,0.12)', tagText: '#c2410c', starColor: '#ffd93d',
    rankBg: 'linear-gradient(135deg,#ffd93d,#ff6b35)', rankText: '#fff', descColor: '#5c3310'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background:
          'linear-gradient(160deg, #1a0a00 0%, #3d1500 25%, #6b2200 45%, #b33d00 65%, #ff6b35 85%, #ffd93d 100%)',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Multi-layer radial gradient simulating sunset rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large ambient glow - top right */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            right: '-5%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,217,61,0.35) 0%, rgba(255,107,53,0.2) 40%, transparent 70%)',
          }}
        />
        {/* Secondary warm glow - center */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '30%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,140,66,0.18) 0%, rgba(255,107,53,0.1) 50%, transparent 70%)',
          }}
        />
        {/* Bottom warm haze */}
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '10%',
            width: '500px',
            height: '300px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse, rgba(255,140,66,0.15) 0%, rgba(179,61,0,0.12) 50%, transparent 70%)',
          }}
        />
        {/* Sun circle element - top right corner */}
        <div
          style={{
            position: 'absolute',
            top: '8%',
            right: '8%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 40% 40%, #fff7e0 0%, #ffd93d 30%, #ff9f43 60%, rgba(255,107,53,0.4) 80%, transparent 100%)',
            boxShadow:
              '0 0 60px rgba(255,217,61,0.5), 0 0 120px rgba(255,107,53,0.3), 0 0 200px rgba(179,61,0,0.15)',
          }}
        />
        {/* Sun ray streaks */}
        <div
          style={{
            position: 'absolute',
            top: '14%',
            right: '11%',
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255,217,61,0.4), transparent)',
            transform: 'rotate(-20deg)',
            transformOrigin: 'right center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '13%',
            width: '160px',
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent, rgba(255,159,67,0.3), transparent)',
            transform: 'rotate(-35deg)',
            transformOrigin: 'right center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '16%',
            width: '180px',
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent, rgba(255,217,61,0.25), transparent)',
            transform: 'rotate(-5deg)',
            transformOrigin: 'right center',
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex h-full w-full"
        style={{ padding: '42px 48px 38px 52px' }}
      >
        {/* LEFT SECTION */}
        <div
          className="flex flex-col justify-between"
          style={{ width: '44%', paddingRight: '28px' }}
        >
          {/* Title block */}
          <div>
            <h1
              style={{
                fontSize: '62px',
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                marginBottom: '12px',
              }}
            >
              <span style={{ color: '#fff7ed' }}>{state.mainTitlePrefix}</span>
              <span style={{ marginLeft: '16px', color: '#ffd93d' }}>
                {state.mainTitleSuffix}
              </span>
            </h1>
            <p
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'rgba(255,237,213,0.85)',
                letterSpacing: '0.01em',
                marginBottom: '16px',
              }}
            >
              {state.subtitle}
            </p>
            {/* Decorative line with gold-orange gradient */}
            <div
              style={{
                width: '120px',
                height: '4px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #ff6b35, #ffd93d, #ff8c42)',
                boxShadow: '0 0 12px rgba(255,217,61,0.4)',
              }}
            />
          </div>

          {/* Features - warm rounded cards in a row */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '32px',
              flexWrap: 'nowrap',
            }}
          >
            {state.features.map((feature, idx) => {
              const IconComp = iconMap[feature.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '12px 14px',
                    minWidth: '0',
                    flex: 1,
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,217,61,0.15)',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, rgba(255,107,53,0.3), rgba(255,217,61,0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComp style={{ width: '15px', height: '15px', color: '#ffd93d' }} />
                  </div>
                  <div
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: '#fff7ed',
                      lineHeight: 1.3,
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%',
                    }}
                  >
                    {feature.title}
                  </div>
                  <div
                    style={{
                      fontSize: '9px',
                      color: 'rgba(255,237,213,0.5)',
                      lineHeight: 1.3,
                      textAlign: 'center',
                    }}
                  >
                    {feature.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Author info with warm colors */}
          <div style={{ marginTop: 'auto', paddingTop: '22px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 15px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,217,61,0.18)',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: '#ff8c42' }} />
              <span
                style={{
                  fontSize: '12.5px',
                  color: 'rgba(255,237,213,0.55)',
                }}
              >
                作者：
                <span style={{ color: '#fff7ed', fontWeight: 500 }}>{state.author}</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Project Card with glassmorphism */}
        <div className="flex-1 flex items-center" style={{ paddingLeft: '18px' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              transform: 'perspective(950px) rotateY(-19deg) rotateX(1.5deg)',
              transformStyle: 'preserve-3d',
            }}
            data-export-3d="true"
          >
            {/* Card outer warm glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '26px',
                background:
                  'linear-gradient(135deg, rgba(255,140,66,0.35) 0%, rgba(255,107,53,0.25) 40%, rgba(255,217,61,0.3) 70%, rgba(255,140,66,0.25) 100%)',
                filter: 'blur(12px)',
                opacity: 0.65,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '22px',
                background:
                  'linear-gradient(135deg, rgba(255,140,66,0.45) 0%, rgba(255,217,61,0.3) 50%, rgba(255,107,53,0.35) 100%)',
                filter: 'blur(4px)',
                opacity: 0.75,
              }}
            />

            {/* Main card body - glassmorphism */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                padding: '26px 26px',
                background:
                  'linear-gradient(170deg, rgba(255,252,245,0.92) 0%, rgba(255,245,230,0.88) 50%, rgba(255,237,213,0.86) 100%)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(255,140,66,0.35)',
                boxShadow: `
                  0 8px 32px rgba(179,61,0,0.15),
                  0 0 60px rgba(255,107,53,0.08),
                  inset 0 1px 0 rgba(255,255,255,0.6)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Top edge shine */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '1px',
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,217,61,0.6), transparent)',
                }}
              />

              {/* Card header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ff6b35, #ffd93d)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 14px rgba(255,107,53,0.3)',
                    }}
                  >
                    <Sun style={{ width: '18px', height: '18px', color: '#fff7ed' }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 700,
                        color: '#3d1500',
                        lineHeight: 1.2,
                      }}
                    >
                      GitHub{' '}
                      <span style={{ color: '#ff6b35' }}>Trending</span>
                    </div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(179,61,0,0.5)',
                        lineHeight: 1.2,
                        marginTop: '2px',
                      }}
                    >
                      今日热度最高 🌅
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '5px 11px',
                    borderRadius: '7px',
                    background: 'rgba(255,107,53,0.08)',
                    border: '1px solid rgba(255,140,66,0.2)',
                  }}
                >
                  <Sun style={{ width: '12px', height: '12px', color: '#ff8c42' }} />
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: 'rgba(179,61,0,0.6)',
                    }}
                  >
                    {state.date}
                  </span>
                </div>
              </div>

              {/* Inner project card */}
              <div
                style={{
                  borderRadius: '13px',
                  padding: '17px 19px',
                  background:
                    'linear-gradient(165deg, rgba(255,255,255,0.6) 0%, rgba(255,245,225,0.5) 100%)',
                  border: '1px solid rgba(255,140,66,0.2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
                  {/* Rank badge - golden/orange filled circle */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background:
                        'linear-gradient(145deg, #ffd93d 0%, #ff9f43 50%, #ff6b35 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '19px',
                      fontWeight: 800,
                      color: '#fff7ed',
                      flexShrink: 0,
                      boxShadow:
                        '0 0 16px rgba(255,217,61,0.45), 0 2px 8px rgba(179,61,0,0.2)',
                    }}
                  >
                    {state.rank}
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
                      }}
                    >
                      <span style={{ color: '#3d1500' }}>{projectOwner}</span>
                      <span style={{ color: 'rgba(179,61,0,0.4)' }}> / </span>
                      <span style={{ color: '#ff6b35' }}>
                        {projectRepo || state.projectName}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(179,61,0,0.5)',
                        lineHeight: 1.6,
                        marginTop: '5px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {state.projectDesc}
                    </div>
                    {/* Tags - warm colored pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginTop: '11px',
                      }}
                    >
                      {state.tags.map(
                        (tag, idx) =>
                          tag && (
                            <span
                              key={idx}
                              style={{
                                padding: '3px 9px',
                                borderRadius: '999px',
                                fontSize: '10px',
                                fontWeight: 500,
                                color: '#b33d00',
                                background:
                                  idx % 3 === 0
                                    ? 'rgba(255,107,53,0.15)'
                                    : idx % 3 === 1
                                      ? 'rgba(255,217,61,0.2)'
                                      : 'rgba(255,140,66,0.15)',
                                border: '1px solid rgba(255,140,66,0.25)',
                              }}
                            >
                              {tag}
                            </span>
                          )
                      )}
                    </div>
                  </div>

                  {/* Stars column */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px',
                      flexShrink: 0,
                      minWidth: '50px',
                    }}
                  >
                    <Star
                      style={{
                        width: '28px',
                        height: '28px',
                        color: '#ff9f43',
                        fill: '#ffd93d',
                        strokeWidth: '1px',
                        filter:
                          'drop-shadow(0 0 6px rgba(255,217,61,0.6)) drop-shadow(0 0 12px rgba(255,107,53,0.3))',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#3d1500',
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '9.5px',
                        color: 'rgba(179,61,0,0.45)',
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
                  marginTop: '13px',
                  paddingLeft: '2px',
                }}
              >
                <Sparkles style={{ width: '14px', height: '14px', color: '#ff8c42' }} />
                <span
                  style={{
                    fontSize: '11.5px',
                    color: 'rgba(179,61,0,0.5)',
                  }}
                >
                  热度趋势：
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#ff6b35',
                  }}
                >
                  {state.trendText}
                </span>
              </div>
            </div>

            {/* Floating decorative sun icon */}
            <div
              style={{
                position: 'absolute',
                width: '56px',
                height: '56px',
                borderRadius: '15px',
                bottom: '-12px',
                right: '-12px',
                background: 'linear-gradient(135deg, #ff6b35, #ffd93d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow:
                  '0 0 30px rgba(255,107,53,0.42), 0 4px 16px rgba(0,0,0,0.3)',
                transform: 'translateZ(38px)',
              }}
            >
              <Sun style={{ width: '28px', height: '28px', color: '#fff7ed' }} />
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom soft glow / light halo effect */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '160px',
          background:
            'linear-gradient(to top, rgba(255,217,61,0.1) 0%, rgba(255,107,53,0.05) 40%, transparent 100%)',
        }}
      />

      {/* Bottom wave curve for sunset atmosphere */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '80px', overflow: 'hidden' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0 }}
        >
          <defs>
            <linearGradient id="sunsetWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="15%" stopColor="rgba(255,140,66,0.35)" />
              <stop offset="35%" stopColor="rgba(255,107,53,0.4)" />
              <stop offset="50%" stopColor="rgba(255,217,61,0.3)" />
              <stop offset="65%" stopColor="rgba(255,107,53,0.4)" />
              <stop offset="85%" stopColor="rgba(255,140,66,0.35)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="sunsetWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(255,159,67,0.25)" />
              <stop offset="50%" stopColor="rgba(255,107,53,0.3)" />
              <stop offset="80%" stopColor="rgba(255,159,67,0.25)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="sunsetGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,60 C150,30 300,50 450,35 C600,20 750,45 900,30 C1050,15 1150,40 1200,25 L1200,80 L0,80 Z"
            fill="url(#sunsetWave1)"
            filter="url(#sunsetGlow)"
            opacity="0.7"
          />
          <path
            d="M0,68 C150,42 300,58 450,45 C600,32 750,55 900,42 C1050,28 1150,50 1200,38 L1200,80 L0,80 Z"
            fill="url(#sunsetWave2)"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
}
