import { useCoverStore } from '@/store/coverStore';
import { Star, User, ArrowRight, TrendingUp, Clock, Flame } from 'lucide-react';
import HeadlinePanel from './HeadlinePanel';

export default function StyleViralHeadline() {
  const state = useCoverStore();
  const layoutMode = state.layoutMode;

  const headlineTheme = {
    bg: 'rgba(20,8,8,0.9)', border: 'rgba(239,68,68,0.35)', accent: '#ef4444', accentLight: '#f97316',
    titleColor: '#ffffff', subtitleColor: '#fca5a5', metaBg: 'rgba(239,68,68,0.12)',
    tagBg: 'rgba(239,68,68,0.15)', tagText: '#fca5a5', starColor: '#fbbf24',
    rankBg: 'linear-gradient(135deg,#ef4444,#dc2626)', rankText: '#fff', descColor: 'rgba(252,165,165,0.6)'
  };

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || '';

  const validTags = state.tags.filter(Boolean);
  const rankStr = String(state.rank).padStart(2, '0');

  return (
    <div
      id="cover-canvas"
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: '2.35 / 1',
        background: 'linear-gradient(155deg, #0d0606 0%, #1a0a0a 30%, #2d1018 60%, #1a0a0a 100%)',
        fontFamily: '"Noto Sans SC", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            position: 'absolute',
            top: '-8%',
            right: '-4%',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220,38,38,0.14) 0%, rgba(220,38,38,0.05) 45%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-12%',
            left: '8%',
            width: '400px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251,146,60,0.07) 0%, rgba(220,38,38,0.08) 40%, transparent 65%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '30%',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
        }}
      />

      {/* main layout */}
      <div className="relative z-10 flex h-full w-full" style={{ padding: '36px 44px 32px 48px' }}>

        {/* ===== LEFT SECTION (38%) ===== */}
        <div className="flex flex-col justify-between" style={{ width: '38%', paddingRight: '24px', flexShrink: 0 }}>

          {/* brand area */}
          <div>
            {/* 🔥 hot badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 13px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, rgba(220,38,38,0.25), rgba(185,28,28,0.15))',
                border: '1px solid rgba(251,146,60,0.3)',
                marginBottom: '16px',
              }}
            >
              <Flame style={{ width: '14px', height: '14px', color: '#fb923c' }} />
              <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#fb923c', letterSpacing: '0.08em' }}>
                今日最热
              </span>
            </div>

            {/* main title */}
            <h1
              style={{
                fontSize: '52px',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '0.01em',
                color: '#ffffff',
              }}
            >
              {state.mainTitlePrefix}
              <br />
              <span style={{ color: '#f87171' }}>{state.mainTitleSuffix}</span>
            </h1>

            {/* subtitle */}
            <p
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
                marginTop: '10px',
                lineHeight: 1.5,
              }}
            >
              {state.subtitle}
            </p>

            {/* accent line */}
            <div
              style={{
                width: '56px',
                height: '3.5px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #ef4444, #f97316)',
                marginTop: '16px',
              }}
            />

            {/* features grid */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginTop: '22px',
              }}
            >
              {state.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                    padding: '7px 12px',
                    borderRadius: '8px',
                    background: 'rgba(220,38,38,0.06)',
                    borderLeft: '3px solid',
                    borderLeftColor: idx % 2 === 0 ? '#ef4444' : '#f97316',
                  }}
                >
                  <div
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: idx % 2 === 0 ? '#ef4444' : '#fb923c',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>
                    {feature.title}
                  </span>
                  <span style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.32)', marginLeft: 'auto' }}>
                    {feature.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* author + date footer */}
          <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 14px',
                borderRadius: '8px',
                background: 'rgba(220,38,38,0.06)',
                border: '1px solid rgba(249,115,22,0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User style={{ width: '13px', height: '13px', color: 'rgba(255,255,255,0.45)' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
                  作者：<span style={{ color: '#fb923c', fontWeight: 600 }}>{state.author}</span>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock style={{ width: '12px', height: '12px', color: 'rgba(255,255,255,0.35)' }} />
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)' }}>{state.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div className="flex items-center" style={{ flex: 1, paddingLeft: '20px' }}>
          {layoutMode === 'headline' ? (
            <HeadlinePanel theme={headlineTheme} style={{ width: '100%', maxWidth: '520px' }} />
          ) : (
          <div style={{ width: '100%', maxWidth: '680px' }}>
            {/* card outer glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(220,38,38,0.28) 0%, rgba(249,115,22,0.15) 40%, rgba(220,38,38,0.25) 70%, rgba(239,68,68,0.15) 100%)',
                filter: 'blur(16px)',
                opacity: 0.55,
              }}
            />

            {/* card body */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '28px 30px',
                background: 'linear-gradient(160deg, rgba(26,10,10,0.95) 0%, rgba(13,6,6,0.98) 50%, rgba(26,10,10,0.96) 100%)',
                border: '1.5px solid rgba(249,115,22,0.2)',
                boxShadow: `
                  0 4px 32px rgba(0,0,0,0.5),
                  0 0 48px rgba(220,38,38,0.12),
                  inset 0 1px 0 rgba(255,255,255,0.04)
                `,
                overflow: 'hidden',
              }}
            >
              {/* gradient border overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '16px',
                  padding: '1.5px',
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.4), rgba(220,38,38,0.2), rgba(249,115,22,0.3))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                }}
              />

              {/* top meta bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(249,115,22,0.12)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <TrendingUp style={{ width: '16px', height: '16px', color: '#fb923c' }} />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
                    热门推荐
                  </span>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#fb923c',
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: 'rgba(249,115,22,0.12)',
                      border: '1px solid rgba(249,115,22,0.25)',
                      marginLeft: '2px',
                    }}
                  >
                    必看
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* rank circle badge */}
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'linear-gradient(145deg, #ef4444, #dc2626)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 900,
                      color: '#ffffff',
                      boxShadow: '0 0 14px rgba(239,68,68,0.4)',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    #{rankStr}
                  </div>
                </div>
              </div>

              {/* ★★★ THE CORE: SUPER EYE-CATCHING HEADLINE ★★★ */}
              <div style={{ position: 'relative', paddingLeft: '16px' }}>
                {/* left accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '2px',
                    bottom: '2px',
                    width: '4.5px',
                    borderRadius: '3px',
                    background: 'linear-gradient(180deg, #f97316, #ef4444)',
                  }}
                />

                {/* big headline */}
                <div
                  style={{
                    fontSize: '42px',
                    fontWeight: 900,
                    lineHeight: 1.15,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 16px rgba(239,68,68,0.25)',
                  }}
                >
                  {projectRepo || state.projectName}
                  {projectOwner && (
                    <span
                      style={{
                        display: 'block',
                        fontSize: '17px',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.4)',
                        marginTop: '4px',
                        letterSpacing: '0.02em',
                        textShadow: 'none',
                      }}
                    >
                      by{' '}
                      <span style={{ color: 'rgba(249,115,22,0.65)' }}>{projectOwner}</span>
                    </span>
                  )}
                </div>

                {/* underline decoration */}
                <div
                  style={{
                    marginTop: '10px',
                    height: '3px',
                    width: '120px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, #ef4444, rgba(239,68,68,0.1))',
                  }}
                />
              </div>

              {/* description */}
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.52)',
                  lineHeight: 1.6,
                  marginTop: '14px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  paddingLeft: '16px',
                }}
              >
                {state.projectDesc}
              </div>

              {/* tags row */}
              {validTags.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '7px',
                    marginTop: '14px',
                    paddingLeft: '16px',
                  }}
                >
                  {validTags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: idx % 2 === 0 ? '#fb923c' : '#f87171',
                        background: idx % 2 === 0 ? 'rgba(249,115,22,0.1)' : 'rgba(239,68,68,0.1)',
                        border: `1px solid ${idx % 2 === 0 ? 'rgba(249,115,22,0.2)' : 'rgba(239,68,68,0.2)'}`,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* bottom action bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '18px',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(249,115,22,0.1)',
                  paddingLeft: '16px',
                }}
              >
                {/* left: stars + trend */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {/* stars badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(245,158,11,0.08))',
                      border: '1px solid rgba(249,115,22,0.25)',
                    }}
                  >
                    <Star style={{ width: '15px', height: '15px', color: '#fbbf24', fill: 'rgba(251,191,36,0.2)', strokeWidth: '1.5' }} />
                    <span style={{ fontSize: '15px', fontWeight: 800, color: '#fbbf24', fontFamily: '"Inter", sans-serif' }}>
                      {state.stars}
                    </span>
                    <span style={{ fontSize: '10px', color: 'rgba(251,191,36,0.55)', fontWeight: 500 }}>
                      stars
                    </span>
                  </div>

                  {/* trend text */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <TrendingUp style={{ width: '13px', height: '13px', color: '#22c55e' }} />
                    <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#22c55e' }}>
                      {state.trendText}
                    </span>
                  </div>
                </div>

                {/* right: read more hint */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 16px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.18), rgba(220,38,38,0.12))',
                    border: '1px solid rgba(239,68,68,0.3)',
                    cursor: 'default',
                  }}
                >
                  <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', letterSpacing: '0.03em' }}>
                    查看详情
                  </span>
                  <ArrowRight style={{ width: '14px', height: '14px', color: '#f87171' }} />
                </div>
              </div>
            </div>

            {/* floating urgency tag */}
            <div
              style={{
                position: 'absolute',
                top: '-8px',
                right: '20px',
                padding: '4px 11px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                boxShadow: '0 2px 12px rgba(220,38,38,0.4)',
                zIndex: 5,
              }}
            >
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em' }}>
                HOT
              </span>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '80px',
          background: 'linear-gradient(to top, rgba(13,6,6,0.6), transparent)',
        }}
      />

      {/* top thin line accent */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(239,68,68,0.3) 15%, rgba(249,115,22,0.4) 50%, rgba(239,68,68,0.3) 85%, transparent 100%)',
        }}
      />
    </div>
  );
}
