const { useState, useEffect } = React;

function Home({ goToSecond }) {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToSecond}>Go to Second Page</button>
    </div>
  );
}

function SecondPage() {
  const [message, setMessage] = useState("Wait for one second");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("second page");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" ? (
        <Home goToSecond={() => setPage("second")} />
      ) : (
        <SecondPage />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
