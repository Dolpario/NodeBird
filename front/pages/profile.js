import React from 'react';
import Head from 'next/head'

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{nickname:'돌파리오'}, {nickname: 'dolpario'}, {nickname:'Dolpario'}]
    const followingList = [{nickname:'돌파리오'}, {nickname: 'dolpario'}, {nickname:'Dolpario'}]
    return (
        <>
            <Head>
                <title>내프로필 | NordBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    )
}
export default Profile