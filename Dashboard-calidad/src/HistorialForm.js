import * as React from 'react';
import Table from '@mui/material/Table';
//import { styled, alpha } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button'
//import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import InputBase from '@mui/material/InputBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ReplayIcon from '@mui/icons-material/Replay';
import Title from './Title';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';


// Generate Order Data
function createData(id, tipo, orden, fecha, linea, estado, pdf) {
  return { id, tipo, orden, fecha, linea, estado, pdf };
}

const rows = [
  createData(
    0,
    'Linea',
    '4403',
    '12/01/2023',
    'LD2',
    'Finalizado',
  ),
  createData(
    1,
    'Producto terminado',
    '3125',
    '23/01/2023',
    'LD1',
    'Incompleto',
  ),
];

export default function HistorialForm() {
  const [fecha, setFecha] = React.useState('');

  const handleChangeFecha = (event) => {
    setFecha(event.target.value);
  };

  const [estado, setEstado] = React.useState('');

  const handleChangeEstado = (event) => {
    setEstado(event.target.value);
  };

  const [tipo, setTipo] = React.useState('');

  const handleChangeTipo = (event) => {
    setTipo(event.target.value);
  };
  
  const [linea, setLinea] = React.useState('');

  const handleChangeLinea = (event) => {
    setLinea(event.target.value);
  };

  const [value, setValue] = React.useState([null, null]);
  return (
    <React.Fragment>
      <Grid container justifyContent={'space-between'}>
        <Grid item>
          <Title>Formularios</Title>
        </Grid>
        <Grid item>
          <Button sx={{marginBottom: '12px'}} variant="outlined" startIcon={<ReplayIcon />}>
            Actualizar
          </Button>
        </Grid>
      </Grid>
      <Accordion sx={{boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            width: '80px',

            bgcolor: 'white', // use summary background color
            
            color: 'black', // use summary default color
            
            '&:hover': {
            
            bgcolor: '#eeeeee', // use summary hover background
            
            color: 'black', // use summary hover color
            
            }
            
            }}
        >
          <Typography sx={{fontSize: '13px'}}>Filtros</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl sx={{ m: 1, minWidth: 140 }}>
            <InputLabel id="fecha form">Atajo fechas</InputLabel>
            <Select
              labelId="fecha form"
              id="fecha form"
              value={fecha}
              onChange={handleChangeFecha}
              autoWidth
              label="Atajo fechas"
            >
              <MenuItem value="">
                <em>Sin filtro</em>
              </MenuItem>
              <MenuItem value={1}>Última hora</MenuItem>
              <MenuItem value={2}>Hoy</MenuItem>
              <MenuItem value={3}>Últimas 24 horas</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="estado form">Estado</InputLabel>
            <Select
              labelId="estado form"
              id="estado form"
              value={estado}
              onChange={handleChangeEstado}
              autoWidth
              label="Estado"
            >
              <MenuItem value="">
                <em>Cualquiera</em>
              </MenuItem>
              <MenuItem value={1}>Incompleto</MenuItem>
              <MenuItem value={2}>Finalizado</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 90 }}>
            <InputLabel id="tipo form">Tipo</InputLabel>
            <Select
              labelId="tipo form"
              id="tipo form"
              value={tipo}
              onChange={handleChangeTipo}
              autoWidth
              label="Tipo"
            >
              <MenuItem value="">
                <em>Cualquiera</em>
              </MenuItem>
              <MenuItem value={1}>Linea</MenuItem>
              <MenuItem value={2}>Producto Terminado</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 90 }}>
            <InputLabel id="linea form">Linea</InputLabel>
            <Select
              labelId="linea form"
              id="linea form"
              value={linea}
              onChange={handleChangeLinea}
              autoWidth
              label="Linea"
            >
              <MenuItem value="">
                <em>Cualquiera</em>
              </MenuItem>
              {rows.map((row) => (
                <>
                  <MenuItem value={row.linea}>{row.linea}</MenuItem>
                </>
              ))};
            </Select>
          </FormControl>
          <FormControl sx={{paddingLeft: "8px", paddingTop: "8px"}}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              localeText={{ start: 'Fecha inicio', end: 'Fecha término' }}
            >
              <MobileDateRangePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                componentsProps={{
                  actionBar: {
                    actions: ['clear'],
                  },
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> hasta </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Tipo</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Orden</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Fecha</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>N° Linea</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Estado</TableCell>
            <TableCell sx={{fontWeight: 'bold'}}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.tipo}</TableCell>
              <TableCell>{row.orden}</TableCell>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>{row.linea}</TableCell>
              <TableCell>{row.estado}</TableCell>
              <TableCell>
                <Button sx={{textTransform: 'none', marginRight: '9px', marginY: '9px'}} disabled={row.estado === "Finalizado"} size="medium" variant="contained" startIcon={<EditIcon/>}>Firmar</Button>
                <Button sx={{textTransform: 'none', marginRight: '9px', marginY: '9px'}} size="medium" variant="contained" startIcon={<PictureAsPdfIcon/>} color="success">
                  PDF
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
