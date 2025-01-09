import Accordion from "./Accordion";
import data from "../Data/data.json";

export default function FAQ() {
  console.log(data.faqs);
  return (
    <div>
      <h1>FAQ's</h1>
      {data.faqs.map((faq, index) => {
        return (
          <div key={index}>
            <Accordion questions={faq.question} answers={faq.answer} />
          </div>
        );
      })}
    </div>
  );
}
