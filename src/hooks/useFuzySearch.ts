import {soundex} from 'soundex-code'

const useData = ({list} : {
	list: Array<Record<string, any>>
}) => {
  const search = (searchPattern: string) => {
	let search = searchPattern;
	const splitSearch = (searchPattern || '').split(' ');
	console.log(splitSearch, 'here')
	
	if((splitSearch || [])?.length> 1 && splitSearch.includes('dental')){
		console.log(splitSearch, 'here 123678')
		search = (splitSearch || []).filter(item => item !== 'dental').join(' ')
	}
	if( 
		splitSearch?.includes('dentures')||
		splitSearch?.includes('replacement') ||
		splitSearch?.includes('missing') ||
		splitSearch?.includes('replaced') ||
		splitSearch?.includes('removed') ||
		splitSearch?.includes('remove') ||
		splitSearch?.includes('removes') ||
		splitSearch?.includes('replace') ||
		splitSearch?.includes('replaces') ||
		splitSearch?.includes('denture') ||
		splitSearch?.includes('replacements')){
			return [{
				title: 'Teeth Replacement',
				url: 'https://bellevilledentistry.ca/budgeting-teeth-replacement',
				searchOptions: [
				  'dentures',
				  'removed', 
				  'replaced',
				  'missing',
				  'replacement',
				  'teeth removed',
				  'teeth replacement',
				  'teeth missing',
				  'teeth replaced',
				  'teeth dentures',
				  'tooth removed',
				  'tooth replacement',
				  'tooth missing',
				  'tooth replaced',
				  'tooth dentures',
				]
			  }]
	}

	const searchSounds = soundex((search).toLowerCase());
	
	return list.filter((item)=>{
		const sounds = [];
		
		sounds.push(soundex(item.title));
		(item.searchOptions || []).forEach((s:string)=>{
			sounds.push(soundex((s).toLowerCase()));
			return null
		})
		return sounds.some(i => i === searchSounds);	
	});
  }

  return {search}
}

export default useData;