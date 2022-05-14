import React, { FC } from 'react'
import { GridItem, Text, Button, Container, Box, Badge, Heading, Tooltip } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { IUser } from '../models/IUser'

interface UserItemProps {
  user: IUser
  remove: (user: IUser) => void
  update: (user: IUser) => void
}

export const UserItem: FC<UserItemProps> = ({ user, remove, update }) => {
  const handleDelete = async (event: MouseEvent) => {
    event.stopPropagation()
    await remove(user)
  }

  const handleUpdate = async (event: MouseEvent) => {
    event.stopPropagation()
    const name = prompt('Update name') || ''
    await update({ ...user, name })
  }

  return (
    <>
      <GridItem w="100%" minHeight="5rem" bg="teal.500" borderRadius={10}>
        <Container>
          <Box w="100%" p={4} display="flex" alignItems="baseline" justifyContent={'space-between'}>
            <Badge variant="subtle" color="black" borderRadius={8} minW={7} textAlign={'center'}>
              <Text fontSize={'lg'} fontWeight={700}>
                {user.id}
              </Text>
            </Badge>
            <Heading color="white" as="h3" size="lg" paddingLeft={5}>
              {user.name}
            </Heading>
          </Box>
          <Box w="100%" p={4} display="flex" alignItems="baseline" justifyContent={'space-between'}>
            <Tooltip label="Delete user">
              <Button
                colorScheme="red"
                margin={0}
                iconSpacing={0}
                leftIcon={<DeleteIcon />}
                onClick={(e: never) => handleDelete(e)}
              />
            </Tooltip>
            <Tooltip label="Update user">
              <Button
                colorScheme="orange"
                iconSpacing={0}
                rightIcon={<EditIcon />}
                onClick={(e: never) => handleUpdate(e)}
              />
            </Tooltip>
          </Box>
        </Container>
      </GridItem>
    </>
  )
}
