import { FundConfig, FundsConfig } from "./fund.config"

export type FundOwner = {
  id: number,
  team: string,
  teamType?: 'client' | 'service'
  union: string,
}

export type Fund = {
  id: number,
  label: string,
  added: number,
  total: number
  owner: FundOwner,
  childFunds?: Fund[]
}

export type FundOperation = {
  id: number,
  type: 'income' | 'outcome',
  method: 'automatic' | 'manual',
  fundID: number,
  owner: FundOwner,
  value: number,
}

export function GenerateUnionFunds() {
  const teamThis = <FundOwner>{
    id: 1,
    team: 'ГК',
    union: 'УЕК',
  }

  
}


export function GenerateFundsOperations() {
  const data = FundsConfig()
  const income = 100

  const teamThis = <FundOwner>{
    id: 1,
    team: 'ГК',
    union: 'УЕК',
  }

  let resp = <FundOperation[]>[]

  if (data.childFunds != undefined) {
    data.childFunds.map((item: FundConfig) => (
      resp.push({
        id: item.id,
        type: 'income',
        method: 'automatic',
        fundID: item.id,
        owner: teamThis,
        value: income * item.rule.value / 100
      })
    ))
  }

  return data
}

