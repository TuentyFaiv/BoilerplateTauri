export const getTotals = async () => {
  const request = await fetch(
    "https://webservicesnt.org:4455/getTransactionsFTDTotals" // Change to new endpoint
  );
  const { data, error, result } = await request.json();
  if (error && !result) throw new Error(error);

  return data;
};

export const other = {};
