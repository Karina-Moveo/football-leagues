const theSportsDB = require('thesportsdb');

export interface Iteam {
    name: string,
    logo: string    
}

export const getLeaguesNames = async (): Promise<Array<string>> => {
    let leagueNames: Array<string> = []
    theSportsDB.setApiKey(2)
    const leagues = await theSportsDB.getLeagueListByCountry("England", "Soccer")
    leagues.countries.slice(2, 7).forEach((element: { strLeague: string; }) => {
        leagueNames.push(element.strLeague)
    });
    return leagueNames
}

export const getTeamsInLeague = async (leagueName: string) : Promise<Array<Iteam>> => {
    let teamsNames: Array<Iteam> = []
    theSportsDB.setApiKey(2)
    const teams = await theSportsDB.getTeamsByLeagueName(leagueName)
    teams.teams.forEach((element: { strTeam: string; strTeamLogo: string; }) => {
        let tempTeam: Iteam = {} as Iteam
        tempTeam.name = element.strTeam
        tempTeam.logo = element.strTeamLogo
        teamsNames.push(tempTeam)
    });
    
    return teamsNames
}

