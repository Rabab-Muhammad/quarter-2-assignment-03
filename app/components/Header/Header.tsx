import Link from "next/link";



  const Header = () => {
  return (
    <div className="sticky top-0  shadow-lg z-10 ">
      <nav className="bg-teal-600 h-15 pl-8  ">         
        <h1 className="text-4xl italic font-semibold pt-3 font-serif ">
          ShopSphere
        </h1>
        <ul className="flex space-x-6 justify-end pr-6 text-2xl pb-3  text-stone-50 ">
          <li className="hover:text-fuchsia-950 hover:underline decoration-double">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-fuchsia-950 hover:underline decoration-double">
            <Link href="#">Products</Link>
          </li>
          <li className="hover:text-fuchsia-950 hover:underline decoration-double">
            <Link href="#">About Us</Link>
          </li>
          <li className="hover:text-fuchsia-950 hover:underline decoration-double">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
