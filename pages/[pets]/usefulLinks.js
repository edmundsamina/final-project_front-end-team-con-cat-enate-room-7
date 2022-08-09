import React from "react";
import NavBar from "../../Components/navBar.js";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UsefulLinkCard from "../../Components/usefulLinkCard.js";
import InfoModal from "../../Components/modal.js";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

export async function getServerSideProps(context) {
	const id = context.params.pets;
	const response = await fetch(`${url}/pets?pet_id=${id}`);
	const data = await response.json();
	return { props: { pet: data.payload[0] } };
}

export default withPageAuthRequired(function UsefulLinks({ pet }) {
	const catUsefulLinks = [
		{
			title: "Find a Vet",
			link: "https://findavet.rcvs.org.uk/home/",
			text: "Click here to find an RCVS registered vet in your area.",
			image: require("../../public/catVet.jpg"),
			alt: "cat having it's nails clipped",
		},
		{
			title: "Emergency Symptoms Checker",
			link: "https://vethelpdirect.com/cat-symptom-checker/",
			text: "Click here to check if your cat needs to see a vet urgently.",
			image: require("../../public/sickCat.jpg"),
			alt: "cat lying on it's side",
		},
		{
			title: "Find a Cat Sitter",
			link: "https://uk.catinaflat.com/?campaignid=184690207&gclid=CjwKCAjw6MKXBhA5EiwANWLODO8kAhVh86vZo4XeKS1DHQT6LADDhBg4gXBko7mK4RVtu8LPaxEY0RoC_eYQAvD_BwE",
			text: "Click here to find cat sitter in your area.",
			image: require("../../public/catSitter.jpg"),
			alt: "cat receiving chin scratches",
		},
		{
			title: "Cat Health Advice",
			link: "https://www.cats.org.uk/help-and-advice/health",
			text: "Click here find general health advice provided by the Cat's Protection.",
			image: require("../../public/cat.jpg"),
			alt: "cat snacking",
		},
	];

	const dogUsefulLinks = [
		{
			title: "Find a Vet",
			link: "https://findavet.rcvs.org.uk/home/",
			text: "Click here to find an RCVS registered vet in your area.",
			image: require("../../public/dogVet.jpg"),
			alt: "dog on vet table",
		},
		{
			title: "Emergency Symptoms Checker",
			link: "https://vethelpdirect.com/dog-symptom-checker/",
			text: "Click here to check if your dog needs to see a vet urgently.",
			image: require("../../public/sickDog.jpg"),
			alt: "dog wrapped in a blanket",
		},
		{
			title: "Find a Dog Sitter",
			link: "https://www.borrowmydoggy.com/doggypedia/local-dog-sitting-boarding",
			text: "Click here to find dog sitter in your area.",
			image: require("../../public/dogSitter.jpg"),
			alt: "dog getting belly rubs",
		},
		{
			title: "Dog Health Advice",
			link: "https://www.dogstrust.org.uk/help-advice/dog-care/",
			text: "Click here find general health advice provided by the Dog's Trust.",
			image: require("../../public/dog.jpg"),
			alt: "dog running with a ball",
		},
	];

	if (pet.species === true) {
		return (
			<main className="links-page">
				<NavBar pet={pet} />
				<div className="m10">
					<InfoModal
						title="Useful Links- Info"
						text="Here you can find a selection of useful links for your pet if you are looking for a new vet, or a cat sitter or even if you are worried about some symptoms they have displayed."
					/>
					<h2 className="text-center">Useful Links</h2>
					<h2>{pet.name}</h2>
					{catUsefulLinks.map((link) => {
						return (
							<UsefulLinkCard
								key={link.title}
								href={link.link}
								title={link.title}
								src={link.image}
								alt={link.alt}
								text={link.text}
							/>
						);
					})}
				</div>
			</main>
		);
	}
	if (pet.species === false) {
		return (
			<main className="links-page">
				<NavBar pet={pet} />
				<div className="m10">
						<InfoModal
							title="Useful Links- Info"
							text="Here you can find a selection of useful links for your pet if you are looking for a new vet, or a dog sitter or even if you are worried about some symptoms they have displayed."
						/>
						<h2 className="text-center">Useful Links</h2>
						<h2>{pet.name}</h2>
						{dogUsefulLinks.map((link) => {
							return (
								<UsefulLinkCard
									key={link.title}
									href={link.link}
									title={link.title}
									src={link.image}
									alt={link.alt}
									text={link.text}
								/>
							);
						})}
					</div>
			</main>
		);
	}
});
