import { Sheet, DialogTitle, ModalClose, Grid, Stack, Box, Typography, Card, CardContent, Link } from "@mui/joy";
import { DoubleCell } from "./double.cell";
import { FundCard } from "./fund.card";
import { FundTree, getFundTreeByManualOperationID } from "../api/get";
import { useSearchParams } from "react-router-dom";

export function FundDrawer() {
  const data = getFundTreeByManualOperationID()
  console.log(data.Child)

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Sheet
      sx={{
        borderRadius: 'md',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        height: '100%',
        overflow: 'auto',
      }}
    >
      <DialogTitle>Распределение операции по фондам</DialogTitle>
      <ModalClose />
      <Typography>Выручка 100 тыс.</Typography>
      <Grid container
        direction="row"
        spacing={2}
        sx={{
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}>
        <Grid md={2}>
          Информация выбранной операции
          <Stack
            direction="column"
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: '100%'
            }}
          >
            {/* {data.Child && data.Child.map((item: FundTree, index) => (
              <FundCard label={item.FundLabel} value={item.Value} cardHeight={item.Value / data.Value * 100} query={"?ch1=" + item.FundID}/>
            ))} */}
          </Stack>
        </Grid>
        <Grid md={3}>
          Первичное распределение
          <Stack
            direction="column"
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: '100%'
            }}
          >
            {/* {data.Child && data.Child.map((item: FundTree, index) => (
              String(item.FundID) == searchParams.get("ch1") &&
              item.Child && item.Child.map((subItem: FundTree, index) => (
                <FundCard label={subItem.FundLabel} value={subItem.Value} cardHeight={subItem.Value / item.Value * 100} query={"?ch1=" + item.FundID + "&ch2="+subItem.FundID} />
              ))
            ))}             */}
          </Stack>
        </Grid>
        <Grid md={3}>
          Подробнее о распределении Чистой выручки
          <Stack
            direction="column"
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: '100%'
            }}
          >

            {/* <FundCard label="Финансы к Общему распределению на Объединение" value={30}/>             */}

            <Box sx={{ border: '1px solid', height: '20%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Финансы к Распределению на Стратегическом Совете Объединения: 30р</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
            <Box sx={{ border: '1px solid', height: '20%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Финансы к Распределению на Совете Капитанов: 30р</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
            <Box sx={{ border: '1px solid', height: '10%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Фонды стабилизации: 40р</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
          </Stack>
        </Grid>
        <Grid md={3}>
          <Stack
            direction="column"
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: '100%'
            }}
          >
            Группы Фондов
            <Box sx={{ border: '1px solid', height: '10%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Устойчивости: 40р</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
            <Box sx={{ border: '1px solid', height: '10%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Бонусов: 40р</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
            <Box sx={{ border: '1px solid', height: '10%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Достигаторов: 40р</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
            <Box sx={{ border: '1px solid', height: '10%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Социально-психологические: 40р</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Sheet>
  )
}