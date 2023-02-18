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
          <tr>
            <th>Percentage of voters</th>
            <th>Total Number of votes</th>
          </tr>
          <tr>
            <td>35%</td>
            <td>11</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>has voted?</th>
          </tr>
          {tableData}
        </table>
      </div>

    </main>
  </>)
}