import { Review } from "../Types/Review";
import { reviews } from "../../data/reviews";

export class ReviewService {
  public getReviews(): Review[] {
    return reviews;
  }
}
