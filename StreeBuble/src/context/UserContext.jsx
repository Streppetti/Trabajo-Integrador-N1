import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("Invitado");

    const dataCompartida = {
        currentUser,
        setCurrentUser
    };

    return (
        <UserContext.Provider value={dataCompartida}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;