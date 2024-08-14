import React from 'react'

const NavLinks = () => {
    
    const links = [{name: 'SEO'} ,  {name: 'Leads'}]

  return (
    <>
        {links.map((link, index) => (
            <div key={index}>
                <div>
                    <h1>
                        {link.name}
                    </h1>
                </div>
            </div>
        ))}
    </>
  );
}

export default NavLinks


