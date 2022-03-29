import React from 'react'
import { Navbar, } from 'reactstrap';


const Copyright = () => {
    return (
        <div className='Copyright'>
            ENES ULUDOGAN FİTNESS {'Copyright © '}
            {new Date().getFullYear()} All right are Reserved
            {'.'}
        </div>
    )
}
export default Copyright
