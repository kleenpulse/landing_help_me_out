import Image from "next/image";

export const Nav = () => {
	return (
		<nav className="flex w-full justify-between p-8 shadow-nav">
			<div className="flex items-center gap-2">
				<Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
				<p className="font-bold text-[16px] font-Inter">HelpMeOut</p>
			</div>
			<div className="flex items-center gap-8">
				<p className="font-medium text-[16px] font-Work">Features</p>
				<p className="font-medium text-[16px] font-Work">How It Works</p>
			</div>
			<div className="flex">
				<button className="font-medium text-[16px] font-Work">
					Get Started
				</button>
			</div>
		</nav>
	);
};
