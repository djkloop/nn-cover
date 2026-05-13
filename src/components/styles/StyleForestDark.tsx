import { useCoverStore } from '@/store/coverStore';
import { Star, User, TreeDeciduous, Moon } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

const C_DARK_GREEN = '#1b4332';
const C_FOREST = '#2d6a4f';
const C_MOONLIGHT = '#d4d4d4';
const C_MAGIC_PURPLE = '#7b2cbf';
const C_BG_DEEP = '#0a0f0d';
const C_BG_MID = '#132318';
const C_PALE_GREEN = '#b7e4c7';

function TreeSilhouette({ left, height, width, opacity }: { left: string; height: string; width: string; opacity: number }) {
  return (
    <div style={{ position: 'absolute', left, bottom: 0, opacity }}>
      {/* Trunk */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width,
          background: `linear-gradient(to top, ${C_DARK_GREEN}, ${C_BG_MID})`,
          borderRadius: '2px 2px 0 0',
        }}
      />
      {/* Crown - layered triangles */}
      <svg
        width={width === '6px' ? '40' : width === '8px' ? '56' : '72'}
        height={height}
        viewBox={`0 0 ${width === '6px' ? '40' : width === '8px' ? '56' : '72'} ${parseInt(height) || 180}`}
        style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
      >
        <defs>
          <linearGradient id={`tree-grad-${left}`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={C_DARK_GREEN} />
            <stop offset="100%" stopColor={C_BG_MID} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <polygon
          points={`${width === '6px' ? '20' : width === '8px' ? '28' : '36'},${parseInt(height) * 0.05} 0,${parseInt(height) * 0.55} ${width === '6px' ? '40' : width === '8px' ? '56' : '72'},${parseInt(height) * 0.55}`}
          fill={`url(#tree-grad-${left})`}
        />
        <polygon
          points={`${width === '6px' ? '20' : width === '8px' ? '28' : '36'},${parseInt(height) * 0.25} 4,${parseInt(height) * 0.75} ${width === '6px' ? '36' : width === '8px' ? '52' : '68'},${parseInt(height) * 0.75}`}
          fill={`url(#tree-grad-${left})`}
        />
        <polygon
          points={`${width === '6px' ? '20' : width === '8px' ? '28' : '36'},${parseInt(height) * 0.45} 8,${parseInt(height)} ${width === '6px' ? '32' : width === '8px' ? '48' : '64'},${parseInt(height)}`}
          fill={`url(#tree-grad-${left})`}
        />
      </svg>
    </div>
  );
}

function RuneNumber({ value }: { value: number }) {
  const runeMap: Record<number, string> = {
    1: 'ᛁ', 2: 'ᚱ', 3: 'ᚦ', 4: 'ᚨ', 5: 'ᛊ', 6: 'ᚲ', 7: 'ᚷ', 8: 'ᚹ', 9: 'ᚺ', 10: 'ᚾ',
    11: 'ᛁᛁ', 12: 'ᛁᚱ', 13: 'ᛁᚦ', 14: 'ᛁᚨ', 15: 'ᛁᛊ', 16: 'ᛁᚲ', 17: 'ᛁᚷ', 18: 'ᛁᚹ', 19: 'ᛁᚺ', 20: 'ᛁᚾ',
  };
  return (
    <span style={{
      fontFamily: '"Segoe UI Historic", "Noto Sans Runic", serif',
      fontSize: '22px',
      fontWeight: 700,
      color: C_MOONLIGHT,
      textShadow: `0 0 12px rgba(123,44,191,0.5), 0 0 24px rgba(123,44,191,0.25)`,
    }}>
      {runeMap[value] || String(value)}
    </span>
  );
}

