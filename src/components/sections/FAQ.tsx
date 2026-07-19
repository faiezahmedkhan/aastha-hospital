"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the visiting hours for the hospital?",
    answer: "General visiting hours are from 10:00 AM to 8:00 PM. ICU visiting hours are strictly between 4:00 PM to 6:00 PM. Please note that only two visitors are allowed per patient at a time to ensure proper rest and infection control."
  },
  {
    question: "How can I book an appointment with a specialist?",
    answer: "You can book an appointment through our website by clicking the 'Book Appointment' button, calling our 24/7 helpline at +1 234 567 8900, or using our mobile app. We recommend booking at least 24 hours in advance."
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we are empanelled with all major health insurance providers including Medicare, Allianz, Bupa, and Cigna. Please carry your insurance card and a valid ID during your visit for cashless processing."
  },
  {
    question: "Is emergency care available 24/7?",
    answer: "Absolutely. Our emergency department operates 24/7, 365 days a year, fully equipped with advanced life-saving equipment and staffed by experienced emergency physicians and trauma specialists."
  },
  {
    question: "What should I bring for my admission?",
    answer: "Please bring your doctor's admission note, valid photo ID, insurance card, previous medical records, and comfortable loose clothing. We provide all necessary medical supplies and patient gowns."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="grid-container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide mb-4">
                FAQS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-stone-600 text-lg">
                Find answers to common questions about our hospital, services, and policies.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6 md:p-10"
            >
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-stone-100 last:border-0">
                    <AccordionTrigger className="text-left text-lg font-semibold text-stone-800 hover:text-primary transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-stone-600 leading-relaxed pb-6 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
