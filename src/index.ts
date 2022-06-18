import * as _ from 'lodash';
import { getLeaguesNames } from "./services/leagues"

const createTabs: any = async () => {
    const leagueNames = await getLeaguesNames()
    const tabs = document.createElement('div')
    tabs.className = "tabs-container"

    const tabList = document.createElement('ul') 
    
    leagueNames.forEach(element => {
        const listItem = document.createElement('li')
        const btn = document.createElement('button')
        btn.tabIndex = leagueNames.indexOf(element)
        btn.textContent = element
        listItem.appendChild(btn)
        tabList.appendChild(listItem)    
    });

    tabs.appendChild(tabList)
    document.body.appendChild(tabs)
}

createTabs()
