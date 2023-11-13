using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApp.Data;

namespace StudentApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentMealPreferencesController : ControllerBase
    {
        private readonly ILogger<StudentMealPreferencesController> _logger;
        private readonly StudentAppDbContext _context;

        public StudentMealPreferencesController(ILogger<StudentMealPreferencesController> logger, StudentAppDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudentMealPreferences()
        {
            var studentMealPreferences = await _context.StudentMealPreferences.Include(x=>x.Student).Include(x => x.Meal).ToListAsync();
            return Ok(studentMealPreferences);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudentMealPreferenceById(int id)
        {
            var studentMealPreference = await _context.StudentMealPreferences.FindAsync(id);
            if (studentMealPreference == null)
            {
                return NotFound();
            }

            return Ok(studentMealPreference);
        }

        [HttpPost]
        public async Task<IActionResult> CreateStudentMealPreference([FromBody] StudentMealPreference studentMealPreference)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _context.StudentMealPreferences.AddAsync(studentMealPreference);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudentMealPreference(int id, [FromBody] StudentMealPreference studentMealPreference)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentMealPreferenceToUpdate = await _context.StudentMealPreferences.FindAsync(id);
            if (studentMealPreferenceToUpdate == null)
            {
                return NotFound();
            }

            //studentMealPreferenceToUpdate.Name = studentMealPreference.Name;
            //studentMealPreferenceToUpdate.EmailAddress = studentMealPreference.EmailAddress;
            //studentMealPreferenceToUpdate.PhoneNumber = studentMealPreference.PhoneNumber;
            //studentMealPreferenceToUpdate.Parish = studentMealPreference.Parish;
            //studentMealPreferenceToUpdate.ProgramId = studentMealPreference.ProgramId;
            //studentMealPreferenceToUpdate.ShirtSize = studentMealPreference.ShirtSize;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentMealPreference(int id)
        {
            var studentMealPreferenceToDelete = await _context.StudentMealPreferences.FindAsync(id);
            if (studentMealPreferenceToDelete == null)
            {
                return NotFound();
            }

            _context.StudentMealPreferences.Remove(studentMealPreferenceToDelete);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}