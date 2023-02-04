function App() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-dc-white">
        <nav className="dc-container flex justify-between items-center text-dc-red px-5 sm:px-10 lg:px-20 py-4 lg:py-5">
          <h1><a href="/" className="font-bold text-base sm:text-lg lg:text-xl">dc-darren</a></h1>
          <ul className="hidden sm:flex items-center gap-10">
            <li><a href="#about" className="font-semibold text-sm lg:text-base">About</a></li>
            <li><a href="#portfolio" className="font-semibold text-sm lg:text-base">Portfolio</a></li>
            <li><a href="#getInTouch" className="btn-dc btn-dc-red-outline">Get in Touch</a></li>
          </ul>
          <button href="#" className="block sm:hidden text-base">&#9776;</button>
        </nav>
      </header>
      {/* End of Navbar */}

      {/* Body */}
      <main>
        {/* About */}
        <section id="about" className="bg-dc-light-gray">
          <div className="dc-container dc-grid items-center gap-10 px-5 sm:px-10 lg:px-30 py-10 sm:py-16 lg:py-25">
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-1.5 sm:gap-2 lg:gap-3">
              <p className="dc-subheader text-lg lg:text-xl text-dc-red">Full-Stack Developer</p>
              <h2 className="dc-header text-4xl sm:text-5xl lg:text-6xl">Hi! I am Darren!</h2>
              <p className="flex-shrink-0 basis-1/2 text-sm sm:text-base lg:text-xl text-dc-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                A ornare tincidunt egestas adipiscing. Sed lacus aliquam sit amet sem.
                Lacus ut ultricies nam enim. Ac aenean ut amet augue.
                Nibh facilisi proin cursus porta tempor, non. Diam.
              </p>
              <a href="#getInTouch" className="btn-dc btn-dc-red mt-2">Get in Touch</a>
            </div>
            <img src="assets/images/sample-image.png" alt="Avatar" className="hidden lg:block col-start-7 col-span-6 w-full aspect-[15/11]" />
          </div>
        </section>
        {/* End of About */}

        {/* Portfolio Header */}
        <section id="portfolio" className="bg-dc-white">
          <div className="dc-container flex flex-col justify-between items-center gap-1 py-10 sm:py-16 lg:py-25">
            <p className="dc-subheader text-xl text-dc-red">This is a subheader</p>
            <h2 className="dc-header text-3xl lg:text-4xl">This is a header</h2>
            <div className="dc-separator"></div>
          </div>
        </section>
        {/* End of Portfolio Header */}

        {/* Portfolio */}

        {/* Portfolio Image Left */}
        <section id="portfolio-1" className="bg-[#7A6657]">
          <div className="dc-container dc-grid items-center gap-x-10 lg:px-30">
            {/* Image width 50% of screen = (col 1 till col 7) + (gap/2) */}
            {/* With grid applied, image width is also added with margin which is 120px */}
            <img src="assets/images/daddj-poster.png" alt="Daddj Poster" className="col-span-12 lg:col-start-1 lg:col-end-7 lg:min-w-[calc(100%__+_(2.5rem/2)+_120px)] h-full aspect-[3/2] sm:aspect-[8/5] lg:aspect-[4/3] object-left object-cover shadow-xl shadow-dc-black/10 lg:-ml-30" />
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
          <div className="dc-container dc-grid lg:direction-rtl justify-end items-center gap-x-10 lg:px-30">
            {/* Image width 50% of screen = (col 1 till col 7) + (gap/2) */}
            {/* With grid applied, image width is also added with margin which is 120px */}
            <img src="assets/images/travelokie-poster.png" alt="Travelokie Poster" className="col-span-12 lg:col-start-1 lg:col-end-7 lg:min-w-[calc(100%__+_(2.5rem/2)+_120px)] h-full aspect-[3/2] sm:aspect-[8/5] lg:aspect-[4/3] object-left object-cover shadow-xl shadow-dc-black/10 lg:-mr-30" />
            <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex flex-col lg:items-end gap-1.5 sm:gap-2 lg:gap-3 text-left text-dc-white px-5 sm:px-10 pt-5 sm:pt-10 pb-6 sm:pb-12 lg:p-0">
              <p className="dc-subheader text-base sm:text-lg">Hotel Booking with Laravel</p>
              <h2 className="dc-header text-3xl sm:text-4xl lg:text-5xl">Travelokie</h2>
              <p className="direction-ltr flex-shrink-0 basis-1/2 text-sm sm:text-base">
                Hotel booking system built with Laravel, which focuses on registration functionality of a hotel booking. Try out the simple way of booking a hotel in a few clicks.
              </p>
              <a href="http://sledge-hammer-fuses.000webhostapp.com/" target="_blank" rel="noreferrer" className="btn-dc btn-dc-white-outline hover:text-[#113448] mt-2">Open Travelokie</a>
            </div>
          </div>
        </section>
        {/* End of Portfolio Image Right */}

        {/* More Portfolio */}
        <section id="more-portfolio" className="bg-dc-light-gray">
          <div className="dc-container flex flex-col gap-5 sm:gap-10 lg:gap-15 px-5 sm:px-10 lg:px-30 py-10 sm:py-16 lg:py-25">
            <div className="flex flex-col justify-between items-center gap-1">
              <p className="dc-subheader text-xl text-dc-red">This is a subheader</p>
              <h2 className="dc-header text-3xl lg:text-4xl">This is a header</h2>
              <div className="dc-separator"></div>
            </div>
            <div className="dc-grid gap-4 sm:gap-x-5 sm:gap-y-6 lg:gap-10">
              {/* More Portfolio Item */}
              <a href="#portfolio-3" className="block dc-more-portfolio-item-span">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-4" className="block dc-more-portfolio-item-span">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-5" className="block dc-more-portfolio-item-span">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-6" className="block dc-more-portfolio-item-span">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-7" className="hidden lg:block dc-more-portfolio-item-span">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-8" className="hidden lg:block dc-more-portfolio-item-span">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* End of More Portfolio */}

        {/* End of Portfolio */}

        {/* Emphasis */}
        <section id="emphasis" className="bg-dc-red text-dc-white">
          <div className="dc-container dc-grid items-center lg:gap-10 p-0 lg:px-30 lg:py-25">
            <div className="relative col-span-12 lg:col-span-6">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2] sm:aspect-[8/5] lg:aspect-[15/11]" />
                <div className="absolute w-full h-full flex flex-col justify-center items-center font-inter text-dc-black top-0 left-0">
                    <p className="font-extrabold text-7xl sm:text-9xl">01</p>
                    <p className="font-extrabold text-5xl sm:text-7xl mt-3 sm:mt-8">A text here</p>
                </div>
            </div>
            <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex flex-col gap-1.5 sm:gap-2 lg:gap-3 px-5 sm:px-10 pt-5 sm:pt-10 pb-6 sm:pb-12 lg:p-0">
              <p className="dc-subheader text-lg lg:text-xl">This is a subheader</p>
              <h2 className="dc-header text-4xl sm:text-5xl lg:text-6xl">This is a header</h2>
              <p className="flex-shrink-0 basis-1/2 text-sm sm:text-base lg:text-xl text-dc-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                A ornare tincidunt egestas adipiscing. Sed lacus aliquam sit amet sem.
                Lacus ut ultricies nam enim. Ac aenean ut amet augue.
                Nibh facilisi proin cursus porta tempor, non. Diam.
              </p>
              <a href="#getInTouch" className="btn-dc btn-dc-white mt-2">Button</a>
            </div>
          </div>
        </section>
        {/* End of Emphasis */}
      </main>
      {/* End of Body */}

      {/* Footer */}
      <footer className="bg-dc-black">
        <div className="dc-container dc-grid gap-5 lg:gap-10 text-xl text-dc-white px-5 sm:px-10 lg:px-30 py-10 sm:py-16 lg:py-25">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <a href="/" className="font-bold text-2xl sm:text-3xl lg:text-4xl">dc-darren</a>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mt-4 sm:mt-5 lg:mt-8">Made with ❤️</p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 md:order-3 lg:order-2 pt-1">
            <p className="font-semibold text-lg sm:text-xl lg:text-2xl">Portfolio</p>
            <nav className="grid grid-cols-2 gap-x-1 sm:gap-x-5 lg:gap-x-10 gap-y-4 sm:gap-y-6 lg:gap-y-8 text-zinc-300 mt-4 sm:mt-5 lg:mt-8">
              <a href="#portfolio" className="text-base sm:text-lg lg:text-xl">Website</a>
              <a href="#portfolio" className="text-base sm:text-lg lg:text-xl">Website</a>
              <a href="#portfolio" className="text-base sm:text-lg lg:text-xl">Website</a>
              <a href="#portfolio" className="text-base sm:text-lg lg:text-xl">Website</a>
              <a href="#portfolio" className="text-base sm:text-lg lg:text-xl">Website</a>
              <a href="#portfolio" className="text-base sm:text-lg lg:text-xl">Website</a>
            </nav>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 md:order-2 lg:order-3 pt-1">
            <p className="font-semibold text-lg sm:text-xl lg:text-2xl">Contacts</p>
            <nav className="flex flex-wrap gap-5 lg:gap-6 mt-4 sm:mt-5 lg:mt-8">
              <a href="#contact">
                <img src="assets/images/sample-image.png" alt="Contact" className="w-12 lg:w-15" />
              </a>
              <a href="#contact">
                <img src="assets/images/sample-image.png" alt="Contact" className="w-12 lg:w-15" />
              </a>
              <a href="#contact">
                <img src="assets/images/sample-image.png" alt="Contact" className="w-12 lg:w-15" />
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
