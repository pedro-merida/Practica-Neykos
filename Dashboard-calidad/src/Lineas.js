import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ReplayIcon from '@mui/icons-material/Replay';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EditIcon from '@mui/icons-material/Edit';
import Title from './Title';
import { ResizableBox } from 'react-resizable';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import 'react-resizable/css/styles.css';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth-100,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function createData(linea, [serie, producto, estado, f_completos, f_incompletos, [tipo, orden, estado_form]]) {
    return {
      linea,
      data: [
        {
          serie,
          producto,
          estado,
          f_completos,
          f_incompletos,
          forms: [
            {
              tipo,
              orden,
              estado_form,
            },
            {
              tipo: 'Linea',
              orden: '8853',
              estado_form: 'Finalizado',
            }
          ]
        },
        {
          serie: '000042500655',
          producto: 'Ron Abuelo 800 ML',
          estado: 'Terminada',
          f_completos,
          f_incompletos,
          forms: [
            {
              tipo: 'Linea',
              orden: '5301',
              estado_form: 'Finalizado',
            }
          ]
        }
      ]
    };
  }
  
const rows = [
    createData('LD1', ['000027100053', 'Batido Manzana 800 ML', 'En ejecución', '0', 1, ['Producto terminado', '3125', 'Incompleto']]),
    createData('LD2', ['000046207126', 'Gin Campana 250 ML', 'Terminada', 1, '0', ['Linea', '4403', 'Finalizado']]),
];


export default function Lineas() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([])

  const [value, setValue] = React.useState('1');
  const [index] = React.useState(0);



  const handleDrawerOpen = (data_p) => {
    setOpen(true);
    console.log(data_p)
    setData(data_p);
    setValue(data_p[index].serie)
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const [linea, setLinea] = React.useState('');

  const handleChangeLinea = (event) => {
    setLinea(event.target.value);
  };

  const [sizeState, setSize] = React.useState(400);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Main open={open}>
        <React.Fragment>
        <Grid container justifyContent={'space-between'}>
            <Grid item>
            <Title>Calidad</Title>
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
            </AccordionDetails>
        </Accordion>
        <Grid container>
            <Table size="medium" sx={{ maxWidth: 650 , margin: 'auto'}}>
            <TableHead>
                <TableRow>
                <TableCell width={'40%'} sx={{fontWeight: 'bold'}}>Linea</TableCell>
                <TableCell width={'10%'} sx={{fontWeight: 'bold'}}>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow key={row.id}>
                    <TableCell width={'40%'}>{row.linea}</TableCell>
                    <TableCell width={'10%'}>
                    <Button sx={{textTransform: 'none', ...(open)}} size="medium" variant="contained" onClick={event => handleDrawerOpen(row.data)}>Detalles</Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table> 
        </Grid>
        </React.Fragment>
      </Main>
      <Drawer
        PaperProps={{
          elevation: 1,
          sx:{
            height: 'calc(100% - 152.9px)',
            top: 152.9,
          }
        }}
        sx={{
          width: `${sizeState-40}px`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: `${sizeState}px`,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <ResizableBox
          width={sizeState}
          handle={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: 500,
              marginTop: -150,
              width: 25,
              userSelect: "none",
              cursor: "ew-resize"
            }}
          >
            <div>
              ||
            </div>
          </div>}
          resizeHandles={['w']}
          onResize={(e, data) => {
            setSize(data.size.width);
          }}
          axis="x"
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <TabContext value={value}>
              <>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                  {data.map((order) => (
                    <Tab sx={{minWidth: '5%'}} variant="fullWidth" icon={<FiberManualRecordIcon fontSize='small'/>} value={order.serie} />
                  ))}
                  </TabList>
                </Box>
                {data.map((order) => (
                <TabPanel value={order.serie}>
                <Grid container justifyContent={'space-between'}>
                  <Grid item padding={1}>
                    <Typography variant="h6" component="h2">
                      N° {order.serie}
                    </Typography>
                  </Grid>
                  <Grid item padding={1}>
                    <Chip label={order.estado} color={order.estado === 'En ejecución'? 'primary' : 'success'} />
                  </Grid>
                </Grid>
                <Grid container paddingLeft={1}>
                  <Typography variant='subtitle2' color='grey'>
                    {order.producto}
                  </Typography>
                </Grid>
                <Grid container >
                  <Grid item paddingTop={6} paddingLeft={1}>
                    <Typography variant='subtitle1'>
                      Formularios asociados
                    </Typography>
                  </Grid>
                  <Grid item paddingTop={5} paddingLeft={1}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <React.Fragment>
                          <IconButton color='primary' {...bindTrigger(popupState)}>
                            <AddIcon />
                          </IconButton>
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>Linea</MenuItem>
                            <MenuItem onClick={popupState.close}>Producto Terminado</MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </Grid>
                </Grid>
                <Grid container paddingLeft={1}>
                  <Table size="medium" sx={{marginRight: '20px'}}>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{fontWeight: 'bold'}}>Tipo</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Orden</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Estado</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Editar</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order.forms.map((row) => (
                        <TableRow>
                          <TableCell>{row.tipo}</TableCell>
                          <TableCell>{row.orden}</TableCell>
                          <TableCell>{row.estado_form}</TableCell>
                          <TableCell>
                            <IconButton disabled={row.estado_form === 'Finalizado'} size="small" color='primary'>
                              <EditIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
                </TabPanel>
                ))}
              </>
          </TabContext>
        </ResizableBox>
      </Drawer>
    </Box>
  );
}