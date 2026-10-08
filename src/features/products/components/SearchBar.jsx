import Input from "../../../shared/components/Input";

function SearchBar({
  search,
  onSearchChange,
}) {
  return (
    <Input
      label="Search Products"
      type="search"
      value={search}
      onChange={(event) =>
        onSearchChange(
          event.target.value
        )
      }
      placeholder="Search products..."
    />
  );
}

export default SearchBar;