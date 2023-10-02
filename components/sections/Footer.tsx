import { foobarLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full flex xl:h-[347px] sm:mt-16 justify-between items-start bg-primary p-10 lg:p-16 xl:p-24 text-white">
			<div className="flex items-center justify-center gap-2 mt-4">
				<Image
					src="/assets/foobar-logo.svg"
					alt="logo"
					width={28}
					height={28}
				/>
				<p className="font-bold text-[16px] font-Inter">HelpMeOut</p>
			</div>
			<div className="flex flex-col gap-3">
				<p className="font-Sora text-[16px] font-semibold">Menu</p>
				<div className="flex flex-col text-white/80 gap-2">
					{foobarLinks.menu.map((link) => (
						<Link href={link.link} key={link.id}>
							{link.label}
						</Link>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-3">
				<p className="font-Sora text-[16px] font-semibold">About us</p>
				<div className="flex flex-col text-white/80 gap-2">
					{foobarLinks.aboutUs.map((link) => (
						<Link href={link.link} key={link.id}>
							{link.label}
						</Link>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-3">
				<p className="font-Sora text-[16px] font-semibold">Screen Record</p>
				<div className="flex flex-col text-white/80 gap-2">
					{foobarLinks.screenRecord.map((link) => (
						<Link href={link.link} key={link.id}>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
