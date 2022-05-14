import React, { FC, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { UserItem } from '../components/UserItem'
import { postsApi } from '../services/PostsService'
import { IUser } from '../models/IUser'
import {
  Heading,
  Input,
  Button,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Grid,
  Container,
  Box,
} from '@chakra-ui/react'

export const PostsPage: FC = () => {
  const [name, setName] = useState('')

  const {
    data: usersData,
    isLoading,
    error: usersError,
  } = postsApi.useFetchAllPostsQuery(100, {
    // pollingInterval: 10000, // every 10 seconds API will get new data
  })
  const [createUser] = postsApi.useCreateUserMutation()
  const [deleteUser] = postsApi.useDeleteUserMutation()
  const [updateUser] = postsApi.useUpdateUserMutation()

  const handleAddNewUser = async (event: FormEvent) => {
    event.preventDefault()

    await createUser({
      name,
    } as IUser)

    setName('')
  }

  const handleDeleteUser = (user: IUser) => {
    deleteUser(user)
  }
  const handleUpdateUser = (user: IUser) => {
    updateUser(user)
  }

  return (
    <>
      <Helmet>
        <title>Posts 2</title>
      </Helmet>

      <main>
        <Container maxW="container.xl">
          <Heading m={10}>Posts page</Heading>
          <Link to="home2">Home</Link> | <Link to="users">Posts list</Link>
          <form onSubmit={handleAddNewUser}>
            <Box display={'flex'} m={10}>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(event: any) => setName(event.target.value)}
                marginRight={5}
              />
              <Button type="submit">Add Post</Button>
            </Box>
          </form>
          {isLoading && (
            <Box w={'100%'} textAlign={'center'}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
          )}
          {usersError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>Failed to fetch posts data.</AlertDescription>
            </Alert>
          )}
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            {usersData &&
              usersData.map((user) => (
                <UserItem
                  user={user}
                  key={user.id}
                  remove={handleDeleteUser}
                  update={handleUpdateUser}
                />
              ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}
