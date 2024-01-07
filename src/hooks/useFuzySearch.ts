import {soundex} from 'soundex-code'

const useData = ({list} : {
	list: Array<Record<string, any>>
}) => {
  const search = (searchPattern: string) => {
	let search = searchPattern;
	const splitSearchUpperCase = (searchPattern || '').split(' ');

	const splitSearch = splitSearchUpperCase.map(item => item.toLowerCase());
	
	if((splitSearch || [])?.length> 1 && splitSearch.includes('dental')){
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
		(splitSearch?.includes('implant') && (!splitSearch?.includes('complications') && !splitSearch?.includes('complication')))||
		(splitSearch?.includes('implants') && (!splitSearch?.includes('complications') && !splitSearch?.includes('complication'))) ||
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

	if( 
		splitSearch?.includes('ajay')||
		splitSearch?.includes('paul') 
		){
			return [{
				title: 'Doctor Ajay Paul',
				url: 'https://bellevilledentistry.ca/belleville-dentist-dr-ajay-paul',
				indications: 'Informational',
				searchOptions: [
				  "Dr Ajay Paul's dental practice details",
				  "Dr Ajay Paul's expertise",
				  'about Dr. Ajay Paul',
				  " Dr Ajay Paul's dental services",
				  'Belleville Dentist - Dr. Ajay Paul',
				  "About",
				  "Dr Ajay",
				  "Ajay",
				  "Pauls",
				  'dr paul',
				  'dr pauls',
				  'paul'
				]
			  },]
	}

	if( 
		splitSearch?.includes('bill')||
		splitSearch?.includes('hern') 
		){
			return [{
				title: 'Doctor Bill Hern',
				url: 'https://bellevilledentistry.ca/dr-bill-hern',
				indications: 'Informational',
				searchOptions: [
				  "dr Bill Hern's dental expertise",
				  'about Bill Hern',
				  "dr Bill Hern's dental",
				  "dr Bill Hern's specialties",
				  'dr Bill Hern',
				  "bill"
				]
			  },]
	}
	if( 
		splitSearch?.includes('Yazdi')||
		splitSearch?.includes('Yezdi') ||  
		splitSearch?.includes('Yzdi') 
		){
			return [{
				title: 'Doctor Yazdi',
				url: 'https://bellevilledentistry.ca/dr-yazdi',
				indications: 'Informational',
				searchOptions: [
				  "Dr Yazdi's dental services",
				  'about Dr Yazdi',
				  "Dr Yazdi's dental expertise",
				  "Dr Yazdi's specialties",
				  "dr Yazdi's specialties",
				  "yazdi",
				  'Dr Yazdi',
				  'dr Yazdi'
				]
			}]
	}
	if( 
		splitSearch?.includes('appointment')||
		splitSearch?.includes('appointments') ||  
		splitSearch?.includes('consultation') ||
		splitSearch?.includes('consult') 
		){
			return [{
				title: 'Contact Us',
				url: 'https://bellevilledentistry.ca/contact-us',
				indications: 'Informational',
				searchOptions: [
				  'Appointments',
				  'book', 
				  'Book an appointment',
				  'Reservation',
				  'Call',
				  'Contact us',
				]
			  }]
	}

	const searchSounds = soundex((search).toLowerCase());
	
	return list.filter((item)=>{
		const sounds:any[] = [];
		
		(item.searchOptions || []).forEach((s:string)=>{
			sounds.push(soundex((s).toLowerCase()));
			if(item.title === 'Dr. Bill Hern'){
				console.log(soundex((s).toLowerCase()),soundex(item.title),item.title, searchSounds, s,  search ,searchSounds === soundex((s).toLowerCase()), item.title)
			}
			return null
		})

		if(item.title === 'Dr. Bill Hern'){
			console.log('Dr. Bill Hern', sounds, searchSounds)
		}
		return sounds.some(i => i === searchSounds);	
	});
  }

  return {search}
}

export default useData;