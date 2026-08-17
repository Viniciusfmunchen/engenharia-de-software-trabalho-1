import { mensagens } from "@/constantes/mensagens";
import { ENDPOINTS } from "@/constantes/rotas-api"
import { useCriar } from "@/hooks/mutacao"
import { simularProducaoSchema, type ProducaoSimulada, type SimularProducao } from "@/schemas/receita";
import { resolverZod } from "@/utils/resolver";
import { Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query"
import { Form, FormProvider, useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import { CampoTextoFormulario } from "../ui/formularios/campos";
import { useState } from "react";
import { formatarMoeda } from "./lista";
import Resumo from "../ui/resumo";
import { Inventory2 } from "@mui/icons-material";


const SimulacaoProducao = () => {
    const [searchParams] = useSearchParams();
    const idReceitaSelecionada = searchParams.get('idReceita');
    const [dadosSimulacao, setDadosSimulacao] = useState<ProducaoSimulada>()

    const queryClient = useQueryClient()
    const criarSimulacaoProducao = useCriar<ProducaoSimulada, SimularProducao>({
        onSuccess: (dadosSimulados) => {
            setDadosSimulacao(dadosSimulados)
            console.log('Simulacao concluida com sucesso:', dadosSimulados),
                queryClient.invalidateQueries({ queryKey: [ENDPOINTS.RECEITA.SIMULAR] })
        },
        onError: (erro) => {
            console.log('Erro ao simular producao:', erro)
        }
    })

    if (!idReceitaSelecionada) return 'Erro ao capturar id da receita'

    const form = useForm<SimularProducao>({
        resolver: resolverZod(simularProducaoSchema),
        defaultValues: {
            idReceita: Number(idReceitaSelecionada),
            lotes: 0
        }
    })

    const aoSubmeter = (values: SimularProducao) => {
        criarSimulacaoProducao.mutate({ endpoint: ENDPOINTS.RECEITA.SIMULAR, payload: values })
    }

    return (

        <Stack sx={{ gap: 2 }} >
            <Stack direction="row" sx={{ gap: 2, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography variant="h6" color="text.secondary">
                    {mensagens.simulation.title}
                </Typography>
                <FormProvider {...form}>
                    <Stack direction='row' spacing={2} onSubmit={form.handleSubmit(aoSubmeter)} component='form'>
                        <CampoTextoFormulario
                            name='lotes'
                            size="small"
                            label={mensagens.simulation.batches}
                            variant="outlined"
                            type="number"
                            slotProps={{ htmlInput: { min: 1 } }}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            {mensagens.actions.simulateProduction}
                        </Button>
                    </Stack>
                </FormProvider>
            </Stack>
            <Stack>
                {dadosSimulacao && <Stack spacing={2}>
                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack direction='row' sx={{ alignItems: 'center' }}>
                            <Resumo
                                icone={<Inventory2 fontSize="small" />}
                                rotulo="Custo estimado"
                                valor={formatarMoeda(dadosSimulacao?.custoEstimado)}
                            />
                            <Resumo
                                icone={<Inventory2 fontSize="small" />}
                                rotulo="Lotes "
                                valor={String(dadosSimulacao.lotes)}
                            />
                            <Resumo
                                icone={<Inventory2 fontSize="small" />}
                                rotulo="Máximo de lotes"
                                valor={String(dadosSimulacao?.maximoLotesPossivel)}
                            />
                        </Stack>
                        {!dadosSimulacao.ingredientesSuficientes && <Chip
                            color="error"
                            size="small"
                            label='Ingredientes insuficientes.'
                        />}
                    </Stack>
                    <Typography variant="h6">
                        Ingredientes necessarios
                        <Stack component="ul" sx={{ gap: 2, listStyle: 'none', p: 0 }}>
                            {dadosSimulacao.ingredientes.map((ingrediente, index) => (
                                <Stack
                                    key={index}
                                    component="li"
                                    direction={{ xs: 'column', sm: 'row' }}
                                    sx={{
                                        justifyContent: 'space-between',
                                        gap: 1,
                                        borderBottom: '1px solid #f1e7d8',
                                        py: 1,
                                    }}
                                >
                                    <Stack>
                                        <Typography variant="body1">{ingrediente.nomeIngrediente}</Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            ##falta categoria##
                                        </Typography>
                                    </Stack>
                                    <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                        {!ingrediente.suficiente && <Chip
                                            color="error"
                                            size="small"
                                            label='Ingredientes insuficientes.'
                                        />}
                                        <Typography variant="subtitle2">
                                            {ingrediente.quantidadeNecessaria}
                                        </Typography>
                                    </Stack>

                                </Stack>

                            ))}
                        </Stack>
                    </Typography>
                </Stack>
                }
            </Stack>
        </Stack>
    )
}

export default SimulacaoProducao