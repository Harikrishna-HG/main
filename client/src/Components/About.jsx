import React from 'react';

const About = ({ isDarkMode } ) => {
  return (
    <div >
              <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

<section className=" text-center py-6 px-1 " id="services">
        <h2 className={`text-2xl  uppercase p-4 ${isDarkMode ? " text-white" :  "text-purple-700"}`}>Our Services</h2>
        <div className="flex flex-wrap justify-center items-center p-8 text-white">
          <div className="bg-white border-2 text-black w-80 rounded-lg p-5 m-4 shadow-md">
            <h3 className="text-purple-700 text-2xl mb-2">Toplevel Safety</h3>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur nulla quos corporis necessitatibus amet repellat.
            </p>
            <a href="#" className="border-2 border-purple-700 rounded-md px-4 py-2 hover:bg-purple-700 hover:text-white transition-colors duration-300">More</a>
          </div>
          <div className="bg-white border-2 text-black w-72 rounded-lg p-5 m-4 shadow-md">
            <h3 className="text-purple-700 text-2xl mb-2">Luxury Seats</h3>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur nulla quos corporis necessitatibus amet repellat.
            </p>
            <a href="#" className="border-2 border-purple-700 rounded-md px-4 py-2 hover:bg-purple-700 hover:text-white transition-colors duration-300">More</a>
          </div>
          <div className="bg-white border-2 text-black w-80 rounded-lg p-5 m-4 shadow-md">
            <h3 className="text-purple-700 text-2xl mb-2">24*7 Service</h3>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur nulla quos corporis necessitatibus amet repellat.
            </p>
            <a href="#" className="border-2 border-purple-700 rounded-md px-4 py-2 hover:bg-purple-700 hover:text-white transition-colors duration-300">More</a>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
