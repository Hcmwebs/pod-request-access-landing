const Title = () => {
  const title = 'Publish your podcasts ';

  const para =
    ' Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify,Apple Podcasts, Google Podcasts, Pocket Casts and more!';

  return (
    <div className='text'>
      <h1>
        {title}
        <span>Everywhere.</span>
      </h1>
      <p>{para}</p>
    </div>
  );
};

export default Title;
