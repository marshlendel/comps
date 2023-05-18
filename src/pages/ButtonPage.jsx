import Button from "../components/Button"
import {
  AiFillStar,
  AiFillDislike,
  AiFillLike,
} from "react-icons/ai";

const ButtonPage = () => {
  return (
    <>
      <div>
        <Button warning rounded>
          <AiFillStar />
          Click Me
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <AiFillLike /> Like
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <AiFillDislike /> Dislike
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;