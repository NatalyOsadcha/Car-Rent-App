import { LoadButton } from './LoadMoreButton.styled';

export default function LoadMoreButton({ page, onClick}) {
  const handlePage = () => {
    let changePage = page;
    changePage += 1;
    onClick(changePage);
  };
  return (
    <LoadButton
      type="button"
      onClick={handlePage}
    >
      Load more
    </LoadButton>
  );
}
