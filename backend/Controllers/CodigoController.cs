using System.Collections.Generic;
using System.Linq;
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
        
        private readonly IUnitOfWork _context;
        public CodigoController(IUnitOfWork unitOfWork) => _context = unitOfWork;

        [HttpGet] 
        public ActionResult<IEnumerable<Codigo>> GetAll() => Ok(_context.Codigos.GetAll());
        
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("{codigo}")]
        public ActionResult<Codigo> Validar(string codigo)
            => _context.Codigos.Exists(codigo) ? (ActionResult<Codigo>) Ok(_context.Codigos[codigo]) : NotFound();

        //[Authorize(Roles = "Admin")]
        [HttpDelete("{codigo}")]
        public IActionResult Eliminar(string codigo)
        {
            if (!_context.Codigos.Exists(codigo)) return NotFound();
            _context.Codigos.Remove(_context.Codigos[codigo]);
            _context.Complete();
            return Ok();
        }
        
        //[Authorize(Roles = "Admin")]
        [HttpPost()]
        public IActionResult Crear(Codigo codigo)
        {
            if (_context.Codigos.Exists(codigo.Name)) return BadRequest();
            _context.Codigos.Add(codigo);
			_context.Complete();
            return Ok();
        }
        
        
    }
}
