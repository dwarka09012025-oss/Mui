/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import logo from './Image/logo.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { GrShop } from "react-icons/gr";


const Head = () => {
    return (
        <>
            <Box className="top-header" sx={{ bgcolor: '#c09578', color: 'white', padding: '10px 0px' }}>
                <Container>
                    <Box sx={{ display: 'inline-block', lineHeight: '48px' }}>
                        <Box>Welcome to our online store!</Box>
                    </Box>
                    <Box sx={{ display: 'inline-block', float: 'right', lineHeight: '48px' }}>
                        <Box sx={{ display: 'inline-block', verticalAlign: 'middle', float: 'left', paddingTop: '0px', paddingRight: '15px', margin: '0px' }}>
                            <Box>English (USD)</Box>
                        </Box>
                        <Box sx={{ display: 'inline-block', margin: '0px', paddingLeft: '15px' }}>
                            <Box>Login & Register</Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container className='container'>
                <Box sx={{ padding: '50px 0px' }}>
                    <Grid container sx={{ marginRight: '-15px', marginLeft: '-15px' }} spacing={2}>
                        <Grid size={3} sx={{ paddingRight: '15px', paddingLeft: '15px' }}>
                            <Box sx={{ textAlign: 'left' }}>
                                <a href="#">
                                    <img src={logo}></img>
                                </a>
                            </Box>
                        </Grid>
                        <Grid size={7} sx={{ paddingRight: '15px', paddingLeft: '15px' }}>
                            {/* <Box>
                                <Box>
                                    <Box sx={{ position: 'relative', display: 'table', width: '100%', margin: '0 auto', padding: '0px', border: '1px solid #eee', height: '45px', maxWidth: '585px' }}>
                                        <Box sx={{ display: 'table-cell', verticalAlign: 'middles', width: '155px' }}>
                                            <Select sx={{ display: 'block', fontSize: '15px', color: '#0a0a0a', padding: '0px 20px' }}>

                                            </Select>
                                        </Box>
                                        <Box sx={{ display: 'table-cell', verticalAlign: 'middles', width: '100%' }}>
                                            <input type="text" st />
                                        </Box>
                                        <Button>1</Button>
                                    </Box>
                                </Box>
                            </Box> */}
                        </Grid>
                        <Grid size={2} sx={{ paddingRight: '15px', paddingLeft: '15px', float: 'right', textAlign: 'right' }}>
                            <Box sx={{ marginTop: '10px' }}>
                                <Box sx={{ paddingLeft: '15px', verticalAlign: 'top', display: 'inline-block', position: 'relative', textAlign: 'left', boxSizing: 'border-box' }}>
                                    <ShoppingBagOutlinedIcon sx={{ color: '#555555', fontSize: '65px', textTransform: 'uppercase', fontWeight: '600', padding: '0px 15px', height: '40px', display: 'inline-block', lineHeight: '40px', cursor: 'pointer' }} />
                                    <Box sx={{ position: 'absolute', top: '-5px', right: '5px', backgroundColor: '#c09578', color: 'white', fontSize: '12px', fontWeight: '600', width: '20px', height: '20px', borderRadius: '50%', textAlign: 'center', lineHeight: '20px' }}>0</Box>
                                </Box>
                                <Box sx={{ display: 'inline-block', paddingLeft: '15px', textAlign: 'left', boxSizing: 'border-box', paddingTop: '0px' }}>
                                    <PersonOutlineOutlinedIcon sx={{ color: '#555555', fontSize: '40px', cursor: 'pointer', ":hover": { color: '#c09578', transition: 'all 0.5s' } }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
            <Box sx={{ bgcolor: '#f3f3f3', marginBottom: '20px', }}>
                <Container className='container-1'>
                    <Box sx={{ display: 'table', width: '100%' }}>
                        <Box sx={{ bgcolor: '#c09578', width: '270px', position: 'relative', display: 'table-cell', verticalAlign: 'middle' }}>
                            <Box sx={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', color: '#ffffff', padding: '15px 30px', height: '60px', lineHeight: '28px', cursor: 'pointer', display: 'block', letterSpacing: '0.7px' }}>
                                <Box sx={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '15px', paddingTop: '2px' }}>
                                    <Box sx={{ width: '20px', display: 'block', bgcolor: '#fff', height: '2px', marginBottom: '5px' }}></Box>
                                    <Box sx={{ width: '15px', display: 'block', bgcolor: '#fff', height: '2px', marginBottom: '5px' }}></Box>
                                    <Box sx={{ width: '20px', display: 'block', bgcolor: '#fff', height: '2px', marginBottom: '5px' }}></Box>
                                </Box>
                                <Box sx={{ display: 'inline-block', verticalAlign: 'top' }}>
                                    All Categories
                                </Box>
                            </Box>
                            <Box sx={{ display: 'none' }}>
                                2
                            </Box>
                        </Box>
                        <Box sx={{ paddingLeft: '20px', display: 'table-cell', verticalAlign: 'middle' }}>
                            <Box>
                                <ul className='UL'>
                                    <li>
                                        <a href="./Main" className='A'>Home</a>
                                    </li>
                                    <li>
                                        <a href="./Shop" className='A'>Shop</a>
                                    </li>
                                    <li>
                                        <a href="#" className='A'>Pages <KeyboardArrowDownIcon sx={{ fontSize: '16px', verticalAlign: 'middle' }} /></a>
                                    </li>
                                    <li>
                                        <a href="#" className='A'>Blogs <KeyboardArrowDownIcon sx={{ fontSize: '16px', verticalAlign: 'middle' }} /></a>
                                    </li>
                                    <li>
                                        <a href="#" className='A'>About</a>
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Head