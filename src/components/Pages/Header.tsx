import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      <p className="text-xl text-white">Aasif Saneeth - Graphic Designer</p>
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#education">EDUCATION</a></li>
        <li><a href="#contacts">CONTACTS</a></li>
      </ul>
      <button className="md:hidden text-white z-50" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-gray-900 md:hidden z-40">
          <ul className="flex flex-col items-center gap-4 py-6 text-white font-medium">
            <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
            <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
            <li><a href="#experience" onClick={toggleMenu}>EXPERIENCE</a></li>
            <li><a href="#skills" onClick={toggleMenu}>SKILLS</a></li>
            <li><a href="#education" onClick={toggleMenu}>EDUCATION</a></li>
            <li><a href="#contacts" onClick={toggleMenu}>CONTACTS</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;