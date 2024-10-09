import { Card, CardContent, Typography, Link, SvgIcon, CircularProgress, IconButton, CardOverflow, Divider, Box, Chip, Stack, Input } from "@mui/joy";
import { DoubleCell } from "./double.cell";
import { Icon } from "@iconify/react";
import { GoalCard } from "./goal.card";
import { checkSubChilds, formatMoneyValue } from "../lib/helpers";
import { FundTree, Goal } from "../api/get";
import { ResponsiveStyleValue } from "@mui/system";

export function FundCard({
  check_zero,
  parent_label,
  fund,
  label,
  value,
  gross,
  child_percent,
  query,
  direction,
  parent_width,
  card_width,
  fund_needs,
  goals,
  child,
}: {
  check_zero: boolean;
  parent_label: string;
  fund: FundTree;
  label: string;
  value: number;
  gross: number;
  child_percent: number;
  query: string;
  direction: any;
  parent_width: any
  card_width: any;
  fund_needs?: number;
  goals?: Goal[];
  child?: FundTree[];

}) {
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="vertical" />}
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: direction == "column" ? "flex-end" : "stretch",
      }}
    >
      {/* TODO: закрепить слева, сделать делей с отступами. внутри синего блока - сколько% от родителя */}
      <Card
        orientation="vertical"
        variant="outlined"
        sx={{
          minWidth: '15vw',
          width: card_width == 100 ? card_width + "%" : child != undefined && checkSubChilds(fund) > 0 ? card_width + 'vw' : card_width + 'vw'
        }}
      >
        <CardOverflow
          variant="soft"
          color="primary"
          sx={{
            px: 0.2,
            writingMode: 'horizontal-tb',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'xs',
            fontWeight: 'xl',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderLeft: '1px solid',
            borderColor: 'divider',
          }}
        >
          {/* {parent_label != undefined && " от " + parent_label} */}
          <Typography level="body-md">{!Number.isNaN(child_percent) && (child_percent).toFixed(2) + "%"} </Typography>
        </CardOverflow>
        <CardContent orientation="horizontal">
          <CardContent>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography level="body-md">{label}</Typography>
              <Chip size="sm" variant="soft">
                От выручки: {(value / gross * 100).toFixed(2)}%
              </Chip>
            </Box>
            <Typography level="h2">{formatMoneyValue(value, 1)}</Typography>
            {fund_needs ?? <Typography level="body-xs">Потребность в спринте: 100000 руб.</Typography>}
          </CardContent>
        </CardContent>
        {
          goals &&
          <CardOverflow
            variant="soft"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              justifyContent: 'space-around',
              py: 1,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            {goals.map((goal: Goal) => (
              <GoalCard
                label={goal.GoalLabel}
                expire_date={goal.ExpireDate}
                goal_total={goal.GoalTotal}
                current_value={goal.CurrentValue}
                sprint_needs={goal.SprintTotal}
                sprint_income={goal.SprintIncome}
                revenue_percent={value / 2000} />
            ))}
          </CardOverflow>
        }
      </Card>

      {child &&
        <Stack
          direction={direction}
          divider={direction == "row" && <Divider orientation="vertical" />}
          spacing={2}
          sx={{
            justifyContent: "flex-start",
            alignItems: "stretch",
          }}
        >
          {child.map((item: FundTree, index) => (
            !check_zero
              ? item.Value > 0 &&
              <FundCard
                check_zero={check_zero}
                fund={item}
                parent_label={label}
                label={item.FundLabel}
                value={item.Value}
                gross={gross}
                child_percent={item.Value / value * 100}
                query={"?ch1=" + item.FundID}
                direction={item.Child == undefined ? "column" : checkSubChilds(item) > 0 ? "row" : "column"}
                parent_width={checkSubChilds(item) * card_width}
                card_width={child_percent == 0 ? card_width - 8 : card_width - 2}
                child={item.Child} goals={item.Goals}
              />
              : <FundCard
                check_zero={check_zero}
                fund={item}
                parent_label={label}
                label={item.FundLabel}
                value={item.Value}
                gross={gross}
                child_percent={item.Value / value * 100}
                query={"?ch1=" + item.FundID}
                direction={item.Child == undefined ? "column" : checkSubChilds(item) > 0 ? "row" : "column"}
                parent_width={checkSubChilds(item) * card_width}
                card_width={child_percent == 0 ? card_width - 8 : card_width - 2}
                child={item.Child} goals={item.Goals}
              />
          ))}
        </Stack>
      }
    </Stack>
  )
}

/* <CardContent>
        <Typography level="body-md" aria-describedby="card-description" sx={{ mb: 1 }}>
          <Link
            overlay
            underline="none"
            href={query}
            sx={{ color: 'text.tertiary' }}
          >
            {label}: {value} руб.
          </Link>
        </Typography>
        <DoubleCell topLine="ГК.HR-партнерка" bottomLine="УЕК" />
      </CardContent> */