import * as _ from 'lodash'
import '../public/static/css/style.scss'
import { getLeaguesNames } from "./services/leagues"

const createTabs: any = async () => {
    const leagueNames = await getLeaguesNames()
    const tabs = document.createElement('div')
    
    const tabList = document.createElement('ul') 
    tabList.classList.add('tabs')
    
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
