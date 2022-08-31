<script lang="ts">
	import {
		Card,
		CardContent,
		CardActions,
		CardAction,
		CardCover,
		CardHeader,
		CardFooter,
		CardCoverOverlay
	} from '../../lib/components/card';
	import { Media, MediaTitle, MediaContent, MediaDescription } from '../../lib/components/media';
	import { Col } from '../../lib/components/grid';
</script>

<Col class="col-24 md:col-6">
	<Card bordered={false}>
		<CardCover class="h-[calc(100%-56px)]">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
		</CardCover>
		<CardActions>
			<CardAction icon="settings" />
			<CardAction icon="description" />
		</CardActions>
	</Card>
</Col>
<Col class="col-24 md:col-6">
	<Card bordered={false} hoverable>
		<CardCover class="relative rounded-b-md">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
			<CardCoverOverlay class="top-[unset] h-24">
				<Media class="absolute bottom-0 left-0 right-0 px-4 py-5">
					<MediaContent>
						<MediaTitle class="text-white">Europe Street beat</MediaTitle>
						<MediaDescription class="text-gray-200">www.instagram.com</MediaDescription>
					</MediaContent>
				</Media>
			</CardCoverOverlay>
		</CardCover>
	</Card>
</Col>
<Col class="col-24 md:col-6">
	<Card bordered={false}>
		<CardCover class="h-[calc(100%-96px)]">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
		</CardCover>
		<CardContent>
			<Media>
				<MediaContent>
					<MediaTitle>Europe Street beat</MediaTitle>
					<MediaDescription>www.instagram.com</MediaDescription>
				</MediaContent>
			</Media>
		</CardContent>
	</Card>
</Col>
<Col class="col-24 md:col-6">
	<Card bordered={false}>
		<CardHeader>Card Header</CardHeader>
		<CardContent class="h-[calc(100%-8rem)]">Card Content</CardContent>
		<CardFooter>Card Footer</CardFooter>
	</Card>
</Col>
