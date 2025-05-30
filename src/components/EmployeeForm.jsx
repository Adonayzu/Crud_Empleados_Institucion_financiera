import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { Departments } from "../data/Departments";

function EmployeeForm({ open, onClose, onSave, initialData }) {
  const [form, setForm] = useState(
    initialData || {
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      departamento: "",
      puesto: "",
      fechaIngreso: "",
    }
  );

  useEffect(() => {
    setForm(
      initialData || {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        departamento: "",
        puesto: "",
        fechaIngreso: "",
      }
    );
  }, [initialData, open]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const dept = Departments.find((d) => d.name === form.departamento);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {initialData ? "Modificar" : "Agregar"} Empleado
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Nombre(s)"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Apellido(s)"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Fecha de Nacimiento"
          name="fechaNacimiento"
          type="date"
          value={form.fechaNacimiento}
          onChange={handleChange}
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          margin="dense"
          label="Departamento"
          name="departamento"
          select
          value={form.departamento}
          onChange={handleChange}
          fullWidth
        >
          {Departments.map((d) => (
            <MenuItem key={d.id} value={d.name}>
              {d.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="dense"
          label="Puesto"
          name="puesto"
          select
          value={form.puesto}
          onChange={handleChange}
          fullWidth
        >
          {(dept?.positions || []).map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="dense"
          label="Fecha de Ingreso"
          name="fechaIngreso"
          type="date"
          value={form.fechaIngreso}
          onChange={handleChange}
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={() => onSave(form)} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmployeeForm;
