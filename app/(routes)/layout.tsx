import { ModeToggle } from "@/components/ModeToggle"

export default function RoutesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<div className="flex items-center justify-between px-4 py-3">
				<h1 className="text-xl font-black">
					<span className="dark:text-[#008970] text-[#99eedf]">
						Vin
					</span>
					<span className="text-[#008970] dark:text-[#99eedf]">
						Am
					</span>
					Coder
				</h1>
				<ModeToggle />
			</div>
			{children}
		</>
	)
}
