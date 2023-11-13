namespace StudentApp.Data
{
    public class StudentMealPreference
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public Student? Student { get; set; } = null;
        public int MealId { get; set; }
        public Meal? Meal { get; set; } = null;
        public string CourseOfStudy { get; set; } = string.Empty;
    }
}
