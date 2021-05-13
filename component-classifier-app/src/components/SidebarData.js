import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Introduction',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Data Preparation',
    path: '/preparation',
    icon: <AiIcons.AiFillDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Python Code',
    path: '/pycode',
    icon: <FaIcons.FaPython/>,
    cName: 'nav-text'
  }
];
