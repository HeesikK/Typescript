import { useQuery } from "react-query";
import CustomButton from "../components/button/button";
import CustomInput from "../components/input/input";
import { getMovieList } from "../apis/api";

const HomePage = () => {
  const { data: movieList } = useQuery("movieList", () => getMovieList());

  interface Movie {
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  const movieData: Movie[] = movieList && movieList.results;
  console.log("영화 데이터값은?", movieData);

  return (
    <div>
      {movieData.map((data) => (
        <div>{data.title}</div>
      ))}
      <CustomButton variant="primary" size="small" shape="round">
        button
      </CustomButton>
      <CustomInput variant="primary" size="small" shape="shape" />
    </div>
  );
};

export default HomePage;
