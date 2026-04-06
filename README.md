# Personal Book Vault

A frontend internship project built with React, TypeScript, and Vite.

The app lets users browse a curated list of books, add books to a personal vault, mark them as read, and view collection statistics by category.

## Features

- Browse books in a responsive grid layout
- Add books to a personal vault
- Prevent duplicate additions to the vault
- Mark books as read/unread
- Remove books from the vault
- Paginated browse view
- Dashboard stats for total books, read, and unread counts
- Category collection stats based on vault books
- Persisted vault state using local storage (via Zustand persist middleware)

## Book Categories

The current dataset uses four major categories:

- Academic
- Science Fiction
- Technology
- Mystery & Thriller

## Routes

- `/` Home dashboard page
  - Hero section
  - Global vault stats
  - Category collection cards
- `/browse` Browse all available books with pagination and add-to-vault actions
- `/vault` View vault books, toggle read status, and remove books

Routing is implemented with TanStack Router file-based routes.

## Tech Stack

- React
- TypeScript
- Vite
- TanStack Router
- Zustand
- Tailwind CSS
- Lucide React icons

## Project Structure

```text
src/
  components/
    browse/
    vault/
  data/
    mockBooks.ts
  hooks/
    useBrowse.ts
    useBookCategoryState.ts
    useDashboardStats.ts
    useVault.ts
  routes/
    __root.tsx
    index.tsx
    browse.tsx
    vault.tsx
  store/
    useBookStore.ts
  types/
    books.ts
```

## Local Development

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## State Management Notes

- Vault state is centralized in `useBookStore`.
- Vault entries include `isRead` in addition to book metadata.
- Data is persisted under the `book-store` key in browser local storage.

## Current Data Model

`Book` includes:

- `id`
- `title`
- `author`
- `image`
- `inVault`
- `category` (Academic | Science Fiction | Technology | Mystery & Thriller)

`BookStoreBook` extends `Book` with:

- `isRead`
