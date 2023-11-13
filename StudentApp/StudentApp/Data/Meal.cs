namespace StudentApp.Data
{
    public class Meal
    {
        public int Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public string MealType { get; set; } = string.Empty;
        public string FoodType { get; set; } = string.Empty;
        public string Day { get; set; } = string.Empty;
        public string FoodItem { get; set; } = string.Empty;
    }
}
