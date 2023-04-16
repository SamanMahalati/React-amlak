import { Route, Routes } from "react-router-dom"

//Components
import Header from "../components/Header";
import Home from "../components/Home";
import Posts from "../components/Posts";
import PostDetail from "../components/PostDetail";

// Mui
import { createTheme, ThemeProvider } from "../utils/Mui/mui"
import Footer from "../components/Footer";
import ScrollToTop from "../functions/scrollTop";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5a5f"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  }

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-secondaryWhite w-full">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts page={"All"} />} />
          <Route path="/posts/post/:id" element={<PostDetail />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
