import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../styled-elements/section-title";

function FAQSection() {
  return (
    <>
      <section id="faq" className="container p-4">
        <div className="w-full flex flex-col items-center shadow-xl">
          <SectionTitle title="Frequently Asked Questions" paragraph="" />
          <div className="flex flex-col w-[18rem] md:w-[36rem] lg:w-[56rem] pb-4">
            <div className="border-2 border-black p-2 dark:border-white">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-primary/[0.6]">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border-2 border-black p-2 dark:border-white">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-primary/[0.6]">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border-2 border-black p-2 dark:border-white">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    <div className="text-primary/[0.6]">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;
