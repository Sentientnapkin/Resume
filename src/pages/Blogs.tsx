import React from 'react';
import {motion} from "framer-motion";

const Blogs: React.FC = () => {

  return(
    <div className={"container flex flex-col justify-items-center align-middle py-24"}>
      <motion.h2
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text text-center"
      >
        Blogs
      </motion.h2>

      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="rounded-xl bg-surface/50 backdrop-blur-sm border border-white/10 p-8 mb-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-2">Blogs TBD</h3>
      </motion.div>
    </div>
  );
};

export default Blogs;
