import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import First_tab from '../components/Feed/FeedItem'
import * as feedActions from '../actions/feed'
import * as drawerActions from '../actions/drawer'
import {searchFriends} from '../actions/friends'


function stateToProps(state) {
    let { feed, clapitAccountData, friends, navigationState, drawer } = state
    let {items, itemsById, fetchingData, reloading, error, page} = feed
    return { items, itemsById, fetchingData, reloading, error, clapitAccountData, page, friends, navigationState, drawer}
}

function dispatchToProps(dispatch) {

    let actions = Object.assign({searchFriends}, feedActions, drawerActions)

    return bindActionCreators(actions, dispatch)
}

export default connect(stateToProps, dispatchToProps)(First_tab)
