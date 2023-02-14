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
    etiqueta_torcida: 0,
    etiqueta_equivocada: 0,
    falta_etiqueta: 0,
    leyenda_equivocada: 0,
    etiqueta_arrugada: 0,
    etiqueta_rota: 0,
    exceso_pega: 0,
    falta_pega: 0,
    fuera_centro: 0,
    defecto_impresion: 0,
    color_incorrecto: 0,
    invertidas: 0,
    diferencia_color: 0,
    sucia: 0,
    etiqueta_pelada: 0,
    etiqueta_doblada: 0,
    otros: 0
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};


function LabelDefects(){
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
                <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Defectos Mayores</Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: responsive, 
                    gap: 3}}>
                    <Stack>
                        <Typography variant='body1' align='left'>Etiqueta Torcida (X)</Typography>
                        <TextField value={data.etiqueta_torcida} name={"etiqueta_torcida"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Etiqueta Equivocada (Y)</Typography>
                        <TextField value={data.etiqueta_equivocada} name={"etiqueta_equivocada"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Falta de Etiqueta (AA)</Typography>
                        <TextField value={data.falta_etiqueta} name={"falta_etiqueta"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Leyenda Equivocada (AB)</Typography>
                        <TextField value={data.leyenda_equivocada} name={"leyenda_equivocada"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Etiqueta Arrugada (AC)</Typography>
                        <TextField value={data.etiqueta_arrugada} name={"etiqueta_arrugada"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Etiqueta Rota (AD)</Typography>
                        <TextField value={data.etiqueta_rota} name={"etiqueta_rota"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Exceso de Pegamento (AE)</Typography>
                        <TextField value={data.exceso_pega} name={"exceso_pega"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Falta de Pegamento (AF)</Typography>
                        <TextField value={data.falta_pega} name={"falta_pega"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Fuera de Centro (AG)</Typography>
                        <TextField value={data.fuera_centro} name={"fuera_centro"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Defecto de Impresión (AH)</Typography>
                        <TextField value={data.defecto_impresion} name={"defecto_impresion"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Color Incorrecto (AI)</Typography>
                        <TextField value={data.color_incorrecto} name={"color_incorrecto"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Invertidas (AJ)</Typography>
                        <TextField value={data.invertidas} name={"invertidas"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Diferencia Excesiva en el Tono de Color (AK)</Typography>
                        <TextField value={data.diferencia_color} name={"diferencia_color"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Sucia (AL)</Typography>
                        <TextField value={data.sucia} name={"sucia"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Etiqueta Pelada (AM)</Typography>
                        <TextField value={data.color_incorrecto} name={"color_incorrecto"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Etiqueta Doblada (AN)</Typography>
                        <TextField value={data.etiqueta_doblada} name={"etiqueta_doblada"} onChange={updateData}></TextField>
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
export default LabelDefects;