"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "../ui/button";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2071&auto=format&fit=crop",
            title: "Learn from the Best",
            subtitle:
                "Connect with expert tutors who are passionate about your success",
            highlight: "1-on-1 Personalized Sessions",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
            title: "Master Any Subject",
            subtitle:
                "From Mathematics to Music — we have world-class tutors for every passion",
            highlight: "1000+ Subjects Covered",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1588072432733-2b6a4873b187?q=80&w=2070&auto=format&fit=crop",
            title: "Achieve Your Goals",
            subtitle: "Flexible scheduling • Affordable rates • Proven results",
            highlight: "Join 50,000+ Happy Students",
        },
    ];
    return (
        <div className="relative w-full h-145 md:h-162.5 lg:h-180 overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full">
                        {/* Background Image */}
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority
                            className="object-cover object-top"
                            sizes="100vw"
                        />

                        {/* Blue Theme Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/30 to-black/50" />

                        {/* Content Container */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 ">
                                <div className="max-w-2xl space-y-4 ">
                                    {/* Highlight Badge */}
                                    <div className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-[#90e0ef]/30 px-5 py-2 text-sm font-medium text-white">
                                        {slide.highlight}
                                    </div>

                                    {/* Title */}
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
                                        {slide.title}
                                    </h1>

                                    {/* Subtitle */}
                                    <p className="text-lg md:text-xl text-white/90 max-w-md ">
                                        {slide.subtitle}
                                    </p>

                                    {/* CTA Button - Using Primary Color */}
                                    <Link href="/tutors">
                                        <Button className="mt-6 group flex items-center gap-3 bg-primary hover:bg-(--primary-hover)  font-semibold text-lg px-9 py-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                                            Find Your Tutor
                                            <span className="text-2xl transition-transform">
                                                <FaArrowRightLong />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons - Updated with Theme Colors */}
            <Button className="swiper-button-prev absolute left-4 md:left-8 top-1/2 z-20 bg-transparent text-[#0077b6] p-3 rounded-full backdrop-blur-md transition-all hidden! md:block! w-12 h-12 border border-white/50 hover:border-[#72cfff]">
                <SlArrowLeft />
            </Button>

            <Button className="swiper-button-next absolute right-4 md:right-8 top-1/2 z-20 bg-transparent text-[#0077b6] p-3 rounded-full backdrop-blur-md transition-all hidden! md:block! w-12 h-12 border border-white/50 hover:border-[#72cfff]">
                <SlArrowRight />
            </Button>

            {/* Pagination */}
            <div className="swiper-pagination bottom-8!" />
        </div>
    );
};

export default Banner;
