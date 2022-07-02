import PropTypes from 'prop-types';

const RepoItem = ({ name, fullName, linkToRepo }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{fullName}</h4>
      <a href={linkToRepo} target='_blank' rel='noopener noreferrer'>
        {fullName}
      </a>
    </div>
  );
};

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  linkToRepo: PropTypes.string.isRequired,
};

export default RepoItem;
