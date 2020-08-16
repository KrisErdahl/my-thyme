import NavBar from "@components/layout/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main
        settings={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      ></main>
      <div>
        <h1>Turn Tracker</h1>
        <p>Track turns for a variety of activities.</p>
      </div>
    </div>
  );
}
