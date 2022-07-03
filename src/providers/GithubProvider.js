import { createContext, useState } from 'react';

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    user: {
      login: undefined,
      name: undefined,
      publicUrl: undefined,
      blog: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      publicGists: 0,
      publicRepos: 0,
    },
    repositories: [],
    starred: [],
  });

  const contextValue = {
    githubState,
  };
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
