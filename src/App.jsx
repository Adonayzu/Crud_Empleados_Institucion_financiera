import { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';
import EmployeeViewDialog from './components/EmployeeViewDialog';
import { Button, Container, Typography } from '@mui/material';

function App() {
  const [employees, setEmployees] = useState([]); 
  const [openForm, setOpenForm] = useState(false); 
  const [editing, setEditing] = useState(null); 
  const [viewing, setViewing] = useState(null); 
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleAdd = () => { setEditing(null); setOpenForm(true); }; // para abrir el formulario de agregar empleado
  const handleEdit = emp => { setEditing(emp); setOpenForm(true); }; // para abrir el formulario de editar empleado

    // para manejar el guardado de empleado, ya sea nuevo o editado
  const handleSave = data => { 
    if (editing) {
      setEmployees(emps => emps.map(e => e.id === editing.id ? { ...editing, ...data } : e));
    } else {
      setEmployees(emps => [...emps, { ...data, id: emps.length ? Math.max(...emps.map(e => e.id)) + 1 : 1 }]);
    }
    setOpenForm(false);
  };
  const handleDelete = id => setEmployees(emps => emps.filter(e => e.id !== id));
  const handleView = emp => setViewing(emp); // para abrir el modal y ver la informacion del empleado 

  return (
    <Container maxWidth="md" sx={{ mt: 20, backgroundColor: '#f5f5f5', padding: 3  }}>
      <Typography variant="h4" gutterBottom>Empleados</Typography>
      <Button variant="contained" onClick={handleAdd} sx={{ mb: 2 }}>Agregar Empleado</Button>
      <EmployeeTable
        employees={employees}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
      />
      <EmployeeForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSave={handleSave}
        initialData={editing}
      />
      <EmployeeViewDialog
        open={!!viewing}
        onClose={() => setViewing(null)}
        employee={viewing}
      />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Total de empleados: {employees.length} | Página {page + 1} de {Math.ceil(employees.length / rowsPerPage)}
      </Typography>
    </Container>
  );
}

export default App;