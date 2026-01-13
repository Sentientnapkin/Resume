import React from 'react';
import {motion} from "framer-motion";

const Blogs: React.FC = () => {

  return(
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          className="text-4xl font-bold text-text-primary mb-12"
        >
          Blogs
        </motion.h2>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          className="border border-border rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-text-secondary">Blogs TBD</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
