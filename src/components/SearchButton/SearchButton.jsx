import { StylesButton } from './SearchButton.styled';

export default function SearchButton({ onClick, width }) {
  return (
    <StylesButton
      variant="contained"
      onClick={onClick}
      style={{ width: width }}
    >
      Search
    </StylesButton>
  );
}
