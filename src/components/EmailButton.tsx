import React, { useState } from 'react';
import {FaEnvelope} from 'react-icons/fa';
import {AnimatePresence, motion} from 'framer-motion';

const EmailButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('18sebvargas@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <>
      <button className="text-gray-300 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-400/10"
              onClick={copyEmailToClipboard}>
          <FaEnvelope className="w-5 h-5"/>
      </button>
      <AnimatePresence>
        {copied && (
          <motion.span
            className="absolute top-full text-sm text-green-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Email copied to clipboard!
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
};

export default EmailButton;
