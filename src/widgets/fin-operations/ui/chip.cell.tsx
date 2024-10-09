import { Icon } from "@iconify/react";
import { Chip, ColorPaletteProp } from "@mui/joy";

export function ChipCell({
  icon,
  color,
  label,
}: {
  icon: string;
  color: ColorPaletteProp;
  label: string;
}) {
  return (
    <Chip
      variant="soft"
      size="sm"
      startDecorator={<Icon icon={icon} />}
      color={color}
    >
      {label}
    </Chip>
  )
}