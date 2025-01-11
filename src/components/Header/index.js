import React from 'react';
import { FaVideo, FaRecycle, FaLeaf, FaUtensils, FaSun, FaHandHoldingHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Menu, MenuItem, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import logotipo from '../../images/logo.png';

const SearchBar = styled(InputBase)(({ theme }) => ({
    width: '100%',
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
    '&:focus': {
        borderColor: '#0066cc',
    },
}));

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [povertyAnchorEl, setPovertyAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handlePovertyMenuOpen = (event) => {
        setPovertyAnchorEl(event.currentTarget);
    };

    const handlePovertyMenuClose = () => {
        setPovertyAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static" color="default" elevation={1} sx={{ marginBottom: '30px', backgroundColor: '#f5f5f5', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', padding: '15px 20px' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant="h6" color="#333" fontWeight="bold" sx={{ width: '20%', textAlign: 'center' }}>
                        <Link style={{ color: '#22b400', fontSize: '20px', textDecoration: 'none' }} to='/'>
                            <img src={logotipo} width={140} style={{margin: '0px -20px -60px -40px'}}/>
                        </Link>
                    </Typography>
                    <SearchBar placeholder="Digite sua dúvida..." sx={{ width: '80%' }} />
                </Toolbar>

                <Box display="flex" justifyContent="center" marginTop={1} gap={5}>
                    <Box textAlign="center">
                        <IconButton component={Link} to="/post?codPost=videos">
                            <FaVideo style={{ color: '#22b400', fontSize: '20px' }} />
                        </IconButton>
                        <Typography variant="body2" fontWeight="600" color="#22b400">Vídeos</Typography>
                    </Box>
                    
                    <Box textAlign="center" position="relative">
                        <IconButton onClick={handleMenuOpen}>
                            <FaLeaf style={{ color: '#22b400', fontSize: '20px' }} />
                        </IconButton>
                        <Typography variant="body2" fontWeight="600" color="#22b400">Compostagem</Typography>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{ onMouseLeave: handleMenuClose }}
                        >
                            <MenuItem onClick={handleMenuClose} component={Link} to="/post?codPost=compostagem1">
                                O Que é Compostagem?
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/post?codPost=compostagem2">
                                Como Fazer Compostagem Doméstica
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/post?codPost=compostagem3">
                                O Que Não Colocar em uma Composteira
                            </MenuItem>
                        </Menu>
                    </Box>
                    
                    <Box textAlign="center">
                        <IconButton component={Link} to="/post?codPost=reciclagem">
                            <FaRecycle style={{ color: '#22b400', fontSize: '20px' }} />
                        </IconButton>
                        <Typography variant="body2" fontWeight="600" color="#22b400">Reciclagem</Typography>
                    </Box>

                    <Box textAlign="center">
                        <IconButton component={Link} to="/post?codPost=energia">
                            <FaSun style={{ color: '#22b400', fontSize: '20px' }} />
                        </IconButton>
                        <Typography variant="body2" fontWeight="600" color="#22b400">Energia</Typography>
                    </Box>

                    <Box textAlign="center" position="relative">
                        <IconButton onClick={handlePovertyMenuOpen}>
                            <FaHandHoldingHeart style={{ color: '#22b400', fontSize: '20px' }} />
                        </IconButton>
                        <Typography variant="body2" fontWeight="600" color="#22b400">Erradicação da Pobreza</Typography>
                        <Menu
                            anchorEl={povertyAnchorEl}
                            open={Boolean(povertyAnchorEl)}
                            onClose={handlePovertyMenuClose}
                            MenuListProps={{ onMouseLeave: handlePovertyMenuClose }}
                        >
                            <MenuItem onClick={handlePovertyMenuClose} component={Link} to="/post?codPost=pobreza1">
                                O papel da educação de qualidade na redução da pobreza
                            </MenuItem>
                            <MenuItem onClick={handlePovertyMenuClose} component={Link} to="/post?codPost=pobreza2">
                                Diferenças e semelhanças entre a pobreza nas áreas urbanas e rurais
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </AppBar>
        </>
    );
};

const Header = () => {
    return (
        <header>
            <NavBar />
        </header>
    );
};

export default Header;
