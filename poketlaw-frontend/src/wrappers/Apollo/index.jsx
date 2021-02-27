import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-boost';
import Base from '../Base';
import {
  API_URL,
  AUTH_TOKEN,
} from '../../settings/constants';

function customFetch(url, opts = {}) {
  opts.headers.authorization = localStorage.getItem(AUTH_TOKEN)
    ? `JWT ${localStorage.getItem(AUTH_TOKEN)}` : '';

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(opts.method || 'get', url);

    for (const k in opts.headers || {}) xhr.setRequestHeader(k, opts.headers[k]);

    xhr.onload = (e) => resolve({
      ok: true,
      text: () => Promise.resolve(e.target.responseText),
      json: () => Promise.resolve(JSON.parse(e.target.responseText)),
    });

    xhr.onerror = reject;

    xhr.send(opts.body);
  });
}

const client = new ApolloClient({
  link: createUploadLink({
    uri: API_URL,
    fetch: typeof window === 'undefined' ? global.fetch : customFetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      // fetchPolicy: 'network-only', //

      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

const Apollo = () => (
  <ApolloProvider client={client}>
    <Base />
  </ApolloProvider>
);

export default Apollo;
