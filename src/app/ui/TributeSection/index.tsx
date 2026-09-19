/**
 * Developer: StynerDev
 * Dev Website: https://www.styner.dev/
 * Website URL: https://www.stynerdev.com/
 *
 * Copyright (c) 2026
 */

import { TributeDataProps } from "@/app/types";
import Image from "next/image";
import { Fragment } from "react";

interface TributeSectionProps {
	data: TributeDataProps;
}

export default function TributeSection({ data }: TributeSectionProps) {
	return (
		<section className="cs_gray_bg">
			<div className="cs_height_100 cs_height_lg_70" />
			<div className="container">
				<div className="cs_section_heading cs_style_4 text-center">
					<h3
						className="cs_brackets_title cs_normal cs_fs_16 cs_mb_24"
						data-aos="fade-down"
					>
						{data.label}
					</h3>
					<h2
						className="cs_section_title cs_fs_80 mb-0"
						data-aos="fade-down"
						dangerouslySetInnerHTML={{ __html: data.title }}
					/>
				</div>
				<div className="cs_height_64 cs_height_lg_50" />
				<figure className="mb-0" data-aos="fade-up">
					<div className="cs_tribute_niche">
						<Image
							src={data.image}
							alt={data.imageAlt}
							width={data.imageWidth}
							height={data.imageHeight}
							className="w-100 h-auto"
						/>
					</div>
					{data.placard && (
						<figcaption className="cs_tribute_placard">
							{/* Wrap only between the "·"-separated parts */}
							{data.placard.split(" · ").map((part, i) => (
								<Fragment key={i}>
									{i > 0 && " · "}
									<span className="text-nowrap">{part}</span>
								</Fragment>
							))}
						</figcaption>
					)}
				</figure>
				<div className="cs_height_48 cs_height_lg_40" />
				<p className="cs_tribute_text cs_fs_20 cs_drop_cap mb-0">{data.text}</p>
				{data.dedication && (
					<>
						<div className="cs_height_48 cs_height_lg_40" />
						<p className="cs_tribute_dedication cs_fs_20 mb-0">{data.dedication}</p>
					</>
				)}
			</div>
			<div className="cs_height_100 cs_height_lg_70" />
		</section>
	);
}
