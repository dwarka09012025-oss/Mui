/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Layout from './Layout'
import { Box, Container, Grid } from '@mui/material'
import Slider from "react-slick"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import InstagramIcon from '@mui/icons-material/Instagram';
import image1 from './Image/slider-thumb4.jpg'
import image2 from './Image/slider-thumb5.jpg'
import image3 from './Image/slider-thumb6.jpg'
import image4 from './Image/banner-home-7.jpg'
import image5 from './Image/banner-home-71.jpg'
import image6 from './Image/banner-home-10.jpg'
import image7 from './Image/banner-home-11.jpg'
import image8 from './Image/banner-home-12.jpg'
import image9 from './Image/1.jpg'
import image10 from './Image/10.jpg'
import image11 from './Image/19.jpg'
import image12 from './Image/3.jpg'
import image13 from './Image/5.jpg'
import image14 from './Image/6.jpg'
import image15 from './Image/8.jpg'
import image16 from './Image/9.jpg'
import image17 from './Image/clinet.jpg'
import image18 from './Image/clinet1.jpg'
import image19 from './Image/clinet2.jpg'
import image20 from './Image/item-instagram-1.jpg'
import image21 from './Image/item-instagram-2.jpg'
import image22 from './Image/item-instagram-3.jpg'
import image23 from './Image/item-instagram-4.jpg'

