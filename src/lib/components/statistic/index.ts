import OriginalStatistic from './Statistic.svelte';
import Title from './Title.svelte';
import Value from './Value.svelte';
import Icon from './Icon.svelte';
import Goal from './Goal.svelte';
import OriginalComparison from './Comparison.svelte';
import ComparisonValue from './ComparisonValue.svelte';
import Trend from './Trend.svelte';

const Statistic = OriginalStatistic as StatisticStatic;
Statistic.Icon = Icon;
Statistic.Title = Title;
Statistic.Value = Value;
Statistic.Goal = Goal;
Statistic.Comparison = OriginalComparison as ComparisonStatic;
Statistic.Comparison.Value = ComparisonValue;
Statistic.Comparison.Trend = Trend;

export default Statistic;

export interface StatisticStatic {
	new (...args: ConstructorParameters<typeof OriginalStatistic>): OriginalStatistic;
	Icon: typeof Icon;
	Title: typeof Title;
	Value: typeof Value;
	Goal: typeof Goal;
	Comparison: ComparisonStatic;
}

export interface ComparisonStatic {
	new (...args: ConstructorParameters<typeof OriginalComparison>): OriginalComparison;
	Value: typeof ComparisonValue;
	Trend: typeof Trend;
}
