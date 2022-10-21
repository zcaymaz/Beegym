import React from 'react'
import { Link, CardMedia } from '@mui/material'


const Whatsapp = () => {
    return (
        <>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=905339170698">
                <CardMedia
                    component="img"
                    image={require('../../images/whatsapp.png')}
                    className='WhatsappIcon'
                />
            </Link>
        </>
    )
}

export default Whatsapp
