// app/delivery/page.tsx
// app/delivery/page.tsx
import DeliveryPageClient from "./DeliveryPageClient";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function DeliveryPage({ searchParams }: PageProps) {
  // Await the searchParams promise
  const resolvedSearchParams = await searchParams;
  const slugParam = resolvedSearchParams?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam ?? null;

  return <DeliveryPageClient slug={slug} />;
}
