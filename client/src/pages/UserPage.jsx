import Account from "../components/Account"
import { useSelector } from 'react-redux'
import { userPageData } from "../utils/mockData";
import { LayoutAdmin } from "../components/LayoutAdmin";
import Input from "../components/input";

function UserPage() {
    const { firstName, lastName } = useSelector((state) => state.userReducer);
    let userDetails
    userPageData.find((user) => {
        if (user.firstName === firstName && user.lastName === lastName) {
            userDetails = user?.accountDetails
        }
        return userDetails
    })
    console.log(userDetails)

    return (
        <LayoutAdmin>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back</h1>
                    <div className="nameInput">
                        <Input value={firstName} />
                        <Input value={lastName} />
                    </div>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account
                    title={userDetails.checking.title}
                    amount={userDetails.checking.amount}
                    description={userDetails.checking.description}
                />
                <Account
                    title={userDetails.savings.title}
                    amount={userDetails.savings.amount}
                    description={userDetails.savings.description}
                />
                <Account
                    title={userDetails.creditCard.title}
                    amount={userDetails.creditCard.amount}
                    description={userDetails.creditCard.description}
                />
            </main>
        </LayoutAdmin>
    )
}

export default UserPage