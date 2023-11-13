using StudentApp.Data;

namespace StudentApp.ViewModels
{
    public class StudentViewModel
    {
        public Student Student { get; set; } = new Student();
        public StudentMealPreference StudentMealPreference { get; set; } = new StudentMealPreference();
    }
}
