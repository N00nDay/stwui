<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Statistic } from '../../lib/components/statistic';
</script>

<Col class="col-24 md:col-8">
	<Statistic title="Total Likes" value={25660000} icon="favorite" lastYear={27660000} showTrend />
</Col>
<Col class="col-24 md:col-8">
	<Statistic
		title="Page Views"
		value={2660000}
		type="currency"
		icon="assessment"
		lastYear={2580000}
		showTrend
	/>
</Col>
<Col class="col-24 md:col-8">
	<Statistic title="New Users" value={82} type="percent" showProgress />
</Col>

<Col class="col-24 md:col-8">
	<Statistic title="Total Likes" value={25660000} icon="favorite" emphasis="text-primary" />
</Col>
<Col class="col-24 md:col-8">
	<Statistic
		title="Page Views"
		value={2660000}
		type="currency"
		icon="assessment"
		background="bg-gradient-to-r from-cyan-500 to-blue-500"
		dark
		lastYear={2570123}
		showTrend
		trendBackground="bg-white"
		trendColor="text-white"
	/>
</Col>
<Col class="col-24 md:col-8">
	<Statistic title="New Users" value={82} type="percent" showProgress />
</Col>
