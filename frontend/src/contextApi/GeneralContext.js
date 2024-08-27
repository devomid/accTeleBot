import { createContext, useContext, useState } from 'react';

const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
    const [dbModal, setDbModal] = useState(false);

    return (
        <GeneralContext.Provider value={{
            dbModal, setDbModal
        }}>
            {children}
        </GeneralContext.Provider>
    )
};

export const GeneralState = () => {
    return useContext(GeneralContext);
};

export default GeneralProvider