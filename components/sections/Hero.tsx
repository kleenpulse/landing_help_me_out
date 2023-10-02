import Image from "next/image";

export const Hero = () => {
	return (
		<section className="w-full flex-col lg:flex-row flex justify-between items-center  lg:h-[777px] lg:gap-10 my-16 lg:my-0 px-4 sm:px-8 lg:px-0">
			<div className="flex flex-col w-full gap-8 mb-16 lg:mb-0">
				<div className="flex flex-col gap-3 w-full">
					<h1 className="font-bold sm:text-6xl font-Sora text-heading max-w-[468px]">
						Show Them Don’t Just Tell
					</h1>
					<p className="text-[17px] sm:text-[20px] font-Inter text-black/75 max-w-[548px]">
						Help your friends and loved ones by creating and sending videos on
						how to get things done on a website.
					</p>
				</div>
				<div className="">
					<button className="bg-primary text-white font-Work font-medium py-3 px-4 rounded-lg text-lg flex gap-4 items-center">
						Install HelpMeOut
						<Image
							src="/assets/arrow-right.svg"
							alt="arrow"
							width={20}
							height={20}
						/>
					</button>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 w-full relative  max-lg:overflow-hidden">
				<Image
					src="/assets/gray-dots.png"
					alt="hero"
					width={300}
					height={300}
					className="absolute -z-[1] -top-[3.3rem] -right-12"
				/>
				<div className="flex flex-col gap-4">
					<Image
						src="/assets/hero-1.png"
						alt="hero"
						width={400}
						height={400}
						className="rounded-xl"
					/>
					<Image
						src="/assets/hero-3.png"
						alt="hero"
						width={400}
						height={400}
						className="rounded-xl"
					/>
				</div>
				<Image
					src="/assets/hero-2.png"
					alt="hero"
					width={400}
					height={400}
					className="rounded-xl"
				/>
				<Image
					src="/assets/blue-dots.png"
					alt="hero"
					width={300}
					height={300}
					className="absolute -z-[1] -bottom-[3rem] -left-10"
				/>
			</div>
		</section>
	);
};
