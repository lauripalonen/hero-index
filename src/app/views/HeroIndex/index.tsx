import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { ThumbnailCard } from '../../components/ThumbnailCard';
import { HeroCard } from '../../components/HeroCard'

const HEROES_QUERY = gql`
	query {
		heroes {
			name
			imgUrl
			description
			backStory
			attributes {
				strength
				intelligence
				stamina
				healthpoints
				mana
				agility
				speed
				resistance
				weakness
			}
			skills {
				name
				damage
				element
			}
		}
	}
`;

interface IHeroIndexProps { }

const HeroCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 50px;
	align-self: center;
	max-width: 1150px;
	@media (min-width: 1400px) {
		margin-left: auto;
		margin-right: auto;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;



const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
	const [heroDisplay, setHeroDisplay] = React.useState(<div></div>)
	const { data, error, loading } = useQuery(HEROES_QUERY);

	if (error) {
		return handleError(error.message);
	}

	if (loading) {
		return handleLoading();
	}

	const handleDisplayChange = (event: React.MouseEvent, name: string) => {
		event.preventDefault();
		const heroProps = data.heroes.find(hero => hero.name === name)

		setHeroDisplay(heroProps ? <HeroCard {...heroProps} handleDisplayChange={handleDisplayChange} /> : <div></div>)
	}

	return (
		<main>
			<TopBar />
			<Hero />
			<Section
				heading={'Hunter Index'}
				paragraph={`
          Hunter Index -tool by Professor Hoax. Click a hero to learn more!
        `}
			/>
			<HeroCardContainer>
				{data.heroes.map((hero) => (
					<ThumbnailCard key={hero.name} {...hero} handleDisplayChange={handleDisplayChange} />
				))}
			</HeroCardContainer>
			<Footer />
			{heroDisplay}
		</main>
	);
};
