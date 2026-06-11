import { readFileSync, writeFileSync } from 'fs';

// Read generated data
const genData = readFileSync('generated_data.js', 'utf8');

// Read original data.js
let dataContent = readFileSync('../src/components/home-page/data.js', 'utf8');

// Find the start of GRADEBOOK_ROWS and STUDENTS exports in the generated data
const gradebookMatch = genData.match(/export const GRADEBOOK_ROWS = \[[\s\S]*?\];/);
const studentsMatch = genData.match(/export const STUDENTS = \[[\s\S]*?\];/);

if (gradebookMatch && studentsMatch) {
  // Extract just the arrays
  const gradebook = gradebookMatch[0];
  const students = studentsMatch[0];
  
  console.log('Generated data extracted successfully');
  console.log('GRADEBOOK_ROWS size:', gradebook.length, 'bytes');
  console.log('STUDENTS size:', students.length, 'bytes');
  
  // Replace in data.js
  dataContent = dataContent.replace(/export const GRADEBOOK_ROWS = \[[\s\S]*?\];/, gradebook);
  dataContent = dataContent.replace(/export const STUDENTS = \[[\s\S]*?\];/, students);
  
  // Write back
  writeFileSync('src/components/home-page/data.js', dataContent);
  console.log('data.js updated successfully!');
} else {
  console.log('Failed to extract generated data');
  console.log('gradebookMatch:', !!gradebookMatch);
  console.log('studentsMatch:', !!studentsMatch);
}
