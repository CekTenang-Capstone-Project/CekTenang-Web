import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "High", value: 33 },
  { name: "Medium", value: 45 },
  { name: "Low", value: 22 },
];

const COLORS = [
  "#f8b4b4",
  "#c7d2fe",
  "#4ade80",
];

function StressIntensityChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h3 className="font-semibold text-xl mb-4">
        Intensitas Stres
      </h3>

      <div className="h-[250px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={65}
              outerRadius={90}
              dataKey="value"
            >
              {data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StressIntensityChart;