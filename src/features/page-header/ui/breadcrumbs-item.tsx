import { Icon } from "@iconify/react";
import { Link } from "@mui/joy"

export function BreadcrumbsItem({
  link,
  color,
  icon,
  label
}:{
  link: string;
  color: any;
  icon?: string;
  label?: string;
}) {
  return (
    <Link
      underline= {color == "neutral" ? "hover" : "none" }
      color={color}
      href={link}
      sx={{ fontSize: 12, fontWeight: 500 }}
    >
      {icon && <Icon icon={icon} />} 
      {label && label}
    </Link>
  )
}