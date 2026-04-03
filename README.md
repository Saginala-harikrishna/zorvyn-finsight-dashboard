# Zorvyn FinSight — Financial Dashboard

A modern, responsive, and interactive **FinTech dashboard UI** built as part of the **Frontend Developer Intern Assignment** for **Zorvyn FinTech Pvt. Ltd.**

This project is designed to help users **track financial activity, understand spending behavior, explore transaction history, and receive intelligent insights** through visual analytics and an AI-powered finance assistant.

The application focuses on **frontend architecture, UI/UX quality, state management, responsiveness, and product thinking**.

---

# Project Objective

The objective of this project is to simulate a real-world **financial analytics dashboard** where users can:

* view financial summaries
* analyze transactions
* identify spending patterns
* explore insights
* interact with an AI-based financial assistant

This project uses **static mock data** to simulate real-world financial transaction flows and dashboard behavior.

---

# Core Features Implemented

## 1) Dashboard Overview

The dashboard landing page is designed as the **main financial control center**.

### Features included

* Total Balance card
* Income card
* Expenses card
* Savings card
* Balance trend chart
* Spending breakdown chart
* Quick insight cards

### Purpose

This section helps users quickly understand:

* current financial position
* monthly income vs expenses
* savings trend
* top spending patterns

### How it is implemented

Built using:

* reusable React components
* Tailwind CSS grid layouts
* Recharts visualizations
* reusable summary cards

Components used:

* `SummaryCard`
* `BalanceTrendChart`
* `SpendingDonutChart`
* `InsightsCard`

---

## 2) Transactions Module

This section provides a detailed transaction history interface.

### Features included

* transaction table
* date
* merchant
* amount
* category
* transaction type
* search functionality
* category filtering
* responsive table
* empty state handling

### Purpose

This allows users to:

* review where money was spent
* search previous transactions
* filter by category
* analyze spending activity

### How it is implemented

Built using:

* Redux Toolkit slices
* transaction filtering reducers
* reusable transaction row components
* responsive table wrappers

Files used:

* `transactionsSlice.js`
* `TransactionRow.jsx`
* `Transactions.jsx`

---

## 3) Basic Role-Based UI (RBAC Simulation)

This feature is implemented exactly as requested in the assignment.

### Roles implemented

### Viewer

* read-only access
* can only view dashboard data
* cannot edit actions

### Admin

* can access edit and delete actions
* can manage transactions

### Purpose

This demonstrates **frontend role-based UI behavior simulation**.

This is not backend RBAC.

This is a frontend state-driven UI control.

### How it is implemented

Using Redux Toolkit:

* `roleSlice.js`
* navbar role dropdown
* conditional rendering

Example:

* viewer → read only
* admin → edit/delete buttons visible

---

## 4) Financial Insights Page

This section provides users with analytics-driven financial observations.

### Features included

* highest spending category
* total monthly expenses
* category comparison chart
* alerts
* savings recommendations

### Purpose

This helps users understand:

* where they spend the most
* total expenses
* how to improve spending habits

### How it is implemented

Built using:

* utility functions
* transaction aggregation logic
* analytics cards
* Recharts bar chart

Files used:

* `insights.js`
* `InsightMetricCard.jsx`
* `CategoryComparisonChart.jsx`

---

# 5) AI Finance Copilot (Highlight Feature)

This is the **standout feature of the project**.

The AI Finance Copilot is designed as a **human-like conversational assistant** that allows users to interact naturally with their financial data.

Instead of manually checking tables and charts, users can ask questions in natural language.

Examples:

* *How much did I spend on food this month?*
* *Which category has the highest spending?*
* *Give me savings suggestions*
* *What are my total expenses?*

---

## Why we implemented AI Copilot

In modern product design, dashboards are evolving from static visual interfaces into **AI-assisted decision-making systems**.

The purpose of this feature is to improve:

* usability
* accessibility
* user engagement
* faster decision making
* natural human interaction

This makes the dashboard feel more like a **smart financial assistant** rather than only a UI.

---

## Purpose of AI Copilot

The main intention of this feature is:

> to allow users to communicate with the system like a human conversation.

Instead of manually searching through charts and transactions, the user can simply type a question.

The system interprets the intent and returns meaningful responses.

This improves user experience significantly.

---

## Current implementation approach

Currently, this AI module is implemented using a **frontend rule-based response engine**.

It analyzes the input query and matches user intent.

Example logic:

* food-related query
* shopping query
* total expense query
* highest spending query
* savings suggestion query

The response is then generated using the static mock transaction dataset.

---

## Real-world scalability vision

This feature is intentionally designed so that it can be extended into a real production AI system.

In a real-world implementation, this AI Copilot can be connected to:

### Backend APIs

Backend financial transaction data can be fetched and analyzed.

Example:

* transaction APIs
* user spending history
* monthly reports
* merchant data

---

### LLM / AI tools

The chat interface can be integrated with any LLM-based system such as:

* OpenAI API
* custom finance-specific LLM
* internal NLP engine
* vector database retrieval
* backend analytics engine

This would allow the assistant to provide:

* deeper financial analysis
* predictive recommendations
* personalized savings strategies
* monthly budget planning
* anomaly detection

---

## Why this feature is useful for recruiters to understand

This feature demonstrates:

* product innovation
* modern AI-first UX thinking
* frontend architecture skills
* scalable product design thinking
* practical real-world extensibility

The current version proves the **UI architecture and product concept**, while clearly showing how it can be extended with backend and LLM integrations.

---

# Tech Stack

## Frontend

* React.js
* JavaScript
* Redux Toolkit
* React Router DOM

## Styling

* Tailwind CSS

## Charts

* Recharts

## Icons

* Lucide React

---

# State Management

Redux Toolkit is used to manage:

* transactions
* filters
* selected role
* UI states
* AI interaction flow

This ensures:

* scalability
* modularity
* clean reducer architecture

---

# Responsiveness

The UI is fully responsive across:

* desktop
* tablet
* mobile

Implemented using Tailwind responsive breakpoints.

---

# Project Structure

```text
src/
├── app/
├── components/
├── pages/
├── features/
├── data/
├── utils/
└── main.jsx
```

---

# Setup Instructions

```bash
git clone <repository-url>
cd zorvyn-finsight-dashboard
npm install
npm run dev
```

---

# Future Improvements

* backend API integration
* real LLM-powered AI assistant
* advanced financial predictions
* data persistence
* export reports
* budget planner

---

# Author

**Saginala Hari Krishna**

Frontend Developer Intern Assignment Submission
Zorvyn FinTech Pvt. Ltd.
