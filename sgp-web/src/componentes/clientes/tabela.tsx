import { mensagens } from '@/constantes/mensagens';
import type { Cliente } from '@/schemas/cliente';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';

interface PropriedadesTabelaClientes {
  linhas?: Cliente[];
}

const TabelaClientes = ({ linhas = [] }: PropriedadesTabelaClientes) => {
  const dados = linhas;

  const colunas: ColunaTabela<Cliente>[] = [
    {
      id: 'nome',
      label: mensagens.comum.clientes,
      render: (linha) => linha.nome,
      sortAccessor: (linha) => linha.nome,
    },
    {
      id: 'documento',
      label: mensagens.comum.documento,
      render: (linha) => linha.documento,
      sortAccessor: (linha) => linha.documento,
    },
    {
      id: 'telefone',
      label: mensagens.comum.telefone,
      render: (linha) => linha.telefone,
      sortAccessor: (linha) => linha.telefone,
    },
  ];

  return (
    <Tabela
      colunas={colunas}
      linhas={dados}
      obterIdLinha={(linha) => linha.idCliente}
      ordenacaoPadrao={{ columnId: 'nome', direction: 'asc' }}
    />
  );
};

export default TabelaClientes;
