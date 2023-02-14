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
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const product_fields = {
    liqueo_tapas: 0,
    fecha_incorrecta: 0,
    tapa_rota: 0,
    diferencia_color: 0,
    puente_roto: 0,
    codigo_incorrecto: 0,
    tapa_floja: 0,
    corcho_criticos: 0,
    corcho_criticos_obs: '',
    corcho_mayores: 0,
    corcho_mayores_obs: '',
    corcho_menores: 0,
    corcho_menores_obs: '',
    capsula_criticos: 0,
    capsula_criticos_obs: '',
    capsula_mayores: 0,
    capsula_mayores_obs: '',
    capsula_menores: 0,
    capsula_menores_obs: '',
    otros: 0
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};


function CapDefects(){
    const [data, setData] = useState(product_fields);

    const [etiqueta, setEtiqueta] = React.useState('tapas');

    const handleChangeEtiqueta = (event, newValue) => {
        setEtiqueta(newValue);
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
            <Stack alignItems={'flex-start'} marginTop='auto'>
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="sin_defectos"
                        control={<Checkbox />}
                        label="Sin defectos"
                        labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
            </Stack>
                <TabContext value={etiqueta}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChangeEtiqueta} aria-label="lab API tabs example">
                            <Tab label="Tapas" value="tapas" />
                            <Tab label="Corcho" value="corcho" />
                            <Tab label="Cápsula" value="capsula" />
                        </TabList>
                    </Box>
                    <TabPanel value="tapas">
                        <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                            <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Defectos Mayores</Typography>
                            <Box sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: responsive, 
                            gap: 3}}>
                                <Stack>
                                    <Typography variant='body1' align='left'>Liqueo en Tapas (Q)</Typography>
                                    <TextField value={data.liqueo_tapas} name={"liqueo_tapas"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Fecha Incorrecta (R)</Typography>
                                    <TextField value={data.fecha_incorrecta} name={"fecha_incorrecta"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Tapa Rota (S)</Typography>
                                    <TextField value={data.tapa_rota} name={"tapa_rota"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Diferencia Excesiva en el Tono de Color (T)</Typography>
                                    <TextField value={data.diferencia_color} name={"diferencia_color"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Puente Roto (U)</Typography>
                                    <TextField value={data.puente_roto} name={"puente_roto"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Código Incorrecto (V)</Typography>
                                    <TextField value={data.codigo_incorrecto} name={"codigo_incorrecto"} onChange={updateData}></TextField>
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
                                    <Typography variant='body1' align='left'>Tapa Floja (W)</Typography>
                                    <TextField value={data.tapa_floja} name={"tapa_floja"} onChange={updateData}></TextField>
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
                    </TabPanel>
                    <TabPanel value="corcho">
                        <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                            <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Defectos Críticos</Typography>
                            <Box sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: responsive, 
                            gap: 3}}>
                                <Stack>
                                    <Typography variant='body1' align='left'>Cantidad</Typography>
                                    <TextField value={data.corcho_criticos} name={"corcho_criticos"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Observaciones</Typography>
                                    <TextField value={data.corcho_criticos_obs} name={"corcho_criticos_obs"} onChange={updateData} inputProps={{sx: {height: "120px"}}}></TextField>
                                    <FormControl component="sin_obs_cor_criticos">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                            value="sin_obs_cor_criticos"
                                            control={<Checkbox />}
                                            label="Sin observaciones"
                                            labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>
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
                                    <Typography variant='body1' align='left'>Cantidad</Typography>
                                    <TextField value={data.corcho_mayores} name={"corcho_mayores"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Observaciones</Typography>
                                    <TextField value={data.corcho_mayores_obs} name={"corcho_mayores_obs"} onChange={updateData} inputProps={{sx: {height: "120px"}}}></TextField>
                                    <FormControl component="sin_obs_cor_mayores">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                            value="sin_obs_cor_mayores"
                                            control={<Checkbox />}
                                            label="Sin observaciones"
                                            labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>
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
                                    <Typography variant='body1' align='left'>Cantidad</Typography>
                                    <TextField value={data.corcho_menores} name={"corcho_menores"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Observaciones</Typography>
                                    <TextField value={data.corcho_menores_obs} name={"corcho_menores_obs"} onChange={updateData} inputProps={{sx: {height: "120px"}}}></TextField>
                                    <FormControl component="sin_obs_cor_menores">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                            value="sin_obs_cor_menores"
                                            control={<Checkbox />}
                                            label="Sin observaciones"
                                            labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Stack>
                            </Box>
                        </Paper>
                    </TabPanel>
                    <TabPanel value="capsula">
                        <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                            <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Defectos Críticos</Typography>
                            <Box sx={{ 
                            display: 'grid', 
                            gridTemplateColumns: responsive, 
                            gap: 3}}>
                                <Stack>
                                    <Typography variant='body1' align='left'>Cantidad</Typography>
                                    <TextField value={data.capsula_criticos} name={"capsula_criticos"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Observaciones</Typography>
                                    <TextField value={data.capsula_criticos_obs} name={"capsula_criticos_obs"} onChange={updateData} inputProps={{sx: {height: "120px"}}}></TextField>
                                    <FormControl component="sin_obs_cap_criticos">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                            value="sin_obs_cap_criticos"
                                            control={<Checkbox />}
                                            label="Sin observaciones"
                                            labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>
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
                                    <Typography variant='body1' align='left'>Cantidad</Typography>
                                    <TextField value={data.capsula_mayores} name={"capsula_mayores"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Observaciones</Typography>
                                    <TextField value={data.capsula_mayores_obs} name={"capsula_mayores_obs"} onChange={updateData} inputProps={{sx: {height: "120px"}}}></TextField>
                                    <FormControl component="sin_obs_cap_mayores">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                            value="sin_obs_cap_mayores"
                                            control={<Checkbox />}
                                            label="Sin observaciones"
                                            labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>
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
                                    <Typography variant='body1' align='left'>Cantidad</Typography>
                                    <TextField value={data.capsula_menores} name={"capsula_menores"} onChange={updateData}></TextField>
                                </Stack>
                                <Stack>
                                    <Typography variant='body1' align='left'>Observaciones</Typography>
                                    <TextField value={data.capsula_menores_obs} name={"capsula_menores_obs"} onChange={updateData} inputProps={{sx: {height: "120px"}}}></TextField>
                                    <FormControl component="sin_obs_cap_menores">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                            value="sin_obs_cap_menores"
                                            control={<Checkbox />}
                                            label="Sin observaciones"
                                            labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Stack>
                            </Box>
                        </Paper>
                    </TabPanel>
                </TabContext>
        </Box>
    )
}
export default CapDefects;