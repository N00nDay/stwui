import OriginalSteps from './Steps.svelte';
import OriginalStep from './Step.svelte';
import Title from './Title.svelte';
import Description from './Description.svelte';
import Summary from './Summary.svelte';

const Steps = OriginalSteps as StepsStatic;
Steps.Summary = Summary;
Steps.Step = OriginalStep as StepStatic;
Steps.Step.Title = Title;
Steps.Step.Description = Description;

export default Steps;

export interface StepsStatic {
	new (...args: ConstructorParameters<typeof OriginalSteps>): OriginalSteps;
	Summary: typeof Summary;
	Step: StepStatic;
}

export interface StepStatic {
	new (...args: ConstructorParameters<typeof OriginalStep>): OriginalStep;
	Title: typeof Title;
	Description: typeof Description;
}
