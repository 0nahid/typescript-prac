const isSubmitted = (value: boolean, date: number) => {
    return value === true && date == 17
      ? {
          isSubmitted: true,
          date: `${date} August`,
        }
      : false;
  };
  
  interface Person {
    name: string;
    designation?: string;
    id?: number;
    varsity?: string;
    email: string;
  }
  
  const faculty: Person = {
    name: "Shahinur Alam",
    designation: "Senior Lecturer BCSE (IUBAT)",
    email: "shaheen@iubat.edu",
  };
  
  const student: Person = {
    name: "Nahid Hassan Bulbul",
    email: "22103166@iubat.edu",
    varsity:
      "IUBAT - International University of Business Agriculture and Technology",
    id: 22103166,
  };
  
  const submit = isSubmitted(true, 17);
  console.log(`faculty: ${JSON.stringify(faculty)}`);
  console.log(`student: ${JSON.stringify(student)}`);
  console.log(`result: ${JSON.stringify(submit)}`);
  
  // Language: C & this page with typescript (ES6)
  // All code will be available on https://github.com/0nahid/C-project1
  