import { createContext, useContext, useState, useMemo } from 'react';

const PhilosophyContext = createContext(undefined);

export function PhilosophyProvider({ children }) {
    const [isPhilosophical, setIsPhilosophical] = useState(false);

    const togglePhilosophy = () => {
        setIsPhilosophical(prev => !prev);
    };

    const value = useMemo(() => ({
        isPhilosophical,
        togglePhilosophy
    }), [isPhilosophical]);

    return (
        <PhilosophyContext.Provider value={value}>
            {children}
        </PhilosophyContext.Provider>
    );
}

export function usePhilosophy() {
    const context = useContext(PhilosophyContext);
    if (context === undefined) {
        throw new Error('usePhilosophy must be used within a PhilosophyProvider');
    }
    return context;
}
