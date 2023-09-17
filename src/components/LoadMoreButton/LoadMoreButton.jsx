import { LoadButton } from './LoadMoreButton.styled';

export default function LoadMoreButton({ page, onClick, hideButton }) {
  const handlePage = () => {
    let changePage = page;
    changePage += 1;
    onClick(changePage);
  };
  return (
    <LoadButton
      type="button"
      onClick={handlePage}
      style={{ display: hideButton() }}
    >
      Load more
    </LoadButton>
  );
}
