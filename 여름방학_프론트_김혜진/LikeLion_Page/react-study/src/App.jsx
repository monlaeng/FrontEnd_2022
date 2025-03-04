import {
    Main,
    MediaDiv,
} from './styledComponent';

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons


import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import ShowPost from './ShowPost';
import WritePost from './WritePost';

function App() {

    const [darkMode, setDarkMode] = useState(true);
    
    return (
        <>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <GlobalStyles />
                <MediaDiv>
                    <Header darkMode={darkMode} setDarkMode={setDarkMode} />                    
                    <Main>
                        <Slogun />
                        <Routes>
                            <Route> 
                                <Route path='/' element={<ShowPostList></ShowPostList>}></Route> 
                                <Route path="/write" element={<WritePost></WritePost>}></Route>
                                <Route path="/post/:postID" element={<ShowPost></ShowPost>}></Route>
                            </Route>
                        </Routes>
                        
                    </Main>
                    <Footer />
                </MediaDiv> 
            </ThemeProvider>
        </>
    );
}

export default App;
