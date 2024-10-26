"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      const publicPaths = ["/login", "/register", "/forgot-password"];
      const isPublicPath = publicPaths.includes(pathname);

      if (!token && !isPublicPath && token != undefined) {
        router.push("/login");
      } else if (token && isPublicPath) {
        router.push("/dashboard");
      }
    };

    checkAuth();
  }, [pathname, router]);

  return <>{children}</>;
}
