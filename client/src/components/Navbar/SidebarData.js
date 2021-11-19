import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const SidebarData = [
  {
    title: 'Bookings',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Guest',
    path: '/guest',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Rooms',
    path: '/rooms',
    icon: <AiIcons.AiOutlineKey />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiOutlineSetting />,
    cName: 'nav-text',
  },
];

export default SidebarData;
