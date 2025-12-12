/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Container, Grid } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'

const Foot = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#f3f3f3', display: 'block' }}>
                <Container>
                    <Box sx={{ paddingTop: '60px' }}>
                        <Box sx={{ margin: '0px -15px' }}>
                            <Grid container spacing={2}>
                                <Grid size={4} sx={{ padding: '0px 15px', textAlign: 'center' }}>
                                    <Box className='footer-box'>
                                        <h3 className='H2'>Quick Menu</h3>
                                        <ul className='footer-ul'>
                                            <li><a href="#">New arrivals</a></li>
                                            <li><a href="#">Life style</a></li>
                                            <li><a href="#">Bracelets</a></li>
                                            <li><a href="#">By Metal</a></li>
                                            <li><a href="#">Earrings</a></li>
                                        </ul>
                                    </Box>
                                </Grid>
                                <Grid size={4} sx={{ padding: '0px 15px', textAlign: 'center' }}>
                                    <Box sx={{ marginBottom: '10px' }} className='footer-box-2'>
                                        <Box>
                                            <h3 className='H3'>Newsletter</h3>
                                        </Box>
                                        <Box>
                                            <Box sx={{ marginBottom: '20px' }}>
                                                Sign up for our free video course and
                                                <br />
                                                urban garden inspiration
                                            </Box>
                                            <input type="text" className='Input' placeholder='Your email letter' />
                                            <button className='Button'>Subscribe</button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid size={4} sx={{ padding: '0px 15px', textAlign: 'center' }}>
                                    <Box className='footer-box'>
                                        <h3 className='H2'>Information</h3>
                                        <ul className='footer-ul'>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Track Order</a></li>
                                            <li><a href="#">Delivery</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Return</a></li>
                                        </ul>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ padding: '20px 0px' }}>
                            <Box sx={{ margin: '0px -15px' }}>
                                <Grid container>
                                    <Grid size={12}>
                                        <Box className='footer-end'>
                                            <ul className='footer-ul-2'>
                                                <li><a href="#">
                                                    <FacebookOutlinedIcon sx={{ fontSize: '30px', ":hover": { color: '#c09578', transition: 'all 0.5s' } }} />
                                                </a></li>
                                                <li><a href="#">
                                                    <TwitterIcon sx={{ fontSize: '30px', ":hover": { color: '#c09578', transition: 'all 0.5s' } }} />
                                                </a></li>
                                                <li><a href="#">
                                                    <InstagramIcon sx={{ fontSize: '30px', ":hover": { color: '#c09578', transition: 'all 0.5s' } }} />
                                                </a></li>
                                            </ul>
                                        </Box>
                                        <Box sx={{ color: '#888888', padding: '5px 0px', fontSize: '14px' }}>
                                            Copyright © 2020 
                                            <a href="#" style={{ color: '#c09578', padding:'0px 3px' }}>Ysera</a>
                                            . All rights reserved
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Foot