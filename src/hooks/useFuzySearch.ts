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
	console.log(search,'search');

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