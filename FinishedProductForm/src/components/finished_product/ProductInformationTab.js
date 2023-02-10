import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Html5Qrcode } from "html5-qrcode";

//let r = document.getElementById('reader');
//r.firstChild.style = null;

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const product_fields = {
    time: '',
    pallet: '',
    trace_code: '',
    product_barcode: '',
    pack_code: '',
    corrugated_code: '',
    sanitary_registration: '',
    destination: '',
    imported_by: '',
    destination_box: '',
    date: '',
    time_box: '',
    box_number: '',
    destination_legend: '',
    product_appearance: '',
    informed_person: '',
    paper_tearing: '',
    inspection_status: '',
    status_motif: ''
}

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(3, 1fr)',
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height:'50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function ProductInformationTab(props){

    product_fields.time = props.time;
    product_fields.date = props.date;
    const [data, setData] = useState(product_fields);

    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const ratio = windowSize.current[0]/windowSize.current[1];

    const updateData = (event) => {
        setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
        }
        ));
        console.log(data);
    };

    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const { vertical, horizontal} = {
        vertical: 'bottom',
        horizontal: 'center',
      };
    const [campito, setCampito] = useState('')

    const handleOpen = (input) => {
        setOpen(true);
        setCampito(input)
    }

    const handleOpenSnack = () => {
        setOpenSnack(true);
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
    };

    const handleClose = () => setOpen(false);

    const BarcodeScannerPlugin = () => {
        var qrcodeId = "reader";
        
        let html5QrCode;
        
        useEffect(() => {
            // Anything in here is fired on component mount.
            console.log(qrcodeId)
            if(!html5QrCode?.getState()){
                html5QrCode = new Html5Qrcode(qrcodeId);
                const qrCodeSuccessCallback = (decodedText, decodedResult) => {
                    alert(decodedText)
                    if (campito === "product_barcode"){
                        product_fields.product_barcode = decodedText;
                    }
                    else if (campito === "pack_code"){
                        product_fields.pack_code = decodedText;
                    }
                    else if (campito === "corrugated_code"){
                        product_fields.corrugated_code = decodedText;
                    } 

                    html5QrCode.stop()
                    handleClose();
        
                };

                
                const config = { fps: 10, qrbox: 150, aspectRatio: ratio, forgetLastUsedCamera: false};
    
                // If you want to prefer back camera
                html5QrCode.start(
                    { facingMode: "environment" },
                    config,
                    qrCodeSuccessCallback
                );
            }
    
            return () => {
                // Anything in here is fired on component unmount.
            };
        }, []);
        
        
        return <div style={{width: '80%', margin: 'auto', marginTop: 5}} id={qrcodeId}></div>;
    };

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
                    <Typography variant='body1' align='left'>Pallet</Typography>
                    <TextField value={data.pallet} name={"pallet"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Código de Trazabilidad</Typography>
                    <TextField value={data.trace_code} name={"trace_code"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>C. de Barra del Producto</Typography>
                    <Grid container justifyContent={'space-between'}>
                        <TextField sx={{width: '85%'}} value={data.product_barcode} name={"product_barcode"} onChange={updateData}></TextField>
                        <Grid sx={{margin: 'auto'}} item>
                            <Tooltip title='Escanear' arrow>
                                <IconButton onClick={event => handleOpen("product_barcode")}>
                                    <AddAPhotoIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <Grid container justifyContent={'space-between'}>
                                        <Grid item >
                                            <Typography marginTop={1}>
                                            Posicione el código en el marco para escanear
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <IconButton onClick={handleClose}>
                                                <CloseIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <BarcodeScannerPlugin />
                                    <Grid margin={'auto'} container justifyContent={'right'}>
                                        <Grid item marginTop={1} marginRight={1}>
                                            <Button variant='contained' onClick={handleClose}>Cancelar</Button>
                                        </Grid>
                                        <Grid item marginTop={1}>
                                            <Button variant='contained' onClick={handleClose} color='success'>Aceptar</Button>
                                        </Grid>
                                    </Grid>
                                    <Snackbar open={openSnack} autoHideDuration={30} anchorOrigin={{ vertical, horizontal }} onClose={handleCloseSnack}>
                                        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                                            Código leído correctamente
                                        </Alert>
                                    </Snackbar>
                                </Box>
                            </Fade>
                        </Modal>
                    </Grid>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>C. de Barra (cajetilla)</Typography>
                    <Grid container justifyContent={'space-between'}>
                        <TextField sx={{width: '85%'}} value={data.pack_code} name={"pack_code"} onChange={updateData}></TextField>
                        <Grid sx={{margin: 'auto'}} item>
                            <Tooltip title='Escanear' arrow>
                                <IconButton onClick={event => handleOpen("pack_code")}>
                                    <AddAPhotoIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>C. de Barra (corrugado)</Typography>
                    <Grid container justifyContent={'space-between'}>
                        <TextField sx={{width: '85%'}} value={data.corrugated_code} name={"corrugated_code"} onChange={updateData}></TextField>
                        <Grid sx={{margin: 'auto'}} item>
                            <Tooltip title='Escanear' arrow>
                                <IconButton onClick={event => handleOpen("corrugated_code")}>
                                    <AddAPhotoIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Registro Sanitario</Typography>
                    <TextField value={data.sanitary_registration} name={"sanitary_registration"} onChange={updateData}></TextField>
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Destino</Typography>
                    <TextField value={data.destination} name={"destiny"} onChange={updateData}></TextField>
                </Stack>
            </Box>
            <Paper sx={{mt: 3, pb: 1, pr: 1, pl: 1, mb: 3}} elevation={3}>
                <Typography variant='h6' align='left' sx={{ mb: 1, mt: 1 }}>Impresión en la Caja</Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: responsive,
                    gap: 3}}>
                    <Stack>
                        <Typography variant='body1' align='left'>Fecha</Typography>
                        <TextField value={data.date} InputProps={{readOnly: true}}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Hora</Typography>
                        <TextField value={data.time_box}> name={"time_box"} onChange={updateData}</TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Importado por</Typography>
                        <TextField value={data.imported_by}  name={"imported_by"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Destino</Typography>
                        <TextField value={data.destination_box}  name={"destiny_box"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Nro. de las Cajas Inspeccionadas</Typography>
                        <TextField value={data.box_number}  name={"box_number"} onChange={updateData}></TextField>
                    </Stack>
                    <Stack>
                        <Typography variant='body1' align='left'>Fotografía Etiqueta en la Caja</Typography>
                        <Tooltip title='Agregar' arrow>
                            <IconButton>
                                <AddAPhotoIcon/>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
            </Paper>
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: responsive, 
                gap: 3}}>
                <Stack>
                    <Typography variant='body1' align='left'>Leyenda del Destino</Typography>
                    <Autocomplete
                        disablePortal
                        options={["OK", "NO OK", "N/A"]}
                        name={"destination_legend"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Apariencia del Producto</Typography>
                    <Autocomplete
                        disablePortal
                        options={["Buena", "Regular+", "Regular", "Regular-", "Mala"]}
                        name={"product_appearance"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Persona Informada</Typography>
                    <Autocomplete
                        disablePortal
                        options={["Nombre 1", "Nombre 2", "Nombre 3"]}
                        name={"informed_person"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Desgarre de Papel</Typography>
                    <Autocomplete
                        disablePortal
                        options={["Bueno", "Malo"]}
                        name={"paper_tearing"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Estado de Inspección</Typography>
                    <Autocomplete
                        disablePortal
                        options={["Aprobado", "En Proceso", "Detenido"]}
                        name={"inspection_status"}
                        renderInput={(params) => <TextField {...params}/>}
                    />
                </Stack>
                <Stack>
                    <Typography variant='body1' align='left'>Motivo del Estado de Inspección</Typography>
                    <TextField value={data.status_motif}  name={"box_number"} onChange={updateData}></TextField>
                </Stack>
            </Box>
        </Box>
    )
}
export default ProductInformationTab;