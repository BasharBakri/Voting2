import './AdminPage.css';
import CandidateCard from './CandidateCard';
import { voterData } from './voterData';

export default function AdminPage() {

  let jsonData = window.localStorage.getItem('candidateData');

  let storedData = JSON.parse(jsonData);
  console.log(storedData);

  let totalVotes = storedData[0].numberOfVotes + storedData[1].numberOfVotes + storedData[2].numberOfVotes + storedData[3].numberOfVotes;
  console.log(totalVotes);


  const tableData = voterData.map((voter) => {
    return <tr key={voter.email}>
      <td>{voter.name}</td>
      <td>{voter.email}</td>
      <td><input type="checkbox" name="hasVoted" id="" /></td>
    </tr>;
  });






  return (<>
    <main className='AdminContainer' >
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Percentage of voters</th>
              <th>Total Number of votes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Math.round((totalVotes / voterData.length) * 100)}%</td>
              <td>{totalVotes}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>has voted?</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>

    </main>
  </>);
}