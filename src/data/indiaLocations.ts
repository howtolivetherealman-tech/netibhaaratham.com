import type { LanguageCode, NewsCategory, NewsLevel } from '../utils/newsLogic';

export interface StateEntry {
  state: string;
  labelTe: string;
  labelHi: string;
  districts: {
    district: string;
    labelTe?: string;
    mandals: string[];
  }[];
}

export const ALL_INDIA_LOCATIONS: StateEntry[] = [
  {
    state: 'Andhra Pradesh',
    labelTe: 'ఆంధ్రప్రదేశ్',
    labelHi: 'आंध्र प्रदेश',
    districts: [
      {
        district: 'Guntur',
        labelTe: 'గుంటూరు',
        mandals: ['Mangalagiri', 'Guntur West', 'Guntur East', 'Tadikonda', 'Tenali', 'Ponnur', 'Prathipadu', 'Thullur', 'Pedakakani', 'Chebrolu', 'Duggirala', 'Kollipara'],
      },
      {
        district: 'NTR Vijayawada',
        labelTe: 'ఎన్టీఆర్ విజయవాడ',
        mandals: ['Vijayawada Urban', 'Vijayawada Rural', 'Ibrahimpatnam', 'Mylavaram', 'Nandigama', 'Jaggayyapeta', 'Tiruvuru', 'Kanchikacherla', 'G.Konduru'],
      },
      {
        district: 'Visakhapatnam',
        labelTe: 'విశాఖపట్నం',
        mandals: ['Visakhapatnam Urban', 'Bheemunipatnam', 'Gajuwaka', 'Anandapuram', 'Pendurthi', 'Padmanabham', 'Seethammadhara', 'Gopalapatnam'],
      },
      {
        district: 'Tirupati',
        labelTe: 'తిరుపతి',
        mandals: ['Tirupati Urban', 'Tirupati Rural', 'Chandragiri', 'Renigunta', 'Srikalahasti', 'Gudur', 'Sullurpeta', 'Naidupeta', 'Vakadu'],
      },
      {
        district: 'East Godavari',
        labelTe: 'తూర్పు గోదావరి',
        mandals: ['Rajahmundry Urban', 'Rajahmundry Rural', 'Kovvur', 'Nidadavole', 'Rajanagaram', 'Korukonda', 'Gokavaram', 'Anaparthi'],
      },
      {
        district: 'Kakinada',
        labelTe: 'కాకినాడ',
        mandals: ['Kakinada Urban', 'Kakinada Rural', 'Pithapuram', 'Tuni', 'Peddapuram', 'Samalkota', 'Prathipadu', 'Jaggampeta'],
      },
      {
        district: 'Konaseema',
        labelTe: 'కోనసీమ',
        mandals: ['Amalapuram', 'Razole', 'Ravulapalem', 'Kothapeta', 'Mummidivaram', 'Ramachandrapuram', 'Mandapeta'],
      },
      {
        district: 'West Godavari',
        labelTe: 'పశ్చిమ గోదావరి',
        mandals: ['Bhimavaram', 'Tadepalligudem', 'Tanuku', 'Narsapur', 'Palakollu', 'Akividu', 'Undi', 'Penugonda'],
      },
      {
        district: 'Eluru',
        labelTe: 'ఏలూరు',
        mandals: ['Eluru', 'Jangareddygudem', 'Chintalapudi', 'Nuzvid', 'Kaikaluru', 'Denduluru', 'Polavaram'],
      },
      {
        district: 'Krishna',
        labelTe: 'కృష్ణా',
        mandals: ['Machilipatnam', 'Gudivada', 'Gannavaram', 'Pamarru', 'Avanigadda', 'Pedana', 'Vuyyuru', 'Penamaluru'],
      },
      {
        district: 'Palnadu',
        labelTe: 'పల్నాడు',
        mandals: ['Narasaraopet', 'Chilakaluripet', 'Sattenapalli', 'Gurazala', 'Macherla', 'Vinukonda', 'Piduguralla'],
      },
      {
        district: 'Bapatla',
        labelTe: 'బాపట్ల',
        mandals: ['Bapatla', 'Chirala', 'Repalle', 'Addanki', 'Parchur', 'Vemuru', 'Karlapalem'],
      },
      {
        district: 'Prakasam',
        labelTe: 'ప్రకాశం',
        mandals: ['Ongole', 'Markapur', 'Giddalur', 'Kanigiri', 'Darsi', 'Chimakurthy', 'Kothapalli', 'Singarayakonda'],
      },
      {
        district: 'SPSR Nellore',
        labelTe: 'నెల్లూరు',
        mandals: ['Nellore Urban', 'Nellore Rural', 'Kavali', 'Kovur', 'Atmakur', 'Udayagiri', 'Kandukur', 'Buchireddypalem'],
      },
      {
        district: 'Kurnool',
        labelTe: 'కర్నూలు',
        mandals: ['Kurnool Urban', 'Adoni', 'Yemmiganur', 'Pattikonda', 'Alur', 'Kodumur', 'Mantralayam'],
      },
      {
        district: 'Nandyal',
        labelTe: 'నంద్యాల',
        mandals: ['Nandyal', 'Allagadda', 'Dhone', 'Nandikotkur', 'Banaganapalle', 'Srisailam', 'Atmakur'],
      },
      {
        district: 'Anantapur',
        labelTe: 'అనంతపురం',
        mandals: ['Anantapur Urban', 'Tadipatri', 'Guntakal', 'Uravakonda', 'Rayadurg', 'Kalyandurg', 'Singanamala'],
      },
      {
        district: 'Sri Sathya Sai',
        labelTe: 'శ్రీ సత్యసాయి',
        mandals: ['Puttaparthi', 'Dharmavaram', 'Hindupur', 'Kadiri', 'Penukonda', 'Madakasira'],
      },
      {
        district: 'YSR Kadapa',
        labelTe: 'వైఎస్ఆర్ కడప',
        mandals: ['Kadapa', 'Proddatur', 'Pulivendula', 'Jammalamadugu', 'Badvel', 'Mydukur', 'Kamalapuram'],
      },
      {
        district: 'Annamayya',
        labelTe: 'అన్నమయ్య',
        mandals: ['Rayachoti', 'Madanapalle', 'Rajampet', 'Railway Koduru', 'Thamballapalle', 'Pileru'],
      },
      {
        district: 'Chittoor',
        labelTe: 'చిత్తూరు',
        mandals: ['Chittoor', 'Palamaner', 'Kuppam', 'Nagari', 'Punganur', 'Gangadhara Nellore'],
      },
      {
        district: 'Srikakulam',
        labelTe: 'శ్రీకాకుళం',
        mandals: ['Srikakulam', 'Palasa', 'Tekkali', 'Amadalavalasa', 'Ichchapuram', 'Narasannapeta'],
      },
      {
        district: 'Vizianagaram',
        labelTe: 'విజయనగరం',
        mandals: ['Vizianagaram', 'Bobbili', 'Cheepurupalli', 'Gajapathinagaram', 'Srungavarapukota', 'Nellimarla'],
      },
      {
        district: 'Parvathipuram Manyam',
        labelTe: 'పార్వతీపురం మన్యం',
        mandals: ['Parvathipuram', 'Salur', 'Palakonda', 'Kurupam', 'Seethampeta'],
      },
      {
        district: 'Alluri Sitharama Raju',
        labelTe: 'అల్లూరి సీతారామరాజు',
        mandals: ['Paderu', 'Araku Valley', 'Rampachodavaram', 'Chintoor', 'Chintapalli'],
      },
      {
        district: 'Anakapalli',
        labelTe: 'అనకాపల్లి',
        mandals: ['Anakapalli', 'Narsipatnam', 'Yelamanchili', 'Chodavaram', 'Payakaraopeta', 'Madugula'],
      },
    ],
  },
  {
    state: 'Telangana',
    labelTe: 'తెలంగాణ',
    labelHi: 'तेलंगाना',
    districts: [
      {
        district: 'Hyderabad',
        labelTe: 'హైదరాబాద్',
        mandals: ['Secunderabad', 'Ameerpet', 'Khairatabad', 'Jubilee Hills', 'Banjara Hills', 'Charminar', 'Musheerabad', 'Amberpet', 'Nampally', 'Golconda'],
      },
      {
        district: 'Rangareddy',
        labelTe: 'రంగారెడ్డి',
        mandals: ['Serilingampally', 'Rajendranagar', 'Ibrahimpatnam', 'Maheshwaram', 'Shadnagar', 'Chevella', 'Kandukur', 'Shamshabad', 'Hayathnagar'],
      },
      {
        district: 'Medchal-Malkajgiri',
        labelTe: 'మేడ్చల్-మల్కాజిగిరి',
        mandals: ['Kukatpally', 'Malkajgiri', 'Uppal', 'Quthbullapur', 'Medchal', 'Alwal', 'Ghatkesar', 'Keesara', 'Balanagar'],
      },
      {
        district: 'Hanumakonda',
        labelTe: 'హనుమకొండ',
        mandals: ['Hanumakonda', 'Kazipet', 'Hasanparthy', 'Parkal', 'Kamalapur', 'Elkathurthy', 'Dharmasagar'],
      },
      {
        district: 'Warangal',
        labelTe: 'వరంగల్',
        mandals: ['Warangal', 'Narsampet', 'Wardhannapet', 'Geesugonda', 'Sangem', 'Parvathagiri'],
      },
      {
        district: 'Khammam',
        labelTe: 'ఖమ్మం',
        mandals: ['Khammam Urban', 'Khammam Rural', 'Madhira', 'Sathupalli', 'Wyra', 'Palair', 'Kalluru', 'Kusumanchi'],
      },
      {
        district: 'Karimnagar',
        labelTe: 'కరీంనగర్',
        mandals: ['Karimnagar', 'Huzurabad', 'Choppadandi', 'Manakondur', 'Jammikunta', 'Thimmapur'],
      },
      {
        district: 'Nizamabad',
        labelTe: 'నిజామాబాద్',
        mandals: ['Nizamabad North', 'Nizamabad South', 'Armoor', 'Bodhan', 'Balkonda', 'dichpally'],
      },
      {
        district: 'Nalgonda',
        labelTe: 'నల్గొండ',
        mandals: ['Nalgonda', 'Miryalaguda', 'Devarakonda', 'Nakrekal', 'Nagarjuna Sagar', 'Munugode', 'Chityal'],
      },
      {
        district: 'Suryapet',
        labelTe: 'సూర్యాపేట',
        mandals: ['Suryapet', 'Kodad', 'Huzurnagar', 'Thungathurthi', 'Chivvemla', 'Mothey'],
      },
      {
        district: 'Mahabubnagar',
        labelTe: 'మహబూబ్ నగర్',
        mandals: ['Mahabubnagar Urban', 'Jadcherla', 'Devarkadra', 'Bhoothpur', 'Hanwada'],
      },
      {
        district: 'Sangareddy',
        labelTe: 'సంగారెడ్డి',
        mandals: ['Sangareddy', 'Patancheru', 'Zaheerabad', 'Andole', 'Narayankhed', 'Sadasivpet', 'Ameenpur'],
      },
      {
        district: 'Siddipet',
        labelTe: 'సిద్దిపేట',
        mandals: ['Siddipet Urban', 'Gajwel', 'Husnabad', 'Dubbaka', 'Cherial', 'Thoguta'],
      },
      {
        district: 'Adilabad',
        labelTe: 'ఆదిలాబాద్',
        mandals: ['Adilabad Urban', 'Boath', 'Ichoda', 'Jainath', 'Utnoor', 'Bela'],
      },
      {
        district: 'Bhadradri Kothagudem',
        labelTe: 'భద్రాద్రి కొత్తగూడెం',
        mandals: ['Kothagudem', 'Bhadrachalam', 'Yellandu', 'Palvancha', 'Manuguru', 'Aswaraopeta'],
      },
      {
        district: 'Yadadri Bhuvanagiri',
        labelTe: 'యాదాద్రి భువనగిరి',
        mandals: ['Bhongir', 'Yadagirigutta', 'Alair', 'Choutuppal', 'Bibinagar', 'Mothkur'],
      },
      {
        district: 'Medak',
        labelTe: 'మెదక్',
        mandals: ['Medak', 'Narsapur', 'Toopran', 'Ramayampet', 'Chegunta'],
      },
      {
        district: 'Jagtial',
        labelTe: 'జగిత్యాల',
        mandals: ['Jagtial', 'Korutla', 'Metpally', 'Dharmapuri', 'Raikal'],
      },
      {
        district: 'Peddapalli',
        labelTe: 'పెద్దపల్లి',
        mandals: ['Peddapalli', 'Ramagundam', 'Manthani', 'Sultanabad'],
      },
      {
        district: 'Mancherial',
        labelTe: 'మంచిర్యాల',
        mandals: ['Mancherial', 'Bellampalli', 'Chennur', 'Luxettipet', 'Naspur'],
      },
    ],
  },
  {
    state: 'Delhi (NCT)',
    labelTe: 'ఢిల్లీ (దేశ రాజధాని)',
    labelHi: 'दिल्ली (एनसीटी)',
    districts: [
      {
        district: 'New Delhi',
        mandals: ['Chanakyapuri', 'Parliament Street', 'Connaught Place', 'Vasant Vihar', 'Delhi Cantt'],
      },
      {
        district: 'Central Delhi',
        mandals: ['Civil Lines', 'Kotwali', 'Karol Bagh', 'Daryaganj'],
      },
      {
        district: 'South Delhi',
        mandals: ['Saket', 'Hauz Khas', 'Mehrauli', 'Kalkaji', 'Defence Colony'],
      },
    ],
  },
  {
    state: 'Karnataka',
    labelTe: 'కర్ణాటక',
    labelHi: 'कर्नाटक',
    districts: [
      {
        district: 'Bengaluru Urban',
        mandals: ['Bengaluru North', 'Bengaluru South', 'Yelahanka', 'Whitefield (KR Puram)', 'Anekal'],
      },
      {
        district: 'Mysuru',
        mandals: ['Mysuru Taluk', 'Nanjangud', 'Hunsur', 'T. Narasipura'],
      },
      {
        district: 'Ballari',
        mandals: ['Ballari', 'Sandur', 'Siruguppa', 'Kampli'],
      },
    ],
  },
  {
    state: 'Tamil Nadu',
    labelTe: 'తమిళనాడు',
    labelHi: 'तमिलनाडु',
    districts: [
      {
        district: 'Chennai',
        mandals: ['Egmore', 'Mylapore', 'Guindy', 'Tondiarpet', 'Velachery', 'Ambattur'],
      },
      {
        district: 'Coimbatore',
        mandals: ['Coimbatore North', 'Coimbatore South', 'Pollachi', 'Mettupalayam', 'Sulur'],
      },
      {
        district: 'Madurai',
        mandals: ['Madurai North', 'Madurai South', 'Melur', 'Thirumangalam'],
      },
    ],
  },
  {
    state: 'Maharashtra',
    labelTe: 'మహారాష్ట్ర',
    labelHi: 'महाराष्ट्र',
    districts: [
      {
        district: 'Mumbai Suburban',
        mandals: ['Andheri', 'Bandra', 'Borivali', 'Kurla', 'Mulund'],
      },
      {
        district: 'Pune',
        mandals: ['Pune City', 'Haveli', 'Baramati', 'Maval', 'Mulshi'],
      },
      {
        district: 'Nagpur',
        mandals: ['Nagpur Urban', 'Nagpur Rural', 'Kamptee', 'Hingna', 'Ramtek'],
      },
    ],
  },
  {
    state: 'Uttar Pradesh',
    labelTe: 'ఉత్తర ప్రదేశ్',
    labelHi: 'उत्तर प्रदेश',
    districts: [
      {
        district: 'Lucknow',
        mandals: ['Lucknow Sadar', 'Mohanlalganj', 'Bakshi Ka Talab', 'Malihabad'],
      },
      {
        district: 'Varanasi',
        mandals: ['Varanasi Sadar', 'Pindra', 'Raja Talab'],
      },
      {
        district: 'Gautam Buddha Nagar',
        mandals: ['Noida', 'Greater Noida (Dadri)', 'Jewar'],
      },
    ],
  },
  {
    state: 'Gujarat',
    labelTe: 'గుజరాత్',
    labelHi: 'गुजरात',
    districts: [
      {
        district: 'Ahmedabad',
        mandals: ['Ahmedabad City', 'Daskroi', 'Sanand', 'Dholka'],
      },
      {
        district: 'Surat',
        mandals: ['Surat City', 'Chorasi', 'Bardoli', 'Olpad'],
      },
    ],
  },
  {
    state: 'Rajasthan',
    labelTe: 'రాజస్థాన్',
    labelHi: 'राजस्थान',
    districts: [
      {
        district: 'Jaipur',
        mandals: ['Jaipur', 'Amber', 'Sanganer', 'Chomu'],
      },
      {
        district: 'Jodhpur',
        mandals: ['Jodhpur', 'Bilara', 'Osian', 'Phalodi'],
      },
    ],
  },
  {
    state: 'West Bengal',
    labelTe: 'పశ్చిమ బెంగాల్',
    labelHi: 'पश्चिम बंगाल',
    districts: [
      {
        district: 'Kolkata',
        mandals: ['Ballygunge', 'Alipore', 'Salt Lake', 'Esplanade'],
      },
      {
        district: 'Howrah',
        mandals: ['Howrah Sadar', 'Uluberia', 'Bally'],
      },
    ],
  },
  {
    state: 'Madhya Pradesh',
    labelTe: 'మధ్య ప్రదేశ్',
    labelHi: 'मध्य प्रदेश',
    districts: [
      {
        district: 'Bhopal',
        mandals: ['Huzur', 'Berasia', 'Kolar'],
      },
      {
        district: 'Indore',
        mandals: ['Indore', 'Mhow', 'Sanwer', 'Depalpur'],
      },
    ],
  },
  {
    state: 'Bihar',
    labelTe: 'బీహార్',
    labelHi: 'बिहार',
    districts: [
      {
        district: 'Patna',
        mandals: ['Patna Sadar', 'Danapur', 'Phulwari Sharif', 'Barh'],
      },
      {
        district: 'Gaya',
        mandals: ['Gaya Town', 'Bodh Gaya', 'Tekari'],
      },
    ],
  },
  {
    state: 'Kerala',
    labelTe: 'కేరళ',
    labelHi: 'केरल',
    districts: [
      {
        district: 'Thiruvananthapuram',
        mandals: ['Thiruvananthapuram', 'Neyyattinkara', 'Attingal', 'Varkala'],
      },
      {
        district: 'Ernakulam',
        mandals: ['Kochi', 'Kanayannur', 'Aluva', 'Paravur'],
      },
    ],
  },
  {
    state: 'Odisha',
    labelTe: 'ఒడిశా',
    labelHi: 'ओडिशा',
    districts: [
      {
        district: 'Khordha',
        mandals: ['Bhubaneswar', 'Jatni', 'Khordha', 'Balianta'],
      },
      {
        district: 'Cuttack',
        mandals: ['Cuttack Sadar', 'Choudwar', 'Banki'],
      },
    ],
  },
  {
    state: 'Punjab',
    labelTe: 'పంజాబ్',
    labelHi: 'पंजाब',
    districts: [
      {
        district: 'Amritsar',
        mandals: ['Amritsar-I', 'Amritsar-II', 'Ajnala'],
      },
      {
        district: 'Ludhiana',
        mandals: ['Ludhiana East', 'Ludhiana West', 'Khanna'],
      },
    ],
  },
  {
    state: 'Haryana',
    labelTe: 'హర్యానా',
    labelHi: 'हरियाणा',
    districts: [
      {
        district: 'Gurugram',
        mandals: ['Gurugram', 'Sohna', 'Manesar', 'Pataudi'],
      },
      {
        district: 'Faridabad',
        mandals: ['Faridabad', 'Ballabgarh', 'Badkhal'],
      },
    ],
  },
  {
    state: 'Assam',
    labelTe: 'అస్సాం',
    labelHi: 'असम',
    districts: [
      {
        district: 'Kamrup Metropolitan',
        mandals: ['Guwahati', 'Dispur', 'Sonapur', 'Azara'],
      },
    ],
  },
  {
    state: 'Jharkhand',
    labelTe: 'జార్ఖండ్',
    labelHi: 'झारखंड',
    districts: [
      {
        district: 'Ranchi',
        mandals: ['Ranchi Sadar', 'Kanke', 'Namkum', 'Ormanjhi'],
      },
    ],
  },
  {
    state: 'Chhattisgarh',
    labelTe: 'ఛత్తీస్‌గఢ్',
    labelHi: 'छत्तीसगढ़',
    districts: [
      {
        district: 'Raipur',
        mandals: ['Raipur', 'Nava Raipur (Arang)', 'Abhanpur'],
      },
    ],
  },
  {
    state: 'Uttarakhand',
    labelTe: 'ఉత్తరాఖండ్',
    labelHi: 'उत्तराखंड',
    districts: [
      {
        district: 'Dehradun',
        mandals: ['Dehradun', 'Rishikesh', 'Mussoorie', 'Vikasnagar'],
      },
    ],
  },
  {
    state: 'Himachal Pradesh',
    labelTe: 'హిమాచల్ ప్రదేశ్',
    labelHi: 'हिमाचल प्रदेश',
    districts: [
      {
        district: 'Shimla',
        mandals: ['Shimla Urban', 'Shimla Rural', 'Rampur', 'Rohru'],
      },
    ],
  },
  {
    state: 'Goa',
    labelTe: 'గోవా',
    labelHi: 'गोवा',
    districts: [
      {
        district: 'North Goa',
        mandals: ['Panaji (Tiswadi)', 'Mapusa (Bardez)', 'Bicholim'],
      },
      {
        district: 'South Goa',
        mandals: ['Margao (Salcete)', 'Vasco (Mormugao)', 'Ponda'],
      },
    ],
  },
  {
    state: 'Tripura',
    labelTe: 'త్రిపుర',
    labelHi: 'त्रिपुरा',
    districts: [{ district: 'West Tripura', mandals: ['Agartala (Sadar)', 'Mohanpur', 'Jirania'] }],
  },
  {
    state: 'Manipur',
    labelTe: 'మణిపూర్',
    labelHi: 'मणिपुर',
    districts: [{ district: 'Imphal West', mandals: ['Lamphelpat', 'Patsoi', 'Wangoi'] }],
  },
  {
    state: 'Meghalaya',
    labelTe: 'మేఘాలయ',
    labelHi: 'मेघालय',
    districts: [{ district: 'East Khasi Hills', mandals: ['Shillong (Mylliem)', 'Sohra', 'Mawphlang'] }],
  },
  {
    state: 'Nagaland',
    labelTe: 'నాగాలాండ్',
    labelHi: 'नागालैंड',
    districts: [{ district: 'Kohima', mandals: ['Kohima Sadar', 'Jakhama', 'Tseminyu'] }],
  },
  {
    state: 'Arunachal Pradesh',
    labelTe: 'అరుణాచల్ ప్రదేశ్',
    labelHi: 'अरुणाचल प्रदेश',
    districts: [{ district: 'Papum Pare', mandals: ['Itanagar', 'Naharlagun', 'Doimukh'] }],
  },
  {
    state: 'Mizoram',
    labelTe: 'మిజోరం',
    labelHi: 'मिजोरम',
    districts: [{ district: 'Aizawl', mandals: ['Aizawl North', 'Aizawl South', 'Darlawn'] }],
  },
  {
    state: 'Sikkim',
    labelTe: 'సిక్కిం',
    labelHi: 'सिक्किम',
    districts: [{ district: 'Gangtok', mandals: ['Gangtok', 'Pakyong', 'Singtam'] }],
  },
  {
    state: 'Jammu & Kashmir (UT)',
    labelTe: 'జమ్మూ & కాశ్మీర్',
    labelHi: 'जम्मू और कश्मीर',
    districts: [
      { district: 'Srinagar', mandals: ['Srinagar Central', 'Hazratbal', 'Pantha Chowk'] },
      { district: 'Jammu', mandals: ['Jammu Khas', 'R.S. Pura', 'Akhnoor'] },
    ],
  },
  {
    state: 'Puducherry (UT)',
    labelTe: 'పుదుచ్చేరి',
    labelHi: 'पुदुच्चेरी',
    districts: [{ district: 'Puducherry', mandals: ['Oulgaret', 'Villianur', 'Yanam', 'Karaikal'] }],
  },
  {
    state: 'Chandigarh (UT)',
    labelTe: 'చండీగఢ్',
    labelHi: 'चंडीगढ़',
    districts: [{ district: 'Chandigarh', mandals: ['Sector 1-17', 'Manimajra', 'Daria'] }],
  },
];

