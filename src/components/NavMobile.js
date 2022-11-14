import React, { useState } from 'react';
// import nav data
import { navData } from '../data';
// import components
import Socials from './Socials';

const NavMobile = () => {
  // destructure nav data
  const { items } = navData;

  const [nav, setNav] = useState(false);

  return (
    <nav className="flex flex-col w-full h-full overflow-hidden justify-evenly">
      <ul className="flex flex-col items-center justify-center py-6 mb-8 gap-y-6">
        {items.map((item, index) => {
          return (
            <li key={index} onClick={() => setNav(false)}>
              <a className="text-2xl uppercase font-primary" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
