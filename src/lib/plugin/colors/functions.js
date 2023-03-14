const Color = require('color');
const colorNames = require('./colorNames');

module.exports = {
	generateForegroundColorFrom: function (input, percentage = 0.8) {
		if (Color(input).isDark()) {
			let arr = Color(input).mix(Color('white'), percentage).saturate(10).hsl().round().array();
			return arr[0] + ' ' + arr[1] + '%' + ' ' + arr[2] + '%';
		} else {
			let arr = Color(input).mix(Color('black'), percentage).saturate(10).hsl().round().array();
			return arr[0] + ' ' + arr[1] + '%' + ' ' + arr[2] + '%';
		}
	},

	convertToHsl: function (input) {
		let resultObj = {};
		if (typeof input === 'object' && input !== null) {
			Object.entries(input).forEach(([rule, value]) => {
				if (colorNames.hasOwnProperty(rule)) {
					const hslArray = Color(value).hsl().round().array();
					resultObj[colorNames[rule]] =
						hslArray[0] + ' ' + hslArray[1] + '%' + ' ' + hslArray[2] + '%';
				} else {
					resultObj[rule] = value;
				}

				// auto generate colors
				if (!input.hasOwnProperty('primary-hover')) {
					const darkerHslArray = Color(input['primary']).darken(0.2).hsl().round().array();
					resultObj['--primary-hover'] =
						darkerHslArray[0] + ' ' + darkerHslArray[1] + '%' + ' ' + darkerHslArray[2] + '%';
				}
				if (!input.hasOwnProperty('primary-content')) {
					resultObj['--primary-content'] = this.generateForegroundColorFrom(input['primary']);
				}

				if (!input.hasOwnProperty('default-hover')) {
					const darkerHslArray = Color(input['default']).darken(0.2).hsl().round().array();
					resultObj['--default-hover'] =
						darkerHslArray[0] + ' ' + darkerHslArray[1] + '%' + ' ' + darkerHslArray[2] + '%';
				}
				if (!input.hasOwnProperty('default-content')) {
					resultObj['--default-content'] = this.generateForegroundColorFrom(input['default']);
				}

				if (!input.hasOwnProperty('danger-hover')) {
					const darkerHslArray = Color(input['danger']).darken(0.2).hsl().round().array();
					resultObj['--danger-hover'] =
						darkerHslArray[0] + ' ' + darkerHslArray[1] + '%' + ' ' + darkerHslArray[2] + '%';
				}
				if (!input.hasOwnProperty('danger-content')) {
					resultObj['--danger-content'] = this.generateForegroundColorFrom(input['danger']);
				}

				if (!input.hasOwnProperty('content')) {
					resultObj['--content'] = this.generateForegroundColorFrom(input['background']);
				}
				if (!input.hasOwnProperty('secondary-content')) {
					resultObj['--secondary-content'] = this.generateForegroundColorFrom(input['surface']);
				}

				// auto generate base colors
				//  if (!input.hasOwnProperty("base-100")) {
				// 	resultObj["--b1"] = 0 + " " + 0 + "%" + " " + 100 + "%";
				//  }

				//  if (!input.hasOwnProperty("base-200")) {
				// 	const darkerHslArray = Color(input["base-100"]).darken(0.1).hsl().round().array();
				// 	resultObj["--b2"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
				//  }

				//  if (!input.hasOwnProperty("base-300")) {
				// 	if (input.hasOwnProperty("base-200")) {
				// 	  const darkerHslArray = Color(input["base-200"]).darken(0.1).hsl().round().array();
				// 	  resultObj["--b3"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
				// 	} else {
				// 	  const darkerHslArray = Color(input["base-100"]).darken(0.1).darken(0.1).hsl().round().array();
				// 	  resultObj["--b3"] = darkerHslArray[0] + " " + darkerHslArray[1] + "%" + " " + darkerHslArray[2] + "%";
				// 	}
				//  }

				// auto generate state colors
				if (!input.hasOwnProperty('info')) {
					resultObj['--info'] = 198 + ' ' + 93 + '%' + ' ' + 60 + '%';
				}
				if (!input.hasOwnProperty('success')) {
					resultObj['--success'] = 158 + ' ' + 64 + '%' + ' ' + 52 + '%';
				}
				if (!input.hasOwnProperty('warning')) {
					resultObj['--warn'] = 43 + ' ' + 96 + '%' + ' ' + 56 + '%';
				}
				if (!input.hasOwnProperty('error')) {
					resultObj['--error'] = 0 + ' ' + 91 + '%' + ' ' + 71 + '%';
				}

				// auto generate content colors

				if (!input.hasOwnProperty('info-content')) {
					if (input.hasOwnProperty('info')) {
						resultObj['--info-content'] = this.generateForegroundColorFrom(input['info']);
						resultObj['--info-secondary-content'] = this.generateForegroundColorFrom(input['info']);
						resultObj['--info-icon'] = this.generateForegroundColorFrom(input['info']);
					} else {
						resultObj['--info-content'] = 198 + ' ' + 100 + '%' + ' ' + 12 + '%';
						resultObj['--info-secondary-content'] = 198 + ' ' + 100 + '%' + ' ' + 12 + '%';
						resultObj['--info-icon'] = 198 + ' ' + 100 + '%' + ' ' + 12 + '%';
					}
				}

				if (!input.hasOwnProperty('success-content')) {
					if (input.hasOwnProperty('success')) {
						resultObj['--success-content'] = this.generateForegroundColorFrom(input['success']);
						resultObj['--success-secondary-content'] = this.generateForegroundColorFrom(
							input['success']
						);
						resultObj['--success-icon'] = this.generateForegroundColorFrom(input['success']);
					} else {
						resultObj['--success-content'] = 158 + ' ' + 100 + '%' + ' ' + 10 + '%';
						resultObj['--success-secondary-content'] = 158 + ' ' + 100 + '%' + ' ' + 10 + '%';
						resultObj['--success-icon'] = 158 + ' ' + 100 + '%' + ' ' + 10 + '%';
					}
				}

				if (!input.hasOwnProperty('warn-content')) {
					if (input.hasOwnProperty('warn')) {
						resultObj['--warn-content'] = this.generateForegroundColorFrom(input['warn']);
						resultObj['--warn-secondary-content'] = this.generateForegroundColorFrom(input['warn']);
						resultObj['--warn-icon'] = this.generateForegroundColorFrom(input['warn']);
					} else {
						resultObj['--warn-content'] = 43 + ' ' + 100 + '%' + ' ' + 11 + '%';
						resultObj['--warn-secondary-content'] = 43 + ' ' + 100 + '%' + ' ' + 11 + '%';
						resultObj['--warn-icon'] = 43 + ' ' + 100 + '%' + ' ' + 11 + '%';
					}
				}

				if (!input.hasOwnProperty('error-content')) {
					if (input.hasOwnProperty('error')) {
						resultObj['--error-content'] = this.generateForegroundColorFrom(input['error']);
						resultObj['--error-secondary-content'] = this.generateForegroundColorFrom(
							input['error']
						);
						resultObj['--error-icon'] = this.generateForegroundColorFrom(input['error']);
					} else {
						resultObj['--error-content'] = 0 + ' ' + 100 + '%' + ' ' + 14 + '%';
						resultObj['--error-secondary-content'] = 0 + ' ' + 100 + '%' + ' ' + 14 + '%';
						resultObj['--error-icon'] = 0 + ' ' + 100 + '%' + ' ' + 14 + '%';
					}
				}
			});
			return resultObj;
		}
		return input;
	},

	injectThemes: function (addBase, config, themes) {
		let includedThemesObj = new Object();

		// add light themes
		if (config('stwui.themes') == false) {
			Object.entries(themes).forEach(([theme]) => {
				includedThemesObj[theme] = this.convertToHsl(themes[theme]);
			});
		}

		// add default themes
		if (config('stwui.themes') != false) {
			Object.entries(themes).forEach(([theme]) => {
				includedThemesObj[theme] = this.convertToHsl(themes[theme]);
			});
		}

		// add custom themes
		if (Array.isArray(config('stwui.themes'))) {
			config('stwui.themes').forEach((item) => {
				if (typeof item === 'object' && item !== null) {
					Object.entries(item).forEach(([customThemeName, customThemevalue]) => {
						includedThemesObj['[data-theme=' + customThemeName + ']'] =
							this.convertToHsl(customThemevalue);
					});
				}
			});
		}

		let themeOrder = [];
		if (Array.isArray(config('stwui.themes'))) {
			config('stwui.themes').forEach((theme) => {
				if (typeof theme === 'object' && theme !== null) {
					Object.entries(theme).forEach(([customThemeName]) => {
						themeOrder.push(customThemeName);
					});
				} else if (includedThemesObj.hasOwnProperty('[data-theme=' + theme + ']')) {
					themeOrder.push(theme);
				}
			});
		} else if (config('stwui.themes') != false) {
			themeOrder = ['light', 'dark'];
		} else if (config('stwui.themes') == false) {
			themeOrder.push('light');
		}

		// inject themes in order
		themeOrder.forEach((themeName, index) => {
			if (index === 0) {
				// first theme as root
				addBase({
					[':root']: includedThemesObj['[data-theme=' + themeName + ']']
				});
			} else if (index === 1) {
				// auto dark
				if (config('stwui.darkTheme')) {
					if (
						themeOrder[0] != config('stwui.darkTheme') &&
						themeOrder.includes(config('stwui.darkTheme'))
					) {
						addBase({
							['@media (prefers-color-scheme: dark)']: {
								[':root']: includedThemesObj[`[data-theme=${config('stwui.darkTheme')}]`]
							}
						});
					}
				} else {
					if (themeOrder[0] != 'dark' && themeOrder.includes('dark')) {
						addBase({
							['@media (prefers-color-scheme: dark)']: {
								[':root']: includedThemesObj['[data-theme=dark]']
							}
						});
					}
				}
				// theme 0 with name
				addBase({
					['[data-theme=' + themeOrder[0] + ']']:
						includedThemesObj['[data-theme=' + themeOrder[0] + ']']
				});
				// theme 1 with name
				addBase({
					['[data-theme=' + themeOrder[1] + ']']:
						includedThemesObj['[data-theme=' + themeOrder[1] + ']']
				});
			} else {
				addBase({
					['[data-theme=' + themeName + ']']: includedThemesObj['[data-theme=' + themeName + ']']
				});
			}
		});

		return {
			includedThemesObj: includedThemesObj,
			themeOrder: themeOrder
		};
	}
};
