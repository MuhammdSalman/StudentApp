namespace StudentApp.Model
{
    public class CreateMeal
    {
        public DateTime CreatedOn { get; set; }
        public string MealType { get; set; } = string.Empty;
        public List<string> FoodType { get; set; } = new List<string>();
        public string Day { get; set; } = string.Empty;
        public List<string> FoodItem { get; set; } = new List<string>();
    }
}
