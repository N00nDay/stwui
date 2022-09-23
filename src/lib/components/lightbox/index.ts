import OriginalLightBox from './LightBox.svelte';
import OriginalControls from './Controls.svelte';
import Control from './Control.svelte';

const LightBox = OriginalLightBox as LightBoxStatic;
LightBox.Controls = OriginalControls as LightBoxControlsStatic;
LightBox.Controls.Control = Control;

export default LightBox;

export interface LightBoxStatic {
	new (...args: ConstructorParameters<typeof OriginalLightBox>): OriginalLightBox;
	Controls: LightBoxControlsStatic;
}

export interface LightBoxControlsStatic {
	new (...args: ConstructorParameters<typeof OriginalControls>): OriginalControls;
	Control: typeof Control;
}
