using Microsoft.EntityFrameworkCore;

namespace StudentApp.Data
{
    public class StudentAppDbContext : DbContext
    {
        public DbSet<StudentProgram> StudentPrograms { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Meal> Meals { get; set; }
        public DbSet<StudentMealPreference> StudentMealPreferences { get; set; }

        public StudentAppDbContext(DbContextOptions<StudentAppDbContext> options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlServer(connectionString);
        }
    }

}
