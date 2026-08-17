import { mensagens } from '@/constantes/mensagens';
import type { Cliente } from '@/tipos/cliente';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';

interface PropriedadesTabelaClientes {
  linhas?: Cliente[];
  rows?: Cliente[];
}

const TabelaClientes = ({ linhas, rows }: PropriedadesTabelaClientes) => {
  const dados = linhas ?? rows ?? [];

  const colunas: ColunaTabela<Cliente>[] = [
    {
      id: 'nome',
      label: mensagens.common.customers,
      render: (linha) => linha.nome,
      sortAccessor: (linha) => linha.nome,
    },
    {
      id: 'documento',
      label: mensagens.common.document,
      render: (linha) => linha.documento,
      sortAccessor: (linha) => linha.documento,
    },
    {
      id: 'telefone',
      label: mensagens.common.phone,
      render: (linha) => linha.telefone,
      sortAccessor: (linha) => linha.telefone,
    },
  ];

  return (
    <Tabela
      columns={colunas}
      rows={dados}
      getRowId={(linha) => linha.idCliente}
      defaultSort={{ columnId: 'nome', direction: 'asc' }}
    />
  );
};

export default TabelaClientes;
