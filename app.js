function calculate() {
  // Get input values
  const purchasePrice = parseFloat(document.getElementById('purchasePrice').value) || 0;
  const repairCosts = parseFloat(document.getElementById('repairCosts').value) || 0;
  const shippingCosts = parseFloat(document.getElementById('shippingCosts').value) || 0;
  const salesFeePercentage = parseFloat(document.getElementById('salesFee').value) || 0;
  const sellingPrice = parseFloat(document.getElementById('sellingPrice').value) || 0;

  // Calculate total costs
  const totalCosts = purchasePrice + repairCosts + shippingCosts + (salesFeePercentage / 100 * sellingPrice);

  // Calculate net profit
  const netProfit = sellingPrice - totalCosts;

  // Calculate ROI (Return on Investment)
  const roi = (netProfit / totalCosts) * 100;

  // Calculate break-even price
  const breakEvenPrice = totalCosts;

  // Update the UI with calculated values
  document.getElementById('totalCosts').textContent = totalCosts.toFixed(2);
  document.getElementById('netProfit').textContent = netProfit.toFixed(2);
  document.getElementById('roi').textContent = roi.toFixed(2);
  document.getElementById('breakEvenPrice').textContent = breakEvenPrice.toFixed(2);
}
