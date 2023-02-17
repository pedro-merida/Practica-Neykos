import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Box, Button, Paper, Tab, Tooltip, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {Step, StepContent, StepLabel, Stepper} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import GeneralInfo from './finished_product/GeneralInfo';
import ProductInformationTab from './finished_product/ProductInformationTab';
import AdditionalSupplyInfoTab from './finished_product/AdditionalSupplyInfoTab';
import ContainerDefects from './finished_product/ContainerDefects';
import LiquidDefects from './finished_product/LiquidDefects';
import CapDefects from './finished_product/CapDefects';
import LabelDefects from './finished_product/LabelDefects';
import InspectionSummary from './finished_product/InspectionSummary';
import FormSummary from './finished_product/FormSummary';
import Signature from './finished_product/Signatures';

const steps = [
    "GENERAL",
    "INFORMACIÓN DEL PRODUCTO",
    "INFORMACIÓN ADICIONAL DE SUMINISTROS",
    "DEFECTOS ENVASES",
    "DEFECTOS LÍQUIDOS",
    "DEFECTOS TAPAS",
    "DEFECTOS ETIQUETAS",
    "RESUMEN INSPECCIÓN",
    "RESUMEN FORMULARIO",
    "FIRMAS",
];

const responsive = {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(2, 1fr)',
    xl: 'repeat(3, 1fr)',
};

let current_date = new Date().toLocaleDateString("en-GB");
let time = new Date().toLocaleTimeString();
  
