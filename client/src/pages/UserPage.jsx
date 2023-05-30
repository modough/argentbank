import Account from "../components/Account"
import { useDispatch, useSelector } from 'react-redux'
import { userPageData } from "../utils/mockData";
import { LayoutAdmin } from "../components/LayoutAdmin";
import Input from "../components/input";
import { useState } from "react";
import { updateUser } from "../features/authSliceReducer";
import { updateUserData } from "../features/fetchData";




function UserPage() {
    // Pre populate the existing user data from the store
    const { firstName, lastName, id, token } = useSelector((state) => state.userReducer);
    const [updateFirstName, setUpdateFirstName] = useState(firstName)
    const [updateLastName, setUpdateLastName] = useState(lastName)
    const [update, setUpdate] = useState(false)
    // Dispatch action
    const dispatch = useDispatch()
    const handleUpdate = () => {
        setUpdate(!update)
    }
    const handleValidate = async () => {
        let updateInfos = {
            updateFirstName,
            updateLastName,
            token
        }

        dispatch(updateUser(updateInfos))
        dispatch(updateUserData(updateInfos))
        setUpdate(!update)


    }

    const MODE_ENV = 'development'
    let userDetails
    if (MODE_ENV === 'development') {
        userPageData?.find((user) => {
            if (user.id === id) {
                userDetails = user.accountDetails
            }
            return userDetails
        })
    }

    const { checking } = userDetails
    const { creditCard } = userDetails
    const { savings } = userDetails

    return (
        <LayoutAdmin>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back</h1>
                    {
                        update ?
                            <div className="nameInput">
                                <div className="name">
                                    <Input value={updateFirstName} action={(e) => setUpdateFirstName(e.target.value)} />
                                    <Input value={updateLastName} action={(e) => setUpdateLastName(e.target.value)} />
                                </div>
                                <button className="validate-button" onClick={handleValidate}>Validate</button>
                            </div> :
                            <div className="nameInput">
                                <h1 className="name">{`${firstName} ${lastName}`}</h1>
                                <button className="edit-button" onClick={handleUpdate}>Edit Name</button>
                            </div>
                    }
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account
                    title={checking.title}
                    amount={checking.amount}
                    description={checking.description}
                />
                <Account
                    title={savings.title}
                    amount={savings.amount}
                    description={savings.description}
                />
                <Account
                    title={creditCard.title}
                    amount={creditCard.amount}
                    description={creditCard.description}
                />
            </main>
        </LayoutAdmin>
    )
}

export default UserPage