import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Olá!</h1>
				<h4>
					Meu nome é Jefferson sou um desenvolvedor Full-Stack especializado em
					desenvolvimento Front-End e Back-End.
				</h4>
				<Button as={AnchorLink} href="#contact">
					Contate-me
				</Button>
			</Details>
			<Thumbnail>
				<img
					src={dev}
					alt="Meu nome é Jefferson e sou um desenvolvedor Full-Stack especializado em desenvolvimento Front-End e Back-End."
				/>
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
