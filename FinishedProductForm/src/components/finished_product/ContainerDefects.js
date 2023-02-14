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
    columpio: 0,
    rajaduras: 0,
    aguja: 0,
    aristas_cortante: 0,
    vidrio_suelto: 0,
    vidrio_adherido: 0,
    puente_roto: 0,
    envase_rayado: 0,
    falta_codificacion: 0,
    envase_manchado: 0,
    disparejo: 0,
    fracturas_resistencia: 0,
    otros: 0,
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ContainerDefects(){
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
                        <Typography variant='body1' align='left'>Columpio (A)</Typography>
                        <TextField value={data.columpio} name={"columpio"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Rajaduras (B)</Typography>
                        <TextField value={data.rajaduras} name={"rajaduras"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Aguja (C)</Typography>
                        <TextField value={data.aguja} name={"aguja"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Forma de Pegado (D)</Typography>
                        <TextField value={data.aristas_cortante} name={"aristas_cortante"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Vidrio Suelto (E)</Typography>
                        <TextField value={data.vidrio_suelto} name={"vidrio_suelto"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Vidrio Adherido (F)</Typography>
                        <TextField value={data.vidrio_adherido} name={"vidrio_adherido"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Puente Roto (G)</Typography>
                        <TextField value={data.puente_roto} name={"puente_roto"} onChange={updateData}></TextField>
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
                        <Typography variant='body1' align='left'>Envase Rayado (H)</Typography>
                        <TextField value={data.envase_rayado} name={"envase_rayado"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Falta de Codificación (I)</Typography>
                        <TextField value={data.falta_codificacion} name={"falta_codificacion"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Envase Manchado (J)</Typography>
                        <TextField value={data.envase_manchado} name={"envase_manchado"} onChange={updateData}></TextField>
                    </Stack>
                </Box>
            </Paper>
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Defectos Menores</Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: responsive, 
                    gap: 3}}>
                    <Stack>
                        <Typography variant='body1' align='left'>Disparejo (K)</Typography>
                        <TextField value={data.disparejo} name={"disparejo"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Fracturas que no Afectan La Resistencia (L)</Typography>
                        <TextField value={data.fracturas_resistencia} name={"fracturas_resistencia"} onChange={updateData}></TextField>
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
export default ContainerDefects;