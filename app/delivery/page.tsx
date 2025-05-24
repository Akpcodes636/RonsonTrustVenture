// app/delivery/page.tsx
import DeliveryPageClient from "./DeliveryPageClient";

export default function DeliveryPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const slugParam = searchParams?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam ?? null;

  return <DeliveryPageClient slug={slug} />;
}
