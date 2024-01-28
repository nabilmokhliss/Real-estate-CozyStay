import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Mon profil/ overview",
    path: "/profile/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/profile/overview/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/profile/overview/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: "Réservations/ Rep",
    path: "/profile/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Reports",
        path: "/profile/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 2",
        path: "/profile/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Reports 3",
        path: "/profile/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Général/ message",
    path: "/profile/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "modifier inf / m1",
        path: "/profile/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "modifier mdp / m2",
        path: "/profile/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  // {
  //   title: "Products",
  //   path: "/profile/products",
  //   icon: <FaIcons.FaCartPlus />,
  // },
  {
    title: "Deconnexion / Team",
    path: "/profile/team",
    icon: <IoIcons.IoMdPeople />,
  },

  {
    title: "Support",
    path: "/profile/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
