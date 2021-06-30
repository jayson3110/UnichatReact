import React from 'react'
import {useHistory} from 'react-router-dom'
import {ChatEngine} from 'react-chat-engine'
import {auth} from '../firebase';
import {useAuth} from '../contexts/AuthContext';


export default function Chats() {
	const history = useHistory()
	const {user} = useAuth();

	console.log(user);

	const handleLogout = async () => {
      
		await auth.signOut();
		history.push('/');
	}
	return (
		<div>


		    <div className="chats-page">
		        <div className="nav-bar">
		            <div className="logo-tab">
		               Unichat
		            </div>
		            <div onClick={handleLogout} className="logout-tab">

		                Logout

		            </div>


		        </div>
		        <ChatEngine height="calc(100vh-66px)" projectId="86eeb6d3-a339-4785-9f73-ef5c25813206" userName="." userSecret="." />
		    </div>


			
		</div>
	)
}