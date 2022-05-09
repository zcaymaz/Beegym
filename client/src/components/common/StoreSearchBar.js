import { Box, Grid, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import StoreCategoryButton from './StoreCategoryButton';

const StoreSearchBar = () => {
    return (
        <>
            <Box className="store-search-bar">
                <Grid container >

                    <Grid item xs={12} md={5} lg={5} xl={5} className="store-search-bar-category-grid" >
                        <StoreCategoryButton />
                    </Grid>
                    <Grid item xs={10} md={4} lg={4} xl={4} className="store-search-bar-search-grid" >
                        
                        <Grid container direction="row">
                            <Grid xs={9} sm={10} lg={10} xl={10} >
                                <TextField
                                    label="Ara"
                                    type="search"
                                    variant="standard"
                                    fullWidth
                                    

                                />
                            </Grid>
                            <Grid xs={2} sm={2} lg={2} xl={2}>
                                <IconButton className="store-search-bar-icon" >
                                    <SearchIcon  fontSize='large'/>
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default StoreSearchBar;