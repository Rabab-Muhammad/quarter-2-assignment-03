import React from "react";

const Hero = () => {
  return (
    <div className="text-center py-4  ">
      <section className="bg-emerald-100 py-5 px-4 ">
        <h1 className="text-5xl font-bold text-blue-800 underline decoration-double ">
          Welcome To ShopSphere
        </h1>
        <p className="text-2xl mt-6 text-gray-700">
          Discover our latest products and enjoy shopping.
        </p>
        <button className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-green-600 mt-5">
          Shop Now
        </button>
      </section>
      <div className=" mt-8 ml-11 flex justify-start">
        <a href="#">
          <img
            src="https://m.media-amazon.com/images/I/71WcjsOVOmL._AC_UY218_.jpg"
            alt="Mobile-phone"
            className="w-full h-70 rounded-lg shadow-lg shadow-slate-300 "
          />
          <p className="absolute r-50 ml-20 mt-2  bg-amber-400 text-white font-bold px-3 py-1 rounded-lg shadow-lg">
            $1,080.09
          </p>
        </a>
        <a href="#">
          <img
            src="https://m.media-amazon.com/images/I/71N7p23TNWL._AC_SY200_.jpg"
            alt="Women Watch"
            className="w-800 h-70  rounded-lg shadow-lg shadow-slate-300 ml-20 mt-3 "
          />
          <p className="absolute   m-20 mt-3  bg-amber-400 text-white font-bold px-3 py-1 rounded-lg shadow-lg ">
            $144.13
          </p>
        </a>
        <a href="#">
          <img
            src="https://m.media-amazon.com/images/I/71xy16A4vPL._AC_UY218_.jpg"
            alt="Travel Backpack"
            className="w-800 h-400 rounded-lg shadow-lg shadow-slate-300 ml-20 "
          />
          <p className="absolute   mx-40 mt-2  bg-amber-400 text-white font-bold px-3 py-1 rounded-lg shadow-lg">
            $32.80
          </p>
        </a>
        <a href="#">
          <img
            src="https://m.media-amazon.com/images/I/61-hMn0AQsL._AC_UY218_.jpg"
            alt="Cooker"
            className="w-800 h-400 rounded-lg shadow-lg shadow-slate-300 ml-20"
          />
          <p className="absolute    mx-40  mt-2 bg-amber-400 text-white font-bold px-3 py-1 rounded-lg shadow-lg">
            $104.99
          </p>
        </a>
        <a href="#">
          <img
            src="https://m.media-amazon.com/images/I/411NxOSWI5L._AC_UY218_.jpg"
            alt="Earbuds"
            className="w-800 h-400 rounded-lg shadow-lg shadow-slate-300 ml-20"
          />
          <p className="absolute   mx-40 mt-2  bg-amber-400 text-white font-bold px-3 py-1 rounded-lg shadow-lg">
            $31.39
          </p>
        </a>
      </div>
      <div className=" bg-gray-300 mt-20 mx-40 rounded-lg">
        <section>
          <h1 className="pt-5 text-4xl font-semibold text-cyan-500">
            About Us
          </h1>
          <p className="p-10 pt-2 ">
            Welcome to ShopSphere, your trusted online destination for fashion,
            electronics, home essentials, etc. Founded with a passion for
            providing high-quality products at affordable prices, we strive to
            offer our customers a seamless and enjoyable shopping experience. At
            ShopSphere, we believe in delivering more than just products. We are
            committed to bringing you carefully curated selections, exceptional
            customer service, and fast, reliable shipping. Whether you are
            shopping for the latest trends, everyday essentials, or special
            gifts,we have something for everyone. Our journey started in 2024,
            and since then, we have grown into a community of loyal customers
            who trust us for quality, value, and convenience. We are constantly
            expanding our product range and improving our services to meet your
            needs and exceed your expectations.Thank you for choosing ShopSphere
            where quality meets convenience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
