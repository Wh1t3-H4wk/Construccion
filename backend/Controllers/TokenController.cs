using Cafeteria.Models;
using Cafeteria.Security;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Cafeteria.Controllers
{
    /// <summary>
    /// Testing Conroller, must be deleted in realease
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class TokenController : ControllerBase
    {
       
        private IConfiguration _configuration { get; }

        public TokenController(IConfiguration conf)
        {
            _configuration = conf;
        }
        
        [HttpGet("cliente")]
        public Token GenerateClienteToken() => TokenManager.GenerateToken( new BaseUser {Mail = "dasda@csad.com", Rol = "Cliente"} ,_configuration["Jwt:Key"]);
        
        [HttpGet("admin")]
        public Token GenerateAdminToken() => TokenManager.GenerateToken( new BaseUser {Mail = "dasda@csad.com", Rol = "Admin"} ,_configuration["Jwt:Key"]);
        
        [HttpGet("trabajador")]
        public Token GenerateTrabajadorToken() => TokenManager.GenerateToken( new BaseUser {Mail = "dasda@csad.com", Rol = "Trabajador"} ,_configuration["Jwt:Key"]);
        
    }
}