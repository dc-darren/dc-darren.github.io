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
        <section id="portfolio-1" className="bg-dc-gray">
          <div className="dc-container dc-grid items-center gap-10 px-30">
            {/* Image width 50% of screen = (col 1-7) + gap */}
            {/* With grid applied, image width is also added with margin which is 120px */}
            <img src="assets/images/sample-image.png" alt="Avatar" className="col-start-1 col-end-7 justify-self-center min-w-[calc(100%__+_2.5rem+_120px)] -ml-30" />
            <div className="col-start-8 col-span-5 flex flex-col gap-3 text-dc-white">
              <p className="dc-subheader text-lg">This is a Header</p>
              <h2 className="dc-header text-5xl">This is also a header</h2>
              <p className="flex-shrink-0 basis-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut maecenas ultricies eget viverra aliquam eget nec metus, id.
                Eget sagittis fames blandit lorem mattis.
              </p>
              <a href="#portfolio-1" className="btn-desktop btn-dc-white-outline mt-2">Button</a>
            </div>
          </div>
        </section>
        {/* End of Portfolio Image Left */}

        {/* End of Portfolio */}
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
