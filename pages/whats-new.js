import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

const whatsNewImages = [
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

const WhatsNew = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>{`Metalmania - What's New`}</title>
			</Head>

			<h1 className="text-center font-bold text-4xl">
				{`What's New`}
			</h1>

			<div className="absolute top-0 left-0 -z-10 opacity-20 w-full h-full">
				<Image
					src="/img/background/bg05.jpg"
					alt="Banner 06"
					layout="fill"
					className="object-cover object-center"
				/>
			</div>
		</div>
	);
};

export default WhatsNew;
