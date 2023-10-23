import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ChefService from "./pages/ChefService";
import TiffinService from "./pages/TiffinService";
import HomeMakers from "./pages/HomeMakers";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";
import SettingsChangePassword from "./pages/SettingsChangePassword";
import SettingsChangeNumber from "./pages/SettingsChangeNumber";
import SettingsRaiseAComplaint from "./pages/SettingsRaiseAComplaint";
import SettingsFeatureRequests from "./pages/SettingsFeatureRequests";
import StaffManagement from "./pages/StaffManagement";
import Profile from "./pages/Profile";
import TC from "./pages/TC";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Group from "./pages/Group";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/chef-service":
        title = "";
        metaDescription = "";
        break;
      case "/tiffin-service":
        title = "";
        metaDescription = "";
        break;
      case "/home-makers":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-number":
        title = "";
        metaDescription = "";
        break;
      case "/settingsraise-a-complaint":
        title = "";
        metaDescription = "";
        break;
      case "/settingsfeature-requests":
        title = "";
        metaDescription = "";
        break;
      case "/staff-management":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/tc":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/group-1379":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chef-service" element={<ChefService />} />
      <Route path="/tiffin-service" element={<TiffinService />} />
      <Route path="/home-makers" element={<HomeMakers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route
        path="/settings-change-password"
        element={<SettingsChangePassword />}
      />
      <Route
        path="/settings-change-number"
        element={<SettingsChangeNumber />}
      />
      <Route
        path="/settingsraise-a-complaint"
        element={<SettingsRaiseAComplaint />}
      />
      <Route
        path="/settingsfeature-requests"
        element={<SettingsFeatureRequests />}
      />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tc" element={<TC />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/group-1379" element={<Group />} />
    </Routes>
  );
}
export default App;
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ChefService from "./pages/ChefService";
import TiffinService from "./pages/TiffinService";
import HomeMakers from "./pages/HomeMakers";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";
import SettingsChangePassword from "./pages/SettingsChangePassword";
import SettingsChangeNumber from "./pages/SettingsChangeNumber";
import SettingsRaiseAComplaint from "./pages/SettingsRaiseAComplaint";
import SettingsFeatureRequests from "./pages/SettingsFeatureRequests";
import StaffManagement from "./pages/StaffManagement";
import Profile from "./pages/Profile";
import TC from "./pages/TC";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Group from "./pages/Group";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/chef-service":
        title = "";
        metaDescription = "";
        break;
      case "/tiffin-service":
        title = "";
        metaDescription = "";
        break;
      case "/home-makers":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-number":
        title = "";
        metaDescription = "";
        break;
      case "/settingsraise-a-complaint":
        title = "";
        metaDescription = "";
        break;
      case "/settingsfeature-requests":
        title = "";
        metaDescription = "";
        break;
      case "/staff-management":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/tc":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/group-1379":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chef-service" element={<ChefService />} />
      <Route path="/tiffin-service" element={<TiffinService />} />
      <Route path="/home-makers" element={<HomeMakers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route
        path="/settings-change-password"
        element={<SettingsChangePassword />}
      />
      <Route
        path="/settings-change-number"
        element={<SettingsChangeNumber />}
      />
      <Route
        path="/settingsraise-a-complaint"
        element={<SettingsRaiseAComplaint />}
      />
      <Route
        path="/settingsfeature-requests"
        element={<SettingsFeatureRequests />}
      />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tc" element={<TC />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/group-1379" element={<Group />} />
    </Routes>
  );
}
export default App;
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ChefService from "./pages/ChefService";
import TiffinService from "./pages/TiffinService";
import HomeMakers from "./pages/HomeMakers";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";
import SettingsChangePassword from "./pages/SettingsChangePassword";
import SettingsChangeNumber from "./pages/SettingsChangeNumber";
import SettingsRaiseAComplaint from "./pages/SettingsRaiseAComplaint";
import SettingsFeatureRequests from "./pages/SettingsFeatureRequests";
import StaffManagement from "./pages/StaffManagement";
import Profile from "./pages/Profile";
import TC from "./pages/TC";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Group from "./pages/Group";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/chef-service":
        title = "";
        metaDescription = "";
        break;
      case "/tiffin-service":
        title = "";
        metaDescription = "";
        break;
      case "/home-makers":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-number":
        title = "";
        metaDescription = "";
        break;
      case "/settingsraise-a-complaint":
        title = "";
        metaDescription = "";
        break;
      case "/settingsfeature-requests":
        title = "";
        metaDescription = "";
        break;
      case "/staff-management":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/tc":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/group-1379":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chef-service" element={<ChefService />} />
      <Route path="/tiffin-service" element={<TiffinService />} />
      <Route path="/home-makers" element={<HomeMakers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route
        path="/settings-change-password"
        element={<SettingsChangePassword />}
      />
      <Route
        path="/settings-change-number"
        element={<SettingsChangeNumber />}
      />
      <Route
        path="/settingsraise-a-complaint"
        element={<SettingsRaiseAComplaint />}
      />
      <Route
        path="/settingsfeature-requests"
        element={<SettingsFeatureRequests />}
      />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tc" element={<TC />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/group-1379" element={<Group />} />
    </Routes>
  );
}
export default App;
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ChefService from "./pages/ChefService";
import TiffinService from "./pages/TiffinService";
import HomeMakers from "./pages/HomeMakers";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";
import SettingsChangePassword from "./pages/SettingsChangePassword";
import SettingsChangeNumber from "./pages/SettingsChangeNumber";
import SettingsRaiseAComplaint from "./pages/SettingsRaiseAComplaint";
import SettingsFeatureRequests from "./pages/SettingsFeatureRequests";
import StaffManagement from "./pages/StaffManagement";
import Profile from "./pages/Profile";
import TC from "./pages/TC";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Group from "./pages/Group";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/chef-service":
        title = "";
        metaDescription = "";
        break;
      case "/tiffin-service":
        title = "";
        metaDescription = "";
        break;
      case "/home-makers":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-number":
        title = "";
        metaDescription = "";
        break;
      case "/settingsraise-a-complaint":
        title = "";
        metaDescription = "";
        break;
      case "/settingsfeature-requests":
        title = "";
        metaDescription = "";
        break;
      case "/staff-management":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/tc":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/group-1379":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chef-service" element={<ChefService />} />
      <Route path="/tiffin-service" element={<TiffinService />} />
      <Route path="/home-makers" element={<HomeMakers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route
        path="/settings-change-password"
        element={<SettingsChangePassword />}
      />
      <Route
        path="/settings-change-number"
        element={<SettingsChangeNumber />}
      />
      <Route
        path="/settingsraise-a-complaint"
        element={<SettingsRaiseAComplaint />}
      />
      <Route
        path="/settingsfeature-requests"
        element={<SettingsFeatureRequests />}
      />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tc" element={<TC />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/group-1379" element={<Group />} />
    </Routes>
  );
}
export default App;
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ChefService from "./pages/ChefService";
import TiffinService from "./pages/TiffinService";
import HomeMakers from "./pages/HomeMakers";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";
import SettingsChangePassword from "./pages/SettingsChangePassword";
import SettingsChangeNumber from "./pages/SettingsChangeNumber";
import SettingsRaiseAComplaint from "./pages/SettingsRaiseAComplaint";
import SettingsFeatureRequests from "./pages/SettingsFeatureRequests";
import StaffManagement from "./pages/StaffManagement";
import Profile from "./pages/Profile";
import TC from "./pages/TC";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Group from "./pages/Group";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/chef-service":
        title = "";
        metaDescription = "";
        break;
      case "/tiffin-service":
        title = "";
        metaDescription = "";
        break;
      case "/home-makers":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-number":
        title = "";
        metaDescription = "";
        break;
      case "/settingsraise-a-complaint":
        title = "";
        metaDescription = "";
        break;
      case "/settingsfeature-requests":
        title = "";
        metaDescription = "";
        break;
      case "/staff-management":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/tc":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/group-1379":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chef-service" element={<ChefService />} />
      <Route path="/tiffin-service" element={<TiffinService />} />
      <Route path="/home-makers" element={<HomeMakers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route
        path="/settings-change-password"
        element={<SettingsChangePassword />}
      />
      <Route
        path="/settings-change-number"
        element={<SettingsChangeNumber />}
      />
      <Route
        path="/settingsraise-a-complaint"
        element={<SettingsRaiseAComplaint />}
      />
      <Route
        path="/settingsfeature-requests"
        element={<SettingsFeatureRequests />}
      />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tc" element={<TC />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/group-1379" element={<Group />} />
    </Routes>
  );
}
export default App;
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Group from "./pages/Group";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import TC from "./pages/TC";
import Profile from "./pages/Profile";
import StaffManagement from "./pages/StaffManagement";
import SettingsFeatureRequests from "./pages/SettingsFeatureRequests";
import SettingsRaiseAComplaint from "./pages/SettingsRaiseAComplaint";
import SettingsChangeNumber from "./pages/SettingsChangeNumber";
import SettingsChangePassword from "./pages/SettingsChangePassword";
import UserManagement from "./pages/UserManagement";
import Orders from "./pages/Orders";
import HomeMakers from "./pages/HomeMakers";
import TiffinService from "./pages/TiffinService";
import ChefService from "./pages/ChefService";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/group-1379":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/tc":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/staff-management":
        title = "";
        metaDescription = "";
        break;
      case "/settingsfeature-requests":
        title = "";
        metaDescription = "";
        break;
      case "/settingsraise-a-complaint":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-number":
        title = "";
        metaDescription = "";
        break;
      case "/settings-change-password":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
      case "/home-makers":
        title = "";
        metaDescription = "";
        break;
      case "/tiffin-service":
        title = "";
        metaDescription = "";
        break;
      case "/chef-service":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Pricing />} />
      <Route path="/group-1379" element={<Group />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/tc" element={<TC />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route
        path="/settingsfeature-requests"
        element={<SettingsFeatureRequests />}
      />
      <Route
        path="/settingsraise-a-complaint"
        element={<SettingsRaiseAComplaint />}
      />
      <Route
        path="/settings-change-number"
        element={<SettingsChangeNumber />}
      />
      <Route
        path="/settings-change-password"
        element={<SettingsChangePassword />}
      />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/home-makers" element={<HomeMakers />} />
      <Route path="/tiffin-service" element={<TiffinService />} />
      <Route path="/chef-service" element={<ChefService />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
