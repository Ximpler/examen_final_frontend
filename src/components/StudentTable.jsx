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
          </Tr>
        </Thead>
        <Tbody>
          {props.data.map((student, i) => (
            <Tr key={i}>
              <Td>{student.name}</Td>
              <Td>{student.age}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
