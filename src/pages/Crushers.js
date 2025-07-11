import React, { useEffect, useState } from 'react'
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../Components/PageBanner';
import Details from '../Components/Services/Details';
import FooterThree from '../Components/Footer/FooterThree';
import FooterForm from '../Components/Contact/FooterForm';
import HeaderThree from '../Components/Header/HeaderThree';
import { useParams } from 'react-router-dom';
import ProductsThreeData from '../Components/Services/servicesThreeData';
import { EnquiryForm } from './EnquiryForm';
import MoveToAustralia from './CementPlantPage';
import GrindingUnit from './GrindingUnit';
import CementPlantsSpares from './CementPlantSpares';
import { CrushersPage } from './CrushersPage';

const Crushers = () => {

  return (
    <>
        <HeaderThree/>
        {/* <PageBanner title={selectedProduct.title} bannerBg={bannerBg} currentPage={selectedProduct.title} />
        <EnquiryForm  />
        <Details selectedProduct={selectedProduct} />
        <FooterForm/> */}
        <CrushersPage />
        <FooterThree/>
    </>
  )
}

export default Crushers;