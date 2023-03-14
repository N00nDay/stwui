export const dataTheme = `
<html data-theme="dark"></html>`;

export const basicExample = `
module.exports = {
	//	...
   stwui: {
		themes: ['light', 'dark']
	}
};`;

export const sectionExample = `
<html data-theme="dark">
  <div data-theme="light">
    This div will always use light theme
    <span data-theme="my-awesome-theme">This span will always use retro theme!</span>
  </div>
</html>
`;

export const customTheme = `
module.exports = {
	//...
	stwui: {
	  themes: [
		 {
			mytheme: {
				// Required
				primary: '#2563eb',
				default: '#E4E6EB',
				danger: '#dc2626',
				surface: '#ffffff',
				background: '#F0F2F5',
				border: '#E8E9EC',
				hover: '#000000'

				// Optional
				primary-hover: '#1d4ed8',
				primary-content: '#ffffff',
				default-hover: '#f3f4f6',
				default-content: '#1f2937',
				danger-hover: '#b91c1c',
				danger-content: '#ffffff',
				content: '#050505',
				secondary-content: '#545455',
				info-content: '#1d4ed8',
				info: '#3b82f6',
				info-secondary-content: '#2563eb',
				info-icon: '#60a5fa',
				success-content: '#166534',
				success: '#22c55e',
				success-secondary-content: '#15803d',
				success-icon: '#4ade80',
				error-content: '#991b1b',
				error: '#ef4444',
				error-secondary-content: '#b91c1c',
				error-icon: '#f87171',
				warn-content: '#854d0e',
				warn: '#eab308'
				warn-secondary-content: '#a16207',
				warn-icon: '#facc15'
			},
		 },
		 "dark",
		 "light",
	  ],
	},
 }
`;

export const advancedExample = `
module.exports = {
	//...
   stwui: {
		themes: [
         'light', 
         {
            dark: {
				...require("stwui/plugin/colors/themes")["[data-theme=dark]"],
				primary: '#000000',
				primary-hover: '#DDDDDD'
			}
         }
      ]
	}
};`;
