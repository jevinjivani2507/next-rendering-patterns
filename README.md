# Next.js Rendering Patterns Demo

This project demonstrates different rendering patterns in Next.js using a weather application. It showcases Server-Side Rendering (SSR), Client-Side Rendering (CSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR).

## Features

The application fetches weather data for London using the wttr.in API and displays it using different rendering methods:

### 🌐 Server-Side Rendering (SSR)

- Route: `/ssr`
- Renders on the server for each request
- Fresh data on every page load
- Best for SEO and real-time data

### 💻 Client-Side Rendering (CSR)

- Route: `/csr`
- Renders in the browser
- Data fetched after page load
- Best for dynamic, user-specific content
- Updates in real-time

### 📄 Static Site Generation (SSG)

- Route: `/ssg`
- Generated at build time
- Fastest page loads
- Best for static content
- Data is static until next build

### 🔄 Incremental Static Regeneration (ISR)

- Route: `/isr`
- Static generation with periodic updates
- Revalidates every 30 seconds
- Combines benefits of static and dynamic rendering
- Updates in the background

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [wttr.in API](https://wttr.in/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or bun

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd next-rendering-patterns
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

# or

yarn install

# or

bun install
\`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev

# or

yarn dev

# or

bun dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

To create a production build:

\`\`\`bash
npm run build

# or

yarn build

# or

bun run build
\`\`\`

## Project Structure

\`\`\`
├── app/
│ ├── csr/
│ │ └── page.tsx # Client-side rendered page
│ ├── isr/
│ │ └── page.tsx # Incremental static regeneration page
│ ├── ssg/
│ │ └── page.tsx # Static site generated page
│ ├── ssr/
│ │ └── page.tsx # Server-side rendered page
│ ├── layout.tsx # Root layout with navigation
│ └── page.tsx # Root page (redirects to /ssr)
├── components/
│ ├── navigation.tsx # Navigation component
│ └── ui/ # UI components
├── lib/
│ └── utils.ts # Utility functions
\`\`\`

## Key Implementation Details

### SSR Implementation

- Uses Next.js server components
- Fetches data on each request
- Includes revalidation for caching

### CSR Implementation

- Uses React hooks (useState, useEffect)
- Client-side data fetching
- Loading and error states

### SSG Implementation

- Data fetched at build time
- Static content generation
- Fastest page loads

### ISR Implementation

- Combines static generation with revalidation
- Background data updates
- Configurable revalidation interval

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Rendering Patterns](https://nextjs.org/docs/app/building-your-application/rendering)

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
