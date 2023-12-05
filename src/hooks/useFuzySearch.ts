import {soundex} from 'soundex-code'

const useData = ({list, fuseOptions} : {
	list: Array<Record<string, any>>, fuseOptions: Record<string,any> 
}) => {
  
//   const fuse = new Fuse(list, {includeMatches: true,minMatchCharLength:3,...fuseOptions});

  const search = (searchPattern: string) => {
	const searchSounds = soundex(searchPattern);
	console.log(searchSounds,'sounds')

	return list.filter((item)=>{
		const sounds = [];
		sounds.push(soundex(item.title));
		(item.searchOptions || []).forEach((s:string)=>{
			sounds.push(soundex(s));
			return null
		})
		return sounds.some(i => i === searchSounds);	
	})

  }

  return {search}
}

export default useData;