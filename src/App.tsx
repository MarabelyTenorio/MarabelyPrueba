import { RecoilRoot } from 'recoil';
import { Grid } from 'semantic-ui-react';
import CharactersList from './Components/CharactersList';
import ContainerMain from './Components/ContainerMain';
import SearchApi from './Components/SearchApi';
import './Styles/main.css';

const SearchContainer = Grid.Column;

function App() {
  return (
    <RecoilRoot>
      <ContainerMain>
        <Grid
          className="GridMainContainer"
          centered
        >
          <SearchContainer
            className="searchApiContainer"
          >
            <SearchApi />
            <CharactersList />
          </SearchContainer>
        </Grid>
      </ContainerMain>
    </RecoilRoot>
  );
}

export default App;
