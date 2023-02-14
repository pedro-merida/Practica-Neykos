import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const product_fields = {
    time: '',
    date: '',
    prov_frente: '',
    fecha_prod_frente: '',
    pegado_frente: '',
    prov_recetario: '',
    fecha_prod_recetario: '',
    pegado_recetario: '',
    prov_cuello: '',
    fecha_prod_cuello: '',
    pegado_cuello: '',
    prov_hombro: '',
    fecha_prod_hombro: '',
    pegado_hombro: '',
    prov_ovalo: '',
    fecha_prod_ovalo: '',
    pegado_ovalo: '',
    prov_strip: '',
    fecha_prod_strip: '',
    pegado_strip: '',
    fecha_prod_cajetilla: '',
    time_cajetilla: '',
    proveedor_cajetilla: '',
    fecha_prod_prov_cajetilla: ''
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};


function AdditionalSupplyInfoTab(props){
    product_fields.time = props.time;
    product_fields.date = props.date;
    product_fields.time_cajetilla = props.time;
    product_fields.fecha_prod_cajetilla = props.date;
    const [data, setData] = useState(product_fields);

    const [etiqueta, setEtiqueta] = React.useState('frente');

    const handleChangeEtiqueta = (event, newValue) => {
        setEtiqueta(newValue);
    };


    const [pegaFrente, setPegaFrente] = React.useState('autoadhesivo');
    const handleChangePegaFrente = (event) => {
        setPegaFrente(event.target.value);
        product_fields.pegado_frente = event.target.value
        console.log(product_fields)
    }; 

    const [pegaRecetario, setPegaRecetario] = React.useState('autoadhesivo');
    const handleChangePegaRecetario = (event) => {
        setPegaRecetario(event.target.value);
        product_fields.pegado_recetario = event.target.value
        console.log(product_fields)
    };   
    
    const [pegaCuello, setPegaCuello] = React.useState('autoadhesivo');
    const handleChangePegaCuello = (event) => {
        setPegaCuello(event.target.value);
        product_fields.pegado_cuello = event.target.value
        console.log(product_fields)
    };

    const [pegaHombro, setPegaHombro] = React.useState('autoadhesivo');
    const handleChangePegaHombro = (event) => {
        setPegaHombro(event.target.value);
        product_fields.pegado_hombro = event.target.value
        console.log(product_fields)
    };

    const [pegaOvalo, setPegaOvalo] = React.useState('autoadhesivo');
    const handleChangePegaOvalo = (event) => {
        setPegaOvalo(event.target.value);
        product_fields.pegado_ovalo = event.target.value
        console.log(product_fields)
    };

    const [pegaStrip, setPegaStrip] = React.useState('autoadhesivo');
    const handleChangePegaStrip = (event) => {
        setPegaStrip(event.target.value);
        product_fields.pegado_strip = event.target.value
        console.log(product_fields)
    };
 

    const updateData = (event) => {
        setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
        }
        ));
        console.log(data);
    };

    return (
        <Box>
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Etiquetas</Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: responsive, 
                    gap: 3}}>
                    <Stack>
                        <Typography variant='body1' align='left'>Hora</Typography>
                        <TextField value={data.time} InputProps={{readOnly: true}}></TextField>
                    </Stack>
                </Box>
                <TabContext value={etiqueta}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChangeEtiqueta} aria-label="lab API tabs example">
                            <Tab label="Frente" value="frente" />
                            <Tab label="Recetario" value="recetario" />
                            <Tab label="Cuello" value="cuello" />
                            <Tab label="Hombro" value="hombro" />
                            <Tab label="Óvalo" value="ovalo" />
                            <Tab label="Strip" value="strip" />
                        </TabList>
                    </Box>
                    <TabPanel value="frente">
                        <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: responsive, 
                        gap: 3}}>
                            <Stack>
                                <Typography variant='body1' align='left'>Proveedor</Typography>
                                <TextField value={data.prov_frente} name={"prov_frente"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                                <TextField value={data.fecha_prod_frente} name={"fecha_prod_frente"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Forma pegado</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="pegado_frente"
                                        value={pegaFrente}
                                        onChange={handleChangePegaFrente}
                                    >
                                        <FormControlLabel value="autoadhesivo" control={<Radio size='small' />} label="Autoadhesivo" />
                                        <FormControlLabel value="cola_fria" control={<Radio size='small' />} label="Cola fría" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </Box>
                    </TabPanel>
                    <TabPanel value="recetario">
                        <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: responsive, 
                        gap: 3}}>
                            <Stack>
                                <Typography variant='body1' align='left'>Proveedor</Typography>
                                <TextField value={data.prov_recetario} name={"prov_recetario"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                                <TextField value={data.fecha_prod_recetario} name={"fecha_prod_recetario"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Forma pegado</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="pegado_recetario"
                                        value={pegaRecetario}
                                        onChange={handleChangePegaRecetario}
                                    >
                                        <FormControlLabel value="autoadhesivo" control={<Radio size='small' />} label="Autoadhesivo" />
                                        <FormControlLabel value="cola_fria" control={<Radio size='small' />} label="Cola fría" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </Box>
                    </TabPanel>
                    <TabPanel value="cuello">
                        <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: responsive, 
                        gap: 3}}>
                            <Stack>
                                <Typography variant='body1' align='left'>Proveedor</Typography>
                                <TextField value={data.prov_cuello} name={"prov_cuello"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                                <TextField value={data.fecha_prod_cuello} name={"fecha_prod_cuello"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Forma pegado</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="pegado_cuello"
                                        value={pegaCuello}
                                        onChange={handleChangePegaCuello}
                                    >
                                        <FormControlLabel value="autoadhesivo" control={<Radio size='small' />} label="Autoadhesivo" />
                                        <FormControlLabel value="cola_fria" control={<Radio size='small' />} label="Cola fría" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </Box>
                    </TabPanel>
                    <TabPanel value="hombro">
                        <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: responsive, 
                        gap: 3}}>
                            <Stack>
                                <Typography variant='body1' align='left'>Proveedor</Typography>
                                <TextField value={data.prov_hombro} name={"prov_hombro"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                                <TextField value={data.fecha_prod_hombro} name={"fecha_prod_hombro"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Forma pegado</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="pegado_hmbro"
                                        value={pegaHombro}
                                        onChange={handleChangePegaHombro}
                                    >
                                        <FormControlLabel value="autoadhesivo" control={<Radio size='small' />} label="Autoadhesivo" />
                                        <FormControlLabel value="cola_fria" control={<Radio size='small' />} label="Cola fría" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </Box>
                    </TabPanel>
                    <TabPanel value="ovalo">
                        <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: responsive, 
                        gap: 3}}>
                            <Stack>
                                <Typography variant='body1' align='left'>Proveedor</Typography>
                                <TextField value={data.prov_ovalo} name={"prov_ovalo"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                                <TextField value={data.fecha_prod_ovalo} name={"fecha_prod_ovalo"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Forma pegado</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="pegado_ovalo"
                                        value={pegaOvalo}
                                        onChange={handleChangePegaOvalo}
                                    >
                                        <FormControlLabel value="autoadhesivo" control={<Radio size='small' />} label="Autoadhesivo" />
                                        <FormControlLabel value="cola_fria" control={<Radio size='small' />} label="Cola fría" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </Box>
                    </TabPanel>
                    <TabPanel value="strip">
                        <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: responsive, 
                        gap: 3}}>
                            <Stack>
                                <Typography variant='body1' align='left'>Proveedor</Typography>
                                <TextField value={data.prov_strip} name={"prov_strip"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                                <TextField value={data.fecha_prod_strip} name={"fecha_prod_strip"} onChange={updateData}></TextField>
                            </Stack>
                            <Stack>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Forma pegado</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="pegado_strip"
                                        value={pegaStrip}
                                        onChange={handleChangePegaStrip}
                                    >
                                        <FormControlLabel value="autoadhesivo" control={<Radio size='small' />} label="Autoadhesivo" />
                                        <FormControlLabel value="cola_fria" control={<Radio size='small' />} label="Cola fría" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Paper>
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Cajetilla Individual</Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: responsive, 
                    gap: 3}}>
                    <Stack>
                        <Typography variant='body1' align='left'>Hora</Typography>
                        <TextField value={data.time} InputProps={{readOnly: true}}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Fecha de Producción</Typography>
                        <TextField value={data.fecha_prod_cajetilla} name={"fecha_prod_cajetilla"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Proveedor</Typography>
                        <TextField value={data.suplier_cajetilla} name={"suplier_cajetilla"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                        <TextField value={data.fecha_prod_prov_cajetilla} name={"fecha_prod_prov_cajetilla"} onChange={updateData}></TextField>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    )
}
export default AdditionalSupplyInfoTab;