import { type SchemaTypeDefinition } from 'sanity'
import { project } from "./project"; 
import { projectType } from "./projectTypes";
import portfolioReview from './portfolioReview';
import projectReview from './projectReview';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, projectType, portfolioReview, projectReview],
};