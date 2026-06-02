import { Sparkles } from "lucide-react";

function AINarrativeCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex gap-3 items-start">
        <div className="p-3 rounded-lg bg-blue-500/20">
          <Sparkles size={18} />
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            AI Narrative Insight
          </h3>

          <p className="text-zinc-500 text-sm">
            Berikut insight untuk minggu ini
          </p>
        </div>
      </div>

      <div className="mt-4 bg-black/40 rounded-lg p-5">
        <p className="text-zinc-300 leading-8">
          Analisis AI menunjukkan korelasi kuat antara
          siklus Assignment Late yang tinggi dan
          penurunan Sleep Quality...
        </p>
      </div>
    </div>
  );
}

export default AINarrativeCard;