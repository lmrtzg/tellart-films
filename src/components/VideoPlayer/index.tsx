import React, { useState } from 'react';
import { Container, CloseButton } from './style';
import CloseIcon from '../../images/close.svg';
import LoadingSpinner from '../UI/LoadingSpinner/index';

interface Props {
  link: string;
  onClose: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const VideoPlayer: React.FC<Props> = ({ link, onClose }) => {
  const [loader, showLoader] = useState(true);
  return (
    <>
      <Container>
        {loader ? <LoadingSpinner /> : null}
        <CloseButton src={CloseIcon} onClick={onClose} />
        <iframe
          src={link}
          style={{
            display: 'block',
            width: '100%',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          onLoad={() => showLoader(false)}
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Container>
    </>
  );
};

export default VideoPlayer;