function FinishedProduct(){

    const [activeStep, setActiveStep] = useState(0);
    const [value, setValue] = useState(1);
    const [totalTabs, setTabs] = useState(1);
    const [tabsProdInfoContent, setTabsProdInfoContent] = useState([
        <TabPanel value={"1"}>
            <ProductInformationTab time={time} date={current_date}/>
        </TabPanel>
    ]);
    const [tabsAdditSuppInfoContent, setTabsAdditSuppInfoContent] = useState([
        <TabPanel value={"1"}>
            <AdditionalSupplyInfoTab time={time} date={current_date}/>
        </TabPanel>
    ]);
    const [tabsContainerDefectsContent, setTabsContainerDefectsContent] = useState([
        <TabPanel value={"1"}>
            <ContainerDefects/>
        </TabPanel>
    ]);
    const [tabsLiquidDefectsContent, setTabsLiquidDefectsContent] = useState([
        <TabPanel value={"1"}>
            <LiquidDefects/>
        </TabPanel>
    ]);
    const [tabsCapDefectsContent, setTabsCapDefectsContent] = useState([
        <TabPanel value={"1"}>
            <CapDefects/>
        </TabPanel>
    ]);
    const [tabsLabelDefectsContent, setTabsLabelDefectsContent] = useState([
        <TabPanel value={"1"}>
            <LabelDefects/>
        </TabPanel>
    ]);
    const [tabsInspectionSummaryContent, setTabsInspectionSummaryContent] = useState([
        <TabPanel value={"1"}>
            <InspectionSummary/>
        </TabPanel>
    ]);
    const [tabsSignatureContent, setTabsSignatureContent] = useState([
        <TabPanel value={"1"}>
            <Signature/>
        </TabPanel>
    ]);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleClickedStep = (index) => {
        setActiveStep(index);
    };

    function stepTitle(name, index){
        return( 
            <StepLabel onClick={() => handleClickedStep(index)}>
                <Typography sx={{typography: ['subtitle1', 'h6']}}>{name}</Typography>
            </StepLabel>
    )};

    function renderTabs(){
        const tabs = [];
        for (let i=1; i<totalTabs+1; i++){
            let tab_name = "Inspección " + i.toString();
            tabs.push(<Tab label={tab_name} value={i.toString()}/>);
        }
        return(
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.paper',
                    maxWidth: { xs: 320, sm: 480, md: 600, lg: 800, xl: 800 },
                }}
                >
                <TabList
                    value={value}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    {tabs}
                </TabList>
            </Box>
        )
    };

    const addInspection = () => {
        if (totalTabs + 1 <= 5){
            setTabs(totalTabs + 1);
            let time = new Date().toLocaleTimeString();
            setTabsProdInfoContent([
                ...tabsProdInfoContent,
                <TabPanel value={(totalTabs + 1).toString()}>
                    <ProductInformationTab time={time} date={current_date}/>
                </TabPanel>
            ]);
            setTabsAdditSuppInfoContent([
                ...tabsAdditSuppInfoContent,
                <TabPanel value={(totalTabs + 1).toString()}>
                    <AdditionalSupplyInfoTab time={time} date={current_date}/>
                </TabPanel>
            ]);
            setTabsContainerDefectsContent([
                ...tabsContainerDefectsContent,
                <TabPanel value={(totalTabs + 1).toString()}>
                    <ContainerDefects/>
                </TabPanel>
            ]);
            setTabsLiquidDefectsContent([
                ...tabsLiquidDefectsContent,
                <TabPanel value={(totalTabs + 1).toString()}>
                    <LiquidDefects/>
                </TabPanel>
            ]);
            setTabsCapDefectsContent([
                ...tabsCapDefectsContent,
                <TabPanel value={(totalTabs + 1).toString()}>
                    <CapDefects/>
                </TabPanel>
            ]);
            setTabsLabelDefectsContent([
                ...tabsLabelDefectsContent,
                <TabPanel value={(totalTabs + 1).toString()}>
                    <LabelDefects/>
                </TabPanel>
            ]);
            setTabsInspectionSummaryContent([
                ...tabsInspectionSummaryContent,
                <TabPanel value={(totalTabs + 1).toString()}>
                    <InspectionSummary/>
                </TabPanel>
            ]);
            setTabsSignatureContent([
                ...tabsSignatureContent,
                <TabPanel value={(totalTabs + 1).toString()}>
                    <Signature/>
                </TabPanel>
            ]);
            setValue(totalTabs + 1);
        }
    };
    
    const deleteInspection = () => {
        const prodInfo = [...tabsProdInfoContent];
        if (totalTabs - 1 >= 1){
            setTabs(totalTabs - 1);
            prodInfo.pop();
            setTabsProdInfoContent(prodInfo);
            setValue(totalTabs - 1);
        }
    };

    const buttonCreate = (index) => {
        return(
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: responsive, 
                gridTemplateAreas: {
                    xs: `"buttons"`,
                    sm: `" .  buttons"`,
                    md: ' .  buttons',
                    lg: '. . buttons',
                    xl: `". . buttons"`,
                },
                gap: 3
                }}>
                <Box align='right' sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridArea: 'buttons'}}>
                    <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1 }}
                    >
                        Volver
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1}}
                    >
                        {index === steps.length - 1 ? 'Enviar' : 'Siguiente'}
                    </Button>
                </Box>
            </Box>
        )
    }

    return(
        <Box sx={{
            mt: [10, 12],
            mr: [2, 10],
            ml: [2, 10],
            mb: 5
            }}>
                
            {/* HEADER */}
            <Paper elevation={3} sx={{mb: 3, mt: 3}}>
                <Typography variant='h5'>Formulario de Inspección de Producto Terminado</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'], ml:5, mr:5}}>
                    <Typography variant='body1'>ASC-F-005</Typography>
                    <Typography variant='body1'>REV.7</Typography>
                    <Typography variant='body1'>27/04/2021</Typography>
                </Box>
            </Paper>

            {/* INSPECCIONES */}
            <TabContext value={value.toString()}>
                <Box zIndex={4} position={'sticky'} bgcolor={'white'} top={64} sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: ['repeat(3, 68% 8% 5%)', 'auto 4% 4%'], 
                    gap: 3,
                    mb: [1, 3]
                    }}>
                        {renderTabs()}
                        <Tooltip title="Agregar Inspección">
                            <IconButton onClick={addInspection}>
                                <AddCircleRoundedIcon color='success'/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar Inspección">
                            <IconButton onClick={deleteInspection}>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                </Box>
                
                {/* CONTENIDO PASOS */}
                <Box>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        <Step>
                            {stepTitle(steps[0], 0)}
                            <StepContent>
                                <GeneralInfo/>
                                {buttonCreate(0)}
                            </StepContent>
                        </Step>

                        <Step>
                            {stepTitle(steps[1], 1)}
                            <StepContent>
                                {tabsProdInfoContent}
                                {buttonCreate(1)}
                            </StepContent>
                        </Step>

                        <Step>
                            {stepTitle(steps[2], 2)}
                            <StepContent>
                                {tabsAdditSuppInfoContent}
                                {buttonCreate(2)}
                            </StepContent>
                        </Step>

                        <Step>
                            {stepTitle(steps[3], 3)}
                            <StepContent>
                                {tabsContainerDefectsContent}
                                {buttonCreate(3)}
                            </StepContent>
                        </Step>

                        <Step>
                            {stepTitle(steps[4], 4)}
                            <StepContent>
                                {tabsLiquidDefectsContent}
                                {buttonCreate(4)}
                            </StepContent>
                        </Step>

                        <Step>
                            {stepTitle(steps[5], 5)}
                            <StepContent>
                                {tabsCapDefectsContent}
                                {buttonCreate(5)}
                            </StepContent>
                        </Step>

                        <Step>
                            {stepTitle(steps[6], 6)}
                            <StepContent>
                                {tabsLabelDefectsContent}
                                {buttonCreate(6)}
                            </StepContent>
                        </Step>

                        <Step>
                            {stepTitle(steps[7], 7)}
                            <StepContent>
                                {tabsInspectionSummaryContent}
                                {buttonCreate(7)}
                            </StepContent>
                        </Step>

                        <Step>
                            {stepTitle(steps[8], 8)}
                            <StepContent>
                                <FormSummary />
                                {buttonCreate(8)}
                            </StepContent>
                        </Step>
                        
                        <Step>
                            {stepTitle(steps[9], 9)}
                            <StepContent>
                                {tabsSignatureContent}
                                {buttonCreate(9)}
                            </StepContent>
                        </Step>
                    </Stepper>

                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                        </Paper>
                    )}
                </Box>
            </TabContext>
        </Box>
    )
}

export default FinishedProduct;