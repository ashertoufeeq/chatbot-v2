import {soundex} from 'soundex-code'

const useData = ({list} : {
	list: Array<Record<string, any>>
}) => {
  const search = (searchPattern: string) => {
	const searchSounds = soundex(searchPattern);
	return list.filter((item)=>{
		const sounds = [];
		sounds.push(soundex(item.title));
		(item.searchOptions || []).forEach((s:string)=>{
			sounds.push(soundex(s));
			return null
		})
		return sounds.some(i => i === searchSounds);	
	});
  }

  return {search}
}

export default useData;