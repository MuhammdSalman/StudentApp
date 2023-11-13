namespace StudentApp.Data
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string EmailAddress { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Parish { get; set; } = string.Empty;
        public int ProgramId { get; set; }
        public StudentProgram Program { get; set; } = new StudentProgram();
        public string ShirtSize { get; set; } = string.Empty;

    }

}
