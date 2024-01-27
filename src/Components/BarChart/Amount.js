const Amount = ({ amount, invisible }) => {
  return (
    <div
      className={`chart-amount relative w-full text-gray-600 dark:text-gray-300 text-[8px] md:text-xs ${
        invisible && amount !== 5 && "amount-invisible"
      }`}
    >
      <p className="max-w-6 md:max-w-[50px] text-right">{amount}</p>
    </div>
  );
};

export default Amount;
