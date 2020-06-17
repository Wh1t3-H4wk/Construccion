using Cafeteria.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cafeteria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TokenController : ControllerBase
    {
       
        [HttpGet("cliente")]
        public string GenerateClienteToken() => TokenManager.GenerateToken( new BaseUser {Mail = "dasda@csad.com", Rol = "Cliente"} );
        
        [HttpGet("admin")]
        public string GenerateAdminToken() => TokenManager.GenerateToken( new BaseUser {Mail = "dasda@csad.com", Rol = "Admin"} );
        
        [HttpGet("trabajador")]
        public string GenerateTrabajadorToken() => TokenManager.GenerateToken( new BaseUser {Mail = "dasda@csad.com", Rol = "Trabajador"} );
        
    }
}