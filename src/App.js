import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loadable from "react-loadable";
import Loader from "./Components/Loader/Loader";



// import HomeOne from "./Components/Home/HomeOne";
// import HomeThree from "./Components/Home/HomeThree";
// import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import AboutTwo from "./Components/Pages/AboutTwo";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import CourseSideBar from "./Components/Pages/CourseSideBar";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import InstructorOne from "./Components/Pages/InstructorOne";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleBlog from "./Components/Pages/SingleBlog";
import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";

const HomePage = Loadable({
  loader: () => import("../src/Components/Home/HomeOne"),
  loading: Loader,
});
const Parents = Loadable({
  loader: () => import("../src/Components/Home/HomeTwo"),
  loading: Loader,
});
const Students = Loadable({
  loader: () => import("../src/Components/Home/Students"),
  loading: Loader,
});

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/students"
            element={<Students />}
          />
          <Route
            path="/parents"
            element={<Parents />}
          />

          <Route path="/react-templates/edumim/about" element={<AboutOne />} />
          <Route
            path="/react-templates/edumim/about-two"
            element={<AboutTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor"
            element={<InstructorOne />}
          />
          <Route
            path="/react-templates/edumim/instructor-two"
            element={<InstructorTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor-details"
            element={<InstructorDetails />}
          />
          <Route path="/react-templates/edumim/event" element={<Event />} />
          <Route
            path="/react-templates/edumim/event-single"
            element={<EventSingle />}
          />
          <Route path="/react-templates/edumim/error" element={<ErrorPage />} />
          <Route path="/react-templates/edumim/courses" element={<Courses />} />
          <Route
            path="/react-templates/edumim/courses-sidebar"
            element={<CourseSideBar />}
          />
          <Route
            path="/react-templates/edumim/single-course"
            element={<SingleCourse />}
          />
          <Route
            path="/react-templates/edumim/blog-standard"
            element={<BLogStandard />}
          />
          <Route
            path="/react-templates/edumim/single-blog"
            element={<SingleBlog />}
          />
          <Route
            path="/react-templates/edumim/contacts"
            element={<ContactUs />}
          />
          <Route path="/react-templates/edumim/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
