<script lang="ts">
	import { Col, Statistic } from '../../lib';
	import { formatNumber } from '../../lib/utils';

	const totalLikes = 25660000;
	const totalLikesLastYear = 27660000;

	const pageViews = 2660000;
	const pageViewsLastYear = 2580000;

	const newUsers = 82001;
	const usersGoal = 100000;

	function getTrendValue(current: number, comparison: number | undefined) {
		return !comparison ? current : current - comparison;
	}

	function getTrendPercent(current: number, comparison: number | undefined) {
		const trendValue = !comparison ? current : current - comparison;
		return !comparison || comparison === 0 ? 100 : trendValue / comparison;
	}

	function getProgress(value: number, goal = 100) {
		return !goal || goal === 0 ? 100 : (value / goal) * 100;
	}
</script>

<Col class="col-24 md:col-8">
	<Statistic>
		<Statistic.Icon slot="icon" icon="favorite" />
		<Statistic.Title slot="title">Total Likes</Statistic.Title>
		<Statistic.Value slot="value">
			{formatNumber(totalLikes, {
				style: 'decimal',
				notation: 'compact',
				maximumFractionDigits: 1,
				minimumFractionDigits: 1
			})}
		</Statistic.Value>
		<Statistic.Comparison slot="comparison">
			<Statistic.Comparison.Value slot="value">
				Last Year: {formatNumber(totalLikesLastYear, {
					style: 'decimal',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Comparison.Value>
			<Statistic.Comparison.Trend icon="trending_up" slot="trend">
				{formatNumber(getTrendValue(totalLikes, totalLikesLastYear), {
					style: 'decimal',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})} ({formatNumber(getTrendPercent(totalLikes, totalLikesLastYear), {
					style: 'percent'
				})})
			</Statistic.Comparison.Trend>
		</Statistic.Comparison>
	</Statistic>
</Col>

<Col class="col-24 md:col-8">
	<Statistic>
		<Statistic.Icon slot="icon" icon="assessment" />
		<Statistic.Title slot="title">Page Views</Statistic.Title>
		<Statistic.Value slot="value">
			{formatNumber(pageViews, {
				style: 'currency',
				notation: 'compact',
				maximumFractionDigits: 1,
				minimumFractionDigits: 1
			})}
		</Statistic.Value>
		<Statistic.Comparison slot="comparison">
			<Statistic.Comparison.Value slot="value">
				Last Year: {formatNumber(pageViewsLastYear, {
					style: 'currency',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Comparison.Value>
			<Statistic.Comparison.Trend icon="trending_up" slot="trend">
				{formatNumber(getTrendValue(pageViews, pageViewsLastYear), {
					style: 'currency',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})} ({formatNumber(getTrendPercent(pageViews, pageViewsLastYear), {
					style: 'percent'
				})})
			</Statistic.Comparison.Trend>
		</Statistic.Comparison>
	</Statistic>
</Col>

<Col class="col-24 md:col-8">
	<Statistic>
		<Statistic.Icon slot="icon" icon="assessment" />
		<Statistic.Title slot="title">New Users</Statistic.Title>
		<Statistic.Value slot="value">
			{formatNumber(newUsers, {
				style: 'decimal',
				notation: 'compact',
				maximumFractionDigits: 1,
				minimumFractionDigits: 1
			})}
		</Statistic.Value>
		<Statistic.Goal progress={getProgress(newUsers, usersGoal)} />
	</Statistic>
</Col>

<Col class="col-24 md:col-8">
	<Statistic>
		<Statistic.Icon class="text-primary" slot="icon" icon="favorite" />
		<Statistic.Title slot="title">Total Likes</Statistic.Title>
		<Statistic.Value class="text-primary" slot="value">
			{formatNumber(totalLikes, {
				style: 'decimal',
				notation: 'compact',
				maximumFractionDigits: 1,
				minimumFractionDigits: 1
			})}
		</Statistic.Value>
	</Statistic>
</Col>

<Col class="col-24 md:col-8">
	<Statistic class="bg-gradient-to-r from-cyan-500 to-blue-500">
		<Statistic.Icon class="text-white" slot="icon" icon="assessment" />
		<Statistic.Title class="text-white" slot="title">Page Views</Statistic.Title>
		<Statistic.Value class="text-white" slot="value">
			{formatNumber(pageViews, {
				style: 'currency',
				notation: 'compact',
				maximumFractionDigits: 1,
				minimumFractionDigits: 1
			})}
		</Statistic.Value>
		<Statistic.Comparison slot="comparison">
			<Statistic.Comparison.Value class="text-white" slot="value">
				Last Year: {formatNumber(pageViewsLastYear, {
					style: 'currency',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Comparison.Value>
			<Statistic.Comparison.Trend class="bg-white text-white" icon="trending_up" slot="trend">
				{formatNumber(getTrendValue(pageViews, pageViewsLastYear), {
					style: 'currency',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})} ({formatNumber(getTrendPercent(pageViews, pageViewsLastYear), {
					style: 'percent'
				})})
			</Statistic.Comparison.Trend>
		</Statistic.Comparison>
	</Statistic>
</Col>

<Col class="col-24 md:col-8">
	<Statistic>
		<Statistic.Title slot="title">New Users</Statistic.Title>
		<Statistic.Value slot="value">
			{formatNumber(newUsers, {
				style: 'decimal',
				notation: 'compact',
				maximumFractionDigits: 1,
				minimumFractionDigits: 1
			})}
		</Statistic.Value>
		<Statistic.Goal progress={getProgress(newUsers, usersGoal)} />
	</Statistic>
</Col>
