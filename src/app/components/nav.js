import Link from "next/link";
function Nav(){
    return (
      <nav className=" w-5/6 flex justify-between items-center h-28 mt-8 max-sm:h-20 max-sm:gap-6 max-sm:max-w-screen-sm" >
        <Link className="h-full w-full ml-24 aspect-auto max-sm:ml-4 max-md:h-12 max-sm:h-8" href="/">
          <img
            src="/logo 1.png"
            alt="logo"
            className="h-full aspect-auto max-sm:ml-0"
          />
        </Link>

        <div className="flex gap-16 text-xl max-sm:text-xs max-sm:gap-4">
          <Link href="#work">WORK</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#contact">CONTACT</Link>
        </div>
      </nav>
    );
}
export default Nav