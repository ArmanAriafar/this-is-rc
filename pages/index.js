//! Required
import Image from "next/image";
import Link from "next/link";

//! Icons
import { RiOilLine } from "react-icons/ri";

const HomePage = () => {
    return (
        <main className="min-h-screen">
            <header className="mx-auto grid w-full max-w-md grid-rows-1 items-center justify-items-center px-4 pt-6">
                <div className="dropShadowBanner w-full">
                    <Image
                        alt="RCBanner"
                        src="/static/images/RCBanner.png"
                        width="340"
                        height="242"
                        layout="responsive"
                        className="self-center"
                    />
                </div>
                <div className="mt-10 flex w-full flex-col items-center justify-center">
                    <h1 className="orangeBgHalf text-5xl font-thin text-orange-500">روغنـــــــــی‌کار</h1>
                    <p className="mt-2 text-xl font-extrabold text-stone-500">فروش انواع روغن و فیلتر خودرو</p>
                    <p className="mt-6 text-sm font-bold text-stone-500">
                        به آسانی چند کلیک، <span className="text-orange-500">روغن</span> یا{" "}
                        <span className="text-orange-500">فیلترت</span> تو راهه...
                    </p>
                    <p className="mt-1 text-[13px] font-extrabold text-stone-400">
                        یادت نره قبل از خریدت قیمتامون رو مقایسه کنی
                    </p>
                    <div className="mt-4 grid w-full grid-rows-2 items-center justify-items-center gap-y-2">
                        <Link href="/login">
                            <a className="text-base font-extrabold text-orange-500">ثبت نام</a>
                        </Link>
                        <Link href="/product-list">
                            <a className="primaryBtnBg flex w-full items-center justify-center gap-x-1 rounded-lg py-3 text-center text-base font-extrabold text-white">
                                <RiOilLine className="text-xl -translate-y-0.5" />
                                مشاهده محصولات
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
        </main>
    );
};

export default HomePage;
