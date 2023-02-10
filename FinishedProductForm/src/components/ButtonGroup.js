import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtonGroup() {
  return (
    <div>
        <Button variant='outlined'>Todas</Button>
        <Button variant='outlined'>Advertencias</Button>
        <Button variant='outlined'>Críticas</Button>
        <Button variant='outlined'>Informativas</Button>
    </div>
  );
}