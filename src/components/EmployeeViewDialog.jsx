import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

function EmployeeViewDialog({ open, onClose, employee }) {
  if (!employee) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Datos del Empleado</DialogTitle>
      <DialogContent>
        <Typography>ID: {employee.id}</Typography>
        <Typography>Nombre: {employee.nombre}</Typography>
        <Typography>Apellido: {employee.apellido}</Typography>
        <Typography>Fecha de Nacimiento: {employee.fechaNacimiento}</Typography>
        <Typography>Departamento: {employee.departamento}</Typography>
        <Typography>Puesto: {employee.puesto}</Typography>
        <Typography>Fecha de Ingreso: {employee.fechaIngreso}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmployeeViewDialog;