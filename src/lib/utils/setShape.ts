export interface Shapes {
	square: string;
	rounded: string;
	circle: string;
}

export default function setShape(classes: string, shape: string, shapes: Shapes): string {
	switch (shape) {
		case 'square':
			classes += shapes.square;
			break;
		case 'rounded':
			classes += shapes.rounded;
			break;
		case 'circle':
			classes += shapes.circle;
			break;
		default:
			classes += shapes.rounded;
	}

	return classes;
}
