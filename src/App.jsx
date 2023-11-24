import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';

const App = () => {
    return ( 
        <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCameraIcon />
                <Typography variant='h6'>
                    Photo Album
                </Typography>
            </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color= 'textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color= 'textSecondary' paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non nulla earum mollitia, eos illum laborum eaque assumenda suscipit quae repellendus ea at minima velit vel magni maiores deserunt veritatis.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent={'center'}>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
        
     );
}
 
export default App;