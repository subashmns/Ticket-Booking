import * as React from 'react';
import Button from '@mui/joy/Button';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Card } from 'antd';
import {Link as Links} from 'react-router-dom';


export default function ProductCard(props) {

  return (
    <Card
      className=' mx-0 mx-sm-2'
      hoverable
      style={{
        width: 290,
        marginTop: '14px',
      }}
      cover={<img alt="example" src={props.img} />}
    >
      <CardOverflow key={props.key}>
        <Typography level="body-xs">Director : {props.director}</Typography>
      </CardOverflow>
      <CardContent>
      <Links to={`/product/${props.id}`}>
          <Link
            href="#product-card"
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutwardIcon />}
            sx={{ fontWeight: 'md' }}

          >
            
            {props.name}
          </Link>
        </Links>
        <Typography level="body-sm" className='mt-2'>
          releasedate: {props.releasedate}
        </Typography>
        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          className='my-2'
        >
          Ticket Price : {props.ticketprice} USD
        </Typography>
      </CardContent>

      <CardOverflow>
          <Links to={`/product/${props.id}`}>
          <Button variant="solid" color="danger" size="lg" style={{ marginTop: "10px" }} >
            Book Now
          </Button>
          </Links>
      </CardOverflow>
    </Card>
  );
}
