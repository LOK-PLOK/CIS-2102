import Announcement from "./Annoucement.jsx"
const Annoucements = ({list}) =>{
    const announcements = list.map((announcement) =>{
        return(
            <Announcement announcement = {announcement} key={announcement.id}/>
        )
    })
    return announcements
}

export default Annoucements