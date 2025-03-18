import * as React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProductCard({ id, img, name, director, releasedate, ticketprice }) {
  return (
    <Card 
      sx={{
        width: 300, 
        height: 700, 
        mx: 'auto',
        my: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', 
        borderRadius: 3,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': { 
          transform: 'scale(1.05)', 
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' 
        },
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1e1e2f 20%, #28293d 80%)',
      }}
    >
      <div 
        style={{
          width: '100%',
          height: 450, 
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <CardContent sx={{ p: 2, color: 'white', textAlign: 'center' }}>
        <Typography variant="subtitle2" color="gray">
          🎬 Director: {director}
        </Typography>


        <RouterLink to={`/product/${id}`} style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold', 
              mt: 1, 
              color: 'white',
              whiteSpace: 'nowrap', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
            }}
          >
            {name} <ArrowOutwardIcon sx={{ fontSize: 16 }} />
          </Typography>
        </RouterLink>

        <Typography variant="body2" color="lightgray" sx={{ mt: 1,overflow: 'hidden', textOverflow: 'ellipsis', fontSize:12,}}>
          🗓 Release Date: {releasedate}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ff5555', mt: 1 }}>
          💵 Ticket Price: ${ticketprice}
        </Typography>
      </CardContent>

      {/* Booking Button */}
      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button 
          component={RouterLink} 
          to={`/product/${id}`} 
          variant="contained" 
          color="error"
          size="large"
          sx={{ 
            borderRadius: 8, 
            px: 3,
            transition: 'background 0.3s ease-in-out',
            '&:hover': { background: '#ff3333' },
          }}
        >
          🎟 Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
