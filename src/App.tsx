import { Routes, Route, HashRouter } from 'react-router-dom'
import Main from "./pages/Main/Main"
import Password from "./pages/Password/Password"
import Single from "./pages/Single/Single"
import New from "./pages/New/New"
import List from "./pages/List/List"
import { productInputs, userInputs } from './formSource'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import './style/dark.scss'

function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/*
          GitHub Pages doesn’t support routers that use the HTML5
          pushState history API under the hood (for example, React
          Router using browserHistory).
          https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing

          Use <HashRouter> for GitHub Pages and <BrowserRouter> for other hosting providers
      */}

      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="password" element={<Password />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title={"Add New User"} />} />
            </Route>
            <Route path="servers">
              <Route index element={<List />} />
              <Route path=":serverId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title={"Add New Products"} />} />
            </Route>
            <Route path="sites">
              <Route index element={<List />} />
              <Route path=":siteId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title={"Add New Site"} />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
