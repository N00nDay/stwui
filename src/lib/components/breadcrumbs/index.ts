import OriginalBreadcrumbs from './Breadcrumbs.svelte';
import OriginalCrumb from './Crumb.svelte';
import Icon from './Icon.svelte';
import Label from './Label.svelte';
import Divider from './Divider.svelte';

const Breadcrumbs = OriginalBreadcrumbs as BreadcrumbsStatic;
Breadcrumbs.Crumb = OriginalCrumb as CrumbStatic;
Breadcrumbs.Crumb.Icon = Icon;
Breadcrumbs.Crumb.Label = Label;
Breadcrumbs.Crumb.Divider = Divider;

export default Breadcrumbs;

export interface BreadcrumbsStatic {
	new (...args: ConstructorParameters<typeof OriginalBreadcrumbs>): OriginalBreadcrumbs;
	Crumb: CrumbStatic;
}

export interface CrumbStatic {
	new (...args: ConstructorParameters<typeof OriginalCrumb>): OriginalCrumb;
	Icon: typeof Icon;
	Label: typeof Label;
	Divider: typeof Divider;
}
