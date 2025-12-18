/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Box, Grid } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import image1 from './Image/56.jpeg'
import image2 from './Image/137.jpeg'
import image3 from './Image/262.jpeg'
import image4 from './Image/345.jpeg'
import image5 from './Image/532.jpeg'
import image6 from './Image/781.jpeg'
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';

const pages = ['Docs', 'About'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const RickApi = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <>
            <Box>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    // letterSpacing: '.3rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                The Rick and Morty API
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ display: { xs: 'block', md: 'none' } }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    // letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                The Rick and Morty API
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Box>
                    <Container sx={{ padding: '0px 15px' }}>
                        <Typography sx={{ fontSize: { xs: '3rem', sm: '3.5rem', md: '4.2rem', lg: '5.4rem' }, fontWeight: '900', display: 'flex', justifyContent: 'center', py: '100px', textAlign: 'center' }}>
                            The Rick and Morty API
                        </Typography>
                    </Container>
                </Box>
                <Box sx={{ bgcolor: 'black', color: 'white' }}>
                    <Container sx={{ padding: '80px 15px' }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ width: '200px', height: '220px' }}>
                                        <img src={image1} style={{ height: '100%', objectFit: 'cover', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                                    </Box>
                                    <Box sx={{ width: '368px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', bgcolor: 'rgba(60, 60, 60, 1)', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '800', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Bootleg Portal Chemist Rick</Typography>
                                            <Typography><CircleIcon sx={{ color: 'red', fontSize: '10px', marginRight: '5px' }} />Dead - Human</Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ color: 'gray' }}>Last known location:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Citadel of Ricks</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: 'gray' }}>First seen in:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>The Ricklantis Mixup</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ width: '200px', height: '220px' }}>
                                        <img src={image2} style={{ height: '100%', objectFit: 'cover', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                                    </Box>
                                    <Box sx={{ width: '368px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', bgcolor: 'rgba(60, 60, 60, 1)', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '800', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Gene</Typography>
                                            <Typography><CircleIcon sx={{ color: 'green', fontSize: '10px', marginRight: '5px' }} />Alive - Human</Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ color: 'gray' }}>Last known location:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Earth (Replacement Dimension)</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: 'gray' }}>First seen in:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>The Whirly Dirly Conspiracy</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ width: '200px', height: '220px' }}>
                                        <img src={image3} style={{ height: '100%', objectFit: 'cover', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                                    </Box>
                                    <Box sx={{ width: '368px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', bgcolor: 'rgba(60, 60, 60, 1)', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '800', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Photography Raptor</Typography>
                                            <Typography><CircleIcon sx={{ color: 'red', fontSize: '10px', marginRight: '5px' }} />Dead - Alien</Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ color: 'gray' }}>Last known location:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Earth (Replacement Dimension)</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: 'gray' }}>First seen in:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Total Rickall</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ width: '200px', height: '220px' }}>
                                        <img src={image4} style={{ height: '100%', objectFit: 'cover', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                                    </Box>
                                    <Box sx={{ width: '368px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', bgcolor: 'rgba(60, 60, 60, 1)', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '800', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Teacher Rick</Typography>
                                            <Typography><CircleIcon sx={{ color: 'green', fontSize: '10px', marginRight: '5px' }} />Alive - Human</Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ color: 'gray' }}>Last known location:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Citadel of Ricks</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: 'gray' }}>First seen in:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>The Ricklantis Mixup</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ width: '200px', height: '220px' }}>
                                        <img src={image5} style={{ height: '100%', objectFit: 'cover', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                                    </Box>
                                    <Box sx={{ width: '368px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', bgcolor: 'rgba(60, 60, 60, 1)', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '800', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Tony’s Wife</Typography>
                                            <Typography><CircleIcon sx={{ color: 'red', fontSize: '10px', marginRight: '5px' }} />Dead - Alien</Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ color: 'gray' }}>Last known location:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Globaflyn</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: 'gray' }}>First seen in:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>The Old Man and the Seat</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ width: '200px', height: '220px' }}>
                                        <img src={image6} style={{ height: '100%', objectFit: 'cover', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                                    </Box>
                                    <Box sx={{ width: '368px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', bgcolor: 'rgba(60, 60, 60, 1)', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: '800', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Rick's Garage</Typography>
                                            <Typography><CircleIcon sx={{ color: 'green', fontSize: '10px', marginRight: '5px' }} />Alive - Robot</Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: '20px' }}>
                                            <Typography sx={{ color: 'gray' }}>Last known location:</Typography>
                                            <Typography sx={{ fontSize: '18px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Earth (Replacement Dimension)</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: 'gray' }}>First seen in:</Typography>
                                            <Typography sx={{ fontSize: '17px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>Rickternal Friendshine of the Spotless Mort</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box sx={{ bgcolor: 'black', color: 'rgb(158, 158, 158)' }}>
                    <Container sx={{ padding: '80px 15px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ display: { xs: 'block', sm: 'flex' }, flexWrap: 'wrap', textAlign: 'center' }}>
                                <Box sx={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: { xs: '10px', sm: '0px' }, ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>
                                    characters : 826
                                </Box>
                                <Box sx={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: { xs: '0px', sm: '25px' }, marginBottom: { xs: '10px', sm: '0px' }, ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>
                                    locations : 126
                                </Box>
                                <Box sx={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: { xs: '0px', sm: '25px' }, ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>
                                    episodes : 51
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '10px' }}>
                                <Box sx={{ textTransform: 'uppercase', fontWeight: 'bold', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }}>
                                    server status <CircleIcon sx={{ color: 'greenyellow', fontSize: '13px', marginLeft: '5px' }} />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap' }}>
                                <Box>
                                    <GitHubIcon sx={{ ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }} />
                                </Box>
                                <Box>
                                    <TwitterIcon sx={{ marginLeft: '20px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }} />
                                </Box>
                                <Box>
                                    <FavoriteIcon sx={{ marginLeft: '20px', ':hover': { color: 'orange', transition: '0.5s', cursor: 'pointer' } }} />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '25px', display: 'flex', alignItems: 'center' }}>
                                ❮❯ by
                                <Box sx={{ margin: '0px 7px', borderBottom: '1px solid orange', fontWeight: '600', ':hover': { color: 'orange', border: 'none', cursor: 'pointer' } }} > Axel Fuhrmann</Box>
                                2025
                            </Box>
                        </Box>
                    </Container>
                </Box >
            </Box >
        </>
    )
}

export default RickApi