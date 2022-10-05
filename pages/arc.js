import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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

const Arc = () => {
	return (
		<div className="max-w-7xl mx-auto py-8">
			<Head>
				<title>Metalmania - Arc</title>
			</Head>

			<h1 className="text-center font-bold text-4xl">
				Arc
			</h1>
			<Swiper>
				<SwiperSlide></SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Arc;
