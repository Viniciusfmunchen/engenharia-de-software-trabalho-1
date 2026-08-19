import Conteiner from '@/componentes/ui/conteiner';
import TabelaFornecedores from '@/componentes/fornecedores/tabela';
import { mensagens } from '@/constantes/mensagens';
import { coresPadaria } from '@/tema';
import type { Fornecedor, CriarFornecedor } from '@/schemas/fornecedor';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import { useState } from 'react';
import FormularioFornecedor from '@/componentes/fornecedores/formulario';

const AbaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [formularioFornecedorAberto, setFormularioFornecedorAberto] = useState(false);

  const manipularAdicionarFornecedor = (valores: CriarFornecedor) => {
    const novoFornecedor: Fornecedor = {
      idFornecedor: fornecedores.length + 1,
      nome: valores.nome,
      documento: valores.documento,
      telefone: valores.telefone,
      nomeContato: valores.nomeContato,
    };
    setFornecedores([...fornecedores, novoFornecedor]);
    // TODO: Usar mutation para salvar no backend
  };

  return (
    <>
      <Conteiner
        titulo={mensagens.comum.fornecedores}
        acao={
          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            sx={{
              bgcolor: coresPadaria.barraLateral,
              color: coresPadaria.textoClaro,
              '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
            }}
            onClick={() => setFormularioFornecedorAberto(true)}
          >
            {mensagens.acoes.adicionarFornecedor}
          </Button>
        }
        semEspacamento
      >
        <TabelaFornecedores linhas={fornecedores} />
      </Conteiner>
      
      <FormularioFornecedor
        aberto={formularioFornecedorAberto}
        aoFechar={() => setFormularioFornecedorAberto(false)}
        aoSubmeter={manipularAdicionarFornecedor}
      />
    </>
  );
};

export default AbaFornecedores;
