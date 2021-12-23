const Dashboard = (props) => {
    const handleLogout =() =>{
        props.history.push('/login');
    }
    return (
        <div className="dash">
            Welcome user<br/><br/>
            <input type="button" value="logout"
            onClick={handleLogout}/>
        </div>
    )
}

export default Dashboard
