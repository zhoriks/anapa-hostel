import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { GoCommentDiscussion } from 'react-icons/go';
import { MdOutlineCleaningServices } from 'react-icons/md';

const SidebarData = [
  {
    title: 'Бронирования',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Проживающие',
    path: '/admin/guest',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Комнаты',
    path: '/admin/rooms',
    icon: <AiIcons.AiOutlineKey />,
    cName: 'nav-text',
  },
  {
    title: 'Отзывы',
    path: '/admin/reviews',
    icon: <GoCommentDiscussion />,
    cName: 'nav-text',
  },
  {
    title: 'Уборка',
    path: '/admin/cleaning',
    icon: <MdOutlineCleaningServices />,
    cName: 'nav-text',
  },
  {
    title: 'Выйти',
    path: '/admin/logout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text',
  },
];

export default SidebarData;
