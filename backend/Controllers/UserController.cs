using System.Linq;
using System.Security.Claims;
using Cafeteria.DB;
using Cafeteria.Models;
using Cafeteria.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Cafeteria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IUnitOfWork _context { get; }
        private IConfiguration _configuration { get; }

        public UserController(IUnitOfWork unitOfWork, IConfiguration conf)
        {
            _context = unitOfWork;
            _configuration = conf;
        }
        
        [HttpGet]
        public ActionResult<Token> IniciarSesion(string mail, string password)
        {
            ActionResult<Token> response = NotFound("User or password invalid");
            if (!_context.BaseUsers.Exists(mail)) return response;
            BaseUser user = _context.BaseUsers[mail];
            return password.ValidatePassword(user.Contraseña)? Ok(TokenManager.GenerateToken(user,_configuration["Jwt:Key"])) : response;
        }
        [HttpPost("cliente")]
        public IActionResult RegisterCliente(Cliente user)
        {
            if (_context.BaseUsers.Exists(user.Mail)) return BadRequest("User already exist");
            user.Contraseña = user.Contraseña.HashPassword();
            _context.Clientes.Add(user);
            _context.Complete();
            return Ok();
        }
        
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("cliente/{mail}")]
        public ActionResult<Cliente> GetCliente(string mail)
        {
            if(!_context.Clientes.Exists(mail)) return NotFound();
            //if (mail != User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value) return NotFound();
            return Ok(_context.Clientes[mail]);
        }

        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut("cliente/{mail}")]
        public IActionResult ModificarCuenta(string mail, Cliente cliente)
        {
            if(!_context.Clientes.Exists(mail)) return NotFound();
            //if (mail != User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value) return NotFound();
            Cliente user = _context.Clientes[mail];
            user.Direcion = cliente.Direcion;
            user.Telefono = cliente.Telefono;
            user.Apellidos = cliente.Apellidos;
            user.Nombres = cliente.Nombres;
            _context.Complete();
            return Ok();
        }
        
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpDelete("cliente/{mail}")]
        public IActionResult EliminarCuenta(string mail)
        {
            //if (mail != User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value) return NotFound();
            var cliente = _context.Clientes[mail];
            if (cliente == null) return NotFound();
            var pedidos = _context.Pedidos.Find(x => x.Cliente.Mail == mail);
            foreach (var xPedido in pedidos)
                xPedido.Cliente = null;
            
            _context.Clientes.Remove(cliente);
            _context.Complete();
            return Ok();
        }

        //[Authorize(Roles = "Admin")]
        [HttpPost("trabajador")]
        public IActionResult CrearEmpleado(Usuario user)
        {
            if (_context.BaseUsers.Exists(user.Mail)) return BadRequest("User already exist");
            user.Contraseña = user.Contraseña.HashPassword();
            user.Rol = "Trabajador";
            _context.Usuarios.Add(user);
            _context.Complete();
            return Ok();
        }

        //[Authorize(Roles = "Admin")]
        [HttpDelete("trabajador")]
        public IActionResult EliminarEmpleado(string mail)
        {
            if (!_context.BaseUsers.Exists(mail)) return BadRequest("User don't exist");
            _context.Usuarios.Remove(_context.Usuarios[mail]);
            return Ok();
        }
    }
}
