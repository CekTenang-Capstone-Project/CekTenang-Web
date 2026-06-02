import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";

const data = [
  { day: "SEN", value: 58 },
  { day: "SEL", value: 55 },
  { day: "RAB", value: 60 },
  { day: "KAM", value: 74 },
  { day: "JUM", value: 57 },
  { day: "SAB", value: 54 },
  { day: "MIN", value: 62 },
];

function WeeklyActivityChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h3 className="font-semibold text-xl mb-5">
        Metrik Aktivitas Mingguan
      </h3>

      <div className="h-[250px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#c4d3ff"
              strokeWidth={3}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeeklyActivityChart;