import { Review } from "../Types/Review";
import { ReviewService } from "./ReviewService";

export class ReviewResolver {
  private service: ReviewService;

  constructor(service: ReviewService) {
    this.service = service;
  }

  public resolve(_: undefined, args: any): Review[] {
    return this.service.getReviews();
  }
}
