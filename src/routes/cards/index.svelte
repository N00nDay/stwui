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
	} from '@components/card';
	import { Media, MediaTitle, MediaContent, MediaDescription } from '@components/media';
</script>

<div class="m-auto max-w-xl p-8 border border-gray-300 bg-white">
	<Card class="w-96">
		<CardContent>Card Content</CardContent>
	</Card>
	<br />
	<Card class="w-96" hoverable bordered>
		<CardContent>Card Content</CardContent>
	</Card>
	<br />
	<Card class="w-96">
		<CardHeader>Card Header</CardHeader>
		<CardContent>Card Content</CardContent>
		<CardFooter>Card Footer</CardFooter>
	</Card>
	<br />
	<Card class="w-96">
		<CardHeader>
			Card Header
			<div slot="extras">Extras</div>
		</CardHeader>
		<CardContent>Card Content</CardContent>
		<CardFooter>Card Footer</CardFooter>
	</Card>
	<br />
	<Card class="w-96">
		<CardCover class="h-64">
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

	<br />
	<Card class="w-96">
		<CardCover class="h-64">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
		</CardCover>
		<CardActions>
			<CardAction>
				<span class="material-icons h-6 w-6"> settings </span>
			</CardAction>
			<CardAction>
				<span class="material-icons h-6 w-6"> description </span>
			</CardAction>
		</CardActions>
	</Card>

	<br />
	<Card class="w-96 h-64" hoverable bordered>
		<CardCover class="relative rounded-b-md">
			<img
				src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
				alt="cover"
				class="object-cover object-center w-full h-full"
			/>
			<CardCoverOverlay>
				<Media class="absolute bottom-0 left-0 right-0 bg-black opacity-50 px-4 py-5">
					<MediaContent>
						<MediaTitle class="text-white">Europe Street beat</MediaTitle>
						<MediaDescription class="text-gray-200">www.instagram.com</MediaDescription>
					</MediaContent>
				</Media>
			</CardCoverOverlay>
		</CardCover>
	</Card>
</div>
