import './App.css';
import Form from './Form/Form';
import Showcase from "./Showcase/Showcase";
import { AppWrapper, ContentWrapper, ShowcaseWrapper, ShowcaseTitle } from "./styles";

export default function App() {
  return (
    <AppWrapper>
      <ContentWrapper>
          <Form/>
          <Showcase/>
      </ContentWrapper>
    </AppWrapper>
  );
}


