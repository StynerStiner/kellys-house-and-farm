/**
 * Developer: StynerDev
 * Dev Website: https://www.styner.dev/
 * Website URL: https://www.stynerdev.com/
 *
 * Copyright (c) 2026
 */

import {
	AboutUsDataProps,
	CTADataProps,
	FeatureDataProps,
	HeroDataProps,
	MetaDataProps,
	ServiceDataProps,
	TestimonialDataProps,
	ValueDataProps,
	WorkingProcessDataProps,
	WorksDataProps,
} from "@/app/types";
import AboutUsSection from "@/app/ui/Aboutus";
import CTASection from "@/app/ui/CTASection";
import FeatureSection from "@/app/ui/FeatureSection";
import HeroSection from "@/app/ui/Hero";
import ServicesSection from "@/app/ui/ServicesSection";
import TestimonialSection from "@/app/ui/TestimonialSection";
import ValueSection from "@/app/ui/ValueSection";
import WorkingProcessSection from "@/app/ui/WorkingProcess";
import WorksSection from "@/app/ui/WorksSection";

const CANTON = "/assets/img/keisha-images/canton";
const PHOTOS = "/assets/img/keisha-images";
const VENMO_URL = "https://account.venmo.com/u/Lekeisha-Simpson";

const heroData: HeroDataProps = {
	title: "KELLY’S HOUSE <br /><b>AND FARM</b>",
	subtitle:
		"“The time has come for seeds sown long ago by my ancestors to bring forth harvest.”",
	btnText1: "Our Story",
	btnUrl1: "#story",
	btnText2: "The Garden Now",
	btnUrl2: "#garden-now",
	funfact: {
		number: "May 2026",
		text: "Ground broken in Canton",
	},
	box: {
		title: "Canton, Mississippi",
		subtitle:
			"Family land where Henry and Rosie Lee Kelly kept their garden. The first season is in the ground.",
		link: "#garden-now",
	},
	backgrounds: [
		`${CANTON}/family-maypole.jpg`,
		`${CANTON}/2026-05-11-lawn.jpg`,
		`${CANTON}/breaking-ground.jpg`,
		`${CANTON}/2026-05-16-cannas.jpg`,
		`${CANTON}/okra-knee-high.jpg`,
	],
};

const valueData: ValueDataProps = {
	sectionTitle: "MISSION",
	values: [
		{ text: "Restore the land" },
		{ text: "Preserve the story" },
		{ text: "Grow food" },
		{ text: "Feed community" },
	],
};

const aboutData: AboutUsDataProps = {
	title: "OUR STORY",
	subtitle: "A HANDFUL <span>OF SEEDS</span>",
	introduction:
		"It began with a handful of seeds, a grandfather’s gift to Keisha as a child. The Kelly grandparents, Henry and Rosie Lee, kept a garden on family land in Canton, Mississippi. They grew corn, okra, peas, beans, tomatoes, peppers, watermelon, sweet potatoes, greens, squash and cucumbers.",
	introduction1:
		"After they passed, the garden went dormant. This spring the ground was tilled again and okra went in. Kelly’s House and Farm is bringing the garden back so the land can feed the surrounding community with fresh produce again.",
	image: `${PHOTOS}/IMG_0442.jpg`,
	imageAlt: "Keisha in the garden, holding an armful of just-pulled roots",
	imageWidth: 809,
	imageHeight: 1078,
	video: {
		videoUrl: "/assets/keisha-videos/breaking-ground-2026.mp4",
		backgroundImage: `${CANTON}/breaking-ground.jpg`,
	},
	cta: {
		backgroundImage: `${CANTON}/2026-05-17-shell-piece.jpg`,
		title: "",
		buttonText: "The Garden Now",
		buttonUrl: "#garden-now",
	},
};

const workingProcessData: WorkingProcessDataProps = {
	sectionTitle: "THE FIRST SEASON IS <span>IN THE GROUND</span>",
	subtitle: "THE GARDEN NOW",
	logo: "/assets/img/logo.svg",
	steps: [
		{
			title: "01 | A lawn in clover",
			description:
				"May 11, 2026. The yard as it was: the big tree, the smoker, the fire pit and the crossbar. Nothing planted yet.",
		},
		{
			title: "02 | Breaking ground",
			description:
				"A tractor tills the first bed, and the clods are broken up by hand with a hoe.",
		},
		{
			title: "03 | Cannas along the house",
			description: "May 16. Cannas go in along the house wall.",
		},
		{
			title: "04 | Cowrie shells",
			description:
				"May 17. A piece made by hand from strands of cowrie shells hangs from the crossbar.",
		},
		{
			title: "05 | Okra, knee high",
			description:
				"Okra stands knee high in ground that was lawn in May.",
		},
	],
};

