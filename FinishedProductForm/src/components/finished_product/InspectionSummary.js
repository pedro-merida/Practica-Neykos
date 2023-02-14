import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useState, useEffect, useRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const product_fields = {
    cant_inspec: 0,
    total_menores: 0,
    total_mayores: 0,
    total_criticos: 0
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};


function InspectionSummary(){
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
                    <Stack marginY={3} marginX={1}>
                      <Table sx={{minWidth: "100%"}} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">Menor</TableCell>
                            <TableCell align="right">Mayor</TableCell>
                            <TableCell align="right">Crítico</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                Envases
                              </TableCell>
                              <TableCell align="right">0</TableCell>
                              <TableCell align="right">0</TableCell>
                              <TableCell align="right">0</TableCell>
                            </TableRow>
                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                Liquidos
                              </TableCell>
                              <TableCell align="right">0</TableCell>
                              <TableCell align="right">0</TableCell>
                              <TableCell align="right">0</TableCell>
                            </TableRow>
                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                Tapas
                              </TableCell>
                              <TableCell align="right">0</TableCell>
                              <TableCell align="right">0</TableCell>
                              <TableCell align="right">0</TableCell>
                            </TableRow>
                            <TableRow
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                Etiquetas
                              </TableCell>
                              <TableCell align="right">0</TableCell>
                              <TableCell align="right">0</TableCell>
                              <TableCell align="right">0</TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </Stack>
                    <Stack marginY={3} marginX={1}>
                      <Stack marginY={1} marginX={1}>
                        <Typography variant='body1' align='left'>Cantidad Inspeccionada</Typography>
                        <TextField value={data.cant_inspec} name={"cant_inspec"} onChange={updateData}></TextField>
                      </Stack>
                      <Stack marginY={1} marginX={1}>
                        <Typography variant='body1' align='left'>Total defectos mayores</Typography>
                        <TextField value={data.total_mayores} name={"total_mayores"} InputProps={{readOnly: true}}></TextField>
                      </Stack>
                    </Stack>
                    <Stack marginY={3} marginX={1}>
                      <Stack marginY={1} marginX={1}>
                        <Typography variant='body1' align='left'>Total defectos menores</Typography>
                        <TextField value={data.total_menores} name={"total_menores"} InputProps={{readOnly: true}}></TextField>
                      </Stack>
                      <Stack marginY={1} marginX={1}>
                        <Typography variant='body1' align='left'>Total defectos criticos</Typography>
                        <TextField value={data.total_criticos} name={"total_criticos"} InputProps={{readOnly: true}}></TextField>
                      </Stack>
                      <Stack alignItems={'flex-end'} marginTop='auto'>
                        <Button sx={{width: 200}} disabled={data.total_menores === 0 && data.total_mayores === 0 && data.total_criticos === 0 } variant="contained">Crear Ticket</Button>
                      </Stack>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    )
}
export default InspectionSummary;