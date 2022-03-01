import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render the correct header", () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  const handleViewTypeHandler = jest.fn(() => null);
  const OnTabChangeHandler = jest.fn(() => null);
  render(
    <ApolloProvider client={client}>
      <Header
        handleViewType={handleViewTypeHandler}
        onTab={OnTabChangeHandler}
      />
    </ApolloProvider>
  );
  expect(handleViewTypeHandler).toHaveBeenCalledTimes(1);

  expect(screen.getByText("All")).toBeInTheDocument();
  expect(screen.getByText("Favorites")).toBeInTheDocument();
});
