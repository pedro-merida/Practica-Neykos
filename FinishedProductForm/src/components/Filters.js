import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Filters() {
  return (
    <div>
    <h4>Filtro tipo 1</h4>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Característica 1" />
      <FormControlLabel control={<Checkbox />} label="Característica 2" />
      <FormControlLabel control={<Checkbox />} label="Característica 3" />
    </FormGroup>
    <h4>Filtro tipo 2</h4>
    <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Característica 4" />
        <FormControlLabel control={<Checkbox />} label="Característica 5" />
        <FormControlLabel control={<Checkbox />} label="Característica 6" />
    </FormGroup>
    </div>
  );
}