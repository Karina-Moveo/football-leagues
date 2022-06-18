import { getFiveLeagues } from "./services/leagues"

const displayLeagues = async () => {
    const text = await getFiveLeagues()
    console.log(text)
}

displayLeagues()