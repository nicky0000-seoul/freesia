import ThemeToggle from './ThemeToggle';
import SectionTabs from './SectionTabs';
import './AppHeader.css';

// 채팅·히스토리·통계 공통 헤더: 제목 + 테마 전환 + 화면 탭 (스크롤해도 위에 고정)
const AppHeader = () => (
  <header className="app-header">
    <div className="app-header-top">
      <div className="app-header-text">
        <p className="header-subtitle">emotional coaching service</p>
        <h1 className="header-title">프리지아</h1>
      </div>
      <ThemeToggle />
    </div>
    <SectionTabs />
  </header>
);

export default AppHeader;
