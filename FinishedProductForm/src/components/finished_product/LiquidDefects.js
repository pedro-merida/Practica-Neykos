import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const product_fields = {
    color: 0,
    materia_ext: 0,
    nivel_alto: 0,
    nivel_bajo: 0,
    otros: 0,
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};


function LiquidDefects(){
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
            <Stack alignItems={'flex-start'} marginTop='auto'>
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="sin_defectps"
                        control={<Checkbox />}
                        label="Sin defectos"
                        labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
            </Stack>
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Críticos</Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: responsive, 
                    gap: 3}}>
                    <Stack>
                        <Typography variant='body1' align='left'>Color no Caracteristico (M)</Typography>
                        <TextField value={data.color} name={"color"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Materia Extraña (N)</Typography>
                        <TextField value={data.materia_ext} name={"materia_ext"} onChange={updateData}></TextField>
                    </Stack>
                </Box>
            </Paper>
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Defectos Mayores</Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: responsive, 
                    gap: 3}}>
                    <Stack>
                        <Typography variant='body1' align='left'>Nivel Alto (O)</Typography>
                        <TextField value={data.nivel_alto} name={"nivel_alto"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Nivel Bajo (P)</Typography>
                        <TextField value={data.nivel_bajo} name={"nivel_bajo"} onChange={updateData}></TextField>
                    </Stack>
                </Box>
            </Paper>
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: responsive, 
                gap: 3}}>
                <Stack>
                    <Typography variant='body1' align='left'>Otros (Z)</Typography>
                    <TextField value={data.otros} name={"otros"} onChange={updateData}></TextField>
                </Stack>
            </Box>
        </Box>
    )
}
export default LiquidDefects;