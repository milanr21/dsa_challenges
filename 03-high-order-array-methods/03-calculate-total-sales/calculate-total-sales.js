function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce(
    (sum, product) => product.price * product.quantity + sum,

    0
  );

  const taxAmount = (totalSales * taxRate) / 100;

  const totalSalesWithTax = totalSales + taxAmount;

  return parseFloat(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
