"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LinkProps } from "next/link";
import { AnimatePresence, delay, motion, stagger } from "framer-motion";

const menuItems = [
  { name: "Product", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

const MobileMenu = ({
  title,
  href,
}: {
  title: string;
  href: LinkProps["href"];
}) => {
  const mobileMenuVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <motion.div variants={mobileMenuVars} className="font-krona uppercase ">
      <Link href={href}>
        <span className="text-3xl text-slate-950">{title}</span>
      </Link>
    </motion.div>
  );
};

export default function Header() {
  const [header, setHeader] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY > 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 0, 0.35, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header
      className={`z-20 inset-x-0 w-[100%] fixed mx-auto flex flex-col overflow-hidden py-4 lg:flex-row lg:items-center ${header ? "bg-white dark:bg-slate-950" : "bg-[transparent]"}`}
    >
      <div className="container flex justify-between items-center w-full relative">
        <div>
          <a href="#" className="text-2xl font-black">
            <div className="flex lg:flex-1">
              <svg
                width="41"
                height="32"
                viewBox="0 0 41 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7584 30.2844C12.4684 24.991 7.22093 19.7501 1.98547 14.4973C-0.675877 11.8271 -0.6564 8.72484 2.01165 6.06521C3.4707 4.61076 4.92604 3.15252 6.39389 1.70698C8.63899 -0.504004 11.7457 -0.571673 13.9703 1.53042C16.5106 3.93086 16.7095 6.94588 14.4894 9.44142C14.1752 9.79461 13.8485 10.1367 13.6126 10.3919C15.9409 12.7078 18.2366 14.9913 20.6253 17.3672C22.0319 15.95 23.5889 14.3813 25.1459 12.8126C25.637 12.3178 26.0946 11.7827 26.6279 11.3384C27.2864 10.7898 27.2184 10.3766 26.6255 9.80593C24.9295 8.17359 24.2261 6.18863 25.1214 3.93835C26.7078 -0.0484744 31.3887 -1.40645 34.4314 1.75461C35.9037 3.28422 37.4421 4.75003 38.94 6.25518C41.3665 8.69323 41.378 11.9129 38.9423 14.3573C33.4837 19.8356 28.0112 25.3001 22.5417 30.7677C20.9058 32.4031 19.8964 32.407 18.2777 30.8016C18.1201 30.6454 17.9632 30.4886 17.7584 30.2844ZM26.9428 16.0546C25.4202 17.5791 23.9043 19.1103 22.3731 20.6261C20.9142 22.0703 19.8431 22.0601 18.3834 20.6053C16.1167 18.3462 13.8574 16.0797 11.585 13.8263C11.3324 13.5758 11.1252 13.1643 10.6503 13.3248C8.98467 13.8878 8.4848 15.9761 9.72335 17.2168C13.0141 20.5131 16.3089 23.8053 19.608 27.0934C19.8477 27.3323 20.0453 27.6422 20.4748 27.7344C20.6628 27.5629 20.8773 27.3818 21.0753 27.1841C24.1022 24.1619 27.1267 21.1373 30.1524 18.1138C32.2143 16.0533 34.2817 13.9983 36.3374 11.9316C37.2607 11.0033 37.4555 10.2274 36.9239 9.4042C36.514 8.76954 35.9724 8.23768 35.1573 7.70573C32.451 10.4567 29.7444 13.208 26.9428 16.0546ZM11.2831 3.92634C10.5717 3.43615 9.81861 3.38056 9.19405 3.98546C7.44401 5.6804 5.71777 7.40171 4.033 9.16131C3.38612 9.83693 3.4126 10.6835 3.98404 11.4181C4.46303 12.0339 5.0149 12.5998 5.65428 13.0298C6.05474 12.9018 6.25682 12.6029 6.49921 12.3616C8.1591 10.7093 9.81331 9.05121 11.4679 7.39354C12.8257 6.03324 12.8102 5.37998 11.2831 3.92634ZM31.4707 6.49447C32.2798 5.56225 32.3535 4.73085 31.6856 4.07172C31.0048 3.40003 30.0675 3.39789 29.3036 4.0747C29.1144 4.24232 28.9285 4.41909 28.7699 4.61496C28.0226 5.53783 28.2117 6.3475 29.2937 7.4074C30.208 8.30309 30.5136 7.2809 31.0335 6.92283C31.1618 6.8345 31.2598 6.70224 31.4707 6.49447Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-krona uppercase pl-2">Verthem</span>
            </div>
          </a>
        </div>
        <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
          <Menu />
        </div>
        <nav
          aria-label="Header Navigation"
          className="hidden lg:flex justify-between items-center overflow-hidden ml-34 max-h-full flex-row"
        >
          <ul className="flex flex-row items-center justify-center space-y-0">
            {menuItems.map((item, index) => (
              <li key={index} className="mx-6">
                <a className="font-medium dark:text-white/90" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-auth hidden lg:flex items-center my-0 space-x-8 space-y-0">
          <a
            href="/login"
            className="whitespace-nowrap font-medium dark:text-white/90 "
          >
            Log in
          </a>
          <a
            href="/signup"
            className="verthem-btn flex items-center whitespace-nowrap rounded-[8px] bg-[#00CAF8] px-5 py-3 font-medium text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 "
          >
            Sign up for free
          </a>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed origin-top left-0 top-0 w-full h-screen py-4 bg-verthem-900 z-20 lg:hidden"
            >
              <div className="flex h-full flex-col">
                <div className="container flex justify-between">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="flex items-center whitespace-nowrap text-2xl font-black"
                    >
                      <div className="flex lg:flex-1">
                        <svg
                          width="41"
                          height="32"
                          viewBox="0 0 41 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.7584 30.2844C12.4684 24.991 7.22093 19.7501 1.98547 14.4973C-0.675877 11.8271 -0.6564 8.72484 2.01165 6.06521C3.4707 4.61076 4.92604 3.15252 6.39389 1.70698C8.63899 -0.504004 11.7457 -0.571673 13.9703 1.53042C16.5106 3.93086 16.7095 6.94588 14.4894 9.44142C14.1752 9.79461 13.8485 10.1367 13.6126 10.3919C15.9409 12.7078 18.2366 14.9913 20.6253 17.3672C22.0319 15.95 23.5889 14.3813 25.1459 12.8126C25.637 12.3178 26.0946 11.7827 26.6279 11.3384C27.2864 10.7898 27.2184 10.3766 26.6255 9.80593C24.9295 8.17359 24.2261 6.18863 25.1214 3.93835C26.7078 -0.0484744 31.3887 -1.40645 34.4314 1.75461C35.9037 3.28422 37.4421 4.75003 38.94 6.25518C41.3665 8.69323 41.378 11.9129 38.9423 14.3573C33.4837 19.8356 28.0112 25.3001 22.5417 30.7677C20.9058 32.4031 19.8964 32.407 18.2777 30.8016C18.1201 30.6454 17.9632 30.4886 17.7584 30.2844ZM26.9428 16.0546C25.4202 17.5791 23.9043 19.1103 22.3731 20.6261C20.9142 22.0703 19.8431 22.0601 18.3834 20.6053C16.1167 18.3462 13.8574 16.0797 11.585 13.8263C11.3324 13.5758 11.1252 13.1643 10.6503 13.3248C8.98467 13.8878 8.4848 15.9761 9.72335 17.2168C13.0141 20.5131 16.3089 23.8053 19.608 27.0934C19.8477 27.3323 20.0453 27.6422 20.4748 27.7344C20.6628 27.5629 20.8773 27.3818 21.0753 27.1841C24.1022 24.1619 27.1267 21.1373 30.1524 18.1138C32.2143 16.0533 34.2817 13.9983 36.3374 11.9316C37.2607 11.0033 37.4555 10.2274 36.9239 9.4042C36.514 8.76954 35.9724 8.23768 35.1573 7.70573C32.451 10.4567 29.7444 13.208 26.9428 16.0546ZM11.2831 3.92634C10.5717 3.43615 9.81861 3.38056 9.19405 3.98546C7.44401 5.6804 5.71777 7.40171 4.033 9.16131C3.38612 9.83693 3.4126 10.6835 3.98404 11.4181C4.46303 12.0339 5.0149 12.5998 5.65428 13.0298C6.05474 12.9018 6.25682 12.6029 6.49921 12.3616C8.1591 10.7093 9.81331 9.05121 11.4679 7.39354C12.8257 6.03324 12.8102 5.37998 11.2831 3.92634ZM31.4707 6.49447C32.2798 5.56225 32.3535 4.73085 31.6856 4.07172C31.0048 3.40003 30.0675 3.39789 29.3036 4.0747C29.1144 4.24232 28.9285 4.41909 28.7699 4.61496C28.0226 5.53783 28.2117 6.3475 29.2937 7.4074C30.208 8.30309 30.5136 7.2809 31.0335 6.92283C31.1618 6.8345 31.2598 6.70224 31.4707 6.49447Z"
                            fill="#0F172A"
                          />
                        </svg>
                        <span className="font-krona uppercase pl-2 dark:text-slate-950">
                          Verthem
                        </span>
                      </div>
                    </a>
                  </div>
                  <label
                    className="absolute top-5 right-5 cursor-pointer dark:text-slate-950"
                    onClick={toggleMenu}
                  >
                    <X />
                  </label>
                </div>

                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center items-center gap-4"
                >
                  {menuItems.map((item, index) => (
                    <div key={index} className="overflow-hidden">
                      <MobileMenu
                        key={index}
                        title={item.name}
                        href={item.href}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
