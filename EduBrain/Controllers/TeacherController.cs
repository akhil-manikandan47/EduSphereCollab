﻿using EduBrain.Data;
using EduBrain.Models.Teachers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace EduBrain.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly EduBrainContext _context;

        public TeacherController(EduBrainContext context)
        {
            _context = context;
        }

        // GET: api/teacher/getallteachers
        [HttpGet("getallteachers")]
        public async Task<IActionResult> GetAllTeachers()
        {
            var teachers = await _context.Teachers
                .Include(t => t.Category)
                .Include(t => t.Department)
                .Include(t => t.Subject)
                .Include(t => t.Club)
                .ToListAsync();

            return Ok(teachers);
        }

        // GET: api/teacher/getteacherbyid/{id}
        [HttpGet("getteacherbyid/{id}")]
        public async Task<IActionResult> GetTeacherById(int id)
        {
            var teacher = await _context.Teachers
                .Include(t => t.Category)
                .Include(t => t.Department)
                .Include(t => t.Subject)
                .Include(t => t.Club)
                .FirstOrDefaultAsync(t => t.EmployeeId == id);

            if (teacher == null)
            {
                return NotFound($"Teacher with ID {id} is not found.");
            }
            return Ok(teacher);
        }

        // POST: api/teacher/addteacher
        [HttpPost("addteacher")]
        public async Task<IActionResult> AddTeacher([FromBody] TeacherDto teacherDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var teacher = new Teacher
            {
                TeacherName = teacherDto.TeacherName,
                Email = teacherDto.Email,
                Mobile = teacherDto.Mobile,
                Gender = teacherDto.Gender,
                Address = teacherDto.Address,
                DateOfBirth = teacherDto.DateOfBirth,
                CategoryId = teacherDto.CategoryId,
                DepartmentId = teacherDto.DepartmentId,
                SubjectId = teacherDto.SubjectId,
                ClubId = teacherDto.ClubId
            };

            await _context.Teachers.AddAsync(teacher);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTeacherById), new { id = teacher.EmployeeId }, teacher);
        }

        // PUT: api/teacher/updateteacher/{id}
        [HttpPut("updateteacher/{id}")]
        public async Task<IActionResult> UpdateTeacher(int id, [FromBody] TeacherDto teacherDto)
        {
            if (id != teacherDto.EmployeeId)
            {
                return BadRequest("ID mismatch.");
            }

            var teacherToUpdate = await _context.Teachers.FirstOrDefaultAsync(t => t.EmployeeId == id);
            if (teacherToUpdate == null)
            {
                return NotFound($"Teacher with ID {id} is not found.");
            }

            // Update the fields
            teacherToUpdate.TeacherName = teacherDto.TeacherName;
            teacherToUpdate.Email = teacherDto.Email;
            teacherToUpdate.Mobile = teacherDto.Mobile;
            teacherToUpdate.Gender = teacherDto.Gender;
            teacherToUpdate.Address = teacherDto.Address;
            teacherToUpdate.DateOfBirth = teacherDto.DateOfBirth;
            teacherToUpdate.CategoryId = teacherDto.CategoryId;
            teacherToUpdate.DepartmentId = teacherDto.DepartmentId;
            teacherToUpdate.SubjectId = teacherDto.SubjectId;
            teacherToUpdate.ClubId = teacherDto.ClubId;

            _context.Teachers.Update(teacherToUpdate);
            await _context.SaveChangesAsync();
            return Ok(teacherToUpdate);
        }

        // DELETE: api/teacher/deleteteacher/{id}
        [HttpDelete("deleteteacher/{id}")]
        public async Task<IActionResult> RemoveTeacher(int id)
        {
            var teacherToDelete = await _context.Teachers.FirstOrDefaultAsync(t => t.EmployeeId == id);
            if (teacherToDelete == null)
            {
                return NotFound($"Teacher with ID {id} is not found.");
            }

            _context.Teachers.Remove(teacherToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

    // DTO Class for Teacher
    public class TeacherDto
    {
        public int EmployeeId { get; set; }
        public string TeacherName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int CategoryId { get; set; }
        public int DepartmentId { get; set; }
        public int SubjectId { get; set; }
        public int ClubId { get; set; }
    }
}
