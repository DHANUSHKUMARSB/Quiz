const data = [
  [
    {
      question:
        "London, the capital of U.K. was earlier known as 'Londonium'. It was built by",
      options: {
        A: "Greeks",
        B: "Turks",
        C: "Vikings",
        D: "Romans",
      },
      answer: "D",
    },
    {
      question:
        "Which European capital city bears the name of a Greek legendary character?",
      options: {
        A: "Berlin",
        B: "Warsaw",
        C: "Paris",
        D: "Prague",
      },
      answer: "C",
    },
    {
      question:
        "Which European country's capital city was founded by the twins Romulus and Remus?",
      options: {
        A: "Spain",
        B: "Italy",
        C: "Turkey",
        D: "Greece",
      },
      answer: "B",
    },
    {
      question:
        "According to legends, which European capital city takes its name from the wild animal 'Bear'?",
      options: {
        A: "Berlin",
        B: "Berne",
        C: "Bratislava",
        D: "Bucharest",
      },
      answer: "B",
    },
    {
      question:
        "Which European capital city means 'Merchant's Harbour' in the native language?",
      options: {
        A: "Copenhagen",
        B: "Helsinki",
        C: "Stockholm",
        D: "Madrid",
      },
      answer: "A",
    },
    {
      question:
        "Which European capital city is also known as 'City of Seven Hills'?",
      options: {
        A: "Athens",
        B: "Moscow",
        C: "Budapest",
        D: "Rome",
      },
      answer: "D",
    },
    {
      question:
        "Which European capital city literally means 'Islet of Logs' in the native language?",
      options: {
        A: "Stockholm",
        B: "Valetta",
        C: "Helsinki",
        D: "Vilnius",
      },
      answer: "A",
    },
    {
      question:
        "Which European country and its capital city bear the name of a 10th-century castle with the name of Licillinburhuc?",
      options: {
        A: "Liechtenstein",
        B: "Luxembourg",
        C: "Monaco",
        D: "San Marino",
      },
      answer: "B",
    },
    {
      question: "Which European capital city literally means 'Bay of Smoke'?",
      options: {
        A: "Reykjavik",
        B: "Oslo",
        C: "Skopje",
        D: "Tbilisi",
      },
      answer: "A",
    },
    {
      question:
        "Name the capital of the largest country in Europe which bears the name of the river on which it stands?",
      options: {
        A: "Berlin",
        B: "Moscow",
        C: "Kiev",
        D: "Bucharest",
      },
      answer: "B",
    },
    {
      question:
        "Which European capital city is known as 'Classical Music Capital of the world'?",
      options: {
        A: "Berne",
        B: "Zagreb",
        C: "Paris",
        D: "Vienna",
      },
      answer: "D",
    },
    {
      question:
        "Constantinople was the capital of Roman, Byzantine, and Ottoman empires. By what name is it known now?",
      options: {
        A: "Ankara",
        B: "Istanbul",
        C: "Izmir",
        D: "Antalya",
      },
      answer: "B",
    },
    {
      question:
        "Which European country has the same name as that of a state of USA?",
      options: {
        A: "Armenia",
        B: "Lithuania",
        C: "Latvia",
        D: "Georgia",
      },
      answer: "D",
    },
    {
      question:
        "Which European country's capital is named after the Goddess 'Athena'?",
      options: {
        A: "Greece",
        B: "Spain",
        C: "Albania",
        D: "Macedonia",
      },
      answer: "A",
    },
    {
      question: "What is the capital of Portugal?",
      options: {
        A: "Madeira",
        B: "Porto",
        C: "Lisbon",
        D: "Braga",
      },
      answer: "C",
    },
    {
      question: "What is the capital of Ireland?",
      options: {
        A: "Limerick",
        B: "Galway",
        C: "Cork",
        D: "Dublin",
      },
      answer: "D",
    },
    {
      question: "Which country is not matched correctly with its capital?",
      options: {
        A: "Slovenia - Ljubljana",
        B: "Latvia - Liepaja",
        C: "Slovakia - Bratislava",
        D: "Lithuania - Vilnius",
      },
      answer: "B",
    },
    {
      question: "Which country and capital is matched correctly?",
      options: {
        A: "Bulgaria - Sofia",
        B: "Serbia - Belgrade",
        C: "Ukraine - Kiev",
        D: "Moldova - Chisnau",
      },
      answer: "B",
    },
    {
      question: "Which country and capital is not matched correctly?",
      options: {
        A: "Croatia - Zagreb",
        B: "Georgia - Tbilisi",
        C: "Malta - Valetta",
      },
      answer: "A",
    },
    {
      question:
        "Which option gives the correct matching order of European countries and their capitals?",
      options: {
        A: "I B, 2 C, 3 D, 4 A",
        B: "I C, 2 A, 3 D, 4 B",
        C: "I D, 2 A, 3 B, 4 C",
        D: "I A, 2 B, 3 C, 4 D",
      },
      answer: "A",
    },
  ],
  [
    {
      question: "The Red Square is in",
      options: {
        A: "Beijing",
        B: "Moscow",
        C: "London",
        D: "Berlin",
      },
      answer: "B",
    },
    {
      question: "St. Peter's Square is in",
      options: {
        A: "Vatican",
        B: "Monte Carlo",
        C: "Rio de Janeiro",
        D: "Manila",
      },
      answer: "A",
    },
    {
      question: "Tiananmen Square is in",
      options: {
        A: "Shanghai",
        B: "Tokyo",
        C: "Pyongyang",
        D: "Beijing",
      },
      answer: "D",
    },
    {
      question: "Time Square is in",
      options: {
        A: "Paris",
        B: "Birmingham",
        C: "Dublin",
        D: "New York",
      },
      answer: "D",
    },
    {
      question: "Trafalgar Square is in",
      options: {
        A: "Glasgow",
        B: "Manchester",
        C: "London",
        D: "Dresden",
      },
      answer: "C",
    },
    {
      question:
        "The official residence of Russian President 'Kremlin' is located near",
      options: {
        A: "Red Square",
        B: "Moscow Square",
        C: "Lenin Square",
        D: "Stalin Square",
      },
      answer: "A",
    },
    {
      question: "The nickname of Time Square is",
      options: {
        A: "The Cross Roads of the World",
        B: "The Great White Way",
        C: "The Centre of the Universe",
        D: "All the above",
      },
      answer: "D",
    },
    {
      question: "At the Trafalgar Square, the Column can be found.",
      options: {
        A: "Churchill's",
        B: "King's",
        C: "Queen's",
        D: "Nelson's",
      },
      answer: "D",
    },
    {
      question:
        "At the centre of St. Peter's square, there is a four thousand year old Obelisk.",
      options: {
        A: "Egyptian",
        B: "Roman",
        C: "Greek",
        D: "Persian",
      },
      answer: "A",
    },
    {
      question: "Tiananmen Square is situated near built by Ming Dynasty.",
      options: {
        A: "Forbidden city",
        B: "Eternal City",
        C: "Heavenly City",
        D: "Grand Old City",
      },
      answer: "A",
    },
    {
      question: "Which famous cathedral is located at Red Square?",
      options: {
        A: "St. Francis",
        B: "St. Basil's",
        C: "St. Peter's",
        D: "St. Mark's",
      },
      answer: "B",
    },
    {
      question:
        "Which Square is named after a famous battle in which Admiral Nelson defeated Napolean's Navy?",
      options: {
        A: "St. Sophia's Square",
        B: "Trafalgar Square",
        C: "Piccadilly Square",
        D: "King James Square",
      },
      answer: "B",
    },
    {
      question:
        "Plaza Mayor is a Square in where bullfights used to take place.",
      options: {
        A: "Madrid",
        B: "Barcelona",
        C: "Lisbon",
        D: "Lyons",
      },
      answer: "A",
    },
    {
      question: "The Plaza de Mayo in Buenos Aires has the May Pyramid.",
      options: {
        A: "Rio de Janeiro",
        B: "Sao Paulo",
        C: "Santiago",
        D: "Buenos Aires",
      },
      answer: "D",
    },
    {
      question:
        "The Zocalo, one of the largest squares of the world is located in",
      options: {
        A: "Guatemala City",
        B: "San Salvador",
        C: "Mexico City",
        D: "Quito",
      },
      answer: "C",
    },
    {
      question: "The Grand Place is a famous Square in",
      options: {
        A: "Paris",
        B: "Warsaw",
        C: "Brussels",
        D: "Vienna",
      },
      answer: "C",
    },
    {
      question:
        "Piazza del Campo is one of Europe's oldest Squares. It is located in",
      options: {
        A: "Naples",
        B: "Siena",
        C: "Venice",
        D: "Milan",
      },
      answer: "B",
    },
    {
      question: "The Merdeka Square in Malaysia is in",
      options: {
        A: "Penang",
        B: "Johore",
        C: "Kuala Lumpur",
        D: "Malacca",
      },
      answer: "C",
    },
    {
      question:
        "Xinghai Square at Dalian in China is considered to be the largest Square in the world in terms of area.",
      options: {
        A: "Japan",
        B: "North Korea",
        C: "Mongolia",
        D: "China",
      },
      answer: "D",
    },
    {
      question: "Which option gives the correct matching order?",
      options: {
        A: "1B, 2C, 3D, 4A",
        B: "1C, 2A, 3D, 4B",
      },
      answer: "A",
    },
  ],
  [
    {
      question:
        "Into how many main types can the classical music of India be classified?",
      options: {
        A: "2",
        B: "3",
        C: "4",
        D: "5",
      },
      answer: "A",
    },
    {
      question: "Which type of classical music is popular in North India?",
      options: {
        A: "Manipuri",
        B: "Kathak",
        C: "Hindustani",
        D: "Carnatic",
      },
      answer: "C",
    },
    {
      question:
        "From which scriptures the classical music of India is supposed to have evolved?",
      options: {
        A: "Rig Veda",
        B: "Sama Veda",
        C: "Yajur Veda",
        D: "Atharvana Veda",
      },
      answer: "B",
    },
    {
      question: "Hindustani classical music had influence from which language?",
      options: {
        A: "Roman",
        B: "Greek",
        C: "Persian",
        D: "Chinese",
      },
      answer: "C",
    },
    {
      question: "Carnatic music compositions are called",
      options: {
        A: "Kirthanas",
        B: "Upanyana",
        C: "Ragas",
        D: "Layams",
      },
      answer: "A",
    },
    {
      question: "'Sruti' in Carnatic music refers to",
      options: {
        A: "Pitch",
        B: "Sound",
        C: "Melody",
        D: "Rhythm",
      },
      answer: "A",
    },
    {
      question: "'Raga' refers to",
      options: {
        A: "Rhythmic Formula",
        B: "Pitch Formula",
        C: "Melody Formula",
        D: "Poetic Formula",
      },
      answer: "C",
    },
    {
      question: "How many 'Swaras' are there in Carnatic music?",
      options: {
        A: "5",
        B: "6",
        C: "7",
        D: "9",
      },
      answer: "C",
    },
    {
      question: "'Taala' refers to",
      options: {
        A: "Melody",
        B: "Rhythm",
        C: "Duration",
        D: "Style",
      },
      answer: "B",
    },
    {
      question:
        "Which one of the following is a member of the Trinity of Carnatic Music?",
      options: {
        A: "Tyagaraja",
        B: "Muthusamy Dikhshidar",
        C: "Syamasastri",
        D: "All the above",
      },
      answer: "D",
    },
    // ... (continue the same structure for the remaining questions)
    {
      question: "What is the standard length of cricket pitch?",
      options: {
        A: "22 yards",
        B: "18 yards",
        C: "20 yards",
        D: "16 yards",
      },
      answer: "A",
    },
    {
      question: "Which one of the following is not correctly matched?",
      options: {
        A: "Kapil Dev - Haryana Hurricane",
        B: "Jim Laker - All 10 wickets in an innings",
        C: "Shane Warne - New Zealand",
        D: "Brian Lara - West Indies",
      },
      answer: "C",
    },
  ],
  [
    {
      question: "Who was the first person to go to space?",
      options: {
        A: "Yuri Gagarin",
        B: "Marc Gameau",
        C: "Joseph Allen",
        D: "Yuri Usachov",
      },
      answer: "A",
    },
    {
      question: "A named Laika was the first living thing to be sent to space.",
      options: { A: "Cat", B: "Dog", C: "Rabbit", D: "Mouse" },
      answer: "B",
    },
    {
      question: "Who was the first woman in space?",
      options: {
        A: "Christina Koch",
        B: "Svetlena",
        C: "Valentina Treshkova",
        D: "Naoka Yamazaki",
      },
      answer: "C",
    },
    {
      question: "Which was the first-ever spacecraft sent to space?",
      options: { A: "Eagle I", B: "Pioneer I", C: "Sputnik I", D: "Vostok I" },
      answer: "C",
    },
    {
      question: "Which was the manned spacecraft sent to space?",
      options: {
        A: "Sputnik II",
        B: "Vostok I",
        C: "The Enterprise",
        D: "Apollo I",
      },
      answer: "B",
    },
    {
      question: "Who was the first to set foot on the moon?",
      options: {
        A: "Edwin Aldrin",
        B: "Neil Armstrong",
        C: "Michael Collins",
        D: "Edward White",
      },
      answer: "B",
    },
    {
      question: "On which day did man land on the moon?",
      options: {
        A: "20th July, 1969",
        B: "15th August, 1969",
        C: "26th January, 1969",
        D: "21st June, 1969",
      },
      answer: "A",
    },
    {
      question: "Which spacecraft landed on the moon first?",
      options: { A: "Apollo", B: "Eagle", C: "Endeavour", D: "Enterprise" },
      answer: "B",
    },
    {
      question: "Who was the first person to walk in space?",
      options: {
        A: "Alexei Leonov",
        B: "Edward White",
        C: "Yuri Gagarin",
        D: "Michael Collins",
      },
      answer: "A",
    },
    {
      question: "Who is the oldest person to go to space?",
      options: {
        A: "John Glenn",
        B: "Alan Bean",
        C: "Buzz Aldrin",
        D: "Frank Borman",
      },
      answer: "A",
    },
    {
      question: "Who was the first American in space?",
      options: {
        A: "Alan Shepherd",
        B: "Pete Conrad",
        C: "Sally Ride",
        D: "John Glenn",
      },
      answer: "A",
    },
    {
      question: "Name the first space vehicle sent to the moon by India?",
      options: {
        A: "Chandrayaan",
        B: "Mangalyaan",
        C: "Chandra I",
        D: "Luna I",
      },
      answer: "A",
    },
    // ... (continue the same structure for the remaining questions)
    {
      question: "Where is the Headquarters of European Space Agency (ESA)?",
      options: { A: "London", B: "Berlin", C: "Rome", D: "Paris" },
      answer: "D",
    },
    {
      question:
        "In which country is the launching site of the European Space Agency?",
      options: {
        A: "French Guyana",
        B: "Venezuela",
        C: "Puerto Rico",
        D: "Surinam",
      },
      answer: "A",
    },
    {
      question: "Kennedy Space Centre is on Merritt Island in",
      options: { A: "Florida", B: "Texas", C: "Indiana", D: "California" },
      answer: "A",
    },
    {
      question: "Which option gives the correct matching order?",
      options: {
        A: "1B, 2A, 3D, 4C",
        B: "1D, 2A, 3B, 4C",
        C: "1C, 2D, 3B, 4A",
        D: "1C, 2A, 3D, 4B",
      },
      answer: "C",
    },
  ],
  [
    {
      question: "U.N.O.",
      options: {
        A: "United Nations Organisation",
        B: "Utility Number Order",
        C: "Unidentified Nations Organisation",
        D: "United Network Office",
      },
      answer: "A",
    },
    {
      question: "L.S.R.O.",
      options: {
        A: "Indian Scientific Research Organisation",
        B: "International Space Research Organisation",
        C: "Indian Space Research Organisation",
        D: "International Science Research Organisation",
      },
      answer: "C",
    },
    {
      question: "L.M.F.",
      options: {
        A: "Indian Monetary Federation",
        B: "International Monetary Fund",
        C: "International Monetary Federation",
        D: "Indian Monetary Fund",
      },
      answer: "B",
    },
    {
      question: "W.H.O.",
      options: {
        A: "World Heart Organisation",
        B: "World Humanitarian Organisation",
        C: "World Health Office",
        D: "World Health Organisation",
      },
      answer: "D",
    },
    {
      question: "S.A.A.R.C.",
      options: {
        A: "South African Association for Regional Co-operation",
        B: "South American Association for Regional Co-operation",
        C: "South Asian Association for Regional Co-operation",
        D: "South Asian Agricultural Research Council",
      },
      answer: "C",
    },
    {
      question: "A.I.I.M.S",
      options: {
        A: "All India Institute of Medical Sciences",
        B: "All India Institute of Medical Services",
        C: "All India Information Management Services",
        D: "All India Institute of Management Sciences",
      },
      answer: "A",
    },
    {
      question: "T.N.P.S.C.",
      options: {
        A: "Tamil Nadu Police Service Commission",
        B: "Tamil Nadu Public Service Council",
        C: "Tamil Nadu Public Service Commission",
        D: "Tamil Nadu Public Service Committee",
      },
      answer: "C",
    },
    {
      question: "I.S.T.",
      options: {
        A: "Indian Synchronised Time",
        B: "Indian Standard Time",
        C: "Indian Specific Time",
        D: "Indian Space Time",
      },
      answer: "B",
    },
    {
      question: "L.Q.",
      options: {
        A: "Important Questions",
        B: "Intelligence Quotient",
        C: "Information Quest",
        D: "Important Quotient",
      },
      answer: "B",
    },
    {
      question: "N.C.C.",
      options: {
        A: "National Cadet Corps",
        B: "National Cadet Co-operation",
        C: "National Cadet Corpse",
        D: "National Cadet Committee",
      },
      answer: "A",
    },
    {
      question: "P.L.N. (postal)",
      options: {
        A: "Postal Index Number",
        B: "Postal Information Network",
        C: "Postal Information Number",
        D: "Postal Index Name",
      },
      answer: "A",
    },
    {
      question: "R.B.L.",
      options: {
        A: "Research Bureau of India",
        B: "Reconstruction Bank of India",
        C: "Railway Booking Information",
        D: "Reserve Bank of India",
      },
      answer: "D",
    },
    // ... (continue the same structure for the remaining questions)
    {
      question: "S.O.P.",
      options: {
        A: "Standard Operating Procedure",
        B: "Special Operating Procedure",
        C: "Single Operating Procedure",
        D: "Safe Operating Procedure",
      },
      answer: "A",
    },
    {
      question: "Ph.D. (degree)",
      options: {
        A: "Physical Health Degree",
        B: "Personal Health Diploma",
        C: "Doctor of Philosophy",
        D: "Philosophy Doctor",
      },
      answer: "C",
    },
    {
      question: "W/C (facility)",
      options: {
        A: "Waste Cloth",
        B: "Waiting Closet",
        C: "Water Closet",
        D: "Waiting & Cloak",
      },
      answer: "C",
    },
  ],
  [
    {
      question: "Indira Gandhi International Airport is at",
      options: { A: "Mumbai", B: "Kolkata", C: "Chennai", D: "New Delhi" },
      answer: "D",
    },
    {
      question: "Chhatrapati Shivaji International Airport is at",
      options: { A: "Kholapur", B: "Nagpur", C: "Mumbai", D: "Pune" },
      answer: "C",
    },
    {
      question: "Netaji Subash Chandra Bose International Airport is at",
      options: { A: "Durgapur", B: "Kolkata", C: "Haldia", D: "Kharagpur" },
      answer: "B",
    },
    {
      question: "Bengaluru International Airport is named after",
      options: {
        A: "Kempegowda",
        B: "Visvesvaraya",
        C: "Nijalingappa",
        D: "Tipu Sultan",
      },
      answer: "A",
    },
    {
      question: "Sardar Vallabhbhai Patel Airport is at",
      options: { A: "Surat", B: "Ahmedabad", C: "Vadodara", D: "Rajkot" },
      answer: "B",
    },
    {
      question: "Biju Patnaik Airport is at",
      options: { A: "Bhubaneswar", B: "Cuttack", C: "Sambalpur", D: "Puri" },
      answer: "A",
    },
    {
      question: "Rajiv Gandhi International Airport is at",
      options: {
        A: "Vijayawada",
        B: "Visakhapatnam",
        C: "Nellore",
        D: "Hyderabad",
      },
      answer: "D",
    },
    {
      question: "Raj Bhoj Airport is at",
      options: { A: "Gwalior", B: "Indore", C: "Bhopal", D: "Raipur" },
      answer: "C",
    },
    {
      question: "Lokpriya Gopinath Bordoloi Airport is at",
      options: { A: "Guwahati", B: "Silchar", C: "Asansol", D: "Jorhat" },
      answer: "A",
    },
    {
      question: "Swami Vivekanada Airport is at",
      options: { A: "Patiala", B: "Raipur", C: "Bilaspur", D: "Bhilai" },
      answer: "B",
    },
    {
      question: "Jolly Grant Airport is at",
      options: { A: "Darjeeling", B: "Siliguri", C: "Dehradun", D: "Nainital" },
      answer: "C",
    },
    {
      question: "Veer Sarvarkar Airport is at",
      options: { A: "Karavatti", B: "Panaji", C: "Nagpur", D: "Port Blair" },
      answer: "D",
    },
    // ... (continue the same structure for the remaining questions)
    {
      question: "Which is the busiest airport in India?",
      options: {
        A: "Chhatrapati Shivaji International Airport",
        B: "Indira Gandhi International Airport",
        C: "Rajiv Gandhi International Airport",
        D: "Subash Chandra Bose International Airport",
      },
      answer: "B",
    },
    {
      question: "Which is the largest airport in India in terms of area?",
      options: { A: "Hyderabad", B: "Bengaluru", C: "Kolkata", D: "New Delhi" },
      answer: "B",
    },
    {
      question: "Which is the highest airport in India?",
      options: { A: "Leh", B: "Srinagar", C: "Simla", D: "Aizawl" },
      answer: "A",
    },
    {
      question: "Which is the southernmost airport in India?",
      options: {
        A: "Chennai",
        B: "Thiruvananthapuram",
        C: "Port Blair",
        D: "Madurai",
      },
      answer: "B",
    },
    {
      question: "Which option gives the correct match?",
      options: {
        A: "Holkar Airport - Lucknow",
        B: "Charan Singh Airport - Agartala",
        C: "Guru Ramdass Airport - Indore",
        D: "Bir Bikram Airport - Amritsar",
      },
      answer: "B",
    },
  ],
  [
    {
      question: "Who was the first Prime Minister of India?",
      options: {
        A: "Lal Bahadur Shastry",
        B: "Jawaharlal Nehru",
        C: "Gulzarilal Nanda",
        D: "Rajendra Prasad",
      },
      answer: "B",
    },
    {
      question: "Who had been the longest-serving Prime Minister of India?",
      options: {
        A: "Jawaharlal Nehru",
        B: "Rajiv Gandhi",
        C: "Indira Gandhi",
        D: "A.B. Vajpayee",
      },
      answer: "A",
    },
    {
      question: "Jawaharlal Nehru's Birthday is celebrated as",
      options: {
        A: "Parent's Day",
        B: "Children's Day",
        C: "Politician's Day",
        D: "Lawyer's Day",
      },
      answer: "B",
    },
    {
      question: "Who served as Interim Prime Minister of India twice?",
      options: {
        A: "I.K. Gujral",
        B: "Deve Gowda",
        C: "Gulzarilal Nanda",
        D: "Chandrasekhar",
      },
      answer: "C",
    },
    {
      question: "Who was the only Prime Minister to die in a foreign country?",
      options: {
        A: "Jawaharlal Nehru",
        B: "Rajiv Gandhi",
        C: "Indira Gandhi",
        D: "Lal Bahadur Shastry",
      },
      answer: "B",
    },
    {
      question: "Lal Bahadur Shastri is known for his slogan",
      options: {
        A: "Jai Ram",
        B: "Hai Ram",
        C: "Jai Jawan, Jai Kisan",
        D: "Jai Bharat",
      },
      answer: "C",
    },
    {
      question: "Who was known as 'Iron Lady' in Indian politics?",
      options: {
        A: "Suchita Kriplani",
        B: "Sonia Gandhi",
        C: "Vijayalakshmi Pandit",
        D: "Indira Gandhi",
      },
      answer: "D",
    },
    {
      question: "Who was the first Non-Congress Prime Minister?",
      options: {
        A: "Morarji Desai",
        B: "Charan Singh",
        C: "V.P. Singh",
        D: "A.B. Vajpayee",
      },
      answer: "A",
    },
    {
      question:
        "Who was the only Prime Minister who did not face the Parliament?",
      options: {
        A: "V.P. Singh",
        B: "Deve Gowda",
        C: "Charan Singh",
        D: "P.V. Narasimha Rao",
      },
      answer: "B",
    },
    {
      question:
        "Which Prime Minister's birthday is celebrated as 'Farmers' Day'?",
      options: {
        A: "Deve Gowda",
        B: "Lal Bahadur Shastry",
        C: "Charan Singh",
        D: "V.P. Singh",
      },
      answer: "C",
    },
    {
      question: "Who has been the youngest Prime Minister of India?",
      options: {
        A: "Chandrasekhar",
        B: "Indira Gandhi",
        C: "Rajiv Gandhi",
        D: "I.K. Gujral",
      },
      answer: "C",
    },
    {
      question: "Before becoming the Prime Minister, Rajiv Gandhi was a",
      options: { A: "Teacher", B: "Doctor", C: "Army Officer", D: "Pilot" },
      answer: "D",
    },
    {
      question:
        "Which Prime Minister implemented the Mandal Commission for the benefit of the backward classes?",
      options: {
        A: "Chandrasekhar",
        B: "Deve Gowda",
        C: "Narasimha Rao",
        D: "V.P. Singh",
      },
      answer: "D",
    },
    {
      question:
        "To which political party did Prime Minister Chandrasekhar belong?",
      options: {
        A: "Janata Party",
        B: "Janata Dal",
        C: "Samajwadi Janata Party",
        D: "Bharatiya Janata Party",
      },
      answer: "B",
    },
    {
      question: "Who was the first South Indian Prime Minister?",
      options: {
        A: "P.V. Narasimha Rao",
        B: "Deve Gowda",
        C: "Chandrasekhar",
        D: "Charan Singh",
      },
      answer: "A",
    },
    {
      question: "Who was the first BJP Prime Minister?",
      options: {
        A: "A.B. Vajpayee",
        B: "Morarji Desai",
        C: "Chandrasekhar",
        D: "V.P. Singh",
      },
      answer: "A",
    },
    {
      question: "Deve Gowda hailed from",
      options: {
        A: "Andhra Pradesh",
        B: "Kerala",
        C: "Karnataka",
        D: "Madhya Pradesh",
      },
      answer: "C",
    },
    {
      question:
        "Which Prime Minister had earlier been Minister for External Affairs as well as Ambassador to the Soviet Union?",
      options: {
        A: "I.K. Gujral",
        B: "Chandrasekhar",
        C: "V.P. Singh",
        D: "Manmohan Singh",
      },
      answer: "A",
    },
    {
      question:
        "Which Prime Minister had served as the Governor of Reserve Bank?",
      options: {
        A: "Deve Gowda",
        B: "Narasimha Rao",
        C: "V.P. Singh",
        D: "Manmohan Singh",
      },
      answer: "D",
    },
    {
      question:
        "Which of the Prime Ministers and burial place is not matched correctly?",
      options: {
        A: "Jawaharlal Nehru - Shantivan",
        B: "Indira Gandhi - Shakti Sthal",
        C: "Rajiv Gandhi - Vir Bhumi",
        D: "Lal Bahadur Shastri - Raj Ghat",
      },
      answer: "C",
    },
  ],
  [
    {
      question:
        "Which country has introduced the world's first Dual Mode Vehicle (DMV) that can run on roads as well as on steel tracks?",
      options: { A: "UK", B: "USA", C: "Japan", D: "Germany" },
      answer: "C",
    },
    {
      question:
        "Which organization runs the New Development Bank with Headquarters in Shanghai?",
      options: { A: "ASEAN", B: "SAARC", C: "EAU", D: "BRICS" },
      answer: "D",
    },
    {
      question:
        "Which neighboring country has honored Prime Minister Modi with its highest civilian award Ngadag Pelgi Khorlo?",
      options: { A: "Bhutan", B: "Nepal", C: "Bangladesh", D: "Maldives" },
      answer: "A",
    },
    {
      question:
        "Name the South African wicket-keeper who has retired from international cricket recently?",
      options: {
        A: "AB de Villiers",
        B: "Graeme Smith",
        C: "Jacques Kallis",
        D: "Quinton de Kock",
      },
      answer: "D",
    },
    {
      question:
        "Which railway station in Uttar Pradesh has been renamed Veerarangana Laxmibhai Railway Station?",
      options: { A: "Lucknow", B: "Jhansi", C: "Kanpur", D: "Gorakhpur" },
      answer: "B",
    },
    {
      question: "Vladimir Putin visited India in 2021. He is the President of",
      options: { A: "Russia", B: "Ukraine", C: "Estonia", D: "Hungary" },
      answer: "A",
    },
    {
      question: "Rajiv Gandhi Khel Ratna award has been renamed after",
      options: {
        A: "Milka Singh",
        B: "Dara Singh",
        C: "Dhyan Chand",
        D: "C.K. Nayudu",
      },
      answer: "C",
    },
    {
      question: "Which country was voted as the Happiest Country in 2022?",
      options: {
        A: "Finland",
        B: "Switzerland",
        C: "New Zealand",
        D: "Canada",
      },
      answer: "A",
    },
    {
      question: "Which Asian country has the most number of billionaires?",
      options: { A: "China", B: "India", C: "Japan", D: "Singapore" },
      answer: "A",
    },
    {
      question:
        "In February 2021, The Tamil Nadu Government increased the retirement age of Government employees to",
      options: { A: "60", B: "61", C: "62", D: "63" },
      answer: "A",
    },
  ],
  [
    {
      question:
        "The Headquarters of International Cricket Committee (ICC) is in",
      options: { A: "London", B: "Melbourne", C: "Dubai", D: "Mumbai" },
      answer: "C",
    },
    {
      question: "The oldest cricket club in India is",
      options: {
        A: "Calcutta Cricket Club",
        B: "Madras Cricket Club",
        C: "Bombay Cricket Club",
        D: "Delhi Cricket Club",
      },
      answer: "B",
    },
    {
      question: "Which cricket ground is called 'Mecca of Cricket?",
      options: {
        A: "Gabba, Brisbane",
        B: "Lord's, London",
        C: "MCG, Melbourne",
        D: "Kingston, Jamaica",
      },
      answer: "B",
    },
    {
      question: "Where did India play its official first Test Match?",
      options: {
        A: "Lord's, London",
        B: "Eden Gardens, Calcutta",
        C: "SCG, Sydney",
        D: "Chepauk, Madras",
      },
      answer: "A",
    },
    {
      question: "Where was the first Test Match played on Indian soil in 1933?",
      options: { A: "Bombay", B: "Calcutta", C: "Madras", D: "Gwalior" },
      answer: "B",
    },
    {
      question: "Who was the first Test Captain for India?",
      options: {
        A: "Lala Amarnath",
        B: "KSG Limbdi",
        C: "Amar Singh",
        D: "CK Nayudu",
      },
      answer: "D",
    },
    {
      question:
        "Who was the first Indian to score a century on debut in Test Matches?",
      options: {
        A: "CK Nayudu",
        B: "Lala Amarnath",
        C: "MAK Pataudi",
        D: "Vinoo Mankad",
      },
      answer: "A",
    },
    {
      question: "Where was the first ODI played?",
      options: { A: "Melbourne", B: "Mumbai", C: "London", D: "Leeds" },
      answer: "B",
    },
    {
      question:
        "Which two teams played the first T-20 International at Eden Park, Auckland in 2005?",
      options: {
        A: "England and Australia",
        B: "Australia and New Zealand",
        C: "England and New Zealand",
        D: "India and New Zealand",
      },
      answer: "D",
    },
    {
      question: "Which country organized the first ODI World Cup?",
      options: {
        A: "England",
        B: "Australia",
        C: "South Africa",
        D: "Pakistan",
      },
      answer: "A",
    },
    {
      question: "Which country organized the first ICC T-20 World Cup?",
      options: {
        A: "India",
        B: "Sri Lanka",
        C: "South Africa",
        D: "Australia",
      },
      answer: "C",
    },
    {
      question: "Who won the first ODI World Cup in 1975?",
      options: { A: "India", B: "England", C: "West Indies", D: "Australia" },
      answer: "C",
    },
    {
      question: "Which country won the first T-20 World Cup in 2007?",
      options: {
        A: "India",
        B: "South Africa",
        C: "Sri Lanka",
        D: "New Zealand",
      },
      answer: "A",
    },
    {
      question:
        "Which English cricketer is considered 'The Father of Cricket'?",
      options: {
        A: "Neville Thomas",
        B: "WG Grace",
        C: "Don Bradman",
        D: "Walcott",
      },
      answer: "B",
    },
    {
      question: "Who scored the first century in a cricket match?",
      options: {
        A: "Charles Bannerman",
        B: "WG Grace",
        C: "Don Bradman",
        D: "Harry Graham",
      },
      answer: "A",
    },
    {
      question: "Who is the leading run-scorer of all time in Test Matches?",
      options: {
        A: "Brian Lara",
        B: "Ricky Ponting",
        C: "Sachin Tendulkar",
        D: "Sunil Gavaskar",
      },
      answer: "C",
    },
    {
      question: "Who is the leading run-scorer in ODI?",
      options: {
        A: "Sachin Tendulkar",
        B: "Kumar Sangakkara",
        C: "Jayasurya",
        D: "Virat Kohli",
      },
      answer: "A",
    },
    {
      question: "Cricket bats are made of wood.",
      options: { A: "Teak", B: "Oak", C: "Birch", D: "Willow" },
      answer: "D",
    },
    {
      question: "What is the standard length of a cricket pitch?",
      options: { A: "22 yards", B: "18 yards", C: "20 yards", D: "16 yards" },
      answer: "A",
    },
    {
      question: "Which one of the following is not correctly matched?",
      options: {
        A: "Kapil Dev - Haryana Hurricane",
        B: "Jim Laker - All 10 wickets in an innings",
        C: "Shane Warne - New Zealand",
        D: "Brian Lara - West Indies",
      },
      answer: "C",
    },
  ],
];
export default data;
