import React from 'react'
import '../styles/Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import StorefrontIcon from '@material-ui/icons/Storefront'
import MovieIcon from '@material-ui/icons/Movie'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import HistoryIcon from '@material-ui/icons/History'
import GroupIcon from '@material-ui/icons/Group'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div>
            <SidebarRow title={user.displayName} src={user.photoURL} />

            <SidebarRow
                title="COVID-19 Information Center"
                Icon={LocalHospitalIcon}
            />

            <SidebarRow title="Friends" Icon={PeopleAltIcon} />

            <SidebarRow title="Groups" Icon={GroupIcon} />

            <SidebarRow title="Marketplace" Icon={StorefrontIcon} />

            <SidebarRow title="Watch" Icon={MovieIcon} />

            <SidebarRow title="Events" Icon={CalendarTodayIcon} />
            <SidebarRow title="Memories" Icon={HistoryIcon} />

            <SidebarRow title="Saved" Icon={BookmarkIcon} />
        </div>
    )
}

export default Sidebar
