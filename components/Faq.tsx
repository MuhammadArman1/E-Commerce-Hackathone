"use client"
// import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {

  const faqItems: FAQItem[] = [
    { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "What will be delivered? And when?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
    { question: "How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?" },
  ];

  return (
    <div className="px-4 py-10 max-w-[1350px] mx-auto">
      <h1 className="text-center text-5xl font-bold my-8">Questions Looks Here</h1>
      <p className="text-center text-gray-500 mb-16">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-[#F7F7F7] rounded-lg cursor-pointer p-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-[648px] h-[170px]" id="faqw">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <span className="text-xl font-bold">+</span>
            </div>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
