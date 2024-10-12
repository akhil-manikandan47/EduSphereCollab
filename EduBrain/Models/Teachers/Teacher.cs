using EduBrain.Models.Clubs;
using EduBrain.Models.Departments;
using EduBrain.Models.EmployeeCategories;
using EduBrain.Models.Subjects;
using System.ComponentModel.DataAnnotations;

namespace EduBrain.Models.Teachers
{
    public class Teacher
    {
        [Key]
        public int EmployeeId { get; set; }  // Primary key for Teacher entity

        public string TeacherName { get; set; }  // Name of the teacher
        public string Email { get; set; }  // Email address of the teacher
        public string Mobile { get; set; }  // Mobile number of the teacher
        public string Gender { get; set; }  // Gender of the teacher
        public string Address { get; set; }  // Address of the teacher
        public DateTime DateOfBirth { get; set; }  // Date of birth of the teacher

        // Foreign key properties
        public int CategoryId { get; set; }
        public int DepartmentId { get; set; }
        public int SubjectId { get; set; }
        public int ClubId { get; set; }

        // Navigation properties
        public virtual EmployeeCategory Category { get; set; }  // For EmployeeCategory
        public virtual Department Department { get; set; }  // For Department
        public virtual Subject Subject { get; set; }  // For Subject
        public virtual Club Club { get; set; }  // For Club
    }
}
