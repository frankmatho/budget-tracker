function BalanceCard({ balance }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">Balance</h3>
      <p 
        className={`text-2xl ${
          balance >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        Ksh {balance}
      </p>
    </div>
  );
}

export default BalanceCard;
