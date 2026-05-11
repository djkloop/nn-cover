import { useCoverStore } from '@/store/coverStore';
import StyleTech from './styles/StyleTech';
import StyleHackerNews from './styles/StyleHackerNews';
import StyleMinimal from './styles/StyleMinimal';
import StyleCyberpunk from './styles/StyleCyberpunk';
import StyleTerminal from './styles/StyleTerminal';
import StyleSunset from './styles/StyleSunset';
import StyleAurora from './styles/StyleAurora';
import StyleNoir from './styles/StyleNoir';
import StyleChinaRed from './styles/StyleChinaRed';
import StyleMint from './styles/StyleMint';
import StyleNeonCity from './styles/StyleNeonCity';
import StyleDashboard from './styles/StyleDashboard';
import StyleVinyl from './styles/StyleVinyl';
import StyleNature from './styles/StyleNature';
import StyleSakura from './styles/StyleSakura';
import StylePixel from './styles/StylePixel';
import StylePaperNote from './styles/StylePaperNote';
import StyleOceanDeep from './styles/StyleOceanDeep';
import StyleForestDark from './styles/StyleForestDark';
import StyleGoldenLux from './styles/StyleGoldenLux';
import StyleGitHubTrending from './styles/StyleGitHubTrending';
import StyleViralHeadline from './styles/StyleViralHeadline';

const styleComponents: Record<string, React.ComponentType> = {
  tech: StyleTech,
  hackernews: StyleHackerNews,
  minimal: StyleMinimal,
  cyberpunk: StyleCyberpunk,
  terminal: StyleTerminal,
  sunset: StyleSunset,
  aurora: StyleAurora,
  noir: StyleNoir,
  chinared: StyleChinaRed,
  mint: StyleMint,
  neoncity: StyleNeonCity,
  dashboard: StyleDashboard,
  vinyl: StyleVinyl,
  nature: StyleNature,
  sakura: StyleSakura,
  pixel: StylePixel,
  papernote: StylePaperNote,
  oceandeep: StyleOceanDeep,
  forestdark: StyleForestDark,
  goldenlux: StyleGoldenLux,
  githubtrending: StyleGitHubTrending,
  viralheadline: StyleViralHeadline,
};

export default function CoverPreview() {
  const style = useCoverStore((s) => s.style);
  const StyleComponent = styleComponents[style] || StyleTech;

  return <StyleComponent />;
}
