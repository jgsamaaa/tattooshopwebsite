import React from 'react';
// import nav data
import { navData } from '../data';

const Nav = () => {
  // destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="transition duration-300 link hover:border-b-2 hover:border-dark"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
