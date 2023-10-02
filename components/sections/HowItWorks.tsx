import { works } from "@/constants/constants";
import Image from "next/image";

export default function HowItWorks() {
	return (
		<section className="w-full flex-col flex justify-start items-center   gap-16">
			<div className="flex">
				<h1 className="font-bold sm:text-4xl font-Sora text-heading">
					How It Works
				</h1>
			</div>
			<div className="flex  w-full gap-6 lg:gap-8 justify-center flex-wrap xl:gap-16">
				{works.map((work) => (
					<div
						className="flex flex-col justify-center max-w-[358px]"
						key={work.id}
					>
						<div className="flex flex-col w-full items-center gap-4 mb-3">
							<p className="bg-primary p-2 px-5 text-white justify-center items-center flex rounded-full text-3xl">
								{work.id}
							</p>
							<p className="text-[17px] sm:text-[20px] font-Inter font-semibold text-[#1b233d]">
								{work.title}
							</p>
						</div>
						<div className="flex flex-col">
							<p className="text-[17px] sm:text-[20px] font-Work text-black/75 text-center">
								{work.desc}
							</p>
							<div>
								<Image
									src={work.image}
									alt="how-it-works-1"
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
