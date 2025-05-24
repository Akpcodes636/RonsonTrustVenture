// app/delivery/page.tsx
import { Metadata } from "next";

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function DeliveryPage({ searchParams }: PageProps) {
  const slugParam = searchParams?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam ?? null;

  return <DeliveryPageClient slug={slug} />;
}
