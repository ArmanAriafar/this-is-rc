//! Required
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//! Icons
import {
    RiHomeSmile2Line,
    RiHomeSmile2Fill,
    RiOilLine,
    RiOilFill,
    RiFileList3Line,
    RiFileList3Fill,
} from "react-icons/ri";

import { AiOutlineHome } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { FaUserPlus, FaHome } from "react-icons/fa";

//! Comp
const Navigation = () => {
    const router = useRouter();

    //!Responsive
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);

    if (screenWidth <= 1023) {
        // Mobile
        return (
            <nav className="fixed bottom-0 right-0 z-[200] w-full border-t-2 border-orange-500 bg-white lg:hidden">
                <div className="mx-auto grid w-full max-w-md grid-cols-4 pb-5 items-center justify-items-center py-2 font-sans text-sm font-extrabold text-stone-400">
                    <Link href="/">
                        <a
                            className={` flex w-full flex-col items-center justify-center h-full${
                                router.pathname === "/" ? "font-thin text-orange-500" : ""
                            }`}
                        >
                            {router.pathname === "/" && <FaHome className="text-2xl" />}
                            خانــــــه
                        </a>
                    </Link>
                    <Link href="/product-list">
                        <a
                            className={` flex h-full w-full flex-col items-center justify-center ${
                                router.pathname === "/product-list" ? "font-thin text-orange-500" : ""
                            }`}
                        >
                            {router.pathname === "/product-list" && <RiOilFill className="text-2xl" />}
                            محصولات
                        </a>
                    </Link>
                    <Link href="/cart">
                        <a
                            className={` flex h-full w-full flex-col items-center justify-center ${
                                router.pathname === "/cart" ? "font-thin text-orange-500" : ""
                            }`}
                        >
                            {router.pathname === "/cart" && <RiFileList3Fill className="text-2xl" />}
                            فاکتور من
                        </a>
                    </Link>
                    <Link href="/login">
                        <a
                            className={` flex h-full w-full flex-col items-center justify-center ${
                                router.pathname === "/login" ? "font-thin text-orange-500" : ""
                            }`}
                        >
                            {router.pathname === "/login" && <FaUserPlus className="translate-x-1 text-2xl" />}
                            ورود
                        </a>
                    </Link>
                </div>
            </nav>
        );
    } else if (screenWidth >= 1024) {
        // Desktop
        return (
            <nav
                className="
                fixed top-0 left-1/2 grid w-full max-w-5xl -translate-x-1/2 grid-cols-2 items-center justify-items-center 
                rounded-b-2xl border-b-4 border-orange-500 bg-white py-5 px-6 shadow-xl"
            >
                <div className="grid w-full grid-cols-3 items-center justify-items-start justify-self-start">
                    <Link href="/">
                        <a
                            className={`flex items-center justify-center gap-x-1 ${
                                router.pathname === "/" ? "font-thin text-orange-500" : "text-stone-400"
                            }`}
                        >
                            {router.pathname === "/" ? (
                                <FaHome className="text-2xl" />
                            ) : (
                                <AiOutlineHome className="text-2xl" />
                            )}
                            خانــــــه
                        </a>
                    </Link>
                    <Link href="/product-list">
                        <a
                            className={` flex items-center justify-center gap-x-1 ${
                                router.pathname === "/product-list" ? "font-thin text-orange-500" : "text-stone-400"
                            }`}
                        >
                            {router.pathname === "/product-list" ? (
                                <RiOilFill className="text-2xl" />
                            ) : (
                                <RiOilLine className="text-2xl" />
                            )}
                            محصولات
                        </a>
                    </Link>
                    <Link href="/cart">
                        <a
                            className={` flex items-center justify-center gap-x-1 ${
                                router.pathname === "/cart" ? "font-thin text-orange-500" : "text-stone-400"
                            }`}
                        >
                            {router.pathname === "/cart" ? (
                                <RiFileList3Fill className="text-2xl" />
                            ) : (
                                <RiFileList3Line className="text-2xl" />
                            )}
                            فاکتور من
                        </a>
                    </Link>
                </div>
                <Link href="/login">
                    <a
                        className={` flex items-center justify-center gap-x-1 justify-self-end ${
                            router.pathname === "/login" ? "font-thin text-orange-500" : "text-stone-400"
                        }`}
                    >
                        {router.pathname === "/login" ? (
                            <FaUserPlus className="text-2xl" />
                        ) : (
                            <FiUserPlus className="text-2xl" />
                        )}
                        ورود
                    </a>
                </Link>
            </nav>
        );
    }
};
export default Navigation;
