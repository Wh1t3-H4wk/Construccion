using Cafeteria.DB;
using Cafeteria.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cafeteria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CodigoController : ControllerBase
    {
        
        private readonly UnitOfWork _context;
        public CodigoController(ApplicationDbContext db) => _context = new UnitOfWork(db);

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("{codigo}")]
        public IActionResult GetCodigo(string codigo)
            => _context.Codigos.Exists(codigo) ? (IActionResult) Ok(_context.Codigos[codigo].Descuento) : NotFound();

        [Authorize(Roles = "Admin,Trabajador")]
        [HttpDelete("{codigo}")]
        public IActionResult RemoveCodigo(string codigo)
        {
            if (!_context.Codigos.Exists(codigo)) return NotFound();
            _context.Codigos.Remove(_context.Codigos[codigo]);
            _context.Complete();
            return Ok();
        }
        
        [Authorize(Roles = "Admin")]
        [HttpPost()]
        public IActionResult AddCodigo(Codigo codigo)
        {
            if (_context.Codigos.Exists(codigo.Name)) return BadRequest();
            _context.Codigos.Add(codigo);
            return Ok();
        }
        
        
    }
}