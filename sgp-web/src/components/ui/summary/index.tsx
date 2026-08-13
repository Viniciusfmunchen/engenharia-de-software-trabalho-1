import { Stack, Typography } from "@mui/material";

const Summary = ({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) => (
    <Stack
        direction="row"
        sx={{
            alignItems: 'center',
            gap: 1,
            minWidth: 150,
            color: 'text.secondary',
        }}
    >
        {icon}
        <Stack>
            <Typography variant="caption">{label}</Typography>
            <Typography variant="subtitle2" color="text.primary">
                {value}
            </Typography>
        </Stack>
    </Stack>
);

export default Summary;