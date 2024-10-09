import { FundTree } from "../api/get"

export function formatMoneyValue(val: number, currency: number) {
  var symbol = currency == 1 ? "руб." : "у.е."
  return (
    <>
      {val != undefin