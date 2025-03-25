import styled from "styled-components";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useUsers from "./useUsers";
import Loader from "../../ui/Loader";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../ui/Pagination";
import { USERS_PAGE_SIZE } from "../../utils/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 3.6rem;
`;

const SearchBox = styled.form`
  display: flex;
  gap: 0.8rem;
  width: 60%;
`;

const StyledInput = styled(Input)`
  margin-bottom: 0;
`;

const StyledButton = styled(Button)`
  padding: 0 2.4rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 60%;

  height: 100%;
`;

const UserBox = styled(Link)`
  font-size: 1.4rem;
  border: 1px solid var(--color-grey-800);
  padding: 0.8rem 2rem;

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

const Count = styled.p`
  margin-top: 3.2rem;
  font-size: 1.4rem;
  margin-left: 1.6rem;
  margin-bottom: 0.8rem;
  font-weight: 300;

  span {
    color: var(--color-brand-500);
  }
`;

const PaginationBox = styled.div`
  padding: 2.4rem;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderBox = styled.div`
  height: 100%;
  margin-top: 6.4rem;
`;

export default function Users() {
  const { isLoading, users, count } = useUsers();
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(e) {
    e.preventDefault();
    if (query === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("search", query);

    setSearchParams(searchParams);
  }

  return (
    <Container>
      <StyledHeading $variation="secondary">Users</StyledHeading>
      <SearchBox onSubmit={(e) => handleSearch(e)}>
        <StyledInput
          $variation="form"
          placeholder="Users email"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <StyledButton $variation="medium">Find</StyledButton>
      </SearchBox>

      {!isLoading ? (
        <>
          <Count>
            <span>{count} </span>
            {count === 1 ? "user" : "users"} found
          </Count>
          <Box>
            {users.map((user) => (
              <UserBox key={user.id} to={`${user.id}`}>
                <span>{user.email}</span>
              </UserBox>
            ))}
          </Box>
          {count > USERS_PAGE_SIZE && (
            <PaginationBox>
              <Pagination pageSize={USERS_PAGE_SIZE} count={count} />
            </PaginationBox>
          )}
        </>
      ) : (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
    </Container>
  );
}
