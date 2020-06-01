using System.Collections.Generic;
using System.Linq;
using Cafeteria.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cafeteria.Controllers
{    
    [ApiController]
    [Route("[controller]")]
    public class ProductoController : ControllerBase
    {
        private readonly UnityOfWork _context;
        public ProductoController(ApplicationDbContext db) =>_context = new UnityOfWork(db);

        [HttpGet]
        public IEnumerable<Producto> Get()
        {
            return _context.Productos.GetAll();
        }
    }
}