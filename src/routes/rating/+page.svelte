<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Rating } from '../../lib/components/rating';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Default</CardHeader>
		<CardContent class="p-4">
			<Rating name="rating-1" showValue />
			<br />
			<Rating name="rating-2" value={3} class="text-orange-400" />
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Half</CardHeader>
		<CardContent class="p-4">
			<Rating name="rating-3" half />
			<br />
			<Rating name="rating-4" value={3} half class="text-orange-400" />
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Size</CardHeader>
		<CardContent class="p-4">
			<Rating name="rating-5" size="sm" />
			<br />
			<Rating name="rating-6" value={3} class="text-orange-400" />
			<br />
			<Rating name="rating-7" value={3} size="lg" class="text-purple-400" />
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Show Value</CardHeader>
		<CardContent class="p-4">
			<Rating name="rating-5" size="sm" showValue />
			<br />
			<Rating name="rating-6" value={3} class="text-orange-400" showValue />
			<br />
			<Rating name="rating-7" value={3} size="lg" class="text-purple-400" showValue />
			<br />
			<Rating name="rating-8" size="sm" half showValue />
			<br />
			<Rating name="rating-9" value={3} half class="text-orange-400" showValue />
			<br />
			<Rating name="rating-10" value={3.5} half size="lg" class="text-purple-400" showValue />
		</CardContent>
	</Card>
</Col>
