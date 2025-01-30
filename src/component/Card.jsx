import React from 'react';

export default function Card() {
  const data = [
    {
      modelno:
        "Fire-Boltt 4G Pro Volte Calling Smart Watch- 2.02” TFT Display, 4G Nano-SIM GPS, Health Suite, Sports Modes, 400mAh Battery (grey) ",
      price: " ₹85499",
      image: "https://m.media-amazon.com/images/I/819DWQLgjKL._SX679_.jpg",
    },
    {
      modelno:
        "Fire-Boltt 4G Pro Volte Calling Smart Watch- 2.02” TFT Display, 4G Nano-SIM GPS, Health Suite, Sports Modes, 400mAh Battery (gold)",
      price: " ₹85499",
      image:
        "https://m.media-amazon.com/images/I/81VyCgk+TbL._AC_UF480,480_SR480,480_.jpg",
    },
    {
      modelno:
        "Fire-Boltt 4G Pro Volte Calling Smart Watch- 2.02” TFT Display, 4G Nano-SIM GPS, Health Suite, Sports Modes, 400mAh Battery (gold)",
      price: " ₹85499",
      image: "https://m.media-amazon.com/images/I/71jEMIS0T4L._AC_UF480,480_SR480,480_.jpg",
    },
    {
      modelno:
        "Fire-Boltt 4G Pro Volte Calling Smart Watch- 2.02” TFT Display, 4G Nano-SIM GPS, Health Suite, Sports Modes, 400mAh Battery (black)",
      price: " ₹85499",
      image: "https://m.media-amazon.com/images/I/61-vRq2ulOL._AC_UF480,480_SR480,480_.jpg",
    },
  ];

  return (
    <>
      <div className="flex justify-between gap-6 bg-black p-6"> {/* Added padding and fixed width */}
        {data.map((value, key) => (
          <div
            className="h-[650px] w-[400px] bg-white border-2 border-green-400 border-spacing-3 shadow-2xl shadow-black"
            key={key}
          >
            <div>
              <img className="h-80 w-80 object-cover" src={value.image} alt="# " />
            </div>

            <div className="flex justify-between mt-4 px-4">
              <div>
                <img
                  className="h-12 w-12 object-contain"
                  src="https://m.media-amazon.com/images/I/41sHRWXCfvL._SS36_.jpg"
                  alt="#"
                />
              </div>
              <div>
                <img
                  className="h-12 w-12 object-contain"
                  src="https://m.media-amazon.com/images/I/41O80ztPo0L._SS36_.jpg"
                  alt="#"
                />
              </div>
              <div>
                <img
                  className="h-12 w-12 object-contain"
                  src="https://m.media-amazon.com/images/I/411JSvfkGQL._SS36_.jpg"
                  alt="#"
                />
              </div>
              <div>
                <img
                  className="h-12 w-12 object-contain"
                  src="https://m.media-amazon.com/images/I/515EX2dUR9L._SS36_.jpg"
                  alt="#"
                />
              </div>
              <div>
                <img
                  className="h-12 w-12 object-contain"
                  src="https://m.media-amazon.com/images/I/41m-lBJQ2hL._SS36_.jpg"
                  alt="#"
                />
              </div>
            </div>

            <h1 className="ml-2 font-semibold">{value.modelno}</h1>
            <h2>
              <img
                className="h-[48px] w-[98px]"
                src="https://img.freepik.com/premium-vector/four-stars-rating-button_714799-439.jpg"
                alt=""
              />
            </h2>
            <span className="bg-red-600 text-white px-2 py-1">Republic Day Deal</span>
            <span className="text-red-500 font-semibold">-87% off</span>
            <h3 className="font-extrabold">
              <span className="font-bold text-red-500">₹</span>1,499
              <span className="line-through text-gray-500"> M.R.P. : ₹11,499.00</span>
            </h3>
            <h4 className="font-black">
              Inclusive of all taxes. EMI starts at <span className="font-semibold">₹</span>136 per
              month.
            </h4>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13860.139986713271!2d77.08829674999998!3d29.718745499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737627393113!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
