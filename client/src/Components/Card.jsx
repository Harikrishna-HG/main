import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

const Card = ({ isDarkMode }) => {
  return (<>
    <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />

    <div className={`font-sans py-8 ${isDarkMode ? "bg-purple-600 text-white" : "bg-white text-purple-700"}`}>
      <section id="card">
        <h2 id="title" className={`text-center  text-2xl mb-8 ${isDarkMode ? " text-white" : "text-purple-700"}`}>TOP DESTINATIONS</h2>

        <div className={`flex flex-wrap justify-center p-2 ${isDarkMode ? "bg-purple-600 text-white" : "bg-white text-purple-700"}`}>
          <div className={`w-60 bg-purple-400 rounded-lg overflow-hidden shadow-md m-4 `}>
            <img src={img1} alt="Swayambhunath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Swayambhunath</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
                similique eum rem iste maxime provident dolore laboriosam quia quae!
                Eos quis optio recusandae!
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img2} alt="Boudhanath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Boudhanath</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
                similique eum rem iste maxime provident dolore laboriosam quia quae!
                Eos quis optio recusandae!
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img3} alt="Dharahara" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Dharahara</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
                similique eum rem iste maxime provident dolore laboriosam quia quae!
                Eos quis optio recusandae!
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img4} alt="Pashupatinath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Pashupatinath</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
                similique eum rem iste maxime provident dolore laboriosam quia quae!
                Eos quis optio recusandae!
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img7} alt="Pashupatinath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Adiyogi Shiva</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
                similique eum rem iste maxime provident dolore laboriosam quia quae!
                Eos quis optio recusandae!
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img6} alt="Tripura" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Tripura Mandir</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
                similique eum rem iste maxime provident dolore laboriosam quia quae!
                Eos quis optio recusandae!
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img8} alt="Pashupatinath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Haridwar</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
                similique eum rem iste maxime provident dolore laboriosam quia quae!
                Eos quis optio recusandae!
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
          <div className="w-60 bg-purple-400 rounded-lg overflow-hidden shadow-md m-4">
            <img src={img9} alt="Pashupatinath" className="w-full h-52 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-2">Mount Kailash</h3>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque
                similique eum rem iste maxime provident dolore laboriosam quia quae!
                Eos quis optio recusandae!
              </p>
              <a href="#" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-200">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
};

export default Card;
