import React from 'react'
import { isAuthenTicate } from '../../auth/Index'
const UserDashboard = () => {
    const { user } = isAuthenTicate();
    return (
        <div>
            <div className="card">
                <div className="card-header">Thông tin user</div>
                <ul className="list-group">
                    <li className="list-group-item">Name: {user.name}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                    <li className="list-group-item">{user.role == 1 ? 'Admin' : 'Register user'}</li>
                </ul>
            </div>
        </div>
    )
}

export default UserDashboard
