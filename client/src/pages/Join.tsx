// client/src/pages/Join.tsx
import { useEffect } from "react";

export default function Join() {
  useEffect(() => {
    // possible hydrate work later
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => {
      payload[k] = String(v);
    });

    // Placeholder: replace with your ATS / CRM integration.
    console.log("Join payload:", payload);
    alert("Thanks — we’ll keep you in mind. In production this form would submit to your ATS.");
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

        <h1 className="text-2xl font-semibold mb-2">Join VitaTalent as a candidate</h1>
        <p className="text-gray-600 mb-6">
          Share a few details and we’ll keep you in mind when there’s a strong match with roles we’re
          working on.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Full name</div>
            <input name="name" required className="w-full rounded-md border px-3 py-2" />
          </label>

          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Email</div>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-md border px-3 py-2"
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Location / time zone</div>
            <input
              name="location"
              className="w-full rounded-md border px-3 py-2"
              placeholder="e.g., Europe (UTC+1)"
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Role interests / skills</div>
            <input
              name="skills"
              className="w-full rounded-md border px-3 py-2"
              placeholder="e.g., Product Marketing, PM, Design"
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-700 mb-1">Quick note / availability (optional)</div>
            <textarea
              name="message"
              className="w-full rounded-md border px-3 py-2 min-h-[110px]"
              placeholder="e.g., Full-time, 20 hours/week, timezone constraints"
            />
          </label>

          <input type="hidden" name="intent" value="candidate" />

          <div className="flex items-center gap-3 mt-2">
            <button
              type="submit"
              className="rounded-full px-5 py-2 bg-indigo-600 text-white font-semibold"
            >
              Join talent pool
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
            This is a placeholder form — wire to your CRM/ATS when ready.
          </div>
        </form>
      </div>
    </div>
  );
}
