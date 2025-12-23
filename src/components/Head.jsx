/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Box, Container, Grid, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'
import logo from './Image/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { GrShop } from "react-icons/gr";


const Head = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { title: 'Home', link: './Main' },
        { title: 'Products', link: './Shop' },
        { title: 'Pages', link: './Main' },
        { title: 'Blogs', link: './Main' },
        { title: 'About', link: './Main' },
    ];

    return (
        <>

            <Box
                className="top-header"
                sx={{
                    bgcolor: '#c09578',
                    color: 'white',
                    py: 1
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: { xs: 'center', sm: 'left' },
                            minHeight: '48px'
                        }}
                    >
                        <Typography variant="body2">
                            Welcome to our online store!
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: { xs: 1, sm: 0 }
                            }}
                        >
                            <Typography variant="body2">
                                English (USD)
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container className='container-1'>
                <Box sx={{ py: { xs: 2, md: 6 } }}>
                    <Grid container alignItems="center" spacing={2}>

                        <Grid size={{ xs: 6, md: 3 }}>
                            <Box sx={{ textAlign: 'left' }}>
                                <a href="#">
                                    <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />
                                </a>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 0, md: 7 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Box className='Hover' component="ul" sx={{
                                display: 'flex',
                                listStyle: 'none',
                                m: 0, p: 0,
                                gap: 3,
                                '& a': { textDecoration: 'none', color: '#333', fontWeight: 500, fontSize: '18px' },
                            }}>
                                {navLinks.map((item) => (
                                    <li key={item.title}>
                                        <a href={item.link}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 6, md: 2 }} sx={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>

                                <Box sx={{ position: 'relative', cursor: 'pointer' }}>
                                    <ShoppingBagOutlinedIcon sx={{ color: '#555', fontSize: { xs: '28px', md: '32px' } }} />
                                    <Box sx={{
                                        position: 'absolute', top: -5, right: -5,
                                        bgcolor: '#c09578', color: 'white',
                                        fontSize: '10px', width: 18, height: 18,
                                        borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'
                                    }}>0</Box>
                                </Box>

                                <PersonOutlineOutlinedIcon sx={{ display: { xs: 'none', sm: 'block' }, color: '#555', fontSize: '28px', cursor: 'pointer', "&:hover": { color: '#c09578' } }} />

                                <IconButton
                                    sx={{ display: { xs: 'block', md: 'none' }, p: 0 }}
                                    onClick={() => setMobileOpen(true)}
                                >
                                    <MenuIcon sx={{ fontSize: '30px' }} />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
                    <Box sx={{ width: 250, p: 2 }}>
                        <List>
                            {navLinks.map((item) => (
                                <ListItem button key={item.title} component="a" href={item.link}>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Container>

        </>
    )
}

export default Head