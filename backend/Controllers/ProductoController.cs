using System.Collections.Generic;
using System.Security.Cryptography;
using Cafeteria.DB;
using Cafeteria.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cafeteria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductoController : ControllerBase
    {
        private readonly UnitOfWork _context;
        public ProductoController(ApplicationDbContext db) => _context = new UnitOfWork(db);

        [HttpGet]
        public IActionResult GetAll() => Ok(_context.Productos.GetAll());

        [HttpPost]
        public IActionResult Add(Producto producto)
        {
            _context.Productos.Add(producto);
            _context.Complete();
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            return Ok(_context.Productos[id]);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Producto producto)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            producto.Id = id;
            _context.Productos[producto.Id] = producto;
            return Ok();
        }

        [HttpGet("category/{category}")]
        public IActionResult GetByCateogry(string category)
            => Ok(_context.Productos.Find(p => p.Categoria.ToLower() == category && !p.Eliminado));

        [HttpGet("destacado")]
        public IActionResult GetDestacados() => Ok(_context.Productos.Find(p => p.Destacado && !p.Eliminado));

        private IActionResult Destacado(int id, bool destacado)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            _context.Productos[id].Destacado = destacado;
            _context.Complete();
            return Ok();
        }

        [HttpDelete("destacado/{id}")]
        public IActionResult RemoveDestacado(int id) => Destacado(id, false);

        [HttpPut("destacado/{id}")]
        public IActionResult AddDestacado(int id) => Destacado(id, true);

        [HttpDelete("{id}")]
        public IActionResult Eliminar(int id)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            _context.Productos[id].Eliminado = true;
            _context.Productos[id].Disponible = false;
            _context.Productos[id].Disponible = false;
            return Ok();
        }

    }
}