using System.Collections.Generic;
using AutoMapper;
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
        private readonly IUnitOfWork _context;
        private readonly IMapper _mapper;
        public ProductoController(IUnitOfWork unitOfWork)
        {
            _mapper = MapperExtetion.InitMapper();
            _context = unitOfWork;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Producto>> GetAll() => Ok(_context.Productos.GetAll());

        //[Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult CrearProducto(Producto producto)
        {
            _context.Productos.Add(producto);
            _context.Complete();
            return Ok();
        }

        [HttpGet("{id}")]
        public ActionResult<Producto> GetById(int id)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            return Ok(_context.Productos[id]);
        }
        
        //[Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult ModificarProducto(int id, Producto delta)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            _mapper.Map(delta, _context.Productos[id]);
            _context.Complete();
            return Ok();
        }

        [HttpGet("category/{category}")]
        public ActionResult<IEnumerable<Producto>> GetByCateogry(string category)
            => Ok(_context.Productos.Find(p => p.Categoria.ToLower() == category && !p.Eliminado));
        
        [HttpGet("destacado")]
        public ActionResult<IEnumerable<Producto>> GetDestacados() => Ok(_context.Productos.Find(p => p.Destacado && !p.Eliminado));

        private IActionResult MarcarDestacado(int id, bool destacado)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            _context.Productos[id].Destacado = destacado;
			_context.Complete();
            return Ok();
        }

        [HttpDelete("destacado/{id}")]
        public IActionResult RemoveDestacado(int id) => MarcarDestacado(id,false);

        //[Authorize(Roles = "Admin,Trabajador")]
        [HttpPut("destacado/{id}")]
        public IActionResult AddDestacado(int id) => MarcarDestacado(id, true);

        //[Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult MarcarEliminado(int id)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            _context.Productos[id].Eliminado = true;
            _context.Productos[id].Disponible = false;
            _context.Productos[id].Destacado = false;
			_context.Complete();
            return Ok();
        }
        
        [HttpDelete("disponible/{id}")]
        public IActionResult RemoveDisponible(int id) => CambiarDisponibilidad(id,false);

        //[Authorize(Roles = "Admin,Trabajador")]
        [HttpPut("disponible/{id}")]
        public IActionResult AddDisponible(int id) => CambiarDisponibilidad(id, true);

        private IActionResult CambiarDisponibilidad(int id, bool disponible)
        {
            if (!_context.Productos.Exists(id)) return NotFound();
            _context.Productos[id].Disponible = disponible;
            _context.Complete();
            return Ok();
        }
        
    }
}
