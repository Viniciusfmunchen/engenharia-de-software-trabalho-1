import { mensagens } from '@/constantes/mensagens';
import type { Fornecedor } from '@/tipos/fornecedor';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';

interface PropriedadesTabelaFornecedores {
  linhas?: Fornecedor[];
  rows?: Fornecedor[];
}

const TabelaFornecedores = ({ linhas, rows }: PropriedadesTabelaFornecedores) => {
  const dados = linhas ?? rows ?? [];

  const colunas: ColunaTabela<Fornecedor>[] = [
    {
      id: 'nome',
      label: mensagens.common.supplier,
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
    {
      id: 'nomeContato',
      label: mensagens.common.contactName,
      render: (linha) => linha.nomeContato,
      sortAccessor: (linha) => linha.nomeContato,
    },
  ];

  return (
    <Tabela
      columns={colunas}
      rows={dados}
      getRowId={(linha) => linha.idFornecedor}
      defaultSort={{ columnId: 'nome', direction: 'asc' }}
    />
  );
};

export default TabelaFornecedores;
