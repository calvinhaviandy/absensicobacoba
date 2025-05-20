import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DashboardGuru from './pages/DashboardGuru';
import DashboardSiswa from './pages/DashboardSiswa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/guru" element={<DashboardGuru />} />
        <Route path="/siswa" element={<DashboardSiswa />} />
      </Routes>
    </Router>
  );
}

export default App;