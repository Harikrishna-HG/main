import React, { useState } from 'react';

const Accordion = ({ isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null); // State to manage which FAQ is open

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <hr className={`border-t-4 ${isDarkMode ? "border-white" : "border-purple-700"} w-full`} />
      <section id="accordion" className={`p-4 px-8 md:px-14 flex flex-col items-center ${isDarkMode ? "bg-purple-600 text-white" : "bg-white text-purple-700"}`}>
        <h2 className={`text-2xl py-4 text-center my-4 uppercase ${isDarkMode ? " text-white" : "text-purple-700"}`}>FAQs</h2>
        <div className="pb-12 border-4 mb-5">
          {faqData.map((faq, index) => (
            <div key={index} className="max-w-full my-6 px-6 py-2 border-b-2 border-white cursor-pointer text-white">
              <div className="flex  justify-between items-center" onClick={() => toggleAnswer(index)}>
                <h3 className={`text-xl   ${isDarkMode ? " text-white" : "text-purple-700"}`}>{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  fill="white"
                  viewBox="0 -960 960 960"
                  width="30"
                  className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                >
                  <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className={`text-sm  ${isDarkMode ? " text-white" : "text-purple-700"}`}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const faqData = [
  {
    question: 'What is Transportation?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, Non earum assumenda corporis sunt deserunt vel Non earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt velNon earum assumenda corporis sunt deseruntNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quas vel quasNon earum assumenda corporis sunt deserunt vel quas quasNon earum assumenda corporis sunt deserunt vel quasquasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasipsumNon earum assumenda corporis sunt deserunt vel quas dolor sit amet consectetur adipisicing elit.Non earum assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis quasi fuga?',
  },
  {
    question: 'Do I Need To Register To Use Transportation?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earumNon earum assumenda Non earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt Non earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasvel quasNon earum assumenda corporis sunt deserunt vel quascorporis sunt deserunt vel quas assumenda corporis sunt deserunt vel quas Non earum assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis quasi fuga?',
  },
  {
    question: 'How Will I Get Confirmation That My Ticket Purchased?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum Non earum assumenda corporis sunt deserunt vel quasassumenda corporis Non earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quassunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis quasi fuga?',
  },
  {
    question: 'How Can I Make Payments?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earumNon earum assumenda corporis sunt deserunt vel Non earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt Non earum assumenda corporis sunt deserunt vel quasdeserunt vel quasNon earum assumenda corporis sunt deserunt vel quasquas assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis quasi fuga?',
  },
  {
    question: 'What Details Do I Need To Give At The Time Of Booking/Buying?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Non earumNon earum assumenda corporis sunt deserunt vel quas assumenda corporis sunt deserunt vel quas Non earumNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deseruntNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quasNon earum assumenda corporis sunt deserunt vel quas vel quasNon earum assumenda corporis sunt deserunt vel quas assumenda corporis sunt deserunt vel quas qui dolorem, esse officiis quasi fuga?',
  },
];

export default Accordion;