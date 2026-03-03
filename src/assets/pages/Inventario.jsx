import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Inventario = () => {
    const { jugador } = useUser();
    const navigate = useNavigate();

    const slots = Array(12).fill(null);
    jugador.inventario.forEach((item, i) => slots[i] = item);

    return (
        <div className="inventario-bg">
            <div className="inventario-card">
                <div className="inventario-header">
                    <h2> MOCHILA 🎒 </h2>
                    <button onClick={() => navigate(-1)}>[ VOLVER ]</button>
                </div>

                <div className="inventario-grid">
                    {slots.map((item, i) => (
                        <div key={i} className={`inventario-slot ${item ? 'ocupado' : ''}`}>
                            {item ? (
                                <img src={item.imagen} alt={item.nombre} />
                            ) : (
                                <span>{i + 1}</span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="inventario-footer">
                    <p>ORO DISPONIBLE: <span>{jugador.oro}G</span></p>
                </div>
            </div>
        </div>
    );
};

export default Inventario;