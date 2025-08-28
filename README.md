# Next.js Rendering Patterns

A practical demonstration of Next.js rendering patterns using a weather application. This project showcases different rendering strategies and their real-world applications.

## Overview

This application demonstrates four key rendering patterns in Next.js:

- **Server-Side Rendering (SSR)** - Dynamic data fetching on the server
- **Client-Side Rendering (CSR)** - Data fetching in the browser
- **Static Site Generation (SSG)** - Build-time data fetching
- **Incremental Static Regeneration (ISR)** - Static generation with dynamic updates

Each pattern is implemented using a weather API to show real-world usage and trade-offs.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/next-rendering-patterns.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/                  # Next.js app directory
│   ├── csr/             # Client-side rendering example
│   ├── isr/             # Incremental static regeneration example
│   ├── ssg/             # Static site generation example
│   └── ssr/             # Server-side rendering example
├── components/          # Shared components
└── lib/                 # Utility functions
```

## Rendering Patterns Explained

### Server-Side Rendering (SSR)

- Route: `/ssr`
- Data fetched on each request
- Ideal for dynamic content requiring SEO

### Client-Side Rendering (CSR)

- Route: `/csr`
- Data fetched in the browser
- Best for user-specific or frequently updated content

### Static Site Generation (SSG)

- Route: `/ssg`
- Data fetched at build time
- Perfect for static content with high performance needs

### Incremental Static Regeneration (ISR)

- Route: `/isr`
- Static pages with background updates
- Balances performance and data freshness

## Development

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- wttr.in Weather API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
