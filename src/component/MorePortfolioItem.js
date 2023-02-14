function MorePortfolioItem ({ link, imgSrc, imgAlt, title, subtitle }) {
  return (
    <>
      <a href={link} className="block dc-more-portfolio-item">
        <img src={imgSrc} alt={imgAlt} className="w-full aspect-[3/2]" />
        <div className="flex flex-col gap-y-1 py-3">
          <h3 className="font-medium text-3xl">{title}</h3>
          <p className="text-dc-gray">{subtitle}</p>
        </div>
      </a>
    </>
  )
}

export default MorePortfolioItem
