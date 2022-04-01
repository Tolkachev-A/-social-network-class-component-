import {connect} from 'react-redux';
import Users from './Users/Users';
import React from 'react';
import Loading from '../../Сommon/Loading/Loading';
import {
     follow, onFollow,
    setUsers, toggelUsersBtnDisablet,
} from "../../state/usersReduser";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsBtnDisablet,
    getIsLoading,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../state/selector/selerctorUsers";




class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanget = (pageNamber) => {
        this.props.setUsers(pageNamber,this.props.pageSize)
    }


    render() {

        return <>
            {this.props.isLoading ? <Loading/> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanget={this.onPageChanget}
                   follow={this.props.follow}
                   onFollow={this.props.onFollow}
                   toggelUsersBtnDisablet={this.props.toggelUsersBtnDisablet}
                   isBtnDisablet={this.props.isBtnDisablet}

            />
        </>

    }

}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        isBtnDisablet:getIsBtnDisablet(state),

    }
}



export default compose(
    connect(mapStateToProps,{follow,onFollow,toggelUsersBtnDisablet,setUsers})
)(UsersComponent);
