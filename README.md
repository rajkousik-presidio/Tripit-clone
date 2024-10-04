# TripIt Clone

This is a full-stack clone of the TripIt website, built using Vite, React, Tailwind CSS, and Bootstrap CSS. The project implements various user functionalities, including signup, login, pricing comparisons, blog sections, FAQs, and more, offering a complete experience for managing travel plans.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Features Description](#features-description)
- [API Setup](#api-setup)
- [Testing](#testing)
- [License](#license)

## Features

1. **User Authentication**:

   - Signup and Login pages with form validation.
   - Email validation, password length checks, and error messages.
   - User data stored in `json-server`.

2. **Navbar Component**:

   - Responsive navigation bar.
   - Dropdown for language selection.
   - Sidebar for mobile views with hamburger menu.

3. **Home Page**:

   - **Hero Section**: Highlights the main app features with a call to action.
   - **Content Sections Group**: Reusable components for alternating image and text sections.
   - **Blog Component**: Displaying featured blog posts fetched from `json-server`.
   - **Video Section**: Embedded video explaining the application.
   - **Featured Section**: Displays featured logos of media outlets.

4. **Pricing Page**:

   - **Pricing Comparison**: Displays different pricing plans (TripIt Free vs. TripIt Pro).
   - Features data is fetched from `json-server`.
   - Smooth collapsible feature lists for smaller screens.

5. **FAQ Section**:

   - Frequently Asked Questions with smooth transitions.
   - Data for FAQs fetched from `json-server`.

6. **Footer Component**:

   - A simple footer with social media links and branding.

7. **Call to Action Section**:

   - Reusable component encouraging users to sign up.
   - Accepts dynamic titles, descriptions, and button labels as props.

8. **Skeleton Loading**:

   - Circular skeleton loaders for images until content is fully loaded.

9. **Routing**:

   - Defined routing for pages using React Router.
   - A 404 error page for unknown routes.

10. **State Management**:

    - Uses React `useState` and `useEffect` hooks for managing state.
    - Axios configuration setup to interact with the backend API.

11. **Responsive Design**:

    - Mobile-first approach using Tailwind CSS breakpoints.
    - Consistent UI elements for various screen sizes.

12. **Testing**:
    - Unit tests for critical components using Jest and React Testing Library.
    - Tests cover form validation, navigation, and API interactions.

## Technologies Used

- **Frontend**: Vite, React, Tailwind CSS, Bootstrap CSS
- **State Management**: React Hooks
- **Backend**: `json-server` for API simulation
- **HTTP Client**: Axios
- **Testing**: Jest, React Testing Library

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/tripit-clone.git
   cd tripit-clone
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project

1. Start `json-server` and Vite concurrently:

   ```sh
   npm run dev
   ```

   This command runs both the Vite development server and the `json-server` to simulate the backend API.

2. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
tripit-clone/
│
├── public/
│   └── assets/
│       └── images/        # Static images for the project
├── src/
│   ├── components/        # Shared UI components (Navbar, Footer, etc.)
│   ├── pages/             # Main pages (HomePage, PricingPage, etc.)
│   ├── ui/                # Reusable UI elements (InputField, etc.)
│   ├── utils/             # Utility functions and configuration files
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Main entry point
├── db.json                # JSON server data file
├── package.json           # Project configuration and scripts
└── README.md              # Project documentation
```

## Features Description

### 1. User Authentication

- **Signup Page**: Validates user input before submission and stores data using `json-server`.
- **Login Page**: Validates credentials using Axios, with error messages for invalid credentials.

### 2. Pricing Page

- **PlanComparison Component**: Displays TripIt Free and Pro plans, collapsible on smaller screens.
- **Skeleton Loaders**: Used for loading images in a smooth manner.

### 3. FAQ Section

- **Expandable Q&A**: Data fetched from `json-server`. Only one question remains expanded at a time.

### 4. Blog Section

- Displays blog posts with a rotating carousel.
- **Axios** fetches data from `json-server`.

### 5. Call to Action Section

- A reusable section component to display sign-up prompts or any promotional content.

## API Setup

The project uses `json-server` to simulate the backend. The data for users, plans, blogs, and FAQs is stored in `db.json`.

### Setting Up `json-server`

To run the JSON server:

```sh
npx json-server --watch db.json --port 3000
```

This serves data at `http://localhost:3000`.

## Testing

1. Install the required testing libraries:

   ```sh
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

2. To run the tests:
   ```sh
   npm test
   ```

### Test Coverage

- Tests for form validation in Signup/Login pages.
- Navigation and routing verification.
