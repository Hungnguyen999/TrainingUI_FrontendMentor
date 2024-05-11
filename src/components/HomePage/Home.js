export const Home = ({ navigate }) => {
  return (
    <div className="homepage">
      <button onClick={() => navigate('/recipe-page')}>
        Open The recipe page
      </button>
      <button onClick={() => navigate('/news-letter')}>
        Open The Newsletter page
      </button>
    </div>
  );
}
