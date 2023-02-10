import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const product_fields = {
    time: '',
    forma_pegado1: '',
    forma_pegado2: '',
    forma_pegado3: '',
    forma_pegado4: '',
    forma_pegado5: '',
    forma_pegado6: '',
    suplier1: '',
    suplier2: '',
    suplier3: '',
    suplier4: '',
    suplier5: '',
    suplier6: '',
    fecha_prod_prov1: '',
    fecha_prod_prov2: '',
    fecha_prod_prov3: '',
    fecha_prod_prov4: '',
    fecha_prod_prov5: '',
    fecha_prod_prov6: ''
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
    const [data, setData] = useState(product_fields);

    const updateData = (event) => {
        setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
        }
        ));
        console.log(data);
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: responsive, 
                gap: 3}}>
                <Stack>
                    <Typography variant='body1' align='left'>Hora</Typography>
                    <TextField value={data.time} InputProps={{readOnly: true}}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Proveedor</Typography>
                    <TextField value={data.suplier1} name={"suplier1"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                    <TextField value={data.fecha_prod_prov1} name={"fecha_prod_prov1"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Forma de Pegado</Typography>
                    <TextField value={data.forma_pegado1} name={"forma_pegado1"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Proveedor</Typography>
                    <TextField value={data.suplier1} name={"suplier2"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                    <TextField value={data.fecha_prod_prov1} name={"fecha_prod_prov2"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Forma de Pegado</Typography>
                    <TextField value={data.forma_pegado1} name={"forma_pegado2"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Proveedor</Typography>
                    <TextField value={data.suplier1} name={"suplier3"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Fecha de Producción Proveedor</Typography>
                    <TextField value={data.fecha_prod_prov1} name={"fecha_prod_prov3"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Forma de Pegado</Typography>
                    <TextField value={data.forma_pegado1} name={"forma_pegado3"} onChange={updateData}></TextField>
                </Stack>
            </Box>
        </Box>
    )
}
export default AdditionalSupplyInfoTab;