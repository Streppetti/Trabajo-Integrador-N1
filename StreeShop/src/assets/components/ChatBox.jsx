import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { vendedores } from '../data';
import { useUser } from '../../context/UserContext';

const ChatBox = () => {
    const { id } = useParams();
    const { jugador, procesarCompra } = useUser();
    const navigate = useNavigate();
    const chatActivo = vendedores.find(v => v.id === id);
    const [mensaje, setMensaje] = useState("");
    const [historial, setHistorial] = useState([]);
    const [pasoBot, setPasoBot] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (chatActivo) {
            setPasoBot(0);
            setHistorial([
                { emisor: 'bot', texto: chatActivo.saludo },
                { emisor: 'sistema', texto: "Para ver Items (ESCRIBE 'SI' O 'COMPRAR')" }
            ]);
        }
    }, [id]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [historial]);

    const manejarEnvio = (e) => {
        e.preventDefault();
        const textoLimpio = mensaje.trim();
        if (textoLimpio === "" || !chatActivo) return;

        setHistorial(prev => [...prev, { emisor: 'user', texto: textoLimpio }]);
        setMensaje("");

        const comando = textoLimpio.toLowerCase();
        let respuestas = [];
        let nuevoPaso = pasoBot;

        if (pasoBot === 0) {
            if (comando === "comprar" || comando === "si" || comando === "sí") {
                const listaFormateada = chatActivo.catalogo
                    .map(item => `▶ [${item.id}] ${item.nombre} -- ${item.precio}G`)
                    .join("\n");
                respuestas.push({ emisor: 'bot', texto: "¡EXCELENTE! MIRA MIS TESOROS..." });
                respuestas.push({ emisor: 'sistema', texto: `--- LISTA DE ARTICULOS ---\n${listaFormateada}\n\n[ ESCRIBE EL NUMERO PARA COMPRAR ]` });
                nuevoPaso = 1;
            } else {
                respuestas.push({ emisor: 'bot', texto: "NO ENTIENDO TUS PALABRAS, FORASTERO. ¿VAS A COMPRAR? (SI/NO)" });
            }
        } else if (pasoBot === 1) {
            const itemEncontrado = chatActivo.catalogo.find(item => item.id === parseInt(comando));
            if (itemEncontrado) {
                const sePudoComprar = procesarCompra(itemEncontrado);
                respuestas.push({ emisor: 'bot', texto: sePudoComprar ? `¡GRACIAS! HAS ADQUIRIDO [${itemEncontrado.nombre}]. ${chatActivo.compraExitosa}` : chatActivo.sinDinero });
                respuestas.push({ emisor: 'sistema', texto: "[ ¿DESEAS ALGO MAS? ESCRIBE 'SI' PARA VER LA LISTA ]" });
                nuevoPaso = 0;
            } else {
                respuestas.push({ emisor: 'bot', texto: "ESE OBJETO NO EXISTE EN MI TIENDA." });
            }
        }

        setPasoBot(nuevoPaso);
        setTimeout(() => setHistorial(prev => [...prev, ...respuestas]), 600);
    };

    if (!chatActivo) {
        return (
            <div className="chatbox-vacio">
                <h3>VENDEDOR DESCONOCIDO...</h3>
            </div>
        );
    }

    return (
        <div className="chatbox">
            <div className="chatbox-header">
                <button className="chatbox-volver" onClick={() => navigate('/chat')}>
                    ◀ VOLVER
                </button>
                <div className="chatbox-header-avatar">
                    <img src={chatActivo.avatar} alt="avatar" />
                </div>
                <h3>{chatActivo.nombre}</h3>
            </div>

            <div className="chatbox-mensajes" ref={scrollRef}>
                {historial.map((msg, index) => (
                    <div key={index} className={`chatbox-burbuja ${msg.emisor}`}>
                        <span className="chatbox-emisor">
                            {msg.emisor === 'user' ? `> ${jugador.nombre}` : msg.emisor === 'sistema' ? '> INFO' : `> ${chatActivo.nombre}`}
                        </span>
                        <p>{msg.texto}</p>
                    </div>
                ))}
            </div>

            <div className="chatbox-input">
                <form onSubmit={manejarEnvio}>
                    <input
                        type="text"
                        placeholder="ESCRIBE..."
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;