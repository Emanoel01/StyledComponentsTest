import {Title,TitleSmall} from "./styles";

function App() {
  return (
    <div>
      <Title fontSize={20}>
        Emanoel
        <span>Não é trouxa</span>
      </Title>
    <br/>
      <TitleSmall>
          Menor
      </TitleSmall>
    </div>
  );
}

export default App;
