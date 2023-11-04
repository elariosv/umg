import React from 'react';
import { Container, Typography, Paper, Grid, Divider } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { AddCircle, Alarm, ShoppingCart } from '@mui/icons-material'; // Ejemplos de iconos
import Carousel from 'react-material-ui-carousel';

const CompanyDescription = () => {
  const slides = [
    {
      title: 'Nuestra Misión',
      description: 'Nuestra misión es proporcionar soluciones en plástico para diversas industrias y necesidades, garantizando productos duraderos y respetuosos con el medio ambiente.',
    },
    {
      title: 'Productos de Calidad',
      description: 'Ofrecemos una amplia gama de productos de plástico de alta calidad, desde envases y contenedores hasta productos personalizados para satisfacer las necesidades de nuestros clientes.',
    },
    {
      title: 'Compromiso Ambiental',
      description: 'Estamos comprometidos con la sostenibilidad. Utilizamos materiales reciclables y procesos ecoamigables para minimizar nuestro impacto en el medio ambiente.',
    },
  ];

  const slidesImg = [
    {
      icon: 'addCircle',
    },
    {
      icon: 'alarm',
    },
    {
      icon: 'shoppingCart',
    },
  ];
  

return (
    <Paper elevation={3}>
      <Container maxWidth="md" sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          ¿Qué hacemos?
        </Typography>
        <Typography variant="body1" paragraph>
          En Operations, nos especializamos en la venta y comercio de artículos de plástico de alta calidad. Nuestra misión es proporcionar soluciones en plástico para diversas industrias y necesidades, garantizando productos duraderos y respetuosos con el medio ambiente.
        </Typography>

        <Divider sx={{ my: 10 }} />

        <Grid container spacing={2}>
          {slides.map((slide, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Typography variant="h6">{slide.title}</Typography>
              <Typography variant="body2" paragraph>
                {slide.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 10 }} />

        <Carousel animation="fade" timeout={500} navButtonsAlwaysInvisible indicators={false}>
  {slidesImg.map((slide, index) => (
    <Card key={index}>
      <CardContent>
        {slide.icon === 'addCircle' && <AddCircle fontSize="large" />}
        {slide.icon === 'alarm' && <Alarm fontSize="large" />}
        {slide.icon === 'shoppingCart' && <ShoppingCart fontSize="large" />}
      </CardContent>
    </Card>
  ))}
</Carousel>

      </Container>
    </Paper>
  );
};

export default CompanyDescription;
