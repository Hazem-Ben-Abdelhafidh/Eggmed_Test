import { Button, TextareaAutosize, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React, { useState } from "react"
import useCreateProduct from "../hooks/useCreateProduct"

const NewProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("");
    const [createProduct, { data, loading, error }] = useCreateProduct();

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        createProduct({
            variables: {
                name: name,
                price: Number(price),
                description: description
            }
        })

    }
    if (loading) return <div>loading...</div>
    if (error) console.log(error)

    return (
        <form onSubmit={submitHandler} style={{ padding: "5px" }}>
            <Typography variant="h2">Create a New Product:</Typography>
            <Stack spacing={2} direction="column">
                <TextField label="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                <TextareaAutosize placeholder="Description..." minRows={10} value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button variant="contained" size="large" type="submit">Create</Button>
            </Stack>
        </form>
    )
}

export default NewProduct