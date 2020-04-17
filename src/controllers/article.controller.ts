import { Request, Response } from 'express';
import { Document } from 'mongoose';
import { ArticleSchema } from '../models';
import { AController } from './abstract.controller';

export class ArticlesController extends AController {

	public getAll(request: Request, response: Response): void {
		ArticleSchema.find(
			this.getFilters(request),
			this.getFields(request),
			this.getPaging(request),
			(error: Error, articles: Document[]) => {
				if (error != null) {
					response.send(error);
				}
				response.json(articles);
			});
	}

	public getById(request: Request, response: Response): void {
		ArticleSchema.find(
			{ id: request.params.articleId },
			this.getFields(request),
			(error: Error, articles: Document[]) => {
				if (error != null) {
					response.send(error);
				}
				response.json(articles[0]);
			});
	}

	public create(request: Request, response: Response): void {
		let newArticle = new ArticleSchema(request.body);
		newArticle.save(
			(error: Error, article: Document) => {
				if (error) {
					response.send(error);
				}
				response.json(article);
			});
	}

	public delete(request: Request, response: Response): void {
		ArticleSchema.remove(
			{ id: request.params.articleId },
			(error: Error) => {
				if (error) {
					response.send(error);
				}
				response.json({ message: 'Article successfully deleted' });
			});
	}

}
