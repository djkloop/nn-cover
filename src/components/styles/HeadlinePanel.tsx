import { useCoverStore } from '@/store/coverStore';
import { Star, ArrowRight, TrendingUp } from 'lucide-react';

interface HeadlineTheme {
  bg: string;
  border: string;
  accent: string;
  accentLight: string;
  titleColor: string;
  subtitleColor: string;
  metaBg: string;
  tagBg: string;
  tagText: string;
  starColor: string;
  rankBg: string;
  rankText: string;
  descColor: string;
}

interface HeadlinePanelProps {
  theme: HeadlineTheme;
  className?: string;
  style?: React.CSSProperties;
}

export default function HeadlinePanel({ theme, className, style }: HeadlinePanelProps) {
  const state = useCoverStore();

  const projectNameParts = state.projectName.split('/');
  const projectOwner = projectNameParts[0] || '';
  const projectRepo = projectNameParts[1] || state.projectName;

  return (
    <div
      className={className}
      style={{
        borderRadius: '16px',
        padding: '28px 28px',
        background: theme.bg,
        border: `1.5px solid ${theme.border}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...style,
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight}, ${theme.accent})`,
        }}
      />

      {/* Meta row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '3px 10px',
            borderRadius: '4px',
            background: `${theme.accent}22`,
            color: theme.accent,
          }}
        >
          热门推荐
        </span>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '3px 8px',
            borderRadius: '4px',
            background: `${theme.starColor}18`,
            color: theme.starColor,
          }}
        >
          必看
        </span>
        <div
          style={{
            marginLeft: 'auto',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: theme.rankBg,
            border: `2px solid ${theme.accent}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 800,
            color: theme.rankText,
          }}
        >
          #{state.rank}
        </div>
      </div>

      {/* Big title - the core attraction */}
      <div style={{ marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div
            style={{
              width: '4px',
              minHeight: '48px',
              borderRadius: '2px',
              background: `linear-gradient(180deg, ${theme.accent}, ${theme.starColor})`,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2
              style={{
                fontSize: '36px',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: theme.titleColor,
                margin: 0,
              }}
            >
              {projectRepo || state.projectName}
            </h2>
            {projectOwner && (
              <p
                style={{
                  fontSize: '14px',
                  color: theme.subtitleColor,
                  marginTop: '4px',
                  margin: '4px 0 0 0',
                }}
              >
                by {projectOwner}
              </p>
            )}
          </div>
        </div>

        {/* Red underline decoration */}
        <div
          style={{
            width: '80px',
            height: '3px',
            borderRadius: '2px',
            background: theme.accent,
            marginTop: '12px',
            marginLeft: '16px',
          }}
        />
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '14px',
          lineHeight: 1.6,
          color: theme.descColor,
          margin: '0 0 14px 0',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          paddingLeft: '16px',
        }}
      >
        {state.projectDesc}
      </p>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginBottom: '16px',
          paddingLeft: '16px',
        }}
      >
        {state.tags.filter(Boolean).map((tag, idx) => (
          <span
            key={idx}
            style={{
              fontSize: '11px',
              fontWeight: 600,
              padding: '3px 10px',
              borderRadius: '100px',
              background: theme.tagBg,
              color: theme.tagText,
              border: `1px solid ${theme.border}44`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom action bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '14px',
          borderTop: `1px solid ${theme.border}55`,
          paddingLeft: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Star style={{ width: '16px', height: '16px', color: theme.starColor, fill: theme.starColor }} />
            <span style={{ fontSize: '17px', fontWeight: 800, color: theme.titleColor }}>{state.stars}</span>
            <span style={{ fontSize: '11px', color: theme.subtitleColor }}>stars</span>
          </div>

          {/* Trend */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp style={{ width: '13px', height: '13px', color: '#22c55e' }} />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#22c55e' }}>{state.trendText}</span>
          </div>
        </div>

        {/* CTA hint */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '12px',
            fontWeight: 700,
            color: theme.accent,
            cursor: 'default',
          }}
        >
          查看详情 <ArrowRight style={{ width: '14px', height: '14px' }} />
        </div>
      </div>
    </div>
  );
}
