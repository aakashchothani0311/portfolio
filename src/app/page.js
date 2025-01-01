import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function Home() {
  	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<NavBar />
			<div className='container mt-24 mx-auto px-12 py-4'>
				<HeroSection />
				<AboutMe />
				<Skills />
				<Experience />
				<Projects />
			</div>
			<Footer />
		</main>
  	);
}
