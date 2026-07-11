import { responsiveSizeRules } from "@/lib/data/profile";

export const ResponsiveSizeGuide = () => {
  return (
    <section className="panel-shell mt-4">
      <h2 className="text-lg font-semibold text-amber-900">Responsive Size Guide</h2>
      <p className="mt-2 text-sm text-stone-700">
        Component behavior targets across breakpoints (mobile, tablet, desktop, wide).
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-xs md:text-sm">
          <thead>
            <tr className="border-b border-amber-200 text-amber-900">
              <th className="px-2 py-2 font-semibold">Component</th>
              <th className="px-2 py-2 font-semibold">Mobile</th>
              <th className="px-2 py-2 font-semibold">Tablet</th>
              <th className="px-2 py-2 font-semibold">Desktop</th>
              <th className="px-2 py-2 font-semibold">Wide</th>
            </tr>
          </thead>
          <tbody>
            {responsiveSizeRules.map((row) => (
              <tr key={row.component} className="border-b border-amber-100 align-top">
                <td className="px-2 py-2 font-medium text-amber-900">{row.component}</td>
                <td className="px-2 py-2 text-stone-700">{row.mobile}</td>
                <td className="px-2 py-2 text-stone-700">{row.tablet}</td>
                <td className="px-2 py-2 text-stone-700">{row.desktop}</td>
                <td className="px-2 py-2 text-stone-700">{row.wide}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
