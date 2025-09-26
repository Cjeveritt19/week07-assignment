//TODO: render the database data sent through the server
// - store data in state
// - fetch the values from the server --> this is an effect
// - once you fetch teh data, parse it to JSON --> console log it!
// - update state with the fetched data (maybe some wrangling?)
// - poll your database to keep your data updated --> this is an effect
// - render the list of content
//- Stretch: you could conditionally render some elements in your page
export default function Home() {
  return (
    <>
      <h1 className="Home">Welcome to the Liverpool FC community webpage</h1>
      <p>
        On this page you can see recent news regarding Liverpool Fc and the
        latest injuries.
      </p>
      <p>
        You can also see the current league table and post your own comments
        regarding the team.
      </p>
    </>
  );
}
