function Navbar() {
  return (
    <nav className="w-full px-6 py-5 flex items-center justify-between">

      <div className="text-xl font-bold tracking-wider">
        ASHOK TATTOO
      </div>

      <div className="flex gap-8">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#styles">Styles</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  )
}

export default Navbar