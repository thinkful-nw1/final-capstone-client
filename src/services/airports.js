const airports = [
  {
    code: 'ABE',
    lat: '40.6514',
    lon: '-75.4342',
    name: 'Lehigh Valley International Airport',
    city: 'Allentown',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'ABI',
    lat: '32.4164',
    lon: '-99.6803',
    name: 'Abilene Regional Airport',
    city: 'Abilene',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'ABL',
    lat: '67.1058',
    lon: '-157.854',
    name: 'Ambler Airport',
    city: 'Kiana',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ABQ',
    lat: '35.0494',
    lon: '-106.625',
    name: 'Albuquerque International Airport',
    city: 'Albuquerque',
    state: 'New Mexico',
    country: 'United States'
  },
  {
    code: 'ABR',
    lat: '45.4536',
    lon: '-98.4189',
    name: 'Aberdeen Regional Airport',
    city: 'Aberdeen',
    state: 'South Dakota',
    country: 'United States'
  },
  {
    code: 'ABY',
    lat: '31.5328',
    lon: '-84.1867',
    name: 'Southwest Georgia Regional Airport',
    city: 'Albany',
    state: 'Georgia',
    country: 'United States'
  },
  {
    code: 'ACK',
    lat: '41.2568',
    lon: '-70.0649',
    name: 'Nantucket Memorial Airport',
    city: 'Nantucket',
    state: 'Massachusetts',
    country: 'United States'
  },
  {
    code: 'ACT',
    lat: '31.609',
    lon: '-97.2234',
    name: 'Waco Regional Airport',
    city: 'Waco',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'ACV',
    lat: '40.9698',
    lon: '-124.108',
    name: 'Arcata Airport',
    city: 'Mckinleyville',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'ACY',
    lat: '39.4512',
    lon: '-74.5716',
    name: 'Atlantic City International Airport',
    city: 'Egg Harbor City',
    state: 'New Jersey',
    country: 'United States'
  },
  {
    code: 'ADK',
    lat: '51.88',
    lon: '-176.639',
    name: 'Adak Airport',
    city: 'Adak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ADQ',
    lat: '57.7545',
    lon: '-152.512',
    name: 'Kodiak Airport',
    city: 'Kodiak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AET',
    lat: '66.55',
    lon: '-152.65',
    name: 'Allakaket Airport',
    city: 'Allakaket',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AEX',
    lat: '31.323',
    lon: '-92.5417',
    name: 'Alexandria International Airport',
    city: 'Alexandria',
    state: 'Louisiana',
    country: 'United States'
  },
  {
    code: 'AGN',
    lat: '57.4996',
    lon: '-134.577',
    name: 'Angoon Airport',
    city: 'Angoon',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AGS',
    lat: '33.3735',
    lon: '-81.9732',
    name: 'Bush Field Airport',
    city: 'Augusta',
    state: 'Georgia',
    country: 'United States'
  },
  {
    code: 'AHC',
    lat: '40.2664',
    lon: '-120.151',
    name: 'Amedee Army Air Field',
    city: 'Herlong',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'AIA',
    lat: '42.0622',
    lon: '-102.81',
    name: 'Alliance Municipal Airport',
    city: 'Alliance',
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'AIN',
    lat: '70.6139',
    lon: '-159.857',
    name: 'Wainwright Airport',
    city: 'Wainwright',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AKB',
    lat: '52.2217',
    lon: '-174.204',
    name: 'Atka Airport',
    city: 'Atka',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AKI',
    lat: '60.8866',
    lon: '-161.218',
    name: 'Akiak Airport',
    city: 'Bethel',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AKK',
    lat: '56.95',
    lon: '-154.167',
    name: 'Akhiok Airport',
    city: 'Kodiak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AKN',
    lat: '58.6775',
    lon: '-156.655',
    name: 'King Salmon Airport',
    city: 'King Salmon',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AKP',
    lat: '68.1916',
    lon: '-151.79',
    name: 'Anaktuvuk Pass Airport',
    city: 'Anaktuvuk Pass',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ALB',
    lat: '42.7426',
    lon: '-73.809',
    name: 'Albany International Airport',
    city: 'Latham',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'ALM',
    lat: '32.8407',
    lon: '-105.994',
    name: 'Alamogordo White Sands Regional Airport',
    city: 'Alamogordo',
    state: 'New Mexico',
    country: 'United States'
  },
  {
    code: 'ALO',
    lat: '42.5509',
    lon: '-92.3951',
    name: 'Waterloo Municipal Airport',
    city: 'Waterloo',
    state: 'Iowa',
    country: 'United States'
  },
  {
    code: 'ALS',
    lat: '37.4444',
    lon: '-105.865',
    name: 'San Luis Valley Regional Airport',
    city: 'Alamosa',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'ALW',
    lat: '46.0879',
    lon: '-118.283',
    name: 'Walla Walla Regional Airport',
    city: 'Walla Walla',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'ALZ',
    lat: '56.8988',
    lon: '-154.246',
    name: 'Alitak Seaplane Base',
    city: 'Alitak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AMA',
    lat: '35.2177',
    lon: '-101.706',
    name: 'Amarillo International Airport',
    city: 'Amarillo',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'ANC',
    lat: '61.1767',
    lon: '-149.961',
    name: 'Anchorage International Airport',
    city: 'Anchorage',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ANI',
    lat: '61.5742',
    lon: '-159.535',
    name: 'Aniak Airport',
    city: 'Bethel',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ANV',
    lat: '62.65',
    lon: '-160.217',
    name: 'Anvik Airport',
    city: 'Anvik',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AOO',
    lat: '40.2952',
    lon: '-78.324',
    name: 'Altoona-Blair County Airport',
    city: 'Martinsburg',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'AOS',
    lat: '57.4672',
    lon: '-153.839',
    name: 'Amook Bay Seaplane Base',
    city: 'Amook',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'APA',
    lat: '39.5752',
    lon: '-104.845',
    name: 'Centennial Airport',
    city: 'Englewood',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'APF',
    lat: '26.1483',
    lon: '-81.7745',
    name: 'Naples Municipal Airport',
    city: 'Naples',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'APN',
    lat: '45.07',
    lon: '-83.5683',
    name: 'Alpena County Regional Airport',
    city: 'Alpena',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'ARC',
    lat: '68.1167',
    lon: '-145.583',
    name: 'Arctic Village Airport',
    city: 'Arctic Village',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ART',
    lat: '43.9942',
    lon: '-76.0232',
    name: 'Watertown International Airport',
    city: 'Dexter',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'ARV',
    lat: '45.9296',
    lon: '-89.7371',
    name: 'Lakelan-Noble F. Lee Memerial Field Airport',
    city: 'Woodruff',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'ASE',
    lat: '39.2197',
    lon: '-106.864',
    name: 'Aspen Pitkin County Airport-Sardy Field',
    city: 'Aspen',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'ATK',
    lat: '70.4639',
    lon: '-157.331',
    name: 'Atqasuk Airport',
    city: 'Atqasuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ATL',
    lat: '33.6558',
    lon: '-84.4333',
    name: 'Hartsfield-Jackson Atlanta International Airport',
    city: 'Atlanta',
    state: 'Georgia',
    country: 'United States'
  },
  {
    code: 'ATT',
    lat: '60.865',
    lon: '-162.276',
    name: 'Atmautluak Airport',
    city: 'Atmautluak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ATW',
    lat: '44.2603',
    lon: '-88.5111',
    name: 'Outagamie County Airport',
    city: 'Appleton',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'ATY',
    lat: '44.9216',
    lon: '-97.1609',
    name: 'Watertown Municipal Airport',
    city: 'Watertown',
    state: 'South Dakota',
    country: 'United States'
  },
  {
    code: 'AUG',
    lat: '44.3181',
    lon: '-69.7933',
    name: 'Augusta State Airport',
    city: 'Augusta',
    state: 'Maine',
    country: 'United States'
  },
  {
    code: 'AUK',
    lat: '62.6833',
    lon: '-164.633',
    name: 'Alakanuk Airport',
    city: 'Alakanuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'AUS',
    lat: '30.2027',
    lon: '-97.6653',
    name: 'Austin-Bergstrom International Airport',
    city: 'Austin',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'AVL',
    lat: '35.4349',
    lon: '-82.5373',
    name: 'Asheville Regional Airport',
    city: 'Fletcher',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'AVP',
    lat: '41.3354',
    lon: '-75.7294',
    name: 'Wilkes Barre Scranton International Airport',
    city: 'Pittston',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'AZA',
    lat: '33.3078',
    lon: '-111.656',
    name: 'Phoenix-Mesa Gateway Airport',
    city: 'Phoenix',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'AZO',
    lat: '42.2398',
    lon: '-85.5563',
    name: 'Kalamazoo-Battle Creek International Airport',
    city: 'Kalamazoo',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'BDL',
    lat: '41.9271',
    lon: '-72.6816',
    name: 'Bradley International Airport',
    city: 'Windsor Locks',
    state: 'Connecticut',
    country: 'United States'
  },
  {
    code: 'BDR',
    lat: '41.1636',
    lon: '-73.1283',
    name: 'Igor I Sikorsky Memorial Airport',
    city: 'Stratford',
    state: 'Connecticut',
    country: 'United States'
  },
  {
    code: 'BET',
    lat: '60.7788',
    lon: '-161.847',
    name: 'Bethel Airport',
    city: 'Bethel',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'BFD',
    lat: '41.7964',
    lon: '-78.6407',
    name: 'Bradford Regional Airport',
    city: 'Lewis Run',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'BFF',
    lat: '41.8683',
    lon: '-103.597',
    name: 'William B Heilig Field Airport',
    city: 'Scottsbluff',
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'BFI',
    lat: '47.5369',
    lon: '-122.304',
    name: 'King County International Airport-Boeing Field',
    city: 'Seattle',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'BFL',
    lat: '35.4288',
    lon: '-119.044',
    name: 'Kern County-Meadows Field Airport',
    city: 'Bakersfield',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'BGM',
    lat: '42.2082',
    lon: '-75.9825',
    name: 'Greater Binghamton Edwin A Link Field Airport',
    city: 'Johnson City',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'BGR',
    lat: '44.8086',
    lon: '-68.8167',
    name: 'Bangor International Airport',
    city: 'Bangor',
    state: 'Maine',
    country: 'United States'
  },
  {
    code: 'BHB',
    lat: '44.4461',
    lon: '-68.3615',
    name: 'Hancock County-Bar Harbor Airport',
    city: 'Ellsworth',
    state: 'Maine',
    country: 'United States'
  },
  {
    code: 'BHM',
    lat: '33.5604',
    lon: '-86.7492',
    name: 'Birmingham International Airport',
    city: 'Birmingham',
    state: 'Alabama',
    country: 'United States'
  },
  {
    code: 'BID',
    lat: '41.1696',
    lon: '-71.58',
    name: 'Block Island State Airport',
    city: 'Block Island',
    state: 'Rhode Island',
    country: 'United States'
  },
  {
    code: 'BIL',
    lat: '45.8034',
    lon: '-108.537',
    name: 'Logan International Airport',
    city: 'Billings',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'BIS',
    lat: '46.7745',
    lon: '-100.757',
    name: 'Bismarck Municipal Airport',
    city: 'Bismarck',
    state: 'North Dakota',
    country: 'United States'
  },
  {
    code: 'BJI',
    lat: '47.5065',
    lon: '-94.9338',
    name: 'Bemidji-Beltrami County Airport',
    city: 'Bemidji',
    state: 'Minnesota',
    country: 'United States'
  },
  {
    code: 'BKC',
    lat: '65.9833',
    lon: '-161.167',
    name: 'Buckland Airport',
    city: 'Buckland',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'BKL',
    lat: '41.5115',
    lon: '-81.6869',
    name: 'Burke Lakefront Airport',
    city: 'Cleveland',
    state: 'Ohio',
    country: 'United States'
  },
  {
    code: 'BKW',
    lat: '37.7849',
    lon: '-81.1174',
    name: 'Raleigh County Memorial Airport',
    city: 'Beaver',
    state: 'West Virginia',
    country: 'United States'
  },
  {
    code: 'BLI',
    lat: '48.7955',
    lon: '-122.532',
    name: 'Bellingham International Airport',
    city: 'Bellingham',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'BLV',
    lat: '38.5412',
    lon: '-89.8499',
    name: 'Belleville',
    city: 'Belleville',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'BMI',
    lat: '40.4841',
    lon: '-88.9134',
    name: 'Bloomington Normal Airport',
    city: 'Bloomington',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'BNA',
    lat: '36.1342',
    lon: '-86.6682',
    name: 'Nashville International Airport',
    city: 'Nashville',
    state: 'Tennessee',
    country: 'United States'
  },
  {
    code: 'BOI',
    lat: '43.5709',
    lon: '-116.222',
    name: 'Boise Air Terminal',
    city: 'Boise',
    state: 'Idaho',
    country: 'United States'
  },
  {
    code: 'BOS',
    lat: '42.3717',
    lon: '-71.0281',
    name: 'Gen E L Logan International Airport',
    city: 'Boston',
    state: 'Massachusetts',
    country: 'United States'
  },
  {
    code: 'BOW',
    lat: '27.9493',
    lon: '-81.7818',
    name: 'Bartow Municipal Airport',
    city: 'Bartow',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'BPT',
    lat: '29.9551',
    lon: '-94.0185',
    name: 'Jefferson County Airport',
    city: 'Beaumont',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'BQK',
    lat: '31.2525',
    lon: '-81.4703',
    name: 'Glynco Jetport Airport',
    city: 'Brunswick',
    state: 'Georgia',
    country: 'United States'
  },
  {
    code: 'BQN',
    lat: '18.496',
    lon: '-67.1357',
    name: 'Rafael Hernandez Airport',
    city: 'Aguadilla',
    state: 'Puerto Rico',
    country: 'United States'
  },
  {
    code: 'BRD',
    lat: '46.3909',
    lon: '-94.1413',
    name: 'Brainerd-Crow Wing County Regional Airport',
    city: 'Brainerd',
    state: 'Minnesota',
    country: 'United States'
  },
  {
    code: 'BRL',
    lat: '40.7816',
    lon: '-91.1197',
    name: 'Burlington Municipal Airport',
    city: 'Burlington',
    state: 'Iowa',
    country: 'United States'
  },
  {
    code: 'BRO',
    lat: '25.9064',
    lon: '-97.4321',
    name: 'Brownsville-South Padre Island International Air',
    city: 'Brownsville',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'BRW',
    lat: '71.2892',
    lon: '-156.772',
    name: 'Wiley Post Will Rogers Memorial Airport',
    city: 'Barrow',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'BTI',
    lat: '70.1478',
    lon: '-143.579',
    name: 'Barter Island Airport',
    city: 'Kaktovik',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'BTL',
    lat: '42.3046',
    lon: '-85.2448',
    name: 'W K Kellogg Airport',
    city: 'Battle Creek',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'BTM',
    lat: '45.9544',
    lon: '-112.503',
    name: 'Bert Mooney Airport',
    city: 'Butte',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'BTR',
    lat: '30.533',
    lon: '-91.1567',
    name: 'Baton Rouge Metropolitan Airport',
    city: 'Baton Rouge',
    state: 'Louisiana',
    country: 'United States'
  },
  {
    code: 'BTT',
    lat: '66.9134',
    lon: '-151.551',
    name: 'Bettles Airport',
    city: 'Bettles',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'BTV',
    lat: '44.4688',
    lon: '-73.1552',
    name: 'Burlington International Airport',
    city: 'South Burlington',
    state: 'Vermont',
    country: 'United States'
  },
  {
    code: 'BUF',
    lat: '42.9309',
    lon: '-78.738',
    name: 'Greater Buffalo International Airport',
    city: 'Buffalo',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'BUR',
    lat: '34.1963',
    lon: '-118.352',
    name: 'Burbank Glendale Pasadena Airport',
    city: 'Burbank',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'BWI',
    lat: '39.1841',
    lon: '-76.6745',
    name: 'Baltimore-Washington International Thurgood Mars',
    city: 'Baltimore',
    state: 'Maryland',
    country: 'United States'
  },
  {
    code: 'BZN',
    lat: '45.7722',
    lon: '-111.157',
    name: 'Gallatin Field Airport',
    city: 'Bozeman',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'CAE',
    lat: '33.9468',
    lon: '-81.1241',
    name: 'Columbia Metropolitan Airport',
    city: 'West Columbia',
    state: 'South Carolina',
    country: 'United States'
  },
  {
    code: 'CAK',
    lat: '40.9149',
    lon: '-81.4309',
    name: 'Akron Canton Regional Airport',
    city: 'Canton',
    state: 'Ohio',
    country: 'United States'
  },
  {
    code: 'CDB',
    lat: '55.2005',
    lon: '-162.705',
    name: 'Cold Bay Airport',
    city: 'Cold Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CDC',
    lat: '37.6992',
    lon: '-113.092',
    name: 'Cedar City Municipal Airport',
    city: 'Cedar City',
    state: 'Utah',
    country: 'United States'
  },
  {
    code: 'CDR',
    lat: '42.8284',
    lon: '-103.094',
    name: 'Chadron Municipal Airport',
    city: 'Chadron',
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'CDV',
    lat: '60.4924',
    lon: '-145.475',
    name: 'Merle K Mudhole Smith Airport',
    city: 'Cordova',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CDW',
    lat: '40.8759',
    lon: '-74.2775',
    name: 'Essex County Airport',
    city: 'Fairfield',
    state: 'New Jersey',
    country: 'United States'
  },
  {
    code: 'CEC',
    lat: '41.7765',
    lon: '-124.237',
    name: 'Jack Mcnamara Field Airport',
    city: 'Crescent City',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'CEM',
    lat: '65.6121',
    lon: '-144.674',
    name: 'Central Airport',
    city: 'Circle',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CEZ',
    lat: '37.3044',
    lon: '-108.63',
    name: 'Cortez-Montezuma County Airport',
    city: 'Cortez',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'CGA',
    lat: '55.4592',
    lon: '-133.106',
    name: 'Craig Seaplane Base',
    city: 'Craig',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CGI',
    lat: '37.2272',
    lon: '-89.5637',
    name: 'Cape Girardeau Municipal Airport',
    city: 'Scott City',
    state: 'Missouri',
    country: 'United States'
  },
  {
    code: 'CHA',
    lat: '35.0373',
    lon: '-85.1966',
    name: 'Chattanooga Metropolitan Airport',
    city: 'Chattanooga',
    state: 'Tennessee',
    country: 'United States'
  },
  {
    code: 'CHO',
    lat: '38.14',
    lon: '-78.4487',
    name: 'Charlottesville Albemarle Airport',
    city: 'Earlysville',
    state: 'Virginia',
    country: 'United States'
  },
  {
    code: 'CHS',
    lat: '32.8838',
    lon: '-80.0356',
    name: 'Charleston International Airport',
    city: 'North Charleston',
    state: 'South Carolina',
    country: 'United States'
  },
  {
    code: 'CHU',
    lat: '61.5769',
    lon: '-159.244',
    name: 'Chuathbaluk',
    city: 'Chuathbaluk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CIC',
    lat: '39.7987',
    lon: '-121.854',
    name: 'Chico Municipal Airport',
    city: 'Chico',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'CID',
    lat: '41.8893',
    lon: '-91.7008',
    name: 'Cedar Rapids Municipal Airport',
    city: 'Cedar Rapids',
    state: 'Iowa',
    country: 'United States'
  },
  {
    code: 'CIK',
    lat: '66.65',
    lon: '-143.75',
    name: 'Chalkyitsik Airport',
    city: 'Chalkyitsik',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CIU',
    lat: '46.2581',
    lon: '-84.4739',
    name: 'Chippewa County International Airport',
    city: 'Kincheloe',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'CKB',
    lat: '39.2967',
    lon: '-80.2314',
    name: 'Benedum Airport',
    city: 'Clarksburg',
    state: 'West Virginia',
    country: 'United States'
  },
  {
    code: 'CKD',
    lat: '61.8667',
    lon: '-158.133',
    name: 'Crooked Creek Airport',
    city: 'Aniak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CKX',
    lat: '64.0833',
    lon: '-141.917',
    name: 'Chicken Airport',
    city: 'Tok',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CLD',
    lat: '33.1255',
    lon: '-117.275',
    name: 'Mcclellan Palomar Airport',
    city: 'Carlsbad',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'CLE',
    lat: '41.4115',
    lon: '-81.8339',
    name: 'Hopkins International Airport',
    city: 'Cleveland',
    state: 'Ohio',
    country: 'United States'
  },
  {
    code: 'CLL',
    lat: '30.5938',
    lon: '-96.3685',
    name: 'Easterwood Field Airport',
    city: 'College Station',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'CLM',
    lat: '48.1155',
    lon: '-123.491',
    name: 'William R Fairchild International Airport',
    city: 'Port Angeles',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'CLP',
    lat: '58.8517',
    lon: '-158.51',
    name: 'Clarks Point Airport',
    city: 'Clarks Point',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CLT',
    lat: '35.2226',
    lon: '-80.946',
    name: 'Douglas International Airport',
    city: 'Charlotte',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'CMH',
    lat: '39.9974',
    lon: '-82.8877',
    name: 'Port Columbus International Airport',
    city: 'Columbus',
    state: 'Ohio',
    country: 'United States'
  },
  {
    code: 'CMI',
    lat: '40.0367',
    lon: '-88.2638',
    name: 'University of Illinois-Willard Airport',
    city: 'Savoy',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'CMX',
    lat: '47.1689',
    lon: '-88.4942',
    name: 'Houghton County Memorial Airport',
    city: 'Hancock',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'CNM',
    lat: '32.3458',
    lon: '-104.251',
    name: 'Cavern City Air Terminal Airport',
    city: 'Carlsbad',
    state: 'New Mexico',
    country: 'United States'
  },
  {
    code: 'CNY',
    lat: '38.7609',
    lon: '-109.742',
    name: 'Canyonlands Field Airport',
    city: 'Thompson',
    state: 'Utah',
    country: 'United States'
  },
  {
    code: 'COD',
    lat: '44.5134',
    lon: '-109.031',
    name: 'Yellowstone Regional Airport',
    city: 'Cody/Yellowstone',
    state: 'Wyoming',
    country: 'United States'
  },
  {
    code: 'COS',
    lat: '38.7829',
    lon: '-104.697',
    name: 'City of Colorado Springs Municipal Airport',
    city: 'Colorado Springs',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'COU',
    lat: '38.8174',
    lon: '-92.2218',
    name: 'Columbia Regional Airport',
    city: 'Columbia',
    state: 'Missouri',
    country: 'United States'
  },
  {
    code: 'CPR',
    lat: '42.8966',
    lon: '-106.465',
    name: 'Natrona County International Airport',
    city: 'Casper',
    state: 'Wyoming',
    country: 'United States'
  },
  {
    code: 'CPX',
    lat: '18.3204',
    lon: '-65.2929',
    name: 'Culebra Airport',
    city: 'Culebra',
    state: 'Puerto Rico',
    country: 'United States'
  },
  {
    code: 'CRP',
    lat: '27.7747',
    lon: '-97.5019',
    name: 'Corpus Christi International Airport',
    city: 'Corpus Christi',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'CRW',
    lat: '38.3697',
    lon: '-81.5951',
    name: 'Yeager Airport',
    city: 'Charleston',
    state: 'West Virginia',
    country: 'United States'
  },
  {
    code: 'CSG',
    lat: '32.5184',
    lon: '-84.9401',
    name: 'Columbus Metropolitan Airport',
    city: 'Columbus',
    state: 'Georgia',
    country: 'United States'
  },
  {
    code: 'CVG',
    lat: '39.0571',
    lon: '-84.6625',
    name: 'Greater Cincinnati International Airport',
    city: 'Hebron',
    state: 'Ohio',
    country: 'United States'
  },
  {
    code: 'CVN',
    lat: '34.4271',
    lon: '-103.087',
    name: 'Clovis Municipal Airport',
    city: 'Texico',
    state: 'New Mexico',
    country: 'United States'
  },
  {
    code: 'CWA',
    lat: '44.7846',
    lon: '-89.6704',
    name: 'Central Wisconsin Airport',
    city: 'Mosinee',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'CYF',
    lat: '60.1558',
    lon: '-164.273',
    name: 'Chefornak Airport',
    city: 'Chefornak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'CYS',
    lat: '41.1527',
    lon: '-104.819',
    name: 'Cheyenne Airport',
    city: 'Cheyenne',
    state: 'Wyoming',
    country: 'United States'
  },
  {
    code: 'CZN',
    lat: '62.0833',
    lon: '-142.05',
    name: 'Chisana Airport',
    city: 'Gakona',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'DAB',
    lat: '29.1874',
    lon: '-81.0615',
    name: 'Daytona Beach International Airport',
    city: 'Daytona Beach',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'DAL',
    lat: '32.8439',
    lon: '-96.8496',
    name: 'Dallas Love Field Airport',
    city: 'Dallas',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'DAY',
    lat: '39.8968',
    lon: '-84.2207',
    name: 'James M Cox Dayton International Airport',
    city: 'Dayton',
    state: 'Ohio',
    country: 'United States'
  },
  {
    code: 'DBQ',
    lat: '42.4047',
    lon: '-90.7037',
    name: 'Dubuque Regional Airport',
    city: 'Dubuque',
    state: 'Iowa',
    country: 'United States'
  },
  {
    code: 'DCA',
    lat: '38.849',
    lon: '-77.0438',
    name: 'Washington National Airport',
    city: 'Arlington',
    state: 'Virginia',
    country: 'United States'
  },
  {
    code: 'DDC',
    lat: '37.7573',
    lon: '-99.9697',
    name: 'Dodge City Regional Airport',
    city: 'Dodge City',
    state: 'Kansas',
    country: 'United States'
  },
  {
    code: 'DEC',
    lat: '39.8335',
    lon: '-88.8773',
    name: 'Decatur Airport',
    city: 'Decatur',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'DEN',
    lat: '39.8396',
    lon: '-104.672',
    name: 'Denver International Airport',
    city: 'Denver',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'DFW',
    lat: '32.9222',
    lon: '-97.0409',
    name: 'Fort Worth International Airport',
    city: 'Dallas',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'DHN',
    lat: '31.3144',
    lon: '-85.4487',
    name: 'Dothan Airport',
    city: 'Dothan',
    state: 'Alabama',
    country: 'United States'
  },
  {
    code: 'DIK',
    lat: '46.8035',
    lon: '-102.802',
    name: 'Dickinson Municipal Airport',
    city: 'Dickinson',
    state: 'North Dakota',
    country: 'United States'
  },
  {
    code: 'DLG',
    lat: '59.0445',
    lon: '-158.513',
    name: 'Dillingham Municipal Airport',
    city: 'Dillingham',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'DLH',
    lat: '46.838',
    lon: '-92.1781',
    name: 'Duluth International Airport',
    city: 'Duluth',
    state: 'Minnesota',
    country: 'United States'
  },
  {
    code: 'DRG',
    lat: '66.0833',
    lon: '-162.767',
    name: 'Deering Airport',
    city: 'Deering',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'DRO',
    lat: '37.1595',
    lon: '-107.751',
    name: 'Durango la Plata County Airport',
    city: 'Durango',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'DRT',
    lat: '29.3702',
    lon: '-100.918',
    name: 'Del Rio International Airport',
    city: 'Del Rio',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'DSM',
    lat: '41.5328',
    lon: '-93.6481',
    name: 'Des Moines International Airport',
    city: 'Des Moines',
    state: 'Iowa',
    country: 'United States'
  },
  {
    code: 'DTW',
    lat: '42.2327',
    lon: '-83.3412',
    name: 'Detroit Metropolitan Wayne County Airport',
    city: 'Detroit',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'DUJ',
    lat: '41.1833',
    lon: '-78.8953',
    name: 'Du Bois Jefferson County Airport',
    city: 'Reynoldsville',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'DUT',
    lat: '53.896',
    lon: '-166.535',
    name: 'Unalaska Airport',
    city: 'Unalaska',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'DVL',
    lat: '48.108',
    lon: '-98.9037',
    name: 'Devils Lake Municipal Airport',
    city: 'Devils Lake',
    state: 'North Dakota',
    country: 'United States'
  },
  {
    code: 'EAA',
    lat: '64.7667',
    lon: '-141.15',
    name: 'Eagle Airport',
    city: 'Tok',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'EAR',
    lat: '40.7236',
    lon: '-99.0151',
    name: 'Kearney Municipal Airport',
    city: 'Kearney',
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'EAT',
    lat: '47.4048',
    lon: '-120.21',
    name: 'Pangborn Memorial Airport',
    city: 'East Wenatchee',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'EAU',
    lat: '44.8625',
    lon: '-91.4826',
    name: 'Eau Claire County Airport',
    city: 'Eau Claire',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'EDA',
    lat: '55.9503',
    lon: '-133.656',
    name: 'Edna Bay Seaplane Base',
    city: 'Ketchikan',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'EEK',
    lat: '60.2167',
    lon: '-162.017',
    name: 'Eek Airport',
    city: 'Eek',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'EGE',
    lat: '39.6395',
    lon: '-106.912',
    name: 'Eagle County Regional Airport',
    city: 'Gypsum',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'EGV',
    lat: '45.932',
    lon: '-89.2599',
    name: 'Eagle River Union Airport',
    city: 'Eagle River',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'EGX',
    lat: '58.2101',
    lon: '-157.366',
    name: 'Egegik Airport',
    city: 'Egegik',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'EKO',
    lat: '40.829',
    lon: '-115.78',
    name: 'Elko Municipal Airport-J C Harris Field',
    city: 'Elko',
    state: 'Nevada',
    country: 'United States'
  },
  {
    code: 'ELI',
    lat: '64.6167',
    lon: '-162.267',
    name: 'Elim Airport',
    city: 'Elim',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ELM',
    lat: '42.1633',
    lon: '-76.8973',
    name: 'Elmira Corning Regional Airport',
    city: 'Horseheads',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'ELP',
    lat: '31.7982',
    lon: '-106.393',
    name: 'El Paso International Airport',
    city: 'El Paso',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'ELV',
    lat: '58.1833',
    lon: '-136.317',
    name: 'Elfin Cove Airport',
    city: 'Elfin Cove',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ELY',
    lat: '39.3043',
    lon: '-114.853',
    name: 'Yelland Field Airport',
    city: 'Ely',
    state: 'Nevada',
    country: 'United States'
  },
  {
    code: 'EMK',
    lat: '62.785',
    lon: '-164.491',
    name: 'Emmonak Airport',
    city: 'Alakanuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ENA',
    lat: '60.5651',
    lon: '-151.244',
    name: 'Kenai Municipal Airport',
    city: 'Kenai',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ENW',
    lat: '42.5934',
    lon: '-87.9299',
    name: 'Kenosha Regional Airport',
    city: 'Kenosha',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'ERI',
    lat: '42.0829',
    lon: '-80.1824',
    name: 'Erie International Airport',
    city: 'Erie',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'ESC',
    lat: '45.718',
    lon: '-87.0942',
    name: 'Delta County Airport',
    city: 'Escanaba',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'ESD',
    lat: '48.7073',
    lon: '-122.909',
    name: 'Orcas Island Airport',
    city: 'Eastsound',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'EUG',
    lat: '44.1184',
    lon: '-123.213',
    name: 'Mahlon Sweet Field Airport',
    city: 'Eugene',
    state: 'Oregon',
    country: 'United States'
  },
  {
    code: 'EVV',
    lat: '38.0464',
    lon: '-87.5308',
    name: 'Evansville Regional Airport',
    city: 'Evansville',
    state: 'Indiana',
    country: 'United States'
  },
  {
    code: 'EWB',
    lat: '41.6735',
    lon: '-70.9579',
    name: 'New Bedford Municipal Airport',
    city: 'New Bedford',
    state: 'Massachusetts',
    country: 'United States'
  },
  {
    code: 'EWD',
    lat: '61.1021',
    lon: '-149.924',
    name: 'Wildman Lake',
    city: 'Wildman Lake',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'EWN',
    lat: '35.0786',
    lon: '-77.0343',
    name: 'Craven County Regional Airport',
    city: 'New Bern',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'EWR',
    lat: '40.6924',
    lon: '-74.1843',
    name: 'Newark International Airport',
    city: 'Newark',
    state: 'New Jersey',
    country: 'United States'
  },
  {
    code: 'EYW',
    lat: '24.5536',
    lon: '-81.7551',
    name: 'Key West International Airport',
    city: 'Key West',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'FAI',
    lat: '64.8183',
    lon: '-147.866',
    name: 'Fairbanks International Airport',
    city: 'Fairbanks',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'FAR',
    lat: '46.9195',
    lon: '-96.8243',
    name: 'Hector International Airport',
    city: 'Fargo',
    state: 'North Dakota',
    country: 'United States'
  },
  {
    code: 'FAT',
    lat: '36.7675',
    lon: '-119.717',
    name: 'Fresno Yosemite International Airport',
    city: 'Fresno',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'FAY',
    lat: '34.9914',
    lon: '-78.8889',
    name: 'Fayetteville Regional Airport',
    city: 'Fayetteville',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'FCA',
    lat: '48.3075',
    lon: '-114.252',
    name: 'Glacier Park International Airport',
    city: 'Kalispell',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'FKL',
    lat: '41.3766',
    lon: '-79.8573',
    name: 'Chess Lamberton Airport',
    city: 'Franklin',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'FLG',
    lat: '35.139',
    lon: '-111.675',
    name: 'Flagstaff Pulliam Airport',
    city: 'Flagstaff',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'FLL',
    lat: '26.0722',
    lon: '-80.1354',
    name: 'Fort Lauderdale Hollywood International Airport',
    city: 'Dania Beach',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'FLO',
    lat: '34.1936',
    lon: '-79.7289',
    name: 'Florence Regional Airport',
    city: 'Florence',
    state: 'South Carolina',
    country: 'United States'
  },
  {
    code: 'FMN',
    lat: '36.7387',
    lon: '-108.227',
    name: 'Four Corners Regional Airport',
    city: 'Farmington',
    state: 'New Mexico',
    country: 'United States'
  },
  {
    code: 'FMY',
    lat: '26.5815',
    lon: '-81.862',
    name: 'Page Field Airport',
    city: 'Fort Myers',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'FNL',
    lat: '40.4505',
    lon: '-105.008',
    name: 'Fort Collins Loveland Municipal Airport',
    city: 'Loveland',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'FNT',
    lat: '42.9756',
    lon: '-83.7411',
    name: 'Bishop International Airport',
    city: 'Flint',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'FOD',
    lat: '42.5523',
    lon: '-94.1819',
    name: 'Fort Dodge Regional Airport',
    city: 'Fort Dodge',
    state: 'Iowa',
    country: 'United States'
  },
  {
    code: 'FRD',
    lat: '48.5252',
    lon: '-123.027',
    name: 'Friday Harbor Airport',
    city: 'Friday Harbor',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'FSD',
    lat: '43.5813',
    lon: '-96.7317',
    name: 'Sioux Falls Regional Airport',
    city: 'Sioux Falls',
    state: 'South Dakota',
    country: 'United States'
  },
  {
    code: 'FSM',
    lat: '36.1881',
    lon: '-94.4944',
    name: 'Smith Field Airport',
    city: 'Fort Smith',
    state: 'Arkansas',
    country: 'United States'
  },
  {
    code: 'FWA',
    lat: '40.9883',
    lon: '-85.1899',
    name: 'Fort Wayne Municipal Airport-Baer Field',
    city: 'Fort Wayne',
    state: 'Indiana',
    country: 'United States'
  },
  {
    code: 'FYU',
    lat: '66.5714',
    lon: '-145.25',
    name: 'Fort Yukon Airport',
    city: 'Fort Yukon',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'GAL',
    lat: '64.7404',
    lon: '-156.931',
    name: 'Galena Airport',
    city: 'Galena',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'GAM',
    lat: '63.7667',
    lon: '-171.738',
    name: 'Gambell Airport',
    city: 'Gambell',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'GBD',
    lat: '38.352',
    lon: '-98.853',
    name: 'Great Bend Municipal Airport',
    city: 'Great Bend',
    state: 'Kansas',
    country: 'United States'
  },
  {
    code: 'GCC',
    lat: '44.3465',
    lon: '-105.533',
    name: 'Gillette Campbell County Airport',
    city: 'Gillette',
    state: 'Wyoming',
    country: 'United States'
  },
  {
    code: 'GCK',
    lat: '37.9267',
    lon: '-100.719',
    name: 'Garden City Regional Airport',
    city: 'Pierceville',
    state: 'Kansas',
    country: 'United States'
  },
  {
    code: 'GEG',
    lat: '47.625',
    lon: '-117.538',
    name: 'Spokane International Airport',
    city: 'Spokane',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'GFK',
    lat: '47.9494',
    lon: '-97.1762',
    name: 'Grand Forks Mark Andrews International Airport',
    city: 'Grand Forks',
    state: 'North Dakota',
    country: 'United States'
  },
  {
    code: 'GGG',
    lat: '32.3874',
    lon: '-94.7194',
    name: 'Gregg County Airport',
    city: 'Longview',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'GJT',
    lat: '39.1217',
    lon: '-108.529',
    name: 'Walker Field Airport',
    city: 'Grand Junction',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'GLH',
    lat: '33.4819',
    lon: '-90.9903',
    name: 'Mid Delta Regional Airport',
    city: 'Greenville',
    state: 'Mississippi',
    country: 'United States'
  },
  {
    code: 'GLV',
    lat: '64.5433',
    lon: '-163.033',
    name: 'Golovin',
    city: 'Golovin',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'GNU',
    lat: '59.1218',
    lon: '-161.588',
    name: 'Alaska',
    city: 'Goodnews Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'GNV',
    lat: '29.6861',
    lon: '-82.277',
    name: 'Gainesville Regional Airport',
    city: 'Gainesville',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'GPT',
    lat: '30.4133',
    lon: '-89.072',
    name: 'Gulfport Biloxi Regional Airport',
    city: 'Gulfport',
    state: 'Mississippi',
    country: 'United States'
  },
  {
    code: 'GRB',
    lat: '44.4923',
    lon: '-88.1274',
    name: 'Austin Straubel International Airport',
    city: 'Green Bay',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'GRK',
    lat: '31.0615',
    lon: '-97.8206',
    name: 'Killeen-Fort Hood Regional Airport',
    city: 'Killeen',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'GRR',
    lat: '42.8841',
    lon: '-85.5307',
    name: 'Gerald R. Ford International Airport',
    city: 'Grand Rapids',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'GSO',
    lat: '36.1038',
    lon: '-79.9427',
    name: 'Triad International Airport',
    city: 'Greensboro',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'GSP',
    lat: '34.8907',
    lon: '-82.2167',
    name: 'Greenville Spartanburg International Airport',
    city: 'Greer',
    state: 'South Carolina',
    country: 'United States'
  },
  {
    code: 'GST',
    lat: '58.4246',
    lon: '-135.707',
    name: 'Gustavus Airport',
    city: 'Gustavus',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'GTF',
    lat: '47.482',
    lon: '-111.356',
    name: 'Great Falls International Airport',
    city: 'Great Falls',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'GTR',
    lat: '33.4516',
    lon: '-88.5876',
    name: 'Golden Triangle Regional Airport',
    city: 'Columbus',
    state: 'Mississippi',
    country: 'United States'
  },
  {
    code: 'GUC',
    lat: '38.5356',
    lon: '-106.941',
    name: 'Gunnison County Airport',
    city: 'Gunnison',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'GUM',
    lat: '13.4833',
    lon: '144.796',
    name: 'Antonio B Won Pat International Airport',
    city: 'Hagåtña',
    state: 'Guam',
    country: 'United States'
  },
  {
    code: 'HAE',
    lat: '36.2306',
    lon: '-112.669',
    name: 'Havasupai',
    city: 'Havasupai',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'HCR',
    lat: '62.2016',
    lon: '-159.77',
    name: 'Alaska',
    city: 'Holy Cross',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HDN',
    lat: '40.485',
    lon: '-107.219',
    name: 'Yampa Valley Airport',
    city: 'Hayden',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'HHH',
    lat: '32.2267',
    lon: '-80.6989',
    name: 'Hilton Head Airport',
    city: 'Hilton Head Island',
    state: 'South Carolina',
    country: 'United States'
  },
  {
    code: 'HIB',
    lat: '47.3934',
    lon: '-92.8418',
    name: 'Chisholm Hibbing Airport',
    city: 'Hibbing',
    state: 'Minnesota',
    country: 'United States'
  },
  {
    code: 'HKB',
    lat: '63.8667',
    lon: '-148.967',
    name: 'Healy Lake Airport',
    city: 'Healy Lake',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HLN',
    lat: '46.6104',
    lon: '-111.99',
    name: 'Helena Regional Airport',
    city: 'Helena',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'HNH',
    lat: '58.0966',
    lon: '-135.41',
    name: 'Hoonah Airport',
    city: 'Hoonah',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HNL',
    lat: '21.3358',
    lon: '-157.919',
    name: 'Honolulu International Airport',
    city: 'Honolulu',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'HNM',
    lat: '20.7944',
    lon: '-156.015',
    name: 'Hana Airport',
    city: 'Hana',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'HNS',
    lat: '59.2439',
    lon: '-135.524',
    name: 'Haines Airport',
    city: 'Haines',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HOB',
    lat: '32.6929',
    lon: '-103.215',
    name: 'Lea County Regional Airport',
    city: 'Hobbs',
    state: 'New Mexico',
    country: 'United States'
  },
  {
    code: 'HOM',
    lat: '59.6408',
    lon: '-151.499',
    name: 'Homer Airport',
    city: 'Homer',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HON',
    lat: '44.3833',
    lon: '-98.2333',
    name: 'Howes',
    city: 'Huron',
    state: 'South Dakota',
    country: 'United States'
  },
  {
    code: 'HOU',
    lat: '29.6572',
    lon: '-95.2795',
    name: 'William P Hobby Airport',
    city: 'Houston',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'HPB',
    lat: '61.5262',
    lon: '-166.142',
    name: 'Hooper Bay Airport',
    city: 'Hooper Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HPN',
    lat: '41.0693',
    lon: '-73.7042',
    name: 'Westchester County Airport',
    city: 'Purchase',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'HRL',
    lat: '26.2216',
    lon: '-97.663',
    name: 'Grande Valley International Airport',
    city: 'Harlingen',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'HSL',
    lat: '65.7024',
    lon: '-156.387',
    name: 'Alaska',
    city: 'Huslia',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HSV',
    lat: '34.6492',
    lon: '-86.7767',
    name: 'Huntsville International Airport',
    city: 'Huntsville',
    state: 'Alabama',
    country: 'United States'
  },
  {
    code: 'HTS',
    lat: '38.37',
    lon: '-82.5542',
    name: 'Tri State Walker Long Field Airport',
    city: 'Huntington',
    state: 'West Virginia',
    country: 'United States'
  },
  {
    code: 'HUS',
    lat: '66.0443',
    lon: '-154.258',
    name: 'Hughes',
    city: 'Hughes',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HVN',
    lat: '41.2709',
    lon: '-72.89',
    name: 'Tweed New Haven Airport',
    city: 'East Haven',
    state: 'Connecticut',
    country: 'United States'
  },
  {
    code: 'HVR',
    lat: '48.5461',
    lon: '-109.773',
    name: 'Havre City-County Airport',
    city: 'Havre',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'HYA',
    lat: '41.6667',
    lon: '-70.2863',
    name: 'Barnstable Boardman Polando Airport',
    city: 'Hyannis',
    state: 'Massachusetts',
    country: 'United States'
  },
  {
    code: 'HYG',
    lat: '55.205',
    lon: '-132.822',
    name: 'Alaska',
    city: 'Hydaburg',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HYL',
    lat: '55.4833',
    lon: '-132.65',
    name: 'SPB',
    city: 'Hollis',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'HYS',
    lat: '38.8546',
    lon: '-99.2737',
    name: 'Hays Municipal Airport',
    city: 'Hays',
    state: 'Kansas',
    country: 'United States'
  },
  {
    code: 'IAD',
    lat: '38.9556',
    lon: '-77.4484',
    name: 'Dulles International Airport',
    city: 'Washington',
    state: 'Virginia',
    country: 'United States'
  },
  {
    code: 'IAG',
    lat: '43.1',
    lon: '-78.9423',
    name: 'Niagara Falls International Airport',
    city: 'Niagara Falls',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'IAH',
    lat: '29.9784',
    lon: '-95.3424',
    name: 'George Bush Intercontinental Airport',
    city: 'Houston',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'IAN',
    lat: '66.9699',
    lon: '-160.429',
    name: 'Kiana',
    city: 'Kiana',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ICT',
    lat: '37.6531',
    lon: '-97.43',
    name: 'Wichita Mid-Continent Airport',
    city: 'Wichita',
    state: 'Kansas',
    country: 'United States'
  },
  {
    code: 'IDA',
    lat: '43.5147',
    lon: '-112.068',
    name: 'Fanning Field Airport',
    city: 'Idaho Falls',
    state: 'Idaho',
    country: 'United States'
  },
  {
    code: 'IFP',
    lat: '35.1657',
    lon: '-114.557',
    name: 'Laughlin-Bullhead International Airport',
    city: 'Bullhead City',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'IGG',
    lat: '59.3167',
    lon: '-155.9',
    name: 'Igiugig',
    city: 'Igiugig',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'IGM',
    lat: '35.2692',
    lon: '-113.957',
    name: 'Kingman Airport',
    city: 'Kingman',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'IKO',
    lat: '52.9389',
    lon: '-168.868',
    name: 'Nikolski',
    city: 'Nikolski',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ILI',
    lat: '59.7555',
    lon: '-154.918',
    name: 'Iliamna Airport',
    city: 'Iliamna',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ILM',
    lat: '34.2668',
    lon: '-77.912',
    name: 'Wilmington International Airport',
    city: 'Wilmington',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'ILN',
    lat: '39.4348',
    lon: '-83.7982',
    name: 'Airborne Airpark',
    city: 'Wilmington',
    state: 'Ohio',
    country: 'United States'
  },
  {
    code: 'IMT',
    lat: '45.8153',
    lon: '-88.1185',
    name: 'Ford Airport',
    city: 'Kingsford',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'IND',
    lat: '39.7322',
    lon: '-86.2707',
    name: 'Indianapolis International Airport',
    city: 'Indianapolis',
    state: 'Indiana',
    country: 'United States'
  },
  {
    code: 'INL',
    lat: '48.5661',
    lon: '-93.3978',
    name: 'Falls International Airport',
    city: 'International Falls',
    state: 'Minnesota',
    country: 'United States'
  },
  {
    code: 'INT',
    lat: '36.1361',
    lon: '-80.2294',
    name: 'Smith Reynolds Airport',
    city: 'Winston-Salem',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'IPL',
    lat: '32.8332',
    lon: '-115.57',
    name: 'Imperial County Airport',
    city: 'Imperial',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'IPT',
    lat: '41.2441',
    lon: '-76.9276',
    name: 'Williamsport-Lycoming County Airport',
    city: 'Montoursville',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'IRC',
    lat: '65.8245',
    lon: '-144.063',
    name: 'Circle',
    city: 'Circle',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'IRM',
    lat: '45.3517',
    lon: '-89.6665',
    name: '',
    city: 'Irma',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'ISN',
    lat: '48.1767',
    lon: '-103.631',
    name: 'Sloulin Field International Airport',
    city: 'Williston',
    state: 'North Dakota',
    country: 'United States'
  },
  {
    code: 'ISO',
    lat: '35.3243',
    lon: '-77.6115',
    name: 'Kinston Jetport Stallings Airport',
    city: 'Kinston',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'ISP',
    lat: '40.7891',
    lon: '-73.0984',
    name: 'Long Island Macarthur Airport',
    city: 'Ronkonkoma',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'ITH',
    lat: '42.4898',
    lon: '-76.4627',
    name: 'Tompkins County Airport',
    city: 'Ithaca',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'ITO',
    lat: '19.7126',
    lon: '-155.042',
    name: 'Hilo International Airport',
    city: 'Hilo',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'IWD',
    lat: '46.5208',
    lon: '-90.1344',
    name: 'Gogebic-Iron County Airport',
    city: 'Ironwood',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'IYK',
    lat: '35.6606',
    lon: '-117.816',
    name: 'Inyokern Airport',
    city: 'Inyokern',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'JAC',
    lat: '43.6034',
    lon: '-110.736',
    name: 'Jackson Hole Airport',
    city: 'Jackson',
    state: 'Wyoming',
    country: 'United States'
  },
  {
    code: 'JAN',
    lat: '32.3089',
    lon: '-90.0733',
    name: 'Jackson International Airport',
    city: 'Pearl',
    state: 'Mississippi',
    country: 'United States'
  },
  {
    code: 'JAX',
    lat: '30.4914',
    lon: '-81.676',
    name: 'Jacksonville International Airport',
    city: 'Jacksonville',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'JEF',
    lat: '38.593',
    lon: '-92.1652',
    name: 'Jefferson City Memorial Airport',
    city: 'Holts Summit',
    state: 'Missouri',
    country: 'United States'
  },
  {
    code: 'JFK',
    lat: '40.6437',
    lon: '-73.79',
    name: 'John F Kennedy International Airport',
    city: 'Jamaica',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'JGC',
    lat: '35.9621',
    lon: '-112.133',
    name: 'Grand Canyon Heliport',
    city: 'Williams',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'JHM',
    lat: '20.9619',
    lon: '-156.676',
    name: 'Kapalua West Maui Airport',
    city: 'Lahaina',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'JHW',
    lat: '42.1528',
    lon: '-79.2666',
    name: 'Chautauqua County-Jamestown Airport',
    city: 'Jamestown',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'JKL',
    lat: '37.5917',
    lon: '-83.315',
    name: 'Julian Carroll Airport',
    city: 'Jackson',
    state: 'Kentucky',
    country: 'United States'
  },
  {
    code: 'JLN',
    lat: '37.147',
    lon: '-94.5019',
    name: 'Joplin Regional Airport',
    city: 'Webb City',
    state: 'Missouri',
    country: 'United States'
  },
  {
    code: 'JMS',
    lat: '46.9243',
    lon: '-98.6788',
    name: 'Jamestown Municipal Airport',
    city: 'Jamestown',
    state: 'North Dakota',
    country: 'United States'
  },
  {
    code: 'JNU',
    lat: '58.3598',
    lon: '-134.583',
    name: 'Juneau International Airport',
    city: 'Juneau',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'JRB',
    lat: '40.7039',
    lon: '-74.0129',
    name: 'Downtown Manhattan Heliport',
    city: 'New York',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'JST',
    lat: '40.3208',
    lon: '-78.8306',
    name: 'Johnstown Cambria County Airport',
    city: 'Johnstown',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'KAL',
    lat: '64.3248',
    lon: '-158.725',
    name: 'Kaltag',
    city: 'Kaltag',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KBC',
    lat: '66.2667',
    lon: '-145.8',
    name: 'Birch Creek Airport',
    city: 'Birch Creek',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KCC',
    lat: '56.014',
    lon: '-132.826',
    name: 'Alaska',
    city: 'Coffman Cove',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KCG',
    lat: '56.3173',
    lon: '-158.596',
    name: 'Chignik Fisheries Airport',
    city: 'Chignik Lagoon',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KCL',
    lat: '56.3065',
    lon: '-158.537',
    name: 'Chignik Lagoon Airport',
    city: 'Chignik Lagoon',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KCQ',
    lat: '56.3119',
    lon: '-158.362',
    name: 'Chignik Lake Airport',
    city: 'Chignik',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KEB',
    lat: '41.0833',
    lon: '-92.4583',
    name: 'Nanwalek',
    city: 'Nanwalek',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KEK',
    lat: '59.3516',
    lon: '-157.48',
    name: 'Ekwok',
    city: 'Ekwok',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KFP',
    lat: '54.85',
    lon: '-163.417',
    name: '',
    city: 'False Pass',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KGK',
    lat: '59.7266',
    lon: '-157.26',
    name: 'Koliganek Airport',
    city: 'New Koliganek',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KGX',
    lat: '62.9053',
    lon: '-160.067',
    name: 'Alaska',
    city: 'Grayling',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KKA',
    lat: '64.9311',
    lon: '-161.16',
    name: 'Koyuk',
    city: 'Koyuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KKB',
    lat: '58.1869',
    lon: '-152.375',
    name: 'Kitoi Seaplane Base',
    city: 'Kitoi Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KKH',
    lat: '62.8903',
    lon: '-149.054',
    name: 'Alaska',
    city: 'Kongiganak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KKI',
    lat: '60.9057',
    lon: '-161.424',
    name: 'Akiachak',
    city: 'Akiachak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KKU',
    lat: '58.8167',
    lon: '-158.55',
    name: 'Ekuk Airport',
    city: 'Clarks Point',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KLG',
    lat: '61.5382',
    lon: '-160.314',
    name: 'Kalskag',
    city: 'Kalskag',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KLL',
    lat: '59.1126',
    lon: '-156.856',
    name: 'Levelock',
    city: 'Levelock',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KLN',
    lat: '57.5383',
    lon: '-153.98',
    name: 'Larsen Bay',
    city: 'Larsen Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KLW',
    lat: '55.5743',
    lon: '-133.064',
    name: 'Klawock Seaplane Base',
    city: 'Klawock',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KMC',
    lat: '57.1333',
    lon: '-153.2',
    name: 'King Khalid Military',
    city: 'King Khalid Mil. City',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KMO',
    lat: '58.9817',
    lon: '-159.058',
    name: 'Manokotak',
    city: 'Manokotak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KMY',
    lat: '57',
    lon: '-154.167',
    name: 'Moser Bay',
    city: 'Moser Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KNK',
    lat: '59.4333',
    lon: '-154.85',
    name: '',
    city: 'Kakhonak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KNW',
    lat: '59.4513',
    lon: '-157.317',
    name: 'New Stuyahok',
    city: 'New Stuyahok',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KOA',
    lat: '19.7334',
    lon: '-156.039',
    name: 'Kailua-Kona International Airport',
    city: 'Kailua Kona',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'KOT',
    lat: '63.0328',
    lon: '-163.554',
    name: 'Kotlik',
    city: 'Kotlik',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KOY',
    lat: '47.902',
    lon: '-112.265',
    name: 'Olga Bay',
    city: 'Olga Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KOZ',
    lat: '62.8903',
    lon: '-149.054',
    name: 'Alaska',
    city: 'Ouzinkie',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KPB',
    lat: '56.3502',
    lon: '-133.622',
    name: 'Point Baker Seaplane Base',
    city: 'Point Baker',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KPC',
    lat: '65.2544',
    lon: '-166.856',
    name: 'Port Clarence Coast Guard Station',
    city: 'Brevig Mission',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KPN',
    lat: '59.9371',
    lon: '-164.041',
    name: 'Kipnuk',
    city: 'Kipnuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KPR',
    lat: '58.4833',
    lon: '-152.583',
    name: 'Port Williams',
    city: 'Port Williams',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KPV',
    lat: '55.9122',
    lon: '-159.154',
    name: 'Alaska',
    city: 'Perryville',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KPY',
    lat: '58.743',
    lon: '-154.96',
    name: 'Alaska',
    city: 'Port Bailey',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KQA',
    lat: '54.1271',
    lon: '-165.889',
    name: 'Akutan Airport',
    city: 'Akutan',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KSM',
    lat: '62.0503',
    lon: '-163.179',
    name: 'Alaska',
    city: 'Saint Marys',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KTB',
    lat: '55.6833',
    lon: '-132.529',
    name: 'Alaska',
    city: 'Thorne Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KTN',
    lat: '55.354',
    lon: '-131.706',
    name: 'Ketchikan International Airport',
    city: 'Ketchikan',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KTS',
    lat: '65.3333',
    lon: '-166.483',
    name: '',
    city: 'Teller Mission',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KUK',
    lat: '60.8953',
    lon: '-162.517',
    name: 'Kasigluk',
    city: 'Kasigluk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KVC',
    lat: '55.0667',
    lon: '-162.317',
    name: '',
    city: 'King Cove',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KVL',
    lat: '67.7333',
    lon: '-164.667',
    name: 'Kivalina',
    city: 'Kivalina',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KWK',
    lat: '59.9077',
    lon: '-163.026',
    name: 'Kwigillingok',
    city: 'Kwigillingok',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KWN',
    lat: '59.7511',
    lon: '-161.908',
    name: 'Quinhagak',
    city: 'Quinhagak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KWP',
    lat: '57.7696',
    lon: '-153.554',
    name: 'Village Seaplane Base-West Point',
    city: 'West Point',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KWT',
    lat: '60.8',
    lon: '-161.45',
    name: 'Kwethluk Airport',
    city: 'Kwethluk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KXA',
    lat: '55.5',
    lon: '-132.5',
    name: 'Kasaan SPB',
    city: 'Kasaan',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KYK',
    lat: '57.5645',
    lon: '-154.454',
    name: 'Karluk Airport',
    city: 'Kodiak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KYU',
    lat: '64.9',
    lon: '-157.7',
    name: 'Koyukuk',
    city: 'Koyukuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'KZB',
    lat: '57.55',
    lon: '-153.75',
    name: 'Zachar Bay',
    city: 'Zachar Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'LAN',
    lat: '42.7728',
    lon: '-84.5888',
    name: 'Lansing Capital City Airport',
    city: 'Lansing',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'LAR',
    lat: '37.8527',
    lon: '-76.517',
    name: 'General Brees Field',
    city: 'Laramie',
    state: 'Wyoming',
    country: 'United States'
  },
  {
    code: 'LAS',
    lat: '36.0806',
    lon: '-115.143',
    name: 'Mccarran International Airport',
    city: 'Las Vegas',
    state: 'Nevada',
    country: 'United States'
  },
  {
    code: 'LAW',
    lat: '34.573',
    lon: '-98.4135',
    name: 'Lawton Municipal Airport',
    city: 'Lawton',
    state: 'Oklahoma',
    country: 'United States'
  },
  {
    code: 'LAX',
    lat: '33.9456',
    lon: '-118.391',
    name: 'Los Angeles International Airport',
    city: 'Los Angeles',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'LBB',
    lat: '33.6566',
    lon: '-101.821',
    name: 'Lubbock International Airport',
    city: 'Lubbock',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'LBE',
    lat: '40.2728',
    lon: '-79.4056',
    name: 'Westmoreland County Airport',
    city: 'Latrobe',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'LBF',
    lat: '41.1333',
    lon: '-100.705',
    name: 'Lee Bird Field Airport',
    city: 'North Platte',
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'LBL',
    lat: '37.0446',
    lon: '-100.952',
    name: 'Liberal Municipal Airport',
    city: 'Liberal',
    state: 'Kansas',
    country: 'United States'
  },
  {
    code: 'LCH',
    lat: '30.1235',
    lon: '-93.2198',
    name: 'Lake Charles Regional Airport',
    city: 'Lake Charles',
    state: 'Louisiana',
    country: 'United States'
  },
  {
    code: 'LCK',
    lat: '39.8176',
    lon: '-82.936',
    name: 'Rickenbacker International Airport',
    city: 'Columbus',
    state: 'Ohio',
    country: 'United States'
  },
  {
    code: 'LEB',
    lat: '43.6249',
    lon: '-72.3087',
    name: 'Lebanon Municipal Airport',
    city: 'West Lebanon',
    state: 'New Hampshire',
    country: 'United States'
  },
  {
    code: 'LEX',
    lat: '38.0384',
    lon: '-84.5989',
    name: 'Blue Grass Field',
    city: 'Lexington',
    state: 'Kentucky',
    country: 'United States'
  },
  {
    code: 'LFT',
    lat: '30.2084',
    lon: '-91.9935',
    name: 'Lafayette Regional Airport',
    city: 'Lafayette',
    state: 'Louisiana',
    country: 'United States'
  },
  {
    code: 'LGA',
    lat: '40.7731',
    lon: '-73.8756',
    name: 'LaGuardia Airport',
    city: 'Flushing',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'LGB',
    lat: '33.8186',
    lon: '-118.144',
    name: 'Long Beach Daugherty Field Airport',
    city: 'Long Beach',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'LIH',
    lat: '21.9782',
    lon: '-159.351',
    name: 'Lihue Airport',
    city: 'Lihue',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'LIT',
    lat: '34.7278',
    lon: '-92.219',
    name: 'Adams Field Airport',
    city: 'Little Rock',
    state: 'Arkansas',
    country: 'United States'
  },
  {
    code: 'LKE',
    lat: '47.6333',
    lon: '-122.333',
    name: 'Lake Union Seaplane Base',
    city: 'Seattle',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'LMA',
    lat: '63.8825',
    lon: '-152.313',
    name: 'Lake Minchumina',
    city: 'Lake Minchumina',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'LMT',
    lat: '42.1638',
    lon: '-121.745',
    name: 'Klamath Falls International Airport',
    city: 'Klamath Falls',
    state: 'Oregon',
    country: 'United States'
  },
  {
    code: 'LNK',
    lat: '40.8461',
    lon: '-96.7543',
    name: 'Lincoln Municipal Airport',
    city: 'Lincoln',
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'LNY',
    lat: '20.7909',
    lon: '-156.951',
    name: 'Lanai Airport',
    city: 'Lanai City',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'LOU',
    lat: '38.2228',
    lon: '-85.6669',
    name: 'Bowman Field Airport',
    city: 'Louisville',
    state: 'Kentucky',
    country: 'United States'
  },
  {
    code: 'LPS',
    lat: '48.4855',
    lon: '-122.936',
    name: 'Lopez Island Airport',
    city: 'Lopez Island',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'LRD',
    lat: '27.5431',
    lon: '-99.4555',
    name: 'Laredo International Airport',
    city: 'Laredo',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'LSE',
    lat: '43.8751',
    lon: '-91.2638',
    name: 'La Crosse Municipal Airport',
    city: 'La Crosse',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'LUF',
    lat: '33.5355',
    lon: '-112.372',
    name: 'Luke Air Force Base',
    city: 'Webb',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'LUP',
    lat: '21.2077',
    lon: '-156.976',
    name: 'Kalaupapa Airport',
    city: 'Kalaupapa',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'LUR',
    lat: '68.8482',
    lon: '-166.118',
    name: 'Cape Lisburne Long-Range Radar Station',
    city: 'Point Hope',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'LWB',
    lat: '37.8571',
    lon: '-80.4044',
    name: 'Greenbrier Valley Airport',
    city: 'Lewisburg',
    state: 'West Virginia',
    country: 'United States'
  },
  {
    code: 'LWS',
    lat: '46.3776',
    lon: '-117.011',
    name: 'Lewiston Nez Perce County Airport',
    city: 'Lewiston',
    state: 'Idaho',
    country: 'United States'
  },
  {
    code: 'LWT',
    lat: '47.0552',
    lon: '-109.46',
    name: 'Lewistown Municipal Airport',
    city: 'Lewistown',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'LYH',
    lat: '37.3309',
    lon: '-79.1944',
    name: 'Lynchburg Regional Airport',
    city: 'Lynchburg',
    state: 'Virginia',
    country: 'United States'
  },
  {
    code: 'MAF',
    lat: '31.9361',
    lon: '-102.208',
    name: 'Midland International Airport',
    city: 'Midland',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'MAZ',
    lat: '18.2531',
    lon: '-67.1489',
    name: 'Eugenio Maria de Hostos Airport',
    city: 'Mayaguez',
    state: 'Puerto Rico',
    country: 'United States'
  },
  {
    code: 'MBL',
    lat: '44.2757',
    lon: '-86.2558',
    name: 'Manistee County-Blacker Airport',
    city: 'Manistee',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'MBS',
    lat: '43.5311',
    lon: '-84.0933',
    name: 'MBS International Airport',
    city: 'Freeland',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'MCE',
    lat: '37.2892',
    lon: '-120.515',
    name: 'Merced Municipal Airport-Macready Field',
    city: 'Merced',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'MCG',
    lat: '62.9536',
    lon: '-155.603',
    name: 'Mcgrath Airport',
    city: 'Mcgrath',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'MCI',
    lat: '39.2992',
    lon: '-94.7171',
    name: 'Kansas City International Airport',
    city: 'Kansas City',
    state: 'Missouri',
    country: 'United States'
  },
  {
    code: 'MCK',
    lat: '40.2071',
    lon: '-100.599',
    name: 'Mccook Municipal Airport',
    city: 'Mccook',
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'MCN',
    lat: '32.7023',
    lon: '-83.65',
    name: 'Middle Georgia Regional Airport',
    city: 'Macon',
    state: 'Georgia',
    country: 'United States'
  },
  {
    code: 'MCO',
    lat: '28.4418',
    lon: '-81.3115',
    name: 'Orlando International Airport',
    city: 'Orlando',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'MCW',
    lat: '43.153',
    lon: '-93.3361',
    name: 'Mason City Municipal Airport',
    city: 'Clear Lake',
    state: 'Iowa',
    country: 'United States'
  },
  {
    code: 'MDT',
    lat: '40.1962',
    lon: '-76.7564',
    name: 'Harrisburg International Airport',
    city: 'Middletown',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'MDW',
    lat: '41.7875',
    lon: '-87.7416',
    name: 'Chicago Midway International Airport',
    city: 'Chicago',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'MEI',
    lat: '32.3334',
    lon: '-88.7449',
    name: 'Key Field Airport',
    city: 'Meridian',
    state: 'Mississippi',
    country: 'United States'
  },
  {
    code: 'MEM',
    lat: '35.047',
    lon: '-89.9823',
    name: 'Memphis International Airport',
    city: 'Memphis',
    state: 'Tennessee',
    country: 'United States'
  },
  {
    code: 'MFE',
    lat: '26.1813',
    lon: '-98.2404',
    name: 'Miller International Airport',
    city: 'Mcallen',
    state: 'Texas',
    country: 'United States'
  },
  {
    code: 'MFR',
    lat: '42.3691',
    lon: '-122.874',
    name: 'Rogue Valley International-Medford Airport',
    city: 'Central Point',
    state: 'Oregon',
    country: 'United States'
  },
  {
    code: 'MGM',
    lat: '32.3049',
    lon: '-86.3909',
    name: 'Montgomery Regional Airport',
    city: 'Montgomery',
    state: 'Alabama',
    country: 'United States'
  },
  {
    code: 'MGW',
    lat: '39.6411',
    lon: '-79.9241',
    name: 'Morgantown Municipal Airport-Hart Field',
    city: 'Morgantown',
    state: 'West Virginia',
    country: 'United States'
  },
  {
    code: 'MHK',
    lat: '39.1368',
    lon: '-96.6699',
    name: 'Manhattan Municipal Airport',
    city: 'Manhattan',
    state: 'Kansas',
    country: 'United States'
  },
  {
    code: 'MHR',
    lat: '38.5646',
    lon: '-121.297',
    name: 'Mather Airport',
    city: 'Mather',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'MHT',
    lat: '42.9293',
    lon: '-71.4386',
    name: 'Manchester-Boston Regional Airport',
    city: 'Manchester',
    state: 'New Hampshire',
    country: 'United States'
  },
  {
    code: 'MIA',
    lat: '25.7953',
    lon: '-80.2727',
    name: 'Miami International Airport',
    city: 'Miami',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'MKC',
    lat: '39.1197',
    lon: '-94.5906',
    name: 'Kansas City Downtown Airport',
    city: 'Kansas City',
    state: 'Missouri',
    country: 'United States'
  },
  {
    code: 'MKE',
    lat: '42.9471',
    lon: '-87.9051',
    name: 'General Mitchell International Airport',
    city: 'Milwaukee',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'MKG',
    lat: '43.1646',
    lon: '-86.2367',
    name: 'Muskegon County Airport',
    city: 'Muskegon',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'MKK',
    lat: '21.1557',
    lon: '-157.094',
    name: 'Molokai Airport',
    city: 'Hoolehua',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'MLB',
    lat: '28.0957',
    lon: '-80.6282',
    name: 'Melbourne International Airport',
    city: 'Melbourne',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'MLI',
    lat: '41.4539',
    lon: '-90.5058',
    name: 'Quad City Airport',
    city: 'Coal Valley',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'MLL',
    lat: '61.8833',
    lon: '-162.067',
    name: 'Marshall',
    city: 'Marshall',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'MLU',
    lat: '32.5099',
    lon: '-92.044',
    name: 'Monroe Regional Airport',
    city: 'Monroe',
    state: 'Louisiana',
    country: 'United States'
  },
  {
    code: 'MLY',
    lat: '64.9812',
    lon: '-150.637',
    name: 'Manley Hot Springs',
    city: 'Manley Hot Springs',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'MMH',
    lat: '37.6288',
    lon: '-118.844',
    name: 'Mammoth June Lakes Airport',
    city: 'Mammoth Lakes',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'MNT',
    lat: '65.1987',
    lon: '-149.53',
    name: 'Minto',
    city: 'Minto',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'MOB',
    lat: '30.6775',
    lon: '-88.243',
    name: 'Mobile Regional Airport',
    city: 'Mobile',
    state: 'Alabama',
    country: 'United States'
  },
  {
    code: 'MOD',
    lat: '37.6319',
    lon: '-120.959',
    name: 'Modesto City County Airport-Harry Sham Field',
    city: 'Modesto',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'MOT',
    lat: '48.2554',
    lon: '-101.291',
    name: 'Minot International Airport',
    city: 'Minot',
    state: 'North Dakota',
    country: 'United States'
  },
  {
    code: 'MOU',
    lat: '62.0833',
    lon: '-163.733',
    name: 'Mountain Village',
    city: 'Mountain Village',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'MQT',
    lat: '46.3501',
    lon: '-87.3871',
    name: 'Sawyer International Airport',
    city: 'Marquette',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'MRY',
    lat: '36.5872',
    lon: '-121.851',
    name: 'Monterey Peninsula Airport',
    city: 'Monterey',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'MSL',
    lat: '34.7439',
    lon: '-87.6185',
    name: 'Muscle Shoals Regional Airport',
    city: 'Muscle Shoals',
    state: 'Alabama',
    country: 'United States'
  },
  {
    code: 'MSN',
    lat: '43.1351',
    lon: '-89.3465',
    name: 'Dane County Regional Airport-Truax Field',
    city: 'Madison',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'MSO',
    lat: '46.9192',
    lon: '-114.084',
    name: 'Missoula International Airport',
    city: 'Missoula',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'MSP',
    lat: '44.8793',
    lon: '-93.1987',
    name: 'Minneapolis St Paul International Airport',
    city: 'St. Paul',
    state: 'Minnesota',
    country: 'United States'
  },
  {
    code: 'MSS',
    lat: '44.9326',
    lon: '-74.8535',
    name: 'Massena International Airport',
    city: 'Massena',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'MSY',
    lat: '29.983',
    lon: '-90.2569',
    name: 'New Orleans International Airport',
    city: 'Kenner',
    state: 'Louisiana',
    country: 'United States'
  },
  {
    code: 'MTJ',
    lat: '38.5003',
    lon: '-107.899',
    name: 'Montrose Regional Airport',
    city: 'Montrose',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'MTM',
    lat: '55.1333',
    lon: '-131.583',
    name: 'Metlakatla Sea Plane Base',
    city: 'Metlakatla',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'MUE',
    lat: '19.9983',
    lon: '-155.675',
    name: 'Waimea Kohala Airport',
    city: 'Kamuela',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'MVY',
    lat: '41.3895',
    lon: '-70.6112',
    name: 'Marthas Vineyard Airport',
    city: 'Vineyard Haven',
    state: 'Massachusetts',
    country: 'United States'
  },
  {
    code: 'MWA',
    lat: '37.7467',
    lon: '-89.0104',
    name: 'Williamson County Regional Airport',
    city: 'Marion',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'MYL',
    lat: '44.8968',
    lon: '-116.096',
    name: 'Mccall Airport',
    city: 'Mccall',
    state: 'Idaho',
    country: 'United States'
  },
  {
    code: 'MYR',
    lat: '33.6821',
    lon: '-78.9228',
    name: 'Myrtle Beach International Airport',
    city: 'Myrtle Beach',
    state: 'South Carolina',
    country: 'United States'
  },
  {
    code: 'MYU',
    lat: '60.3906',
    lon: '-166.191',
    name: 'Mekoryuk',
    city: 'Mekoryuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NCN',
    lat: '60.0784',
    lon: '-148.017',
    name: 'Chenega',
    city: 'New Chenega',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NIB',
    lat: '45.9837',
    lon: '-108.028',
    name: 'Nikolai',
    city: 'Nikolai',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NIP',
    lat: '30.2342',
    lon: '-81.6753',
    name: 'Jacksonville Naval Air Station',
    city: 'Jacksonville',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'NIU',
    lat: '21.3358',
    lon: '-157.919',
    name: 'Honolulu International Airport',
    city: 'Honolulu',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'NKI',
    lat: '55.8556',
    lon: '-133.183',
    name: 'Naukiti Airport',
    city: 'Naukiti',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NLG',
    lat: '56.0167',
    lon: '-161.15',
    name: '',
    city: 'Nelson Lagoon',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NME',
    lat: '60.4723',
    lon: '-164.699',
    name: 'Nightmute Airport',
    city: 'Nightmute',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NNL',
    lat: '59.9717',
    lon: '-154.847',
    name: '',
    city: 'Nondalton',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NUI',
    lat: '70.2167',
    lon: '-150.917',
    name: 'Nuiqsut',
    city: 'Nuiqsut',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NUL',
    lat: '64.7134',
    lon: '-158.077',
    name: 'Nulato Airport',
    city: 'Nulato',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NUP',
    lat: '60.897',
    lon: '-162.453',
    name: 'Alaska',
    city: 'Nunapitchuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'NYA',
    lat: '44.7718',
    lon: '-93.9263',
    name: '',
    city: 'Norwood Young America',
    state: 'Minnesota',
    country: 'United States'
  },
  {
    code: 'OAJ',
    lat: '34.8307',
    lon: '-77.6053',
    name: 'Albert J Ellis Airport',
    city: 'Richlands',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'OAK',
    lat: '37.7158',
    lon: '-122.209',
    name: 'Oakland International Airport',
    city: 'Oakland',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'OBU',
    lat: '66.9148',
    lon: '-156.878',
    name: 'Kobuk Airport',
    city: 'Kobuk',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ODW',
    lat: '48.2517',
    lon: '-122.68',
    name: 'Oak Harbor Airpark',
    city: 'Oak Harbor',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'OGG',
    lat: '20.8926',
    lon: '-156.441',
    name: 'Kahului Airport',
    city: 'Kahului',
    state: 'Hawaii',
    country: 'United States'
  },
  {
    code: 'OGS',
    lat: '44.6782',
    lon: '-75.4765',
    name: 'Ogdensburg International Airport',
    city: 'Ogdensburg',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'OKC',
    lat: '35.3981',
    lon: '-97.5974',
    name: 'Will Rogers World Airport',
    city: 'Oklahoma City',
    state: 'Oklahoma',
    country: 'United States'
  },
  {
    code: 'OLF',
    lat: '48.0964',
    lon: '-105.575',
    name: 'L. M. Clayton Airport',
    city: 'Wolf Point',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'OLH',
    lat: '62.8903',
    lon: '-149.054',
    name: 'Alaska',
    city: 'Old Harbor',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'OMA',
    lat: '41.3',
    lon: '-95.8998',
    name: 'Eppley Airfield',
    city: 'Omaha',
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'OME',
    lat: '64.5125',
    lon: '-165.445',
    name: 'Nome Airport',
    city: 'Nome',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ONL',
    lat: '42.4655',
    lon: '-98.6866',
    name: 'The Oneill Municipal Airport',
    city: "O'neill",
    state: 'Nebraska',
    country: 'United States'
  },
  {
    code: 'ONT',
    lat: '34.062',
    lon: '-117.594',
    name: 'Ontario International Airport',
    city: 'Ontario',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'OOK',
    lat: '60.5334',
    lon: '-165.114',
    name: 'Toksook Bay',
    city: 'Toksook Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'OPF',
    lat: '25.9023',
    lon: '-80.2677',
    name: 'Opa Locka Airport',
    city: 'Opa-Locka',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'ORD',
    lat: '41.9796',
    lon: '-87.8825',
    name: "Chicago O'Hare International Airport",
    city: 'Chicago',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'ORF',
    lat: '36.8977',
    lon: '-76.2154',
    name: 'Norfolk International Airport',
    city: 'Norfolk',
    state: 'Virginia',
    country: 'United States'
  },
  {
    code: 'ORH',
    lat: '42.2699',
    lon: '-71.8706',
    name: 'Worcester Municipal Airport',
    city: 'Worcester',
    state: 'Massachusetts',
    country: 'United States'
  },
  {
    code: 'ORI',
    lat: '-7.6833',
    lon: '-39.3667',
    name: '',
    city: 'Port Lions',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'ORV',
    lat: '66.8333',
    lon: '-161.033',
    name: 'Curtis Memorial',
    city: 'Noorvik',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'OTH',
    lat: '43.4141',
    lon: '-124.244',
    name: 'North Bend Municipal Airport',
    city: 'North Bend',
    state: 'Oregon',
    country: 'United States'
  },
  {
    code: 'OTZ',
    lat: '66.8893',
    lon: '-162.61',
    name: 'Ralph Wien Memorial Airport',
    city: 'Kotzebue',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'OVS',
    lat: '43.1537',
    lon: '-90.6764',
    name: 'Boscobel Airport',
    city: 'Boscobel',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'OXR',
    lat: '34.1984',
    lon: '-119.206',
    name: 'Oxnard Airport',
    city: 'Oxnard',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'PAH',
    lat: '37.0612',
    lon: '-88.7672',
    name: 'Barkley Regional Airport',
    city: 'West Paducah',
    state: 'Kentucky',
    country: 'United States'
  },
  {
    code: 'PBG',
    lat: '44.6508',
    lon: '-73.4683',
    name: 'Plattsburgh Air Force Base',
    city: 'Plattsburgh',
    state: 'New York',
    country: 'United States'
  },
  {
    code: 'PBI',
    lat: '26.6909',
    lon: '-80.0889',
    name: 'Palm Beach International Airport',
    city: 'West Palm Beach',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'PCE',
    lat: '57.093',
    lon: '-157.258',
    name: 'Painter Creek',
    city: 'Painter Creek',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PDB',
    lat: '59.7868',
    lon: '-154.105',
    name: 'Pedro Bay',
    city: 'Pedro Bay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PDT',
    lat: '45.6893',
    lon: '-118.839',
    name: 'Eastern Oregon Regional Airport',
    city: 'Pendleton',
    state: 'Oregon',
    country: 'United States'
  },
  {
    code: 'PDX',
    lat: '45.5867',
    lon: '-122.587',
    name: 'Portland International Airport',
    city: 'Portland',
    state: 'Oregon',
    country: 'United States'
  },
  {
    code: 'PEC',
    lat: '57.95',
    lon: '-136.233',
    name: 'Pelican Sea Plane Base',
    city: 'Pelican',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PFN',
    lat: '30.2071',
    lon: '-85.6829',
    name: 'Panama City Bay County Airport',
    city: 'Panama City',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'PGA',
    lat: '36.9243',
    lon: '-111.451',
    name: 'Page Municipal Airport',
    city: 'Page',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'PGM',
    lat: '59.35',
    lon: '-151.833',
    name: 'Port Graham',
    city: 'Port Graham',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PGV',
    lat: '35.6336',
    lon: '-77.3808',
    name: 'Pitt Greenville Airport',
    city: 'Greenville',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'PHF',
    lat: '37.1306',
    lon: '-76.5026',
    name: 'Newport News-Williamsburg International Airport',
    city: 'Newport News',
    state: 'Virginia',
    country: 'United States'
  },
  {
    code: 'PHL',
    lat: '39.8768',
    lon: '-75.2419',
    name: 'Philadelphia International Airport',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'PHO',
    lat: '68.3494',
    lon: '-166.797',
    name: 'Point Hope Airport',
    city: 'Point Hope',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PHX',
    lat: '33.4376',
    lon: '-112.03',
    name: 'Sky Harbor International Airport',
    city: 'Phoenix',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'PIA',
    lat: '40.6663',
    lon: '-89.6909',
    name: 'Greater Peoria Regional Airport',
    city: 'Peoria',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'PIB',
    lat: '31.4671',
    lon: '-89.3333',
    name: 'Pine Belt Regional Airport',
    city: 'Moselle',
    state: 'Mississippi',
    country: 'United States'
  },
  {
    code: 'PIE',
    lat: '27.9065',
    lon: '-82.6924',
    name: 'St. Petersburg-Clearwater International Airport',
    city: 'Clearwater',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'PIH',
    lat: '42.9056',
    lon: '-112.588',
    name: 'Pocatello Municipal Airport',
    city: 'Pocatello',
    state: 'Idaho',
    country: 'United States'
  },
  {
    code: 'PIP',
    lat: '57.5631',
    lon: '-157.558',
    name: 'Pilot Point Airport',
    city: 'Pilot Point',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PIR',
    lat: '44.3801',
    lon: '-100.293',
    name: 'Pierre Municipal Airport',
    city: 'Pierre',
    state: 'South Dakota',
    country: 'United States'
  },
  {
    code: 'PIT',
    lat: '40.4914',
    lon: '-80.2328',
    name: 'Pittsburgh International Airport',
    city: 'Coraopolis',
    state: 'Pennsylvania',
    country: 'United States'
  },
  {
    code: 'PIZ',
    lat: '69.7333',
    lon: '-163.017',
    name: 'Dew Station',
    city: 'Point Lay',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PKA',
    lat: '60.7049',
    lon: '-161.766',
    name: 'Alaska',
    city: 'Napaskiak',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PKB',
    lat: '39.3462',
    lon: '-81.4345',
    name: 'Wood County Airport-Gill Robb Wilson Field',
    city: 'Williamstown',
    state: 'West Virginia',
    country: 'United States'
  },
  {
    code: 'PLN',
    lat: '45.571',
    lon: '-84.7857',
    name: 'Pellston Regional Airport',
    city: 'Pellston',
    state: 'Michigan',
    country: 'United States'
  },
  {
    code: 'PMD',
    lat: '34.6294',
    lon: '-118.084',
    name: 'Air Force Plant Nr 42 Palmdale',
    city: 'Palmdale',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'PML',
    lat: '55.9833',
    lon: '-160.533',
    name: '',
    city: 'Port Moller',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PNS',
    lat: '30.4761',
    lon: '-87.1941',
    name: 'Pensacola Regional Airport',
    city: 'Pensacola',
    state: 'Florida',
    country: 'United States'
  },
  {
    code: 'PPG',
    lat: '-14.3242',
    lon: '-170.706',
    name: 'Pago Pago International Airport',
    city: 'Pago Pago',
    state: 'American Samoa',
    country: 'United States'
  },
  {
    code: 'PPV',
    lat: '62.8903',
    lon: '-149.054',
    name: 'Alaska',
    city: 'Port Protection',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PQI',
    lat: '46.6921',
    lon: '-68.0447',
    name: 'Northern Maine Regional Airport',
    city: 'Presque Isle',
    state: 'Maine',
    country: 'United States'
  },
  {
    code: 'PQS',
    lat: '61.9362',
    lon: '-162.882',
    name: 'Pilot Station',
    city: 'Pilot Station',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PRC',
    lat: '34.6492',
    lon: '-112.428',
    name: 'Ernest A Love Field Airport',
    city: 'Prescott',
    state: 'Arizona',
    country: 'United States'
  },
  {
    code: 'PSC',
    lat: '46.2592',
    lon: '-119.117',
    name: 'Tri Cities Airport',
    city: 'Pasco',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'PSE',
    lat: '18.0116',
    lon: '-66.5664',
    name: 'Mercedita Airport',
    city: 'Coto Laurel',
    state: 'Puerto Rico',
    country: 'United States'
  },
  {
    code: 'PSG',
    lat: '56.8067',
    lon: '-132.933',
    name: 'Petersburg James A Johnson Airport',
    city: 'Petersburg',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PSP',
    lat: '33.8227',
    lon: '-116.509',
    name: 'Palm Springs International Airport',
    city: 'Palm Springs',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'PTA',
    lat: '60.3956',
    lon: '-154.494',
    name: 'Port Alsworth',
    city: 'Port Alsworth',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PTH',
    lat: '56.9667',
    lon: '-158.633',
    name: 'Port Heiden Airport',
    city: 'Port Heiden',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PTU',
    lat: '58.9216',
    lon: '-161.727',
    name: 'Platinum',
    city: 'Platinum',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'PUB',
    lat: '38.2836',
    lon: '-104.496',
    name: 'Pueblo Memorial Airport',
    city: 'Pueblo',
    state: 'Colorado',
    country: 'United States'
  },
  {
    code: 'PUW',
    lat: '46.743',
    lon: '-117.119',
    name: 'Pullman-Moscow Regional Airport',
    city: 'Pullman',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'PVC',
    lat: '42.0771',
    lon: '-70.2169',
    name: 'Provincetown Municipal Airport',
    city: 'Provincetown',
    state: 'Massachusetts',
    country: 'United States'
  },
  {
    code: 'PVD',
    lat: '41.723',
    lon: '-71.4399',
    name: 'Theodore Francis Green State Airport',
    city: 'Warwick',
    state: 'Rhode Island',
    country: 'United States'
  },
  {
    code: 'PWK',
    lat: '42.1162',
    lon: '-87.8987',
    name: 'Pal Waukee Airport',
    city: 'Wheeling',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'PWM',
    lat: '43.6475',
    lon: '-70.3103',
    name: 'Jetport International Airport',
    city: 'Portland',
    state: 'Maine',
    country: 'United States'
  },
  {
    code: 'QUL',
    lat: '36.5922',
    lon: '-90.2465',
    name: '',
    city: 'Qulin',
    state: 'Missouri',
    country: 'United States'
  },
  {
    code: 'RAP',
    lat: '44.037',
    lon: '-103.06',
    name: 'Rapid City Regional Airport',
    city: 'Rapid City',
    state: 'South Dakota',
    country: 'United States'
  },
  {
    code: 'RBH',
    lat: '64.7381',
    lon: '-155.489',
    name: 'Brooks Lodge',
    city: 'Brooks Lodge',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'RBX',
    lat: '46.4717',
    lon: '-108.55',
    name: 'Roundup Airport',
    city: 'Roundup',
    state: 'Montana',
    country: 'United States'
  },
  {
    code: 'RBY',
    lat: '64.7381',
    lon: '-155.489',
    name: 'Ruby Airport',
    city: 'Ruby',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'RCE',
    lat: '48.6126',
    lon: '-123.14',
    name: 'Roche Harbor Airport',
    city: 'Friday Harbor',
    state: 'Washington',
    country: 'United States'
  },
  {
    code: 'RCP',
    lat: '51.5257',
    lon: '-0.14499',
    name: '',
    city: 'Cinder River',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'RDB',
    lat: '67.75',
    lon: '-163.667',
    name: 'Red Dog',
    city: 'Red Dog',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'RDD',
    lat: '40.5056',
    lon: '-122.302',
    name: 'Redding Municipal Airport',
    city: 'Redding',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'RDM',
    lat: '44.2533',
    lon: '-121.162',
    name: 'Roberts Field Airport',
    city: 'Redmond',
    state: 'Oregon',
    country: 'United States'
  },
  {
    code: 'RDU',
    lat: '35.8729',
    lon: '-78.7923',
    name: 'Durham International Airport',
    city: 'Raleigh/Durham',
    state: 'North Carolina',
    country: 'United States'
  },
  {
    code: 'RDV',
    lat: '61.7645',
    lon: '-157.312',
    name: 'Red Devil',
    city: 'Red Devil',
    state: 'Alaska',
    country: 'United States'
  },
  {
    code: 'RFD',
    lat: '42.2035',
    lon: '-89.0955',
    name: 'Greater Rockford Airport',
    city: 'Rockford',
    state: 'Illinois',
    country: 'United States'
  },
  {
    code: 'RHI',
    lat: '45.626',
    lon: '-89.4626',
    name: 'Rhinelander-Oneida County Airport',
    city: 'Rhinelander',
    state: 'Wisconsin',
    country: 'United States'
  },
  {
    code: 'RIC',
    lat: '37.5108',
    lon: '-77.3332',
    name: 'Richmond International Airport',
    city: 'Richmond',
    state: 'Virginia',
    country: 'United States'
  },
  {
    code: 'RIV',
    lat: '33.8806',
    lon: '-117.259',
    name: 'March Air Force Base',
    city: 'Alessandro',
    state: 'California',
    country: 'United States'
  },
  {
    code: 'RIW',
    lat: '43.0611',
    lon: '-108.458',
    name: 'Riverton Regional Airport',
    city: 'Riverton',
    state: 'Wyoming',
    country: 'United States'
  },
  {
    code: 'RKD',
    lat: '44.0612',
    lon: '-69.0943',
    name: 'Knox County Regional Airport',
    city: 'Owls Head',
    state: 'Maine',
    country: 'United States'
  },
  {
    code: 'RKS',
    lat: '41.5988',
    lon: '-109.072',
    name: 'Rock Springs-Sweetwater County Airport',
    city: 'Rock Springs',
    state: 'Wyoming',
    country: 'United States'
  }
];

module.exports = airports;
