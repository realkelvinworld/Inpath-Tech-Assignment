"use client";
import Image from "next/image";
import { Logo } from "./img";
import { Navlinks } from "./db";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // State to manage the full screen Menu. If false it is closed and if true it is opened
  const [menuBtnState, setMenuBtnState] = useState(false); // State to manage the hamburger Menu. If false it is closed and if true it is opened
  const [openBtn, setBtnOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);

  // Navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground); // Cleanup listener
  }, []);

  const handleHanburgerMenu = () => {
    if (!menuBtnState) {
      // Open
      setMenuBtnState(true);
      setOpen(true);
      setBtnOpen(true);
    } else {
      // Close
      setMenuBtnState(false);
      setOpen(false);
      setBtnOpen(false);
    }
  };

  const hideMenu = () => {
    if (open) {
      setOpen(false);
      setMenuBtnState(false);
      setBtnOpen(false);
    }
  };

  return (
    <nav
      className={`${
        pathname === "/studio" && "hidden"
      } flex relative z-[450] flex-col items-center w-full`}
    >
      {/* nav-container */}
      <div className="flex w-full flex-col items-center ">
        {/* desktop */}
        <div className="hidden md:flex relative w-full z-10 bg-white">
          {/* navlinks */}
          <div
            className={`py-4 dark:bg-slate-950 lg:px-28 flex w-full items-center justify-around px-2 ${
              !navColor
                ? "bg-primary-background "
                : "bg-opacity-30 backdrop-blur-lg backdrop-filter border-b-[2px] border-gray-600"
            }`}
          >
            <Link href="/">
              <div className="w-28">
                <Image src={Logo} alt="Logo" className="" />
              </div>
            </Link>
            <div className="flex text-[15px] text-black dark:text-white">
              {Navlinks.map((data) => {
                const { id, link, name, icon1, icon2 } = data;
                return (
                  <div
                    key={id}
                    className="relative px-3 py-1 flex gap-2 items-center justify-center"
                  >
                    {pathname === link && (
                      <motion.div
                        layoutId="nav-desktop"
                        transition={{
                          type: "spring",
                        }}
                        style={{ borderRadius: 9999 }}
                        className="absolute inset-0 bg-primary-border/50"
                      ></motion.div>
                    )}
                    <span className="dark:hidden">
                      <Image src={icon1} alt={name} width={20} height={20} />
                    </span>
                    <span className="hidden dark:inline">
                      <Image src={icon2} alt={name} width={20} height={20} />
                    </span>
                    <Link
                      href={link}
                      className="relative hover:opacity-60 hover:transition-opacity hover:duration-500 font-semibold"
                    >
                      {name}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center space-x-3 text-base">
              <Link
                href="https://app.aviotcapitals.com/register/"
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  }),
                  "text-base hover:bg-green-800 border hover:text-white"
                )}
              >
                Sign Up
              </Link>
              <Link
                href="https://app.aviotcapitals.com/"
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "text-base hover:bg-green-800 bg-black"
                )}
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="flex w-full items-center sm:hidden">
          <AnimatePresence mode="sync">
            {open && (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="fixed inset-0 navBg"
              >
                <div className="flex h-full w-full flex-col pt-48 bg-white dark:bg-slate-950">
                  <div className="absolute inset-0 z-10 " />
                  <div className="absolute inset-0 z-10 bg-opacity-20 bg-gradient-to-t from-primary-border/50 via-transparent to-primary-border/50" />
                  <div className="relative z-20 flex w-full justify-between px-4">
                    <div className="w-10"></div>
                    <div className="flex flex-1 flex-col items-center dark:text-white text-gray-950">
                      {Navlinks.map((data, i) => {
                        const { id, link, name } = data;
                        return (
                          <motion.div
                            key={id}
                            initial={{ opacity: 0, translateY: -50 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{
                              duration: 0.08,
                              delay: i * 0.01,
                              ease: "easeInOut",
                            }}
                            className="w-full py-5 text-center text-3xl hover:opacity-60"
                          >
                            <Link href={link} onClick={hideMenu}>
                              {name}
                            </Link>
                          </motion.div>
                        );
                      })}
                      <motion.div
                        initial={{ opacity: 0, translateY: -50 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.08, ease: "easeInOut" }}
                        className="w-full py-7 text-center text-4xl text-white"
                      >
                        <div className="flex flex-col">
                          <div className="mb-10">
                            <Link
                              href="https://app.aviotcapitals.com/"
                              onClick={hideMenu}
                              className="text-3xl dark:text-white dark:border-white text-gray-900 border border-gray-950 rounded-lg px-8 py-3"
                            >
                              Log In
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="https://app.aviotcapitals.com/register/"
                              onClick={hideMenu}
                              className="text-3xl dark:text-white dark:border-white text-gray-900 border border-gray-950 rounded-lg px-8 py-3"
                            >
                              Sign Up
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="w-10"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="bg-white dark:bg-slate-950 flex items-center justify-between bg-opacity-85 px-3 py-2 w-full">
            <div>
              <Link href="/">
                <div className="p-2">
                  <Image src={Logo} className="w-28" alt="Logo" />
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-6 px-4">
              <div className="flex w-6 items-center justify-end">
                <div
                  className="group flex h-6 w-6 cursor-pointer flex-col items-center justify-between"
                  onClick={handleHanburgerMenu}
                >
                  <span
                    className={`h-[2px] w-full transform cursor-pointer rounded-lg dark:bg-white bg-slate-600 mix-blend-difference transition duration-300 ease-in-out ${
                      openBtn ? "translate-y-2.5 rotate-45 bg-white" : ""
                    }`}
                  />
                  <span
                    className={`h-[2px] w-[60%] transform cursor-pointer rounded-lg dark:bg-white bg-slate-600 mix-blend-difference transition duration-300 ease-in-out ${
                      openBtn ? "hidden w-0" : "w-full"
                    }`}
                  />
                  <span
                    className={`h-[2px] w-full transform cursor-pointer rounded-lg dark:bg-white bg-slate-600 mix-blend-difference transition duration-300 ease-in-out ${
                      openBtn ? "-translate-y-3 -rotate-45 bg-white" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
