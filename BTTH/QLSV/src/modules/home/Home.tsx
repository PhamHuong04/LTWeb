import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Button, Checkbox, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deletePet, getPetList } from "../../service/api";
import { IPet } from "../../lib/interface";

export default function Home() {
  const [data, setData] = useState<IPet[]>([]);

  const getPet = async () => {
    const pets = await getPetList();
    setData(pets);
  };
  useEffect(() => {
    getPet();
  }, [data]);

  const onDeletePet = (pet: IPet): any => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete Pet: '${pet.name}'?`,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePet(pet.id);
      }
    });
  };

  return (
    <Box p="20px">
      <Typography component="h1" variant="h4" textAlign="center" pb="20px">
        Pet List
      </Typography>

      <Link to="/add">
        <Button variant="contained">New Pet</Button>
      </Link>

      <TableContainer component={Paper} sx={{ mt: "40px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="200px">STT</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Species</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Neutered</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((pet, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{pet.name}</TableCell>
                  <TableCell align="center">
                    {pet.species}
                  </TableCell>
                  <TableCell align="center">{pet.age}</TableCell>
                  <TableCell align="center">
                    <Checkbox checked={pet.neutered} />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" gap="6px" justifyContent="center">
                      <Link to={`/update/${pet.id}`}>
                        <Button variant="contained" color="success">
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => onDeletePet(pet)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
