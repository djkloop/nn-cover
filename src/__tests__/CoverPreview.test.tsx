import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import CoverPreview from '@/components/CoverPreview';
import { useCoverStore } from '@/store/coverStore';
import type { CoverStyle } from '@/store/coverStore';

describe('CoverPreview', () => {
  beforeEach(() => {
    useCoverStore.setState({
      style: 'tech',
      mainTitlePrefix: 'GitHub',
      mainTitleSuffix: '热榜',
      subtitle: '发现全球最火开源项目',
      features: [
        { icon: 'flame', title: '实时热榜', desc: '掌握最新趋势' },
        { icon: 'target', title: '精选项目', desc: '优质开源推荐' },
        { icon: 'code', title: '深度解读', desc: '技术价值分析' },
        { icon: 'star', title: '每日更新', desc: '不容错过的好项目' },
      ],
      author: '无乱码谈',
      date: '2026年5月10日',
      rank: 1,
      projectName: 'decolua / 9router',
      projectDesc: 'AI routing gateway with fallback, auto retry, load balancing, and usage tracking.',
      tags: ['AI', 'Poteway Gateway', 'LLM', 'API', '', ''],
      stars: '5.2k',
      trendText: '持续上升',
    });
  });

  it('默认 style 为 tech 时能正确渲染不报错', () => {
    const { container } = render(<CoverPreview />);
    expect(container.firstChild).toBeTruthy();
  });

  it('切换 style 到 minimal 后能正确渲染', () => {
    useCoverStore.setState({ style: 'minimal' });
    const { container } = render(<CoverPreview />);
    expect(container.firstChild).toBeTruthy();
  });

  it('切换 style 到 hackernews 后能正确渲染', () => {
    useCoverStore.setState({ style: 'hackernews' });
    const { container } = render(<CoverPreview />);
    expect(container.firstChild).toBeTruthy();
  });

  it('切换 style 到 neoncity 后能正确渲染', () => {
    useCoverStore.setState({ style: 'neoncity' });
    const { container } = render(<CoverPreview />);
    expect(container.firstChild).toBeTruthy();
  });

  it('切换 style 到 chinared 后能正确渲染', () => {
    useCoverStore.setState({ style: 'chinared' });
    const { container } = render(<CoverPreview />);
    expect(container.firstChild).toBeTruthy();
  });

  it('切换 style 到 nature 后能正确渲染', () => {
    useCoverStore.setState({ style: 'nature' });
    const { container } = render(<CoverPreview />);
    expect(container.firstChild).toBeTruthy();
  });

  it('切换 style 到 pixel 后能正确渲染', () => {
    useCoverStore.setState({ style: 'pixel' });
    const { container } = render(<CoverPreview />);
    expect(container.firstChild).toBeTruthy();
  });

  it('传入未知 style 时回退到 tech 风格渲染', () => {
    useCoverStore.setState({ style: 'tech' as CoverStyle });
    const { container } = render(<CoverPreview />);
    expect(container.firstChild).toBeTruthy();
  });
});
