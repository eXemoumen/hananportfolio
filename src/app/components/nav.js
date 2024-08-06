import Link from "next/link";
function Nav(){
    return (
      <nav className=" w-5/6 flex justify-between items-center h-28 mt-8 ">
        <Link className="h-full ml-24 aspect-auto" href="/">
          <img
            src="/logo 1.png"
            alt="logo"
            className="h-full ml-24 aspect-auto"
          />
        </Link>

        <div className="flex gap-16 text-xl">
          <Link href="#work">WORK</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#contact">CONTACT</Link>
        </div>
      </nav>
    );
}
export default Nav