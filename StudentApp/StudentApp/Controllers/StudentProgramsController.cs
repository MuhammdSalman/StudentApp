using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApp.Data;

namespace StudentApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentProgramsController : ControllerBase
    {
        private readonly ILogger<StudentProgramsController> _logger;
        private readonly StudentAppDbContext _context;

        public StudentProgramsController(ILogger<StudentProgramsController> logger, StudentAppDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudentPrograms()
        {
            var programs = await _context.StudentPrograms.ToListAsync();
            return Ok(programs);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudentProgramById(int id)
        {
            var program = await _context.StudentPrograms.FindAsync(id);
            if (program == null)
            {
                return NotFound();
            }

            return Ok(program);
        }

        [HttpPost]
        public async Task<IActionResult> CreateStudentProgram([FromBody] StudentProgram studentProgram)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _context.StudentPrograms.AddAsync(studentProgram);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}