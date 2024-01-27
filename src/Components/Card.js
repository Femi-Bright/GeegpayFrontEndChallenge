const Card = ({ children, className }) => {
  return (
    <div
      className={`px-5 py-4 bg-white dark:bg-gray-800 border border-[#EDF2F7] dark:border-gray-800 rounded-[14px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
