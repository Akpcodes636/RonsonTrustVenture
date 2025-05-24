// app/delivery/page.tsx
import DeliveryPageClient from "./DeliveryPageClient";

export default function DeliveryPage({ searchParams }: { searchParams: { slug?: string } }) {
  return <DeliveryPageClient slug={searchParams.slug ?? null} />;
}