export default function StyleForestDark() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(10,15,13,0.9)', border: 'rgba(123,44,191,0.3)', accent: '#7b2cbf', accentLight: '#d4d4d4',
    titleColor: '#d4d4d4', subtitleColor: '#2d6a4f', metaBg: 'rgba(123,44,191,0.1)',
    tagBg: 'rgba(123,44,191,0.12)', tagText: '#c4b5fd', starColor: '#d4d4d4',
    rankBg: 'linear-gradient(135deg,#7b2cbf,#2d6a4f)', rankText: '#fff', descColor: 'rgba(212,212,212,0.5)'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  return (
    <div
      id="cover-canvas"
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, sans-serif',
        background: `linear-gradient(180deg, ${C_BG_DEEP} 0%, ${C_BG_MID} 45%, ${C_DARK_GREEN} 100%)`,
      }}
    >
      {/* Tree silhouettes - forest backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <TreeSilhouette left="2%" height="220px" width="6px" opacity={0.35} />
        <TreeSilhouette left="6%" height="280px" width="8px" opacity={0.25} />
        <TreeSilhouette left="11%" height="190px" width="5px" opacity={0.3} />
        <TreeSilhouette left="78%" height="260px" width="8px" opacity={0.25} />
        <TreeSilhouette left="84%" height="200px" width="6px" opacity={0.32} />
        <TreeSilhouette left="90%" height="300px" width="10px" opacity={0.2} />
        <TreeSilhouette left="95%" height="170px" width="5px" opacity={0.28} />

        {/* Moon glow in upper right */}
        <div
          style={{
            position: 'absolute',
            top: '6%',
            right: '12%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(212,212,212,0.12) 0%, rgba(212,212,212,0.04) 50%, transparent 70%)`,
            filter: 'blur(8px)',
          }}
        />
        <Moon
          style={{
            position: 'absolute',
            top: '8%',
            right: '14%',
            width: '32px',
            height: '32px',
            color: `${C_MOONLIGHT}`,
            opacity: 0.25,
            strokeWidth: '1.2px',
          }}
        />

        {/* Ambient purple mist particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${15 + i * 12}%`,
              left: `${8 + i * 14}%`,
              width: `${60 + (i % 3) * 30}px`,
              height: `${20 + (i % 2) * 15}px`,
              borderRadius: '999px',
              background: i % 2 === 0
                ? `radial-gradient(ellipse, rgba(123,44,191,${0.06 + i * 0.01}) 0%, transparent 70%)`
                : `radial-gradient(ellipse, rgba(45,106,79,${0.05 + i * 0.008}) 0%, transparent 70%)`,
              filter: 'blur(6px)',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex h-full w-full"
        style={{ padding: '38px 48px 34px 52px' }}
      >
        {/* LEFT SECTION */}
        <div
          className="flex flex-col justify-between"
          style={{ width: '43%', paddingRight: '30px' }}
        >
          {/* Title block */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <TreeDeciduous style={{ width: '20px', height: '20px', color: C_FOREST }} />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: C_FOREST,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                GitHub Trending
              </span>
            </div>
            <h1
              style={{
                fontSize: '54px',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '8px',
                color: C_MOONLIGHT,
                textShadow: '0 2px 16px rgba(27,67,50,0.6), 0 0 40px rgba(27,67,50,0.3)',
              }}
            >
              {state.mainTitlePrefix}{' '}
              <span style={{ color: C_PALE_GREEN }}>{state.mainTitleSuffix}</span>
            </h1>
            <p
              style={{
                fontSize: '19px',
                fontWeight: 500,
                color: C_FOREST,
                letterSpacing: '0.02em',
                marginBottom: '14px',
                lineHeight: 1.4,
              }}
            >
              {state.subtitle}
            </p>
            {/* Decorative line - magic purple to forest green gradient */}
            <div
              style={{
                width: '140px',
                height: '3px',
                borderRadius: '2px',
                background: `linear-gradient(90deg, ${C_MAGIC_PURPLE}, ${C_FOREST}, ${C_MAGIC_PURPLE})`,
                boxShadow: `0 0 10px rgba(123,44,191,0.3), 0 0 20px rgba(45,106,79,0.2)`,
              }}
            />
          </div>

          {/* Features - vine/branch connected tags */}
          <div style={{ marginTop: '26px' }}>
            {state.features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                {/* Vine connector line */}
                <div
                  style={{
                    width: idx === 0 ? '18px' : '14px',
                    height: '2px',
                    background: `linear-gradient(90deg, ${C_MAGIC_PURPLE}88, ${C_FOREST}66)`,
                    borderRadius: '1px',
                    flexShrink: 0,
                  }}
                />
                {/* Branch node dot */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: idx % 2 === 0 ? C_MAGIC_PURPLE : C_FOREST,
                    boxShadow: `0 0 6px ${idx % 2 === 0 ? 'rgba(123,44,191,0.5)' : 'rgba(45,106,79,0.4)'}`,
                    flexShrink: 0,
                  }}
                />
                {/* Feature label */}
                <div
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(27,67,50,0.4)',
                    border: `1px solid ${idx % 2 === 0 ? 'rgba(123,44,191,0.3)' : 'rgba(45,106,79,0.35)'}`,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: C_MOONLIGHT,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {feature.title}
                  </span>
                  {feature.desc && (
                    <span
                      style={{
                        fontSize: '10.5px',
                        color: `${C_FOREST}aa`,
                        marginLeft: '8px',
                      }}
                    >
                      · {feature.desc}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Author info */}
          <div style={{ marginTop: 'auto', paddingTop: '18px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 16px',
                borderRadius: '999px',
                background: 'rgba(27,67,50,0.35)',
                border: '1px solid rgba(123,44,191,0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <User style={{ width: '13px', height: '13px', color: C_MAGIC_PURPLE }} />
              <span
                style={{
                  fontSize: '12px',
                  color: `${C_MOONLIGHT}99`,
                }}
              >
                作者：<span style={{ color: C_MOONLIGHT, fontWeight: 500 }}>{state.author}</span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 flex items-center" style={{ paddingLeft: '16px' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '540px',
              transform: 'perspective(900px) rotateY(-16deg) rotateX(1deg)',
              transformStyle: 'preserve-3d',
            }}
            data-export-3d="true"
          >
            {/* Outer ambient glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-14px',
                borderRadius: '22px',
                background: `linear-gradient(135deg, rgba(123,44,191,0.2) 0%, rgba(27,67,50,0.25) 35%, rgba(45,106,79,0.2) 65%, rgba(123,44,191,0.15) 100%)`,
                filter: 'blur(18px)',
                opacity: 0.55,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-5px',
                borderRadius: '18px',
                background: `linear-gradient(135deg, rgba(123,44,191,0.3) 0%, rgba(45,106,79,0.2) 50%, rgba(123,44,191,0.25) 100%)`,
                filter: 'blur(6px)',
                opacity: 0.65,
              }}
            />

            {/* Main card body - dark glass / stone tablet */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '22px 24px',
                background: `linear-gradient(160deg, rgba(19,35,24,0.92) 0%, rgba(10,15,13,0.95) 50%, rgba(27,67,50,0.85) 100%)`,
                border: `1.5px solid rgba(123,44,191,0.25)`,
                borderLeft: `3px solid ${C_MAGIC_PURPLE}55`,
                borderRight: `3px solid ${C_FOREST}55`,
                boxShadow: `
                  0 8px 40px rgba(0,0,0,0.5),
                  0 0 30px rgba(123,44,191,0.08),
                  0 0 60px rgba(45,106,79,0.06),
                  inset 0 1px 0 rgba(212,212,212,0.05)
                `,
                backdropFilter: 'blur(12px)',
                overflow: 'hidden',
              }}
            >
              {/* Stone texture overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '14px',
                  backgroundImage:
                    'repeating-linear-gradient(89deg, transparent 0px, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px), repeating-linear-gradient(91deg, transparent 0px, transparent 40px, rgba(123,44,191,0.02) 40px, rgba(123,44,191,0.02) 41px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top edge glow line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: '1.5px',
                  background: `linear-gradient(90deg, transparent, ${C_MAGIC_PURPLE}66, ${C_FOREST}55, ${C_MAGIC_PURPLE}66, transparent)`,
                  borderRadius: '1px',
                }}
              />

              {/* Card header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: `linear-gradient(135deg, ${C_MAGIC_PURPLE}, ${C_DARK_GREEN})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 14px rgba(123,44,191,0.3)`,
                    }}
                  >
                    <TreeDeciduous style={{ width: '17px', height: '17px', color: C_MOONLIGHT }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 700,
                        color: C_MOONLIGHT,
                        lineHeight: 1.2,
                      }}
                    >
                      GitHub{' '}
                      <span style={{ color: C_MAGIC_PURPLE }}>Trending</span>
                    </div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: `${C_FOREST}99`,
                        lineHeight: 1.2,
                        marginTop: '2px',
                        letterSpacing: '0.06em',
                      }}
                    >
                      森林深处 · 今日热榜
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(27,67,50,0.4)',
                    border: '1px solid rgba(123,44,191,0.15)',
                  }}
                >
                  <Moon style={{ width: '11px', height: '11px', color: `${C_MAGIC_PURPLE}aa` }} />
                  <span
                    style={{
                      fontSize: '10px',
                      color: `${C_FOREST}bb`,
                    }}
                  >
                    {state.date}
                  </span>
                </div>
              </div>

              {/* Inner project card area */}
              <div
                style={{
                  borderRadius: '12px',
                  padding: '16px 18px',
                  background: 'rgba(10,15,13,0.6)',
                  border: `1px solid rgba(45,106,79,0.2)`,
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  {/* Rank badge - rune circle */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: `linear-gradient(145deg, ${C_MAGIC_PURPLE}33 0%, ${C_DARK_GREEN}44 50%, ${C_BG_DEEP}88 100%)`,
                      border: `2px solid ${C_MAGIC_PURPLE}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 0 18px rgba(123,44,191,0.25), 0 0 36px rgba(45,106,79,0.12), inset 0 0 12px rgba(0,0,0,0.5)`,
                      position: 'relative',
                    }}
                  >
                    <RuneNumber value={state.rank} />
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-3px',
                        borderRadius: '50%',
                        border: `1px solid ${C_MAGIC_PURPLE}22`,
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
                        lineHeight: 1.3,
                      }}
                    >
                      <span style={{ color: `${C_FOREST}cc` }}>{projectOwner}</span>
                      <span style={{ color: `${C_MAGIC_PURPLE}44`, margin: '0 4px' }}>/</span>
                      <span style={{ color: C_MOONLIGHT }}>
                        {projectRepo || state.projectName}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '11px',
                        color: `${C_FOREST}99`,
                        lineHeight: 1.6,
                        marginTop: '5px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {state.projectDesc}
                    </p>
                    {/* Tags - dark pills with green/purple borders */}
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
                            padding: '3px 10px',
                            borderRadius: '999px',
                            fontSize: '10px',
                            fontWeight: 500,
                            color: idx % 2 === 0 ? C_PALE_GREEN : `${C_MAGIC_PURPLE}cc`,
                            background: idx % 2 === 0
                              ? 'rgba(45,106,79,0.15)'
                              : 'rgba(123,44,191,0.12)',
                            border: `1px solid ${
                              idx % 2 === 0 ? 'rgba(45,106,79,0.3)' : 'rgba(123,44,191,0.25)'
                            }`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stars column - moonlight star */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px',
                      flexShrink: 0,
                      minWidth: '48px',
                    }}
                  >
                    <Star
                      style={{
                        width: '26px',
                        height: '26px',
                        color: C_MOONLIGHT,
                        fill: `${C_MOONLIGHT}44`,
                        strokeWidth: '1px',
                        filter:
                          'drop-shadow(0 0 6px rgba(212,212,212,0.4)) drop-shadow(0 0 12px rgba(123,44,191,0.2))',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        color: C_MOONLIGHT,
                        textShadow: '0 0 8px rgba(212,212,212,0.3)',
                      }}
                    >
                      {state.stars}
                    </span>
                    <span
                      style={{
                        fontSize: '9px',
                        color: `${C_FOREST}88`,
                        letterSpacing: '0.04em',
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
                  position: 'relative',
                }}
              >
                <TreeDeciduous style={{ width: '13px', height: '13px', color: `${C_FOREST}aa` }} />
                <span
                  style={{
                    fontSize: '11px',
                    color: `${C_FOREST}88`,
                    letterSpacing: '0.04em',
                  }}
                >
                  热度趋势：
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: C_MAGIC_PURPLE,
                  }}
                >
                  {state.trendText}
                </span>
              </div>
            </div>

            {/* Corner ornament - bottom-right runic mark */}
            <div
              style={{
                position: 'absolute',
                bottom: '-8px',
                right: '-8px',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: `linear-gradient(135deg, ${C_MAGIC_PURPLE}44, ${C_DARK_GREEN}55)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 20px rgba(123,44,191,0.25)`,
                transform: 'translateZ(32px)',
              }}
            >
              <Moon style={{ width: '18px', height: '18px', color: C_MOONLIGHT, opacity: 0.7 }} />
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom fog effect - multi-layer semi-transparent gradients */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '90px', overflow: 'hidden' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0 }}
        >
          <defs>
            <linearGradient id="fogLayer1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="15%" stopColor="rgba(27,67,50,0.25)" />
              <stop offset="35%" stopColor="rgba(19,35,24,0.3)" />
              <stop offset="55%" stopColor="rgba(27,67,50,0.22)" />
              <stop offset="75%" stopColor="rgba(10,15,13,0.28)" />
              <stop offset="92%" stopColor="rgba(27,67,50,0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="fogLayer2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="rgba(123,44,191,0.08)" />
              <stop offset="50%" stopColor="rgba(27,67,50,0.18)" />
              <stop offset="78%" stopColor="rgba(123,44,191,0.06)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="fogLayer3" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(10,15,13,0.5)" />
              <stop offset="60%" stopColor="rgba(10,15,13,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C150,30 300,55 450,35 C600,18 750,48 900,32 C1050,18 1150,42 1200,28 L1200,90 L0,90 Z"
            fill="url(#fogLayer1)"
            opacity="0.7"
          />
          <path
            d="M0,62 C160,42 320,58 480,44 C640,28 800,52 960,40 C1120,26 1180,48 1200,38 L1200,90 L0,90 Z"
            fill="url(#fogLayer2)"
            opacity="0.5"
          />
          <rect x="0" y="0" width="1200" height="90" fill="url(#fogLayer3)" opacity="0.4" />
        </svg>
      </div>

      {/* Bottom ambient dark glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '100px',
          background: 'linear-gradient(to top, rgba(10,15,13,0.35) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
