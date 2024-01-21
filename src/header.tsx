export default function Header(props){

    function GoToHomePage()
        {
            window.location = '/';   
        }

    return(
        <div className="header">
            <div className="site--name"
                onClick={GoToHomePage}
            >
                <img className="header--logo" src="../image/jc.jpg" />Netplease
            </div>
            <div className="header--movies">
                <p>Popular Movies</p>
                <p>Upcoming Movies</p>
                <p>TV Series</p>
                <p>Top Rated TV Series</p>
                <div className="header--search">
                    <input 
                        type="text" 
                        className="searchField"
                        onChange={props.handleChange}
                        value={props.searchText.title}
                    />
                    <button 
                        className="searchButton" 
                        style={{backgroundImage:"url('../image/search.png')", 
                        backgroundSize: "cover"}}>  
                    </button>
                </div>
            </div>
            <div className="header--user">
                <div className="user--login">
                    Login
                </div>
                <div className="user--signUp">
                    Sign Up
                </div>
            </div>
        </div>
    )
}