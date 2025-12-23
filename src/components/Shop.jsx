/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from './Layout'
import { Box, Container, Grid } from '@mui/material'
// import Slider from "react-slick"
// import image1 from "./Image/banner-01_full_width.jpg"
// import image2 from "./Image/banner-02_full_width.jpg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image9 from './Image/1.jpg'
import image10 from './Image/10.jpg'
import image11 from './Image/19.jpg'
import image12 from './Image/3.jpg'
import image13 from './Image/5.jpg'
import image14 from './Image/6.jpg'
import image15 from './Image/8.jpg'
import image16 from './Image/9.jpg'

const Shop = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 3000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 1000
    // };

    return (
        <>
            <Layout>
                <section style={{ padding: '40px 0px' }}>
                    <Container className='container-7'>
                        <Grid container>
                            <Grid size={12}>
                                <Box sx={{ padding: '0px 15px' }}>
                                    <span className='span1'>Home</span>
                                    <span className='span2'>Products</span>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>

                {/* <section>
                    <Container className='container-8'>
                        <Grid container>
                            <Grid size={12}>
                                <Slider {...settings}>
                                    <Box sx={{ display: 'block', width: '100%', padding: '0px 15px' }}>
                                        <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden' }}>
                                            <img src={image1} alt="#" />
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
                                    <Box sx={{ display: 'block', width: '100%', padding: '0px 15px' }}>
                                        <Box sx={{ width: '100%', height: '100%', position: 'relative', objectFit: 'cover', overflow: 'hidden' }}>
                                            <img src={image2} alt="banner" />
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
                                </Slider>
                            </Grid>
                        </Grid>
                    </Container>
                </section> */}

                {/* <section>
                    <Container maxWidth="xl" className="container-8">
                        <Grid container>
                            <Grid item xs={12}>
                                <Slider {...settings}>
                                    {[image1, image2].map((img, index) => (
                                        <Box key={index} sx={{ px: { xs: 1, sm: 2 } }}>
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    width: "100%",
                                                    // height: { xs: "260px", sm: "380px", md: "500px" },
                                                    height: "100%",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <img
                                                    src={img}
                                                    alt="banner"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />

                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        top: { xs: "50%", sm: "35%" },
                                                        left: { xs: "50%", sm: "8%" },
                                                        transform: {
                                                            xs: "translate(-50%, -50%)",
                                                            sm: "none",
                                                        },
                                                        textAlign: { xs: "center", sm: "left" },
                                                        color: "#000",
                                                        maxWidth: "90%",
                                                    }}
                                                >
                                                    <h4 className="H4">hurry up</h4>

                                                    <h3
                                                        className="H3"
                                                        style={{
                                                            fontSize: "clamp(22px, 4vw, 42px)",
                                                            lineHeight: 1.2,
                                                        }}
                                                    >
                                                        Big Sale To <br /> 30% off
                                                    </h3>

                                                    <Box
                                                        sx={{
                                                            fontSize: "14px",
                                                            fontWeight: 600,
                                                            textTransform: "uppercase",
                                                            mb: 3,
                                                            color: "#666",
                                                        }}
                                                    >
                                                        use promo code :
                                                        <span
                                                            style={{
                                                                color: "#c09578",
                                                                fontWeight: 700,
                                                                marginLeft: "5px",
                                                            }}
                                                        >
                                                            Ysera
                                                        </span>
                                                    </Box>

                                                    <a href="#" className="A1">
                                                        shop now
                                                    </a>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Slider>
                            </Grid>
                        </Grid>
                    </Container>
                </section> */}


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

            </Layout >
        </>
    )
}

export default Shop