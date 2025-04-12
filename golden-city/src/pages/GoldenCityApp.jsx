import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Building,
    MapPin,
    Bed,
    Bath,
    Square,
    Play,
    Check,
    ArrowUpCircle,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Phone,
    Mail,
    Box
    
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Reusable Glass Card Component
const GlassCard = ({ className, children, ...props }) => (
    <div
        className={cn(
            'bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10',
            className
        )}
        {...props}
    >
        {children}
    </div>
);

const GoldenCityApp = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Mobile menu toggle handler
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Scroll event listener for back-to-top button
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to handle smooth scrolling
    const scrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false); // Close mobile menu after clicking
        }
    };

    // --- Animation Variants ---
    const slideInVariants = {
        hidden: { opacity: 1, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
    };

    const scrollFadeVariants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
        exit: { opacity: 0 }
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: -20,
            transition: {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    };

    const floating2Variants = {
        initial: { y: 0 },
        animate: {
            y: 15,
            transition: {
                duration: 2.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 0.5
            }
        }
    };

    const floating3Variants = {
        initial: { y: 0 },
        animate: {
            y: -25,
            transition: {
                duration: 3.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1
            }
        }
    };

    const pulseVariants = {
        scale: 1,
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    };

    // --- Sub-Components ---

    // Navigation Component
    const Navigation = () => (
        <nav className="fixed w-full z-50">
            <GlassCard className="max-w-7xl mx-auto p-2 px-4 sm:px-6 lg:px-8 mt-2">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3">
                            <Building className="text-white text-lg" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ">
                            GOLDEN CITY
                        </span>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <a
                            href="#"
                            onClick={() => scrollTo('home')}
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#properties"
                            onClick={() => scrollTo('properties')}
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300"
                        >
                            Properties
                        </a>
                        <a
                            href="#about"
                            onClick={() => scrollTo('about')}
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={() => scrollTo('contact')}
                            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300"
                        >
                            Contact
                        </a>
                        <Button
                            variant="default"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium"
                        >
                            Get Started
                        </Button>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
                            onClick={toggleMobileMenu}
                            id="mobile-menu-button"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </GlassCard>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <GlassCard className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#"
                            onClick={() => { scrollTo('home'); setIsMobileMenuOpen(false); }}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white"
                        >
                            Home
                        </a>
                        <a
                            href="#properties"
                            onClick={() => { scrollTo('properties'); setIsMobileMenuOpen(false); }}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
                        >
                            Properties
                        </a>
                        <a
                            href="#about"
                            onClick={() => { scrollTo('about'); setIsMobileMenuOpen(false); }}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={() => { scrollTo('contact'); setIsMobileMenuOpen(false); }}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
                        >
                            Contact
                        </a>
                        <Button
                            variant="default"
                            className="block w-full text-left bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </Button>
                    </div>
                </GlassCard>
            )}
        </nav>
    );

    // Hero Section Component
    const HeroSection = () => (
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden" id="home">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-400 filter blur-3xl opacity-20"
                />
                <motion.div
                    variants={floating2Variants}
                    initial="initial"
                    animate="animate"
                    className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-teal-400 filter blur-3xl opacity-20"
                />
                <motion.div
                    variants={floating3Variants}
                    initial="initial"
                    animate="animate"
                    className="absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full bg-amber-600 filter blur-3xl opacity-20"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div
                        variants={slideInVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-12 lg:mb-0"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight neon-glow">
                            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Golden City:</span>
                            <br />
                            Your Gateway to Luxury Living
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-lg">
                            Premium Properties, Exceptional Investments. Discover the future of luxury real estate with our curated collection of high-end properties.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/listing" className="w-full"><Button
                                variant="default"
                                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium"
                            >
                                Explore Properties
                            </Button></Link>
                            <Link to="/about" className="w-full">
                            <Button
                                variant="outline"
                                className="glass-card border border-gray-700 hover:border-amber-500 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300"
                            >
                                <Play className="mr-2" /> Watch Demo
                            </Button></Link>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3">
                                    <Check className="text-white text-sm" />
                                </div>
                                <span className="text-gray-300">3D Virtual Tours</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mr-3">
                                    <Check className="text-white text-sm" />
                                </div>
                                <span className="text-gray-300">Blockchain Security</span>
                            </div>
                        </div>
                    </motion.div>
                    <div className="relative h-80 md:h-96 flex items-center justify-center" id="building-container">
                        {/* Buildings will be dynamically added here */}
                        <motion.div
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                            style={{ animationDelay: '0s' }}
                            className="absolute bottom-[10%] left-[10%] w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/30 rounded-lg building-animation"
                        />
                        <motion.div
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                            style={{ animationDelay: '0.2s' }}
                            className="absolute bottom-[5%] left-[30%] w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-teal-400/20 to-teal-600/30 rounded-lg building-animation"
                        />
                        <motion.div
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                            style={{ animationDelay: '0.4s' }}
                            className="absolute bottom-0 left-[50%] transform -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-amber-400/20 to-amber-600/30 rounded-xl building-animation"
                        />
                        <motion.div
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                            style={{ animationDelay: '0.6s' }}
                            className="absolute bottom-[5%] right-[30%] w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-teal-400/20 to-teal-600/30 rounded-lg building-animation"
                        />
                        <motion.div
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                            style={{ animationDelay: '0.8s' }}
                            className="absolute bottom-[10%] right-[10%] w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-400/20 to-amber-600/30 rounded-lg building-animation"
                        />
                    </div>
                </div>
            </div>
        </section>
    );

    // Properties Section Component
    const PropertiesSection = () => (
        <section id="properties" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-400 filter blur-3xl opacity-10" />
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-400 filter blur-3xl opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    variants={scrollFadeVariants}
                    initial="visible"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Exclusive Listings</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Discover our curated selection of premium properties with immersive 3D tours and blockchain-secured transactions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Property Card 1 */}
                    <motion.div
                        variants={scrollFadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ transitionDelay: '0.1s' }}
                        className="rounded-2xl overflow-hidden"
                    >
                        <GlassCard className="property-card">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Luxury Villa"
                                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-gradient-to-br from-amber-400 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    Featured
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <div className="text-white font-bold text-xl">$3,250,000</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Golden Heights Villa</h3>
                                <div className="flex items-center text-gray-300 mb-4">
                                    <MapPin className="mr-2 text-amber-400" />
                                    <span>Beverly Hills, CA</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex space-x-4">
                                        <div className="flex items-center text-gray-300">
                                            <Bed className="mr-1 text-amber-400" />
                                            <span>5</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <Bath className="mr-1 text-amber-400" />
                                            <span>4</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <Square className="mr-1 text-amber-400" />
                                            <span>4,200 sqft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                <Link to="/about" className="w-full">
                                        <Button
                                            variant="default"
                                            className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-full font-medium flex items-center justify-center"
                                        >
                                                                            
                                        <Box className="mr-2" /> 3D Tour
                                    </Button> </Link>
                                    <Button
                                        variant="outline"
                                        className="flex-1 glass-card border border-gray-700 hover:border-amber-500 text-white py-3 rounded-full font-medium transition duration-300"
                                    >
                                        Details
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Property Card 2 */}
                    <motion.div
                        variants={scrollFadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ transitionDelay: '0.2s' }}
                        className="rounded-2xl overflow-hidden"
                    >
                        <GlassCard className="property-card">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Modern Apartment"
                                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <div className="text-white font-bold text-xl">$2,100,000</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Skyline Penthouse</h3>
                                <div className="flex items-center text-gray-300 mb-4">
                                    <MapPin className="mr-2 text-amber-400" />
                                    <span>New York, NY</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex space-x-4">
                                        <div className="flex items-center text-gray-300">
                                            <Bed className="mr-1 text-amber-400" />
                                            <span>3</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <Bath className="mr-1 text-amber-400" />
                                            <span>2.5</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <Square className="mr-1 text-amber-400" />
                                            <span>2,800 sqft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <Button
                                        variant="default"
                                        className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-full font-medium flex items-center justify-center"
                                    >
                                        <Box className="mr-2" /> 3D Tour
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1 glass-card border border-gray-700 hover:border-amber-500 text-white py-3 rounded-full font-medium transition duration-300"
                                    >
                                        Details
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Property Card 3 */}
                    <motion.div
                        variants={scrollFadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ transitionDelay: '0.3s' }}
                        className="rounded-2xl overflow-hidden"
                    >
                        <GlassCard className="property-card">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Waterfront Mansion"
                                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-gradient-to-br from-teal-400 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    New
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <div className="text-white font-bold text-xl">$4,750,000</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Oceanview Estate</h3>
                                <div className="flex items-center text-gray-300 mb-4">
                                    <MapPin className="mr-2 text-amber-400" />
                                    <span>Miami, FL</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex space-x-4">
                                        <div className="flex items-center text-gray-300">
                                            <Bed className="mr-1 text-amber-400" />
                                            <span>6</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <Bath className="mr-1 text-amber-400" />
                                            <span>5</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <Square className="mr-1 text-amber-400" />
                                            <span>5,500 sqft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <Button
                                        variant="default"
                                        className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-full font-medium flex items-center justify-center"
                                    >
                                        <Box className="mr-2" /> 3D Tour
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1 glass-card border border-gray-700 hover:border-amber-500 text-white py-3 rounded-full font-medium transition duration-300"
                                    >
                                        Details
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                <motion.div
                    variants={scrollFadeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ transitionDelay: '0.4s' }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        className="glass-card border border-gray-700 hover:border-amber-500 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300"
                    >
                        View All Properties
                    </Button>
                </motion.div>
            </div>
        </section>
    );

    // CTA Section Component
    const CTASection = () => (
        <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-400 filter blur-3xl opacity-20"
                />
                <motion.div
                    variants={floating2Variants}
                    initial="initial"
                    animate="animate"
                    className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-teal-400 filter blur-3xl opacity-20"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={scrollFadeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mx-auto"
                >
                    <GlassCard className="rounded-2xl p-8 md:p-12 max-w-5xl">
                        <div className="md:flex md:items-center md:space-x-12">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience Real Estate in the Digital Age</h2>
                                <p className="text-lg text-gray-300 mb-8">
                                    Golden City leverages cutting-edge technology to bring you immersive property experiences. Our 3D tours allow you to explore every corner of your future home from anywhere in the world.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1 mt-1">
                                            <Check className="text-white text-xs" />
                                        </div>
                                        <p className="ml-3 text-gray-300">Virtual property tours with photorealistic quality</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full p-1 mt-1">
                                            <Check className="text-white text-xs" />
                                        </div>
                                        <p className="ml-3 text-gray-300">AI-powered property recommendations</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1 mt-1">
                                            <Check className="text-white text-xs" />
                                        </div>
                                        <p className="ml-3 text-gray-300">Blockchain-based secure transactions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Modern House"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6" />
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold">Virtual Tour Demo</h3>
                                        <p className="text-gray-300">Experience our interactive 3D property tours</p>
                                    </div>
                                </div>
                                <motion.button
                                    variants={pulseVariants}
                                    initial="scale"
                                    animate="scale"
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center cursor-pointer">
                                        <Play className="text-white text-xl" />
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );

    // Stats Section Component
    const StatsSection = () => (
        <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <motion.div
                        variants={scrollFadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                            250+
                        </div>
                        <div className="text-gray-300 uppercase text-sm tracking-wider">Properties</div>
                    </motion.div>
                    <motion.div
                        variants={scrollFadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ transitionDelay: '0.1s' }}
                    >
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-2">
                            $1.2B
                        </div>
                        <div className="text-gray-300 uppercase text-sm tracking-wider">Transactions</div>
                    </motion.div>
                    <motion.div
                        variants={scrollFadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                            98%
                        </div>
                        <div className="text-gray-300 uppercase text-sm tracking-wider">Client Satisfaction</div>
                    </motion.div>
                    <motion.div
                        variants={scrollFadeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ transitionDelay: '0.3s' }}
                    >
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-2">
                            15+
                        </div>
                        <div className="text-gray-300 uppercase text-sm tracking-wider">Years Experience</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );

    // Footer Component
    const Footer = () => (
        <footer id="contact" className="bg-slate-900 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3">
                                <Building className="text-white text-lg" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                                GOLDEN CITY
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Revolutionizing real estate with technology and innovation for premium property investments.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-amber-400 transition duration-300">
                                <Facebook className="" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-amber-400 transition duration-300">
                                <Twitter className="" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-amber-400 transition duration-300">
                                <Instagram className="" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-amber-400 transition duration-300">
                                <Linkedin className="" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    onClick={() => scrollTo('home')}
                                    className="text-gray-400 hover:text-amber-400 transition duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#properties"
                                    onClick={() => scrollTo('properties')}
                                    className="text-gray-400 hover:text-amber-400 transition duration-300"
                                >
                                    Properties
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={() => scrollTo('about')}
                                    className="text-gray-400 hover:text-amber-400 transition duration-300"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => scrollTo('contact')}
                                    className="text-gray-400 hover:text-amber-400 transition duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">Property Sales</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">Property Management</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">Investment Consulting</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">3D Virtual Tours</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition duration-300">Legal Services</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-amber-400 mt-1 mr-4" />
                                <span className="text-gray-400">
                                    123 Golden Avenue
                                    <br />
                                    Los Angeles, CA 90067
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-amber-400 mr-4" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-amber-400 mr-4" />
                                <span className="text-gray-400">info@goldencity.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Golden City Real Estate. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-amber-400 transition duration-300">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-amber-400 transition duration-300">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-amber-400 transition duration-300">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );

    // Back to Top Button Component
    const BackToTopButton = () => (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="fixed bottom-8 right-8 bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center z-50"
        >
            <ArrowUpCircle className="text-white" size={24} />
        </motion.button>
    );

    return (
        <div className="antialiased">
            <Navigation />
            <HeroSection />
            <PropertiesSection />
            <CTASection />
            <StatsSection />
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default GoldenCityApp;
