import Conteiner from '@/componentes/ui/conteiner';
import TabelaClientes from '@/componentes/clientes/tabela';
import { mensagens } from '@/constantes/mensagens';
import { coresPadaria } from '@/tema';
import type { Cliente, CriarCliente } from '@/schemas/cliente';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useState } from 'react';
import FormularioCliente from '@/componentes/clientes/formulario';

const AbaClientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [formularioClienteAberto, setFormularioClienteAberto] = useState(false);

  const manipularAdicionarCliente = (valores: CriarCliente) => {
    const novoCliente: Cliente = {
      idCliente: clientes.length + 1,
      nome: valores.nome,
      documento: valores.documento,
      telefone: valores.telefone,
    };
    setClientes([...clientes, novoCliente]);
    // TODO: Usar mutation para salvar no backend
  };

  return (
    <>
      <Conteiner
        titulo={mensagens.comum.clientes}
        acao={
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: coresPadaria.barraLateral,
              color: coresPadaria.textoClaro,
              '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
            }}
            onClick={() => setFormularioClienteAberto(true)}
          >
            {mensagens.acoes.adicionarCliente}
          </Button>
        }
        semEspacamento
      >
        <TabelaClientes linhas={clientes} />
      </Conteiner>
      <FormularioCliente
        aberto={formularioClienteAberto}
        aoFechar={() => setFormularioClienteAberto(false)}
        aoSubmeter={manipularAdicionarCliente}
      />
    </>
  );
};

export default AbaClientes;
