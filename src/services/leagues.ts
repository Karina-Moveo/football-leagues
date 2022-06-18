const theSportsDB = require('thesportsdb');

export const getFiveLeagues = async (): Promise<any> => {
    let leagueNames: Array<string> = []
    theSportsDB.setApiKey(2)
    const leagues = await theSportsDB.getLeagueListByCountry("Brazil", "Soccer")
    leagues.countries.forEach((element: { strLeague: string; }) => {
        leagueNames.push(element.strLeague)
    });
    return leagueNames
 
}

