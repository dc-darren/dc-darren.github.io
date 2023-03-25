import { useEffect, useState } from "react"
import MorePortfolioItem from "./component/MorePortfolioItem"

const InitData = () => {
  const imagesAssetsPath = "assets/images/"

  const destinationEmail = "darren.denisson@gmail.com"
  const emailSubject = "[dc-darren] - Add your subject"
  return {imagesAssetsPath, destinationEmail, emailSubject}
}

function App() {
  const data = InitData()

  const [projectCount, setProjectCount] = useState(0)

  const imgAsset = (path) => data.imagesAssetsPath + path

  var emailHrefString = `mailto:${data.destinationEmail}?`
  emailHrefString += `subject=${data.emailSubject}`

  useEffect(() => {
    setProjectCount(5)
  }, [])
  

  return (
    <>
      {/* Navbar */}
      <header className="bg-dc-white">
        <nav className="dc-container flex justify-between items-center text-dc-red px-5 sm:px-10 lg:px-20 py-4 lg:py-5">
          <h1><a href="/" className="font-bold text-base sm:text-lg lg:text-xl">dc-darren</a></h1>
          <ul className="hidden sm:flex items-center gap-10">
            <li><a href="#about" className="font-semibold text-sm lg:text-base">About</a></li>
            <li><a href="#portfolio" className="font-semibold text-sm lg:text-base">Portfolio</a></li>
            <li><a href={emailHrefString} className="btn-dc btn-dc-red-outline">Get in Touch</a></li>
          </ul>
          <button className="block sm:hidden text-base">&#9776;</button>
        </nav>
      </header>
      {/* End of Navbar */}

      {/* Body */}
      <main>
        {/* About */}
        <section id="about" className="bg-dc-light-gray">
          <div className="dc-container dc-grid items-center lg:gap-10 px-5 sm:px-10 lg:px-30 py-10 sm:py-16 lg:py-25">
            {/* <div className="col-span-12 lg:col-span-5 flex flex-col gap-1.5 sm:gap-2 lg:gap-3"> */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-1.5 sm:gap-2 lg:gap-3">
              <p className="dc-subheader text-lg lg:text-xl text-dc-red">Full-Stack Developer</p>
              <h2 className="dc-header text-4xl sm:text-5xl lg:text-6xl">Hi! I am Darren!</h2>
              <p className="flex-shrink-0 basis-1/2 text-sm sm:text-base lg:text-lg text-dc-gray">
                I enjoy building both front-end and back-end of websites.
                With the knowledge obtained from working experiences, formal college education, and attending online courses,
                I am able to deliver the final website product fulfilling the requirements of clients' needs.
              </p>
              <a href={emailHrefString} className="btn-dc btn-dc-red mt-2">Get in Touch</a>
            </div>
            {/* <img src={imgAsset("sample-image.png")} alt="Avatar" className="hidden lg:block col-start-7 col-span-6 w-full aspect-[15/11]" /> */}
            <div className="hidden lg:block relative col-start-7 col-span-6 w-full h-full mx-auto">
              <div className="absolute max-w-[300px] w-full h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-full">
                  <img src={imgAsset("waving-hand.svg")} alt="Waving Hand" className="absolute animate-dc-handwave" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of About */}

        {/* Portfolio Header */}
        <section id="portfolio" className="bg-dc-white">
          <div className="dc-container flex flex-col justify-between items-center gap-y-1 text-center px-5 py-10 sm:py-16 lg:py-25">
            <p className="dc-subheader text-xl text-dc-red">Portfolio</p>
            <h2 className="dc-header text-3xl lg:text-4xl">Projects Showcase</h2>
            <div className="dc-separator"></div>
          </div>
        </section>
        {/* End of Portfolio Header */}

        {/* Portfolio */}

        {/* Portfolio Image Left */}
        <section id="portfolio-1" className="bg-[#7A6657]">
          <div className="dc-container dc-grid items-center lg:gap-x-10 lg:px-30">
            {/* Image width 50% of screen = (col 1 till col 7) + (gap/2) */}
            {/* With grid applied, image width is also added with margin which is 120px */}
            <img  src={imgAsset("daddj-poster.png")} alt="Daddj Poster" className="col-span-12 lg:col-start-1 lg:col-end-7 lg:min-w-[calc(100%__+_(2.5rem/2)+_120px)] h-full aspect-[3/2] sm:aspect-[8/5] lg:aspect-[4/3] object-left object-cover shadow-xl shadow-dc-black/10 lg:-ml-30" />
            <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex flex-col gap-1.5 sm:gap-2 lg:gap-3 text-dc-white px-5 sm:px-10 pt-5 sm:pt-10 pb-6 sm:pb-12 lg:p-0">
              <p className="dc-subheader text-base sm:text-lg">API Fetching with React</p>
              <h2 className="dc-header text-3xl sm:text-4xl lg:text-5xl">Daddj</h2>
              <p className="flex-shrink-0 basis-1/2 text-sm sm:text-base">
                A simple website made with React, showing dad jokes fetched from a public API. Optimize the search feature to find a dad joke that fits your style.
              </p>
              <a href="https://dc-darren.github.io/daddj/" target="_blank" rel="noreferrer" className="btn-dc btn-dc-white-outline hover:text-[#7A6657] mt-2">Open Daddj</a>
            </div>
          </div>
        </section>
        {/* End of Portfolio Image Left */}

        {/* Portfolio Image Right */}
        <section id="portfolio-2" className="bg-[#113448]">
          {/* Grid reversed for image right */}
          <div className="dc-container dc-grid lg:direction-rtl justify-end items-center lg:gap-x-10 lg:px-30">
            {/* Image width 50% of screen = (col 1 till col 7) + (gap/2) */}
            {/* With grid applied, image width is also added with margin which is 120px */}
            <img  src={imgAsset("travelokie-poster.png")} alt="Travelokie Poster" className="col-span-12 lg:col-start-1 lg:col-end-7 lg:min-w-[calc(100%__+_(2.5rem/2)+_120px)] h-full aspect-[3/2] sm:aspect-[8/5] lg:aspect-[4/3] object-left object-cover shadow-xl shadow-dc-black/10 lg:-mr-30" />
            <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex flex-col lg:items-end gap-1.5 sm:gap-2 lg:gap-3 text-left text-dc-white px-5 sm:px-10 pt-5 sm:pt-10 pb-6 sm:pb-12 lg:p-0">
              <p className="dc-subheader text-base sm:text-lg">Hotel Booking with Laravel</p>
              <h2 className="dc-header text-3xl sm:text-4xl lg:text-5xl">Travelokie</h2>
              <p className="direction-ltr flex-shrink-0 basis-1/2 text-sm sm:text-base">
                Hotel booking system built with Laravel, which focuses on registration functionality of a hotel booking. Try out the simple way of booking a hotel within a few clicks.
              </p>
              <a href="http://sledge-hammer-fuses.000webhostapp.com/" target="_blank" rel="noreferrer" className="btn-dc btn-dc-white-outline hover:text-[#113448] mt-2">Open Travelokie</a>
            </div>
          </div>
        </section>
        {/* End of Portfolio Image Right */}

        {/* More Portfolio */}
        <section id="more-portfolio" className="bg-dc-light-gray">
          <div className="dc-container flex flex-col gap-y-5 sm:gap-y-10 lg:gap-y-15 px-5 sm:px-10 lg:px-30 py-10 sm:py-16 lg:py-25">
            <div className="flex flex-col justify-between items-center gap-y-1 text-center">
              <p className="dc-subheader text-xl text-dc-red">More Portfolio</p>
              <h2 className="dc-header text-3xl lg:text-4xl">Even More Projects</h2>
              <div className="dc-separator"></div>
            </div>
            <div className="dc-grid gap-4 sm:gap-x-5 sm:gap-y-6 lg:gap-10">
              <MorePortfolioItem link="#" imgSrc={imgAsset("sample-image.png")} imgAlt="More Portfolio Item" title="This is a title" subtitle="This is a subtitle" />
              <MorePortfolioItem link="#" imgSrc={imgAsset("sample-image.png")} imgAlt="More Portfolio Item" title="This is a title" subtitle="This is a subtitle" />
              <MorePortfolioItem link="#" imgSrc={imgAsset("sample-image.png")} imgAlt="More Portfolio Item" title="This is a title" subtitle="This is a subtitle" />
            </div>
          </div>
        </section>
        {/* End of More Portfolio */}

        {/* End of Portfolio */}

        {/* Inquiries */}
        <section id="inquiries" className="bg-dc-red text-dc-white">
          <div className="dc-container dc-grid items-center lg:gap-10 p-0 lg:px-30 lg:py-25">
            <div className="relative col-span-12 lg:col-span-6">
                <img src={imgAsset("sample-image.png")} alt="Avatar" className="w-full aspect-[3/2] sm:aspect-[8/5] lg:aspect-[15/11]" />
                <div className="absolute w-full h-full flex flex-col justify-center items-center font-inter text-dc-black top-0 left-0">
                    <p className="font-extrabold text-7xl sm:text-9xl">{String(projectCount).padStart(2, '0')}</p>
                    <p className="font-extrabold text-5xl sm:text-7xl mt-3">Projects</p>
                    <p className="font-medium mt-3">(and still counting...!)</p>
                </div>
            </div>
            <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex flex-col gap-1.5 sm:gap-2 lg:gap-3 px-5 sm:px-10 pt-5 sm:pt-10 pb-6 sm:pb-12 lg:p-0">
              <p className="dc-subheader text-lg lg:text-xl">Inquiries</p>
              <h2 className="dc-header text-4xl sm:text-5xl lg:text-6xl">Get in Touch</h2>
              <p className="flex-shrink-0 basis-1/2 text-sm sm:text-base lg:text-lg text-dc-white">
                Built {projectCount} projects so far and still on the run!
                Interested in getting your own website built like these?
                Don't hesitate to contact me for business inquiries through this button.
              </p>
              <a href={emailHrefString} className="btn-dc btn-dc-white mt-2">Get in Touch</a>
            </div>
          </div>
        </section>
        {/* End of Inquiries */}
      </main>
      {/* End of Body */}

      {/* Footer */}
      <footer className="bg-dc-black">
        <div className="dc-container dc-grid gap-5 lg:gap-10 text-xl text-dc-white px-5 sm:px-10 lg:px-30 py-10 sm:py-16 lg:py-25">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <a href="/" className="font-bold text-2xl sm:text-3xl lg:text-4xl">dc-darren</a>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mt-4 sm:mt-5 lg:mt-8">Made with ❤️</p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 sm:order-3 lg:order-2 pt-1">
            <p className="font-semibold text-lg sm:text-xl lg:text-2xl">Portfolio</p>
            <nav className="grid grid-cols-2 gap-x-1 sm:gap-x-5 lg:gap-x-10 gap-y-4 sm:gap-y-6 lg:gap-y-8 text-zinc-300 mt-4 sm:mt-5 lg:mt-8">
              <a href="https://dc-darren.github.io/daddj/" target="_blank" rel="noreferrer" className="w-fit text-base sm:text-lg lg:text-xl hover:text-dc-white dc-hover-effect">Daddj</a>
              <a href="http://sledge-hammer-fuses.000webhostapp.com/" target="_blank" rel="noreferrer" className="w-fit text-base sm:text-lg lg:text-xl hover:text-dc-white dc-hover-effect">Travelokie</a>
              <a href="#portfolio" target="_blank" rel="noreferrer" className="w-fit text-base sm:text-lg lg:text-xl hover:text-dc-white dc-hover-effect">Website</a>
              <a href="#portfolio" target="_blank" rel="noreferrer" className="w-fit text-base sm:text-lg lg:text-xl hover:text-dc-white dc-hover-effect">Website</a>
              <a href="#portfolio" target="_blank" rel="noreferrer" className="w-fit text-base sm:text-lg lg:text-xl hover:text-dc-white dc-hover-effect">Website</a>
            </nav>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 sm:order-2 lg:order-3 pt-1">
            <p className="font-semibold text-lg sm:text-xl lg:text-2xl">Channels</p>
            <nav className="flex flex-wrap gap-5 lg:gap-6 text-zinc-300 mt-4 sm:mt-5 lg:mt-8">
              <a href={emailHrefString} className="hover:text-dc-white dc-hover-effect">
                <img  src={imgAsset("email-light.svg")} alt="Email" className="w-12 lg:w-15" />
              </a>
              <a href="https://github.com/dc-darren" className="hover:text-dc-white dc-hover-effect">
                <img  src={imgAsset("github-light.svg")} alt="GitHub" className="w-12 lg:w-15" />
              </a>
              <a href="https://www.linkedin.com/in/darren-denisson/" className="hover:text-dc-white dc-hover-effect">
                <img  src={imgAsset("linkedin-light.svg")} alt="LinkedIn" className="w-12 lg:w-15" />
              </a>
            </nav>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </>
  );
}

export default App;
