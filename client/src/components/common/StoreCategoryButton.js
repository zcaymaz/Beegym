import React from 'react';
import { Grid, Button} from '@mui/material';

const StoreCategoryButton = () => {
    return (
        <>
                <Grid container>
                    <Grid item xs={6} sm={4} md={5} lg={4} xl={4} >
                        <Button variant="text" className="store-category-button" >SUPPLEMENTLER</Button>
                    </Grid>
                    <Grid item xs={7} sm={4} md={3} lg={3} xl={3} >
                        <Button variant="text" className="store-category-button" >TİŞÖRTLER</Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                        <Button variant="text" className="store-category-button" >ELDİVEN</Button>
                    </Grid>
    
                </Grid>
            
        </>
    )
}

export default StoreCategoryButton;