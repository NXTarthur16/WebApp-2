import React from 'react';
import './Footer.css';

interface Props{

    item1: string;
    item2: string;
    item3: string;
    item4: string;
}

function Footer(footer: Props){
    return(
      <>
        <div className='column'>
          <div className='footer-1'>
            <div className='titulo'>
        {footer.item1} 
                <div>{footer.item2}</div>
                <div>{footer.item3}</div>
                <div>{footer.item4}</div>
            </div>
          </div>
        </div>
        </>
    );
}

export default Footer;