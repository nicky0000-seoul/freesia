import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import StatsPage from './components/StatsPage';

// 통합 앱에서는 채팅(홈)·기록·통계 3개 화면만 사용
function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
