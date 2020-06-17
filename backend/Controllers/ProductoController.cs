using System.Collections.Generic;
using Cafeteria.Models;
using Microsoft.AspNetCore.Authorization;
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

        [HttpPost]
        public void Add(Producto producto)
        {
            _context.Productos.Add(producto);
            _context.Complete();
        }

        [HttpGet("{id}")]
        public Producto GetById(int id) => _context.Productos[id];

        [HttpPut("{id}")]
        public void Update(int id, Producto producto)
        {
            producto.Id = id;
            Update(producto);
        }

        [HttpPut]
        public void Update(Producto producto) => _context.Productos[producto.Id] = producto;
        
        [HttpGet("category/{category}")]
        public IEnumerable<Producto> GetByCateogry(string category)
            => _context.Productos.Find(p => p.Categoria.ToLower() == category);

        [HttpGet("destacado")]
        public IEnumerable<Producto> GetDestacados() => _context.Productos.Find(p => p.Destacado);

        [HttpDelete]
        public void Remove(Producto producto)
        {
            _context.Productos.Remove(producto);
            _context.Complete();
        }

        [HttpDelete("{id}")]
        public void Remove(int id) => Remove(_context.Productos[id]);

    }
}