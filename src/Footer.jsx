import React from 'react';

const Footer=() => {
    const year=new Date().getFullYear();
  return (
    <>

     <footer>
         <p>CopyrightÂ©{year}</p>
     </footer>

    </>
  );
}

export default Footer;