const featureData: FeatureDataProps = {
	sectionTitle: "WHAT <span>COMES NEXT</span>",
	buttonText: "How to Help",
	buttonUrl: "#support",
	image: `${CANTON}/okra-knee-high.jpg`,
	imageWidth: 782,
	imageHeight: 1510,
	features: [
		{
			icon: "fa6-solid:droplet",
			title: "Water",
			description: "Install irrigation for the beds.",
		},
		{
			icon: "fa6-solid:sun",
			title: "A high tunnel",
			description: "Build a high tunnel to grow for more of the year.",
		},
		{
			icon: "fa6-solid:seedling",
			title: "Tools and seed",
			description:
				"Buy tools and grow food: the crops Keisha’s grandparents grew, back on the same land.",
		},
		{
			icon: "fa6-solid:people-group",
			title: "People and skills",
			description:
				"Pay staff, and learn the skills to run the garden well: growing, payroll and marketing.",
		},
	],
};

const servicesData: ServiceDataProps = {
	title: "YEARS OF GROWING",
	highlightedText: "",
	buttonText: "From the Harvest",
	buttonUrl: "#harvest",
	service: [
		{
			title: "WOOD CHIPS",
			subtitle: "Pitchfork in hand on a pile of wood chips, January 2020.",
			image: `${PHOTOS}/IMG_20200115_125203253_HDR.jpg`,
			link: "#harvest",
			tags: [{ label: "2020", url: "#growing" }],
			description: "",
		},
		{
			title: "CARROTS",
			subtitle: "Carrots pulled and bunched, October 2021.",
			image: `${PHOTOS}/IMG_0772.jpg`,
			link: "#harvest",
			tags: [{ label: "2021", url: "#growing" }],
			description: "",
		},
		{
			title: "SEEDLINGS",
			subtitle: "Trays of seedlings ready to go into the ground, September 2022.",
			image: `${PHOTOS}/IMG_2707.jpg`,
			link: "#harvest",
			tags: [{ label: "2022", url: "#growing" }],
			description: "",
		},
		{
			title: "ONIONS",
			subtitle: "Onions laid out after harvest, June 2025.",
			image: `${PHOTOS}/IMG_4026.jpg`,
			link: "#harvest",
			tags: [{ label: "June 2025", url: "#growing" }],
			description: "",
		},
		{
			title: "SUMMER HARVEST",
			subtitle: "A box of squash, zucchini and tomatoes, August 2025.",
			image: `${PHOTOS}/IMG_0041.jpg`,
			link: "#harvest",
			tags: [{ label: "August 2025", url: "#growing" }],
			description: "",
		},
	],
};

const fieldData: WorksDataProps = {
	title: "IN THE <span>FIELD</span>",
	subtitle: "GROWING",
	labels: { name: "GROWING", location: "" },
	slides: [
		{
			image: `${PHOTOS}/IMG_1237.jpg`,
			name: "KALE & LETTUCE",
			location: "",
			description: "Rows of kale next to red and green lettuce.",
		},
		{
			image: `${PHOTOS}/70415631473__B1FEF395-D4CF-4AA0-BE75-85121746AC68.jpg`,
			name: "LETTUCE ROWS",
			location: "",
			description: "Rows of lettuce coming up.",
		},
		{
			image: `${PHOTOS}/IMG_0270.jpg`,
			name: "SUNFLOWERS & CORN",
			location: "",
			description: "Sunflowers standing over a row of corn.",
		},
		{
			image: `${PHOTOS}/IMG_0273.jpg`,
			name: "AMARANTH",
			location: "",
			description: "Red amaranth in bloom among the squash.",
		},
		{
			image: `${PHOTOS}/IMG_2127.jpg`,
			name: "POPPIES",
			location: "",
			description: "California poppies and calendula along a bed.",
		},
	],
};

const testimonialData: TestimonialDataProps = {
	sectionTitle: "IN KEISHA’S WORDS",
	image: `${PHOTOS}/image000000.jpg`,
	imageAlt: "Keisha in a strawberry patch, tasting a strawberry",
	imageWidth: 812,
	imageHeight: 1078,
	testimonials: [
		{
			text: "“The time has come for <span>seeds</span> sown long ago by my <span>ancestors</span> to bring forth <span>harvest</span>.”",
			name: "LEKEISHA SIMPSON",
			designation: "On bringing the garden back",
			img: "",
		},
		{
			text: "“They grew all types of vegetables: corn, <span>okra</span>, peas, beans, tomatoes, peppers, watermelon, <span>sweet potatoes</span>, a variety of greens, squash, cucumbers.”",
			name: "LEKEISHA SIMPSON",
			designation: "On the grandparents’ garden",
			img: "",
		},
		{
			text: "“After they passed it’s been <span>dormant</span>. I recently planted <span>okra</span> in the spring.”",
			name: "LEKEISHA SIMPSON",
			designation: "On the garden today",
			img: "",
		},
	],
};

