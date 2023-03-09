import { error, type LoadEvent } from '@sveltejs/kit';

export async function load({ url }: LoadEvent) {
	const orderBy: keyof Item = url.searchParams.get('orderBy') || 'created_at';
	const order = url.searchParams.get('order') || ('asc' as string);
	const page = parseInt(url.searchParams.get('page') || '1') as number;

	const total = items.length;
	const start = page * pageSize - pageSize;
	const end = start + (pageSize - 1) > total ? total : start + (pageSize - 1);
	const results = await getItems(orderBy, order, start, end);

	if (results) {
		return {
			title: 'STWUI - Table',
			description: 'Svelte TailwindCSS Table component',
			header: 'Table',
			subHeader: 'Table can be used to show a list of data in a table format.',
			results,
			start: start + 1,
			end: end === total ? total : end + 1,
			total
		};
	}

	throw error(404, 'Not found');
}

async function getItems(
	orderBy: keyof Item,
	order: string,
	start: number,
	end: number
): Promise<Item[]> {
	items.sort((a: Item, b: Item) => {
		if (order === 'asc') {
			if (a[orderBy] < b[orderBy]) {
				return -1;
			}
			if (a[orderBy] > b[orderBy]) {
				return 1;
			}
			return 0;
		} else {
			if (a[orderBy] > b[orderBy]) {
				return -1;
			}
			if (a[orderBy] < b[orderBy]) {
				return 1;
			}
			return 0;
		}
	});

	return items.slice(start, end);
}

const pageSize = 25;

interface Item extends Record<string, string> {
	id: string;
	project_name: string;
	status: string;
	city: string;
	state: string;
	created_at: string;
}

