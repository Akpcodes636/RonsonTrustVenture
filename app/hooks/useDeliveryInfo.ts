// hooks/useDeliveryInfo.ts
import { useEffect, useState } from "react";

export interface OrderDeliveryInfo {
  fullName: string;
  phoneNumber: string;
  address: string;
}

export default function useDeliveryInfo(slug: string | null) {
  const [deliveryInfo, setDeliveryInfo] = useState<OrderDeliveryInfo | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function fetchDeliveryInfo() {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`/api/orders/${slug}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch delivery info: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("API response data:", data);

        setDeliveryInfo({
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
          address: data.address,
        });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.error("Fetch error:", err.message);
        } else {
          setError("Unknown error occurred");
          console.error("Unknown fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchDeliveryInfo();
  }, [slug]);

  return { deliveryInfo, loading, error };
}
