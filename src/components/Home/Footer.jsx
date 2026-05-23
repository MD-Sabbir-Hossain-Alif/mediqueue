"use client";

import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="container mx-auto bg-muted/50 border-t border-border pt-8 md:pt-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10">
                    {/* Logo & Description */}
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-3xl font-bold text-foreground hover:text-primary transition-colors mb-4"
                        >
                            MediQueue
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Connecting Bangladeshi students (Class 6 to 12 &
                            Medical Admission) with experienced tutors for
                            better academic success.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-lg">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tutors"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Find Tutors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/add-tutor"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Become a Tutor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-booked-sessions"
                                    className="hover:text-foreground transition-colors"
                                >
                                    My Sessions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-tutors"
                                    className="hover:text-foreground transition-colors"
                                >
                                    My Tutors
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* For Students */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-lg">
                            For Students
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Class 6–8
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    SSC (Class 9–10)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    HSC (Class 11–12)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Medical Admission
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    How It Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4 text-lg">
                            Contact Us
                        </h3>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-primary" />
                                <p>Rangpur, Bangladesh</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-primary" />
                                <p>+880 17XX-XXXXXX</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                <p>hello@mediqueue.com</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="font-medium text-foreground mb-3">
                                Follow Us
                            </h4>
                            <div className="flex gap-4 text-xl">
                                <Link
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="hover:text-primary transition-colors"
                                >
                                    <FaFacebookF />
                                </Link>
                                <Link
                                    href="https://instagram.com"
                                    target="_blank"
                                    className="hover:text-primary transition-colors"
                                >
                                    <FaInstagram />
                                </Link>
                                <Link
                                    href="https://youtube.com"
                                    target="_blank"
                                    className="hover:text-primary transition-colors"
                                >
                                    <FaYoutube />
                                </Link>
                                <Link
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="hover:text-primary transition-colors"
                                >
                                    <FaLinkedin />
                                </Link>
                                <Link
                                    href="https://x.com"
                                    target="_blank"
                                    className="hover:text-primary transition-colors"
                                >
                                    <FaXTwitter />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border py-6 bg-background/80">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
                    <p>© 2026 MediQueue. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-foreground transition-colors"
                        >
                            Refund Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
