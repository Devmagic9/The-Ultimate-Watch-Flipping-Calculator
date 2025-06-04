import React, { useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

function Input({ className = "", ...props }) {
  return React.createElement("input", {
    className:
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-1.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " +
      className,
    ...props,
  });
}

function Label({ className = "", ...props }) {
  return React.createElement("label", {
    className:
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " +
      className,
    ...props,
  });
}

function Button({ className = "", ...props }) {
  return React.createElement("button", {
    className:
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 " +
      className,
    ...props,
  });
}

function Card({ className = "", ...props }) {
  return React.createElement("div", {
    className: "rounded-lg border bg-card text-card-foreground shadow-sm " + className,
    ...props,
  });
}

function CardHeader({ className = "", ...props }) {
  return React.createElement("div", {
    className: "flex flex-col space-y-1.5 p-6 " + className,
    ...props,
  });
}

function CardTitle({ className = "", ...props }) {
  return React.createElement("h3", {
    className: "text-2xl font-semibold leading-none tracking-tight " + className,
    ...props,
  });
}

function CardContent({ className = "", ...props }) {
  return React.createElement("div", {
    className: "p-6 pt-0 " + className,
    ...props,
  });
}

function CardFooter({ className = "", ...props }) {
  return React.createElement("div", {
    className: "flex items-center p-6 pt-0 " + className,
    ...props,
  });
}

function App() {
  const [purchase, setPurchase] = useState("");
  const [repair, setRepair] = useState("");
  const [shipping, setShipping] = useState("");
  const [fee, setFee] = useState("");
  const [target, setTarget] = useState("");

  const p = parseFloat(purchase) || 0;
  const r = parseFloat(repair) || 0;
  const s = parseFloat(shipping) || 0;
  const f = parseFloat(fee) || 0;
  const t = parseFloat(target) || 0;

  const total = p + r + s;
  const breakEven = f >= 100 ? 0 : total / (1 - f / 100);
  const selling = f >= 100 ? 0 : (total * (1 + t / 100)) / (1 - f / 100);
  const net = selling * (1 - f / 100) - total;
  const roi = total === 0 ? 0 : (net / total) * 100;
  const color = net > 0 ? "text-green-600" : "text-red-600";

  return React.createElement(
    "div",
    { className: "grid gap-6 md:grid-cols-2" },
    React.createElement(
      Card,
      null,
      React.createElement(CardHeader, null, React.createElement(CardTitle, null, "Watch Details")),
      React.createElement(
        CardContent,
        { className: "space-y-4" },
        React.createElement(
          "div",
          null,
          React.createElement(Label, { htmlFor: "purchase" }, "Purchase Price ($)"),
          React.createElement(Input, {
            id: "purchase",
            type: "number",
            min: "0",
            value: purchase,
            onChange: (e) => setPurchase(e.target.value),
          })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(Label, { htmlFor: "repair" }, "Repair Costs ($)"),
          React.createElement(Input, {
            id: "repair",
            type: "number",
            min: "0",
            value: repair,
            onChange: (e) => setRepair(e.target.value),
          })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(Label, { htmlFor: "shipping" }, "Shipping Costs ($)"),
          React.createElement(Input, {
            id: "shipping",
            type: "number",
            min: "0",
            value: shipping,
            onChange: (e) => setShipping(e.target.value),
          })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(Label, { htmlFor: "fee" }, "Sales Fee (%)"),
          React.createElement(Input, {
            id: "fee",
            type: "number",
            min: "0",
            value: fee,
            onChange: (e) => setFee(e.target.value),
          })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(Label, { htmlFor: "target" }, "Target ROI (%)"),
          React.createElement(Input, {
            id: "target",
            type: "number",
            min: "0",
            value: target,
            onChange: (e) => setTarget(e.target.value),
          })
        )
      ),
      React.createElement(
        CardFooter,
        null,
        React.createElement(
          Button,
          {
            type: "button",
            onClick: () => {
              setPurchase("");
              setRepair("");
              setShipping("");
              setFee("");
              setTarget("");
            },
          },
          "Reset"
        )
      )
    ),
    React.createElement(
      Card,
      null,
      React.createElement(CardHeader, null, React.createElement(CardTitle, null, "Results")),
      React.createElement(
        CardContent,
        { className: "space-y-2 text-sm md:text-base" },
        React.createElement("p", null, `Total Costs: $${total.toFixed(2)}`),
        React.createElement("p", null, `Break-Even Price: $${breakEven.toFixed(2)}`),
        React.createElement("p", null, `Suggested Selling Price: $${selling.toFixed(2)}`),
        React.createElement("p", { className: color }, `Net Profit: $${net.toFixed(2)}`),
        React.createElement("p", { className: color }, `ROI: ${roi.toFixed(2)}%`)
      )
    )
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  React.createElement(
    "div",
    { className: "container max-w-4xl mx-auto px-4 py-8" },
    React.createElement("h1", { className: "text-2xl font-bold mb-4 text-center" }, "Watch Flipping Calculator"),
    React.createElement(App)
  )
);
