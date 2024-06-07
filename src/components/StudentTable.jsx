import { Flex, Button } from '@chakra-ui/react';
import { TableContainer, Table, Thead, Tbody, Td, Tr, Th } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function StudentTable(props) {
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Grades</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.data.map((student, i) => (
            <Tr key={i}>
              <Td>{student.name}</Td>
              <Td>{student.age}</Td>
              <Td>
                {student.grades.length > 0 ? (
                  <ul>
                    {student.grades.map((grade, index) => (
                      <li key={index}>Semester {grade.semester}: {grade.grade}</li>
                    ))}
                  </ul>
                ) : (
                  <span>No grades available</span>
                )}
              </Td>
              <Td>
                <Flex>
                  <Link to={"/editStudent/" + student._id}>
                    <Button mr={2}>Edit</Button>
                  </Link>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
