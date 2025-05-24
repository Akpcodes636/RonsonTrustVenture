// app/delivery/page.tsx
import DeliveryPageClient from "./DeliveryPageClient";

export default async function DeliveryPage({ searchParams }: { searchParams?: { slug?: string } }) {
  // Because Next.js might resolve searchParams asynchronously
  const slug = searchParams?.slug ?? null;
  return <DeliveryPageClient slug={slug} />;
}
