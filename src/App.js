function App() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-dc-white">
        <nav className="container-dc flex justify-between items-center text-dc-red px-20 py-5">
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
        {/* Hero */}
        <section className="bg-dc-light-gray">
          <div className="container-dc flex justify-between items-center gap-10 p-30">
            <div className="flex flex-col gap-3">
              <h2 className="subheader-dc text-xl text-dc-red">FULL-STACK DEVELOPER</h2>
              <h3 className="header-dc text-6xl">Hi! I am Darren!</h3>
              <p className="flex-shrink-0 basis-1/2 text-xl text-dc-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                A ornare tincidunt egestas adipiscing. Sed lacus aliquam sit amet sem.
                Lacus ut ultricies nam enim. Ac aenean ut amet augue.
                Nibh facilisi proin cursus porta tempor, non. Diam.
              </p>
              <a href="#getInTouch" className="btn-desktop btn-dc-red mt-2">Get in Touch</a>
            </div>
            <img src="assets/images/sample-image.png" alt="Avatar" className="flex-shrink-0 basis-1/2 aspect-[15/11]" />
          </div>
        </section>
        {/* End of Hero */}
      </main>
      {/* End of Body */}

      {/* Footer */}
      <footer className="bg-dc-black">
        <div className="container-dc grid grid-cols-3 text-xl text-dc-white px-30 py-25">
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
