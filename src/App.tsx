import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNav } from './entities/nav/nav.model';
import { Page, PageTabs } from './entities/nav/entities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {useNav().map((item: Page) => (
          item.tabs == undefined
            ? <Route path={item.link} element={item.component} />
            : <Route path={item.link} element={item.component}>
                {item.tabs.map((tab: PageTabs) => (
                  <Route path={tab.link} element={tab.component}/>
                ))}
              </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;