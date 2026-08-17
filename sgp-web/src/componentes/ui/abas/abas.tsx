import { mensagens } from '@/constantes/mensagens';
import type { SxProps, Theme } from '@mui/material';
import type { ReactNode, SyntheticEvent } from 'react';
import { useId, useState } from 'react';

import {
  AbaEstilizada,
  AbasEstilizadas,
  CabecalhoAbas,
  PainelAbaEstilizado,
  RaizAbas,
} from './estilos';

export interface ItemAba {
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

interface PropriedadesAbas {
  tabs: ItemAba[];
  defaultValue?: number;
  value?: number;
  onChange?: (valor: number) => void;
  ariaLabel?: string;
  panelSx?: SxProps<Theme>;
}

const Abas = ({
  tabs,
  defaultValue = 0,
  value,
  onChange,
  ariaLabel = mensagens.tabs.navigation,
  panelSx,
}: PropriedadesAbas) => {
  const id = useId();
  const [valorInterno, setValorInterno] = useState(defaultValue);

  const valorAtual = value ?? valorInterno;

  const manipularMudanca = (_: SyntheticEvent, novoValor: number) => {
    setValorInterno(novoValor);
    onChange?.(novoValor);
  };

  return (
    <RaizAbas>
      <CabecalhoAbas>
        <AbasEstilizadas value={valorAtual} onChange={manipularMudanca} aria-label={ariaLabel}>
          {tabs.map((aba, indice) => (
            <AbaEstilizada
              key={aba.label}
              label={aba.label}
              iconPosition="start"
              disabled={aba.disabled}
              id={`${id}-tab-${indice}`}
              aria-controls={`${id}-tabpanel-${indice}`}
            />
          ))}
        </AbasEstilizadas>
      </CabecalhoAbas>

      {tabs.map((aba, indice) => (
        <PainelAbaEstilizado
          key={aba.label}
          role="tabpanel"
          hidden={valorAtual !== indice}
          id={`${id}-tabpanel-${indice}`}
          aria-labelledby={`${id}-tab-${indice}`}
          sx={panelSx}
        >
          {valorAtual === indice && aba.content}
        </PainelAbaEstilizado>
      ))}
    </RaizAbas>
  );
};

export default Abas;
