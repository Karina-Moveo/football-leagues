import * as _ from 'lodash'
import '../public/static/css/style.scss'
import { Iteam, getLeaguesNames, getTeamsInLeague } from "./services/leagues"

const createTabs: any = async () => {
    const leagueNames = await getLeaguesNames()
    const tabs = document.createElement('div')
    
    const tabList = document.createElement('ul') 
    tabList.classList.add('tabs')
    
    leagueNames.forEach(element => {
        const listItem = document.createElement('li')
        const btn = document.createElement('button')
        btn.tabIndex = leagueNames.indexOf(element)
        btn.id = element
        btn.textContent = element
        btn.addEventListener('click', toggleTab)
        listItem.appendChild(btn)
        tabList.appendChild(listItem)  
    });

    tabs.appendChild(tabList)
    document.body.appendChild(tabs)
}

const toggleTab = async (event: MouseEvent): Promise<void> => {
    if (document.getElementsByClassName('teams-container')[0])
        document.body.removeChild(document.getElementsByClassName('teams-container')[0])
    const target = (event.target as HTMLButtonElement)
    let teamsNames: Array<Iteam> = await getTeamsInLeague(target.innerText)
    const div = document.createElement('div')
    div.classList.add('teams-container')

    teamsNames.forEach(team => {
        const teamElem = document.createElement('p')
        if (team.logo) {
            const logo = document.createElement('img')
            logo.classList.add('logo-container')
            logo.src = team.logo
            teamElem.appendChild(logo)
        }
        teamElem.innerHTML += team.name
        div.appendChild(teamElem)
    });

    document.body.appendChild(div)
    
    console.log(teamsNames)
}


createTabs()
