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
        public IEnumerable<Producto> GetAll() => _context.Productos.GetAll();
        
        [HttpGet("category/{category}")]
        public IEnumerable<Producto> GetByCateogry(string category) => _context.Productos.GetByCategory(category);

        [HttpGet("destacado")]
        public IEnumerable<Producto> GetDestacados() => _context.Productos.Find(p => p.Destacado == true);

    }
}