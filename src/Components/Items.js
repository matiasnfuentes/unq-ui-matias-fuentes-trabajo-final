const Bucks = { id: "Bucks", img: "./img/Bucks.gif" }
const Bulls = { id: "Bulls", img: "./img/Bulls.gif" }
const Cavaliers = { id: "Cavaliers", img: "./img/Cavaliers.gif" }
const Celtics = { id: "Celtics", img: "./img/Celtics.gif" }
const Clippers = { id: "Clippers", img: "./img/Clippers.gif" }
const Finals = { id: "Finals", img: "./img/Finals.gif" }
const Grizzlies = { id: "Grizzlies", img: "./img/Grizzlies.gif" }
const Hawks = { id: "Hawks", img: "./img/Hawks.gif" }
const Heat = { id: "Heat", img: "./img/Heat.gif" }
const Hornets = { id: "Hornets", img: "./img/Hornets.gif" }
const Indiana = { id: "Indiana", img: "./img/Indiana.gif" }
const Jazz = { id: "Jazz", img: "./img/Jazz.gif" }
const Kings = { id: "Kings", img: "./img/Kings.gif" }
const Knicks = { id: "Knicks", img: "./img/Knicks.gif" }
const Lakers = { id: "Lakers", img: "./img/Lakers.gif" }
const Magic = { id: "Magic", img: "./img/Magic.gif" }
const Mavericks = { id: "Mavericks", img: "./img/Mavericks.gif" }
const Nba = { id: "Nba", img: "./img/Nba.gif" }
const Nets = { id: "Nets", img: "./img/Nets.gif" }
const Nuggets = { id: "Nuggets", img: "./img/Nuggets.gif" }
const Pelicans = { id: "Pelicans", img: "./img/Pelicans.gif" }
const Pistons = { id: "Pistons", img: "./img/Pistons.gif" }
const Raptors = { id: "Raptors", img: "./img/Raptors.gif" }
const Rockets = { id: "Rockets", img: "./img/Rockets.gif" }
const Sixers = { id: "Sixers", img: "./img/Sixers.gif" }
const Spurs = { id: "Spurs", img: "./img/Spurs.gif" }
const Suns = { id: "Suns", img: "./img/Suns.gif" }
const Thunder = { id: "Thunder", img: "./img/Thunder.gif" }
const Timberwolves = { id: "Timberwolves", img: "./img/Timberwolves.gif" }
const TrailBlazers = { id: "TrailBlazers", img: "./img/TrailBlazers.gif" }
const Warriors = { id: "Warriors", img: "./img/Warriors.gif" }
const Wizzards = { id: "Wizzards", img: "./img/Wizzards.gif" }

const items = [
    Bucks, Bulls, Cavaliers, Celtics, Clippers, Finals, Grizzlies, 
    Hawks, Heat, Hornets, Indiana, Jazz, Kings, Knicks, Lakers, 
    Magic, Mavericks, Nba, Nets, Nuggets, Pelicans, Pistons, Raptors,
    Rockets, Sixers, Spurs, Suns, Thunder, Timberwolves, TrailBlazers, 
    Warriors, Wizzards
]

const getRandom = (quantity) => [...items].sort(() => 0.5 - Math.random()).slice(0, quantity);

export default getRandom;