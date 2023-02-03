function App() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-dc-white">
        <nav className="dc-container flex justify-between items-center text-dc-red px-20 py-5">
          <h1><a href="/" className="font-bold text-xl">dc-darren</a></h1>
          <ul className="flex items-center gap-10">
            <li><a href="#about" className="font-semibold">About</a></li>
            <li><a href="#portfolio" className="font-semibold">Portfolio</a></li>
            <li><a href="#getInTouch" className="btn-desktop btn-dc-red-outline">Get in Touch</a></li>
          </ul>
        </nav>
      </header>
      {/* End of Navbar */}

      {/* Body */}
      <main>
        {/* About */}
        <section id="about" className="bg-dc-light-gray">
          <div className="dc-container dc-grid items-center gap-10 px-30 py-25">
            <div className="col-span-5 flex flex-col gap-3">
              <p className="dc-subheader text-xl text-dc-red">Full-Stack Developer</p>
              <h2 className="dc-header text-6xl">Hi! I am Darren!</h2>
              <p className="flex-shrink-0 basis-1/2 text-xl text-dc-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                A ornare tincidunt egestas adipiscing. Sed lacus aliquam sit amet sem.
                Lacus ut ultricies nam enim. Ac aenean ut amet augue.
                Nibh facilisi proin cursus porta tempor, non. Diam.
              </p>
              <a href="#getInTouch" className="btn-desktop btn-dc-red mt-2">Get in Touch</a>
            </div>
            <img src="assets/images/sample-image.png" alt="Avatar" className="col-start-7 col-span-6 w-full aspect-[15/11]" />
          </div>
        </section>
        {/* End of About */}

        {/* Portfolio Header */}
        <section id="portfolio" className="bg-dc-white">
          <div className="dc-container flex flex-col justify-between items-center py-25">
            <p className="dc-subheader text-xl text-dc-red">This is a subheader</p>
            <h2 className="dc-header text-4xl">This is a header</h2>
            <div className="dc-separator"></div>
          </div>
        </section>
        {/* End of Portfolio Header */}

        {/* Portfolio */}

        {/* Portfolio Image Left */}
        <section id="portfolio-1" className="bg-[#7A6657]">
          <div className="dc-container dc-grid items-center gap-10 px-30">
            {/* Image width 50% of screen = (col 1 till col 7) + (gap/2) */}
            {/* With grid applied, image width is also added with margin which is 120px */}
            <img src="assets/images/daddj-poster.png" alt="Daddj Poster" className="col-start-1 col-end-7 min-w-[calc(100%__+_(2.5rem/2)+_120px)] object-left -ml-30" />
            <div className="col-start-8 col-span-5 flex flex-col gap-3 text-dc-white">
              <p className="dc-subheader text-lg">API Fetching with React</p>
              <h2 className="dc-header text-5xl">Daddj</h2>
              <p className="flex-shrink-0 basis-1/2">
                A simple website made with React, showing dad jokes fetched from a public API. Optimize the search feature to find a dad joke that fits your style.
              </p>
              <a href="https://dc-darren.github.io/daddj/" target="_blank" rel="noreferrer" className="btn-desktop btn-dc-white-outline hover:text-[#7A6657] mt-2">Open Daddj</a>
            </div>
          </div>
        </section>
        {/* End of Portfolio Image Left */}

        {/* Portfolio Image Right */}
        <section id="portfolio-2" className="bg-[#113448]">
          {/* Grid reversed for image right */}
          <div className="dc-container dc-grid direction-rtl justify-end items-center gap-10 px-30">
            {/* Image width 50% of screen = (col 1 till col 7) + (gap/2) */}
            {/* With grid applied, image width is also added with margin which is 120px */}
            <img src="assets/images/travelokie-poster.png" alt="Travelokie Poster" className="col-start-1 col-end-7 min-w-[calc(100%__+_(2.5rem/2)+_120px)] object-left -mr-30" />
            <div className="col-start-8 col-span-5 flex flex-col items-end gap-3 text-left text-dc-white">
              <p className="dc-subheader text-lg">Hotel Booking with Laravel</p>
              <h2 className="dc-header text-5xl">Travelokie</h2>
              <p className="direction-ltr flex-shrink-0 basis-1/2">
                Hotel booking system built with Laravel, which focuses on registration functionality of a hotel booking. Try out the simple way of booking a hotel in a few clicks.
              </p>
              <a href="http://sledge-hammer-fuses.000webhostapp.com/" target="_blank" rel="noreferrer" className="btn-desktop btn-dc-white-outline hover:text-[#113448] mt-2">Open Travelokie</a>
            </div>
          </div>
        </section>
        {/* End of Portfolio Image Right */}

        {/* More Portfolio */}
        <section id="more-portfolio" className="bg-dc-light-gray">
          <div className="dc-container px-30 py-25">
            <div className="dc-container flex flex-col justify-between items-center py-25">
              <p className="dc-subheader text-xl text-dc-red">This is a subheader</p>
              <h2 className="dc-header text-4xl">This is a header</h2>
            </div>
            <div className="dc-grid gap-10">
              {/* More Portfolio Item */}
              <a href="#portfolio-3" className="block col-span-4">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-4" className="block col-span-4">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-5" className="block col-span-4">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-6" className="block col-span-4">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-7" className="block col-span-4">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[3/2]" />
                <div className="flex flex-col gap-y-1 py-3">
                  <h3 className="font-medium text-3xl">This is a title</h3>
                  <p className="text-dc-gray">This is a subtitle</p>
                </div>
              </a>
              {/* More Portfolio Item */}
              <a href="#portfolio-8" className="block col-span-4">
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
          <div className="dc-container dc-grid items-center gap-10 px-30 py-25">
            <div className="relative col-span-6">
                <img src="assets/images/sample-image.png" alt="Avatar" className="w-full aspect-[15/11]" />
                <div className="absolute w-full h-full flex flex-col justify-center items-center font-inter text-dc-black top-0 left-0">
                    <p className="font-extrabold text-9xl">01</p>
                    <p className="font-extrabold text-7xl mt-8">A text here</p>
                </div>
            </div>
            <div className="col-start-8 col-span-5 flex flex-col gap-3">
              <p className="dc-subheader text-xl">This is a subheader</p>
              <h2 className="dc-header text-6xl">This is a header</h2>
              <p className="flex-shrink-0 basis-1/2 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                A ornare tincidunt egestas adipiscing. Sed lacus aliquam sit amet sem.
                Lacus ut ultricies nam enim. Ac aenean ut amet augue.
                Nibh facilisi proin cursus porta tempor, non. Diam.
              </p>
              <a href="#getInTouch" className="btn-desktop btn-dc-white mt-2">Button</a>
            </div>
          </div>
        </section>
        {/* End of Emphasis */}
      </main>
      {/* End of Body */}

      {/* Footer */}
      <footer className="bg-dc-black">
        <div className="dc-container grid grid-cols-3 text-xl text-dc-white px-30 py-25">
          <div>
            <a href="/" className="font-bold text-4xl">dc-darren</a>
            <p className="text-zinc-300 mt-7">Made with ❤️</p>
          </div>
          <div className="pt-1">
            <p className="font-semibold text-2xl">Portfolio</p>
            <nav className="grid grid-cols-2 gap-x-10 gap-y-8 text-zinc-300 mt-7">
              <a href="#portfolio">Website</a>
              <a href="#portfolio">Website</a>
              <a href="#portfolio">Website</a>
              <a href="#portfolio">Website</a>
              <a href="#portfolio">Website</a>
              <a href="#portfolio">Website</a>
            </nav>
          </div>
          <div className="pt-1">
            <p className="font-semibold text-2xl">Contacts</p>
            <nav className="flex flex-wrap gap-6 mt-7">
              <a href="#contact">
                <img src="assets/images/sample-image.png" alt="Contact" className="w-15" />
              </a>
              <a href="#contact">
                <img src="assets/images/sample-image.png" alt="Contact" className="w-15" />
              </a>
              <a href="#contact">
                <img src="assets/images/sample-image.png" alt="Contact" className="w-15" />
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
