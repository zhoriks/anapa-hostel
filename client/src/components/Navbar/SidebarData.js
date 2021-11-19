import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const SidebarData = [
  {
    title: 'Bookings',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Guest',
    path: '/admin/guest',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Rooms',
    path: '/admin/rooms',
    icon: <AiIcons.AiOutlineKey />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/admin/settings',
    icon: <AiIcons.AiOutlineSetting />,
    cName: 'nav-text',
  },
  {
    title: 'Logout',
    path: '/admin/logout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text',
  },
];

export default SidebarData;
