<script lang="ts">
	import { Card, Col } from '../../lib';
	import { Media, MediaTitle, MediaContent, MediaDescription } from '../../lib/components/media';
</script>

<Col class="col-24 md:col-6">
	<Card bordered={false}>
		<Card.Cover slot="cover" class="h-[calc(100%-56px)]">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
		</Card.Cover>
		<Card.Actions slot="actions">
			<Card.Actions.Action icon="settings" />
			<Card.Actions.Action icon="description" />
		</Card.Actions>
	</Card>
</Col>
<Col class="col-24 md:col-6">
	<Card bordered={false} hoverable>
		<Card.Cover slot="cover" class="relative rounded-b-md">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
			<Card.Cover.Overlay class="top-[unset] h-24">
				<Media class="absolute bottom-0 left-0 right-0 px-4 py-5">
					<MediaContent>
						<MediaTitle class="text-white">Europe Street beat</MediaTitle>
						<MediaDescription class="text-gray-200">www.instagram.com</MediaDescription>
					</MediaContent>
				</Media>
			</Card.Cover.Overlay>
		</Card.Cover>
	</Card>
</Col>
<Col class="col-24 md:col-6">
	<Card bordered={false}>
		<Card.Cover slot="cover" class="h-[calc(100%-96px)]">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
		</Card.Cover>
		<Card.Content slot="content">
			<Media>
				<MediaContent>
					<MediaTitle>Europe Street beat</MediaTitle>
					<MediaDescription>www.instagram.com</MediaDescription>
				</MediaContent>
			</Media>
		</Card.Content>
	</Card>
</Col>
<Col class="col-24 md:col-6">
	<Card bordered={false}>
		<Card.Header slot="header">Card Header</Card.Header>
		<Card.Content slot="content" class="h-[calc(100%-8rem)]">Card Content</Card.Content>
		<Card.Footer slot="footer">Card Footer</Card.Footer>
	</Card>
</Col>
