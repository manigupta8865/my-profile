import { gql } from 'graphql-request';

import { graphQLRequest, useMutationRequest, useQueryRequest } from './use-request';

const GET_LAUNCHES_QUERY = gql`
  query getLaunches($limit: Int! = 5) {
    launches(limit: $limit) {
      id
      launch_year
      rocket {
        rocket_name
      }
      details
    }
  }
`;

const ADD_USER_MUTATION = gql`
  mutation addUser($userName: String!, $rocketName: String!) {
    insert_users(objects: { name: $userName, rocket: $rocketName }) {
      returning {
        id
        name
        rocket
      }
    }
  }
`;

const useQueryResponse = {
  isLoading: false,
  isError: false,
  isSuccess: true,
  isIdle: false,
  error: {},
  data: {
    launches: [
      {
        id: '13',
        launch_year: '2014',
        rocket: { rocket_name: 'Falcon 9' },
        details: 'Second GTO launch for Falcon 9.',
      },
    ],
  },
};

const responseGQ = {
  insert_users: {
    returning: [
      {
        id: '2295883a-9651-4e55-a44b-a2edeb73aada',
        name: 'test',
        rocket: 'test',
      },
    ],
  },
};

const useMutationMock = {
  isLoading: true,
  isError: false,
  isSuccess: true,
  isIdle: false,
  data: { test: 'test' },
  error: null,
};

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: () => useQueryResponse,
  useMutation: () => useMutationMock,
  setEndpoint: () => '',
}));

jest.mock('graphql-request', () => ({
  ...jest.requireActual('graphql-request'),
  request: () => responseGQ,
  setEndpoint: () => '',
  GraphQLClient: function GraphQLClient() {
    this.request = () => responseGQ;
    this.setEndpoint = () => '';
    return this;
  },
}));

describe('use-request hoocks', () => {
  it('graphQLRequest', async function () {
    const response = await graphQLRequest(ADD_USER_MUTATION, { limit: 1 });
    expect(response).toBe(responseGQ);
  });

  it('useQueryRequest', async function () {
    const response = useQueryRequest(
      'launchesPrefetchedOnServerAndRefetchedOnClient',
      GET_LAUNCHES_QUERY,
      { limit: 1 }
    );
    expect(response).toEqual(useQueryResponse);
  });

  it('useMutationRequest', async function () {
    const request = useMutationRequest(ADD_USER_MUTATION);

    expect(request).toEqual({
      mutation: useMutationMock,
      isLoading: useMutationMock.isLoading,
      isError: useMutationMock.isError,
      isSuccess: useMutationMock.isSuccess,
      isIdle: useMutationMock.isIdle,
      data: useMutationMock.data,
      error: useMutationMock.error,
    });
  });
});
