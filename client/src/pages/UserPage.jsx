import Account from "../components/Account"
import { useSelector } from 'react-redux'
import { userPageData } from "../utils/mockData";
import { LayoutAdmin } from "../components/LayoutAdmin";
import Input from "../components/input";
import { Fragment, useState } from "react";

function UserPage() {
    const { firstName, lastName } = useSelector((state) => state.userReducer);
    const [updateFirstName, setUpdateFirstName] = useState(firstName)
    const [updateLastName, setUpdateLastName] = useState(lastName)
    const [update, setUpdate] = useState(false)
    const handleUpdate = () => {
        setUpdate(!update)
    }
    const handleValidate = () => {
    }
    const MODE_ENV = 'development'
    let userDetails
    if (MODE_ENV) {
        userPageData?.find((user) => {

            if (user.firstName === firstName && user.lastName === lastName) {
                userDetails = user.accountDetails
            }
            return userDetails
        })
        console.log(userDetails)
    }

    const { checking } = userDetails
    const { creditCard } = userDetails
    const { savings } = userDetails

    return (
        <LayoutAdmin>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back</h1>
                    {update ?
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