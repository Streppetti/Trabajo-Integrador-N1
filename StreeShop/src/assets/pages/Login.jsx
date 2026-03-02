import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import fondoLogin from "../media/fondo_desk.jpg";

const Login = () => {
    const [inputNombre, setInputNombre] = useState("");
    const { definirNombre } = useUser();
    const navigate = useNavigate();

    const manejarLogin = (e) => {
        e.preventDefault();
        if (inputNombre.trim() === "") return alert("¡Dime tu nombre, viajero!");
        definirNombre(inputNombre);
        navigate("/chat");
    };

    return (
        <div className="login-bg" style={{ backgroundImage: `url(${fondoLogin})` }}>
            <div className="login-overlay" />
            <form className="login-card" onSubmit={manejarLogin}>
                <h1 className="login-title">🎮 STREE SHOP</h1>
                <p className="login-subtitle">¿COMO TE LLAMAS, VIAJERO?</p>
                <input
                    type="text"
                    value={inputNombre}
                    onChange={(e) => setInputNombre(e.target.value)}
                    placeholder="ESCRIBE AQUI..."
                    className="login-input"
                />
                <button type="submit" className="login-btn">
                    [ COMENZAR AVENTURA ]
                </button>
            </form>
        </div>
    );
};

export default Login;