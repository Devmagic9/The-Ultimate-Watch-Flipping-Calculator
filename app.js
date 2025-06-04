import React, { useState, useEffect } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import htm from "https://esm.sh/htm@3";
import {
  Watch,
  Calculator,
  TrendingUp,
  Target,
  BarChart3,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
  Zap,
  Crown,
  Shield,
} from "https://esm.sh/lucide-react@latest?deps=react@18";

const html = htm.bind(React.createElement);

function Input({ className = "", ...props }) {
  return html`<input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}" ...${props} />`;
}

function Label({ className = "", ...props }) {
  return html`<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}" ...${props} />`;
}

function Button({ className = "", ...props }) {
  return html`<button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}" ...${props} />`;
}

function Card({ className = "", ...props }) {
  return html`<div className="rounded-lg border bg-card text-card-foreground shadow-sm ${className}" ...${props} />`;
}

function CardHeader({ className = "", ...props }) {
  return html`<div className="flex flex-col space-y-1.5 p-6 ${className}" ...${props} />`;
}

function CardTitle({ className = "", ...props }) {
  return html`<h3 className="text-2xl font-semibold leading-none tracking-tight ${className}" ...${props} />`;
}

function CardDescription({ className = "", ...props }) {
  return html`<p className="text-sm text-muted-foreground ${className}" ...${props} />`;
}

function CardContent({ className = "", ...props }) {
  return html`<div className="p-6 pt-0 ${className}" ...${props} />`;
}

function Badge({ className = "", variant = "", ...props }) {
  const base = "inline-flex items-center border rounded px-2.5 py-0.5 text-xs font-semibold";
  const style = variant === "outline" ? "bg-transparent" : "bg-primary text-white";
  return html`<span className="${base} ${style} ${className}" ...${props} />`;
}

function Progress({ value = 0, className = "" }) {
  return html`<div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary ${className}">
    <div className="h-full bg-primary transition-all" style=${{ width: `${value}%` }}></div>
  </div>`;
}

