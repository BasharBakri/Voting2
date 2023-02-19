import './AdminPage.css';
import { voterData } from './voterData';

export default function AdminPage() {


  const tableData = voterData.map((voter) => {
    return <tr>
      <td>{voter.name}</td>
      <td>{voter.email}</td>
      <td><input type="checkbox" name="hasVoted" id="" /></td>
    </tr>
  })






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
              <td>{Math.round((window.localStorage.voting / voterData.length) * 100)}%</td>
              <td>{window.localStorage.voting}</td>
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
  </>)
}