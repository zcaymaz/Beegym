import React from 'react'
import { Card, CardMedia } from '@mui/material'

const MutationCard = (props) => {
    return (
        <>
            <Card sx={{ height: '25rem',maxWidth:'400px',borderRadius:'20px'}}>
                <CardMedia>
                    <img
                        className='mutationCard'
                        alt='...'
                        src={props.image}
                    />
                </CardMedia>
            </Card>
        </>
    )
}

export default MutationCard