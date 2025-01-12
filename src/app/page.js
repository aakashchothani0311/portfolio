'use client';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function Home() {
	const vantaRef = useRef(null);

    useEffect(() => {
        if (vantaRef.current) {
            VANTA.NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                scale: 1,
                scaleMobile: 1,
				points: 20,
				maxDistance: 0,
  				spacing: 15,
                color: 0xFF3F81,
                backgroundColor: 0x121212,
                THREE
            });
        }

        return () => {
            if (vantaRef.current)
                vantaRef.current = null;
        };
    }, []);

  	return (
		<Provider store={store}>
			<main className='flex min-h-screen flex-col bg-[#121212]'>
				<NavBar />
				<div ref={vantaRef}>
					<div className='container mt-24 mx-auto px-12 pt-4'>
						<HeroSection />
					</div>
				</div>
				<div className='container mx-auto px-12 pb-4'>
					<AboutMe />
					<Skills />
					<Experience />
					<Projects />
				</div>
				<Footer />
			</main>
		</Provider>
  	);
}
