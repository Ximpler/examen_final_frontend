
import React, { useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import StudentTable from '../components/StudentTable';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


function EditStudentList() {
    const navigate = useNavigate(); // Mover useNavigate dentro del componente de función

    const [data, setData] = useState([]); // Inicializa como array
    useEffect(() => {
        fetch('http://localhost:3000/students')
            .then(response => response.json())
            .then(data => setData(data))
            .catch((error) => {
                Swal.fire({
                    title: 'Error',
                    text: 'Error fetching data, service not available',
                    showCancelButton: true,
                    cancelButtonText: 'Go Back',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Handle OK button click if needed
                    } else {
                        navigate("/"); // Navigate back to homepage
                    }
                });
            });
    }, [navigate]); // Agregar navigate a las dependencias de useEffect
return (
    <>
        <Container maxW='container.lg'>
            <StudentTable data={data} />
        </Container>
    </>
)
}
export default EditStudentList;