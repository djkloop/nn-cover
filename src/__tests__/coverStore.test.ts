import { describe, it, expect, beforeEach } from 'vitest';
import { useCoverStore } from '@/store/coverStore';
import type { CoverStyle, Feature } from '@/store/coverStore';

describe('coverStore', () => {
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

  describe('默认值', () => {
    it('style 默认值为 tech', () => {
      const state = useCoverStore.getState();
      expect(state.style).toBe('tech');
    });

    it('mainTitlePrefix 默认值为 GitHub', () => {
      const state = useCoverStore.getState();
      expect(state.mainTitlePrefix).toBe('GitHub');
    });

    it('mainTitleSuffix 默认值为 热榜', () => {
      const state = useCoverStore.getState();
      expect(state.mainTitleSuffix).toBe('热榜');
    });

    it('subtitle 有默认值', () => {
      const state = useCoverStore.getState();
      expect(state.subtitle).toBe('发现全球最火开源项目');
    });

    it('features 默认有 4 个元素', () => {
      const state = useCoverStore.getState();
      expect(state.features).toHaveLength(4);
      expect(state.features[0].title).toBe('实时热榜');
    });

    it('author 有默认值', () => {
      const state = useCoverStore.getState();
      expect(state.author).toBe('无乱码谈');
    });

    it('date 有默认值', () => {
      const state = useCoverStore.getState();
      expect(state.date).toBe('2026年5月10日');
    });

    it('rank 默认为 1', () => {
      const state = useCoverStore.getState();
      expect(state.rank).toBe(1);
    });

    it('projectName 有默认值', () => {
      const state = useCoverStore.getState();
      expect(state.projectName).toBe('decolua / 9router');
    });

    it('projectDesc 有默认值', () => {
      const state = useCoverStore.getState();
      expect(state.projectDesc).toContain('AI routing gateway');
    });

    it('tags 默认有 6 个元素（含空字符串）', () => {
      const state = useCoverStore.getState();
      expect(state.tags).toHaveLength(6);
      expect(state.tags[0]).toBe('AI');
    });

    it('stars 默认为 5.2k', () => {
      const state = useCoverStore.getState();
      expect(state.stars).toBe('5.2k');
    });

    it('trendText 默认为 持续上升', () => {
      const state = useCoverStore.getState();
      expect(state.trendText).toBe('持续上升');
    });
  });

  describe('setStyle', () => {
    it('能正确切换风格', () => {
      const { setStyle } = useCoverStore.getState();

      setStyle('minimal');
      expect(useCoverStore.getState().style).toBe('minimal');

      setStyle('neoncity');
      expect(useCoverStore.getState().style).toBe('neoncity');

      setStyle('chinared');
      expect(useCoverStore.getState().style).toBe('chinared');
    });

    it('切换风格不影响其他状态', () => {
      const { setStyle } = useCoverStore.getState();
      const prevPrefix = useCoverStore.getState().mainTitlePrefix;

      setStyle('nature');
      expect(useCoverStore.getState().mainTitlePrefix).toBe(prevPrefix);
    });
  });

  describe('setMainTitlePrefix / setMainTitleSuffix', () => {
    it('setMainTitlePrefix 能正确更新前缀', () => {
      const { setMainTitlePrefix } = useCoverStore.getState();

      setMainTitlePrefix('GitLab');
      expect(useCoverStore.getState().mainTitlePrefix).toBe('GitLab');
    });

    it('setMainTitleSuffix 能正确更新后缀', () => {
      const { setMainTitleSuffix } = useCoverStore.getState();

      setMainTitleSuffix('精选');
      expect(useCoverStore.getState().mainTitleSuffix).toBe('精选');
    });

    it('更新前后缀互不影响', () => {
      const { setMainTitlePrefix, setMainTitleSuffix } = useCoverStore.getState();

      setMainTitlePrefix('Gitee');
      expect(useCoverStore.getState().mainTitleSuffix).toBe('热榜');

      setMainTitleSuffix('推荐');
      expect(useCoverStore.getState().mainTitlePrefix).toBe('Gitee');
    });
  });

  describe('setProjectName / setProjectDesc', () => {
    it('setProjectName 能正确更新项目名', () => {
      const { setProjectName } = useCoverStore.getState();

      setProjectName('vuejs / vue');
      expect(useCoverStore.getState().projectName).toBe('vuejs / vue');
    });

    it('setProjectDesc 能正确更新项目描述', () => {
      const { setProjectDesc } = useCoverStore.getState();

      setProjectDesc('The progressive JavaScript framework.');
      expect(useCoverStore.getState().projectDesc).toBe(
        'The progressive JavaScript framework.'
      );
    });
  });

  describe('setTag', () => {
    it('能正确更新指定索引的标签', () => {
      const { setTag } = useCoverStore.getState();

      setTag(0, 'React');
      expect(useCoverStore.getState().tags[0]).toBe('React');

      setTag(2, 'TypeScript');
      expect(useCoverStore.getState().tags[2]).toBe('TypeScript');
    });

    it('更新一个标签不影响其他标签', () => {
      const { setTag } = useCoverStore.getState();
      const originalTags = [...useCoverStore.getState().tags];

      setTag(1, 'NewTag');
      const updated = useCoverStore.getState().tags;
      expect(updated[1]).toBe('NewTag');
      expect(updated[0]).toBe(originalTags[0]);
      expect(updated[2]).toBe(originalTags[2]);
    });
  });

  describe('setFeature', () => {
    it('能正确更新指定索引的特性的 title 字段', () => {
      const { setFeature } = useCoverStore.getState();

      setFeature(0, 'title', '新特性标题');
      expect(useCoverStore.getState().features[0].title).toBe('新特性标题');
    });

    it('能正确更新指定索引的特性的 desc 字段', () => {
      const { setFeature } = useCoverStore.getState();

      setFeature(1, 'desc', '新的描述内容');
      expect(useCoverStore.getState().features[1].desc).toBe('新的描述内容');
    });

    it('能正确更新指定索引的特性的 icon 字段', () => {
      const { setFeature } = useCoverStore.getState();

      setFeature(2, 'icon', 'rocket');
      expect(useCoverStore.getState().features[2].icon).toBe('rocket');
    });

    it('更新一个特性不影响其他特性', () => {
      const { setFeature } = useCoverStore.getState();
      const originalFeatures = useCoverStore.getState().features.map((f) => ({ ...f }));

      setFeature(0, 'title', 'Changed');
      const updated = useCoverStore.getState().features;
      expect(updated[0].title).toBe('Changed');
      expect(updated[1].title).toBe(originalFeatures[1].title);
      expect(updated[1].desc).toBe(originalFeatures[1].desc);
    });
  });

  describe('其他 setter 函数', () => {
    it('setSubtitle 能正确更新', () => {
      const { setSubtitle } = useCoverStore.getState();
      setSubtitle('新副标题');
      expect(useCoverStore.getState().subtitle).toBe('新副标题');
    });

    it('setAuthor 能正确更新', () => {
      const { setAuthor } = useCoverStore.getState();
      setAuthor('test-user');
      expect(useCoverStore.getState().author).toBe('test-user');
    });

    it('setDate 能正确更新', () => {
      const { setDate } = useCoverStore.getState();
      setDate('2026-01-01');
      expect(useCoverStore.getState().date).toBe('2026-01-01');
    });

    it('setRank 能正确更新', () => {
      const { setRank } = useCoverStore.getState();
      setRank(42);
      expect(useCoverStore.getState().rank).toBe(42);
    });

    it('setStars 能正确更新', () => {
      const { setStars } = useCoverStore.getState();
      setStars('10k');
      expect(useCoverStore.getState().stars).toBe('10k');
    });

    it('setTrendText 能正确更新', () => {
      const { setTrendText } = useCoverStore.getState();
      setTrendText('爆火中');
      expect(useCoverStore.getState().trendText).toBe('爆火中');
    });
  });
});
