import React from "react";
import {connect} from "react-redux";
import {
    getStatusUsersProfile,
    getUsersProfile,
    setTextMyPost,
    updateStatusUserProfile
} from "../../state/myPostReduser";
import MyPost from "./MyPost/MyPost";
import Post from "./MyPost/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useParams, Navigate} from "react-router-dom";
import {compose} from "redux";


class Profile extends React.Component {

    componentDidMount() {
        let userId = this.props.userId
        this.props.getUsersProfile(userId)
        this.props.getStatusUsersProfile(userId)

    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.props.getUsersProfile(this.props.userId)
            this.props.getStatusUsersProfile(this.props.userId)
        }
    }


    render() {
        return <>
            <ProfileInfo profile={this.props.profile} status={this.props.status}
                         updateStatusUserProfile={this.props.updateStatusUserProfile}/>
            <MyPost setTextMyPost={this.props.setTextMyPost}
            />
            <Post postData={this.props.postData}/>
        </>

    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.myPostPage.postData,
        profile: state.myPostPage.profile,
        userId: state.login.userId,
        status: state.myPostPage.status
    }
}

function UserIdUrl(props) {
    let params = useParams();
    if (!params.userId) {
        if (props.userId) {debugger
              params.userId = props.userId
        }
        else if (!props.userId) {
            return <Navigate to={"/login"}/>
        }
    }
    let urlId = params.userId
    return <>
        <Profile  {...props} userId={urlId}/>
    </>
}


export default compose(
    connect(mapStateToProps, {
        setTextMyPost,
        updateStatusUserProfile, getUsersProfile, getStatusUsersProfile
    }),
)(UserIdUrl)