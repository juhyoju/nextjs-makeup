import { Header, Icon } from "semantic-ui-react";

export default function Top() {
  return (
    <header>
      <Icon name="heart" size="large" />
      <Header as="h1">POWDER</Header>
      <Icon name="heart" size="large" />

      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h1 {
          margin: 0;
        }
      `}</style>
    </header>
  );
}
