function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <ul className="flex justify-center gap-6 py-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
