import type { MaterialIcon } from './';

export interface Action {
	icon: MaterialIcon;
	action: () => void;
}
