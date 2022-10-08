import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";

import {
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

import {
	FaArrowAltCircleLeft,
	FaArrowAltCircleRight,
} from "react-icons/fa";

const arcImages = [
	{
		name: "Banner 1",
		src: "/img/banners/banner01.jpg",
	},
	{
		name: "Banner 2",
		src: "/img/banners/banner02.jpg",
	},
	{
		name: "Banner 3",
		src: "/img/banners/banner03.jpg",
	},
	{
		name: "Banner 4",
		src: "/img/banners/banner04.jpg",
	},
];

let autoplay = true;
let speed = 500;
let interval = 5000;

const Arc = () => {
	const images = [
		{ name: "img1", src: "/img/1.jpg" },
		{ name: "img2", src: "/img/2.jpg" },
		{ name: "img3", src: "/img/3.jpg" },
		{ name: "img4", src: "/img/4.jpg" },
	];

	const slideshow = useRef(null);
	const intervalSlideshow = useRef(null);

	const effectRan = useRef(false);

	const nextButton = useCallback(() => {
		if (slideshow.current.children.length > 0) {
			console.log("Next");

			// Obtenemos el primer elemento del slideshow.
			const firstElement = slideshow.current.children[0];

			const widthSlide =
				slideshow.current.children[0].offsetWidth;

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${speed}ms ease-out all`;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

			const transition = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = "none";
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(firstElement);

				slideshow.current.removeEventListener(
					"transitionend",
					transition
				);
			};

			slideshow.current.addEventListener(
				"transitionend",
				transition
			);
		}
	}, [speed]);

	const previousButton = () => {
		if (slideshow.current.children.length > 0) {
			console.log("Previous");

			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const lastElement = slideshow.current.children[index];

			// inserBefore nos permite insertar un elemento antes de otro elemento como firstChild del slideshow
			slideshow.current.insertBefore(
				lastElement,
				slideshow.current.firstChild
			);

			slideshow.current.style.transition = "none";
			const widthSlide =
				slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${widthSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${speed}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};

	useEffect(() => {
		if (effectRan.current === true && autoplay) {
			intervalSlideshow.current = setInterval(() => {
				nextButton();
			}, interval);

			// Eliminamos los intervalos
			slideshow.current.addEventListener(
				"mouseenter",
				() => {
					clearInterval(intervalSlideshow.current);
				}
			);

			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			slideshow.current.addEventListener(
				"mouseleave",
				() => {
					intervalSlideshow.current = setInterval(() => {
						nextButton();
					}, interval);
				}
			);
		}

		return () => {
			effectRan.current = true;
		};
	}, [autoplay, nextButton]);

	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>Metalmania - Arc</title>
			</Head>

			<div className="mx-4">
				<h1 className="text-center font-bold text-4xl">
					Productos Destacados
				</h1>

				<div className="relative overflow-hidden">
					<div
						className="flex duration-300"
						ref={slideshow}
					>
						{images.map((image, index) => (
							<div
								key={index}
								className="min-w-full z-50 relative"
							>
								<a
									// className="block relative w-[1280px] h-[240px]"
									// className="block relative w-[1280px] h-[240px]"
									href="#"
									className=""
								>
									<img
										src={image.src}
										alt={image.name}
										className="w-full align-top"
										// width={1280}
										// height={240}
									/>
								</a>
								<p className="bg-black/50 text-white w-full text-center py-2 absolute bottom-0 mdTo:relative mdTo:bg-black">
									15% descuento en productos Apple
								</p>
							</div>
						))}
					</div>

					<div className="absolute top-0 left-0 z-50 w-full h-full pointer-events-none">
						<button
							className="pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 w-10 h-full hover:text-yellow-400 duration-300 hover:bg-black/30"
							onClick={previousButton}
						>
							<FaArrowAltCircleLeft className="w-full h-full" />
						</button>

						<button
							className="pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 w-10 h-full hover:text-yellow-400 duration-300 hover:bg-black/30"
							onClick={nextButton}
						>
							<FaArrowAltCircleRight className="w-full h-full" />
						</button>
					</div>
				</div>

				<div className="fixed w-full min-h-screen -z-50 top-0 left-0 bottom-0 right-0">
					<Image
						src="/img/background/bg07.jpg"
						alt="Banner 07"
						layout="fill"
						className="object-cover opacity-30"
					/>
				</div>
			</div>
		</div>
	);
};

export default Arc;
