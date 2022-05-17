import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../repository-feedbacks";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })    
  }
}