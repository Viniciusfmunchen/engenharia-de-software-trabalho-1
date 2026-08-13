import { Stack } from '@mui/material'
import Summary from '../ui/summary'
import type { Recipe } from '@/types/recipe'
import { formatCurrencyFromCents } from '@/mock/breadRecipesMock'
import { formatCurrency } from './list'
import { messages } from '@/constants/messages'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { formatTime } from './list'

interface Props {
    recipe: Recipe
}

const RecipeSummary = ({ recipe }: Props) => {
    return (
        <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
            <Summary
                icon={<AttachMoneyIcon fontSize="small" />}
                label={messages.pages.recipes.salePrice}
                value={formatCurrencyFromCents(recipe.salePrice)}
            />
            <Summary
                icon={<Inventory2Icon fontSize="small" />}
                label={messages.pages.recipes.recipeCost}
                value={formatCurrency(0)}
            />
            <Summary
                icon={<AttachMoneyIcon fontSize="small" />}
                label={messages.pages.recipes.costPerUnit}
                value={formatCurrency(0)}
            />
            <Summary
                icon={<AccessTimeIcon fontSize="small" />}
                label={messages.pages.recipes.preparation}
                value={formatTime(recipe.preparationTime)}
            />
        </Stack>
    )
}

export default RecipeSummary