const items: Item[] = [
	{
		id: 'a',
		project_name: 'a 1',
		status: 'a 2',
		city: 'a 3',
		state: 'a 4',
		created_at: 'a 5'
	},
	{
		id: 'b',
		project_name: 'b 1',
		status: 'b 2',
		city: 'b 3',
		state: 'b 4',
		created_at: 'b 5'
	},
	{
		id: 'c',
		project_name: 'c 1',
		status: 'c 2',
		city: 'c 3',
		state: 'c 4',
		created_at: 'c 5'
	},
	{
		id: 'd',
		project_name: 'd 1',
		status: 'd 2',
		city: 'd 3',
		state: 'd 4',
		created_at: 'd 5'
	},
	{
		id: 'e',
		project_name: 'e 1',
		status: 'e 2',
		city: 'e 3',
		state: 'e 4',
		created_at: 'e 5'
	},
	{
		id: 'f',
		project_name: 'f 1',
		status: 'f 2',
		city: 'f 3',
		state: 'f 4',
		created_at: 'f 5'
	},
	{
		id: 'g',
		project_name: 'g 1',
		status: 'g 2',
		city: 'g 3',
		state: 'g 4',
		created_at: 'g 5'
	},
	{
		id: 'h',
		project_name: 'h 1',
		status: 'h 2',
		city: 'h 3',
		state: 'h 4',
		created_at: 'h 5'
	},
	{
		id: 'i',
		project_name: 'i 1',
		status: 'i 2',
		city: 'i 3',
		state: 'i 4',
		created_at: 'i 5'
	},
	{
		id: 'j',
		project_name: 'j 1',
		status: 'j 2',
		city: 'j 3',
		state: 'j 4',
		created_at: 'j 5'
	},
	{
		id: 'k',
		project_name: 'k 1',
		status: 'k 2',
		city: 'k 3',
		state: 'k 4',
		created_at: 'k 5'
	},
	{
		id: 'l',
		project_name: 'l 1',
		status: 'l 2',
		city: 'l 3',
		state: 'l 4',
		created_at: 'l 5'
	},
	{
		id: 'm',
		project_name: 'm 1',
		status: 'm 2',
		city: 'm 3',
		state: 'm 4',
		created_at: 'm 5'
	},
	{
		id: 'n',
		project_name: 'n 1',
		status: 'n 2',
		city: 'n 3',
		state: 'n 4',
		created_at: 'n 5'
	},
	{
		id: 'o',
		project_name: 'o 1',
		status: 'o 2',
		city: 'o 3',
		state: 'o 4',
		created_at: 'o 5'
	},
	{
		id: 'p',
		project_name: 'p 1',
		status: 'p 2',
		city: 'p 3',
		state: 'p 4',
		created_at: 'p 5'
	},
	{
		id: 'q',
		project_name: 'q 1',
		status: 'q 2',
		city: 'q 3',
		state: 'q 4',
		created_at: 'q 5'
	},
	{
		id: 'r',
		project_name: 'r 1',
		status: 'r 2',
		city: 'r 3',
		state: 'r 4',
		created_at: 'r 5'
	},
	{
		id: 's',
		project_name: 's 1',
		status: 's 2',
		city: 's 3',
		state: 's 4',
		created_at: 's 5'
	},
	{
		id: 't',
		project_name: 't 1',
		status: 't 2',
		city: 't 3',
		state: 't 4',
		created_at: 't 5'
	},
	{
		id: 'u',
		project_name: 'u 1',
		status: 'u 2',
		city: 'u 3',
		state: 'u 4',
		created_at: 'u 5'
	},
	{
		id: 'v',
		project_name: 'v 1',
		status: 'v 2',
		city: 'v 3',
		state: 'v 4',
		created_at: 'v 5'
	},
	{
		id: 'w',
		project_name: 'w 1',
		status: 'w 2',
		city: 'w 3',
		state: 'w 4',
		created_at: 'w 5'
	},
	{
		id: 'x',
		project_name: 'x 1',
		status: 'x 2',
		city: 'x 3',
		state: 'x 4',
		created_at: 'x 5'
	},
	{
		id: 'y',
		project_name: 'y 1',
		status: 'y 2',
		city: 'y 3',
		state: 'y 4',
		created_at: 'y 5'
	},
	{
		id: 'z',
		project_name: 'z 1',
		status: 'z 2',
		city: 'z 3',
		state: 'z 4',
		created_at: 'z 5'
	},
	{
		id: 'aa',
		project_name: 'aa 1',
		status: 'aa 2',
		city: 'aa 3',
		state: 'aa 4',
		created_at: 'aa 5'
	},
	{
		id: 'ab',
		project_name: 'ab 1',
		status: 'ab 2',
		city: 'ab 3',
		state: 'ab 4',
		created_at: 'ab 5'
	},
	{
		id: 'ac',
		project_name: 'ac 1',
		status: 'ac 2',
		city: 'ac 3',
		state: 'ac 4',
		created_at: 'ac 5'
	},
	{
		id: 'ad',
		project_name: 'ad 1',
		status: 'ad 2',
		city: 'ad 3',
		state: 'ad 4',
		created_at: 'ad 5'
	},
	{
		id: 'ae',
		project_name: 'ae 1',
		status: 'ae 2',
		city: 'ae 3',
		state: 'ae 4',
		created_at: 'ae 5'
	},
	{
		id: 'af',
		project_name: 'af 1',
		status: 'af 2',
		city: 'af 3',
		state: 'af 4',
		created_at: 'af 5'
	},
	{
		id: 'ag',
		project_name: 'ag 1',
		status: 'ag 2',
		city: 'ag 3',
		state: 'ag 4',
		created_at: 'ag 5'
	},
	{
		id: 'ah',
		project_name: 'ah 1',
		status: 'ah 2',
		city: 'ah 3',
		state: 'ah 4',
		created_at: 'ah 5'
	},
	{
		id: 'ai',
		project_name: 'ai 1',
		status: 'ai 2',
		city: 'ai 3',
		state: 'ai 4',
		created_at: 'ai 5'
	},
	{
		id: 'aj',
		project_name: 'aj 1',
		status: 'aj 2',
		city: 'aj 3',
		state: 'aj 4',
		created_at: 'aj 5'
	},
	{
		id: 'ak',
		project_name: 'ak 1',
		status: 'ak 2',
		city: 'ak 3',
		state: 'ak 4',
		created_at: 'ak 5'
	},
	{
		id: 'al',
		project_name: 'al 1',
		status: 'al 2',
		city: 'al 3',
		state: 'al 4',
		created_at: 'al 5'
	},
	{
		id: 'am',
		project_name: 'am 1',
		status: 'am 2',
		city: 'am 3',
		state: 'am 4',
		created_at: 'am 5'
	},
	{
		id: 'an',
		project_name: 'an 1',
		status: 'an 2',
		city: 'an 3',
		state: 'an 4',
		created_at: 'an 5'
	},
	{
		id: 'ao',
		project_name: 'ao 1',
		status: 'ao 2',
		city: 'ao 3',
		state: 'ao 4',
		created_at: 'ao 5'
	},
	{
		id: 'ap',
		project_name: 'ap 1',
		status: 'ap 2',
		city: 'ap 3',
		state: 'ap 4',
		created_at: 'ap 5'
	},
	{
		id: 'aq',
		project_name: 'aq 1',
		status: 'aq 2',
		city: 'aq 3',
		state: 'aq 4',
		created_at: 'aq 5'
	},
	{
		id: 'ar',
		project_name: 'ar 1',
		status: 'ar 2',
		city: 'ar 3',
		state: 'ar 4',
		created_at: 'ar 5'
	},
	{
		id: 'as',
		project_name: 'as 1',
		status: 'as 2',
		city: 'as 3',
		state: 'as 4',
		created_at: 'as 5'
	},
	{
		id: 'at',
		project_name: 'at 1',
		status: 'at 2',
		city: 'at 3',
		state: 'at 4',
		created_at: 'at 5'
	},
	{
		id: 'au',
		project_name: 'au 1',
		status: 'au 2',
		city: 'au 3',
		state: 'au 4',
		created_at: 'au 5'
	},
	{
		id: 'av',
		project_name: 'av 1',
		status: 'av 2',
		city: 'av 3',
		state: 'av 4',
		created_at: 'av 5'
	},
	{
		id: 'aw',
		project_name: 'aw 1',
		status: 'aw 2',
		city: 'aw 3',
		state: 'aw 4',
		created_at: 'aw 5'
	},
	{
		id: 'ax',
		project_name: 'ax 1',
		status: 'ax 2',
		city: 'ax 3',
		state: 'ax 4',
		created_at: 'ax 5'
	},
	{
		id: 'ay',
		project_name: 'ay 1',
		status: 'ay 2',
		city: 'ay 3',
		state: 'ay 4',
		created_at: 'ay 5'
	},
	{
		id: 'az',
		project_name: 'az 1',
		status: 'az 2',
		city: 'az 3',
		state: 'az 4',
		created_at: 'az 5'
	},
	{
		id: 'ba',
		project_name: 'ba 1',
		status: 'ba 2',
		city: 'ba 3',
		state: 'ba 4',
		created_at: 'ba 5'
	},
	{
		id: 'bb',
		project_name: 'bb 1',
		status: 'bb 2',
		city: 'bb 3',
		state: 'bb 4',
		created_at: 'bb 5'
	},
	{
		id: 'bc',
		project_name: 'bc 1',
		status: 'bc 2',
		city: 'bc 3',
		state: 'bc 4',
		created_at: 'bc 5'
	},
	{
		id: 'bd',
		project_name: 'bd 1',
		status: 'bd 2',
		city: 'bd 3',
		state: 'bd 4',
		created_at: 'bd 5'
	},
	{
		id: 'be',
		project_name: 'be 1',
		status: 'be 2',
		city: 'be 3',
		state: 'be 4',
		created_at: 'be 5'
	},
	{
		id: 'bf',
		project_name: 'bf 1',
		status: 'bf 2',
		city: 'bf 3',
		state: 'bf 4',
		created_at: 'bf 5'
	},
	{
		id: 'bg',
		project_name: 'bg 1',
		status: 'bg 2',
		city: 'bg 3',
		state: 'bg 4',
		created_at: 'bg 5'
	},
	{
		id: 'bh',
		project_name: 'bh 1',
		status: 'bh 2',
		city: 'bh 3',
		state: 'bh 4',
		created_at: 'bh 5'
	},
	{
		id: 'bi',
		project_name: 'bi 1',
		status: 'bi 2',
		city: 'bi 3',
		state: 'bi 4',
		created_at: 'bi 5'
	},
	{
		id: 'bj',
		project_name: 'bj 1',
		status: 'bj 2',
		city: 'bj 3',
		state: 'bj 4',
		created_at: 'bj 5'
	},
	{
		id: 'bk',
		project_name: 'bk 1',
		status: 'bk 2',
		city: 'bk 3',
		state: 'bk 4',
		created_at: 'bk 5'
	},
	{
		id: 'bl',
		project_name: 'bl 1',
		status: 'bl 2',
		city: 'bl 3',
		state: 'bl 4',
		created_at: 'bl 5'
	},
	{
		id: 'bm',
		project_name: 'bm 1',
		status: 'bm 2',
		city: 'bm 3',
		state: 'bm 4',
		created_at: 'bm 5'
	},
	{
		id: 'bn',
		project_name: 'bn 1',
		status: 'bn 2',
		city: 'bn 3',
		state: 'bn 4',
		created_at: 'bn 5'
	},
	{
		id: 'bo',
		project_name: 'bo 1',
		status: 'bo 2',
		city: 'bo 3',
		state: 'bo 4',
		created_at: 'bo 5'
	},
	{
		id: 'bp',
		project_name: 'bp 1',
		status: 'bp 2',
		city: 'bp 3',
		state: 'bp 4',
		created_at: 'bp 5'
	},
	{
		id: 'bq',
		project_name: 'bq 1',
		status: 'bq 2',
		city: 'bq 3',
		state: 'bq 4',
		created_at: 'bq 5'
	},
	{
		id: 'br',
		project_name: 'br 1',
		status: 'br 2',
		city: 'br 3',
		state: 'br 4',
		created_at: 'br 5'
	},
	{
		id: 'bs',
		project_name: 'bs 1',
		status: 'bs 2',
		city: 'bs 3',
		state: 'bs 4',
		created_at: 'bs 5'
	},
	{
		id: 'bt',
		project_name: 'bt 1',
		status: 'bt 2',
		city: 'bt 3',
		state: 'bt 4',
		created_at: 'bt 5'
	},
	{
		id: 'bu',
		project_name: 'bu 1',
		status: 'bu 2',
		city: 'bu 3',
		state: 'bu 4',
		created_at: 'bu 5'
	},
	{
		id: 'bv',
		project_name: 'bv 1',
		status: 'bv 2',
		city: 'bv 3',
		state: 'bv 4',
		created_at: 'bv 5'
	},
	{
		id: 'bw',
		project_name: 'bw 1',
		status: 'bw 2',
		city: 'bw 3',
		state: 'bw 4',
		created_at: 'bw 5'
	},
	{
		id: 'bx',
		project_name: 'bx 1',
		status: 'bx 2',
		city: 'bx 3',
		state: 'bx 4',
		created_at: 'bx 5'
	},
	{
		id: 'by',
		project_name: 'by 1',
		status: 'by 2',
		city: 'by 3',
		state: 'by 4',
		created_at: 'by 5'
	},
	{
		id: 'bz',
		project_name: 'bz 1',
		status: 'bz 2',
		city: 'bz 3',
		state: 'bz 4',
		created_at: 'bz 5'
	},

	{
		id: 'ca',
		project_name: 'ca 1',
		status: 'ca 2',
		city: 'ca 3',
		state: 'ca 4',
		created_at: 'ca 5'
	},
	{
		id: 'cb',
		project_name: 'cb 1',
		status: 'cb 2',
		city: 'cb 3',
		state: 'cb 4',
		created_at: 'cb 5'
	},
	{
		id: 'cc',
		project_name: 'cc 1',
		status: 'cc 2',
		city: 'cc 3',
		state: 'cc 4',
		created_at: 'cc 5'
	},
	{
		id: 'cd',
		project_name: 'cd 1',
		status: 'cd 2',
		city: 'cd 3',
		state: 'cd 4',
		created_at: 'cd 5'
	},
	{
		id: 'ce',
		project_name: 'ce 1',
		status: 'ce 2',
		city: 'ce 3',
		state: 'ce 4',
		created_at: 'ce 5'
	},
	{
		id: 'cf',
		project_name: 'cf 1',
		status: 'cf 2',
		city: 'cf 3',
		state: 'cf 4',
		created_at: 'cf 5'
	},
	{
		id: 'cg',
		project_name: 'cg 1',
		status: 'cg 2',
		city: 'cg 3',
		state: 'cg 4',
		created_at: 'cg 5'
	},
	{
		id: 'ch',
		project_name: 'ch 1',
		status: 'ch 2',
		city: 'ch 3',
		state: 'ch 4',
		created_at: 'ch 5'
	},
	{
		id: 'ci',
		project_name: 'ci 1',
		status: 'ci 2',
		city: 'ci 3',
		state: 'ci 4',
		created_at: 'ci 5'
	},
	{
		id: 'cj',
		project_name: 'cj 1',
		status: 'cj 2',
		city: 'cj 3',
		state: 'cj 4',
		created_at: 'cj 5'
	},
	{
		id: 'ck',
		project_name: 'ck 1',
		status: 'ck 2',
		city: 'ck 3',
		state: 'ck 4',
		created_at: 'ck 5'
	},
	{
		id: 'cl',
		project_name: 'cl 1',
		status: 'cl 2',
		city: 'cl 3',
		state: 'cl 4',
		created_at: 'cl 5'
	},
	{
		id: 'cm',
		project_name: 'cm 1',
		status: 'cm 2',
		city: 'cm 3',
		state: 'cm 4',
		created_at: 'cm 5'
	},
	{
		id: 'cn',
		project_name: 'cn 1',
		status: 'cn 2',
		city: 'cn 3',
		state: 'cn 4',
		created_at: 'cn 5'
	},
	{
		id: 'co',
		project_name: 'co 1',
		status: 'co 2',
		city: 'co 3',
		state: 'co 4',
		created_at: 'co 5'
	},
	{
		id: 'cp',
		project_name: 'cp 1',
		status: 'cp 2',
		city: 'cp 3',
		state: 'cp 4',
		created_at: 'cp 5'
	},
	{
		id: 'cq',
		project_name: 'cq 1',
		status: 'cq 2',
		city: 'cq 3',
		state: 'cq 4',
		created_at: 'cq 5'
	},
	{
		id: 'cr',
		project_name: 'cr 1',
		status: 'cr 2',
		city: 'cr 3',
		state: 'cr 4',
		created_at: 'cr 5'
	},
	{
		id: 'cs',
		project_name: 'cs 1',
		status: 'cs 2',
		city: 'cs 3',
		state: 'cs 4',
		created_at: 'cs 5'
	},
	{
		id: 'ct',
		project_name: 'ct 1',
		status: 'ct 2',
		city: 'ct 3',
		state: 'ct 4',
		created_at: 'ct 5'
	},
	{
		id: 'cu',
		project_name: 'cu 1',
		status: 'cu 2',
		city: 'cu 3',
		state: 'cu 4',
		created_at: 'cu 5'
	},
	{
		id: 'cv',
		project_name: 'cv 1',
		status: 'cv 2',
		city: 'cv 3',
		state: 'cv 4',
		created_at: 'cv 5'
	},
	{
		id: 'cw',
		project_name: 'cw 1',
		status: 'cw 2',
		city: 'cw 3',
		state: 'cw 4',
		created_at: 'cw 5'
	},
	{
		id: 'cx',
		project_name: 'cx 1',
		status: 'cx 2',
		city: 'cx 3',
		state: 'cx 4',
		created_at: 'cx 5'
	},
	{
		id: 'cy',
		project_name: 'cy 1',
		status: 'cy 2',
		city: 'cy 3',
		state: 'cy 4',
		created_at: 'cy 5'
	},
	{
		id: 'cz',
		project_name: 'cz 1',
		status: 'cz 2',
		city: 'cz 3',
		state: 'cz 4',
		created_at: 'cz 5'
	},

	{
		id: 'da',
		project_name: 'da 1',
		status: 'da 2',
		city: 'da 3',
		state: 'da 4',
		created_at: 'da 5'
	},
	{
		id: 'db',
		project_name: 'db 1',
		status: 'db 2',
		city: 'db 3',
		state: 'db 4',
		created_at: 'db 5'
	},
	{
		id: 'dc',
		project_name: 'dc 1',
		status: 'dc 2',
		city: 'dc 3',
		state: 'dc 4',
		created_at: 'dc 5'
	},
	{
		id: 'dd',
		project_name: 'dd 1',
		status: 'dd 2',
		city: 'dd 3',
		state: 'dd 4',
		created_at: 'dd 5'
	},
	{
		id: 'de',
		project_name: 'de 1',
		status: 'de 2',
		city: 'de 3',
		state: 'de 4',
		created_at: 'de 5'
	},
	{
		id: 'df',
		project_name: 'df 1',
		status: 'df 2',
		city: 'df 3',
		state: 'df 4',
		created_at: 'df 5'
	},
	{
		id: 'dg',
		project_name: 'dg 1',
		status: 'dg 2',
		city: 'dg 3',
		state: 'dg 4',
		created_at: 'dg 5'
	},
	{
		id: 'dh',
		project_name: 'dh 1',
		status: 'dh 2',
		city: 'dh 3',
		state: 'dh 4',
		created_at: 'dh 5'
	},
	{
		id: 'di',
		project_name: 'di 1',
		status: 'di 2',
		city: 'di 3',
		state: 'di 4',
		created_at: 'di 5'
	},
	{
		id: 'dj',
		project_name: 'dj 1',
		status: 'dj 2',
		city: 'dj 3',
		state: 'dj 4',
		created_at: 'dj 5'
	},
	{
		id: 'dk',
		project_name: 'dk 1',
		status: 'dk 2',
		city: 'dk 3',
		state: 'dk 4',
		created_at: 'dk 5'
	},
	{
		id: 'dl',
		project_name: 'dl 1',
		status: 'dl 2',
		city: 'dl 3',
		state: 'dl 4',
		created_at: 'dl 5'
	},
	{
		id: 'dm',
		project_name: 'dm 1',
		status: 'dm 2',
		city: 'dm 3',
		state: 'dm 4',
		created_at: 'dm 5'
	},
	{
		id: 'dn',
		project_name: 'dn 1',
		status: 'dn 2',
		city: 'dn 3',
		state: 'dn 4',
		created_at: 'dn 5'
	},
	{
		id: 'do',
		project_name: 'do 1',
		status: 'do 2',
		city: 'do 3',
		state: 'do 4',
		created_at: 'do 5'
	},
	{
		id: 'dp',
		project_name: 'dp 1',
		status: 'dp 2',
		city: 'dp 3',
		state: 'dp 4',
		created_at: 'dp 5'
	},
	{
		id: 'dq',
		project_name: 'dq 1',
		status: 'dq 2',
		city: 'dq 3',
		state: 'dq 4',
		created_at: 'dq 5'
	},
	{
		id: 'dr',
		project_name: 'dr 1',
		status: 'dr 2',
		city: 'dr 3',
		state: 'dr 4',
		created_at: 'dr 5'
	},
	{
		id: 'ds',
		project_name: 'ds 1',
		status: 'ds 2',
		city: 'ds 3',
		state: 'ds 4',
		created_at: 'ds 5'
	},
	{
		id: 'dt',
		project_name: 'dt 1',
		status: 'dt 2',
		city: 'dt 3',
		state: 'dt 4',
		created_at: 'dt 5'
	},
	{
		id: 'du',
		project_name: 'du 1',
		status: 'du 2',
		city: 'du 3',
		state: 'du 4',
		created_at: 'du 5'
	},
	{
		id: 'dv',
		project_name: 'dv 1',
		status: 'dv 2',
		city: 'dv 3',
		state: 'dv 4',
		created_at: 'dv 5'
	},
	{
		id: 'dw',
		project_name: 'dw 1',
		status: 'dw 2',
		city: 'dw 3',
		state: 'dw 4',
		created_at: 'dw 5'
	},
	{
		id: 'dx',
		project_name: 'dx 1',
		status: 'dx 2',
		city: 'dx 3',
		state: 'dx 4',
		created_at: 'dx 5'
	},
	{
		id: 'dy',
		project_name: 'dy 1',
		status: 'dy 2',
		city: 'dy 3',
		state: 'dy 4',
		created_at: 'dy 5'
	},
	{
		id: 'dz',
		project_name: 'dz 1',
		status: 'dz 2',
		city: 'dz 3',
		state: 'dz 4',
		created_at: 'dz 5'
	}
];
