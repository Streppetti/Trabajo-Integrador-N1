import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatDashboard from './assets/pages/ChatDashboard';
import Inventario from './assets/pages/Inventario';
import ChatBox from './assets/components/ChatBox';
import Login from './assets/pages/Login';

function App() {
    return (
        <BrowserRouter>
        <Routes>
        {/* Login */}
            <Route path="/" element={<Login />} />
        {/* Dashboard */}
            <Route path="/chat" element={<ChatDashboard />}>
        {/* ChatBox */}
            <Route path=":id" element={<ChatBox />} />

            <Route index element={
                    <div style={
                        {
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: '#e5ddd5'
                        }}>
                    <h3>Selecciona una tienda para empezar a comprar</h3>
                    </div>
                }/>
            </Route>
        {/* Inventario*/}
            <Route path="/inventario" element={<Inventario />} />
        </Routes>
        </BrowserRouter>
    );
}   

export default App;