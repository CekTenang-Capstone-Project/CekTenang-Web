const data = [
  {
    label: "WAKTU BELAJAR",
    value: "6.5 Jam",
    width: "65%",
    color: "bg-blue-300",
  },
  {
    label: "BEBAN TUGAS",
    value: "Tinggi",
    width: "85%",
    color: "bg-red-300",
  },
  {
    label: "TEKANAN DEADLINE",
    value: "86%",
    width: "86%",
    color: "bg-red-300",
  },
  {
    label: "AKTIVITAS FISIK",
    value: "32 Min",
    width: "35%",
    color: "bg-green-400",
  },
  {
    label: "TIDUR (KUALITAS)",
    value: "5.5 Jam",
    width: "55%",
    color: "bg-blue-300",
  },
];

function AcademicCondition() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h3 className="font-semibold text-xl mb-8">
        Rata-Rata Kondisi Akademik
      </h3>

      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-2">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>

            <div className="h-1 bg-zinc-800 rounded-full">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicCondition;