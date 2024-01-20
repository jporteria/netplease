export default function Header(){

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
            </div>
            <div>Profile</div>
        </div>
    )
}