import { EmojiFrown } from 'react-bootstrap-icons';
import StatusCard from '../StatusCard';

const UserNotFound = () => {
  return <StatusCard icon={<EmojiFrown />} message='User not found' />;
};

export default UserNotFound;
