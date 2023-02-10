import { Box, Stack } from "@mui/system";
import { FormControl, FormControlLabel, FormLabel} from "@mui/material";
import { Radio, RadioGroup } from '@mui/material';
import { TextField, Typography } from "@mui/material";
import { useState } from "react";


let current_date = new Date().toLocaleDateString("en-GB");
const sap_material = "100216Al\n100216Al\n100216Al\n100216Al\n"

const general_fields = [
    {name: 'Fecha', value: current_date},
    {name: 'Producto', value: 'Ron Abuelo Añejo'},
    {name: 'Presentación', value: '70 cl'},
    {name: 'Línea', value: '4'},
    {name: 'Inspector', value: 'Brenda L.'}
];

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};

function GeneralInfo(){
    const [open, setOpen] = useState(true);

    return(
        <Box sx={{ display: 'grid', gridTemplateColumns: responsive, gap: 3, mb: 2}}>
            {open &&
                general_fields.map((item) => (
                    <Stack>
                        <Typography variant='body1' align='left'>{item.name}</Typography>
                        <TextField value={item.value} InputProps={{readOnly: true}}></TextField>
                    </Stack>
            ))}
            <div></div>
            <Stack>
                <Typography variant='body1' align='left'>Material en SAP</Typography>
                <TextField
                id="filled-multiline-static"
                multiline
                InputProps={{readOnly: true}}
                rows={5}
                defaultValue={sap_material}
                />
            </Stack>
            <div align='left'>
                <FormControl>
                <FormLabel align='left'>Tipo de Inspección</FormLabel>
                <RadioGroup
                    name="inspection_type"
                    defaultValue="production"
                >
                    <FormControlLabel value="production" control={<Radio size='small'/>} label="Producción"/>
                    <FormControlLabel value="rework" control={<Radio size='small'/>} label="Retrabajo (producto en proceso)" />
                    <FormControlLabel value="reinspection" control={<Radio size='small'/>} label="Re-inspección por detención" />
                    <FormControlLabel value="transfer" control={<Radio size='small'/>} label="Transferencia de Inventario" />
                </RadioGroup>
                </FormControl>
            </div>
        </Box>
    )

} export default GeneralInfo;