let activeLocationsStore: StateEntry[] = ALL_INDIA_LOCATIONS;

export function setActiveLocationsStore(locations: StateEntry[]): void {
  if (Array.isArray(locations) && locations.length > 0) {
    activeLocationsStore = locations;
  }
}

export function getStates(locations: StateEntry[] = activeLocationsStore): StateEntry[] {
  return locations;
}

export function getDistrictsByState(
  stateName: string,
  locations: StateEntry[] = activeLocationsStore
) {
  const entry = locations.find(
    (s) => s.state.toLowerCase() === (stateName || '').toLowerCase()
  );
  return entry ? entry.districts : [];
}

export function getMandalsByDistrict(
  stateName: string,
  districtName: string,
  locations: StateEntry[] = activeLocationsStore
): string[] {
  const districts = getDistrictsByState(stateName, locations);
  const dist = districts.find(
    (d) => d.district.toLowerCase() === (districtName || '').toLowerCase()
  );
  return dist ? dist.mandals : [];
}

export interface FlatMandalDirectoryItem {
  state: string;
  stateLabelTe: string;
  district: string;
  mandal: string;
}

export function searchAllMandals(
  query: string,
  locations: StateEntry[] = activeLocationsStore
): FlatMandalDirectoryItem[] {
  const q = (query || '').trim().toLowerCase();
  const list: FlatMandalDirectoryItem[] = [];

  for (const s of locations) {
    for (const d of s.districts) {
      for (const m of d.mandals) {
        if (
          !q ||
          m.toLowerCase().includes(q) ||
          d.district.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q) ||
          s.labelTe.includes(q)
        ) {
          list.push({
            state: s.state,
            stateLabelTe: s.labelTe,
            district: d.district,
            mandal: m,
          });
        }
      }
    }
  }
  return list;
}

