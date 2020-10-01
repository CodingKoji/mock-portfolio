import { motion } from "framer-motion";

const pageVariants = {
  pageInitial: {
    opacity: 0,
    x: "-100vw",
  },
  pageAnimate: {
    opacity: 1,
    x: 0,
  },
  pageExit: {
    opacity: 0,
    x: "-100vw",
  },
};

export default function PageRight({ children }) {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={pageVariants}
      className="container"
    >
      {children}
    </motion.div>
  );
}
