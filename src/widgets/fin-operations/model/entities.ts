import { ColorPaletteProp } from "@mui/joy/styles/types"

export type IncomeAccount = {
  id: number,
  bank: string,
  account: string
}

export type Orgchart = {
  id: number,
  fund: string,
  team: string,
  union: string
}

export type PaymentStatus = {
  id: number,
  type: string,
  label: string,
  icon: string,
  color: ColorPaletteProp
}

export type PaymentValue = {
  id: number,
  value: string,
  type: string,
}