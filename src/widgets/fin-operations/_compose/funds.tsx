import { Box, Card, CircularProgress, Divider, Stack, Typography } from "@mui/joy";
import { PageWraper } from "../../page.wrapper/compose/page.wrapper";
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { OperationsCols, useOperationsDataGrid } from "../model/operation.model";
import { GridDrawer } from "../ui/grid-drawer";
import { useCallback, useContext, useState } from "react";
import { FundTree, getFundTreeByManualOperationID } from "../api/get";
import { FundCard } from "../ui/fund.card";
import { Scroller } from "../ui/scroller";
import { checkSubChilds } from "../lib/helpers";

export function Funds() {
  const data = getFundTreeByManualOperationID()
  console.log(data)
  return (
    <Scroller>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" />}
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        <FundCard
          check_zero={false}
          parent_label={data.FundLabel}
          fund={data}
          label={data.FundLabel}
          value={data.Value}
          gross={data.Value}
          child_percent={data.Value / data.Value * 100}
          direction="column"
          parent_width={checkSubChilds(data) * 30}
          card_width={100}
          query={"?ch1=" + data.FundID}
          fund_needs={100000}
        />
    