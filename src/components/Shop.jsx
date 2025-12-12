/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from './Layout'
import { Box, Container, Grid } from '@mui/material'
import Slider from "react-slick";
import image1 from "./Image/banner-01_full_width.jpg"
import image2 from "./Image/banner-02_full_width.jpg"

const Shop = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Layout>
                <section style={{ padding: '40px 0px' }}>
                    <Container className='container-7'>
                        <Grid container>
                            <Grid size={12}>
                                <Box sx={{ padding: '0px 15px' }}>
                                    <span className='span1'>Home</span>
                                    <span className='span2'>Shop</span>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section>
                    <Container className='container-8'>
                        <Grid container>
                            <Grid size={12}>
                                <Slider {...settings}>
                                    <Box sx={{ display: 'block', width: '100%', padding: '0px 15px' }}>
                                        <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden' }}>
                                            <img src={image1} alt="#" />
                                            {/* <Box sx={{ position: 'absolute', top: '32%', left: '8%' }}>
                                                <h4 className='H4'>hurry up</h4>
                                                <h3 className='H3'>Big Sale To <br /> 30% off</h3>
                                                <Box sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '25px', color: '#666666' }}>
                                                    use promo code :
                                                    <span style={{ fontSize: '14px', color: '#c09578', fontWeight: '700' }}>Ysera</span>
                                                </Box>
                                                <a href="#" className='A1'>shop now</a>
                                            </Box> */}
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'block', width: '100%', padding: '0px 15px' }}>
                                        <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden' }}>
                                            <img src={image2} alt="banner" />
                                            {/* <Box sx={{ position: 'absolute', top: '32%', left: '8%' }}>
                                                <h4 className='H4'>hurry up</h4>
                                                <h3 className='H3'>Big Sale To <br /> 30% off</h3>
                                                <Box sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '25px', color: '#666666' }}>
                                                    use promo code :
                                                    <span style={{ fontSize: '14px', color: '#c09578', fontWeight: '700' }}>Ysera</span>
                                                </Box>
                                                <a href="#" className='A1'>shop now</a>
                                            </Box> */}
                                        </Box>
                                    </Box>
                                </Slider>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </Layout >
        </>
    )
}

export default Shop