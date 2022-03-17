import { useGetCountryQuery } from "./generated/graphql";

const Potato = () => {
  const [{ data, error, fetching }] = useGetCountryQuery({
    variables: { code: "FR" },
  });

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const { code, name, capital, currency } = data?.country ?? {};

  return (
    <div>
      <p>Code: {code}</p>
      <p>Name: {name}</p>
      <p>Capital: {capital}</p>
      <p>Currency: {currency}</p>
    </div>
  );
};

export default Potato;
