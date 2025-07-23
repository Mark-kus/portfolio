# My Portfolio

A modern portfolio website built with Next.js, React, and TailwindCSS.

## Tech Stack

- **Node.js**: 22.x (LTS)
- **Package Manager**: pnpm 9.x
- **Framework**: Next.js 14.x
- **Frontend**: React 18.x
- **Styling**: TailwindCSS 4.x + DaisyUI
- **Testing**: Jest + Cypress
- **Deployment**: Vercel

## Prerequisites

- Node.js 22.x or higher
- pnpm 9.x or higher

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

## Development

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm test` - Run Jest tests
- `pnpm test:watch` - Run Jest tests in watch mode
- `pnpm cypress:open` - Open Cypress test runner
- `pnpm cypress:run` - Run Cypress tests headlessly
- `pnpm clean` - Clean build artifacts
- `pnpm reinstall` - Clean reinstall dependencies

## Node.js Version Management

This project uses Node.js 22. If you're using fnm (Fast Node Manager):

```bash
fnm use
```

Or if you're using nvm:

```bash
nvm use
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
├── containers/          # Container components
├── context/            # React context providers
├── assets/             # Static assets
└── styles/             # Global styles
```

## Deployment

This project is optimized for deployment on Vercel. The `vercel.json` configuration (if present) contains the deployment settings.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `pnpm test`
5. Submit a pull request
