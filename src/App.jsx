import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Forms/Login";
import Sign_up from "./Components/Forms/Sign_up";
import Quote from "./Components/Home/Quote";
import About from "./Components/About_Us/About";
import News from "./Components/News/News";
import Contact_Us from "./Components/Contact_Us/Contact_Us";
import Email_verification from "./Components/Forms/Email_verification";
import ChangeRole from "./Components/Forms/ChangeRole";
import Boost from "./Components/Home/Boost-Profile/Boost";
import ProfileView from "./Components/Home/Boost-Profile/ProfileView";
import PaymentMethod from "./Components/Home/Boost-Profile/PaymentMethod";
import Event from "./Components/Events/Event";
import EventDetail from "./Components/Events/EventDetail";
import Player_details from "./Components/Events/Player_details";
import Organizer_detail from "./Components/Events/Organizer_detail";
import Organizer_Sidebar from "./Dashboards/Organizer_Dashboard/Sidebar/Organizer_Sidebar";
import Organizer_Events from "./Dashboards/Organizer_Dashboard/Organizer_Events/Organizer_Events";
import Organizer from "./Dashboards/Organizer_Dashboard/Organizer/Organizer";
import Organizer_Profile from "./Dashboards/Organizer_Dashboard/Organizer/Organizer_Profile/Organizer_Profile";
import Players from "./Dashboards/Organizer_Dashboard/Players/Players";
import Player_Profile from "./Dashboards/Organizer_Dashboard/Players/Player_Profile/Player_Profile";
import My_Profile from "./Dashboards/Organizer_Dashboard/My_Profile/My_Profile";
import Profile_Events from "./Dashboards/Organizer_Dashboard/My_Profile/Profile_Events/Profile_Events";
import Edit_Profile from "./Dashboards/Organizer_Dashboard/My_Profile/Edit_Profile/Edit_Profile";
import Boost_Profile from "./Dashboards/Organizer_Dashboard/My_Profile/Boost_Profile/Boost_Profile";
import Ratings_And_Feedback from "./Dashboards/Organizer_Dashboard/Ratings_And_Feedback/Ratings_And_Feedback";
import Content_Management from "./Dashboards/Organizer_Dashboard/Content_Management/Content_Management";
import Create_New_Event from "./Dashboards/Organizer_Dashboard/Event_Management/Create_New_Event/Create_New_Event";
import Event_Completion from "./Dashboards/Organizer_Dashboard/Event_Management/Event_Completion/Event_Completion";
import Event_Chat from "./Dashboards/Organizer_Dashboard/Event_Management/Event_Chat/Event_Chat";
import ChatPage from "./Dashboards/Organizer_Dashboard/Event_Management/Event_Chat/Chat_Page/ChatPage";
import Manage_Event from "./Dashboards/Organizer_Dashboard/Manage_Event/Manage_Event";
import Manage_Registration from "./Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Manage_Registration";
import Event_Manage_Form from "./Dashboards/Organizer_Dashboard/Manage_Event/Event_Manage_Form/Event_Manage_Form";
import Manage_Team_Registration from "./Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Manage_Team_Registration/Manage_Team_Registration";
import Manage_Team from "./Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Manage_Team/Manage_Team";
import Teams_Matchup from "./Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Teams_Matchup/Teams_Matchup";
import Single_Matchup from "./Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Single_Matchup/Single_Matchup";
import Group_Play from "./Dashboards/Organizer_Dashboard/Event_Management/Manage_Registration/Group_Play/Group_Play";
import { FAQ } from "./Dashboards/Organizer_Dashboard/Help_&_Support/FAQ";
import { Accordain } from "./Dashboards/Organizer_Dashboard/Help_&_Support/Accordian";
import Help_Support from "./Dashboards/Organizer_Dashboard/Help_&_Support/Help_Support";
import Privacy_policy from "./Dashboards/Organizer_Dashboard/Help_&_Support/Privacy_policy";
import Financial_Management from "./Dashboards/Organizer_Dashboard/Financial_Management/Financial_Management";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/boost" element={<Boost />} />
          <Route path="/ProfileView" element={<ProfileView />} />
          <Route path="/PaymentMethod" element={<PaymentMethod />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/email_verification" element={<Email_verification />} />
          <Route path="/Change_Role" element={<ChangeRole />} />
          <Route path="/Events" element={<Event />} />
          <Route path="/Eventdetail" element={<EventDetail />} />
          <Route path="/Playerdetail" element={<Player_details />} />
          <Route path="/Organizerdetail" element={<Organizer_detail />} />
          <Route path="/About_Us" element={<About />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact" element={<Contact_Us />} />

          {/* Organizer Route */}

          <Route path="/Organizer_Dashboard" element={<Organizer_Sidebar />} />
          <Route path="/Organizer_Events" element={<Organizer_Events />} />
          <Route path="/Organizer" element={<Organizer />} />
          <Route path="/Organizer_Profile" element={<Organizer_Profile />} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Player_Profile" element={<Player_Profile />} />
          <Route path="/My_Profile" element={<My_Profile />} />
          <Route path="/Edit_Profile" element={<Edit_Profile />} />
          <Route path="/Boost_Profile" element={<Boost_Profile />} />
          <Route
            path="/Ratings_And_Feedback"
            element={<Ratings_And_Feedback />}
          />
          <Route path="/Content_Management" element={<Content_Management />} />
          <Route path="/Create_New_Event" element={<Create_New_Event />} />
          <Route path="/Event_Completion" element={<Event_Completion />} />
          <Route path="/Event_Chat" element={<Event_Chat />} />
          <Route path="/event-chat/:eventId" element={<ChatPage />} />
          <Route path="/Manage_Event" element={<Manage_Event />} />

          <Route
            path="/Manage_Registration"
            element={<Manage_Registration />}
          />
          <Route path="/Event_Manage_Form" element={<Event_Manage_Form />} />
          <Route
            path="/Manage_Team_Registration"
            element={<Manage_Team_Registration />}
          />
          <Route path="/Manage_Team" element={<Manage_Team />} />
          <Route path="/Teams_Matchup" element={<Teams_Matchup />} />
          <Route path="/Single_Matchup" element={<Single_Matchup />} />
          <Route path="/Group_Play" element={<Group_Play />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Accordian" element={<Accordain />} />
          <Route path="/Help_Support" element={<Help_Support />} />
          <Route path="/Privacy_policy" element={<Privacy_policy />} />
          <Route path="/Financial_Management" element={<Financial_Management />} />

        </Routes>

        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
