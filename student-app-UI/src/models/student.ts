export class Student {
    id: number = 0;
    name: string = '';
    emailAddress: string = '';
    phoneNumber: string = '';
    parish: string = '';
    programId: string = '';
    program: StudentProgram = new StudentProgram();
    shirtSize: string='';
}

export class StudentProgram{
    id:number = 0;
    name:string = '';
}

export class StudentViewModel{
    student: Student = new Student();
    studentMealPreference: StudentMealPreference = new StudentMealPreference();
}

export class StudentMealPreference {
    id: number = 0;
    studentId: string='';
    student: Student = new Student();
    mealId: string='';
    meal: Meal = new Meal();
    courseOfStudy: string='';

}

export class CreateStudentMealPreference {
    studentId: string='';
    mealId: string='';
    courseOfStudy: string='';
}

export class Meal {
    id: number = 0;
    createdOn: Date = new Date();
    mealType: string = '';
    foodType: string = '';
    foodTypes: string[]=[];
    day: string = '';
    foodItem: string = '';
    foodItems: string[]=[];
}
