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
    <div className="relative">
      <button
        className="text-gray-400 hover:text-terminal-green transition p-2 rounded-full hover:bg-terminal-green/10 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]"
        onClick={copyEmailToClipboard}
      >
        <FaEnvelope className="w-5 h-5"/>
      </button>
      <AnimatePresence>
        {copied && (
          <motion.span
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono text-terminal-green bg-dark-surface border border-terminal-green/50 px-3 py-1 rounded shadow-[0_0_10px_rgba(34,197,94,0.3)]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            Email copied!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailButton;
