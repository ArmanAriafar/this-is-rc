//! Required
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

//! Icon
import { FaWhatsappSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

//! Comp
const Footer = () => {
    const [isActive, setIsActive] = useState(0);
    //! Responsive in js
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);
    if (screenWidth <= 1023) {
        // Mobile
        return (
            <footer className="w-full bg-stone-100 pt-8 pb-20">
                <div className="mx-auto flex w-full max-w-[240px] flex-col items-center justify-center px-4">
                    {/* دسترسی سریع */}
                    <motion.article
                        variants={{
                            hidden: {
                                height: "40px",
                            },
                            animate: {
                                height: isActive === 1 ? "fit-content" : "40px",
                                transition: {
                                    type: "tween",
                                    duration: 0.5,
                                },
                            },
                        }}
                        initial="hidden"
                        animate="animate"
                        className="flex w-full flex-col items-start justify-start overflow-hidden"
                        onClick={() => setIsActive(1)}
                    >
                        <h6 className="text-lg font-extrabold text-stone-400" onClick={() => setIsActive(1)}>
                            دسترسی سریع
                        </h6>
                        <ul className="mt-3 leading-8">
                            <li>
                                <Link href="#">
                                    <a className="text-base font-medium text-stone-400">لیست محصولات</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base font-medium text-stone-400">سفارشات من</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base font-medium text-stone-400">قوانین سایت</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="text-base font-medium text-stone-400">تماس با ما</a>
                                </Link>
                            </li>
                        </ul>
                    </motion.article>

                    {/* درباره روغنی‌کار */}
                    <motion.article
                        variants={{
                            hidden: {
                                height: "40px",
                            },
                            animate: {
                                height: isActive === 2 ? "fit-content" : "40px",
                                transition: {
                                    type: "tween",
                                    duration: 0.5,
                                },
                            },
                        }}
                        initial="hidden"
                        animate="animate"
                        className="mt-6 flex w-full flex-col items-start justify-start overflow-hidden text-stone-400"
                        onClick={() => setIsActive(2)}
                    >
                        <h6 className="text-lg font-extrabold text-stone-400" onClick={() => setIsActive(2)}>
                            درباره روغنی‌کار
                        </h6>
                        <p className="mt-4 max-w-xs text-sm">
                            این یک متن ساختگی است. این یک متن ساختگی است.این یک متن ساختگی است.
                        </p>
                        <a href="#" className="mt-4 text-sm">
                            پشتیبانی واتس‌اپ: ۰۹۳۵۲۸۷۰۰۷۳
                        </a>
                    </motion.article>

                    {/* با ما در ارتباط باشید */}
                    <motion.article
                        variants={{
                            hidden: {
                                height: "40px",
                            },
                            animate: {
                                height: isActive === 3 ? "fit-content" : "40px",
                                transition: {
                                    type: "tween",
                                    duration: 0.5,
                                },
                            },
                        }}
                        initial="hidden"
                        animate="animate"
                        className="mt-6 flex w-full flex-col items-start justify-start overflow-hidden text-stone-400"
                        onClick={() => setIsActive(3)}
                    >
                        <h6 className="text-lg font-extrabold text-stone-400" onClick={() => setIsActive(3)}>
                            با ما در ارتباط باشید
                        </h6>
                        <a
                            href="#"
                            className="mt-4 flex items-center justify-center gap-x-2 text-sm duration-200 hover:text-rose-500"
                        >
                            <FaInstagramSquare className="text-2xl" />
                            اینستاگرام
                        </a>
                        <a
                            href="#"
                            className="mt-2 flex items-center justify-center gap-x-2 text-sm duration-200 hover:text-green-500"
                        >
                            <FaWhatsappSquare className="text-2xl" />
                            واتس‌اپ
                        </a>
                        <a
                            href="#"
                            className="mt-2 flex items-center justify-center gap-x-2 text-sm duration-200 hover:text-blue-500"
                        >
                            <FaLinkedin className="text-2xl" />
                            لینکدین
                        </a>
                    </motion.article>

                    {/* اعتماد به روغنی‌کار */}
                    <motion.article
                        variants={{
                            hidden: {
                                height: "40px",
                            },
                            animate: {
                                height: isActive === 4 ? "fit-content" : "40px",
                                transition: {
                                    type: "tween",
                                    duration: 0.5,
                                },
                            },
                        }}
                        initial="hidden"
                        animate="animate"
                        className="mt-6 flex w-full flex-col items-start justify-start overflow-hidden pb-5 text-stone-400"
                        onClick={() => setIsActive(4)}
                    >
                        <h6 className="text-lg font-extrabold text-stone-400" onClick={() => setIsActive(4)}>
                            اعتماد به روغنی‌کار
                        </h6>
                        <p className="mt-2 w-full max-w-[220px] text-sm font-medium text-stone-400">
                            روغنی‌کار، ایمن‌ترین ارائه دهنده محصولات روغن و فیلتر خودرو شما
                        </p>
                        <div className="mt-5 grid grid-cols-2 items-center justify-items-center gap-4">
                            <article className="flex aspect-square w-24 items-center justify-center rounded-lg bg-white shadow-lg duration-200 hover:shadow-none">
                                <Image alt="ENamad" src="/static/images/ENamad.png" width="48" height="75" />
                            </article>
                            <article className="flex aspect-square w-24 items-center justify-center rounded-lg bg-white shadow-lg duration-200 hover:shadow-none">
                                <Image alt="ZarinPall" src="/static/images/ZarrinPall.png" width="48" height="75" />
                            </article>
                            <article className="flex aspect-square w-24 items-center justify-center rounded-lg bg-white shadow-lg duration-200 hover:shadow-none">
                                <Image alt="Samandehi" src="/static/images/Samandehi.png" width="77" height="77" />
                            </article>
                            <article className="flex aspect-square w-24 items-center justify-center rounded-lg bg-white shadow-lg duration-200 hover:shadow-none">
                                <Image alt="Ettehadieh" src="/static/images/Ettehadieh.png" width="72" height="75" />
                            </article>
                        </div>
                    </motion.article>
                </div>
            </footer>
        );
    } else if (screenWidth >= 1024) {
        // Desktop
        return (
            <footer className="w-full bg-stone-100 py-8">
                <div className="mx-auto grid w-full max-w-5xl grid-cols-3 grid-rows-3 items-start justify-items-start">
                    {/* دسترسی سریع */}
                    <div className="col-span-2 flex w-full items-center justify-between pt-4">
                        <Link href="#">
                            <a className="text-base font-medium text-stone-400 duration-200 hover:text-orange-500">
                                لیست محصولات
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="text-base font-medium text-stone-400 duration-200 hover:text-orange-500">
                                سفارشات من
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="text-base font-medium text-stone-400 duration-200 hover:text-orange-500">
                                قوانین سایت
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="text-base font-medium text-stone-400 duration-200 hover:text-orange-500">
                                تماس با ما
                            </a>
                        </Link>
                    </div>
                    {/* اعتماد */}
                    <div className="row-span-3 flex flex-col items-start justify-center justify-self-end">
                        <h6 className="text-lg font-extrabold text-stone-400">اعتماد به روغنی‌کار</h6>
                        <p className="mt-2 w-full max-w-[220px] text-sm font-medium text-stone-400">
                            روغنی‌کار، ایمن‌ترین ارائه دهنده محصولات روغن و فیلتر خودرو شما
                        </p>
                        <div className="mt-5 grid grid-cols-2 items-center justify-items-center gap-4">
                            <article className="flex aspect-square w-24 items-center justify-center rounded-lg bg-white shadow-lg duration-200 hover:shadow-none">
                                <Image alt="ENamad" src="/static/images/ENamad.png" width="48" height="75" />
                            </article>
                            <article className="flex aspect-square w-24 items-center justify-center rounded-lg bg-white shadow-lg duration-200 hover:shadow-none">
                                <Image alt="ZarinPall" src="/static/images/ZarrinPall.png" width="48" height="75" />
                            </article>
                            <article className="flex aspect-square w-24 items-center justify-center rounded-lg bg-white shadow-lg duration-200 hover:shadow-none">
                                <Image alt="Samandehi" src="/static/images/Samandehi.png" width="77" height="77" />
                            </article>
                            <article className="flex aspect-square w-24 items-center justify-center rounded-lg bg-white shadow-lg duration-200 hover:shadow-none">
                                <Image alt="Ettehadieh" src="/static/images/Ettehadieh.png" width="72" height="75" />
                            </article>
                        </div>
                    </div>
                    {/* با ما در ارتباط باشید */}
                    <div className="row-span-2 flex w-full flex-col items-start justify-center text-stone-400">
                        <h6 className="text-lg font-extrabold">با ما در ارتباط باشید:</h6>
                        <a
                            href="#"
                            className="mt-4 flex items-center justify-center gap-x-2 text-sm duration-200 hover:text-rose-500"
                        >
                            <FaInstagramSquare className="text-2xl" />
                            اینستاگرام
                        </a>
                        <a
                            href="#"
                            className="mt-2 flex items-center justify-center gap-x-2 text-sm duration-200 hover:text-green-500"
                        >
                            <FaWhatsappSquare className="text-2xl" />
                            واتس‌اپ
                        </a>
                        <a
                            href="#"
                            className="mt-2 flex items-center justify-center gap-x-2 text-sm duration-200 hover:text-blue-500"
                        >
                            <FaLinkedin className="text-2xl" />
                            لینکدین
                        </a>
                    </div>
                    {/* درباره روغنی‌کار */}
                    <div className="row-span-2 flex w-full flex-col items-start justify-center text-stone-400">
                        <h6 className="text-lg font-extrabold">درباره روغنی‌کار:</h6>
                        <p className="mt-4 max-w-xs text-sm">
                            این یک متن ساختگی است. این یک متن ساختگی است.این یک متن ساختگی است.
                        </p>
                        <a href="#" className="mt-4 text-sm duration-200 hover:text-green-500 hover:drop-shadow-lg">
                            پشتیبانی واتس‌اپ: ۰۰۷۳ ۲۸۷ ۰۹۳۵
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-10 flex w-full max-w-5xl items-center justify-between border-t-2 border-black/20 pt-8">
                    <p className="text-xs font-bold text-stone-400">
                        تمامی حقوق این سایت توسط شرکت یدک پیشگام اطلس محفوظ است
                    </p>
                    <h6 className="text-xl font-thin text-stone-300">روغنی‌کار</h6>
                    <p className="text-xs font-bold text-stone-400">
                        آدرس: بازار <span className="font-thin">بزرگ</span> تهران
                    </p>
                </div>
            </footer>
        );
    }
};

export default Footer;
