import React, { useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Input, FormControl, FormLabel, Flex } from '@chakra-ui/react';

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      age: '',
      grades: []
    }
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'grades'
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/students/${id}`)
      .then(response => {
        reset(response.data);
      })
      .catch(error => {
        console.error(error);
        Swal.fire('Error', 'Could not fetch student data', 'error');
      });
  }, [id, reset]);

  const onSubmit = data => {
    axios.patch(`http://localhost:3000/students/${id}`, data)
      .then(() => {
        Swal.fire('Success', 'Student updated successfully', 'success');
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        Swal.fire('Error', 'Could not update student', 'error');
      });
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Age</FormLabel>
        <Controller
          name="age"
          control={control}
          render={({ field }) => <Input type="number" {...field} />}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Grades</FormLabel>
        {fields.map((grade, index) => (
          <Flex key={grade.id} mb={2}>
            <Controller
              name={`grades.${index}.semester`}
              control={control}
              render={({ field }) => <Input type="number" placeholder="Semester" {...field} />}
            />
            <Controller
              name={`grades.${index}.grade`}
              control={control}
              render={({ field }) => <Input type="number" placeholder="Grade" {...field} />}
            />
            <Button ml={2} onClick={() => remove(index)}>Remove</Button>
          </Flex>
        ))}
        <Button onClick={() => append({ semester: '', grade: '' })}>Add Grade</Button>
      </FormControl>
      <Button type="submit" colorScheme="blue">Save</Button>
    </Box>
  );
}
