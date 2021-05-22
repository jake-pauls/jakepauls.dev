import React from "react";
import { Flex, FlexProps, Spinner, Tag, Table, Tbody, Thead, Th, Tr, Td } from "@chakra-ui/react";

import { Repository } from "../../types/repository";
import { queryRepositories } from "../../hooks/APIQueries";

const RepoRow = (repo: Repository) => {
   return (
    <Tr>
        <Td fontWeight="bold">{repo.name}</Td>
        <Td fontSize="xs">{repo.description}</Td>
        <Td><Tag backgroundColor="base.primary">{repo.language}</Tag></Td>
        <Td>{repo.created}</Td>
        <Td>{repo.lastUpdated}</Td>
        <Td isNumeric>{repo.size}</Td>
        <Td>{repo.license}</Td>
        <Td isNumeric>{repo.stars}</Td>
    </Tr>
   );
};

const RepoTable = (props: FlexProps) => {
    const { isLoading: loading, data: repos, status: callStatus } = queryRepositories();

    const reposTableData = callStatus === "success" && (
        <Tbody fontSize="sm">
            {repos!.map((repo: Repository) => (
               <RepoRow key={repo.cloneUrl} {...repo} />
            ))}
        </Tbody>
    );

    if (loading) {
        return (
            <Flex justifyContent="center" pt={12} {...props}>
               <Spinner
                   thickness="4px"
                   speed="0.85s"
                   emptyColor="base.grey"
                   color="base.primary"
                   size="xl" />
            </Flex>
        );
    }

    return (
        <Flex pl={12} pr={12} {...props}>
            <Table variant="striped" size="sm" color="base.text" colorScheme="">
                <Thead>
                    <Tr>
                        <Th color="base.text">Name</Th>
                        <Th color="base.text">Description</Th>
                        <Th color="base.text">Language</Th>
                        <Th color="base.text">Created At</Th>
                        <Th color="base.text">Last Updated</Th>
                        <Th color="base.text">Size (kB)</Th>
                        <Th color="base.text">License</Th>
                        <Th color="base.text">Stars</Th>
                    </Tr>
                </Thead>
                {reposTableData}
            </Table>
        </Flex>
    );
};

export default RepoTable;
