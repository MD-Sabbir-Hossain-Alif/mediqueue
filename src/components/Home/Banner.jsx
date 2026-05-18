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

const Banner = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
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
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
            title: "Achieve Your Goals",
            subtitle: "Flexible scheduling • Affordable rates • Proven results",
            highlight: "Join 50,000+ Happy Students",
        },
    ];
    return (
        <div className="relative w-full h-145 md:h-162.5 lg:h-175 overflow-hidden">
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
                            className="object-cover"
                            sizes="100vw"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />

                        {/* Content Container */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                                <div className="max-w-xl space-y-6">
                                    {/* Highlight */}
                                    <div className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-medium text-white">
                                        {slide.highlight}
                                    </div>

                                    {/* Title */}
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter">
                                        {slide.title}
                                    </h1>

                                    {/* Subtitle */}
                                    <p className="text-lg md:text-xl text-white/90 max-w-md">
                                        {slide.subtitle}
                                    </p>

                                    {/* CTA Button */}
                                    <Link href="/tutors">
                                        <button className="mt-6 group flex items-center gap-3 bg-white hover:bg-white/90 active:bg-white text-black font-semibold text-lg px-9 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                                            Find Your Tutor
                                            <span className="text-2xl group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="swiper-button-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-md transition-all hidden md:flex items-center justify-center w-12 h-12">
                ←
            </button>
            <button className="swiper-button-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-md transition-all hidden md:flex items-center justify-center w-12 h-12">
                →
            </button>

            {/* Pagination */}
            <div className="swiper-pagination bottom-8!" />
        </div>
    );
};

export default Banner;
