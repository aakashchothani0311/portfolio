import Footer from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';

export default function Home() {
  	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<NavBar />
			<div className='container mt-24 mx-auto px-12 py-4'>
				<HeroSection />
				<Projects />
			</div>
			<Footer />
		</main>
  	);
}
