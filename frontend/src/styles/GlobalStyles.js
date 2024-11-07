import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    /* Blue */
    --color-brand-50: #e7f5ff;
    --color-brand-100: #d0ebff;
    --color-brand-200: #a5d8ff;
    --color-brand-300: #74c0fc;
    --color-brand-400: #4dabf7;
    --color-brand-500: #339af0;
    --color-brand-600: #228be6;
    --color-brand-700: #1c7ed6;
    --color-brand-800: #1971c2;
    --color-brand-900: #1864ab;

    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-grey-transparent: rgb(17, 24, 39, 0.9);
    
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --animation-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --animation-medium: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --animation-slow: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
    font-size: 62.5%
}

*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Rubik", sans-serif;
    position: relative;
}

a:link, a:visited {
    text-decoration: none;
    color: inherit;
}

input, button {
    border: none;
    outline: none;
    font-family: inherit;
    background: none;
}

.dropdown:hover + .dropdown-menu, .dropdown-menu:hover {
    transform: translate(0, 100%);

    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.in-cart, .wishlisted {
    font-size: 2rem;
    stroke: var(--color-grey-0);
    fill: var(--color-grey-0);

    animation: jumpUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.wishlisted {
    transform: scale(1);
}

.not-wishlisted {
    transform: scale(0);
}


@keyframes jumpUp {
    0% {
        transform: scale(1) translateY(0) rotate(0);
    }
    
    33% {
        transform: scale(1.1) translateY(-2px) rotate(6deg);
    }

    66% {
        transform: scale(1.1) translateY(-4px) rotate(-6deg);
    }

    100% {
        transform: scale(1) translateY(0) rotate(0);
    }
}

@keyframes dropIn {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity:1;
        transform: translateY(0);
    }
}
`;
