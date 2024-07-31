const App = () => {
    return (
        <div className="container text-center">
            <h1>Determine the best course for you using AI</h1>
            <button className="btn btn-success mb-4">Create Account</button>
            <div className="dashboard">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Dashboard</h2>
                        <div className="course">
                            <h3>Course: How to manage money</h3>
                            <p>Type: Finance</p>
                            <p>Our ranking: #19</p>
                        </div>
                        <div className="course">
                            <h3>Course: Learn Finance with AI</h3>
                            <p>Type: Finance</p>
                            <p>Our ranking: #29</p>
                        </div>
                        <div className="course">
                            <h3>Course: Save your pocket</h3>
                            <p>Type: Finance</p>
                            <p>Our ranking: #39</p>
                        </div>
                    </div>
                </div>
                <div className="user-info">
                    <div className="user-details">
                        <img src="https://via.placeholder.com/50" alt="User Avatar" className="user-avatar" />
                        <p>Donald Trump</p>
                        <p>donald2020@gmail.com</p>
                    </div>
                    <div className="user-settings">
                        <h4>Your course ratings</h4>
                        <div className="chart">
                            {/* Placeholder for chart */}
                        </div>
                        <button className="btn btn-secondary">Update Profile</button>
                        <button className="btn btn-secondary">View Purchases</button>
                        <button className="btn btn-danger">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
