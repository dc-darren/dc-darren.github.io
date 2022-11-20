function App() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-dc-white">
        <nav className="container-dc flex justify-between items-center text-dc-red px-20 py-5">
          <a href="/" className="font-bold text-xl">dc-darren</a>
          <ul className="flex items-center gap-10">
            <li><a href="#about" className="font-semibold">About</a></li>
            <li><a href="#portfolio" className="font-semibold">Portfolio</a></li>
            <li><a href="#getInTouch" className="btn-desktop btn-dc-red-outline">Get in Touch</a></li>
          </ul>
        </nav>
      </header>
      {/* End of Navbar */}
      <div className="min-h-screen bg-dc-white flex p-4">
        <div className="h-fit flex flex-col gap-4 bg-dc-black p-4">
          <button className="btn-desktop btn-dc-red">Button Red</button>
          <button className="btn-desktop btn-dc-red-outline">Button Red Outline</button>
          <button className="btn-desktop btn-dc-white">Button White</button>
          <button className="btn-desktop btn-dc-white-outline">Button White Outline</button>
        </div>
        <div className="h-fit flex flex-col gap-4 bg-dc-black p-4 ml-4">
          <button className="btn-desktop btn-dc-red">Button Desktop</button>
          <button className="btn-tablet btn-dc-red">Button Tablet</button>
          <button className="btn-mobile btn-dc-red">Button Mobile</button>
        </div>
      </div>
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
      {/* End of Navbar */}
      {/* End of Footer */}
    </>
  );
}

export default App;
