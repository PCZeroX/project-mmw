import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

import { bannerImages } from "../../data/images";

const BannerSlider = () => {
	return (
		<div className="h-screen w-full relative">
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-navigation-size": "3rem",

					"--swiper-pagination-color": "#fff",
					"--swiper-pagination-bullet-size": "0.75rem",
					"--swiper-pagination-bullet-width": "0.75rem",
					"--swiper-pagination-bullet-height": "0.75rem",
					"--swiper-pagination-bullet-inactive-color":
						"black",
					"--swiper-pagination-bullet-inactive-opacity":
						"0.5",
				}}
				className="h-full w-full opacity-40 select-none"
				effect={"fade"}
				speed={500}
				pagination={{
					clickable: true,
				}}
				loop={true}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
				}}
				modules={[EffectFade, Pagination, Autoplay]}
			>
				{bannerImages.map((banner, index) => (
					<SwiperSlide key={index}>
						<Image
							src={banner.src}
							alt={banner.name}
							layout="fill"
							className={`w-full h-full object-cover object-center`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="absolute w-full top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center select-none space-y-8">
				<h1 className="text-2xl lg:text-4xl xl:text-6xl font-semibold lg:tracking-wider tracking-tight">
					Custom Metal Fabrication
				</h1>
				<p className="text-sm lg:text-base xl:text-2xl">
					Stainless | Bass | Steel | Bronze | Zinc | Cooper
					| Galv Scroll
				</p>
			</div>
		</div>
	);
};

export default BannerSlider;
