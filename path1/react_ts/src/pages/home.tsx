import { useQuery } from "react-query";
import CustomButton from "../components/button/button";
import CustomInput from "../components/input/input";
import { getMovieList } from "../apis/api";

const HomePage = () => {
  const { data: movieList } = useQuery("movieList", () => getMovieList());

  console.log(movieList);

  return (
    <div>
      <CustomButton variant="primary" size="small" shape="round">
        button
      </CustomButton>
      <CustomInput variant="primary" size="small" shape="shape" />
    </div>
  );
};

export default HomePage;
