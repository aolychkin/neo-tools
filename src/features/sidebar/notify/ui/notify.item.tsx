import { Stack, Typography, IconButton, LinearProgress, Button, Card } from "@mui/joy";

export function NotifyItem({
  title,
  description,
  progress,
  buttonText,
  color,
}: {
  title: string;
  description: string;
  progress: number;
  buttonText: string;
  color: any
}) {
  return (
    <Card
      invertedColors
      variant="soft"
      color={color}
      size="sm"
      sx={{ boxShadow: 'none' }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography level="title-sm" fontWeight={600}>{title}</Typography>
      </Stack>
      <Typography level="body-xs">
        {description}
      </Typography>
      <LinearProgress variant="outlined" value={progress} determinate sx={{ my: 1 }} />
      <Button size="sm" variant="solid">
        {buttonText}
      </Button>
    </Card>
  )
}