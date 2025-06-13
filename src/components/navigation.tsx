'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';

export default function NavigationBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: 'Início', href: '/' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Experiência', href: '/experiencia' },
        { name: 'Contato', href: '/contato' },
        { name: 'Currículo', href: '/curriculo' },
    ];

    return (
        <header
            className={"fixed w-full z-50 transition-all duration-300 bg-black/10 shadow-md backdrop-blur-md border-b-2 border-white/5"}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <a href="/" className="flex items-center">
                        <div className="font-serif text-2xl font-bold  transition-colors duration-300">
                            Dev Rubens
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium  transition-colors duration-300 hover:bg-white/10 rounded-xl p-2"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium transition-colors duration-300 hover:bg-white/10 p-1 rounded-xl"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}