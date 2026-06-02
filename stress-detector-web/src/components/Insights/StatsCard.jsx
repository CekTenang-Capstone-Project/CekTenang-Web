function StatsCard({ title, value, subtitle, color = "text-red-400", }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
      <p className="text-xs uppercase text-zinc-400 mb-3">
        {title}
      </p>

      <div className="flex items-end gap-1">
        <h2 className={`text-5xl font-bold ${color}`}>
          {value}
        </h2>

        <span className="text-zinc-400 mb-2">
          /100
        </span>
      </div>

      <p className="text-sm text-zinc-500 mt-3">
        {subtitle}
      </p>
    </div>
  );
}

export default StatsCard;