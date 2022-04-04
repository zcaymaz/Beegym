import React from "react";
import {
    Container,
    Grid,
    Box,
    Typography
}
    from "@mui/material";

const home = () => {
    return (
        <>
            <Container maxWidth="100%">
                <Grid container direction={'row'}>
                    <Grid lg="12" backgroundColor="red" maxWidth='xl' sx={{

                    }}>
                        <Box>
                            <Typography className="deneme">
                                <Typography>
                                    adfadf
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default home