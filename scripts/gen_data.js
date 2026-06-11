import { writeFileSync } from 'fs';

const firstNames = ['Arjun', 'Priya', 'Ravi', 'Anita', 'Siddharth', 'Meera', 'Kavya', 'Rajesh', 'Sunita', 'Vikram', 'Neha', 'Amit', 'Divya', 'Rohan', 'Pooja', 'Aditya', 'Shreya', 'Harish', 'Sandeep', 'Geeta', 'Abhishek', 'Ritika', 'Naveen', 'Isha', 'Manish', 'Deepa', 'Nikhil', 'Sneha', 'Rohit', 'Anjali', 'Harsh', 'Priyanka', 'Akshay', 'Swati', 'Vinay', 'Ananya', 'Sameer', 'Neela', 'Ashish', 'Poorna'];
const lastNames = ['Kumar', 'Singh', 'Sharma', 'Patel', 'Mehta', 'Gupta', 'Verma', 'Pandey', 'Reddy', 'Nair', 'Rao', 'Iyer', 'Chandra', 'Kapoor', 'Malhotra', 'Sinha', 'Bhat', 'Desai', 'Bhatt', 'Yadav', 'Joshi', 'Mishra', 'Shah', 'Jain', 'Chakraborty', 'Saxena', 'Trivedi', 'Rana', 'Das', 'Dey'];
const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'protonmail.com'];
const courses = ['Full Stack Web Dev', 'AI & Prompt Engineering', 'React & Next.js', 'Python Programming', 'Generative AI Masterclass', 'Figma Complete Course', 'UI/UX Design Mastery', 'Data Science Bootcamp', 'Machine Learning 101', 'Node.js Backend', 'Cybersecurity Basics', 'Deep Learning Advanced'];
const categories = ['Development', 'AI', 'Design', 'Data Science', 'Security'];
const milestones = ['Quiz Passed', 'Project Review', 'UI Challenge', 'Code Review', '🏆 Top Scorer', '⭐ Quiz Ace', 'Milestone Reached', 'Passed Module'];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gradebookRows = [];
const students = [];

for (let i = 0; i < 1000; i++) {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const name = `${firstName} ${lastName}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@${getRandomElement(domains)}`;
  const avatar = `${firstName[0]}${lastName[0]}`;
  const course = getRandomElement(courses);
  const category = getRandomElement(categories);
  const progress = getRandomInt(40, 100);
  const quiz = Math.min(100, progress + getRandomInt(-10, 10));
  const milestone = getRandomElement(milestones);
  
  // Gradebook row
  gradebookRows.push({ name, course, cat: category, progress, quiz, milestone });
  
  // Student with 2 assigned courses and 2 locked courses
  const assignedCourses = [course];
  const usedCourses = new Set([course]);
  
  // Add second random course
  let secondCourse = getRandomElement(courses);
  while (usedCourses.has(secondCourse)) {
    secondCourse = getRandomElement(courses);
  }
  assignedCourses.push(secondCourse);
  usedCourses.add(secondCourse);
  
  // Add locked courses
  const lockedCourses = [];
  for (let j = 0; j < 2; j++) {
    let locked = getRandomElement(courses);
    while (usedCourses.has(locked) || lockedCourses.includes(locked)) {
      locked = getRandomElement(courses);
    }
    lockedCourses.push(locked);
    usedCourses.add(locked);
  }
  
  students.push({
    name,
    email,
    avatar,
    courses: assignedCourses,
    locked: lockedCourses
  });
}

const output = `export const GRADEBOOK_ROWS = ${JSON.stringify(gradebookRows)};

export const STUDENTS = ${JSON.stringify(students)};`;

writeFileSync('generated_data.js', output);
console.log('Generated data written to generated_data.js');
console.log('Total size:', (output.length / 1024).toFixed(2), 'KB');
