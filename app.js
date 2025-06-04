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
  const roi = totalCosts === 0 ? 0 : (netProfit / totalCosts) * 100;

  // Calculate break-even price
  const breakEvenPrice = totalCosts;

  // Update the UI with calculated values
  document.getElementById('totalCosts').textContent = totalCosts.toFixed(2);
  document.getElementById('netProfit').textContent = netProfit.toFixed(2);
  document.getElementById('roi').textContent = roi.toFixed(2);
  document.getElementById('breakEvenPrice').textContent = breakEvenPrice.toFixed(2);

  // Update colors based on profit
  const profitEl = document.getElementById('netProfit');
  const roiEl = document.getElementById('roi');
  if (netProfit >= 0) {
    profitEl.style.color = '#4caf50';
    roiEl.style.color = '#4caf50';
  } else {
    profitEl.style.color = '#f44336';
    roiEl.style.color = '#f44336';
  }
}

function resetFields() {
  document.querySelectorAll('input').forEach(input => input.value = '');
  ['totalCosts', 'netProfit', 'roi', 'breakEvenPrice'].forEach(id => {
    document.getElementById(id).textContent = '0';
  });
  document.getElementById('netProfit').style.color = '';
  document.getElementById('roi').style.color = '';
}

document.getElementById('resetBtn').addEventListener('click', resetFields);
