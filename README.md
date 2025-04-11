# React Refs and Portals Demo Project

This is a **React demo app** that demonstrates the use of **Refs** and **Portals** for advanced DOM manipulation and value management in React. It highlights key concepts such as accessing and managing DOM elements with Refs, exposing component APIs, and detaching DOM rendering from the JSX structure using Portals. This project also explores how to manage user input with state and how to implement advanced features like closing modals with the Escape (ESC) key.

---

## 🚀 Overview

The app explores **React Refs** and **Portals** to manage DOM interactions beyond the typical React component rendering flow. By using Refs, the app demonstrates how to manage DOM elements directly, pass data between components, and access and manipulate the DOM for tasks like modals and other complex UI features.

Key features of the app include:

- **Accessing DOM elements with refs**
- **Managing values with refs**
- **Exposing API functions from components**
- **Using Portals to detach DOM rendering from JSX structure**
- **Closing modals with the ESC key**
- **Forwarding refs to custom components**
- **Using `useImperativeHandle` to expose component APIs**

---

## 🛠️ Features Learned

While building this demo, several advanced React concepts were explored, including:

### 1. **Accessing DOM Elements with Refs**

- Used React's `useRef` hook to directly access DOM elements for manipulation (e.g., setting the user's name).
- Demonstrated how refs enable direct interaction with DOM elements, bypassing React’s declarative approach.

### 2. **Managing Values with Refs**

- Managed persistent values across re-renders, such as creating a reference to store a timer ID that persists across component re-renders.

### 3. **Exposing API Functions from Components**

- Exposed internal component functionality to other components via refs, providing access to specific methods (e.g., opening or closing a modal programmatically).

### 4. **Using Portals to Detach DOM Rendering**

- Utilized **React Portals** to render components outside the parent component’s DOM hierarchy, such as rendering modals.
- Portals help in cases where you want to keep the component structure intact but render the UI outside the typical DOM flow (e.g., appending modals to the body).

### 5. **Managing User Input with State (Two-Way Binding)**

- Implemented two-way data binding to synchronize form inputs with component state using `useState`.
- Connected HTML elements like input fields with React’s state system using refs and `onChange` handlers.

### 6. **Forwarding Refs to Custom Components**

- Used **React’s `forwardRef`** function to pass refs to child components. This allows parent components to directly access the child component's DOM elements.

### 7. **Exposing Component APIs via `useImperativeHandle` Hook**

- **`useImperativeHandle`** was used to expose specific methods or properties from a child component to its parent, allowing for more direct control over a component’s behavior.

### 8. **Closing the Modal via ESC (Escape) Key**

- Implemented a feature that listens for the **Escape (ESC)** key press to close modals or overlay components, improving accessibility and user experience.

---

## 📚 Learning Resources

- **[React Documentation - Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)**
- **[React Documentation - Portals](https://reactjs.org/docs/portals.html)**
- **[React - The Complete Guide 2025 (incl. Next.js & Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)** by **Maximilian Schwarzmüller**

---

## 📦 Features and Techniques Implemented

- **Refs in Functional Components**  
   Leveraged **`useRef`** and **`forwardRef`** to access and manage DOM elements, enhancing interactions with input fields and UI components.

- **Portals for Modals and Overlays**  
   Used **React Portals** to render modals outside the regular component hierarchy, enabling more flexible positioning of UI elements like modals.

- **Exposing Component APIs**  
   Enabled child components to expose internal methods to parent components using **`useImperativeHandle`** to allow for method invocation from the parent component.

- **Escape Key for Closing Modals**  
   Added keyboard accessibility by allowing users to press the **ESC** key to close modals, enhancing the UX.

---

## 🤖 Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Hooks** - `useState`, `useRef`, `useImperativeHandle`
- **React Portals** - For rendering UI elements outside the parent DOM hierarchy
- **Event Handling** - To manage user interactions, including closing modals via the Escape key
