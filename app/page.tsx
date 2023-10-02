import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import { Nav } from "@/components/sections/Nav";

export default function Home() {
	return (
		<>
			<Nav />
			<MaxWidthWrapper className="flex justify-center flex-col h-full">
				<Hero />
				<Features />
				<HowItWorks />
			</MaxWidthWrapper>
			<Footer />
		</>
	);
}
