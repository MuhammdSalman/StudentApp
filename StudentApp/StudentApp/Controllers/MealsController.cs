using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApp.Data;
using StudentApp.Model;

namespace StudentApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MealsController : ControllerBase
    {
        private readonly ILogger<MealsController> _logger;
        private readonly StudentAppDbContext _context;

        public MealsController(ILogger<MealsController> logger, StudentAppDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMeals()
        {
            var meals = await _context.Meals.ToListAsync();
            return Ok(meals);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMealById(int id)
        {
            var meal = await _context.Meals.FindAsync(id);
            if (meal == null)
            {
                return NotFound();
            }

            return Ok(meal);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMeal([FromBody] CreateMeal createMeal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }var meal = new Meal();
            meal.CreatedOn = DateTime.Now;
            meal.Day = createMeal.Day;
            meal.MealType = createMeal.MealType;
            meal.FoodType = string.Join(",", createMeal.FoodType); 
            meal.FoodItem = string.Join(",", createMeal.FoodItem);

            await _context.Meals.AddAsync(meal);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMeal(int id, [FromBody] Meal meal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var mealToUpdate = await _context.Meals.FindAsync(id);
            if (mealToUpdate == null)
            {
                return NotFound();
            }

            //mealToUpdate.Name = meal.Name;
            //mealToUpdate.EmailAddress = meal.EmailAddress;
            //mealToUpdate.PhoneNumber = meal.PhoneNumber;
            //mealToUpdate.Parish = meal.Parish;
            //mealToUpdate.ProgramId = meal.ProgramId;
            //mealToUpdate.ShirtSize = meal.ShirtSize;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMeal(int id)
        {
            var mealToDelete = await _context.Meals.FindAsync(id);
            if (mealToDelete == null)
            {
                return NotFound();
            }

            _context.Meals.Remove(mealToDelete);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}