export const TRANSLATIONS: Record<
  LanguageCode,
  {
    brandTitle: string;
    brandTagline: string;
    navNews: string;
    navMandalExplorer: string;
    navVideos: string;
    navReporter: string;
    navAdvertise: string;
    navAdmin: string;
    levelAll: string;
    levelNational: string;
    levelState: string;
    levelDistrict: string;
    levelMandal: string;
    searchPlaceholder: string;
    selectState: string;
    selectDistrict: string;
    selectMandal: string;
    allStates: string;
    allDistricts: string;
    allMandals: string;
    openMandalPage: string;
    viewsLabel: string;
    youtubeWatch: string;
    leadStoryKicker: string;
    breakingTickerLabel: string;
    feedbackButton: string;
    installAppButton: string;
    playStoreGuideButton: string;
    categories: Record<NewsCategory | 'all', string>;
  }
> = {
  te: {
    brandTitle: 'నేటిభారతం',
    brandTagline: 'ఒక దేశం ఒకే చట్టం — జాతీయ, రాష్ట్ర, జిల్లా & మండల సమగ్ర వార్తా వేదిక',
    navNews: 'వార్తలు',
    navMandalExplorer: 'మండల పేజీలు',
    navVideos: 'వీడియో అప్‌డేట్స్',
    navReporter: 'రిపోర్టర్ పోర్టల్',
    navAdvertise: 'ప్రైవేట్ యాడ్స్',
    navAdmin: 'అడ్మిన్',
    levelAll: 'అన్ని వార్తలు',
    levelNational: 'జాతీయ వార్తలు (National)',
    levelState: 'రాష్ట్ర వార్తలు (State)',
    levelDistrict: 'జిల్లా వార్తలు (District)',
    levelMandal: 'మండల వార్తలు (Mandal)',
    searchPlaceholder: 'వార్తలు, రాష్ట్రం, జిల్లా లేదా మండలం పేరుతో వెతకండి...',
    selectState: 'రాష్ట్రం ఎంచుకోండి (State)',
    selectDistrict: 'జిల్లా ఎంచుకోండి (District)',
    selectMandal: 'మండలం ఎంచుకోండి (Mandal)',
    allStates: 'అన్ని రాష్ట్రాలు (All India)',
    allDistricts: 'అన్ని జిల్లాలు',
    allMandals: 'అన్ని మండలాలు',
    openMandalPage: 'మండల పేజీ తెరవండి',
    viewsLabel: 'వీక్షణలు (Views)',
    youtubeWatch: 'యూట్యూబ్ వీడియో చూడండి',
    leadStoryKicker: 'ప్రధాన కథనం · నేటిభారతం ప్రత్యేక నివేదిక',
    breakingTickerLabel: 'తాజా అప్‌డేట్స్',
    feedbackButton: 'యూజర్ ఫీడ్‌బ్యాక్',
    installAppButton: 'యాప్ ఇన్‌స్టాల్',
    playStoreGuideButton: 'Play Store యాప్',
    categories: {
      all: 'అన్ని విభాగాలు',
      justice: 'ఒక దేశం ఒకే చట్టం',
      politics: 'రాజకీయం',
      agriculture: 'వ్యవసాయం',
      local: 'మండల అభివృద్ధి',
      education: 'విద్య & ఉపాధి',
      business: 'వాణిజ్యం',
      crime: 'క్రైమ్ & నిఘా',
    },
  },
  hi: {
    brandTitle: 'नेति भारतम (Neti Bharatam)',
    brandTagline: 'एक देश एक कानून — राष्ट्रीय, राज्य, जिला और मंडल समाचार पोर्टल',
    navNews: 'समाचार',
    navMandalExplorer: 'मंडल पेज',
    navVideos: 'वीडियो अपडेट',
    navReporter: 'रिपोर्टर पोर्टल',
    navAdvertise: 'प्राइवेट विज्ञापन',
    navAdmin: 'एडमिन',
    levelAll: 'सभी समाचार',
    levelNational: 'राष्ट्रीय (National)',
    levelState: 'राज्य (State)',
    levelDistrict: 'जिला (District)',
    levelMandal: 'मंडल (Mandal)',
    searchPlaceholder: 'समाचार, राज्य, जिला या मंडल खोजें...',
    selectState: 'राज्य चुनें',
    selectDistrict: 'जिला चुनें',
    selectMandal: 'मंडल चुनें',
    allStates: 'संपूर्ण भारत (All States)',
    allDistricts: 'सभी जिले',
    allMandals: 'सभी मंडल',
    openMandalPage: 'मंडल पेज खोलें',
    viewsLabel: 'व्यूज (Views)',
    youtubeWatch: 'यूट्यूब वीडियो देखें',
    leadStoryKicker: 'प्रमुख समाचार · नेति भारतम विशेष रिपोर्ट',
    breakingTickerLabel: 'ताज़ा खबर',
    feedbackButton: 'पाठक फीडबैक',
    installAppButton: 'ऐप इंस्टॉल करें',
    playStoreGuideButton: 'Play Store ऐप',
    categories: {
      all: 'सभी श्रेणियां',
      justice: 'एक देश एक कानून',
      politics: 'राजनीति',
      agriculture: 'कृषि एवं सिंचाई',
      local: 'मंडल विकास',
      education: 'शिक्षा व रोजगार',
      business: 'व्यापार',
      crime: 'अपराध व सतर्कता',
    },
  },
  en: {
    brandTitle: 'Neti Bharatam (నేటిభారతం)',
    brandTagline: 'One Nation One Law — National, State, District & Mandal News Network',
    navNews: 'News Feed',
    navMandalExplorer: 'Mandal Pages',
    navVideos: 'Video Updates',
    navReporter: 'Reporter Portal',
    navAdvertise: 'Private Ads',
    navAdmin: 'Admin',
    levelAll: 'All News',
    levelNational: 'National News',
    levelState: 'State News',
    levelDistrict: 'District News',
    levelMandal: 'Mandal News',
    searchPlaceholder: 'Search news, State, District, or Mandal...',
    selectState: 'Select State',
    selectDistrict: 'Select District',
    selectMandal: 'Select Mandal',
    allStates: 'All India States',
    allDistricts: 'All Districts',
    allMandals: 'All Mandals',
    openMandalPage: 'Open Mandal Page',
    viewsLabel: 'Views',
    youtubeWatch: 'Watch YouTube Update',
    leadStoryKicker: 'Lead Investigation · Neti Bharatam Special Desk',
    breakingTickerLabel: 'Breaking Updates',
    feedbackButton: 'Reader Feedback',
    installAppButton: 'Install App',
    playStoreGuideButton: 'Play Store App',
    categories: {
      all: 'All Categories',
      justice: 'One Nation One Law',
      politics: 'Politics & Policy',
      agriculture: 'Agriculture',
      local: 'Mandal Civic',
      education: 'Education & Jobs',
      business: 'Business',
      crime: 'Law & Vigilance',
    },
  },
};

export function getArticleText(
  article: {
    titleTe: string;
    titleHi: string;
    titleEn: string;
    summaryTe: string;
    summaryHi: string;
    summaryEn: string;
    contentTe: string;
    contentHi: string;
    contentEn: string;
  },
  lang: LanguageCode
) {
  if (lang === 'hi') {
    return {
      title: article.titleHi || article.titleTe,
      summary: article.summaryHi || article.summaryTe,
      content: article.contentHi || article.contentTe,
    };
  }
  if (lang === 'en') {
    return {
      title: article.titleEn || article.titleTe,
      summary: article.summaryEn || article.summaryTe,
      content: article.contentEn || article.contentTe,
    };
  }
  return {
    title: article.titleTe,
    summary: article.summaryTe,
    content: article.contentTe,
  };
}
