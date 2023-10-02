import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn("max-w-[1440px] w-full mx-auto px-2.5 md:px-20", className)}
		>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
