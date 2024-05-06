import { NavLink, Outlet } from "react-router-dom";
import Searched from "./searched";
import { useContext, useState } from "react";
import AuthForm from "./user/authForm";
import { MovieContext } from "./App";
//import { MovieContext } from "./App";

export default function Header(){

    function GoToHomePage(){
            window.location.href = '/';   
        }

        const { setAuth, user, setUser } = useContext(MovieContext)


        const [searchedMovie, setSearchedMovie] = useState([])
        const [searchText, setSearchText] = useState({title:""})
        
        const getSearchedMovie = () => {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.title}&api_key=649f645abf4721a3027659369cc67c24`)
            .then(response => response.json())
            .then(data => setSearchedMovie(data.results))
        }


            function handleChange(event: { target: { value: any; }; }){
            const { value } = event.target
            setSearchText(prevSearch => ({
                ...prevSearch,
                title: value
            }))
                getSearchedMovie()
            }

        const [focused, setFocused] = useState(false)
        const onFocus = () => setFocused(true)
        const onBlur = () => setFocused(false)

        // const [auth, setAuth] = useState('')
        // const [user, setUser] = useState({firstName: '', lastName: '', email: '', password: ''})
        
        console.log(user)

        function showSignUpForm(){
            const auth = document.getElementById('showAuthForm')
            if(auth){
                auth.className = "auth--form--show"
            }
            setAuth('Signup')
        }
        function showLoginForm(){
            const auth = document.getElementById('showAuthForm')
            if(auth){
                auth.className = "auth--form--show"
            }
            setAuth('Login')
        }

        const [userProfile, setUserProfile] = useState('user--profile')
        function showUserProfile(){
            if(userProfile == 'user--profile'){
                setUserProfile('show--user--profile')
            }else{
                setUserProfile('user--profile')
            }
        }

    return(
        <div className="top">
            {/* <div className='viewError'>
                    <h1>For better experience, please use desktop view mode</h1>
            </div> */}
        <div className="header">
            <div className="site--name"
                onClick={GoToHomePage}
            >
                {/* <img className="header--logo" src="../image/jc.jpg" /> */}
                Netplease
            </div>
            <div className="header--movies">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/popularMovies">Popular Movies</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/upcomingMovies">Upcoming Movies</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/tvSeries">TV Series</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/topRatedTvSeries">Top Rated TV Series</NavLink>
                <div className="header--search">
                    <input 
                        onBlur={onBlur}
                        onFocus={onFocus}
                        type="search"
                        placeholder="Search"
                        className="searchField"
                        onChange={handleChange}
                        value={searchText.title}
                    />
                    {/* <button 
                        className="searchButton" 
                        style={{backgroundImage:"url('../image/search.png')", 
                        backgroundSize: "cover"}}>  
                    </button> */}
                </div>
            </div>
                {
                    user.firstName 
                    ? 
                    <div className="header--user" onClick={showUserProfile}>
                        <img className='user--icon' src="../image/user.png" alt="no user" />
                    </div> 
                    : 
                    <div className="header--user">
                        <div className='user--signUp' onClick={showSignUpForm}>
                            Sign Up
                        </div>
                        <div className="user--login" onClick={showLoginForm}>
                            Login
                        </div>
                    </div>
                }
        </div>
        <div className={userProfile}>
            <div className="user--name">{`${user.firstName} ${user.lastName}`}</div>
            <div className="user--options">
                <div className="watchList">Watch List</div>
                <div className="reviews">Reviews</div>
                <div className="settings">Account Settings</div>
                <div className="logout" onClick={() => {setUser({firstName: '', lastName: '', email: '', password: ''}), setUserProfile('user--profile')}}>Logout</div>
            </div>
        </div>
        <Searched 
        searchedMovie={searchedMovie}
        focused={focused}
        />
        <AuthForm />
    <Outlet />
    </div>
    )
}