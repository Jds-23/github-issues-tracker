import { useState } from "react";
import "./App.css";
import axios from "./axios";
import Issue from "./components/Issue/Issue";
function App() {
  const [org, setOrg] = useState("");
  const [repo, setRepo] = useState("");
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const getIssues = () => {
    setLoading(true);
    axios({
      method: "get",
      url: `repos/${org}/${repo}/issues`,
    })
      .then((res) => {
        setIssues(
          res.data.filter((issue: any) => {
            return issue.node_id.charAt(0) === "I";
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIssues([]);
        setLoading(false);
      });
  };
  return (
    <div className="App">
      <input type="text" value={org} onChange={(e) => setOrg(e.target.value)} />
      <input
        type="text"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
      />
      <button disabled={loading} onClick={() => getIssues()}>
        {!loading ? "Click to get a list of issues." : "loading..."}
      </button>
      {issues?.map((issue: any, i) => {
        return <Issue key={i} issue={issue} />;
      })}
    </div>
  );
}

export default App;
