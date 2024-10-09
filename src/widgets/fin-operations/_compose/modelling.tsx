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

export function Modelling() {
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
          check_zero={true}
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
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" />}
          spacing={2}
          sx={{
            justifyContent: "flex-start",
            alignItems: "stretch",
          }}
        >

          {data.Child && data.Child.map((item: FundTree, index) => (
            item.Value > 0 &&
            < FundCard
              check_zero={true}
              fund={item}
              parent_label={data.FundLabel}
              label={item.FundLabel}
              value={item.Value}
              gross={data.Value}
              child_percent={item.Value / data.Value * 100}
              query={"?ch1=" + item.FundID}
              direction={item.Child == undefined ? "column" : checkSubChilds(item) > 0 ? "row" : "column"}
              parent_width={checkSubChilds(item) * 30}
              card_width={30}
              child={item.Child} goals={item.Goals}
            />

          ))}
        </Stack>

      </Stack>
    </Scroller>
  )
}
