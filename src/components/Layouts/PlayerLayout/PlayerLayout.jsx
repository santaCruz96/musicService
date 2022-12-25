import { Outlet } from 'react-router-dom'
import Player from '../../Player/Player/Player'
import refreshToken from '../../../utils/refreshToken'

function PlayerLayout() {
    refreshToken()

    return (
        <main>
            <Outlet />
            <Player />
        </main>
    )
}

export default PlayerLayout
