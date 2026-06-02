function PriorityCard({
  title,
  description,
  level,
  duration,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
      <span className="inline-flex px-3 py-1 rounded-full text-xs bg-red-600">
        {level}
      </span>

      <h4 className="font-semibold text-2xl mt-4">
        {title}
      </h4>

      <p className="text-zinc-500 mt-3">
        {description}
      </p>

      <div className="flex justify-end mt-6">
        <span className="text-blue-300 font-semibold">
          {duration}
        </span>
      </div>
    </div>
  );
}

export default PriorityCard;