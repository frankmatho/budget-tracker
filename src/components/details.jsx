function BalanceCard() {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-gray-500">Total Balance</h3>
      <h1 className="text-3xl font-bold mt-2">Ksh 0</h1>

      <div className="flex justify-between mt-6 gap-4">
        <div className="w-1/2 bg-green-100 rounded-lg p-3">
          <p className="text-sm text-gray-600">Income</p>
          <h4 className="font-semibold">Ksh 0</h4>
        </div>

        <div className="w-1/2 bg-red-100 rounded-lg p-3">
          <p className="text-sm text-gray-600">Expenses</p>
          <h4 className="font-semibold">Ksh 0</h4>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
