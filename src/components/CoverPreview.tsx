import { useRef } from 'react';
import { useCoverStore } from '@/store/coverStore';
import {
  Flame,
  Target,
  Code2,
  Star,
  Calendar,
  TrendingUp,
  User,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  flame: Flame,
  target: Target,
  code: Code2,
  star: Star,
};

export default function CoverPreview() {
  const coverRef = useRef<HTMLDivElement>(null);
  const state = useCoverStore();

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div
        ref={coverRef}
        id="cover-canvas"
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: '2.35 / 1',
          background: 'linear-gradient(180deg, #010208 0%, #050a1a 50%, #000000 100%)',
          fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {/* Background ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute"
            style={{
              top: '-5%',
              right: '5%',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(25,60,160,0.15) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex h-full w-full" style={{ padding: '42px 48px 38px 52px' }}>

          {/* LEFT SECTION */}
          <div className="flex flex-col justify-between" style={{ width: '44%', paddingRight: '28px' }}>

            {/* Title block */}
            <div>
              <h1
                style={{
                  fontSize: '62px',
                  fontWeight: 900,
                  lineHeight: 1.02,
                  letterSpacing: '-0.03em',
                  fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                  marginBottom: '12px',
                }}
              >
                <span style={{ color: '#ffffff' }}>{state.mainTitlePrefix}</span>
                <span className="cover-gradient-text" style={{ marginLeft: '16px' }}>{state.mainTitleSuffix}</span>
              </h1>
              <p
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.9)',
                  letterSpacing: '0.01em',
                  fontFamily: '"Noto Sans SC", sans-serif',
                  marginBottom: '16px',
                }}
              >
                {state.subtitle}
              </p>
              <div
                style={{
                  width: '28px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                  borderRadius: '2px',
                }}
              />
            </div>

            {/* Features - 4 columns, no wrap */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '16px',
                marginTop: '32px',
              }}
            >
              {state.features.map((feature, idx) => {
                const IconComp = iconMap[feature.icon] || Star;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', minWidth: 0 }}>
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '5px',
                        background: 'rgba(59,130,246,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComp style={{ width: '12px', height: '12px', color: '#5b9cf5' }} />
                    </div>
                    <div style={{ minWidth: 0, overflow: 'hidden' }}>
                      <div
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 600,
                          color: 'rgba(255,255,255,0.88)',
                          lineHeight: 1.3,
                          fontFamily: '"Noto Sans SC", sans-serif',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {feature.title}
                      </div>
                      <div
                        style={{
                          fontSize: '9.5px',
                          color: 'rgba(255,255,255,0.36)',
                          lineHeight: 1.35,
                          marginTop: '2px',
                          fontFamily: '"Noto Sans SC", sans-serif',
                        }}
                      >
                        {feature.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Author pill */}
            <div style={{ marginTop: 'auto', paddingTop: '22px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '7px 15px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <User style={{ width: '13px', height: '13px', color: '#5b9cf5' }} />
                <span
                  style={{
                    fontSize: '12.5px',
                    color: 'rgba(255,255,255,0.45)',
                    fontFamily: '"Noto Sans SC", sans-serif',
                  }}
                >
                  作者：<span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{state.author}</span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Card */}
          <div className="flex-1 flex items-center" style={{ paddingLeft: '18px' }}>
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
              {/* Card outer neon glow - the key visual element */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '26px',
                  background: 'linear-gradient(135deg, rgba(55,110,235,0.35) 0%, rgba(90,60,200,0.2) 40%, rgba(55,110,235,0.3) 70%, rgba(70,130,240,0.25) 100%)',
                  filter: 'blur(12px)',
                  opacity: 0.65,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-3px',
                  borderRadius: '22px',
                  background: 'linear-gradient(135deg, rgba(60,120,245,0.5) 0%, rgba(100,70,210,0.3) 50%, rgba(60,120,245,0.4) 100%)',
                  filter: 'blur(4px)',
                  opacity: 0.75,
                }}
              />

              {/* Main card body */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  padding: '26px 26px',
                  background: 'linear-gradient(170deg, rgba(8,16,48,0.96) 0%, rgba(2,4,14,0.98) 100%)',
                  border: '1.5px solid rgba(65,115,230,0.4)',
                  boxShadow: `
                    0 0 40px rgba(45,95,210,0.18),
                    0 0 80px rgba(45,95,210,0.08),
                    inset 0 1px 0 rgba(255,255,255,0.04)
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
                    background: 'linear-gradient(90deg, transparent, rgba(100,170,255,0.45), transparent)',
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
                        background: 'rgba(255,255,255,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '14.5px',
                          fontWeight: 700,
                          color: '#ffffff',
                          lineHeight: 1.2,
                          fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                        }}
                      >
                        GitHub <span style={{ color: '#5b9cf5' }}>Trending</span>
                      </div>
                      <div
                        style={{
                          fontSize: '10.5px',
                          color: 'rgba(255,255,255,0.36)',
                          lineHeight: 1.2,
                          marginTop: '2px',
                          fontFamily: '"Noto Sans SC", sans-serif',
                        }}
                      >
                        今日热度最高 <span style={{ color: '#fbbf24' }}>👑</span>
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
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Calendar style={{ width: '12px', height: '12px', color: '#5b9cf5' }} />
                    <span
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(255,255,255,0.52)',
                        fontFamily: '"Noto Sans SC", sans-serif',
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
                    background: 'linear-gradient(165deg, rgba(14,24,58,0.42) 0%, rgba(5,9,28,0.62) 100%)',
                    border: '1px solid rgba(55,105,220,0.12)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
                    {/* Rank badge */}
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '9px',
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '19px',
                        fontWeight: 800,
                        color: '#ffffff',
                        flexShrink: 0,
                        boxShadow: '0 0 14px rgba(37,99,235,0.32)',
                        fontFamily: '"Inter", sans-serif',
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
                          fontFamily: '"Inter", "Noto Sans SC", sans-serif',
                        }}
                      >
                        <span style={{ color: '#ffffff' }}>{projectOwner}</span>
                        <span style={{ color: 'rgba(255,255,255,0.5)' }}> / </span>
                        <span style={{ color: '#5b9cf5' }}>{projectRepo || state.projectName}</span>
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'rgba(255,255,255,0.36)',
                          lineHeight: 1.6,
                          marginTop: '5px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {state.projectDesc}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                          marginTop: '11px',
                        }}
                      >
                        {state.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '3px 9px',
                              borderRadius: '5px',
                              fontSize: '10px',
                              fontWeight: 500,
                              color: 'rgba(145,185,255,0.72)',
                              background: 'rgba(59,130,246,0.07)',
                              border: '1px solid rgba(59,130,246,0.14)',
                              fontFamily: '"Inter", sans-serif',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stars column - OUTLINE STAR with glow */}
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
                          color: '#5b9cf5',
                          fill: 'none',
                          strokeWidth: '1.5px',
                          filter: 'drop-shadow(0 0 8px rgba(91,156,245,0.6)) drop-shadow(0 0 16px rgba(91,156,245,0.3))',
                        }}
                      />
                      <span
                        style={{
                          fontSize: '17px',
                          fontWeight: 800,
                          color: '#ffffff',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {state.stars}
                      </span>
                      <span
                        style={{
                          fontSize: '9.5px',
                          color: 'rgba(255,255,255,0.3)',
                          fontFamily: '"Inter", sans-serif',
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
                  <TrendingUp style={{ width: '14px', height: '14px', color: '#5b9cf5' }} />
                  <span
                    style={{
                      fontSize: '11.5px',
                      color: 'rgba(255,255,255,0.42)',
                      fontFamily: '"Noto Sans SC", sans-serif',
                    }}
                  >
                    热度趋势：
                  </span>
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: '#5b9cf5',
                      fontFamily: '"Noto Sans SC", sans-serif',
                    }}
                  >
                    {state.trendText}
                  </span>
                </div>
              </div>

              {/* Floating GitHub icon */}
              <div
                style={{
                  position: 'absolute',
                  width: '56px',
                  height: '56px',
                  borderRadius: '15px',
                  bottom: '-12px',
                  right: '-12px',
                  background: 'linear-gradient(135deg, #2563eb, #1e3a8a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(37,99,235,0.42), 0 4px 16px rgba(0,0,0,0.5)',
                  transform: 'translateZ(38px)',
                }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave curve light effect */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: '80px', overflow: 'hidden' }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0 }}>
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="15%" stopColor="rgba(35,90,200,0.5)" />
                <stop offset="35%" stopColor="rgba(55,110,235,0.6)" />
                <stop offset="50%" stopColor="rgba(70,50,180,0.4)" />
                <stop offset="65%" stopColor="rgba(55,110,235,0.6)" />
                <stop offset="85%" stopColor="rgba(35,90,200,0.5)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="rgba(60,120,230,0.35)" />
                <stop offset="50%" stopColor="rgba(35,90,200,0.45)" />
                <stop offset="80%" stopColor="rgba(60,120,230,0.35)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M0,60 C150,30 300,50 450,35 C600,20 750,45 900,30 C1050,15 1150,40 1200,25 L1200,80 L0,80 Z"
              fill="url(#waveGrad1)"
              filter="url(#glow)"
              opacity="0.7"
            />
            <path
              d="M0,68 C150,42 300,58 450,45 C600,32 750,55 900,42 C1050,28 1150,50 1200,38 L1200,80 L0,80 Z"
              fill="url(#waveGrad2)"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Bottom ambient glow */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '180px',
            background: 'linear-gradient(to top, rgba(22,68,175,0.07), transparent)',
          }}
        />

      </div>
    </div>
  );
}
