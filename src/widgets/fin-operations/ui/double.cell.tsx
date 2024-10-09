import { Stack, Typography } from "@mui/joy";

export function DoubleCell({
  topLine,
  bottomLine,
}: {
  topLine: string;
  bottomLine: string;
  }) {
  return (
    <Stack
      direction="column"
      spacing={0}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
        minWidth: 0,
        my: 0.5
      }}>
      <Typography level="body-sm" noWrap>{topLine}</Typography>
      <Typography level="body-xs" noWrap>{bottomLine}</Typography>
    </Stack>
  )
}