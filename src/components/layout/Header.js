import React from 'react';
import { Image } from "react-bootstrap";

const Header = () => {

    return (
        <header className='header'>
            <a href='/'>
                <Image src="/assets/Retro_Pluralsight_White.png" className='header-logo' />
            </a>

            <div className='header-text'>
                Aditya Jalan !...
            </div>

        </header>
    );
};

export default Header;

=IF(OR(D2 = 48237626, D2 = 48050788, D2 = 54343805), "Yes", "")
