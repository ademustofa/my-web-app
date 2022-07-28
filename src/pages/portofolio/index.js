import { Grid } from '@mui/material';
import * as React from 'react';

import ImageOslog from '../../assets/portofolio/maxresdefault.jpg'
import ImageOpro from '../../assets/portofolio/ospro.png'
import GMSILogo from '../../assets/portofolio/GMS_logo.png'
import MapsPaxel from '../../assets/portofolio/map.png'
import ImagePod from '../../assets/portofolio/pod.png'
import ImageOsc from '../../assets/portofolio/oschecker.png'
import ImagePanBali from '../../assets/portofolio/panbali.png'
import CardComponent from './CardComponent';


const data = [
  {
    image: ImageOslog,
    title: "OSLOG Javaz",
    description: "One Spirit Logistic Javaz is a solution for transportation logistic",
    link: 'https://javaz.oslog.id/'
  },
  {
    image: ImageOpro,
    title: "OSPRO",
    description: "One Spirit Project Javaz is a solution for Project Management",
    link: 'https://iu.ospro.id'
  },
  {
    image: GMSILogo,
    title: "GMSI Taxi",
    description: "One Spirit Project Javaz is a solution for Project Management",
    link: 'https://fms.msitaxi.com/'
  },
  {
    image: MapsPaxel,
    title: "Map Search",
    description: "Map Search is a searching location in indonesia for paxel",
    link: 'https://maps.oslogdev.com'
  },
  {
    image: ImagePanBali,
    title: "OSNOTE PAN BALI",
    description: "OSNOTE PAN BALI is a application for enter exit commodity in bali",
    link: 'http://oscarp.id/pan-bali'
  },
  {
    image: ImagePod,
    title: "OSPOD",
    description: "OSPOD is a application for prove of delivery",
    link: 'https://play.google.com/store/apps/details?id=com.integrasiautama.ospod'
  },
  {
    image: ImageOsc,
    title: "OSCHECKER",
    description: "OSCHECKER is a application for check enter exit vehicle",
    link: 'https://play.google.com/store/apps/details?id=com.integrasiautama.oschecker'
  }

]

export default function PortofolioPage({ image, title, description, link }) {
  return (
    <Grid container spacing={4}>
      {data.map((res, index) => (
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <CardComponent {...res} idx={index + 1} />
        </Grid>
      ))}
    </Grid>
  );
}