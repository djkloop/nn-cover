import { create } from 'zustand';

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export type CoverStyle = 'tech' | 'hackernews' | 'minimal' | 'cyberpunk' | 'terminal' | 'sunset' | 'aurora' | 'noir' | 'chinared' | 'mint' | 'neoncity' | 'dashboard' | 'vinyl' | 'nature' | 'sakura' | 'pixel' | 'papernote' | 'oceandeep' | 'forestdark' | 'goldenlux' | 'githubtrending' | 'viralheadline';

export type LayoutMode = 'card' | 'headline';

export interface CoverState {
  style: CoverStyle;
  layoutMode: LayoutMode;
  mainTitlePrefix: string;
  mainTitleSuffix: string;
  subtitle: string;
  features: Feature[];
  author: string;
  date: string;
  rank: number;
  projectName: string;
  projectDesc: string;
  tags: string[];
  stars: string;
  trendText: string;

  setMainTitlePrefix: (v: string) => void;
  setMainTitleSuffix: (v: string) => void;
  setSubtitle: (v: string) => void;
  setFeature: (index: number, field: keyof Feature, value: string) => void;
  setAuthor: (v: string) => void;
  setDate: (v: string) => void;
  setRank: (v: number) => void;
  setProjectName: (v: string) => void;
  setProjectDesc: (v: string) => void;
  setTag: (index: number, value: string) => void;
  setStars: (v: string) => void;
  setTrendText: (v: string) => void;
  setStyle: (v: CoverStyle) => void;
  setLayoutMode: (v: LayoutMode) => void;
}

export const useCoverStore = create<CoverState>((set) => ({
  style: 'tech',
  layoutMode: 'card',
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

  setMainTitlePrefix: (v) => set({ mainTitlePrefix: v }),
  setMainTitleSuffix: (v) => set({ mainTitleSuffix: v }),
  setSubtitle: (v) => set({ subtitle: v }),
  setFeature: (index, field, value) =>
    set((state) => {
      const newFeatures = [...state.features];
      newFeatures[index] = { ...newFeatures[index], [field]: value };
      return { features: newFeatures };
    }),
  setAuthor: (v) => set({ author: v }),
  setDate: (v) => set({ date: v }),
  setRank: (v) => set({ rank: v }),
  setProjectName: (v) => set({ projectName: v }),
  setProjectDesc: (v) => set({ projectDesc: v }),
  setTag: (index, value) =>
    set((state) => {
      const newTags = [...state.tags];
      newTags[index] = value;
      return { tags: newTags };
    }),
  setStars: (v) => set({ stars: v }),
  setTrendText: (v) => set({ trendText: v }),
  setStyle: (v) => set({ style: v }),
  setLayoutMode: (v) => set({ layoutMode: v }),
}));
