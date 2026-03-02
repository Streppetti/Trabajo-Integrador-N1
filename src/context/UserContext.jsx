import { createContext, useState, useContext } from 'react';

    const UserContext = createContext();

    export const UserProvider = ({ children }) => {
    
    const [jugador, setJugador] = useState({
        nombre: "",
        oro: 1000,       
        inventario: []
    });

    const procesarCompra = (itemElegido) => {
        if (jugador.oro >= itemElegido.precio) {
        
        setJugador((prevJugador) => ({
            ...prevJugador,
            oro: prevJugador.oro - itemElegido.precio,
            inventario: [...prevJugador.inventario, itemElegido]
        }));
        
        return true;

        } else {
        return false;
        }
    };

    const definirNombre = (nuevoNombre) => {
        setJugador(prev => ({ ...prev, nombre: nuevoNombre }));
    };

    return (
        <UserContext.Provider value={{ jugador, procesarCompra, definirNombre }}>
        {children}
        </UserContext.Provider>
    );
    };

export const useUser = () => useContext(UserContext);