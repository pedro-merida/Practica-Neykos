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
    revisado_por: '',
    informado: ''
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};


function Signature(){
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
          <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: responsive, 
              gap: 3}}>
              <Stack>
                  <Typography variant='body1' align='left'>Revisado por</Typography>
                  <TextField value={data.revisado_por} name={"revisado_por"} onChange={updateData}></TextField>
              </Stack>
              <Stack>
                  <Typography variant='body1' align='left'>Informado</Typography>
                  <TextField value={data.informado} name={"informado"} onChange={updateData}></TextField>
              </Stack>
          </Box>
        </Box>
    )
}
export default Signature;