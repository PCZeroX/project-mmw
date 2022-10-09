import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Image from "next/image";

import { arcImagesOne, arcImagesTwo } from "../data/images";

const Arc = () => {
	return (
		<div className="max-w-7xl mx-auto py-8">
			<Head>
				<title>Metalmania - Arc</title>
			</Head>

			<div className="mx-4 space-y-8">
				<h1 className="text-center font-bold text-4xl">
					Arc
				</h1>

				<Swiper
					style={{
						"--swiper-pagination-color": "#fff",
					}}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					slidesPerView={1}
					spaceBetween={16}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
					}}
				>
					{arcImagesOne.map((image, index) => (
						<SwiperSlide key={index}>
							<Image
								src={image.src}
								alt={image.name}
								width={1280}
								height={720}
								className="object-cover rounded-sm select-none"
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<Swiper
					style={{
						"--swiper-pagination-color": "#fff",
					}}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					slidesPerView={1}
					spaceBetween={16}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
					}}
				>
					{arcImagesTwo.map((image, index) => (
						<SwiperSlide key={index}>
							<Image
								src={image.src}
								alt={image.name}
								width={1280}
								height={720}
								className="object-cover rounded-sm select-none"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="fixed w-full min-h-screen -z-50 top-0 left-0 bottom-0 right-0">
				<Image
					src="/img/background/bg06.jpg"
					alt="Banner 06"
					layout="fill"
					className="object-cover opacity-30"
				/>
			</div>
		</div>
	);
};

export default Arc;
