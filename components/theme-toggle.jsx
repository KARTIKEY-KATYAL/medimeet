"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-9 h-9">
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 border-emerald-900/30 hover:bg-muted/80 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-emerald-400" />
      ) : (
        <Moon className="h-4 w-4 text-emerald-600" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}