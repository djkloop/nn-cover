import { useCoverStore } from '@/store/coverStore';
import HeadlinePanel from './HeadlinePanel';
import { Star, User, Crown, Award } from 'lucide-react';

const CHINA_RED = '#c41e3a';
const BRIGHT_RED = '#e63946';
const GOLD = '#d4af37';
const LIGHT_GOLD = '#f0d060';
const DARK_BG = '#0d0000';
const MID_BG = '#1a0505';
const DEEP_BG = '#2d0808';

const CLOUD_PATHS = [
  'M30,40 Q45,20 70,35 Q95,15 115,38 Q140,25 155,42 Q175,28 190,45 Q165,58 140,52 Q110,62 75,55 Q45,60 30,40Z',
  'M200,70 Q220,48 250,65 Q280,45 310,68 Q340,50 365,72 Q335,85 295,78 Q255,88 225,80 Q210,82 200,70Z',
  'M500,30 Q520,10 550,26 Q580,8 610,28 Q640,12 665,32 Q635,46 595,38 Q555,48 525,42 Q510,44 500,30Z',
  'M700,80 Q725,56 760,74 Q795,52 830,76 Q865,58 900,80 Q865,96 820,88 Q775,98 735,90 Q712,94 700,80Z',
];

export default function StyleChinaRed() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(30,5,5,0.85)', border: 'rgba(212,175,55,0.35)', accent: '#c41e3a', accentLight: '#d4af37',
    titleColor: '#ffffff', subtitleColor: '#d4af37aa', metaBg: 'rgba(196,30,58,0.15)',
    tagBg: 'rgba(196,30,58,0.12)', tagText: '#f8a5a5', starColor: '#d4af37',
    rankBg: 'linear-gradient(135deg,#d4af37,#c41e3a)', rankText: '#fff', descColor: 'rgba(255,255,255,0.5)'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background: `linear-gradient(160deg, ${DARK_BG} 0%, ${MID_BG} 35%, ${DEEP_BG} 65%, ${DARK_BG} 100%)`,
        fontFamily: '"Noto Sans SC", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(196,30,58,0.18) 0%, rgba(196,30,58,0.06) 45%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '5%',
            width: '450px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(196,30,58,0.1) 40%, transparent 68%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '25%',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(230,57,70,0.1) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Cloud pattern decorations - simplified auspicious cloud motifs */}
      <svg className="absolute inset-0 pointer-events-none" style={{ opacity: 0.07 }}>
        <defs>
          <linearGradient id="cloudGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={GOLD} />
            <stop offset="100%" stopColor={LIGHT_GOLD} />
          </linearGradient>
        </defs>
        {CLOUD_PATHS.map((d, i) => (
          <path key={i} d={d} fill="url(#cloudGold)" transform={`translate(${i * 180 - 50}, ${i % 2 === 0 ? 10 : 120}) scale(1.2)`} />
        ))}
      </svg>

      {/* Top decorative border line - double line with gold accent */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <div style={{ height: '2px', background: `linear-gradient(90deg, transparent 0%, ${GOLD}44 10%, ${CHINA_RED}66 30%, ${GOLD}88 50%, ${CHINA_RED}66 70%, ${GOLD}44 90%, transparent 100%)` }} />
        <div style={{ height: '1px', marginTop: '3px', background: `linear-gradient(90deg, transparent 0%, ${GOLD}22 15%, ${GOLD}44 50%, ${GOLD}22 85%, transparent 100%)` }} />
      </div>

      {/* Corner ornaments - Chinese corner frame */}
      <svg className="absolute pointer-events-none" style={{ top: '14px', left: '14px', width: '52px', height: '52px' }}>
        <path d="M0,16 L0,0 L16,0" stroke={GOLD} strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M4,24 L4,4 L24,4" stroke={CHINA_RED} strokeWidth="1" fill="none" opacity="0.35" />
        <circle cx="6" cy="6" r="2" fill={GOLD} opacity="0.5" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ top: '14px', right: '14px', width: '52px', height: '52px' }}>
        <path d="M52,16 L52,0 L36,0" stroke={GOLD} strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M48,24 L48,4 L28,4" stroke={CHINA_RED} strokeWidth="1" fill="none" opacity="0.35" />
        <circle cx="46" cy="6" r="2" fill={GOLD} opacity="0.5" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ bottom: '14px', left: '14px', width: '52px', height: '52px' }}>
        <path d="M0,36 L0,52 L16,52" stroke={GOLD} strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M4,28 L4,48 L24,48" stroke={CHINA_RED} strokeWidth="1" fill="none" opacity="0.35" />
        <circle cx="6" cy="46" r="2" fill={GOLD} opacity="0.5" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ bottom: '14px', right: '14px', width: '52px', height: '52px' }}>
        <path d="M52,36 L52,52 L36,52" stroke={GOLD} strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M48,28 L48,48 L28,48" stroke={CHINA_RED} strokeWidth="1" fill="none" opacity="0.35" />
        <circle cx="46" cy="46" r="2" fill={GOLD} opacity="0.5" />
      </svg>

      {/* Main content */}
      <div className="relative z-10 flex h-full w-full" style={{ padding: '40px 48px 34px 52px' }}>

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between" style={{ width: '44%', paddingRight: '28px' }}>

          {/* Title block */}
          <div>
            {/* Top label */}
            <div className="flex items-center gap-3 mb-3">
              <Crown style={{ width: '20px', height: '20px', color: GOLD }} />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: `${GOLD}99`,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                国潮 · 热榜
              </span>
            </div>

            {/* Main title */}
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '0.02em',
                marginBottom: '10px',
                color: '#ffffff',
                textShadow: `0 2px 20px rgba(196,30,58,0.4), 0 0 40px rgba(212,175,55,0.15)`,
              }}
            >
              {state.mainTitlePrefix}
              <span
                style={{
                  marginLeft: '12px',
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${LIGHT_GOLD} 0%, ${GOLD} 50%, ${BRIGHT_RED} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {state.mainTitleSuffix}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '20px',
                fontWeight: 500,
                color: `${LIGHT_GOLD}aa`,
                letterSpacing: '0.05em',
                marginBottom: '14px',
              }}
            >
              {state.subtitle}
            </p>

            {/* Decorative line - gold-red gradient */}
            <div style={{ position: 'relative', width: '140px' }}>
              <div
                style={{
                  height: '3px',
                  borderRadius: '2px',
                  background: `linear-gradient(90deg, ${CHINA_RED}, ${GOLD}, ${LIGHT_GOLD}, ${GOLD}, ${CHINA_RED})`,
                  boxShadow: `0 0 10px ${GOLD}44, 0 0 20px ${CHINA_RED}22`,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '-3px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '9px',
                  background: GOLD,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
              />
            </div>
          </div>

          {/* Features - horizontal cards with gold border */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '28px',
              flexWrap: 'nowrap',
            }}
          >
            {state.features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '11px 13px',
                  minWidth: '0',
                  flex: 1,
                  borderRadius: '8px',
                  background: `linear-gradient(160deg, rgba(196,30,58,0.12), rgba(45,8,8,0.25))`,
                  border: `1px solid ${GOLD}33`,
                  boxShadow: `inset 0 0 12px rgba(212,175,55,0.06)`,
                }}
              >
                <Award
                  style={{
                    width: '16px',
                    height: '16px',
                    color: idx % 2 === 0 ? GOLD : LIGHT_GOLD,
                  }}
                />
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#ffffffdd',
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
                    color: `${GOLD}77`,
                    lineHeight: 1.3,
                    textAlign: 'center',
                  }}
                >
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Chinese seal / stamp decoration near title area */}
          <div
            style={{
              position: 'absolute',
              top: '42px',
              right: '48%',
              width: '44px',
              height: '44px',
              borderRadius: '4px',
              background: CHINA_RED,
              border: `2px solid ${GOLD}66`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(6deg)',
              opacity: 0.75,
              boxShadow: `0 2px 12px rgba(196,30,58,0.4)`,
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: 900,
                color: GOLD,
                letterSpacing: '0.05em',
                lineHeight: 1,
              }}
            >
              热
            </span>
          </div>

          {/* Author info - golden */}
          <div style={{ marginTop: 'auto', paddingTop: '18px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 15px',
                borderRadius: '4px',
                background: `linear-gradient(135deg, rgba(196,30,58,0.15), rgba(45,8,8,0.3))`,
                border: `1px solid ${GOLD}28`,
              }}
            >
              <User style={{ width: '13px', height: '13px', color: GOLD }} />
              <span
                style={{
                  fontSize: '12px',
                  color: `${GOLD}88`,
                }}
              >
                作者：
                <span style={{ color: LIGHT_GOLD, fontWeight: 600 }}>{state.author}</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Project Card */}
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
            {/* Outer glow layers */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '22px',
                background: `linear-gradient(135deg, rgba(196,30,58,0.35) 0%, rgba(212,175,55,0.2) 35%, rgba(196,30,58,0.3) 65%, rgba(230,57,70,0.2) 100%)`,
                filter: 'blur(14px)',
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '18px',
                background: `linear-gradient(135deg, ${GOLD}55, ${CHINA_RED}55, ${GOLD}44, ${BRIGHT_RED}44)`,
                filter: 'blur(4px)',
                opacity: 0.7,
              }}
            />

            {/* Card body - dark red glassmorphism */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '24px 24px',
                background: `linear-gradient(170deg, rgba(26,5,5,0.92) 0%, rgba(13,0,0,0.96) 50%, rgba(26,5,5,0.94) 100%)`,
                border: `1.5px solid ${GOLD}44`,
                boxShadow: `
                  0 0 30px rgba(196,30,58,0.2),
                  0 0 60px rgba(212,175,55,0.08),
                  inset 0 0 30px rgba(0,0,0,0.6),
                  inset 0 1px 0 rgba(212,175,55,0.08)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Gradient border overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '16px',
                  padding: '1.5px',
                  background: `linear-gradient(135deg, ${GOLD}66, ${CHINA_RED}44, ${GOLD}55, ${BRIGHT_RED}33)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                }}
              />

              {/* Inner glow edge - top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '8%',
                  right: '8%',
                  height: '1.5px',
                  background: `linear-gradient(90deg, transparent, ${GOLD}66, ${LIGHT_GOLD}88, ${GOLD}66, transparent)`,
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
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: `linear-gradient(135deg, ${CHINA_RED}44, ${GOLD}22)`,
                      border: `1.5px solid ${GOLD}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 12px rgba(212,175,55,0.2)`,
                    }}
                  >
                    <Crown style={{ width: '17px', height: '17px', color: GOLD }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '0.04em',
                        lineHeight: 1.2,
                      }}
                    >
                      GitHub{' '}
                      <span style={{ color: GOLD }}>热榜</span>
                    </div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: `${GOLD}55`,
                        lineHeight: 1.2,
                        marginTop: '2px',
                      }}
                    >
                      排名第 {state.rank} 位
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '5px 11px',
                    borderRadius: '4px',
                    background: `${GOLD}0c`,
                    border: `1px solid ${GOLD}25`,
                  }}
                >
                  <Award style={{ width: '11px', height: '11px', color: GOLD }} />
                  <span
                    style={{
                      fontSize: '10.5px',
                      color: `${GOLD}99`,
                    }}
                  >
                    {state.date}
                  </span>
                </div>
              </div>

              {/* Inner project card */}
              <div
                style={{
                  borderRadius: '12px',
                  padding: '16px 17px',
                  background: `linear-gradient(165deg, rgba(196,30,58,0.1), rgba(13,0,0,0.4))`,
                  border: `1px solid ${GOLD}22`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '13px' }}>
                  {/* Rank badge - hexagonal golden badge */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: `linear-gradient(145deg, ${GOLD}, ${LIGHT_GOLD})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 800,
                      color: CHINA_RED,
                      flexShrink: 0,
                      boxShadow: `0 0 16px ${GOLD}55, 0 0 32px rgba(212,175,55,0.2), inset 0 1px 0 rgba(255,255,255,0.3)`,
                      fontFamily: '"Inter", sans-serif',
                      position: 'relative',
                    }}
                  >
                    #{state.rank}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent 50%)',
                      }}
                    />
                  </div>

                  {/* Project details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 700,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span style={{ color: 'rgba(255,255,255,0.8)' }}>{projectOwner}</span>
                      <span style={{ color: 'rgba(255,255,255,0.25)' }}> / </span>
                      <span style={{ color: LIGHT_GOLD }}>{projectRepo || state.projectName}</span>
                    </div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: 'rgba(255,255,255,0.32)',
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

                    {/* Tags - red pills with gold border */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginTop: '10px',
                      }}
                    >
                      {state.tags.filter(Boolean).map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: '2.5px 8px',
                            borderRadius: '999px',
                            fontSize: '9.5px',
                            fontWeight: 500,
                            color: idx % 2 === 0 ? BRIGHT_RED : CHINA_RED,
                            background: idx % 2 === 0 ? `${BRIGHT_RED}18` : `${CHINA_RED}22`,
                            border: `1px solid ${GOLD}28`,
                            letterSpacing: '0.03em',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stars column - golden star */}
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
                        width: '27px',
                        height: '27px',
                        color: GOLD,
                        fill: `${GOLD}22`,
                        strokeWidth: '1.5px',
                        filter: `drop-shadow(0 0 6px ${GOLD}88) drop-shadow(0 0 14px rgba(212,175,55,0.35))`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: LIGHT_GOLD,
                        fontFamily: '"Inter", sans-serif',
                        textShadow: `0 0 8px ${GOLD}55`,
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '9px',
                        color: `${GOLD}44`,
                        letterSpacing: '0.1em',
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
                  marginTop: '12px',
                  paddingLeft: '2px',
                }}
              >
                <Award style={{ width: '13px', height: '13px', color: GOLD }} />
                <span
                  style={{
                    fontSize: '10.5px',
                    color: 'rgba(255,255,255,0.3)',
                  }}
                >
                  热度趋势：
                </span>
                <span
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 600,
                    color: LIGHT_GOLD,
                    letterSpacing: '0.03em',
                  }}
                >
                  {state.trendText}
                </span>
              </div>
            </div>

            {/* Floating crown badge */}
            <div
              style={{
                position: 'absolute',
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                bottom: '-12px',
                right: '-12px',
                background: `linear-gradient(145deg, ${GOLD}, ${LIGHT_GOLD})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 28px ${GOLD}55, 0 4px 16px rgba(0,0,0,0.5)`,
                transform: 'translateZ(38px)',
              }}
            >
              <Crown style={{ width: '27px', height: '27px', color: CHINA_RED }} />
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom traditional pattern decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '72px', overflow: 'hidden' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 72"
          preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0 }}
        >
          <defs>
            <linearGradient id="chinaRedWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="10%" stopColor={`${CHINA_RED}40`} />
              <stop offset="25%" stopColor={`${GOLD}35`} />
              <stop offset="40%" stopColor={`${CHINA_RED}38`} />
              <stop offset="55%" stopColor={`${GOLD}30`} />
              <stop offset="70%" stopColor={`${BRIGHT_RED}35`} />
              <stop offset="85%" stopColor={`${GOLD}28`} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="chinaRedWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="15%" stopColor={`${GOLD}22`} />
              <stop offset="40%" stopColor={`${CHINA_RED}28`} />
              <stop offset="65%" stopColor={`${GOLD}20`} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="chinaRedGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,48 C120,26 240,44 360,30 C480,18 600,42 720,28 C840,14 960,38 1080,26 C1140,18 1170,32 1200,24 L1200,72 L0,72 Z"
            fill="url(#chinaRedWave1)"
            filter="url(#chinaRedGlow)"
            opacity="0.6"
          />
          <path
            d="M0,56 C130,38 260,52 390,40 C520,28 650,48 780,36 C910,24 1040,44 1140,34 C1170,30 1188,38 1200,34 L1200,72 L0,72 Z"
            fill="url(#chinaRedWave2)"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent 0%, ${GOLD}33 15%, ${CHINA_RED}44 50%, ${GOLD}33 85%, transparent 100%)` }} />
        <div style={{ height: '2px', marginTop: '2px', background: `linear-gradient(90deg, transparent 0%, ${CHINA_RED}22 20%, ${GOLD}22 50%, ${CHINA_RED}22 80%, transparent 100%)` }} />
      </div>

      {/* Bottom ambient red glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '140px',
          background: `linear-gradient(to top, rgba(196,30,58,0.08), transparent)`,
        }}
      />
    </div>
  );
}
