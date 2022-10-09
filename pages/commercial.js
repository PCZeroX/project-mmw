import Head from "next/head";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import {
	commercialImagesOne,
	commercialImagesTwo,
} from "../data/images";

const Commercial = () => {
	return (
		<div className="max-w-7xl mx-auto py-8">
			<Head>
				<title>Metalmania - Commercial</title>
			</Head>

			<div className="mx-4 space-y-8">
				<h1 className="text-center font-bold text-4xl">
					Commercial
				</h1>

				<Swiper
					style={{
						"--swiper-pagination-color": "#fff",
					}}
					loop={true}
					spaceBetween={16}
					modules={[Pagination, Autoplay]}
					pagination={{
						clickable: true,
					}}
					slidesPerView={1}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
					}}
				>
					{commercialImagesOne.map((image, index) => (
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
					spaceBetween={16}
					modules={[Pagination, Autoplay]}
					pagination={{
						clickable: true,
					}}
					slidesPerView={1}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
					}}
				>
					{commercialImagesTwo.map((image, index) => (
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
					src="/img/background/bg04.jpg"
					alt="Background 04"
					layout="fill"
					className="object-cover opacity-20"
				/>
			</div>
		</div>
	);
};

export default Commercial;
