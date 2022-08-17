//! Required
import Image from "next/image";
import Link from "next/link";

//! Icons
import { RiOilLine } from "react-icons/ri";

const HomePage = () => {
    return (
        <>
            <header className="mx-auto grid w-full max-w-md grid-rows-1 items-center justify-items-center gap-x-20 px-4 pt-6 lg:max-w-5xl lg:grid-cols-2 lg:grid-rows-none lg:pt-28">
                <div className="dropShadowBanner w-full hover:drop-shadow-none duration-700">
                    <Image
                        alt="RCBanner"
                        src="/static/images/RCBanner.png"
                        width="340"
                        height="242"
                        layout="responsive"
                        className="self-center"
                    />
                </div>
                <div className="mt-10 flex w-full flex-col items-center justify-center lg:mt-0">
                    <h1 className="orangeBgHalf text-5xl font-thin text-orange-500 lg:text-[55px]">
                        روغنـــــــــی‌کار
                    </h1>
                    <p className="mt-2 text-xl font-extrabold text-stone-500 lg:mt-4 lg:text-2xl">
                        فروش انواع روغن و فیلتر خودرو
                    </p>
                    <p className="mt-6 text-sm font-bold text-stone-500 lg:text-base">
                        به آسانی چند کلیک، <span className="text-orange-500">روغن</span> یا{" "}
                        <span className="text-orange-500">فیلترت</span> تو راهه...
                    </p>
                    <p className="mt-1 text-[13px] font-extrabold text-stone-400 lg:text-[15px]">
                        یادت نره قبل از خریدت قیمتامون رو مقایسه کنی
                    </p>
                    <div className="mt-4 grid w-full grid-rows-2 items-center justify-items-center gap-y-2 gap-x-1 lg:mt-10 lg:grid-cols-2 lg:grid-rows-none lg:pr-16">
                        <Link href="/login">
                            <a className="w-full rounded-lg py-3 text-center text-base font-extrabold text-orange-500 duration-200 hover:bg-orange-100 lg:order-2 lg:underline lg:underline-offset-8">
                                ثبت نام
                            </a>
                        </Link>
                        <Link href="/product-list">
                            <a
                                className="
                                primaryBtnBg flex w-full items-center justify-center gap-x-1 rounded-lg py-3 text-center text-base font-extrabold 
                                text-white shadow-xl shadow-orange-500/30 duration-200 hover:shadow-none"
                            >
                                <RiOilLine className="-translate-y-0.5 text-xl" />
                                مشاهده محصولات
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HomePage;
