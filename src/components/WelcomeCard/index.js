import { EmojiSmile } from 'react-bootstrap-icons';
import StatusCard from '../StatusCard';

const WelcomeCard = () => {
  return (
    <StatusCard
      message='Hello, search a user to see their info'
      icon={<EmojiSmile />}
    />
  );
};

export default WelcomeCard;
