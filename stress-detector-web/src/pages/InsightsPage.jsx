import AcademicCondition from "../components/Insights/AcademicCondition";
import AINarrativeCard from "../components/Insights/AINarrativeCard";
import PriorityCard from "../components/Insights/PriorityCard";
import StatsCard from "../components/Insights/StatsCard";
import StressIntensityChart from "../components/Insights/StressIntensityChart";
import WeeklyActivityChart from "../components/Insights/WeeklyActivityChart";
import Layout from "../../layouts/Layout";


function InsightPage() {
    return (
        <Layout title="Dashboard" name="User" role="User">
        <div className="space-y-6">

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4">
            <StatsCard />
            <StatsCard />
            <StatsCard />
            <StatsCard />
        </div>

        <AINarrativeCard />

        <AcademicCondition />

        <div className="grid lg:grid-cols-2 gap-6">
            <WeeklyActivityChart />
            <StressIntensityChart />
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
            <PriorityCard />
            <PriorityCard />
            <PriorityCard />
            <PriorityCard />
        </div>

        </div>
    </Layout>
    )
}

export default InsightPage;