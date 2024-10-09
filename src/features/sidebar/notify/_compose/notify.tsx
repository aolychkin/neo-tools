import { Icon } from "@iconify/react";
import { Stack, Typography, IconButton, LinearProgress, Button, Card, Box } from "@mui/joy";
import { NotifyItem } from "../ui/notify.item";
import { NotifyCard } from "../../../../entities/nav/entities";

export function Notify({
  notifyItems
}: {
  notifyItems: NotifyCard[]
}) {
  return (
    <>
      {notifyItems.map((item: NotifyCard) => (
        <>
          {item.id % 2 === 0 && <Box sx={{ my: 0.5 }}></Box>}
          <NotifyItem
            title={item.title}
            description={item.description}
            progress={item.progress}
            buttonText={item.button}
            color={item.color}
          />
        </>
      ))}
    </>
  )
}