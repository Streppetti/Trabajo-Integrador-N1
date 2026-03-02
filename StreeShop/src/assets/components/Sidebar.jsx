import { vendedores } from "../data";
import { useUser } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom"; 

const Sidebar = () => {
    const { jugador } = useUser();
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-user">
                    <span className="sidebar-nombre">👤 {jugador.nombre}</span>
                    <span className="sidebar-oro">💰 {jugador.oro}</span>
                </div>
                <button className="sidebar-inventario-btn" onClick={() => navigate("/inventario")}>
                    [ VER INVENTARIO ]
                </button>
            </div>

            <div className="sidebar-lista">
                {vendedores.map((vendedor) => {
                    if (vendedor.isSecret) return null;
                    return (
                        <div
                            key={vendedor.id}
                            onClick={() => navigate(`/chat/${vendedor.id}`)}
                            className={`sidebar-vendedor ${id === vendedor.id ? 'activo' : ''}`}
                        >
                            <div className="sidebar-avatar">
                                <img src={vendedor.avatar} alt={vendedor.nombre} />
                            </div>
                            <div className="sidebar-vendedor-info">
                                <h4>{vendedor.nombre}</h4>
                                <p>Toca para comerciar...</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="sidebar-footer">
                🎮 StreeShop
            </div>
        </div>
    );
};

export default Sidebar;