const Main = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Layout>
                <section style={{ padding: '50px 0px' }}>
                    <Container className='container-1'>
                        <Grid container>
                            <Grid size={12}>
                                <Slider {...settings}>
                                    <Box sx={{ height: '620px', position: 'relative' }}>
                                        <img src={image1} alt="slider image" style={{ width: 'auto', objectFit: 'cover', padding: '0px 191px' }} />
                                        <Box sx={{ position: 'absolute', top: '45%', left: '25%' }}>
                                            <h5 className='H5'>Sale up to 40% off!</h5>
                                            <h3 className='H3'>Spring Summer<br />Collection</h3>
                                            <Box sx={{ fontSize: '18px', fontWeight: '500', marginBottom: '35px', color: '#5b5b5bff' }}>
                                                New Price :
                                                <span className='Span'>$270.00</span>
                                            </Box>
                                            <a href="#" className='A1'>shop now</a>
                                        </Box>
                                    </Box>
                                    <Box sx={{ height: '620px', position: 'relative' }}>
                                        <img src={image2} alt="slider image" style={{ width: 'auto', objectFit: 'cover', padding: '0px 191px' }} />
                                        <Box sx={{ position: 'absolute', top: '45%', left: '25%' }}>
                                            <h5 className='H5'>Take a jewelry</h5>
                                            <h3 className='H3'>Up to 25% off <br /> order now</h3>
                                            <Box sx={{ fontSize: '18px', fontWeight: '500', marginBottom: '35px', color: '#5b5b5bff' }}>
                                                Save Price :
                                                <span className='Span'>$170.00</span>
                                            </Box>
                                            <a href="#" className='A1'>shop now</a>
                                        </Box>
                                    </Box>
                                    <Box sx={{ height: '620px', position: 'relative' }}>
                                        <img src={image3} alt="slider image" style={{ width: 'auto', objectFit: 'cover', padding: '0px 191px' }} />
                                        <Box sx={{ position: 'absolute', top: '45%', left: '25%' }}>
                                            <h5 className='H5'>Ysera Best collection</h5>
                                            <h3 className='H3'>A range of <br /> jewelry</h3>
                                            <Box sx={{ fontSize: '18px', fontWeight: '500', marginBottom: '35px', color: '#5b5b5bff' }}>
                                                New Price :
                                                <span className='Span'>$250.00</span>
                                            </Box>
                                            <a href="#" className='A1'>shop now</a>
                                        </Box>
                                    </Box>
                                </Slider>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section style={{ margin: '10px 0px 40px' }}>
                    <Container className='container-2'>
                        <Grid container sx={{ marginRight: '-15px', marginLeft: '-15px' }}>
                            <Grid size={6} sx={{ padding: '0px 15px', float: 'left' }}>
                                <Box>
                                    <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden', marginBottom: '30px', bgcolor: '#eee' }}>
                                        <img src={image4} alt="banner" />
                                        <Box sx={{ position: 'absolute', top: '32%', left: '8%' }}>
                                            <h4 className='H4'>hurry up</h4>
                                            <h3 className='H3'>Big Sale To <br /> 30% off</h3>
                                            <Box sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '25px', color: '#666666' }}>
                                                use promo code :
                                                <span style={{ fontSize: '14px', color: '#c09578', fontWeight: '700' }}>Ysera</span>
                                            </Box>
                                            <a href="#" className='A1'>shop now</a>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={6} sx={{ padding: '0px 15px', float: 'left' }}>
                                <Box>
                                    <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden', marginBottom: '30px' }}>
                                        <img src={image5} alt="banner" />
                                        <Box sx={{ position: 'absolute', top: '32%', left: '8%' }}>
                                            <h4 className='H4'>Sale up to 50% off</h4>
                                            <h3 className='H3'>get daily <br /> update</h3>
                                            <Box sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '25px', color: '#666666' }}>
                                                use promo code :
                                                <span style={{ fontSize: '14px', color: '#c09578', fontWeight: '700' }}>Ysera</span>
                                            </Box>
                                            <a href="#" className='A1'>shop now</a>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container className='container-3'>
                        <Grid container sx={{ marginRight: '-15px', marginLeft: '-15px' }}>
                            <Grid size={4} sx={{ padding: '0px 15px', float: 'left' }}>
                                <Box>
                                    <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden', marginBottom: '20px' }}>
                                        <img src={image6} alt="#" />
                                        <Box sx={{ position: 'absolute', top: '20%', left: '10%' }}>
                                            <h3 className='H3'>best seller</h3>
                                            <Box sx={{ marginBottom: '20px', maxWidth: '190px', fontSize: '16px', lineHeight: '22px', display: 'block', color: '#666666' }}>
                                                Check out our your <br /> jewelry collection now!
                                            </Box>
                                            <a href="#" className='A1'>shop now</a>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={4} sx={{ padding: '0px 15px', float: 'left' }}>
                                <Box>
                                    <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden', marginBottom: '20px' }}>
                                        <img src={image8} alt="#" />
                                        <Box className='Box-1'>
                                            <h3 className='H31'>End this weekend</h3>
                                            <Box sx={{ marginBottom: '20px', maxWidth: '190px', fontSize: '36px', lineHeight: '1.2', display: 'block', fontWeight: '700' }}>
                                                Big Sale <br /> 75% Off
                                            </Box>
                                            <Box sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '25px', color: '#666666' }}>
                                                use promo code :
                                                <span style={{ fontSize: '18px', color: '#c09578', fontWeight: '700' }}>Ysera</span>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={4} sx={{ padding: '0px 15px', float: 'left' }}>
                                <Box>
                                    <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden', marginBottom: '20px' }}>
                                        <img src={image7} alt="#" />
                                        <Box sx={{ position: 'absolute', top: '20%', left: '10%' }}>
                                            <h3 className='H3'>look book</h3>
                                            <Box sx={{ marginBottom: '20px', maxWidth: '190px', fontSize: '16px', lineHeight: '22px', display: 'block', color: '#666666' }}>
                                                New Jewelry Collections <br /> Summer Lookbook
                                            </Box>
                                            <a href="#" className='A1'>view all</a>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section style={{ padding: '40px 0px' }}>
                    <Container className='container-4'>
                        <Box sx={{ marginBottom: '25px', textAlign: 'center' }}>
                            <h3 className='H3'>Our Products</h3>
                            <p className='P1'>Add our products to weekly lineup</p>
                        </Box>
                        <Grid container>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ padding: '0px 15px', float: 'left', marginBottom: '20px', textAlign: 'center' }}>
                                {/* <Box sx={{ width: 'auto', height: '100%', position: 'relative' }}>
                                    <img src={image16} style={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden' }} />
                                    <Box sx={{ display: 'block', width: '100px', height: '100px' }}>1</Box>
                                </Box> */}
                                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={image16}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography>
                                                <Box sx={{ display: 'block' }}>
                                                    <Box sx={{ color: '#999999', fontSize: '14px', lineHeight: '1', marginBottom: '5px' }}>Rugs, Wall Decor</Box>
                                                    <Box sx={{ color: '#222222', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}>Carat Solitaire Diamond</Box>
                                                    <Box sx={{ color: '#555555', fontSize: '15px', fontWeight: '400' }}>$78.00</Box>
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ padding: '0px 15px', float: 'left', marginBottom: '20px', textAlign: 'center' }}>
                                {/* <Box sx={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', position: 'relative' }}>
                                    <img src={image14} style={{ width: '100%', height: '100%' }} />
                                </Box> */}
                                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={image14}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography>
                                                <Box sx={{ display: 'block' }}>
                                                    <Box sx={{ color: '#999999', fontSize: '14px', lineHeight: '1', marginBottom: '5px' }}>Brooches, Candles, Wall Decor</Box>
                                                    <Box sx={{ color: '#222222', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}>Pear-Shaped Black</Box>
                                                    <Box sx={{ color: '#555555', fontSize: '15px', fontWeight: '400' }}>$68.00 - $100.00</Box>
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ padding: '0px 15px', float: 'left', marginBottom: '20px', textAlign: 'center' }}>
                                {/* <Box sx={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', position: 'relative' }}>
                                    <img src={image12} style={{ width: '100%', height: '100%' }} />
                                </Box> */}
                                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={image12}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography>
                                                <Box sx={{ display: 'block' }}>
                                                    <Box sx={{ color: '#999999', fontSize: '14px', lineHeight: '1', marginBottom: '5px' }}>Candles, Wall Decor</Box>
                                                    <Box sx={{ color: '#222222', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}>The World Jewelry</Box>
                                                    <Box sx={{ color: '#555555', fontSize: '15px', fontWeight: '400' }}>$115.00</Box>
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ padding: '0px 15px', float: 'left', marginBottom: '20px', textAlign: 'center' }}>
                                {/* <Box sx={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', position: 'relative' }}>
                                    <img src={image15} style={{ width: '100%', height: '100%' }} />
                                </Box> */}
                                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={image15}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography>
                                                <Box sx={{ display: 'block' }}>
                                                    <Box sx={{ color: '#999999', fontSize: '14px', lineHeight: '1', marginBottom: '5px' }}>Candles, Wall Decor</Box>
                                                    <Box sx={{ color: '#222222', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}>Women’s Falla Earrings</Box>
                                                    <Box sx={{ color: '#555555', fontSize: '15px', fontWeight: '400' }}>$85.00</Box>
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ padding: '0px 15px', float: 'left', marginBottom: '20px', textAlign: 'center' }}>
                                {/* <Box sx={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', position: 'relative' }}>
                                    <img src={image13} style={{ width: '100%', height: '100%' }} />
                                </Box> */}
                                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={image13}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography>
                                                <Box sx={{ display: 'block' }}>
                                                    <Box sx={{ color: '#999999', fontSize: '14px', lineHeight: '1', marginBottom: '5px' }}>Clocks, Wall Decor</Box>
                                                    <Box sx={{ color: '#222222', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}>Lapis Hoop Earrings</Box>
                                                    <Box sx={{ color: '#555555', fontSize: '15px', fontWeight: '400' }}>$115.00</Box>
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ padding: '0px 15px', float: 'left', marginBottom: '20px', textAlign: 'center' }}>
                                {/* <Box sx={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', position: 'relative' }}>
                                    <img src={image9} style={{ width: '100%', height: '100%' }} />
                                </Box> */}
                                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={image9}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography>
                                                <Box sx={{ display: 'block' }}>
                                                    <Box sx={{ color: '#999999', fontSize: '14px', lineHeight: '1', marginBottom: '5px' }}>Rugs, Wall Decor</Box>
                                                    <Box sx={{ color: '#222222', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}>Sterling Silver Genuine</Box>
                                                    <Box sx={{ color: '#c09578', fontSize: '15px', fontWeight: '400' }}>
                                                        <span style={{ display: 'inline-block', color: '#bababa', fontWeight: 'normal', textDecoration: 'line-through', opacity: '1', marginRight: '5px' }}>$80.00</span>
                                                        $70.00</Box>
                                                </Box>
                                                <Box sx={{ position: 'absolute', top: '2%', left: '5%' }}>
                                                    <Box sx={{ bgcolor: '#c09578', color: '#ffffff', padding: '0px 15px', fontSize: '13px', fontWeight: '400', height: '22px', lineHeight: '22px', borderRadius: '11px' }}>Sale!</Box>
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ padding: '0px 15px', float: 'left', marginBottom: '20px', textAlign: 'center' }}>
                                {/* <Box sx={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', position: 'relative' }}>
                                    <img src={image10} style={{ width: '100%', height: '100%' }} />
                                </Box> */}
                                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={image10}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography>
                                                <Box sx={{ display: 'block' }}>
                                                    <Box sx={{ color: '#999999', fontSize: '14px', lineHeight: '1', marginBottom: '5px' }}>Brooches, Wall Decor</Box>
                                                    <Box sx={{ color: '#222222', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}>Women’s Bijou Ear</Box>
                                                    <Box sx={{ color: '#555555', fontSize: '15px', fontWeight: '400' }}>$45.00</Box>
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ padding: '0px 15px', float: 'left', marginBottom: '20px', textAlign: 'center' }}>
                                {/* <Box sx={{ width: '100%', height: '100%', objectFit: 'cover', overflow: 'hidden', position: 'relative' }}>
                                    <img src={image11} style={{ width: '100%', height: '100%' }} />
                                </Box> */}
                                <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={image11}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography>
                                                <Box sx={{ display: 'block' }}>
                                                    <Box sx={{ color: '#999999', fontSize: '14px', lineHeight: '1', marginBottom: '5px' }}>Candles, Wall Decor</Box>
                                                    <Box sx={{ color: '#222222', fontSize: '16px', fontWeight: '400', marginBottom: '10px' }}>ZMens Womens 10k</Box>
                                                    <Box sx={{ color: '#c09578', fontSize: '15px', fontWeight: '400' }}>
                                                        <span style={{ display: 'inline-block', color: '#bababa', fontWeight: 'normal', textDecoration: 'line-through', opacity: '1', marginRight: '5px' }}>$10.00</span>
                                                        $7.00</Box>
                                                </Box>
                                                <Box sx={{ position: 'absolute', top: '2%', left: '5%' }}>
                                                    <Box sx={{ bgcolor: '#c09578', color: '#ffffff', padding: '0px 15px', fontSize: '13px', fontWeight: '400', height: '22px', lineHeight: '22px', borderRadius: '11px' }}>Sale!</Box>
                                                </Box>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section style={{ padding: '60px 0px' }}>
                    <Container className='container-5'>
                        <Grid container>
                            <Grid size={12} sx={{ textAlign: 'center' }}>
                                <Box>
                                    <Box sx={{ marginBottom: '25px' }}>
                                        <h3 className='H3'>Client Testimonials</h3>
                                        <p className='P1'>What they say</p>
                                    </Box>
                                    <Box>
                                        <Slider {...settings1}>
                                            <Box sx={{ paddingTop: '15px' }}>
                                                <Box sx={{ maxWidth: '900px', margin: '0px auto' }}>
                                                    <img src={image17} alt="Client-1" className='image17' />
                                                    <p className='P2'>
                                                        All Perfect !! I have three sites with magento , this theme is the best !!
                                                        Excellent support , advice theme installation package , sorry for English,
                                                        are Italian but I had no problem !! Thank you !
                                                    </p>
                                                    <Box sx={{ fontSize: '17px', fontWeight: '700', position: 'relative' }}>
                                                        <span className='span1'>Kathy Young</span>
                                                        <span className='span2'>CEO of SunPark</span>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box sx={{ paddingTop: '15px' }}>
                                                <Box sx={{ maxWidth: '900px', margin: '0px auto' }}>
                                                    <img src={image18} alt="Client-2" className='image17' />
                                                    <p className='P2'>
                                                        All Perfect !! I have three sites with magento , this theme is the best !!
                                                        Excellent support , advice theme installation package , sorry for English,
                                                        are Italian but I had no problem !! Thank you !
                                                    </p>
                                                    <Box sx={{ fontSize: '17px', fontWeight: '700', position: 'relative' }}>
                                                        <span className='span1'>John Sullivan</span>
                                                        <span className='span2'>Customer</span>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box sx={{ paddingTop: '15px' }}>
                                                <Box sx={{ maxWidth: '900px', margin: '0px auto' }}>
                                                    <img src={image19} alt="Client-3" className='image17' />
                                                    <p className='P2'>
                                                        All Perfect !! I have three sites with magento , this theme is the best !!
                                                        Excellent support , advice theme installation package , sorry for English,
                                                        are Italian but I had no problem !! Thank you !
                                                    </p>
                                                    <Box sx={{ fontSize: '17px', fontWeight: '700', position: 'relative' }}>
                                                        <span className='span1'>Jenifer Brown</span>
                                                        <span className='span2'>Manager of AZ</span>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Slider>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section style={{ paddingTop: '50px', borderTop: '2px solid #eee', textAlign: 'center' }}>
                    <Container className='container-6'>
                        <Box sx={{ position: 'relative', fontSize: '28px', color: '#0a0a0a', textTransform: 'uppercase', fontWeight: '700', display: 'table', margin: '0px auto 55px', paddingBottom: '15px', letterSpacing: '0' }}>
                            <InstagramIcon sx={{ fontSize: '100px', color: '#c09578', fontWeight: 'normal', display: 'block', width: '250px', marginBottom: '5px' }} />
                            <span className='span3'>
                                Instagram Feed
                            </span>
                        </Box>
                        <Grid container>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box className='Box-2' sx={{ overflow: 'hidden' }}>
                                    <Box sx={{ position: 'relative', height: '288px' }}>
                                        <img src={image20} alt="" className='image20' />
                                        {/* <Box className='Box-3' sx={{ position: 'absolute', top: '11%', left: '85%', transform: 'translateY(-50%)', textAlign: 'center', zIndex: '5', fontSize: '25px', display: 'none' }}>
                                            <InstagramIcon sx={{ fontSize: '35px', color: '#c09578', marginBottom: '8px' }} />
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box className='Box-2' sx={{ overflow: 'hidden' }}>
                                    <Box sx={{ position: 'relative', height: '288px' }}>
                                        <img src={image21} alt="" className='image20' />
                                        {/* <Box className='Box-3' sx={{ position: 'absolute', top: '11%', left: '85%', transform: 'translateY(-50%)', textAlign: 'center', zIndex: '5', fontSize: '25px', display: 'none' }}>
                                            <InstagramIcon sx={{ fontSize: '35px', color: '#c09578', marginBottom: '8px' }} />
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box className='Box-2' sx={{ overflow: 'hidden' }}>
                                    <Box sx={{ position: 'relative', height: '288px' }}>
                                        <img src={image22} alt="" className='image20' />
                                        {/* <Box className='Box-3' sx={{ position: 'absolute', top: '11%', left: '85%', transform: 'translateY(-50%)', textAlign: 'center', zIndex: '5', fontSize: '25px', display: 'none' }}>
                                            <InstagramIcon sx={{ fontSize: '35px', color: '#c09578', marginBottom: '8px' }} />
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box className='Box-2' sx={{ overflow: 'hidden' }}>
                                    <Box sx={{ position: 'relative', height: '288px' }}>
                                        <img src={image23} alt="" className='image20' />
                                        {/* <Box className='Box-3' sx={{ position: 'absolute', top: '11%', left: '85%', transform: 'translateY(-50%)', textAlign: 'center', zIndex: '5', fontSize: '25px', display: 'none' }}>
                                            <InstagramIcon sx={{ fontSize: '35px', color: '#c09578', marginBottom: '8px' }} />
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </Layout>
        </>
    )
}

export default Main