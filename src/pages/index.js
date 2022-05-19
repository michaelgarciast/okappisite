import * as React from 'react';

import OkappiLayout from '../components/OkappiLayout';
import Seo from '../components/seo';
import { SectionIntroduction } from '../components/home/SectionIntroduction';
import SectionDescription from '../components/home/SectionDescription';
import SectionServices from '../components/home/SectionServices';
import SectionClients from '../components/home/SectionClients';
import SectionInformation from '../components/home/SectionInformation';

//CSS IMPORT
import '../styles/index.scss';
import '../styles/responsive.scss';
import { SectionSubFooter } from '../components/home/SectionSubFooter';

const IndexPage = () => (
  <OkappiLayout>
    <Seo title="Home" />
    <SectionIntroduction />
    <SectionDescription />
    <SectionServices />
    <SectionClients />
    <SectionInformation />
    <SectionSubFooter />
  </OkappiLayout>
);

export default IndexPage;
