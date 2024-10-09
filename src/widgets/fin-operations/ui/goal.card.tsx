import { CardContent, CircularProgress, SvgIcon, Box, Typography, Chip } from "@mui/joy";
import { formatMoneyValue } from "../lib/helpers";

export function GoalCard({
  label,
  expire_date,
  goal_total,
  current_value,
  sprint_needs,
  sprint_income,
  revenue_percent,
}: {
  label: string;
  expire_date: string;
  goal_total: number;
  current_value: number;
  sprint_needs: number;
  sprint_income: number;
  revenue_percent: number;
}) {
  return (
    <CardContent orientation="horizontal">
      <CircularProgress size="lg" determinate value={current_value / goal_total * 100}>
        <Typography level="body-xs"> {(current_value / goal_total * 100).toFixed(2)}%</Typography>
      </CircularProgress>
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography level="title-sm">{label}</Typography>
          <Chip size="sm" variant="outlined" color="primary">
            {expire_date.split('T')[0]}
          </Chip>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography level="body-sm">
            Всего: {formatMoneyValue(goal_total, 1)}
          </Typography>
          <Chip size="sm" variant="outlined" color="success">
            {formatMoneyValue(current_value, 1)}
          </Chip>
          <Chip size="sm" variant="outlined" color="warning">
            {formatMoneyValue(goal_total-current_value, 1)}
          </Chip>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography level="body-sm">
            В спринт: {formatMoneyValue(sprint_needs, 1)}
          </Typography>
          <Chip size="sm" variant="outlined" color="success">
            {formatMoneyValue(sprint_income, 1)}
          </Chip>
          <Chip size="sm" variant="outlined" color="warning">
            {formatMoneyValue(sprint_needs-sprint_income, 1)}
          </Chip>
        </Box>
      </CardContent>
    </CardContent>
  )
}