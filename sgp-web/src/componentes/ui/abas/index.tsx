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
  rotulo: string;
  conteudo: ReactNode;
  desativado?: boolean;
}

interface PropriedadesAbas {
  abas: ItemAba[];
  valorPadrao?: number;
  valor?: number;
  aoMudar?: (valor: number) => void;
  rotuloAria?: string;
  sxPainel?: SxProps<Theme>;
}

const Abas = ({
  abas,
  valorPadrao = 0,
  valor,
  aoMudar,
  rotuloAria = mensagens.abas.navegacao,
  sxPainel,
}: PropriedadesAbas) => {
  const id = useId();
  const [valorInterno, setValorInterno] = useState(valorPadrao);

  const valorAtual = valor ?? valorInterno;

  const manipularMudanca = (_: SyntheticEvent, novoValor: number) => {
    setValorInterno(novoValor);
    aoMudar?.(novoValor);
  };

  return (
    <RaizAbas>
      <CabecalhoAbas>
        <AbasEstilizadas value={valorAtual} onChange={manipularMudanca} aria-label={rotuloAria}>
          {abas.map((aba, indice) => (
            <AbaEstilizada
              key={aba.rotulo}
              label={aba.rotulo}
              iconPosition="start"
              disabled={aba.desativado}
              id={`${id}-tab-${indice}`}
              aria-controls={`${id}-tabpanel-${indice}`}
            />
          ))}
        </AbasEstilizadas>
      </CabecalhoAbas>

      {abas.map((aba, indice) => (
        <PainelAbaEstilizado
          key={aba.rotulo}
          role="tabpanel"
          hidden={valorAtual !== indice}
          id={`${id}-tabpanel-${indice}`}
          aria-labelledby={`${id}-tab-${indice}`}
          sx={sxPainel}
        >
          {valorAtual === indice && aba.conteudo}
        </PainelAbaEstilizado>
      ))}
    </RaizAbas>
  );
};

export default Abas;
