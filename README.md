# Watch Flipping Calculator

This React + Vite app helps you determine a profitable selling price when flipping watches. Enter your purchase information and desired ROI and the calculator will suggest a price that accounts for fees and expenses.

## Features
- Modern interface built with Tailwind CSS and shadcn/ui components.
- Calculates Total Costs, Break‑Even Price, Suggested Selling Price, Net Profit and ROI.
- Color coded profit/loss.
- Responsive layout that works on mobile and desktop.

## Development
1. Install dependencies with `npm install`.
2. Run the dev server with `npm run dev`.
   This project relies on Vite to transform JSX files.
   Opening `index.html` directly in the browser will result in a MIME type error.
   Always start the development server or build the project first.
3. To preview the built site run:
   ```bash
   npm run build
   npm run preview
   ```

Tailwind configuration is in `tailwind.config.js`. Main logic lives in `src/App.jsx`.
