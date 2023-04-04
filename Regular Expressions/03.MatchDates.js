function matchDates(text){
    let regEx = /(?<day>\d{2})(?<del>[\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    let validMatche;

    while((validMatche = regEx.exec(text)) !== null){
        let day = validMatche.groups.day;
        let month = validMatche.groups.month;
        let year = validMatche.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        
    }

}
matchDates()