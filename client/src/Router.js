import React, {
  Suspense,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Write from "./pages/WriteBlog";
import { AuthContext } from "./context/AuthContext";
import axios, { Axios } from "axios";
import { BACKEND_URL } from "./config";

//imports are lazy loaded for better performance and to reduce size of bundle.
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterUser = React.lazy(() => import("./containers/Registration"));

const LoginUser = React.lazy(() => import("./containers/Login"));
const ItineraryPage = React.lazy(() =>
  import("./pages/Itinerary/ItineraryPage")
);
const BucketList = React.lazy(() => import("./pages/BucketList"));
const DayItineraryPage = React.lazy(() =>
  import("./pages/Itinerary/DayItineraryPage")
);
const CityItineraryPage = React.lazy(() =>
  import("./pages/Itinerary/CityItineraryPage")
);
const TripPlannerPage = React.lazy(() => import("./pages/TripPlannerPage"));
const City = React.lazy(() => import("./pages/Plan/City"));
const Travel = React.lazy(() => import("./pages/Plan/Travel"));
const Itinerary = React.lazy(() => import("./pages/Plan/Itinerary"));
const Destinations = React.lazy(() => import("./pages/Destinations"));
const Destination = React.lazy(() => import("./pages/Destination"));
const ThingsToCarryPage = React.lazy(() => import("./pages/ThingsToCarryPage"));
const AccommodationPage = React.lazy(() => import("./pages/AccommodationListPage"));
const ActivitiesToDoMainPage = React.lazy(() =>
  import("./pages/ActivitiesToDoListPage")
);

const UserProfile = React.lazy(() => import("./pages/UserProfilePage"));
const Blogs = React.lazy(() => import("./pages/UserDashboardBlog"));
const SearchFlights = React.lazy(() => import("./pages/SearchFlights"));
const ViewBlog = React.lazy(() => import("./pages/ViewBlog"));
const BlogList = React.lazy(() => import("./pages/BlogList"));

const Flags = React.lazy(() => import("./pages/UserDashboardFlag"));
const Plans = React.lazy(() => import("./pages/UserDashboardPlan"));

const MyPlan = React.lazy(() => import("./pages/Plan/index"));

let logoutTimer;

function Router() {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(null);
  const [userProfileData, setUserProfileData] = useState([]);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);

  const fetchUserProfile = async (email) => {
    const res = await axios.post(`${BACKEND_URL}/user/userProfile`, {
      email: email,
    });
    setUserProfileData(res.data);
    setUserId(email);
    return res.data;
  };

  const loadUserProfile = useCallback(
    (id) => {
      if (!id) {
        let user = JSON.parse(localStorage.getItem("userData"));
        fetchUserProfile(user.userId);
      }
    },
    [userId]
  );

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("profileData");
    let token = null;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    // setIsloading(false)
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
        loadUserProfile: loadUserProfile,
        userProfileData: userProfileData,
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <HomePage />;
              }}
            />
            <Route
              exact
              path="/destination/:code"
              render={() => {
                return <Destination />;
              }}
            />
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/login" component={LoginUser} />

            <Route
              exact
              path="/destinations/:code"
              render={() => {
                return <Destinations />;
              }}
            />
            <Route
              exact
              path="/destinations/"
              render={() => {
                return <Destinations />;
              }}
            />
            <Route
              exact
              path="/itinerary"
              render={() => {
                return <ItineraryPage />;
              }}
            />
            <Route
              exact
              path="/cityItinerary"
              render={() => {
                return <CityItineraryPage />;
              }}
            />
            <Route
              exact
              path="/dayItinerary"
              render={() => {
                return <DayItineraryPage />;
              }}
            />
            <Route
              exact
              path="/trip-planner"
              render={() => {
                return <TripPlannerPage />;
              }}
            />
            <Route
              exact
              path="/myPlan"
              render={() => {
                return <MyPlan />;
              }}
            />
            <Route
              exact
              path="/trip-planner/plan"
              render={() => {
                return <City />;
              }}
            />
            <Route
              exact
              path="/trip-planner/travel"
              render={() => {
                return <Travel />;
              }}
            />
            <Route
              exact
              path="/trip-planner/itinerary"
              render={() => {
                return <Itinerary />;
              }}
            />
            <Route
              exact
              path="/thingstocarry"
              render={() => {
                return <ThingsToCarryPage />;
              }}
            />
            <Route
              exact
              path="/accommodation"
              render={() => {
                return <AccommodationPage />;
              }}
            />
            <Route
              exact
              path="/accommodation/:code"
              render={() => {
                return <AccommodationPage />;
              }}
            />
            <Route
              exact
              path="/userdashboard"
              render={() => {
                return <UserProfile />;
              }}
            />
            
            <Route
              exact
              path="/userdashboard-blogs"
              render={() => {
                return <Blogs />;
              }}
            />
            <Route
              exact
              path="/activities"
              render={() => {
                return <ActivitiesToDoMainPage />;
              }}
            />
            <Route
              exact
              path="/flights"
              render={() => {
                return <SearchFlights />;
              }}
            />

            <Route
              exact
              path="/view-blogs/:id"
              render={() => {
                return <ViewBlog />;
              }}
            />
            <Route
              exact
              path="/write-blog"
              render={() => {
                return <Write />;
              }}
            />
            <Route
              exact
              path="/userdashboard-bucketlist"
              render={() => {
                return <BucketList />;
              }}
            />
            <Route
              exact
              path="/blog-list"
              render={() => {
                return <BlogList />;
              }}
            />
            <Route
              exact
              path="/destination/:code"
              render={() => {
                return <Destination />;
              }}
            />
            <Route
              exact
              path="/userdashboard-flags"
              render={() => {
                return <Flags />;
              }}
            />
            <Route
              exact
              path="/userdashboard-plans"
              render={() => {
                return <Plans />;
              }}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default Router;
