import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
}
