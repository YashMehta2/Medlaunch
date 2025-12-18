# Medlaunch Multi-Step Form – Pixel Perfect UI (React)

This project implements the Medlaunch UI/UX Developer Assessment challenge – a fully pixel-perfect multi-step form built using React and pure CSS. The goal is to match the provided Figma design as accurately as possible, including spacing, typography, interactive states, transitions, and navigation.

---

How to Install and Run the App Locally
Prerequisites

Node.js (v18 or later)

npm or yarn

Installation and Startup

Clone the repo:

git clone <repository-url>

Enter the folder:

cd <project-folder>

Install dependencies:

npm install

Run dev server:

npm run dev

The app will run at:

http://localhost:5173

🛠 Tech Stack Used

React 18 – UI library

React Router DOM – Client-side routing

React Context API – Global state for all steps

Vite – Development server and bundler

Vanilla CSS – No UI framework

🎯 Summary of UI Implementation Approach

A wizard-style multi-step flow

Each step is a dedicated page responsible for specific information

Global form state stored inside a centralized Context provider to persist values

Navigation handled using reusable StepNavigation component

Review page displays collected data and allows editing previous steps

Collapsible review sections allow toggling visibility of each section

Shared logic (same-as checkboxes) used to auto-copy values where required

🧩 Design Decisions Made
CSS Methodology

Plain CSS scoped at component or page level

Flexbox + CSS Grid used for layouts

Consistent class naming patterns such as .review-section, .review-header, .pill

No external UI libraries to maintain full control of styling

Component Structure

Individual form step components for maintainability

Shared UI components for reusable behavior

Context + hook logic moved into separate files to support React Fast Refresh

Review layout uses reusable Section component for expand/collapse behavior

📱 Assumptions About Responsive and Interaction Behavior

Desktop-first UI approach

Assumed screen breakpoints:

Desktop ≥ 1024px

Tablet ≥ 768px

Mobile ≥ 375px

All review sections visible when first loaded

Users can freely go backward/forward without data loss

No authentication or server submission required

⚠ Known Issues / Limitations

No backend integration

Final submit action does not persist or transmit form data

Minimal form validation

Accessibility and keyboard navigation could be improved

Some responsive layout refinements pending

Minor UI/spacing differences require polishing for full pixel accuracy

✅ Conclusion

This project demonstrates a scalable and organized approach to building multi-step forms in React using:

centralized persistent form state

reusable navigation + UI components

a clear review-and-edit workflow

The project currently focuses on UI implementation rather than end-to-end functionality; future improvements can extend validation, backend APIs, and accessibility.

```

```
