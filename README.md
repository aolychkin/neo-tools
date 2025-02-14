Виджеты:
Лейаут страницы
Страница в табе, чтобы из сменять

Страница:
Лейаут + логика + таб виджета


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





























import { Sheet, DialogTitle, ModalClose, Grid, Stack, Box, Typography, Card, CardContent, Link } from "@mui/joy";
import { DoubleCell } from "./double.cell";
import { FundCard } from "./fund.card";
import { getFundTreeByManualOperationID } from "../api/get";

export function FundDrawer() {
  const data = getFundTreeByManualOperationID()
  console.log(data.Child)

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
            <Box sx={{
              border: '1px solid',
              height: '100%',
              width: '100%'
            }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Выручка: 100р</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК и все данные строки таблицы вертикально" />
            </Box>
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
            <Box sx={{ border: '1px solid', height: '30%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Очищение: 30р (приоритет: 1)</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
            <Box sx={{ border: '1px solid', height: '30%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Группа Фондов Стабилизации: 30р (приоритет: 2)</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
            <Box sx={{ border: '1px solid', height: '40%', width: '100%' }}>
              <Typography level="body-md" sx={{ mb: 1 }}>Чистая Выручка: 70р (приоритет: 3)</Typography>
              <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
            </Box>
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

            <FundCard label="Финансы к Общему распределению на Объединение" value={30}/>            

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