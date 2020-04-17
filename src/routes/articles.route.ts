import { Express } from 'express';
import { ArticlesController } from '../controllers';

export function articlesRoute(app: Express): void {
	const controller = new ArticlesController();

	app.route('/api/articles')
		.get((request, result) => {
			controller.getAll(request, result);
		})
		.post((request, result) => {
			controller.create(request, result);
		});

	app.route('/api/articles/:articleId')
		.get((request, result) => {
			controller.getById(request, result);
		})
		.delete((request, result) => {
			controller.delete(request, result);
		});
}
