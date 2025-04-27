const historyBooks = [
    {
        name: "The History of the World",
        publishYear: 1998,
        generation: "Modern",
        edition: "3rd",
        author: "J. M. Roberts"
    },{
        name: "A People's History of the United States",
        publishYear: 1980,
        generation: "Contemporary",
        edition: "1st",
        author: "Howard Zinn"
    },
    {
        name: "Guns, Germs, and Steel",
        publishYear: 1997,
        generation: "Modern",
        edition: "2nd",
        author: "Jared Diamond"
    },
    {
        name: "The Silk Roads",
        publishYear: 2015,
        generation: "Contemporary",
        edition: "1st",
        author: "Peter Frankopan"
    },
    {
        name: "The Muqaddimah",
        publishYear: 1377,
        generation: "Classical",
        edition: "Original",
        author: "Ibn Khaldun"
    },
    {
        name: "Postwar: A History of Europe Since 1945",
        publishYear: 2005,
        generation: "Modern",
        edition: "1st",
        author: "Tony Judt"
    },
    {
        name: "SPQR: A History of Ancient Rome",
        publishYear: 2015,
        generation: "Contemporary",
        edition: "1st",
        author: "Mary Beard"
    },
    {
        name: "The Crusades: The Authoritative History",
        publishYear: 2005,
        generation: "Modern",
        edition: "2nd",
        author: "Thomas Asbridge"
    },
    {
        name: "The Ottoman Empire and the World Around It",
        publishYear: 2004,
        generation: "Modern",
        edition: "1st",
        author: "Suraiya Faroqhi"
    },
    {
        name: "Destiny Disrupted",
        publishYear: 2009,
        generation: "Modern",
        edition: "1st",
        author: "Tamim Ansary"
    },
    {
        name: "Ancient Civilizations",
        publishYear: 1995,
        generation: "Modern",
        edition: "4th",
        author: "Christopher Scarre"
    },
    {
        name: "India: A History",
        publishYear: 2000,
        generation: "Modern",
        edition: "1st",
        author: "John Keay"
    },
    {
        name: "The Great Game",
        publishYear: 1990,
        generation: "Modern",
        edition: "1st",
        author: "Peter Hopkirk"
    },
    {
        name: "The British Empire: A History",
        publishYear: 1998,
        generation: "Modern",
        edition: "3rd",
        author: "Denis Judd"
    },
    {
        name: "Jerusalem: The Biography",
        publishYear: 2011,
        generation: "Contemporary",
        edition: "1st",
        author: "Simon Sebag Montefiore"
    },
    {
        name: "The Rise and Fall of the Third Reich",
        publishYear: 1960,
        generation: "Modern",
        edition: "1st",
        author: "William L. Shirer"
    },
    {
        name: "The History of India",
        publishYear: 2007,
        generation: "Modern",
        edition: "2nd",
        author: "Romila Thapar"
    },
    {
        name: "Collapse: How Societies Choose to Fail or Succeed",
        publishYear: 2005,
        generation: "Modern",
        edition: "1st",
        author: "Jared Diamond"
    },
    {
        name: "Empires of the Sea",
        publishYear: 2008,
        generation: "Modern",
        edition: "1st",
        author: "Roger Crowley"
    },
    {
        name: "The Early Islamic Conquests",
        publishYear: 1981,
        generation: "Classical",
        edition: "1st",
        author: "Fred M. Donner"
    },
    {
        name: "Islamic Empires: Fifteen Cities",
        publishYear: 2020,
        generation: "Contemporary",
        edition: "1st",
        author: "Justin Marozzi"
    },
    {
        name: "The Caliphate: Its Rise, Decline, and Fall",
        publishYear: 1924,
        generation: "Classical",
        edition: "Original",
        author: "Sir William Muir"
    },
    {
        name: "A History of the Arab Peoples",
        publishYear: 1991,
        generation: "Modern",
        edition: "1st",
        author: "Tanveer"
    },
    {
        name: "The Roman Empire and the Silk Routes",
        publishYear: 2017,
        generation: "Modern",
        edition: "1st",
        author: "Raoul McLaughlin"
    },
    {
        name: "The Crusader States",
        publishYear: 2016,
        generation: "Contemporary",
        edition: "1st",
        author: "Malcolm Barber"
    },
    {
        name: "The Fall of Constantinople",
        publishYear: 1453,
        generation: "Classical",
        edition: "Original",
        author: "Steven Runciman"
    },
    {
        name: "The Arabs: A History",
        publishYear: 2009,
        generation: "Modern",
        edition: "1st",
        author: "Eugene Rogan"
    },
    {
        name: "The Cambridge History of Islam",
        publishYear: 1977,
        generation: "Modern",
        edition: "1st",
        author: "P.M. Holt"
    },
    {
        name: "Byzantium: The Surprising Life of a Medieval Empire",
        publishYear: 2007,
        generation: "Modern",
        edition: "1st",
        author: "Judith Herrin"
    },
    {
        name: "Medieval Europe",
        publishYear: 2015,
        generation: "Contemporary",
        edition: "1st",
        author: "Chris Wickham"
    },
    {
        name: "The Great War for Civilisation",
        publishYear: 2005,
        generation: "Modern",
        edition: "1st",
        author: "Robert Fisk"
    },
    {
        name: "A History of the Arab Peoples",
        publishYear: 1991,
        generation: "Modern",
        edition: "1st",
        author: "Albert Hourani"
    }
];


// console.log(historyBooks[0]);

const books_print = historyBooks.filter( (bk) => {
    return bk.generation === "Classical";
} );
console.log(books_print);