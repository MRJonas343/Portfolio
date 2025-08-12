interface IconSkillProps {
	imgSrc: string
	altText: string
}

const IconSkill: React.FC<IconSkillProps> = ({ imgSrc, altText }) => {
	return (
		<div className="w-32 h-32 flex flex-col justify-center items-center SkillContainer rounded-md hover:scale-110 lg:w-44 lg:h-36 xl:w-52 gap-2">
			<img className="w-14 h-14" src={imgSrc} alt={altText} />
			<span className="text-white text-xs font-oswald text-center">
				{altText}
			</span>
		</div>
	)
}
export default IconSkill
