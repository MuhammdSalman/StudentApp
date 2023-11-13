using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApp.Data;
using StudentApp.ViewModels;

namespace StudentApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly ILogger<StudentsController> _logger;
        private readonly StudentAppDbContext _context;

        public StudentsController(ILogger<StudentsController> logger, StudentAppDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _context.Students.Include(i=>i.Program).ToListAsync();
            return Ok(students);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudentById(int id)
        {
            var student = await _context.Students.Include(x=>x.Program).FirstOrDefaultAsync(x => x.Id == id);
            var studentMeal = await _context.StudentMealPreferences.Include(x => x.Meal).OrderByDescending(x=>x.Id).FirstOrDefaultAsync(x=>x.StudentId == id);
            if (student == null)
            {
                return NotFound();
            }

            StudentViewModel studentViewModel = new StudentViewModel();
            studentViewModel.Student = student;
            studentViewModel.StudentMealPreference = studentMeal;

            return Ok(studentViewModel);
        }

        [HttpPost]
        public async Task<IActionResult> CreateStudent([FromBody] Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            student.Program = null;
            await _context.Students.AddAsync(student);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, [FromBody] Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentToUpdate = await _context.Students.FindAsync(id);
            if (studentToUpdate == null)
            {
                return NotFound();
            }

            studentToUpdate.Name = student.Name;
            studentToUpdate.EmailAddress = student.EmailAddress;
            studentToUpdate.PhoneNumber = student.PhoneNumber;
            studentToUpdate.Parish = student.Parish;
            studentToUpdate.ProgramId = student.ProgramId;
            studentToUpdate.ShirtSize = student.ShirtSize;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var studentToDelete = await _context.Students.FindAsync(id);
            if (studentToDelete == null)
            {
                return NotFound();
            }

            _context.Students.Remove(studentToDelete);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}