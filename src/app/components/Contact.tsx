"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-32 pb-4 flex flex-col items-center text-center bg-navy text-lightSlate"
    >
      {/* Section Number + Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-green font-mono mb-4"
      >
        04. What’s Next?
      </motion.h2>

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-slate-200 mb-6"
      >
        Get In Touch
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-slate-400 mb-12 leading-relaxed"
      >
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </motion.p>

      {/* Button */}
      <motion.a
        href="mailto:pradeesharumugam96@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="px-8 py-4 border border-green text-green rounded-md font-mono text-lg hover:bg-green hover:text-navy transition-colors duration-300"
      >
        Say Hello
      </motion.a>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-slate-500 text-xs font-mono"
      >
        {/* Designed &  */}
        Built by pradeesh
      </motion.footer>
    </section>
  );
}
