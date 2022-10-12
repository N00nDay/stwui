import { copyToClipboard } from '../../utils';

export default function clipboard(node: HTMLElement, args: any) {
	const onClick = () => {
		if (typeof args === 'object') {
			if (Object.prototype.hasOwnProperty.call(args, 'element')) {
				const element: HTMLElement | null = document.querySelector(
					`[data-clipboard="${args.element}"]`
				);
				copyToClipboard(element?.innerHTML);
				return;
			}
			if (Object.prototype.hasOwnProperty.call(args, 'input')) {
				const input: HTMLInputElement | null = document.querySelector(
					`[data-clipboard="${args.input}"]`
				);
				copyToClipboard(input?.value);
				return;
			}
		}
		copyToClipboard(args);
	};
	node.addEventListener('click', onClick);
	return {
		update(newArgs: any) {
			args = newArgs;
		},
		destroy() {
			node.removeEventListener('click', onClick);
		}
	};
}
