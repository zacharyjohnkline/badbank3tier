function App(){
    return(<>
        <HashRouter>
            <div>
                {loggedInUser && <Navbar loggedInUser={loggedInUser}/>}
                <div className="container" style={{padding: '20px'}}>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount/" component={CreateAccount} />
                    <Route path="/Login/" component={Login} />
                    <Route path="/Alldata/" component={AllData} />
                    <Route path="/MyAccount/" component={MyAccount}/>
                    <Route path="/Deposit/" component={Deposit}/>
                    <Route path="/Withdraw/" component={Withdraw}/>
                    <Route path="/Balance/" component={Balance}/>
                </div>
            </div>
        </HashRouter>
    </>);
}