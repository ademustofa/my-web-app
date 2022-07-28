import * as React from 'react';

import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Stack, Divider, Grid } from '@mui/material';
import IUImage from '../../assets/career/cropped-integrasia-logo.png'
import CPImage from '../../assets/career/cp2.png'
import { motion } from 'framer-motion'

export default function CareerPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100' }}
      animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, }}
    >
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        {/* <Stack sx={{ px: 10, color: '#333333' }} spacing={4} direction="column" justifyContent="flex-start" divider={<Divider sx={{ bgcolor: "#999999" }} flexItem />}> */}
        <Grid container spacing={10} sx={{ py: 4 }} alignItems="center">
          <Grid item md={4}>
            <img
              src={`${IUImage}?fit=crop&auto=format`}
              srcSet={`${IUImage}?fit=crop&auto=format&dpr=2 2x`}
              alt="Integrasia Utama"
              width="100%"
              loading="lazy"
            />
          </Grid>
          <Grid item md={8}>
            <div>
              {/* <Typography variant='h6' sx={{ color: '#333333', fontWeight: 'bold', letterSpacing: 1 }}>INTEGRASIA UTAMA</Typography> */}
              <Stack sx={{ py: 1 }} direction="row" spacing={5} alignItems="center" justifyContent="flex-start" divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: "#999999" }} />}>
                <Typography variant='body2' sx={{ color: '#333333', fontWeight: 'bold', fontStyle: 'italic' }}>FRONTEND DEVELOPER</Typography>
                <Typography variant='body1' sx={{ color: '#333333', fontWeight: 'bold', }}>April 2018 - Present</Typography>
              </Stack>

              <div>
                <Stack direction="row" sx={{ py: 0.5 }} spacing={1} alignItems="center" justifyContent="flex-start">
                  <ChevronRightIcon sx={{ fontSize: 15, color: '#333333' }} />
                  <Typography variant='body2' sx={{ color: '#333333' }}>Creates Web Application for logistics, project management and plantation sulution</Typography>
                </Stack>
                <Stack direction="row" sx={{ py: 0.5 }} spacing={1} alignItems="center" justifyContent="flex-start">
                  <ChevronRightIcon sx={{ fontSize: 15, color: '#333333' }} />
                  <Typography variant='body2' sx={{ color: '#333333' }}>Creates Mobile Application for logistics  project management and plantation solution</Typography>
                </Stack>
                <Stack direction="row" sx={{ py: 0.5 }} spacing={1} alignItems="center" justifyContent="flex-start">
                  <ChevronRightIcon sx={{ fontSize: 15, color: '#333333' }} />
                  <Typography variant='body2' sx={{ color: '#333333' }}>Modifies code to fix errors and bugs</Typography>
                </Stack>
              </div>

            </div>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={10} sx={{ py: 4 }} alignItems="center">
          <Grid item md={4}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <img
                src={`${CPImage}?fit=crop&auto=format`}
                srcSet={`${CPImage}?fit=crop&auto=format&dpr=2 2x`}
                alt="CODEPOLITAN"
                width="100%"
                loading="lazy"
              />
            </Stack>
          </Grid>
          <Grid item md={8}>

            <div>
              {/* <Typography variant='h6' sx={{ color: '#333333', fontWeight: 'bold', letterSpacing: 1 }}>CODEPOLITAN</Typography> */}
              <Stack sx={{ py: 1 }} direction="row" spacing={5} alignItems="center" justifyContent="flex-start" divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: "#999999" }} />}>
                <Typography variant='body2' sx={{ color: '#333333', fontWeight: 'bold', fontStyle: 'italic' }}>INTERN WEB DEVELOPER</Typography>
                <Typography variant='body1' sx={{ color: '#333333', fontWeight: 'bold', }}>August 2016 - December 2016</Typography>
              </Stack>

              <div>
                <Stack direction="row" sx={{ py: 0.5 }} spacing={1} alignItems="center" justifyContent="flex-start">
                  <ChevronRightIcon sx={{ fontSize: 15, color: '#333333' }} />
                  <Typography variant='body2' sx={{ color: '#333333' }}>Research and Development new technology</Typography>
                </Stack>
                <Stack direction="row" sx={{ py: 0.5 }} spacing={1} alignItems="center" justifyContent="flex-start">
                  <ChevronRightIcon sx={{ fontSize: 15, color: '#333333' }} />
                  <Typography variant='body2' sx={{ color: '#333333' }}>Creates Web application for content article by using annotator.js</Typography>
                </Stack>
              </div>

            </div>
          </Grid>
        </Grid>
        {/* </Stack > */}
      </div>
    </motion.div>
  );
}
