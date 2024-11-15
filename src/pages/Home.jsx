import React from 'react'
import { Table } from 'react-bootstrap'


const Home = () => {
  return (
    <>
    <h1 className='text-center my-5'>student Details</h1>
 <Table className='mt-5' striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Task description</th>
          <th>Start date</th>
          <th>End date</th>
          <th>Status</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
        <tr>
          <td>3</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
         <td>@mdo</td>



        </tr>
      </tbody>
    </Table>

    </>
  )
}

export default Home