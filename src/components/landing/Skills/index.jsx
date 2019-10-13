import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
			<Details>
				<h1>Olá!</h1>
				<p>
					Trabalho com ReactJs, PWA, React Native, Flutter e API's em NodeJs
				</p>
				<Button as={AnchorLink} href="#contact">
					Contate-me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
