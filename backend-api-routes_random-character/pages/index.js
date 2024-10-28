import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((result) => result.json());
export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <div>isloading...</div>;
  if (error) return <div>Error occured {error}</div>;

  console.log(data);

  return (
    <table>
      <caption>Random character</caption>
      <tbody>
        {Object.keys(data).map((item) => {
          return (
            <tr key={item}>
              <th>{item}</th>
              <td>{data[item]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
