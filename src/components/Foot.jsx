/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'

const Foot = () => {
    return (
        <>

            <Box sx={{ textAlign: 'center', bgcolor: '#f3f3f3', pt: 8, pb: 4 }}>
                <Container>
                    {/* Main Footer Content */}
                    <Grid container spacing={4}>

                        {/* Quick Menu - Full width on mobile, 1/3 on desktop */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box className='footer-box'>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Quick Menu</Typography>
                                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, '& li': { mb: 1 } }}>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>New arrivals</a></li>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>Life style</a></li>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>Bracelets</a></li>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>By Metal</a></li>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>Earrings</a></li>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Newsletter - Full width on mobile, 1/3 on desktop */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box className='footer-box-2' sx={{ mb: { xs: 4, md: 0 } }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Newsletter</Typography>
                                <Typography variant="body2" sx={{ mb: 3, color: '#666' }}>
                                    Sign up for our free video course and <br /> urban garden inspiration
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                                    <input
                                        type="text"
                                        placeholder='Your email address'
                                        style={{
                                            padding: '10px',
                                            width: '100%',
                                            maxWidth: '300px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px'
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#c09578',
                                            '&:hover': { bgcolor: '#a37e63' },
                                            width: '100%',
                                            maxWidth: '300px',
                                            textTransform: 'none'
                                        }}
                                    >
                                        Subscribe
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Information - Full width on mobile, 1/3 on desktop */}
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box className='footer-box'>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Information</Typography>
                                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, '& li': { mb: 1 } }}>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>FAQs</a></li>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>Track Order</a></li>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>Delivery</a></li>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>Contact Us</a></li>
                                    <li><a href="#" style={{ textDecoration: 'none', color: '#555' }}>Return</a></li>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ddd' }} />

                    {/* Bottom Footer */}
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
                            <a href="#"><FacebookOutlinedIcon sx={{ color: '#333', fontSize: '28px', "&:hover": { color: '#c09578' } }} /></a>
                            <a href="#"><TwitterIcon sx={{ color: '#333', fontSize: '28px', "&:hover": { color: '#c09578' } }} /></a>
                            <a href="#"><InstagramIcon sx={{ color: '#333', fontSize: '28px', "&:hover": { color: '#c09578' } }} /></a>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#888' }}>
                            Copyright © 2025 <a href="#" style={{ color: '#c09578', textDecoration: 'none', fontWeight: 'bold' }}>Ysera</a>. All rights reserved
                        </Typography>
                    </Box>
                </Container>
            </Box>

        </>
    )
}

export default Foot