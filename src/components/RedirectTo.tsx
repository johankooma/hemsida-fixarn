import { useEffect } from "react";

interface RedirectToProps {
  to: string;
}

export const RedirectTo = ({ to }: RedirectToProps) => {
  useEffect(() => {
    const current = window.location.href;
    const target = new URL(to, window.location.origin).href;
    if (current !== target) {
      window.location.replace(target);
    }
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center text-ink-soft">
      <p>Omdirigerar…</p>
    </div>
  );
};
