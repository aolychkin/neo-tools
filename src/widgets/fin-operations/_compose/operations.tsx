import { Box, Divider, Stack, Typography } from "@mui/joy";
import { PageWraper } from "../../page.wrapper/compose/page.wrapper";
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { OperationsCols, useOperationsDataGrid } from "../model/operation.model";
import { GridDrawer } from "../ui/grid-drawer";
import { useCallback, useContext, useState } from "react";

export function Operations() {
  const rows: GridRowsProp = useOperationsDataGrid()
  const columns: GridColDef[] = OperationsCols()

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" />}
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          minWidth: 1 / 5,
        }}>
        <Typography level="h4">Добавить операцию</Typography>
      </Box>
      <Box>
        <Typography level="h4">Список операций</Typography>
        <DataGrid
          autoHeight
          density="standard" //"compact"
          columns={columns}
          rows={rows}
          sx={{
            '--DataGrid-overlayHeight': '300px'
          }}
        />
      </Box>
      
    </Stack>

  )
}