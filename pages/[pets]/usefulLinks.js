import React from "react";
import NavBar from "../../Components/navBar.js";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UsefulLinkCard from "../../Components/usefulLinkCard.js";
import Image from "next/image";

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
			alt: "vet with cat",
			image: "/../public/catVet.jpeg",
		},
		{
			title: "Emergency Symptoms Checker",
			link: "https://vethelpdirect.com/cat-symptom-checker/",
			text: "Click here to check if your cat needs to see a vet urgently.",
			alt: "sick cat",
			image: "/../public/sickCat.jpeg",
		},
		{
			title: "Find a Cat Sitter",
			link: "https://uk.catinaflat.com/?campaignid=184690207&gclid=CjwKCAjw6MKXBhA5EiwANWLODO8kAhVh86vZo4XeKS1DHQT6LADDhBg4gXBko7mK4RVtu8LPaxEY0RoC_eYQAvD_BwE",
			text: "Click here to find cat sitter in your area.",
			alt: "cat sitter with cat",
			image: "/../public/catSitter.jpeg",
		},
		{
			title: "Cat Health Advice",
			link: "https://www.cats.org.uk/help-and-advice/health",
			text: "Click here find general health advice provided by the Cat's Protection.",
			alt: "happy cat",
			image: "/../public/cat.jpeg",
		},
	];

  	const dogUsefulLinks = [
			{
				title: "Find a Vet",
				link: "https://findavet.rcvs.org.uk/home/",
				text: "Click here to find an RCVS registered vet in your area.",
				alt: "vet with dog",
				image: "/../public/dogVet.jpeg",
			},
			{
				title: "Emergency Symptoms Checker",
				link: "https://vethelpdirect.com/dog-symptom-checker/",
				text: "Click here to check if your dog needs to see a vet urgently.",
				alt: "sick dog",
				image: "/../public/sickDog.jpeg",
			},
			{
				title: "Find a Dog Sitter",
				link: "https://www.borrowmydoggy.com/doggypedia/local-dog-sitting-boarding/affordable-dog-sitting-at-home-dog-boarding-manchester",
				text: "Click here to find dog sitter in your area.",
				alt: "cat sitter with dog",
				image: "/../public/dogSitter.jpeg",
			},
			{
				title: "Dog Health Advice",
				link: "https://www.dogstrust.org.uk/help-advice/dog-care/",
				text: "Click here find general health advice provided by the Dog's Trust.",
				alt: "happy dog",
				image: "/../public/dog.jpeg",
			},
		];

	console.log(catUsefulLinks);
  if (pet.species === true) {
	return (
		<main className="links-page">
			<NavBar pet={pet} />
			<div>
				{catUsefulLinks.map((link) => {
					return (
						<UsefulLinkCard
							key={link.title}
							href={link.link}
							title={link.title}
							src={link.image}
							alt=""
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
						<div>
							{dogUsefulLinks.map((link) => {
								return (
									<UsefulLinkCard
										key={link.title}
										href={link.link}
										title={link.title}
										src={link.image}
										alt=""
										text={link.text}
									/>
								);
							})}
						</div>
					</main>
				);
			}
});
