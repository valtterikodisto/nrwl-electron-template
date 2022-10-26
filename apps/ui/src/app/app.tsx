import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

const ParagraphRegular = styled.p`
  font-family: 'Roboto';
  font-weight: normal;
`;

const ParagraphMedium = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
`;

const ParagraphBold = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
`;

const ParagraphItalic = styled.p`
  font-family: 'Roboto';
  font-style: italic;
`;

export function App() {
  return (
    <StyledApp>
      <ParagraphRegular>Roboto Regular</ParagraphRegular>
      <ParagraphMedium>Roboto Medium</ParagraphMedium>
      <ParagraphBold>Roboto Bold</ParagraphBold>
      <ParagraphItalic>Roboto Italic</ParagraphItalic>

      <NxWelcome title="ui" />
    </StyledApp>
  );
}

export default App;