export default function WatchFlippingDashboard() {
  const [purchasePrice, setPurchasePrice] = useState(12250);
  const [repairCosts, setRepairCosts] = useState(0);
  const [shippingCosts, setShippingCosts] = useState(99);
  const [salesFee, setSalesFee] = useState(6);
  const [targetROI, setTargetROI] = useState(8);

  const [results, setResults] = useState({
    totalCosts: 0,
    breakEvenPrice: 0,
    suggestedPrice: 0,
    netProfit: 0,
    actualROI: 0,
  });

  useEffect(() => {
    const totalCosts = purchasePrice + repairCosts + shippingCosts;
    const breakEvenPrice = totalCosts / (1 - salesFee / 100);
    const suggestedPrice = (totalCosts * (1 + targetROI / 100)) / (1 - salesFee / 100);
    const netProfit = suggestedPrice - totalCosts;
    const actualROI = totalCosts === 0 ? 0 : (netProfit / totalCosts) * 100;

    setResults({ totalCosts, breakEvenPrice, suggestedPrice, netProfit, actualROI });
  }, [purchasePrice, repairCosts, shippingCosts, salesFee, targetROI]);

  const resetCalculator = () => {
    setPurchasePrice(0);
    setRepairCosts(0);
    setShippingCosts(0);
    setSalesFee(6);
    setTargetROI(8);
  };

  const popularBrands = [
    { name: "Rolex", trend: "+12%", color: "text-green-600" },
    { name: "Patek Philippe", trend: "+8%", color: "text-green-600" },
    { name: "Audemars Piguet", trend: "+15%", color: "text-green-600" },
    { name: "Omega", trend: "-3%", color: "text-red-600" },
    { name: "Tudor", trend: "+5%", color: "text-green-600" },
    { name: "Cartier", trend: "+7%", color: "text-green-600" },
  ];

  const flippingTips = [
    {
      icon: html`<${Target} className="h-5 w-5" />`,
      title: "Research Market Value",
      description: "Always check recent sales on Chrono24, eBay, and auction houses",
    },
    {
      icon: html`<${Shield} className="h-5 w-5" />`,
      title: "Verify Authenticity",
      description: "Get professional authentication for high-value pieces",
    },
    {
      icon: html`<${Clock} className="h-5 w-5" />`,
      title: "Timing is Key",
      description: "Monitor market trends and seasonal demand patterns",
    },
    {
      icon: html`<${Zap} className="h-5 w-5" />`,
      title: "Quick Turnaround",
      description: "Aim for 30-60 day holding periods to maximize ROI",
    },
  ];

  const marketStats = [
    { label: "Avg. Monthly ROI", value: "12.5%", trend: "+2.1%" },
    { label: "Market Volume", value: "$2.4B", trend: "+18%" },
    { label: "Active Listings", value: "45.2K", trend: "+5%" },
    { label: "Avg. Sale Time", value: "23 days", trend: "-3 days" },
  ];

  return html`<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-8">
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
            <${Watch} className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Watch Flipping Dashboard</h1>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Professional tools for luxury watch trading and investment analysis</p>
      </div>
      <${Card} className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <${CardHeader} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
          <${CardTitle} className="flex items-center gap-2 text-xl"><${Calculator} className="h-6 w-6" /> Profit Calculator</${CardTitle}>
          <${CardDescription} className="text-blue-100">Calculate your potential returns on watch investments</${CardDescription}>
        </${CardHeader}>
        <${CardContent} className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Watch Details</h3>
              <div className="space-y-4">
                <div>
                  <${Label} for="purchase" className="text-sm font-medium text-slate-700">Purchase Price ($)</${Label}>
                  <${Input} id="purchase" type="number" value=${purchasePrice} onChange=${e => setPurchasePrice(Number(e.target.value))} className="mt-1 text-lg font-semibold" />
                </div>
                <div>
                  <${Label} for="repair" className="text-sm font-medium text-slate-700">Repair Costs ($)</${Label}>
                  <${Input} id="repair" type="number" value=${repairCosts} onChange=${e => setRepairCosts(Number(e.target.value))} className="mt-1" />
                </div>
                <div>
                  <${Label} for="shipping" className="text-sm font-medium text-slate-700">Shipping Costs ($)</${Label}>
                  <${Input} id="shipping" type="number" value=${shippingCosts} onChange=${e => setShippingCosts(Number(e.target.value))} className="mt-1" />
                </div>
                <div>
                  <${Label} for="fee" className="text-sm font-medium text-slate-700">Sales Fee (%)</${Label}>
                  <${Input} id="fee" type="number" value=${salesFee} onChange=${e => setSalesFee(Number(e.target.value))} className="mt-1" />
                </div>
                <div>
                  <${Label} for="roi" className="text-sm font-medium text-slate-700">Target ROI (%)</${Label}>
                  <${Input} id="roi" type="number" value=${targetROI} onChange=${e => setTargetROI(Number(e.target.value))} className="mt-1" />
                </div>
                <${Button} onClick=${resetCalculator} variant="outline" className="w-full mt-4">Reset Calculator</${Button}>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Results</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Total Costs</span>
                    <span className="text-lg font-semibold">$${results.totalCosts.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-orange-700">Break-Even Price</span>
                    <span className="text-lg font-semibold text-orange-700">$${results.breakEvenPrice.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-700">Suggested Selling Price</span>
                    <span className="text-lg font-semibold text-blue-700">$${results.suggestedPrice.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-700">Net Profit</span>
                    <span className="text-lg font-semibold text-green-700">$${results.netProfit.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">ROI</span>
                    <span className="text-2xl font-bold">${results.actualROI.toFixed(1)}%</span>
                  </div>
                  <${Progress} value=${Math.min(results.actualROI, 100)} className="mt-2 bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </${CardContent}>
      </${Card}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <${Card} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <${CardHeader}>
            <${CardTitle} className="flex items-center gap-2"><${TrendingUp} className="h-5 w-5 text-green-600" /> Market Trends</${CardTitle}>
          </${CardHeader}>
          <${CardContent}>
            <div className="space-y-3">
              ${popularBrands.map((brand, index) => html`<div key=${index} className="flex justify-between items-center p-2 rounded-lg hover:bg-slate-50">
                <span className="font-medium">${brand.name}</span>
                <${Badge} variant="outline" className=${brand.color}>${brand.trend}</${Badge}>
              </div>`)}
            </div>
          </${CardContent}>
        </${Card}>
        <${Card} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <${CardHeader}>
            <${CardTitle} className="flex items-center gap-2"><${BarChart3} className="h-5 w-5 text-blue-600" /> Market Statistics</${CardTitle}>
          </${CardHeader}>
          <${CardContent}>
            <div className="space-y-4">
              ${marketStats.map((stat, index) => html`<div key=${index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">${stat.label}</span>
                  <span className="text-xs text-green-600">${stat.trend}</span>
                </div>
                <div className="text-lg font-semibold">${stat.value}</div>
              </div>`)}
            </div>
          </${CardContent}>
        </${Card}>
        <${Card} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm md:col-span-2 lg:col-span-1">
          <${CardHeader}>
            <${CardTitle} className="flex items-center gap-2"><${Star} className="h-5 w-5 text-yellow-600" /> Pro Tips</${CardTitle}>
          </${CardHeader}>
          <${CardContent}>
            <div className="space-y-4">
              ${flippingTips.map((tip, index) => html`<div key=${index} className="flex gap-3 p-3 rounded-lg hover:bg-slate-50">
                <div className="text-blue-600 mt-0.5">${tip.icon}</div>
                <div>
                  <h4 className="font-medium text-sm">${tip.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">${tip.description}</p>
                </div>
              </div>`)}
            </div>
          </${CardContent}>
        </${Card}>
      </div>
      <${Card} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <${CardHeader}>
          <${CardTitle} className="flex items-center gap-2"><${AlertCircle} className="h-5 w-5 text-amber-600" /> Risk Assessment</${CardTitle}>
        </${CardHeader}>
        <${CardContent}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
              <${CheckCircle} className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Low Risk</h3>
              <p className="text-sm text-green-700 mt-1">ROI: 5-15%</p>
              <p className="text-xs text-green-600 mt-2">Established brands, recent models</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-amber-50 border border-amber-200">
              <${AlertCircle} className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <h3 className="font-semibold text-amber-800">Medium Risk</h3>
              <p className="text-sm text-amber-700 mt-1">ROI: 15-30%</p>
              <p className="text-xs text-amber-600 mt-2">Vintage pieces, limited editions</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-red-50 border border-red-200">
              <${Crown} className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-semibold text-red-800">High Risk</h3>
              <p className="text-sm text-red-700 mt-1">ROI: 30%+</p>
              <p className="text-xs text-red-600 mt-2">Rare complications, auction pieces</p>
            </div>
          </div>
        </${CardContent}>
      </${Card}>
    </div>
  </div>`;
}

const root = createRoot(document.getElementById("root"));
root.render(html`<${WatchFlippingDashboard} />`);
