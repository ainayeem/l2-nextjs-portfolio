"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component only renders on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or null during server-side rendering
    return <>{children}</>;
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
