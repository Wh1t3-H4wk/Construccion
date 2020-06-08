using System.Collections.Generic;
using System.Linq;
using Cafeteria.Models;
using Microsoft.AspNetCore.Mvc;
using StringComparison = System.StringComparison;

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

        [HttpGet("{id}")]
        public Producto GetById(int id) => _context.Productos.Get(id);

        [HttpGet("category/{category}")]
        public IEnumerable<Producto> GetByCateogry(string category)
            => _context.Productos.Find(p => p.Categoria.Equals(StringComparison.InvariantCultureIgnoreCase));

        [HttpGet("destacado")]
        public IEnumerable<Producto> GetDestacados() => _context.Productos.Find(p => p.Destacado == true);

    }
}