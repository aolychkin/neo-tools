import { GridActionsCellItem, GridRenderCellParams, GridRowParams } from "@mui/x-data-grid";
import { IncomeAccount, Orgchart, PaymentStatus, PaymentValue } from "./entities";
import { usePaymentStatus } from "./use.entities";
import { DoubleCell } from "../ui/double.cell";
import { ChipCell } from "../ui/chip.cell";
import { Icon } from "@iconify/react";
import { Box, Button, Card, CardContent, DialogTitle, Drawer, Grid, IconButton, Link, Modal, ModalClose, Sheet, Stack, Typography } from "@mui/joy";
import { useCallback, useContext, useState } from "react";
import { GridDrawer } from "../ui/grid-drawer";
import { GenerateFundsOperations } from "./fund.model";
import { getManualOperations } from "../api/get";
import { FundDrawer } from "../ui/fund.drawer";

export function OperationsCols() {
  const [isVisible, setIsVisible] = useState(true);
  const openDrawer = useCallback(() => setIsVisible(true), []);
  const closeDrawer = useCallback(() => setIsVisible(false), []);
  GenerateFundsOperations()

  return (
    [
      {
        field: 'date',
        headerName: 'Дата',
        width: 100
      },
      {
        field: 'sprint',
        headerName: 'Спринт',
        width: 100
      },
      {
        field: 'fund',
        headerName: 'Фонд получатель',
        width: 100
      },
      {
        field: 'value',
        headerName: 'Сумма',
        width: 100,
        renderCell: (params: GridRenderCellParams<any, PaymentValue>) => {
          return (params.value != undefined ? <DoubleCell topLine={params.value.value} bottomLine={params.value.type} /> : params.id)
        },
      },
      {
        field: 'income_account',
        headerName: 'Счет',
        width: 150,
        renderCell: (params: GridRenderCellParams<any, IncomeAccount>) => {
          return (params.value != undefined ? <DoubleCell topLine={params.value.account} bottomLine={params.value.bank} /> : params.id)
        },
      },
      {
        field: 'partner',
        headerName: 'Контрагент',
        width: 200
      },
      {
        field: 'direction',
        headerName: 'Сущность',
        width: 150,
        renderCell: (params: GridRenderCellParams<any, Orgchart>) => {
          return (params.value != undefined ? <DoubleCell topLine={params.value.team} bottomLine={params.value.union} /> : params.id)
        },
      },
      {
        field: 'status',
        headerName: 'Статус',
        width: 150,
        renderCell: (params: GridRenderCellParams<any, PaymentStatus>) => {
          if (params.value != undefined) {
            return (<ChipCell icon={params.value.icon} color={params.value.color} label={params.value.label} />)
          }
          return (params.id)
        },
      },
      {
        field: 'payment_details',
        headerName: 'Детали платежа',
        width: 300,
      },
      {
        field: 'actions',
        headerName: "Действия",
        sortable: false,
        renderCell: (params: GridRenderCellParams<any, string>) => {
          return (
            <>
              <IconButton onClick={openDrawer}><Icon icon='mdi-light:home' /></IconButton>
              <Drawer
                anchor="bottom"
                color="neutral"
                invertedColors={false}
                size="lg"
                variant="plain"
                open={isVisible}
                onClose={closeDrawer}
                sx={{ zIndex: 99999 }}
                slotProps={{
                  content: {
                    sx: {
                      bgcolor: 'transparent',
                      p: { md: 3, sm: 0 },
                      boxShadow: 'none',
                    },
                  },
                }}
              >
                <FundDrawer/>
              </Drawer >
            </>
          )
        },
      }
    ]
  )
}

interface manualOperationToGrid {
  id: number;
  date: Date;
  sprint: number;
  fund: string;
  value: {
    value: string;
    type: string;
  };
  income_account: IncomeAccount;
  partner: string
  direction: {
    id: number;
    fund: string;
    team: string;
    union: string;
  };
  status: {
    id: number;
    type: string;
    label: string;
    icon: string;
    color: string;
  };
  payment_details: string;
}

export function useOperationsDataGrid() {
  const Statuses = usePaymentStatus()
  const resp = getManualOperations()

  var gridData: manualOperationToGrid[] = []

  resp.map((item) => (
    gridData.push({
      id: item.ID,
      date: item.Date,
      sprint: item.Sprint.Number,
      fund: item.Fund.Label,
      value: {
        value: "+" + item.Value + " руб.",
        type: "Повторный",
      },
      income_account: {
        id: 1,
        account: item.IncomeAccount.Label,
        bank: item.IncomeAccount.Bank,
      },
      partner: item.Partner.Label,
      direction: {
        id: 1,
        fund: item.Fund.Label,
        team: item.Team.Label,
        union: item.Union.Label,
      },
      status: {
        id: 1,
        type: item.OperationStatus.Type,
        label: item.OperationStatus.Label,
        icon: item.OperationStatus.Icon,
        color: item.OperationStatus.Color,
      },
      payment_details: item.Details,
    })
  ))

  console.log(gridData)

  return (gridData)
}