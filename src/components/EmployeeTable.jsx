import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  TablePagination,
  Box,
} from "@mui/material";

function EmployeeTable({
  employees,
  onView,
  onEdit,
  onDelete,
  page,
  rowsPerPage,
  setPage,
}) {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Empleado</TableCell>
              <TableCell>Nombre Completo</TableCell>
              <TableCell>Departamento</TableCell>
              <TableCell>Puesto</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((emp) => (
                <TableRow key={emp.id}>
                  <TableCell>{emp.id}</TableCell>
                  <TableCell>
                    {emp.nombre} {emp.apellido}
                  </TableCell>
                  <TableCell>{emp.departamento}</TableCell>
                  <TableCell>{emp.puesto}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button variant="contained" onClick={() => onView(emp)}>
                        Ver
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => onEdit(emp)}
                      >
                        Modificar
                      </Button>
                      <Button
                        color="error"
                        variant="contained"
                        onClick={() => onDelete(emp.id)}
                      >
                        Eliminar
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={employees.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </Paper>
  );
}

export default EmployeeTable;
