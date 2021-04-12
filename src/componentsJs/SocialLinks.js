
import spotify from '../assets/desktop/spotify.svg';
import applePodcasts from '../assets/desktop/apple-podcast.svg';
import googlePodcasts from '../assets/desktop/google-podcasts.svg';
import pocketCasts from '../assets/desktop/pocket-casts.svg';

const SocialLinks = () => {
  return (
    <div className='socialLinks'>
      <span>
        <img src={spotify} alt='Spotify-Icon' />
      </span>
      <span>
        <img src={applePodcasts} alt='ApplePodcasts' />
      </span>
      <span>
        <img src={googlePodcasts} alt='googlePodcasts-Icon' />
      </span>
      <span>
        <img src={pocketCasts} alt='pocketCasts-Icon' />
      </span>

    </div>
  );
};

export default SocialLinks;
