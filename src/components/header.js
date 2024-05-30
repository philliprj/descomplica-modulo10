import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../theme/ThemeContext';

function Header() {
  const theme = useTheme();
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*  
            <MenuIcon />
            */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>
          <Button 
            color="inherit"
            variant='outlined'
            onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
