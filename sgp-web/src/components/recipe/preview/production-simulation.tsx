import { Button, Stack, TextField, Typography } from '@mui/material'


const ProductionSimulation = () => {
    return (
        <Stack sx={{ gap: 2 }}>
            <Typography variant="h6" color="text.secondary">
                #Simular Produção#
            </Typography>
            <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
                <TextField size='small' label="#Quantidade#" variant="outlined" type='number' />
                <Button variant="contained" color="primary" onClick={() => { }}>
                    #Simular#
                </Button>
            </Stack>
        </Stack>
    )
}

export default ProductionSimulation