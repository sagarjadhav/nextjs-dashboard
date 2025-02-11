// page.tsx
// # Represents a specific page in Next.js.
// # Contains the primary content for that route.
// # Receives the layout from layout.tsx if it exists.

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customers',
};
  
export default function Page() {
    return <p>Customers Page</p>;
}
