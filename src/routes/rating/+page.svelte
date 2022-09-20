<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import Card from '../../lib/components/card';
	import { Rating } from '../../lib/components/rating';
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Default</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Rating name="rating-1" showValue />
			<br />
			<Rating name="rating-2" value={3} class="text-orange-400" />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Half</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Rating name="rating-3" half />
			<br />
			<Rating name="rating-4" value={3} half class="text-orange-400" />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Size</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Rating name="rating-5" size="sm" />
			<br />
			<Rating name="rating-6" value={3} class="text-orange-400" />
			<br />
			<Rating name="rating-7" value={3} size="lg" class="text-purple-400" />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Show Value</Card.Header>
		<Card.Content slot="content" class="p-4">
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
		</Card.Content>
	</Card>
</Col>
