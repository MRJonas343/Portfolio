interface IconSkillProps {
	imgSrc: string
	altText: string
}

const IconSkill: React.FC<IconSkillProps> = ({ imgSrc, altText }) => {
	return (
		<div className="w-32 h-32 grid place-items-center SkillContainer rounded-md hover:scale-110 lg:w-44 lg:h-36 xl:w-52">
			<img className="w-14 h-14" src={imgSrc} alt={altText} />
		</div>
	)
}
export default IconSkill
