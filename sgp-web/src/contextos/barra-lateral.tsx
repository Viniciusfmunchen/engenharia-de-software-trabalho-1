import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';

interface ValorContextoBarraLateral {
  recolhida: boolean;
  setRecolhida: Dispatch<SetStateAction<boolean>>;
  alternarRecolhida: () => void;
}

const ContextoBarraLateral = createContext<ValorContextoBarraLateral | null>(null);

export const useBarraLateral = () => {
  const context = useContext(ContextoBarraLateral);

  if (!context) {
    throw new Error('useBarraLateral deve ser utilizado dentro de um ProvedorBarraLateral');
  }

  return context;
};

export const ProvedorBarraLateral = ({ children }: PropsWithChildren) => {
  const [recolhida, setRecolhida] = useState(false);

  const value = useMemo(
    () => ({
      recolhida,
      setRecolhida,
      alternarRecolhida: () => setRecolhida((atual) => !atual),
    }),
    [recolhida],
  );

  return (
    <ContextoBarraLateral.Provider value={value}>{children}</ContextoBarraLateral.Provider>
  );
};
