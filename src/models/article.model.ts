import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export const ArticleSchemaName = 'articles';

export const ArticleSchema = mongoose.model(
	ArticleSchemaName,
	new Schema(
		{
			id: {
				type: String,
				unique: true
			},
			title: {
				type: String,
				default: 'DEFAULT'
			},
			headLine: {
				type: String,
				default: ''
			},
			mainPicture: {
				type: String,
				default: 'https://i.imgur.com/uR8Q8R8.jpg'
			},
			issn: {
				type: Number,
				default: 0
			},
			publicationDate: {
				type: Date,
				default: new Date()
			},
			description: {
				type: String,
				default: 'An amazing DEFAULT'
			},
			news: [{
				title: {
					type: String,
					default: 'Nothing happened'
				},
				importance: {
					type: Number,
					default: 1
				}
			}]
		},
		{
			collection: ArticleSchemaName
		}
	)
);
