import { type SchemaTypeDefinition } from 'sanity'
import { project } from "./project"; 
import { projectType } from "./projectTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, projectType],
};