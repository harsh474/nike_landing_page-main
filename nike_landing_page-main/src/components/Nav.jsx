import { headerLogo } from "../assets/images";
import {navLinks} from '../constants'; 
import { hamburger } from "../assets/icons";
function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/" >
          <img src={headerLogo} alt="logo" width={130} height={29} className=" border- border-black"></img>
        </a>  
        <ul className="flex flex-1 gap-16 justify-center items-centre  max-lg:hidden  ">
        {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul> 
        <div className="flex gap-2">
          <a href="/sign"  className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>  
             <h1>Sign in </h1>
          </a>
          <span > / </span>
          <a href="/sign"  className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>  
             <h1>Explore now</h1>
          </a>
         </div>
        <div className="hidden max-lg:block" >
           <img src={hamburger} alt={hamburger} height={25} width={25} /> 
        </div>
      </nav>
    </header>
  );
}

export default Nav;
