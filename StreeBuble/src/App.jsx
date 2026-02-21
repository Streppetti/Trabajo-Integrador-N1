import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import Login from './pages/Login';
import ChatDashboard from './pages/ChatDashboard';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<ChatDashboard />} />
          <Route path="/chat/:id" element={<ChatDashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;