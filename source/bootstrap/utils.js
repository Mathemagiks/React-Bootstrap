export function classify(key, value){
		if (value[0] === '-') value = key+value;
		//return key+' '+value.split(' -').join(' ' +key+'-');
		//string literals-- template strings
		value = value.split(' -').join(` ${key}-`);
		return `${key} ${value}`;
	}