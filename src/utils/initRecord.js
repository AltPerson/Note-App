import { addNote } from '../data/db/index';
export const initRecord = () => {
  const data = `# TIPS
---
'# Header ' -> Header №1
# Header
'## Header ' -> Header №2
## Header
Too see more examples use button help(?)`;
  addNote(data);
};
