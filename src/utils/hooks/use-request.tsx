import { useMutation, useQuery } from 'react-query';

import { GraphQLClient } from 'graphql-request';
import getConfig from 'next/config';
import { getCookie } from 'cookies-next';
import { getGQLClient } from '../gql/client';

type GenericFunction = (...args: any[]) => any;

interface Options {
  [key: string]: string | number | boolean | GenericFunction | undefined;
}

export async function graphQLRequest(
  gqlTemplateString: string,
  options?: Options,
  gqlClient?: GraphQLClient
) {
  const { publicRuntimeConfig = {} } = getConfig() || {};
  const requestHeaders: {
    Cookie?: string;
  } = {};

  const useProxyAPICookie = getCookie('useProxyAPI');
  const hostURLCookie = String(getCookie('hostURL'));

  let url = publicRuntimeConfig.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;
  if (useProxyAPICookie === true && hostURLCookie === document?.location?.origin) {
    url = `${document?.location?.origin ?? ''}/api/graphql`;
  }

  const client = gqlClient ? gqlClient : getGQLClient();
  client.setEndpoint(url);
  const response = await client.request(gqlTemplateString, options, requestHeaders);
  return response;
}

export function useQueryRequest(
  queryKey: string | any[],
  gqlTemplateString: string,
  options?: Options,
  reactQueryOptions?: any
) {
  const { isLoading, isError, isSuccess, isFetching, isIdle, data, error, refetch } = useQuery(
    queryKey,
    () => graphQLRequest(gqlTemplateString, options),
    reactQueryOptions
  );
  // TODO: Please uncomment this section once all APIs will work
  // if (!returnError && isError) {
  //   throw error;
  // }

  return {
    isLoading,
    isError,
    isSuccess,
    isFetching,
    isIdle,
    data,
    error,
    refetch,
  };
}

export function useMutationRequest(gqlTemplateString: string, reactQueryOptions?: any) {
  const mutation = useMutation(
    (options?: Options) => graphQLRequest(gqlTemplateString, options),
    reactQueryOptions
  );

  // TODO: Please uncomment this section once all APIs will work
  // if (!returnError && mutation.isError) {
  //   throw mutation.error;
  // }

  return {
    mutation,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    isIdle: mutation.isIdle,
    data: mutation.data,
    error: mutation.error,
  };
}
