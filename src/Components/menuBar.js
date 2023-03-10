import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
const pages = ['Home', 'Upload', 'Book'];


function ResponsiveAppBar() {
    
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack direction="row" spacing={2}>
                        {pages.map((page) => (
                            <Button
                                variant="contained"
                            >
                                <Link
                                    to={`/${page}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                    {page}
                                </Link>
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;