import React from "react";
import Faq from "./Faq";
import Display from "./Display";
import data from "../data.js";

const Merged = () => {
  const faqItems = data.map((items) => {
    return (
      <Faq key={items.id} questions={items.question} answers={items.answer} />
    );
  });
  return (
    <div>
      <Display />
      <p className="faq">Frequently Asked Questions</p>
      <div>{faqItems}</div>
    </div>
  );
};

export default Merged;
