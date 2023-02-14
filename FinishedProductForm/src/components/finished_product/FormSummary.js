import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useState, useEffect, useRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const product_fields = {
    cant_inspec: 0,
    total_defectos: 0,
    total_menores: 0,
    total_mayores: 0,
    total_criticos: 0,
    observaciones: ''
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};


function FormSummary(){
    const [data, setData] = useState(product_fields);

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
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3, overflowX: 'auto', margin: 'auto'}} elevation={3}>
                <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: responsive, 
                gap: 3}}>
                  <Stack marginY={1} marginX={1}>
                    <Typography variant='body1' align='left'>Total defectos</Typography>
                    <TextField value={data.total_defectos} name={"total_defectos"} InputProps={{readOnly: true}}></TextField>
                  </Stack>
                  <Stack marginY={1} marginX={1}>
                    <Typography variant='body1' align='left'>Total de unidades defectuosas crítico</Typography>
                    <TextField value={data.total_criticos} name={"total_criticos"} InputProps={{readOnly: true}}></TextField>
                  </Stack>
                  <Stack marginY={1} marginX={1}>
                    <Typography variant='body1' align='left'>Total de unidades defectuosas mayores</Typography>
                    <TextField value={data.total_mayores} name={"total_mayores"} InputProps={{readOnly: true}}></TextField>
                  </Stack>
                  <Stack marginY={1} marginX={1}>
                    <Typography variant='body1' align='left'>Total de unidades defectuosas menores</Typography>
                    <TextField value={data.total_menores} name={"total_menores"} InputProps={{readOnly: true}}></TextField>
                  </Stack>
                </Box>
            </Paper>
            <Stack marginY={1} marginX={1}>
              <Typography variant='body1' align='left'>Observaciones</Typography>
              <TextField size='medium' value={data.observaciones} name={"observaciones"} onChange={updateData} inputProps={{sx: {height: "120px"}}}></TextField>
            </Stack>
        </Box>
    )
}
export default FormSummary;