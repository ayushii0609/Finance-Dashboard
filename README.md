# Finance Dashboard

A modern, high-performance financial management application built with **React** and **Tailwind CSS v4**. This project focuses on clean data visualization, responsive layouts, and advanced UI state management.

## Key Features

-   **Real-time Analytics:** Summary cards that dynamically calculate Total Balance, Income, and Expenses.
-   **Data Visualization:** Interactive bar charts using `Chart.js` for spending pattern analysis.
-   **Advanced UI Controls:**
    -   **Dynamic Role Toggle:** Simulated "Admin" and "Viewer" modes to demonstrate conditional rendering and access control.
    -   **Unified Dark Mode:** A high-performance theme engine optimized for the Tailwind v4 utility system.
-   **Transaction Management:** -   Integrated search bar for quick history lookup.
    -   Type-based filtering (Income vs. Expense) for efficient data sorting.
-   **Mobile-First Design:** Fully responsive navigation and card-based layout optimized for mobile, tablet, and desktop.

## Tech Stack

-   **Library:** React.js (Hooks, Router)
-   **Styling:** Tailwind CSS v4 (Standard Utility Engine)
-   **Charts:** Chart.js & React-Chartjs-2
-   **Build Tool:** Vite

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_LINK_HERE]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Launch the development server:**
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:5173` in your browser.

## Implementation Details

The application uses a centralized state architecture in `App.jsx` to ensure that User Roles and Theme preferences remain synchronized across the Sidebar, Navbar, and individual Pages.

