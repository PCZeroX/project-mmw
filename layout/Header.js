import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

const NavLinks = [
	{ name: "Arc", href: "/arc" },
	{ name: "What's New", href: "/whats-new" },
	{ name: "Residential", href: "/residential" },
	{ name: "Commercial", href: "/commercial" },
	{ name: "Contact Us", href: "/contact-us" },
];

const Header = () => {
	const router = useRouter();

	const [prevScrollPosY, setPrevScrollPosY] = useState(0);
	const [visible, setVisible] = useState(true);
	const [open, setOpen] = useState(false);

	const effectRan = useRef(false);

	const handleScrollY = () => {
		const currentScrollPosY = window.scrollY;

		if (currentScrollPosY <= 0) {
			setPrevScrollPosY(0);
		}

		if (currentScrollPosY > prevScrollPosY) {
			setVisible(false);
		}

		if (currentScrollPosY < prevScrollPosY) {
			setVisible(true);
		}

		setPrevScrollPosY(currentScrollPosY);
	};

	useEffect(() => {
		if (effectRan.current === true) {
			window.addEventListener("scroll", handleScrollY);
		}

		return () => {
			effectRan.current = true;

			window.removeEventListener("scroll", handleScrollY);
		};
	}, [prevScrollPosY, router.pathname]);

	return (
		<>
			<header
				className={`${
					router?.pathname === "/"
						? `fixed w-full col-span-4 top-0 left-0 z-50 duration-500 transition ${
								prevScrollPosY
									? visible
										? "translate-y-0 bg-gray-800 bg-opacity-100 drop-shadow-[0_0px_2px_rgba(255,255,255,0.5)]"
										: "-translate-y-full"
									: open
									? "bg-gray-800"
									: "bg-opacity-0 translate-y-0 drop-shadow-[0_0px_2px_rgba(255,255,255,0.5)]"
						  }`
						: `sticky top-0 col-span-4 duration-500 z-50 transition ${
								prevScrollPosY > 0
									? visible
										? "translate-y-0 bg-gray-800 bg-opacity-100 drop-shadow-[0_0px_2px_rgba(255,255,255,0.5)]"
										: "-translate-y-full"
									: "translate-y-0 bg-gray-800 drop-shadow-[0_0px_2px_rgba(255,255,255,0.5)]"
						  }`
				}`}
			>
				<div className="max-w-7xl mx-auto">
					<nav
						className={`flex justify-between items-center h-14 mx-4`}
					>
						<Link href="/">
							<a
								onClick={() => setOpen(false)}
								className="font-semibold text-lg md:text-xl xl:text-2xl"
							>
								MetalMania
							</a>
						</Link>

						<ul className="flex items-center gap-4 lg:gap-12">
							<li>
								<a
									href="https://es-la.facebook.com/profile.php?id=100054525247624"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaFacebookF className="h-5 w-5 duration-500 hover:scale-125 hover:text-cyan-500" />
								</a>
							</li>

							<li>
								<a
									href="https://twitter.com/MetalmaniaWorks"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaTwitter className="h-5 w-5 duration-500 hover:scale-125 hover:text-cyan-500" />
								</a>
							</li>

							<li>
								<a
									href="https://instagram.com/metalmaniaworks"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaInstagram className="h-6 w-6 duration-500 hover:scale-125 hover:text-cyan-500" />
								</a>
							</li>
						</ul>

						<div className="flex justify-center items-center">
							<ul
								className={`flex md:gap-8 lg:font-bold

								mdTo:flex-col

								mdTo:absolute
								mdTo:w-full
								mdTo:left-0
								mdTo:top-14
								mdTo:py-4
								mdTo:-z-50
								mdTo:bg-opacity-0

								mdTo:transition-[transform,opacity]
								mdTo:duration-500

								mdTo:overflow-hidden

								${
									open
										? "mdTo:translate-y-0 mdTo:bg-opacity-100"
										: "mdTo:-translate-y-full mdTo:delay-500 mdTo:bg-opacity-100"
								}

								${
									prevScrollPosY === 0
										? open
											? "mdTo:bg-gray-800"
											: "mdTo:-translate-y-full mdTo:delay-500 mdTo:bg-opacity-100"
										: "mdTo:bg-gray-800"
								}

						`}
							>
								{NavLinks.map((link, index) => (
									<Link key={index} href={link.href}>
										<li
											className={`
                    mdTo:not-last-of-type:border-b
                    mdTo:not-last-of-type:border-opacity-25
                    mdTo:not-last-of-type:border-b-slate-400
                    mdTo:transition-[transform,opacity]
                    mdTo:duration-500

                    ${
											open
												? `mdTo:translate-y-0 mdTo:opacity-100 active-menu-item`
												: "mdTo:-translate-y-full mdTo:opacity-0 not-active-menu-item"
										}
                `}
										>
											<a
												onClick={() => setOpen(!open)}
												className={`block mdTo:p-4 duration-200 hover:text-cyan-300 mdTo:hover:bg-gray-900 cursor-pointer

										${
											open
												? `mdTo:translate-y-0 mdTo:opacity-100 active-menu-item`
												: "mdTo:-translate-y-full mdTo:opacity-0 not-active-menu-item"
										}

										`}
											>
												{link.name}
											</a>
										</li>
									</Link>
								))}
							</ul>

							<button
								onClick={() => setOpen(!open)}
								className={`menu-button md:hidden`}
							>
								{open ? (
									<>
										<span className="line -rotate-45 translate-y-2"></span>
										<span className="line opacity-0 translate-x-3"></span>
										<span className="line rotate-45 -translate-y-2 xl:bg-green-500"></span>
									</>
								) : (
									<>
										<span className="line"></span>
										<span className="line"></span>
										<span className="line"></span>
									</>
								)}
							</button>
						</div>
					</nav>
				</div>
			</header>

			<div
				onClick={() => setOpen(!open)}
				className={`${
					open
						? "main-overlay mdTo:bg-[rgba(0,0,0,0.5)]"
						: "main-overlay mdTo:pointer-events-none"
				}`}
			></div>
		</>
	);
};

export default Header;
