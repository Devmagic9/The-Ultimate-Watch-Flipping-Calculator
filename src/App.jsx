import { useState } from 'react'
import Input from './components/ui/Input.jsx'
import Button from './components/ui/Button.jsx'
import Card from './components/ui/Card.jsx'
import CardHeader from './components/ui/CardHeader.jsx'
import CardTitle from './components/ui/CardTitle.jsx'
import CardContent from './components/ui/CardContent.jsx'
import CardFooter from './components/ui/CardFooter.jsx'
import Label from './components/ui/Label.jsx'

export default function App() {
  const [purchasePrice, setPurchasePrice] = useState('')
  const [repairCosts, setRepairCosts] = useState('')
  const [shippingCosts, setShippingCosts] = useState('')
  const [salesFee, setSalesFee] = useState('')
  const [targetROI, setTargetROI] = useState('')

  const p = parseFloat(purchasePrice) || 0
  const r = parseFloat(repairCosts) || 0
  const s = parseFloat(shippingCosts) || 0
  const fee = parseFloat(salesFee) || 0
  const roiTarget = parseFloat(targetROI) || 0

  const totalCosts = p + r + s
  const breakEvenPrice = fee >= 100 ? 0 : totalCosts / (1 - fee / 100)
  const suggestedPrice = fee >= 100 ? 0 : (totalCosts * (1 + roiTarget / 100)) / (1 - fee / 100)
  const netProfit = suggestedPrice * (1 - fee / 100) - totalCosts
  const roi = totalCosts === 0 ? 0 : (netProfit / totalCosts) * 100

  const profitColor = netProfit > 0 ? 'text-green-600' : 'text-red-600'

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto px-4 py-8 w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Watch Flipping Calculator</h1>
        <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-muted/40 rounded-lg">
          <CardHeader>
            <CardTitle>Watch Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="purchase">Purchase Price ($)</Label>
              <Input id="purchase" type="number" min="0" value={purchasePrice} onChange={e => setPurchasePrice(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="repair">Repair Costs ($)</Label>
              <Input id="repair" type="number" min="0" value={repairCosts} onChange={e => setRepairCosts(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="shipping">Shipping Costs ($)</Label>
              <Input id="shipping" type="number" min="0" value={shippingCosts} onChange={e => setShippingCosts(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="fee">Sales Fee (%)</Label>
              <Input id="fee" type="number" min="0" value={salesFee} onChange={e => setSalesFee(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="target">Target ROI (%)</Label>
              <Input id="target" type="number" min="0" value={targetROI} onChange={e => setTargetROI(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="button" onClick={() => {setPurchasePrice('');setRepairCosts('');setShippingCosts('');setSalesFee('');setTargetROI('')}}>
              Reset
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-muted/40 rounded-lg">
          <CardHeader>
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm md:text-base">
            <p>Total Costs: ${totalCosts.toFixed(2)}</p>
            <p>Break-Even Price: ${breakEvenPrice.toFixed(2)}</p>
            <p>Suggested Selling Price: ${suggestedPrice.toFixed(2)}</p>
            <p className={profitColor}>Net Profit: ${netProfit.toFixed(2)}</p>
            <p className={profitColor}>ROI: {roi.toFixed(2)}%</p>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  )
}
