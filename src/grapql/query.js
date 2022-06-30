import { useQuery, gql } from "@apollo/client";

const condition = JSON.parse(localStorage.getItem("sortField")) || {};

const field = condition.sortField || "id";
const sortOpt = condition.sortoption || "asc";

export const GET_CARDS = gql`
  query {
    flashCardlist(orderBy: [{ ${field}: ${sortOpt} }]) {
      id
      description
      title
    }
  }
`;

export const useCards = () => {
  const { data, loading, error } = useQuery(GET_CARDS);
  if (loading) return null;
  if (error) return null;
  return data.flashCardlist;
};
