/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Layout from './Layout'
import { Box, Container, Grid, Button } from '@mui/material'
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
        autoplay: false,
        autoplaySpeed: 1000
    };
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const slides = [
        { img: image1, sub: "Sale up to 40% off!", title: "Spring Summer Collection", price: "$270.00" },
        { img: image2, sub: "Take a jewelry", title: "Up to 25% off order now", price: "$170.00" },
        { img: image3, sub: "Ysera Best collection", title: "A range of jewelry", price: "$250.00" },
    ];

    return (
        <>
            <Layout>
                <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
                    <Container>
                        <Grid container>
                            <Grid size={12}>
                                <Slider {...settings}>
                                    {slides.map((slide, index) => (
                                        <Box key={index} sx={{
                                            position: 'relative',
                                            height: { xs: '400px', sm: '500px', md: '620px' }, // Dynamic height
                                            overflow: 'hidden',
                                            bgcolor: '#f9f9f9',
                                            padding: '0px 20px'
                                        }}>
                                            <img
                                                src={slide.img}
                                                alt="slider"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />

                                            <Box sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: { xs: '10%', md: '15%' },
                                                transform: 'translateY(-50%)',
                                                zIndex: 2,
                                                textAlign: 'left',
                                                maxWidth: { xs: '65%', md: '50%' }
                                            }}>
                                                <Typography
                                                    variant="h6"
                                                    className='H5'
                                                    sx={{
                                                        color: '#c09578',
                                                        fontSize: { xs: '0.7rem', md: '1.25rem' },
                                                        mb: 1
                                                    }}
                                                >
                                                    {slide.sub}
                                                </Typography>

                                                <Typography
                                                    variant="h2"
                                                    className='H3'
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        lineHeight: 1.2,
                                                        fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem', lg: '2.4rem' },
                                                        mb: 2
                                                    }}
                                                >
                                                    {slide.title}
                                                </Typography>

                                                <Box sx={{
                                                    fontSize: { xs: '15px', md: '18px' },
                                                    fontWeight: '500',
                                                    mb: 4,
                                                    color: '#5b5b5b'
                                                }}>
                                                    New Price : <span style={{ color: '#c09578', fontWeight: 'bold' }}>{slide.price}</span>
                                                </Box>

                                                <Button
                                                    href="#"
                                                    variant="contained"
                                                    sx={{
                                                        bgcolor: '#c09578',
                                                        color: 'white',
                                                        px: 4, py: 1.5,
                                                        borderRadius: 0,
                                                        textTransform: 'uppercase',
                                                        '&:hover': { bgcolor: '#a37e63' }
                                                    }}
                                                >
                                                    shop now
                                                </Button>
                                            </Box>
                                        </Box>
                                    ))}
                                </Slider>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <section style={{ margin: '10px 0px 40px' }}>
                    <Container className='container-2' sx={{ mb: 4 }}>
                        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            {[
                                { img: image4, sub: 'hurry up', title: <>Big Sale To <br /> 30% off</>, code: 'Ysera' },
                                { img: image5, sub: 'Sale up to 50% off', title: <>get daily <br /> update</>, code: 'Ysera' }
                            ].map((item, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Box sx={{
                                        width: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        bgcolor: '#eee'
                                    }}>
                                        <img src={item.img} alt="banner" style={{ width: '100%', display: 'block' }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            left: '8%'
                                        }}>
                                            <h4 className='H4'>{item.sub}</h4>
                                            <h3 className='H3'>{item.title}</h3>
                                            <Box sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', mb: 2, color: '#666666' }}>
                                                use promo code :
                                                <span style={{ color: '#c09578', fontWeight: '700' }}> {item.code}</span>
                                            </Box>
                                            <a href="#" className='A1'>shop now</a>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>

                    <Container className='container-3'>
                        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <img src={image6} alt="#" style={{ width: '100%', display: 'block' }} />
                                    <Box sx={{ position: 'absolute', top: '20%', left: '10%' }}>
                                        <h3 className='H3'>best seller</h3>
                                        <Box sx={{ mb: 2, maxWidth: '190px', fontSize: '16px', lineHeight: '1.4', color: '#666666' }}>
                                            Check out our your <br /> jewelry collection now!
                                        </Box>
                                        <a href="#" className='A1'>shop now</a>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <img src={image8} alt="#" style={{ width: '100%', display: 'block' }} />
                                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                                        <h3 className='H31'>End this weekend</h3>
                                        <Box sx={{ mb: 2, fontSize: { xs: '24px', md: '36px' }, lineHeight: '1.2', fontWeight: '700' }}>
                                            Big Sale <br /> 75% Off
                                        </Box>
                                        <Box sx={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', color: '#666666' }}>
                                            use promo code : <br />
                                            <span style={{ fontSize: '18px', color: '#c09578', fontWeight: '700' }}>Ysera</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <img src={image7} alt="#" style={{ width: '100%', display: 'block' }} />
                                    <Box sx={{ position: 'absolute', top: '20%', left: '10%' }}>
                                        <h3 className='H3'>look book</h3>
                                        <Box sx={{ mb: 2, maxWidth: '190px', fontSize: '16px', lineHeight: '1.4', color: '#666666' }}>
                                            New Jewelry Collections <br /> Summer Lookbook
                                        </Box>
                                        <a href="#" className='A1'>view all</a>
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

                        <Grid container spacing={2}>
                            {[image20, image21, image22, image23].map((img, index) => (
                                <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Box
                                        className='Box-2'
                                        sx={{
                                            overflow: 'hidden',
                                            borderRadius: '8px',
                                            lineHeight: 0
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                height: {
                                                    xs: 'auto',
                                                    sm: '250px',
                                                    md: '288px'
                                                },
                                                width: '100%'
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={`gallery-thumb-${index}`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                    </Container>
                </section>

            </Layout>
        </>
    )
}

export default Main