import { StylesButton, Text } from './SearchButton.styled';

export default function SearchButton({ text, onClick, width }) {
  return (
    <StylesButton
      variant="contained"
      onClick={onClick}
      style={{ width: width }}
    >
      <Text>{text}</Text>
    </StylesButton>
  );
}
