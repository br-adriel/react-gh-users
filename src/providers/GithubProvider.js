import { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    loading: false,
    user: {
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      location: undefined,
      avatar_url: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    api.get(`users/${username}`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        user: {
          login: data.login,
          name: data.name,
          html_url: data.html_url,
          blog: data.blog,
          location: data.location,
          avatar_url: data.avatar_url,
          followers: data.followers,
          following: data.following,
          public_gists: data.public_gists,
          public_repos: data.public_repos,
        },
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
