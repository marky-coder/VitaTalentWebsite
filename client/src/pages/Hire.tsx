// client/src/pages/Hire.tsx
import { useEffect, useState } from "react";

export default function Hire() {
  const [pack, setPack] = useState<string | undefined>(undefined);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const p = params.get("pack") ?? undefined;
      if (p) setPack(p);
    } catch (e) {
      // ignore
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => {
      payload[k] = String(v);
    });

    // Placeholder: replace with your CRM / GHL / HubSpot integration.
    console.log("Hire inquiry payload:", payload);
    alert(
      "Thanks — we received your hire inquiry. In production this would be sent to your CRM."
    );
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <header className="flex items-center justify-between mb-6">
          <div className="text-2xl font-extrabold tracking-tight">
            VITA<span className="text-indigo-600">TALENT</span>
          </div>
          <a className="text-sm text-indigo-600" href="/">
            ← Back home
          </a>
        </header>

        <h1 className="text-2xl font-semibold mb-2">Hire global talent with VitaTalent</h1>
        <p className="text-gray-600 mb-6">
          Tell us about the role and team. We’ll follow up with a short Loom or email outlining how
          we’d approach it.
        </p>

        {pack && (
          <div className="mb-4 text-sm text-gray-700">
            <strong>Selected pack:</strong> {pack}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Name</div>
            <input
              name="name"
              required
              className="w-full rounded-md border px-3 py-2"
              placeholder="Your full name"
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Email</div>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-md border px-3 py-2"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Company</div>
            <input
              name="company"
              className="w-full rounded-md border px-3 py-2"
              placeholder="Company name (optional)"
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Role title / brief</div>
            <input
              name="role"
              className="w-full rounded-md border px-3 py-2"
              placeholder="e.g., Product Marketing Manager (remote)"
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Context (optional)</div>
            <textarea
              name="message"
              className="w-full rounded-md border px-3 py-2 min-h-[110px]"
              placeholder="Tell us about team size, must-haves, timeline, etc."
            />
          </label>

          <input type="hidden" name="intent" value="hire" />

          <div className="flex items-center gap-3 mt-2">
            <button
              type="submit"
              className="rounded-full px-5 py-2 bg-indigo-600 text-white font-semibold"
            >
              Send &amp; we’ll follow up
            </button>

            <button
              type="button"
              className="rounded-full px-4 py-2 border"
              onClick={() => (window.location.href = "/")}
            >
              Cancel
            </button>
          </div>

          <div className="text-xs text-gray-500 mt-2">
            This form is a placeholder — replace with your CRM / GHL / HubSpot integration when ready.
          </div>
        </form>
      </div>
    </div>
  );
}
