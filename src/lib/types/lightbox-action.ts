import type MaterialIcons from './material-icons';

export interface Action {
	icon: MaterialIcons;
	action: () => void;
}
