import { features } from "@/constants/constants";
import Image from "next/image";

export default function Features() {
	return (
		<section className="w-full flex-col-reverse sm:flex-col flex justify-start items-center  xl:h-[777px] gap-16">
			<div className="flex flex-col w-full gap-3  items-center justify-center">
				<h1 className="font-bold sm:text-4xl font-Sora text-heading">
					Features
				</h1>
				<p className="text-[17px] sm:text-[20px] font-Work text-black/75">
					Key Highlights of Our Extension
				</p>
			</div>
			<div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap w-full gap-10 items-center mb-8 sm:mb-16 lg:mb-24">
				<div className="flex flex-col gap-8 w-full max-w-[548px] ">
					{features.map((feature) => (
						<div className="flex gap-3 w-full  " key={feature.id}>
							<div className="flex h-9 p-[5px] w-9 rounded-full items-center justify-center bg-primary/75">
								<Image src={feature.icon} alt="hero" width={30} height={30} />
							</div>
							<div className="flex flex-col w-full gap-3">
								<h2 className="font-semibold text-2xl font-Inter text-[#1b233d]">
									{feature.title}
								</h2>
								<p className="text-[17px] sm:text-[20px] font-Work text-black/75">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="flex h-full w-full max-w-[600px]">
					<Image
						src={"/assets/video-illustration.png"}
						alt="hero"
						width={1000}
						height={1000}
					/>
				</div>
			</div>
		</section>
	);
}
