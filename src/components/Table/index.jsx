//import
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import styled from "styled-components";
import { columns } from "../../data/columns";

/**
 *
 * @returns Table Component
 */
function CustomToolbar() {
  return (
    <GridToolbarContainer
      style={{
        backgroundColor: "#fff",
        borderRadius: "5px 5px 0 0",
        borderBottom: "2px solid #fff",
      }}
    >
      <GridToolbarFilterButton style={{ color: "#5b6e05" }} />
    </GridToolbarContainer>
  );
}

export default function DataTable() {
  const employeeData = JSON.parse(localStorage.getItem("newEmployee")) || [];

  return (
    <DataTableContainer className="table_container">
      <Box
        sx={{
          height: 400,
          width: "89%",
          "& .table_header": {
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
      >
        <DataGrid
          rows={employeeData.map((employee, index) => ({
            id: index,
            firstName: employee.firstName,
            lastName: employee.lastName,
            birthDate: employee.birthDate,
            startDate: employee.startDate,
            street: employee.street,
            city: employee.city,
            state: employee.state,
            zipCode: employee.zipCode,
            department: employee.department,
            employee,
          }))}
          columns={columns}
          disableColumnMenu
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          columnBuffer={0}
          components={{ Toolbar: CustomToolbar }}
        />
      </Box>
    </DataTableContainer>
  );
}
/**
 * @returns Table Style
 */
const DataTableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;