const worksData: WorksDataProps = {
	title: "FROM THE <span>HARVEST</span>",
	subtitle: "HARVEST",
	labels: { name: "HARVEST", location: "" },
	slides: [
		{
			image: `${PHOTOS}/IMG_0418.jpg`,
			name: "OKRA",
			location: "",
			description: "Okra, one of the crops Keisha’s grandparents grew.",
		},
		{
			image: `${PHOTOS}/IMG_0419.jpg`,
			name: "TOMATOES",
			location: "",
			description: "Tomatoes of every size and color.",
		},
		{
			image: `${PHOTOS}/007E050F-9348-4475-9945-34448CC7E479.jpg`,
			name: "BEANS",
			location: "",
			description: "Yellow, green and purple beans.",
		},
		{
			image: `${PHOTOS}/IMG_2917.jpg`,
			name: "SWEET POTATOES",
			location: "",
			description: "Sweet potatoes coming out of the ground.",
		},
		{
			image: `${PHOTOS}/IMG_0253.jpg`,
			name: "CABBAGE",
			location: "",
			description: "Cabbage by the crate.",
		},
		{
			image: `${PHOTOS}/IMG_2892.jpg`,
			name: "BEETS & CHARD",
			location: "",
			description: "Beets and chard, bunched.",
		},
		{
			image: `${PHOTOS}/IMG_0811.jpg`,
			name: "GREENS",
			location: "",
			description: "A table of greens.",
		},
		{
			image: `${PHOTOS}/IMG_0430.jpg`,
			name: "TOMATOES & SQUASH",
			location: "",
			description: "Trays of tomatoes, squash, cucumbers and peppers.",
		},
		{
			image: `${PHOTOS}/IMG_0213.jpg`,
			name: "PUMPKINS & PEPPERS",
			location: "",
			description: "Pumpkins, squash, tomatoes and peppers on the table.",
		},
		{
			image: `${PHOTOS}/IMG_0401.jpg`,
			name: "BEAN PODS",
			location: "",
			description: "A crate full of bean pods.",
		},
		{
			image: `${PHOTOS}/65514624768__A1521AB6-03A2-4816-9692-5AC4CDB7F980.jpg`,
			name: "GINGER & BITTER MELON",
			location: "",
			description: "Ginger, bitter melon and long beans.",
		},
		{
			image: `${PHOTOS}/IMG_1608.jpg`,
			name: "LETTUCE",
			location: "",
			description: "Heads of butter lettuce.",
		},
		{
			image: `${PHOTOS}/IMG_2878.jpg`,
			name: "SORGHUM",
			location: "",
			description: "Red and gold sorghum heads.",
		},
		{
			image: `${PHOTOS}/image000000.jpg`,
			name: "STRAWBERRIES",
			location: "",
			description: "A strawberry, straight from the patch.",
		},
		{
			image: `${PHOTOS}/IMG_0223.jpg`,
			name: "AN OFFERING",
			location: "",
			description: "A small offering in the field: Water Is Life.",
		},
	],
};

const ctaData: CTADataProps = {
	backgroundImage: `${CANTON}/2026-05-11-lawn-crossbar.jpg`,
	title: "HELP THE GARDEN <br /> GROW AGAIN",
	subtitle:
		"Gifts through Venmo go directly to Keisha and aren’t tax-deductible.",
	buttonText: "Give via Venmo",
	buttonUrl: VENMO_URL,
};

export const metadata: MetaDataProps = {
	title: "Kelly’s House and Farm",
};

export default function HomePage() {
	return (
		<>
			<HeroSection data={heroData} />
			<ValueSection data={valueData} />
			<div id="story" className="cs_anchor">
				<AboutUsSection data={aboutData} />
			</div>
			<div id="garden-now" className="cs_anchor">
				<WorkingProcessSection data={workingProcessData} />
			</div>
			<div id="next" className="cs_anchor">
				<FeatureSection data={featureData} />
			</div>
			<div id="growing" className="cs_anchor">
				<ServicesSection data={servicesData} />
			</div>
			<div id="field" className="cs_anchor">
				<WorksSection data={fieldData} />
			</div>
			<div id="keishas-words" className="cs_anchor">
				<TestimonialSection data={testimonialData} />
			</div>
			<div id="harvest" className="cs_anchor">
				<WorksSection data={worksData} />
			</div>
			<div id="support" className="cs_anchor">
				<CTASection data={ctaData} />
			</div>
		</>
	);
}
