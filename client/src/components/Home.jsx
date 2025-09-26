import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="Container">
        <h1 className="Home">Welcome to the Liverpool FC community webpage</h1>
        <p>
          On this page you can see recent news regarding Liverpool Fc and the
          latest injuries.
        </p>
        <p>
          You can also see the current league table and post your own comments
          regarding the team.
        </p>
        <div className="Content">
          <div className="News">
            <h2>Recent news:</h2>
          </div>
          <div className="Injuries">
            <h2>Injuries and Suspensions:</h2>
            <ul>
              <li>
                Stefan Bajcetic: Hamstring injury. Expected return: Unknown
              </li>
              <li>
                Giovanni Leoni: Crucate Ligament injury. Expected return: Late
                december 2025
              </li>
              <li>Hugo Ekitike: Suspended.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
