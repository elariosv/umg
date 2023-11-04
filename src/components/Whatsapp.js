import React from 'react';
import { Button, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // Reemplaza el número de teléfono y el mensaje según tus necesidades
    const phoneNumber = '+50251796243';
    const message = 'Hola desde mi sitio web';

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Box
      position="fixed"
      bottom={20}
      right={20}
      zIndex={1000}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<WhatsAppIcon />}
        onClick={openWhatsApp}
      >
        WhatsApp
      </Button>
    </Box>
  );
};

export default WhatsAppButton;
