import ThemeToggle from './ThemeToggle';
import './AppHeader.css';

// 홈·히스토리·통계 공통 헤더
const AppHeader = () => (
  <header className="app-header">
    <div className="app-header-text">
      <p className="header-subtitle">emotional coaching service</p>
      <h1 className="header-title">프리지아</h1>
    </div>
    <ThemeToggle />
  </header>
);

export default AppHeader;
