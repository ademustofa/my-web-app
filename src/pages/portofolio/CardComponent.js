import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


export default function CardComponent({ image, title, description, link, idx }) {
  const goLink = url => window.open(url, '_blank');
  return (
    <motion.div
      // whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: '-50' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx / 10 }}
    >
      <Card sx={{ bgcolor: 'transparent' }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ color: '#333' }} gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography sx={{ color: '#333' }} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullwidth onClick={() => goLink(link)} variant='outlined' size="small">Go to Website</Button>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </motion.div>
  );
}