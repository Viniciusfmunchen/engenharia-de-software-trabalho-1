import { Stack } from '@mui/material'
import Summary from '../ui/summary'
import { formatCurrencyFromCents } from '@/mock/breadRecipesMock'
import { formatCurrency } from './list'
import { messages } from '@/constants/messages'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { formatTime } from './list'
import type { Receita } from '@/schemas/recipe'

interface Props {
    receita: Receita
}

const RecipeSummary = ({ receita }: Props) => {
    return (
        <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
            <Summary
                icon={<AttachMoneyIcon fontSize="small" />}
                label={messages.pages.recipes.salePrice}
                value={formatCurrencyFromCents(receita.precoVenda)}
            />
            <Summary
                icon={<Inventory2Icon fontSize="small" />}
                label={messages.pages.recipes.recipeCost}
                value={formatCurrency(receita.precoPorReceita)}
            />
            <Summary
                icon={<AttachMoneyIcon fontSize="small" />}
                label={messages.pages.recipes.costPerUnit}
                value={formatCurrency(receita.precoPorUnidade)}
            />
            <Summary
                icon={<AccessTimeIcon fontSize="small" />}
                label={messages.pages.recipes.preparation}
                value={formatTime(receita.tempoPreparacao)}
            />
        </Stack>
    )
}

export default RecipeSummary